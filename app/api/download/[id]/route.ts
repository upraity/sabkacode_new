
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { data: order, error: orderError } = await supabaseAdmin
      .from("orders")
      .select("status, projects(download_url)")
      .eq("id", id)
      .single();

    if (orderError) {
      console.error("Download order lookup failed:", orderError);

      return NextResponse.json(
        { error: "Could not find order." },
        { status: 500 }
      );
    }

    if (!order || order.status !== "PAID") {
      return NextResponse.json(
        { error: "Download unavailable. Payment may not be verified." },
        { status: 403 }
      );
    }

    const project = Array.isArray(order.projects)
      ? order.projects[0]
      : order.projects;

    if (!project?.download_url) {
      console.error("Project download_url is missing:", id);

      return NextResponse.json(
        { error: "Project download file is not configured." },
        { status: 404 }
      );
    }

    const path = project.download_url.trim();

    const { data, error: storageError } = await supabaseAdmin.storage
      .from("projects");

    if (storageError || !data?.signedUrl) {
      console.error("Signed URL generation failed:", {
        orderId: id,
        path,
        error: storageError,
      });

      return NextResponse.json(
        { error: "Could not create download link. Please contact support." },
        { status: 500 }
      );
    }

    return NextResponse.redirect(data.signedUrl);
  } catch (error) {
    console.error("Download route exception:", error);

    return NextResponse.json(
      { error: "Could not create download link." },
      { status: 500 }
    );
  }
}
