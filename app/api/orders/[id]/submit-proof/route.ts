
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { safeFileExt } from "@/lib/order";
import { sendProofSubmittedEmail } from "@/lib/email";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const form = await req.formData();

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const paid = Number(form.get("paidAmount"));
    const txn = String(form.get("transactionId") || "").trim();
    const file = form.get("proof");

    if (
      !name ||
      !email ||
      !Number.isFinite(paid) ||
      paid <= 0 ||
      !txn ||
      !(file instanceof File)
    ) {
      return NextResponse.json(
        { error: "All required fields are required." },
        { status: 400 }
      );
    }

    if (file.size > 2 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Proof must be 2MB or smaller." },
        { status: 400 }
      );
    }

    const ext = safeFileExt(file.name);

    if (!ext) {
      return NextResponse.json(
        { error: "Only JPG, PNG, WEBP or PDF proof is allowed." },
        { status: 400 }
      );
    }

    const { data: order, error: orderError } = await supabaseAdmin
      .from("orders")
      .select("*")
      .eq("id", id)
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { error: "Order not found." },
        { status: 404 }
      );
    }

    if (order.status !== "AWAITING_PROOF") {
      return NextResponse.json(
        { error: "Order already submitted or closed." },
        { status: 409 }
      );
    }

    const path = `proofs/${order.order_number}-${crypto.randomUUID()}.${ext}`;

    const upload = await supabaseAdmin.storage
      .from("payment-proofs")
      .upload(path, await file.arrayBuffer(), {
        contentType: file.type || "application/octet-stream",
      });

    if (upload.error) {
      throw upload.error;
    }

    const { error: updateError } = await supabaseAdmin
      .from("orders")
      .update({
        customer_name: name,
        customer_email: email,
        customer_phone: phone || null,
        paid_amount: paid,
        transaction_id: txn,
        proof_path: path,
        status: "PENDING_REVIEW",
      })
      .eq("id", id);

    if (updateError) {
      throw updateError;
    }

    // Fetch the project title for the admin notification.
    const { data: project } = await supabaseAdmin
      .from("projects")
      .select("title")
      .eq("id", order.project_id)
      .maybeSingle();

    // Email failure should not undo a successfully submitted proof.
    try {
      const result = await sendProofSubmittedEmail({
        name,
        email,
        phone,
        title: project?.title || "Project",
        order: order.order_number,
        amount: paid,
        transactionId: txn,
      });

      if (result.error) {
        console.error("Admin email failed:", result.error);
      } else {
        console.log(
          "Admin email accepted by Resend:",
          result.data?.id
        );
      }
    } catch (emailError) {
      console.error("Admin notification error:", emailError);
    }

    return NextResponse.json({
      ok: true,
      message: "Payment proof submitted for review.",
    });
  } catch (error) {
    console.error("Submit payment proof error:", error);

    return NextResponse.json(
      { error: "Could not submit proof." },
      { status: 500 }
    );
  }
}
