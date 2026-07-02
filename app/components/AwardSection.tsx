"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FilterButton, { FilterButtonGroup } from "./ui/FilterButton";
import AwardCard from "./awards/AwardCard";
import {
  awardFilters,
  filterAwards,
  type AwardFilter,
} from "../data/awards";

const AwardsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<AwardFilter>("all");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(["alibaba-genai-2025"])
  );

  const filteredAwards = useMemo(() => filterAwards(filter), [filter]);

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
      id="awards"
    >
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-red-600/5 to-transparent rounded-full blur-3xl pointer-events-none motion-safe:block hidden"
        style={{ y: bgY1, opacity: bgOpacity }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none motion-safe:block hidden"
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
              Recognition
            </span>
            <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white relative whitespace-normal">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Achievements
              </span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
            </span>
            <span className="text-gray-400 mt-6 text-base sm:text-lg max-w-md leading-relaxed">
              Accolades and honors received throughout my academic and professional journey
            </span>
          </span>
        </h2>
      </div>

      <FilterButtonGroup className="mb-10">
        {awardFilters.map(({ id, label }) => (
          <FilterButton
            key={id}
            selected={filter === id}
            onClick={() => setFilter(id)}
          >
            {label}
          </FilterButton>
        ))}
      </FilterButtonGroup>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {filteredAwards.map((award) => (
          <AwardCard
            key={award.id}
            award={award}
            expanded={expandedIds.has(award.id)}
            onToggle={() => toggleExpanded(award.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
