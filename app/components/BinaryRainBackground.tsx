"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

type Column = {
  x: number;
  y: number;
  speed: number;
  baseSpeed: number;
  chars: string[];
  length: number;
  stallFrames: number;
  xJitter: number;
};

type UpdateContext = {
  isBursting: boolean;
  height: number;
  lineHeight: number;
  mobile: boolean;
};

const CHARS = "01";
const TRAIL_FADE = "rgba(0, 0, 0, 0.06)";
const TRAIL_FADE_BURST = "rgba(0, 0, 0, 0.05)";
const HEAD_COLOR = "rgba(239, 68, 68, 0.24)";
const HEAD_BURST_COLOR = "rgba(248, 113, 113, 0.35)";

const FLIP_TRAIL_BASE = 0.03;
const FLIP_HEAD_BASE = 0.1;
const FLIP_TRAIL_BURST = 0.08;
const FLIP_HEAD_BURST = 0.22;

const BURST_IDLE_MIN_MS = 2000;
const BURST_IDLE_MAX_MS = 3500;
const BURST_DURATION_MIN_MS = 250;
const BURST_DURATION_MAX_MS = 350;

function randomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)] ?? "0";
}

function flipChar(char: string): string {
  return char === "0" ? "1" : "0";
}

function randomBaseSpeed(): number {
  return 0.35 + Math.random() * 0.85;
}

function createColumn(
  x: number,
  lineHeight: number,
  height: number,
  lengthOverride?: number
): Column {
  const length = lengthOverride ?? Math.floor(height / lineHeight) + 2;
  const baseSpeed = randomBaseSpeed();

  return {
    x,
    y: Math.random() * -height,
    speed: baseSpeed,
    baseSpeed,
    chars: Array.from({ length }, randomChar),
    length,
    stallFrames: 0,
    xJitter: 0,
  };
}

function buildColumns(
  width: number,
  height: number,
  lineHeight: number
): Column[] {
  const columnCount = width < 640 ? 16 : 28;
  const spacing = width / columnCount;
  return Array.from({ length: columnCount }, (_, index) =>
    createColumn(spacing * index + spacing * 0.35, lineHeight, height)
  );
}

function resetColumn(column: Column, lineHeight: number, height: number) {
  const lengthDelta = Math.random() < 0.4 ? (Math.random() < 0.5 ? -1 : 1) : 0;
  const length = Math.max(
    4,
    Math.min(
      Math.floor(height / lineHeight) + 3,
      column.length + lengthDelta
    )
  );

  column.y = -length * lineHeight;
  column.length = length;
  column.chars = Array.from({ length }, randomChar);
  column.baseSpeed = randomBaseSpeed();
  column.speed = column.baseSpeed;
  column.stallFrames = 0;
  column.xJitter = 0;
}

function updateColumns(columns: Column[], ctx: UpdateContext) {
  const flipScale = ctx.mobile ? 0.85 : 1;
  const trailFlip = (ctx.isBursting ? FLIP_TRAIL_BURST : FLIP_TRAIL_BASE) * flipScale;
  const headFlip = (ctx.isBursting ? FLIP_HEAD_BURST : FLIP_HEAD_BASE) * flipScale;
  const speedMultiplier = ctx.isBursting ? 1.2 + Math.random() * 0.3 : 1;

  for (const column of columns) {
    if (ctx.isBursting) {
      column.xJitter = (Math.random() - 0.5) * 4;
    } else {
      column.xJitter = 0;
    }

    for (let i = 0; i < column.length; i++) {
      const charY = column.y + i * ctx.lineHeight;
      if (charY < -ctx.lineHeight || charY > ctx.height + ctx.lineHeight) {
        continue;
      }

      const isHead = i === column.length - 1;
      const flipRate = isHead ? headFlip : trailFlip;
      if (Math.random() < flipRate) {
        column.chars[i] = flipChar(column.chars[i] ?? "0");
      }
    }

    if (column.stallFrames > 0) {
      column.stallFrames -= 1;
      column.speed = 0;
    } else {
      if (Math.random() < 0.002) {
        column.stallFrames = 2 + Math.floor(Math.random() * 5);
        column.speed = 0;
      } else {
        column.speed = column.baseSpeed * (0.85 + Math.random() * 0.3) * speedMultiplier;
      }
    }

    column.y += column.speed;
    if (column.y > ctx.height) {
      resetColumn(column, ctx.lineHeight, ctx.height);
    }
  }
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  columns: Column[],
  width: number,
  height: number,
  fontSize: number,
  lineHeight: number,
  animate: boolean,
  isBursting: boolean
) {
  ctx.fillStyle = animate ? (isBursting ? TRAIL_FADE_BURST : TRAIL_FADE) : "rgba(0, 0, 0, 1)";
  ctx.fillRect(0, 0, width, height);

  ctx.font = `${fontSize}px var(--font-jetbrains-mono), ui-monospace, monospace`;
  ctx.textBaseline = "top";

  const trailMin = 0.1;
  const trailMax = 0.18;

  for (const column of columns) {
    const drawX = column.x + (animate && isBursting ? column.xJitter : 0);

    for (let i = 0; i < column.length; i++) {
      const charY = column.y + i * lineHeight;
      if (charY < -lineHeight || charY > height + lineHeight) {
        continue;
      }

      const isHead = animate && i === column.length - 1;
      const trailProgress = column.length <= 1 ? 1 : i / (column.length - 1);
      const trailAlpha = trailMin + (trailMax - trailMin) * trailProgress;

      ctx.fillStyle = isHead
        ? isBursting
          ? HEAD_BURST_COLOR
          : HEAD_COLOR
        : `rgba(220, 38, 38, ${trailAlpha})`;
      ctx.fillText(column.chars[i] ?? "0", drawX, charY);
    }
  }
}

export default function BinaryRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const columnsRef = useRef<Column[]>([]);
  const rafRef = useRef<number>(0);
  const isBurstingRef = useRef(false);
  const burstIdleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const burstEndTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isScrollingRef = useRef(false);
  const scrollEndTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    let idleCallbackId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const start = () => setActive(true);

    if (typeof window.requestIdleCallback === "function") {
      idleCallbackId = window.requestIdleCallback(start);
    } else {
      timeoutId = setTimeout(start, 100);
    }

    return () => {
      if (idleCallbackId !== null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    if (!active || reducedMotion) {
      return;
    }

    const onScroll = () => {
      isScrollingRef.current = true;
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
      }
      scrollEndTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
      }
    };
  }, [active, reducedMotion]);

  useEffect(() => {
    if (!active || reducedMotion) {
      return;
    }

    const scheduleBurst = () => {
      const idle =
        BURST_IDLE_MIN_MS +
        Math.random() * (BURST_IDLE_MAX_MS - BURST_IDLE_MIN_MS);

      burstIdleTimeoutRef.current = setTimeout(() => {
        isBurstingRef.current = true;

        const burstDuration =
          BURST_DURATION_MIN_MS +
          Math.random() * (BURST_DURATION_MAX_MS - BURST_DURATION_MIN_MS);

        burstEndTimeoutRef.current = setTimeout(() => {
          isBurstingRef.current = false;
          scheduleBurst();
        }, burstDuration);
      }, idle);
    };

    scheduleBurst();

    return () => {
      if (burstIdleTimeoutRef.current) {
        clearTimeout(burstIdleTimeoutRef.current);
      }
      if (burstEndTimeoutRef.current) {
        clearTimeout(burstEndTimeoutRef.current);
      }
      isBurstingRef.current = false;
    };
  }, [active, reducedMotion]);

  useEffect(() => {
    if (!active) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let width = 0;
    let height = 0;
    let fontSize = 12;
    let lineHeight = 16;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      fontSize = width < 640 ? 12 : 14;
      lineHeight = fontSize * 1.35;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columnsRef.current = buildColumns(width, height, lineHeight);
      drawFrame(
        ctx,
        columnsRef.current,
        width,
        height,
        fontSize,
        lineHeight,
        !reducedMotion,
        false
      );
    };

    const tick = () => {
      if (document.hidden || reducedMotion) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (isScrollingRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const isBursting = isBurstingRef.current;
      updateColumns(columnsRef.current, {
        isBursting,
        height,
        lineHeight,
        mobile: width < 640,
      });
      drawFrame(
        ctx,
        columnsRef.current,
        width,
        height,
        fontSize,
        lineHeight,
        true,
        isBursting
      );
      rafRef.current = requestAnimationFrame(tick);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.documentElement);
    window.addEventListener("resize", resize);

    if (!reducedMotion) {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [active, reducedMotion]);

  if (!active) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.32)_100%)]" />
    </div>
  );
}
