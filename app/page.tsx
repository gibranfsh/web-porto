"use client";
import HeroSection from "./components/HeroSection";
import TechStackSection from "./components/TechStackSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import AwardsSection from "./components/AwardSection";
import ParallaxDivider from "./components/ParallaxDivider";
import ScrollIndicator from "./components/ScrollIndicator";
import { FaArrowDownLong } from "react-icons/fa6";
import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

// Dynamically import Particles — eliminates ~150KB+ from initial bundle
const Particles = dynamic(() => import("@tsparticles/react").then(mod => mod.default), {
  ssr: false,
  loading: () => null,
});

const Home = () => {
  const [init, setInit] = useState(false);

  // Centralized AOS initialization — single instance instead of 3 separate ones
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  useEffect(() => {
    // Defer particles initialization to after first paint
    const timer = requestIdleCallback ? 
      requestIdleCallback(initParticles) : 
      setTimeout(initParticles, 100);
    
    async function initParticles() {
      const { initParticlesEngine } = await import("@tsparticles/react");
      const { loadSlim } = await import("@tsparticles/slim");
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    }

    return () => {
      if (typeof timer === 'number') clearTimeout(timer);
    };
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60, // Was 120 — 60 is sufficient and halves CPU cost
      interactivity: {
        events: {
          onClick: {
            enable: false,
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
          opacity: 0.7,
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
          value: 30, // Was 80 — 30 gives similar visual with 60% less CPU
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
      <ScrollIndicator />
      {init && (
        <Particles
          id="tsparticles"
          options={options as any}
          className="absolute inset-0 z-0"
        />
      )}
      <div className="container mx-auto px-4 py-4 relative">
        <HeroSection />
        <FaArrowDownLong className="text-white text-4xl mx-auto my-32 animate-bounce w-6 h-6" />
        <TechStackSection />
        <ParallaxDivider variant="geometric" />
        <ProjectSection />
        <ParallaxDivider variant="gradient" />
        <ExperienceSection />
        <ParallaxDivider variant="wave" />
        <AwardsSection />
      </div>
    </main>
  );
};

export default Home;
