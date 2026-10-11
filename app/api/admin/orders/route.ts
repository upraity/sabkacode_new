
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    if (!(await isAdmin())) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("orders")
      .select("*, projects(title, slug)")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Admin orders fetch failed:", error);

      return NextResponse.json(
        { error: "Server error" },
        { status: 500 }
      );
    }

    const orders = await Promise.all(
      (data || []).map(async (order) => {
        if (!order.proof_path) {
          return {
            ...order,
            proofUrl: null,
          };
        }

        const { data: proof, error: proofError } =
          await supabaseAdmin.storage
            .from("payment-proofs")
            .createSignedUrl(order.proof_path, 300);

        if (proofError || !proof?.signedUrl) {
          console.error("Payment proof URL generation failed:", {
            orderId: order.id,
            proofPath: order.proof_path,
            error: proofError?.message,
          });

          return {
            ...order,
            proofUrl: null,
          };
        }

        return {
          ...order,
          proofUrl: proof.signedUrl,
        };
      })
    );

    return NextResponse.json({ orders });
  } catch (error) {
    console.error("Admin orders API failed:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
