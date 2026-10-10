
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { supabaseAdmin } from "@/lib/supabase";
import { sendPaidEmail } from "@/lib/email";

export async function POST(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;

  const { data: o, error: oe } = await supabaseAdmin
    .from("orders")
    .select("*,projects(title)")
    .eq("id", id)
    .single();

  if (oe || !o) {
    return NextResponse.json(
      { error: "Order not found" },
      { status: 404 }
    );
  }

  if (o.status !== "PENDING_REVIEW") {
    return NextResponse.json(
      { error: "Order is not pending review" },
      { status: 409 }
    );
  }

  const { error } = await supabaseAdmin
    .from("orders")
    .update({
      status: "PAID",
      paid_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("Payment approval failed:", error);
    return NextResponse.json(
      { error: "Could not approve payment" },
      { status: 500 }
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    console.error("NEXT_PUBLIC_SITE_URL is missing");
    return NextResponse.json({
      ok: true,
      emailSent: false,
    });
  }

  const download =
    `${siteUrl.replace(/\/$/, "")}/api/download/${o.id}`;

  let emailSent = false;

  try {
    await sendPaidEmail({
      to: o.customer_email,
      name: o.customer_name,
      title: o.projects.title,
      download,
      order: o.order_number,
    });

    emailSent = true;
  } catch (emailError) {
    console.error(
      "Payment approval email failed:",
      emailError
    );
  }

  return NextResponse.json({
    ok: true,
    emailSent,
  });
}
