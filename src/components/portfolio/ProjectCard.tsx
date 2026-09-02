import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import type { PlannedProject } from "@/lib/projects";

/** Card linking to a planned (not yet started) project's page. */
export function ProjectCard({ project }: { project: PlannedProject }) {
  return (
    <article className="surface-card group relative overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ backgroundImage: "var(--gradient-accent)" }}
      />
      <Link to={project.path} className="relative block p-6 sm:p-8">
        <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-display text-[0.65rem] tracking-[0.22em] text-primary">
          PLANNED
        </span>
        <h3 className="mt-6 flex items-start justify-between gap-3 text-xl font-semibold sm:text-2xl">
          {project.title}
          <ArrowUpRight
            aria-hidden
            className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
          />
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">Focus: {project.focus}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <span className="mt-6 inline-block font-display text-[0.65rem] tracking-[0.22em] text-primary">
          VIEW PLAN
        </span>
      </Link>
    </article>
  );
}
