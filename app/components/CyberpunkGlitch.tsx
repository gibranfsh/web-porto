"use client";

import { useGlitchBurst, type GlitchSeverity } from "../hooks/useGlitchBurst";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

interface CyberpunkGlitchProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly severity?: GlitchSeverity;
  readonly isBursting?: boolean;
}

export default function CyberpunkGlitch({
  children,
  className = "",
  severity = "catastrophic",
  isBursting: isBurstingProp,
}: CyberpunkGlitchProps) {
  const reducedMotion = usePrefersReducedMotion();
  const isBurstingInternal = useGlitchBurst({
    disabled: reducedMotion || isBurstingProp !== undefined,
    severity,
  });
  const isBursting = isBurstingProp ?? isBurstingInternal;

  return (
    <div
      className={`cyberpunk-glitch group relative ${className}`}
      data-glitching={isBursting ? "true" : undefined}
      data-severity={severity}
    >
      <div className="glitch-layer glitch-layer-red" aria-hidden="true">
        {children}
      </div>
      <div className="glitch-layer glitch-layer-crimson" aria-hidden="true">
        {children}
      </div>
      <div className="glitch-layer glitch-layer-base">{children}</div>
      <div className="glitch-scanlines" aria-hidden="true" />
      <div className="glitch-noise" aria-hidden="true" />
      <div className="glitch-tear glitch-tear-1" aria-hidden="true" />
      <div className="glitch-tear glitch-tear-2" aria-hidden="true" />
      <div className="glitch-tear glitch-tear-3" aria-hidden="true" />
      <div className="glitch-tear glitch-tear-4" aria-hidden="true" />
    </div>
  );
}
