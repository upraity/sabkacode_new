
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const adminToken = process.env.FRONTPAGE_ADMIN_TOKEN;

    if (!adminToken) {
      return NextResponse.json(
        { error: "Admin authentication is not configured." },
        { status: 500 }
      );
    }

    const providedToken = req.headers.get("x-admin-token");

    if (
      !providedToken ||
      providedToken.length !== adminToken.length ||
      providedToken !== adminToken
    ) {
      return NextResponse.json(
        { error: "Unauthorized access." },
        { status: 401 }
      );
    }

    // Fetch the latest 100 saved submissions.
    const { data, error, count } = await supabaseAdmin
      .from("fp_submissions")
      .select("id, cover_slug, data, created_at", {
        count: "exact",
      })
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) {
      console.error("Frontpage admin query failed:", error);

      return NextResponse.json(
        { error: "Unable to fetch submissions." },
        { status: 500 }
      );
    }

    // Count submissions created today (UTC).
    const now = new Date();
    const startOfDay = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate()
      )
    );

    const { count: todayCount, error: todayError } =
      await supabaseAdmin
        .from("fp_submissions")
        .select("id", { count: "exact", head: true })
        .gte("created_at", startOfDay.toISOString());

    if (todayError) {
      console.error("Frontpage daily count failed:", todayError);

      return NextResponse.json(
        { error: "Unable to fetch daily statistics." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      total: count ?? 0,
      today: todayCount ?? 0,
      submissions: data ?? [],
    });
  } catch (error) {
    console.error("Frontpage admin error:", error);

    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

