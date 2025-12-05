"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "ABOUT", num: "01" },
  { id: "tech_stacks", label: "STACK", num: "02" },
  { id: "projects", label: "WORK", num: "03" },
  { id: "experiences", label: "EXP", num: "04" },
  { id: "awards", label: "WINS", num: "05" },
];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Futuristic Progress Bar - Top */}
      <div className="fixed top-0 left-0 right-0 h-[1px] bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 origin-left"
          style={{ scaleX: smoothProgress }}
        />
        <motion.div
          className="absolute top-0 h-[3px] w-20 bg-gradient-to-r from-transparent via-red-400 to-transparent blur-sm origin-left"
          style={{ scaleX: smoothProgress }}
        />
      </div>

      {/* Futuristic Side Nav - Desktop */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="relative">
          {/* Vertical Track Line */}
          <div className="absolute left-[3px] top-0 bottom-0 w-[2px] bg-gray-800" />
          
          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-[3px] top-0 w-[2px] bg-gradient-to-b from-red-500 to-red-600"
            style={{ 
              height: `${((activeIndex + 1) / sections.length) * 100}%`,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          {/* Section Markers */}
          <div className="flex flex-col gap-6">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center"
                aria-label={section.label}
              >
                {/* Marker Line */}
                <div
                  className={`w-2 h-[2px] transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-red-500 w-4"
                      : "bg-gray-600 group-hover:bg-red-400 group-hover:w-3"
                  }`}
                />
                
                {/* Label */}
                <span
                  className={`ml-4 font-mono text-[10px] tracking-widest transition-all duration-300 ${
                    activeSection === section.id
                      ? "text-red-500"
                      : "text-gray-600 group-hover:text-gray-400"
                  }`}
                >
                  {section.num}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Futuristic Mobile Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden">
        <div className="relative flex items-center gap-1 px-3 py-2 bg-black/80 backdrop-blur-md border border-gray-800 rounded-sm">
          {/* Corner Accents */}
          <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-red-500" />
          <div className="absolute -top-px -right-px w-2 h-2 border-t border-r border-red-500" />
          <div className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-red-500" />
          <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-red-500" />
          
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative px-2 py-1"
              aria-label={section.label}
            >
              <span
                className={`font-mono text-[9px] tracking-wider transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-red-500"
                    : "text-gray-600"
                }`}
              >
                {section.num}
              </span>
              {activeSection === section.id && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-red-500"
                  layoutId="activeTab"
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;
