"use client";

import type { VisitorStats } from "../../lib/visitors/types";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

type VisitorCounterBadgeProps = {
  readonly stats: VisitorStats;
  readonly loading?: boolean;
};

function formatCount(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export default function VisitorCounterBadge({
  stats,
  loading = false,
}: VisitorCounterBadgeProps) {
  const reducedMotion = usePrefersReducedMotion();

  const total = loading ? "—" : formatCount(stats.total);
  const unique = loading ? "—" : formatCount(stats.unique);
  const countries = loading ? "—" : formatCount(stats.countryCount);

  return (
    <div
      className="visitor-counter-strip"
      role="status"
      aria-live="polite"
      aria-label={`${stats.total} visits, ${stats.unique} unique visitors, ${stats.countryCount} countries`}
    >
      <span className="inline-flex items-center gap-1.5 shrink-0">
        <span
          className={`badge-cyber-dot text-red-500 ${reducedMotion ? "" : "motion-safe:animate-pulse"}`}
          aria-hidden
        >
          ●
        </span>
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-red-400">
          Live
        </span>
      </span>
      <span className="visitor-counter-divider" aria-hidden />
      <span className="font-mono text-xs sm:text-sm text-zinc-300 tabular-nums">
        <span className="text-white">{total}</span> visits
        <span className="text-zinc-600 mx-1.5" aria-hidden>
          ·
        </span>
        <span className="text-white">{unique}</span> unique
        <span className="text-zinc-600 mx-1.5" aria-hidden>
          ·
        </span>
        <span className="text-white">{countries}</span> countries
      </span>
    </div>
  );
}
