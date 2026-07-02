"use client";
import HeroSection from "./components/HeroSection";
import TechStackSection from "./components/TechStackSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import AwardsSection from "./components/AwardSection";
import ParallaxDivider from "./components/ParallaxDivider";
import ScrollIndicator from "./components/ScrollIndicator";
import ScrollArrow from "./components/ScrollArrow";
import BinaryRainBackground from "./components/BinaryRainBackground";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

let aosInitialized = false;

const Home = () => {
  useEffect(() => {
    if (!aosInitialized) {
      AOS.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        duration: 500,
        throttleDelay: 99,
        debounceDelay: 50,
      });
      aosInitialized = true;
    } else {
      AOS.refresh();
    }

    const refreshTimer = window.setTimeout(() => AOS.refresh(), 150);
    return () => window.clearTimeout(refreshTimer);
  }, []);

  return (
    <main className="bg-black flex flex-col min-h-screen">
      <BinaryRainBackground />
      <ScrollIndicator />
      <div className="container mx-auto px-0 sm:px-4 py-4 relative">
        <HeroSection />
        <ScrollArrow />
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
