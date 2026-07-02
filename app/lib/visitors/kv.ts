import { createHash } from "node:crypto";
import { createClient, type VercelKV } from "@vercel/kv";
import {
  EMPTY_VISITOR_STATS,
  VISITOR_KEYS,
  type VisitorStats,
} from "./types";

let writeClient: VercelKV | null = null;
let readClient: VercelKV | null = null;

export function isKvConfigured(): boolean {
  return Boolean(
    process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
  );
}

function getWriteClient(): VercelKV {
  if (!writeClient) {
    writeClient = createClient({
      url: process.env.KV_REST_API_URL!,
      token: process.env.KV_REST_API_TOKEN!,
    });
  }
  return writeClient;
}

function getReadClient(): VercelKV {
  if (!readClient) {
    const token =
      process.env.KV_REST_API_READ_ONLY_TOKEN ??
      process.env.KV_REST_API_TOKEN!;
    readClient = createClient({
      url: process.env.KV_REST_API_URL!,
      token,
    });
  }
  return readClient;
}

function parseCount(value: unknown): number {
  if (typeof value === "number") return value;
  if (typeof value === "string") return Number.parseInt(value, 10) || 0;
  return 0;
}

function parseCountryHash(
  raw: Record<string, unknown> | null
): Record<string, number> {
  if (!raw) return {};
  const result: Record<string, number> = {};
  for (const [code, count] of Object.entries(raw)) {
    if (code === "XX") continue;
    result[code] = parseCount(count);
  }
  return result;
}

export async function recordVisit(
  country: string,
  visitorHash: string
): Promise<void> {
  if (!isKvConfigured()) return;

  const kv = getWriteClient();
  const iso = country.toUpperCase().slice(0, 2) || "XX";

  await kv.incr(VISITOR_KEYS.total);
  await kv.sadd(VISITOR_KEYS.uniqueAll, visitorHash);
  if (iso !== "XX") {
    await kv.hincrby(VISITOR_KEYS.countries, iso, 1);
  }
}

export async function getVisitorStats(): Promise<VisitorStats> {
  if (!isKvConfigured()) return EMPTY_VISITOR_STATS;

  const kv = getReadClient();
  const [total, unique, countriesRaw] = await Promise.all([
    kv.get<number | string>(VISITOR_KEYS.total),
    kv.scard(VISITOR_KEYS.uniqueAll),
    kv.hgetall<Record<string, string>>(VISITOR_KEYS.countries),
  ]);

  const byCountry = parseCountryHash(countriesRaw);
  const countryCount = Object.keys(byCountry).length;

  return {
    total: parseCount(total),
    unique: parseCount(unique),
    countryCount,
    byCountry,
  };
}

export function hashVisitorFingerprint(
  ip: string,
  userAgent: string
): string {
  const salt = process.env.VISITOR_SALT ?? "web-porto-dev-salt";
  return createHash("sha256")
    .update(`${ip}:${userAgent}:${salt}`)
    .digest("hex");
}
