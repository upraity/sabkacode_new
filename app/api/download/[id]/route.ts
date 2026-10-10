```ts
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

    if (orderError || !order) {
      console.error("Download order lookup failed:", orderError);

      return NextResponse.json(
        { error: "Order not found." },
        { status: 404 }
      );
    }

    if (order.status !== "PAID") {
      return NextResponse.json(
        { error: "Download unavailable. Payment is not verified." },
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

    const downloadUrl = project.download_url.trim();

    // Accept a bucket-relative path or a Supabase Storage URL.
    let path = downloadUrl;

    if (downloadUrl.startsWith("https://")) {
      try {
        const url = new URL(downloadUrl);
        const match = url.pathname.match(
          /\/storage\/v1\/object\/(?:sign|public)\/projects\/(.+)$/
        );

        if (match) {
          path = decodeURIComponent(match[1]);
        } else {
          return NextResponse.json(
            { error: "Invalid Supabase Storage URL in download_url." },
            { status: 400 }
          );
        }
      } catch {
        return NextResponse.json(
          { error: "Invalid download URL." },
          { status: 400 }
        );
      }
    }

    const { data, error: storageError } = await supabaseAdmin.storage
      .from("projects")
      .createSignedUrl(path, 300);

    if (storageError || !data?.signedUrl) {
      console.error("Signed URL generation failed:", {
        orderId: id,
        bucket: "projects",
        path,
        error: storageError?.message,
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
```
