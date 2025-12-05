"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxDividerProps {
  variant?: "wave" | "geometric" | "gradient";
  className?: string;
}

const ParallaxDivider = ({ variant = "geometric", className = "" }: ParallaxDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -70]);
  const y3 = useTransform(scrollYProgress, [0, 1], [70, -30]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  if (variant === "wave") {
    return (
      <div ref={ref} className={`relative h-32 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
          >
            <motion.path
              d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
              style={{ y: y1 }}
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0.1)" />
                <stop offset="50%" stopColor="rgba(220, 38, 38, 0.2)" />
                <stop offset="100%" stopColor="rgba(220, 38, 38, 0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div ref={ref} className={`relative h-24 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent"
          style={{ scaleX: scale, opacity }}
        />
        <motion.div
          className="absolute left-1/4 top-1/2 w-2 h-2 bg-red-500/40 rounded-full"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute right-1/3 top-1/3 w-3 h-3 bg-red-600/30 rounded-full"
          style={{ y: y2 }}
        />
      </div>
    );
  }

  // Default: geometric
  return (
    <div ref={ref} className={`relative h-40 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity }}
      >
        {/* Center line */}
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"
          style={{ scaleX: scale }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute left-[15%] w-8 h-8 border border-red-600/20 rounded-lg"
          style={{ y: y1, rotate: rotate1 }}
        />
        <motion.div
          className="absolute left-[30%] w-4 h-4 bg-red-600/10 rounded-full"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute right-[25%] w-6 h-6 border border-red-500/15 rounded-full"
          style={{ y: y3, rotate: rotate2 }}
        />
        <motion.div
          className="absolute right-[15%] w-3 h-12 bg-gradient-to-b from-red-600/20 to-transparent rounded-full"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute left-[45%] w-2 h-2 bg-red-500/30 rounded-full"
          style={{ y: y3 }}
        />
        <motion.div
          className="absolute right-[40%] w-10 h-10 border border-red-600/10 rotate-45"
          style={{ y: y2, rotate: rotate1 }}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxDivider;
