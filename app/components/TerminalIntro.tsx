"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery, usePrefersReducedMotion } from "../hooks/useMediaQuery";

export const BIO_TEXT =
  "I'm an enthusiastic, highly motivated, adaptive, eager to learn, and grow professionally person. I specialize in building distributed backend systems and fullstack products, and AI-powered applications with modern technologies and delivering seamless user experiences.";

const STATUS_LINE =
  "building distributed backend systems and fullstack products, and AI-powered applications";

function measureCharWidth(font: string, fontSize: number): number {
  if (typeof document === "undefined") {
    return fontSize * 0.6;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    return fontSize * 0.6;
  }

  context.font = font;
  const sample = "abcdefghijklmnopqrstuvwxyz0123456789";
  return context.measureText(sample).width / sample.length;
}

function wrapText(text: string, maxLength: number): string[] {
  if (maxLength < 8) {
    return [text];
  }

  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  const pushCurrent = () => {
    if (current) {
      lines.push(current);
      current = "";
    }
  };

  for (const word of words) {
    if (word.length > maxLength) {
      pushCurrent();
      for (let index = 0; index < word.length; index += maxLength) {
        lines.push(word.slice(index, index + maxLength));
      }
      continue;
    }

    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  pushCurrent();
  return lines.length > 0 ? lines : [text];
}

function asLines(
  kind: TerminalStep["kind"],
  text: string,
  maxLength: number
): TerminalStep[] {
  return wrapText(text, maxLength).map((line) => ({ kind, text: line }));
}

type TerminalStep =
  | { kind: "boot"; text: string }
  | { kind: "prompt"; text: string }
  | { kind: "output"; text: string }
  | { kind: "comment"; text: string };

function prompt(cmd: string, compact: boolean): string {
  return compact ? `$ ${cmd}` : `gibran@portfolio:~$ ${cmd}`;
}

function buildOkOutput(text: string, maxLength: number): TerminalStep[] {
  const prefix = "[OK] ";
  const firstLineBudget = Math.max(8, maxLength - prefix.length);

  if (`${prefix}${text}`.length <= maxLength) {
    return [{ kind: "output", text: `${prefix}${text}` }];
  }

  const wrapped = wrapText(text, firstLineBudget);
  return wrapped.map((line, index) => ({
    kind: "output" as const,
    text: index === 0 ? `${prefix}${line}` : line,
  }));
}

function buildSteps(wrapLength: number, compactPrompt: boolean): TerminalStep[] {
  const bioLines = wrapText(BIO_TEXT, wrapLength);

  return [
    ...asLines("boot", ">>> initializing portfolio.sys...", wrapLength),
    ...asLines("prompt", prompt("whoami", compactPrompt), wrapLength),
    ...buildOkOutput("Gibran Fasha Ghazanfar", wrapLength),
    ...asLines("prompt", prompt("cat about.txt", compactPrompt), wrapLength),
    ...bioLines.map((line) => ({ kind: "output" as const, text: line })),
    ...asLines("prompt", prompt("echo $STATUS", compactPrompt), wrapLength),
    ...buildOkOutput(STATUS_LINE, wrapLength),
  ];
}

function useWrapLength(
  containerRef: React.RefObject<HTMLDivElement | null>,
  fallback: number
) {
  const [wrapLength, setWrapLength] = useState(fallback);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) {
      return;
    }

    const measure = () => {
      const style = getComputedStyle(el);
      const fontSize = Number.parseFloat(style.fontSize) || 9;
      const fontFamily = style.fontFamily;
      const font = `${style.fontWeight} ${fontSize}px ${fontFamily}`;
      const padding =
        Number.parseFloat(style.paddingLeft) +
        Number.parseFloat(style.paddingRight);
      const innerWidth = el.clientWidth - padding;
      const charWidth = measureCharWidth(font, fontSize);
      const chars = Math.max(28, Math.floor(innerWidth / charWidth) - 2);
      setWrapLength(chars);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [containerRef]);

  return wrapLength;
}

function useTerminalSequence(steps: TerminalStep[], reducedMotion: boolean) {
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setStepIndex(0);
    setCharIndex(0);
    setDone(reducedMotion);
  }, [steps, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || done) {
      return;
    }

    const currentStep = steps[stepIndex];
    if (!currentStep) {
      setDone(true);
      return;
    }

    const isPrompt = currentStep.kind === "prompt" || currentStep.kind === "boot";
    const delay = isPrompt ? 28 : 18;
    const pauseAfterLine = isPrompt ? 400 : 280;

    if (charIndex < currentStep.text.length) {
      const timer = setTimeout(() => setCharIndex((value) => value + 1), delay);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      if (stepIndex >= steps.length - 1) {
        setDone(true);
        return;
      }
      setStepIndex((value) => value + 1);
      setCharIndex(0);
    }, pauseAfterLine);

    return () => clearTimeout(timer);
  }, [stepIndex, charIndex, done, reducedMotion, steps]);

  const visibleLines = reducedMotion
    ? steps.map((step) => ({
        ...step,
        visibleText: step.text,
        isActive: false,
      }))
    : steps.slice(0, stepIndex + 1).map((step, index) => {
        const isActive = index === stepIndex && !done;
        let visibleText = "";
        if (isActive) {
          visibleText = step.text.slice(0, charIndex);
        } else if (index <= stepIndex) {
          visibleText = step.text;
        }

        return { ...step, visibleText, isActive };
      });

  return { visibleLines, done: reducedMotion || done };
}

function lineClassName(kind: TerminalStep["kind"]): string {
  switch (kind) {
    case "boot":
      return "text-red-600/80 terminal-prompt-glow";
    case "prompt":
      return "text-red-500 terminal-prompt-glow";
    case "comment":
      return "text-zinc-600";
    default:
      return "text-zinc-400";
  }
}

export default function TerminalIntro() {
  const reducedMotion = usePrefersReducedMotion();
  const isSm = useMediaQuery("(min-width: 640px)");
  const bodyRef = useRef<HTMLDivElement>(null);
  const wrapLength = useWrapLength(bodyRef, isSm ? 52 : 42);
  const steps = useMemo(
    () => buildSteps(wrapLength, !isSm),
    [wrapLength, isSm]
  );
  const { visibleLines, done } = useTerminalSequence(steps, reducedMotion);
  const idlePrompt = isSm ? "gibran@portfolio:~$" : "$";

  return (
    <div className="terminal-hacker w-full min-w-0 overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-1.5 sm:py-2 border-b border-red-600/30 bg-black font-mono text-[8px] sm:text-xs">
        <span className="text-red-500/90">[root@portfolio]</span>
        <span className="flex items-center gap-1 text-red-500">
          <span className="motion-safe:animate-pulse">●</span>
          <span className="hidden sm:inline">REC</span>
        </span>
        <span className="text-zinc-600 hidden sm:inline">{"// SECURE_SHELL"}</span>
      </div>

      <div
        ref={bodyRef}
        className="terminal-body relative p-2.5 sm:p-4 overflow-x-hidden terminal-scanlines-hacker font-mono text-[9px] leading-[1.35] sm:text-sm sm:leading-[1.35]"
      >
        <div
          aria-hidden="true"
          className="invisible pointer-events-none select-none"
        >
          {steps.map((step, index) => (
            <div
              key={`sizer-${step.kind}-${index}-${step.text}`}
              className={`terminal-line ${lineClassName(step.kind)}`}
            >
              {step.text}
            </div>
          ))}
          <div className={`terminal-line ${lineClassName("prompt")}`}>
            {idlePrompt}
          </div>
          <div className={`terminal-line ${lineClassName("comment")}`}>
            {"// session ready"}
          </div>
        </div>

        <div className="absolute inset-0 p-2.5 sm:p-4 overflow-x-hidden">
          {visibleLines.map((line, index) => (
            <div
              key={`${line.kind}-${index}-${line.text}`}
              className={`terminal-line ${lineClassName(line.kind)}`}
            >
              {line.visibleText}
              {line.isActive ? (
                <span className="terminal-cursor text-red-500">█</span>
              ) : null}
            </div>
          ))}
          {done ? (
            <>
              <div className={`terminal-line ${lineClassName("prompt")}`}>
                {idlePrompt}
                <span className="terminal-cursor text-red-500">█</span>
              </div>
              <div className={`terminal-line ${lineClassName("comment")}`}>
                {"// session ready"}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
