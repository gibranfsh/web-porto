import { NextResponse } from "next/server";
import { getVisitorStats } from "../../lib/visitors/kv";

export async function GET() {
  try {
    const stats = await getVisitorStats();
    return NextResponse.json(stats, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch {
    return NextResponse.json(
      { total: 0, unique: 0, countryCount: 0, byCountry: {} },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  }
}
