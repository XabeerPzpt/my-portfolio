import type { ReactNode } from "react";

type SectionProps = {
  /** Anchor id, also used for smooth-scroll navigation. */
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

/**
 * Shared layout for the page sections.
 * Keeps spacing, headings and anchor offsets consistent.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-20 border-t border-white/5"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-zinc-400">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
