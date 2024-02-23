"use client";
import HeroSection from "./components/HeroSection";
import TechStackSection from "./components/TechStackSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import AwardsSection from "./components/AwardSection";
import { FaArrowDownLong } from "react-icons/fa6";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#00000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#E53935",
        },
        links: {
          color: "#E53935",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <main className="bg-black flex flex-col min-h-screen">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded as any}
        options={options as any}
        className="absolute inset-0 z-0"
      />
      <div className="container mt-24 mx-auto px-4 py-4 relative">
        <HeroSection />
        <FaArrowDownLong className="text-white text-4xl mx-auto my-32 animate-bounce w-6 h-6" />
        <TechStackSection />
        <ProjectSection />
        <ExperienceSection />
        <AwardsSection />
      </div>
    </main>
  );
};

export default Home;
