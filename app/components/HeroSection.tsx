"use client";

import { TypeAnimation } from "react-type-animation";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TerminalIntro from "./TerminalIntro";
import CurrentStatus from "./CurrentStatus";
import HeroSamurai from "./HeroSamurai";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import { useMediaQuery, usePrefersReducedMotion } from "../hooks/useMediaQuery";
import { useGlitchBurst } from "../hooks/useGlitchBurst";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reducedMotion = usePrefersReducedMotion();
  const isGlitching = useGlitchBurst({
    disabled: reducedMotion,
    severity: "catastrophic",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const samuraiYDesktop = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const samuraiScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const textOpacity = useTransform(
    scrollYProgress,
    [0.82, 1],
    [1, reducedMotion ? 1 : 0]
  );

  const floatY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const floatRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 148,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    }
  };

  const applyTextParallax = isDesktop && !reducedMotion;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-0 lg:min-h-screen flex flex-col justify-start px-4 sm:px-6 lg:px-8 pt-[var(--nav-height)] pb-16 relative overflow-hidden scroll-mt-[var(--nav-height)]"
    >
      {!reducedMotion && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-600/10 to-transparent rounded-full blur-2xl pointer-events-none hidden sm:block"
            style={{ y: floatY1, rotate: floatRotate }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-red-500/15 to-transparent rounded-full blur-xl pointer-events-none hidden sm:block"
            style={{ y: floatY2 }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-16 h-16 border border-red-600/20 rounded-full pointer-events-none hidden md:block"
            style={{ y: floatY1, rotate: floatRotate }}
          />
          <motion.div
            className="absolute top-1/3 right-10 w-2 h-20 bg-gradient-to-b from-red-600/30 to-transparent rounded-full pointer-events-none hidden md:block"
            style={{ y: floatY2 }}
          />
        </>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <motion.div
          className="lg:col-span-7 w-full min-w-0 text-left"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-2xl mx-auto sm:mx-0 sm:max-w-none flex flex-col gap-3 sm:gap-6">
            <motion.div
              className="flex flex-col items-center sm:items-start text-center sm:text-left w-full gap-2 sm:gap-4 lg:gap-5"
              style={
                reducedMotion || !applyTextParallax
                  ? undefined
                  : { opacity: textOpacity }
              }
            >
              <Badge variant="brand">{"// Code Wizard & Problem Solver"}</Badge>

              <h1 className="font-heading font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                  Hello, I&apos;m{" "}
                </span>
                <br className="sm:hidden" />
                <span className="block relative min-h-[2.25em] sm:min-h-[1.5em] w-full max-w-full mx-auto sm:mx-0">
                  <TypeAnimation
                    sequence={[
                      "Gibran Fasha Ghazanfar",
                      1000,
                      "a Software Engineer",
                      1000,
                      "a Fullstack Engineer",
                      1000,
                      "a Backend Engineer",
                      1000,
                      "a Frontend Engineer",
                      1000,
                      "an Ex-Pro Valorant",
                      1000,
                      "an Ex-Pro CS:GO/CS2",
                      1000,
                    ]}
                    wrapper="span"
                    speed={35}
                    repeat={Infinity}
                    className="hero-type-animation text-3xl sm:text-5xl lg:text-6xl text-white"
                  />
                </span>
              </h1>

              <div className="lg:hidden flex justify-center w-full -mt-2 mb-1 sm:mt-5 sm:mb-10">
                <HeroSamurai variant="mobile" isGlitching={isGlitching} />
              </div>
            </motion.div>

            <div className="w-full text-left flex flex-col gap-5 sm:gap-6">
            <TerminalIntro />
            <div className="w-full">
              <h2 className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 text-xl sm:text-2xl mb-3 text-left">
                Current Status
              </h2>
              <CurrentStatus />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
              <Button
                variant="primary"
                className="w-full sm:w-fit"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/19puE_KSbGYpGbYUjkYDnuvzBW5du9bkM/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                View Resume
              </Button>

              <Button
                variant="secondary"
                className="w-full sm:w-fit group"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowDownIcon className="h-4 w-4 motion-safe:group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-5 w-full">
              <Link
                href="https://github.com/gibranfsh"
                className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/gibran-fasha-ghazanfar"
                className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/gibranfg"
                className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
            </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex lg:col-span-5 place-self-center w-full justify-center"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={
            reducedMotion
              ? undefined
              : {
                  y: samuraiYDesktop,
                  scale: samuraiScale,
                  opacity: textOpacity,
                }
          }
        >
          <HeroSamurai variant="desktop" isGlitching={isGlitching} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
