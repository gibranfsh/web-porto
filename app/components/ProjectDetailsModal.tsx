"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  FolderIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import type { Project } from "./ProjectCard";

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 shadow-glow-red-strong p-6 md:p-8 z-10 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-red-400 hover:border-red-600/40 transition-all duration-200 z-20"
          aria-label="Close details"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {/* Project Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800/80 mb-6 shadow-elevation-2">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Project Meta Details */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="accent">{project.type}</Badge>
            {project.status && (
              <span
                className={`font-mono text-xs px-2 py-0.5 rounded border uppercase tracking-wider ${
                  project.status === "live"
                    ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-400"
                    : project.status === "archived"
                    ? "bg-amber-950/30 border-amber-500/30 text-amber-400"
                    : "bg-zinc-900 border-zinc-700 text-zinc-400"
                }`}
              >
                {project.status}
              </span>
            )}
            {project.date && (
              <span className="font-mono text-xs text-zinc-500 ml-auto sm:ml-0">
                {project.date}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-heading text-2xl md:text-3xl font-black text-white leading-tight">
            {project.name}
          </h3>

          <div className="w-full h-px bg-gradient-to-r from-red-600/30 via-zinc-800 to-transparent my-4" />

          {/* Description */}
          <p className="font-body text-sm md:text-base text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 pt-4">
              <h4 className="font-mono text-xs text-red-400 uppercase tracking-widest font-semibold">
                Key Contributions & Achievements
              </h4>
              <ul className="space-y-3 text-sm text-zinc-300 leading-relaxed font-body">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-mono select-none mt-0.5 text-xs">
                      🗲
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3 pt-4">
            <h4 className="font-mono text-xs text-red-400 uppercase tracking-widest font-semibold">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStacks.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs border border-zinc-700/50 bg-zinc-800/40 text-zinc-300 px-2.5 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-8 pt-4 border-t border-zinc-800/60">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="w-full sm:w-auto font-semibold"
            >
              Close
            </Button>

            {project.status === "live" && (
              <Button
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                className="w-full sm:w-auto font-semibold"
              >
                <span>View Live Demo</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </Button>
            )}

            {project.status === "archived" && (
              project.githubUrl ? (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto font-semibold"
                >
                  <span>View Source Code</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  variant="muted"
                  size="sm"
                  className="w-full sm:w-auto font-semibold"
                  disabled
                >
                  <span>Demo Archived</span>
                  <FolderIcon className="h-4 w-4" />
                </Button>
              )
            )}

            {project.status === "private" && (
              <Button
                variant="muted"
                size="sm"
                className="w-full sm:w-auto font-semibold"
                disabled
              >
                <span>Private Project</span>
                <FolderIcon className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
