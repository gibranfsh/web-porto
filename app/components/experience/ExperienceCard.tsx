"use client";

import {
  CalendarIcon,
  ChevronDownIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import type { Experience } from "../../data/experiences";

type ExperienceCardProps = {
  readonly experience: Experience;
  readonly expanded: boolean;
  readonly onToggle: () => void;
};

export default function ExperienceCard({
  experience,
  expanded,
  onToggle,
}: ExperienceCardProps) {
  const bullets = expanded ? experience.description : experience.highlights;
  const panelId = `experience-panel-${experience.id}`;
  const toggleId = `experience-toggle-${experience.id}`;

  return (
    <article className="experience-card-cyber">
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
          {experience.title}
        </h3>
        <p className="text-red-400 font-medium mt-0.5">{experience.company}</p>
      </div>

      <div className="mb-4 space-y-1.5">
        <div className="flex items-center text-zinc-400 text-sm">
          <CalendarIcon className="h-4 w-4 mr-2 shrink-0" aria-hidden />
          <span className="font-medium">{experience.period}</span>
        </div>
        <div className="flex items-center text-zinc-400 text-sm">
          <MapPinIcon className="h-4 w-4 mr-2 shrink-0" aria-hidden />
          <span>{experience.location}</span>
        </div>
      </div>

      {experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {experience.technologies.map((tech) => (
            <span key={tech} className="experience-tech-chip">
              {tech}
            </span>
          ))}
        </div>
      )}

      <ul
        id={panelId}
        className="space-y-2.5 text-zinc-300 text-sm sm:text-base"
        aria-labelledby={toggleId}
      >
        {bullets.map((item) => (
          <li key={item} className="flex">
            <span className="text-red-500 mr-2 mt-1 shrink-0" aria-hidden>
              ▹
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {experience.description.length > experience.highlights.length && (
        <button
          id={toggleId}
          type="button"
          className="btn-cyber btn-cyber-ghost mt-4 text-xs sm:text-sm px-3 py-2 min-h-[36px]"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{expanded ? "Collapse" : "View full details"}</span>
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      )}
    </article>
  );
}
