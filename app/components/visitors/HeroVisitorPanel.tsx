"use client";

import dynamic from "next/dynamic";
import type { VisitorStats } from "../../lib/visitors/types";
import VisitorCounterBadge from "./VisitorCounterBadge";

const VisitorWorldMap = dynamic(() => import("./VisitorWorldMap"), {
  ssr: false,
  loading: () => (
    <div className="visitor-map-cyber visitor-map-cyber-compact w-full animate-pulse min-h-[140px]" />
  ),
});

type HeroVisitorPanelProps = {
  readonly stats: VisitorStats;
  readonly loading?: boolean;
  readonly className?: string;
};

export default function HeroVisitorPanel({
  stats,
  loading = false,
  className = "",
}: HeroVisitorPanelProps) {
  return (
    <div className={`hero-visitor-panel ${className}`.trim()}>
      <VisitorCounterBadge stats={stats} loading={loading} />
      <VisitorWorldMap stats={stats} compact />
    </div>
  );
}
