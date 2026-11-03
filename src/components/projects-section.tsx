import { projects } from "@/lib/site";
import { Section } from "./section";

/** Placeholder project cards. Replace the data in `src/lib/site.ts`. */
export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Project write-ups and screenshots are coming soon. The cards below show where they will live."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.title}>
            <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400">
                  Placeholder
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400">
                {project.summary}
              </p>

              <p className="mt-6 border-t border-white/5 pt-4 text-xs text-zinc-400">
                Case study coming soon
              </p>
            </article>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-zinc-400">
        Placeholder content — real projects, descriptions and screenshots will
        be added in a later update.
      </p>
    </Section>
  );
}
