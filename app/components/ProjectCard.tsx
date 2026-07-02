"use client";

import Image from "next/image";
import {
  ArrowTopRightOnSquareIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

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
}

const VISIBLE_TECH_COUNT = 4;

interface ProjectCardProps {
  project: Project;
}

function TechTags({ techStacks }: { techStacks: string[] }) {
  const visible = techStacks.slice(0, VISIBLE_TECH_COUNT);
  const overflow = techStacks.slice(VISIBLE_TECH_COUNT);

  return (
    <div className="flex flex-wrap gap-1.5">
      {visible.map((tech) => (
        <span
          key={tech}
          className="font-mono text-xs border border-zinc-700/50 bg-zinc-800/40 text-zinc-300 px-2 py-0.5 rounded"
        >
          {tech}
        </span>
      ))}
      {overflow.length > 0 && (
        <details className="relative group/details">
          <summary className="font-mono text-xs border border-red-700/50 bg-red-900/30 text-red-300 px-2 py-0.5 rounded cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            +{overflow.length} more
          </summary>
          <div className="absolute top-full left-0 mt-2 z-50 bg-zinc-900 border border-zinc-700 rounded-lg p-3 shadow-elevation-3 min-w-[12rem]">
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
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2.5 px-5 rounded-xl transition-all duration-300 text-sm font-semibold w-full shadow-lg hover:shadow-glow-red cursor-pointer"
      >
        <span>View Live Demo</span>
        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </a>
    );
  }

  if (project.status === "archived") {
    return (
      <div className="space-y-2">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white py-2.5 px-5 rounded-xl transition-colors duration-300 text-sm font-semibold w-full cursor-pointer"
          >
            <span>View Source Code</span>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center gap-2 bg-zinc-600 text-zinc-300 py-2.5 px-5 rounded-xl text-sm font-semibold w-full cursor-not-allowed"
          >
            <span>Demo Archived</span>
            <FolderIcon className="h-4 w-4" />
          </button>
        )}
        <p className="text-zinc-500 text-xs text-center">
          Deployment temporarily down
        </p>
      </div>
    );
  }

  return (
    <button
      type="button"
      disabled
      className="inline-flex items-center justify-center gap-2 bg-zinc-700 text-zinc-400 py-2.5 px-5 rounded-xl text-sm font-semibold w-full cursor-not-allowed"
    >
      <span>Private Project</span>
      <FolderIcon className="h-4 w-4" />
    </button>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col h-full relative overflow-hidden rounded-card border border-zinc-800/60 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 shadow-elevation-2 transition-all duration-300 hover:border-red-600/50 hover:shadow-glow-red-strong motion-safe:hover:-translate-y-1 focus-within:ring-1 focus-within:ring-red-500/40 focus-within:shadow-glow-red">
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
            View Project
          </span>
        </div>

        <div className="absolute top-3 left-3 z-20">
          <span className="font-mono text-xs uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-700 text-white px-2.5 py-1 rounded">
            {project.type}
          </span>
        </div>
      </div>

      <div className="relative flex flex-col flex-1 p-5 space-y-3">
        <h3 className="font-heading text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300 leading-tight line-clamp-2">
          {project.name}
        </h3>

        <p className="font-body text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <TechTags techStacks={project.techStacks} />

        <div className="pt-1 mt-auto">
          <ProjectCardActions project={project} />
        </div>
      </div>
    </article>
  );
}
