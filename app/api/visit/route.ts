import { geolocation } from "@vercel/functions";
import { NextResponse } from "next/server";
import {
  hashVisitorFingerprint,
  isKvConfigured,
  recordVisit,
} from "../../lib/visitors/kv";

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  if (!isKvConfigured()) {
    return new NextResponse(null, { status: 204 });
  }

  const { country } = geolocation(request);
  const isoCountry = country?.toUpperCase().slice(0, 2) ?? "XX";
  const ip = getClientIp(request);
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const visitorHash = hashVisitorFingerprint(ip, userAgent);

  try {
    await recordVisit(isoCountry, visitorHash);
    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "Failed to record visit" }, { status: 500 });
  }
}
