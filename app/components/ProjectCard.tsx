"use client";

import Image from "next/image";
import {
  ArrowTopRightOnSquareIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import Button from "./ui/Button";
import Badge from "./ui/Badge";

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  techStacks: string[];
  url: string;
  featured?: boolean;
  status?: "live" | "archived" | "private";
  type:
    | "Full Stack"
    | "Frontend"
    | "Backend"
    | "Mobile"
    | "Data Science"
    | "DevOps"
    | "CMS";
  githubUrl?: string;
  caseStudyUrl?: string;
  date?: string;
  highlights?: string[];
}

const VISIBLE_TECH_COUNT = 4;
const PROJECT_ACTION_BUTTON_CLASS =
  "w-full min-w-[12rem] max-w-[15rem] font-semibold";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

function TechTags({ techStacks }: { techStacks: string[] }) {
  const visible = techStacks.slice(0, VISIBLE_TECH_COUNT);
  const overflow = techStacks.slice(VISIBLE_TECH_COUNT);

  return (
    <div className="flex flex-wrap justify-start gap-1.5 relative content-start w-full lg:min-h-[3.75rem]">
      {visible.map((tech) => (
        <span
          key={tech}
          className="font-mono text-xs border border-zinc-700/50 bg-zinc-800/40 text-zinc-300 px-2 py-0.5 rounded"
        >
          {tech}
        </span>
      ))}
      {overflow.length > 0 && (
        <details className="group/details relative" onClick={(e) => e.stopPropagation()}>
          <summary className="font-mono text-xs border border-red-700/50 bg-red-900/30 text-red-300 px-2 py-0.5 rounded cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            +{overflow.length} more
          </summary>
          <div className="absolute bottom-full left-0 mb-2 z-50 bg-zinc-900 border border-zinc-700 rounded-lg p-3 shadow-elevation-3 min-w-[12rem]">
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {overflow.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs border border-zinc-700/50 bg-zinc-800/60 text-zinc-300 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </details>
      )}
    </div>
  );
}

function ProjectCardActions({ project }: { project: Project }) {
  if (project.status === "live") {
    return (
      <Button
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="sm"
        className={PROJECT_ACTION_BUTTON_CLASS}
        onClick={(e) => e.stopPropagation()}
      >
        <span>View Live Demo</span>
        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </Button>
    );
  }

  if (project.status === "archived") {
    if (project.githubUrl) {
      return (
        <Button
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="sm"
          className={PROJECT_ACTION_BUTTON_CLASS}
          onClick={(e) => e.stopPropagation()}
        >
          <span>View Source Code</span>
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </Button>
      );
    }

    return (
      <Button
        variant="secondary"
        size="sm"
        className={PROJECT_ACTION_BUTTON_CLASS}
        disabled
        onClick={(e) => e.stopPropagation()}
      >
        <span>Demo Archived</span>
        <FolderIcon className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      className={PROJECT_ACTION_BUTTON_CLASS}
      disabled
      onClick={(e) => e.stopPropagation()}
    >
      <span>Private Project</span>
      <FolderIcon className="h-4 w-4" />
    </Button>
  );
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className="group flex flex-col h-full relative overflow-hidden rounded-card border border-zinc-800/60 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 shadow-elevation-2 transition-all duration-300 hover:border-red-600/50 hover:shadow-glow-red-strong motion-safe:hover:-translate-y-1 focus-within:ring-1 focus-within:ring-red-500/40 focus-within:shadow-glow-red cursor-pointer"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.4) 0%, transparent 50%)",
        }}
      />

      <div
        className="pointer-events-none absolute top-3 left-3 text-red-600/0 group-hover:text-red-600/30 font-mono text-lg transition-opacity duration-300 motion-reduce:transition-none opacity-0 group-hover:opacity-100 z-20"
        aria-hidden="true"
      >
        {"<"}
      </div>
      <div
        className="pointer-events-none absolute top-3 right-3 text-red-600/0 group-hover:text-red-600/30 font-mono text-lg transition-opacity duration-300 motion-reduce:transition-none opacity-0 group-hover:opacity-100 z-20"
        aria-hidden="true"
      >
        {"/>"}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover object-top motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-105 gpu-accelerated"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-70 z-10 pointer-events-none" />

        <div className="absolute inset-0 bg-red-950/0 group-hover:bg-red-950/40 transition-colors duration-300 z-10 pointer-events-none motion-reduce:transition-none" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none motion-reduce:transition-none">
          <span className="font-mono text-sm text-red-300 tracking-wider uppercase">
            View Details
          </span>
        </div>

        <div className="absolute top-3 left-3 z-20">
          <Badge variant="accent">
            {project.type}
          </Badge>
        </div>
      </div>

      <div className="relative flex flex-col flex-1 p-5">
        <div className="flex flex-col flex-1 space-y-2 sm:space-y-3">
          <h3 className="font-heading text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300 leading-tight line-clamp-2 text-left lg:min-h-[3rem]">
            {project.name}
          </h3>

          <p className="font-body text-sm text-zinc-400 leading-relaxed line-clamp-2 text-left lg:min-h-[2.875rem]">
            {project.description}
          </p>

          <TechTags techStacks={project.techStacks} />
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-800/50 flex justify-center">
          <ProjectCardActions project={project} />
        </div>
      </div>
    </article>
  );
}
