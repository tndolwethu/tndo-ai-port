import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import type { PlannedProject } from "@/lib/projects";

type ListBlockProps = { title: string; items: string[] };

function ListBlock({ title, items }: ListBlockProps) {
  return (
    <section className="surface-card rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-[0.65rem] tracking-[0.22em] text-primary">
        {title.toUpperCase()}
      </h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Shared page layout for a planned project. */
export function ProjectDetail({ project }: { project: PlannedProject }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="relative overflow-hidden px-5 pb-24 pt-12 sm:px-8 sm:pb-32 sm:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full opacity-20 blur-[120px]"
          style={{ backgroundImage: "var(--gradient-accent)" }}
        />
        <div className="relative mx-auto w-full max-w-4xl">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to projects
          </Link>

          <span className="mt-10 inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-display text-[0.65rem] tracking-[0.22em] text-primary">
            PLANNED
          </span>

          <h1 className="animate-rise mt-6 text-[clamp(2rem,7vw,4.25rem)] font-semibold leading-[0.98]">
            {project.title}
          </h1>

          <p className="mt-4 font-display text-sm tracking-[0.18em] text-muted-foreground">
            FOCUS: {project.focus.toUpperCase()}
          </p>

          <p className="animate-rise mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.description}
          </p>

          <div className="mt-12 grid gap-6">
            <ListBlock title="Goals" items={project.goals} />
            <ListBlock title="What I plan to build" items={project.plan} />
            <ListBlock title="What I want to learn" items={project.learning} />
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            This project has not been started yet. Progress, code and results will be added here as
            I build it.
          </p>
        </div>
      </main>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto w-full max-w-4xl px-5 text-sm text-muted-foreground sm:px-8">
          © 2026 Thandolwethu Tshabalala
        </div>
      </footer>
    </div>
  );
}
