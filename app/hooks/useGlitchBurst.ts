"use client";

import { useEffect, useState } from "react";

export type GlitchSeverity = "normal" | "catastrophic";

const SEVERITY_PRESETS: Record<
  GlitchSeverity,
  { minIdleMs: number; maxIdleMs: number; burstDurationMs: number }
> = {
  normal: { minIdleMs: 1500, maxIdleMs: 2500, burstDurationMs: 150 },
  catastrophic: { minIdleMs: 2000, maxIdleMs: 3500, burstDurationMs: 300 },
};

interface UseGlitchBurstOptions {
  minIdleMs?: number;
  maxIdleMs?: number;
  burstDurationMs?: number;
  disabled?: boolean;
  severity?: GlitchSeverity;
}

export function useGlitchBurst({
  disabled = false,
  severity = "normal",
  minIdleMs,
  maxIdleMs,
  burstDurationMs,
}: UseGlitchBurstOptions = {}): boolean {
  const preset = SEVERITY_PRESETS[severity];
  const idleMin = minIdleMs ?? preset.minIdleMs;
  const idleMax = maxIdleMs ?? preset.maxIdleMs;
  const burstMs = burstDurationMs ?? preset.burstDurationMs;

  const [isBursting, setIsBursting] = useState(false);

  useEffect(() => {
    if (disabled) {
      setIsBursting(false);
      return;
    }

    let idleTimeout: ReturnType<typeof setTimeout>;
    let burstTimeout: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      const idle = idleMin + Math.random() * (idleMax - idleMin);
      idleTimeout = setTimeout(() => {
        setIsBursting(true);
        burstTimeout = setTimeout(() => {
          setIsBursting(false);
          scheduleNext();
        }, burstMs);
      }, idle);
    };

    scheduleNext();

    return () => {
      clearTimeout(idleTimeout);
      clearTimeout(burstTimeout);
    };
  }, [disabled, idleMin, idleMax, burstMs]);

  return isBursting;
}
