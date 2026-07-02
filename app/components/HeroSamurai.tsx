"use client";

import Image from "next/image";
import CyberpunkGlitch from "./CyberpunkGlitch";

type HeroSamuraiProps = {
  readonly variant: "mobile" | "desktop";
  readonly isGlitching: boolean;
};

export default function HeroSamurai({ variant, isGlitching }: HeroSamuraiProps) {
  const isMobile = variant === "mobile";
  const sizeClass = isMobile
    ? "w-[200px] h-[268px] sm:w-[240px] sm:h-[320px]"
    : "w-[380px] h-[507px] lg:w-[400px] lg:h-[533px]";

  return (
    <div
      className={`${sizeClass} relative flex items-center justify-center shrink-0`}
    >
      <div
        className={`absolute bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-full filter opacity-30 motion-safe:animate-pulse transition-[filter] duration-150 ${isMobile ? "inset-x-4 top-8 bottom-12 blur-2xl" : "inset-x-8 top-6 bottom-28 blur-2xl"} ${isGlitching ? "brightness-125" : ""}`}
      />
      <CyberpunkGlitch
        className="w-full h-full"
        severity="catastrophic"
        isBursting={isGlitching}
      >
        <Image
          src="/images/gijax_samurai.svg"
          alt="Samurai"
          className="relative z-10 w-full h-full object-contain"
          width={400}
          height={533}
          priority={variant === "desktop"}
        />
      </CyberpunkGlitch>
    </div>
  );
}
