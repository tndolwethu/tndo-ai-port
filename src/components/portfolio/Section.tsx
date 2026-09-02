import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

/** Reusable page section with a consistent heading and spacing rhythm. */
export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-10 flex items-baseline gap-4 sm:mb-14">
          <span className="font-display text-xs tracking-[0.3em] text-primary">{index}</span>
          <h2
            id={`${id}-heading`}
            className="text-3xl font-semibold sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
