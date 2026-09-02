type ProjectCardProps = {
  title: string;
  focus: string;
};

/** Card for a planned (not yet started) project. */
export function ProjectCard({ title, focus }: ProjectCardProps) {
  return (
    <article className="surface-card group relative overflow-hidden rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ backgroundImage: "var(--gradient-accent)" }}
      />
      <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-display text-[0.65rem] tracking-[0.22em] text-primary">
        PLANNED
      </span>
      <h3 className="mt-6 text-xl font-semibold sm:text-2xl">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">Focus: {focus}</p>
      <p className="mt-6 text-sm text-muted-foreground">
        Not started yet — details will be added once this project is under way.
      </p>
    </article>
  );
}
