"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

export default function ScrollArrow() {
  const reducedMotion = usePrefersReducedMotion();

  const scrollToTechStacks = () => {
    const section = document.getElementById("tech_stacks");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 136,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <div
      className={`scroll-indicator-wrap my-16 sm:my-24 lg:my-32 ${reducedMotion ? "" : "motion-safe:animate-cyber-scroll-bounce"}`}
    >
      <button
        type="button"
        onClick={scrollToTechStacks}
        aria-label="Scroll to tech stacks section"
        className="scroll-indicator-cyber mx-auto"
      >
        <span className="scroll-indicator-label">// SCROLL</span>
        <ChevronDownIcon className="scroll-indicator-icon" aria-hidden="true" />
      </button>
      <div className="scroll-indicator-tail" aria-hidden="true" />
    </div>
  );
}
