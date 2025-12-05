"use client";
import Image from "next/image";
import { useGlitch, GlitchHandle } from "react-powerglitch";
import { TypeAnimation } from "react-type-animation";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Samurai image moves slower (parallax effect)
  const samuraiY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const samuraiScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const samuraiOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Text moves faster
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  
  // Floating decorative elements
  const floatY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const floatRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const glitch: GlitchHandle = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 2350,
    },
    glitchTimeSpan: {
      start: 0,
      end: 0.1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex flex-col justify-center pt-16 pb-8 relative overflow-hidden"
    >
      {/* Floating Parallax Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-600/10 to-transparent rounded-full blur-2xl pointer-events-none"
        style={{ y: floatY1, rotate: floatRotate }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-red-500/15 to-transparent rounded-full blur-xl pointer-events-none"
        style={{ y: floatY2 }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-16 h-16 border border-red-600/20 rounded-full pointer-events-none"
        style={{ y: floatY1, rotate: floatRotate }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-2 h-20 bg-gradient-to-b from-red-600/30 to-transparent rounded-full pointer-events-none"
        style={{ y: floatY2 }}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <motion.div
          className="col-span-7 place-self-center text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            Code Wizard & Problem Solver
          </div>

          <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
              Hello, I'm{" "}
            </span>
            <br className="md:hidden" />
            <div className="relative h-[1.5em] sm:h-[1.5em] w-full overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center sm:justify-start w-auto">
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
                  className="whitespace-nowrap text-3xl sm:text-5xl lg:text-6xl text-center sm:text-left" // Added text-center sm:text-left for responsive alignment
                  style={{
                    display: "block",
                    minWidth: "100%",
                    width: "max-content",
                  }}
                />
              </div>
            </div>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 max-w-2xl">
            I'm an enthusiastic, highly motivated, adaptive, eager to learn, and
            grow professionally person. I specialize in building robust web
            applications with modern technologies and delivering seamless user
            experiences.
          </p>

          <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 text-2xl sm:text-3xl mb-4">
            Current Status
          </h2>

          <div className="space-y-4 mb-8">
            {" "}
            <div className="w-full flex flex-row items-start sm:items-center justify-start">
              {" "}
              <div className="bg-red-600/20 p-2 rounded-full mr-3 flex-none mt-1 sm:mt-0">
                {" "}
                <BriefcaseIcon className="h-5 w-5 text-red-500" />
              </div>
              <div className="flex-1">
                {" "}
                <span className="text-white text-sm sm:text-base block">
                  {" "}
                  <span className="font-bold relative inline-block px-2 py-1 rounded bg-gradient-to-r from-red-900 to-red-800 mb-1">
                    {" "}
                    <span className="relative z-10">
                      Lead Fullstack AI Engineer
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded opacity-30 animate-pulse blur-[4px]"></span>
                    <span className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded opacity-20 animate-pulse blur-[8px]"></span>
                  </span>
                  <span className="block sm:inline mt-1 sm:mt-0 sm:ml-1">
                    {" "}
                    @ Saakuru Labs & SiloTech.xyz
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full flex flex-row items-start sm:items-center justify-start">
              {" "}
              <div className="bg-red-600/20 p-2 rounded-full mr-3 flex-none mt-1 sm:mt-0">
                {" "}
                <AcademicCapIcon className="h-5 w-5 text-red-500" />
              </div>
              <div className="flex-1">
                {" "}
                <span className="text-white text-sm sm:text-base">
                  Graduated IST Student @{" "}
                  <span className="font-bold">Institut Teknologi Bandung</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-red-600/40"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/19puE_KSbGYpGbYUjkYDnuvzBW5du9bkM/view?usp=sharing",
                  "_blank"
                )
              }
            >
              View Resume
            </button>

            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full border border-white/30 hover:border-white/60 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 group"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowDownIcon className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center sm:justify-start mt-8 gap-5">
            <Link
              href="https://github.com/gibranfsh"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gibran-fasha-ghazanfar"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/gibranfg"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="col-span-5 place-self-center pl-12 sm:pl-0 mt-8 lg:mt-0 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ y: samuraiY, scale: samuraiScale, opacity: samuraiOpacity }}
        >
          <div
            className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center"
            ref={glitch.ref}
          >
            <div className="absolute w-full h-full bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <Image
              src="/images/gijax_samurai.svg"
              alt="Samurai"
              className="relative z-10"
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
