"use client";

import {
  CalendarIcon,
  ChevronDownIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import type { Award } from "../../data/awards";
import Badge from "../ui/Badge";

const typeLabels: Record<Award["type"], string> = {
  national: "National",
  international: "International",
  university: "University",
};

type AwardCardProps = {
  readonly award: Award;
  readonly expanded: boolean;
  readonly onToggle: () => void;
};

export default function AwardCard({
  award,
  expanded,
  onToggle,
}: AwardCardProps) {
  const bullets = expanded ? award.description : award.highlights;
  const panelId = `award-panel-${award.id}`;
  const toggleId = `award-toggle-${award.id}`;
  const canExpand =
    award.description.length > award.highlights.length ||
    award.description.some((item, index) => item !== award.highlights[index]);

  return (
    <article className="award-card-cyber">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge variant="accent">{typeLabels[award.type]}</Badge>
        <span className="award-rank-chip">{award.placement}</span>
      </div>

      <div className="flex items-start gap-3 mb-4">
        <TrophyIcon
          className="h-6 w-6 text-accent shrink-0 mt-0.5"
          aria-hidden
        />
        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug font-heading">
          {award.title}
        </h3>
      </div>

      <div className="flex items-center text-zinc-400 text-sm mb-4">
        <CalendarIcon className="h-4 w-4 mr-2 shrink-0" aria-hidden />
        <span className="font-medium">{award.date}</span>
      </div>

      {award.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {award.technologies.map((tech) => (
            <span key={tech} className="experience-tech-chip">
              {tech}
            </span>
          ))}
        </div>
      )}

      <ul
        id={panelId}
        className="space-y-2.5 text-zinc-300 text-sm sm:text-base flex-1"
        aria-labelledby={canExpand ? toggleId : undefined}
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

      {canExpand && (
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
