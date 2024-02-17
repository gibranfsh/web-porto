"use client";
import Image from "next/image";
import { useGlitch, GlitchHandle } from "react-powerglitch";
import { TypeAnimation } from "react-type-animation";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
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

  return (
    <section id="about">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span className="text-transparent bg-clip-text bg-red-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Gibran Fasha Ghazanfar",
                1000,
                "Software Engineer",
                1000,
                "Fullstack Engineer",
                1000,
                "Backend Engineer",
                1000,
                "Frontend Engineer",
                1000,
                "Ex-Pro Valorant",
                1000,
                "Ex-Pro CS:GO/CS2",
                1000,
              ]}
              wrapper="span"
              speed={35}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-md lg:text-lg mb-6">
            I'm an enthusiastic, highly motivated, adaptive, eager to learn, and
            grow professionally person. I'm also familiar with various aspects
            of software engineering, web development, database management,
            artifical intelligence, machine learning, deep learning, cyber
            security, computer networks, project management and other related IT
            fields because of my Information and System Technology background. I
            also have a good problem-solving and collaborative skills proven by
            my experience of participating in various competitions and
            activities.
          </p>
          <h1 className="font-bold text-transparent bg-clip-text bg-red-600 text-2xl sm:text-3xl mb-4">
            Current Status
          </h1>
          <div className="flex flex-row items-center justify-center sm:justify-start">
            <BriefcaseIcon className="h-6 w-6 text-white mr-2" />
            <span className="text-white text-sm sm:text-md">
              Backend Engineer Intern @{" "}
              <span className="font-bold">PT DOT Indonesia</span>
            </span>
          </div>
          <div className="flex flex-row items-center justify-center sm:justify-start mt-2">
            <AcademicCapIcon className="h-6 w-6 text-white mr-2" />
            <span className="text-white text-sm sm:text-md">
              Penultimate Information System and Techology @{" "}
              <span className="font-bold">Institut Teknologi Bandung</span>
            </span>
          </div>
          <div className="flex items-center justify-center sm:justify-start mt-6">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Download CV
            </button>
            {/* github */}
            <Link
              href="https://github.com/gibranfsh"
              className="text-white hover:text-slate-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-8 w-8" />
            </Link>
            {/* linkedin */}
            <Link
              href="https://www.linkedin.com/in/gibran-fasha-ghazanfar"
              className="text-white hover:text-slate-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 ml-4" />
            </Link>
            {/* instagram */}
            <Link
              href="https://www.instagram.com/gibranfg"
              className="text-white hover:text-slate-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-8 w-8 ml-4" />
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-16 lg:mt-0">
          <div
            className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
            ref={glitch.ref}
          >
            <Image
              src="/images/gijax_samurai.svg"
              alt="Samurai"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
