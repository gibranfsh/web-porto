"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import FilterButton, { FilterButtonGroup } from "./ui/FilterButton";
import ExperienceCard from "./experience/ExperienceCard";
import {
  experienceFilters,
  filterExperiences,
  type ExperienceFilter,
} from "../data/experiences";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<ExperienceFilter>("all");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(["saakuru"])
  );

  const filteredExperiences = useMemo(
    () => filterExperiences(filter),
    [filter]
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.4, 0.4, 0]);

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="mt-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-[var(--nav-height)]"
      id="experiences"
    >
      <motion.div
        className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-bl from-red-600/5 to-transparent rounded-full blur-3xl pointer-events-none motion-safe:block hidden"
        style={{ y: bgY1, opacity: bgOpacity }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none motion-safe:block hidden"
        style={{ y: bgY2, opacity: bgOpacity }}
        aria-hidden
      />

      <div
        className="mb-16 relative overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20" />
        </div>
        <h2 className="text-center relative z-10">
          <span className="px-6 inline-flex flex-col items-center">
            <span className="text-sm uppercase tracking-widest text-zinc-400 font-medium mb-2">
              Career Path
            </span>
            <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white relative whitespace-normal">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Experience
              </span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
            </span>
          </span>
        </h2>
      </div>

      <FilterButtonGroup className="mb-10">
        {experienceFilters.map(({ id, label }) => (
          <FilterButton
            key={id}
            selected={filter === id}
            onClick={() => setFilter(id)}
          >
            {label}
          </FilterButton>
        ))}
      </FilterButtonGroup>

      <div className="relative max-w-5xl mx-auto">
        <div className="experience-timeline-rail" aria-hidden />

        <div className="space-y-12 md:space-y-16">
          {filteredExperiences.map((exp, index) => {
            const originalIndex = index;
            const isEven = originalIndex % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="experience-timeline-node">
                  {exp.logoUrl ? (
                    <Image
                      src={exp.logoUrl}
                      alt=""
                      fill
                      className="object-contain p-1"
                      sizes="48px"
                      loading="lazy"
                    />
                  ) : (
                    <BriefcaseIcon className="h-5 w-5 text-white" aria-hidden />
                  )}
                </div>

                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? "md:mr-auto md:pr-8 lg:pr-12" : "md:ml-auto md:pl-8 lg:pl-12"
                  }`}
                >
                  <ExperienceCard
                    experience={exp}
                    expanded={expandedIds.has(exp.id)}
                    onToggle={() => toggleExpanded(exp.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
