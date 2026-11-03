import { site } from "@/lib/site";
import { ButtonLink } from "./ui/button-link";
import { ArrowRightIcon } from "./ui/icons";

/** First screen visitors see: name, role, short introduction and calls to action. */
export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-backdrop absolute inset-0" />
        <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl sm:h-[38rem] sm:w-[38rem]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-28 lg:pt-36">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {site.role}
          </p>

          <h1
            id="home-heading"
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {site.name}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
            {site.heroSummary}
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
            I care about readable code, dependable APIs and interfaces that are
            simple to use. I am currently expanding my skills in Next.js, Python
            and AI/LLM development.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#projects">
              View Projects
              <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact Me
            </ButtonLink>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-2 gap-x-6 gap-y-5 border-t border-white/5 pt-6 text-sm">
            <div>
              <dt className="text-zinc-400">Primary stack</dt>
              <dd className="mt-1 text-zinc-300">C# · ASP.NET Core</dd>
            </div>
            <div>
              <dt className="text-zinc-400">Frontend</dt>
              <dd className="mt-1 text-zinc-300">React.js · REST APIs</dd>
            </div>
            <div>
              <dt className="text-zinc-400">Data &amp; cloud</dt>
              <dd className="mt-1 text-zinc-300">SQL Server · Azure</dd>
            </div>
            <div>
              <dt className="text-zinc-400">Currently learning</dt>
              <dd className="mt-1 text-zinc-300">Next.js · Python · AI/LLM</dd>
            </div>
          </dl>
        </div>

        <HeroCodeCard />
      </div>
    </section>
  );
}

/**
 * Decorative "code editor" panel. It is hidden from screen readers because it
 * repeats information that is already written in the hero text.
 */
function HeroCodeCard() {
  return (
    <div aria-hidden="true" className="relative min-w-0">
      <div className="absolute -inset-6 rounded-[2rem] bg-accent/5 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-line bg-[#0a0e14]/90 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 font-mono text-xs text-zinc-500">
            developer.ts
          </span>
        </div>

        <pre className="overflow-x-auto whitespace-pre-wrap px-5 py-5 font-mono text-[11px] leading-5 text-zinc-300 sm:text-[13px] sm:leading-6">
          <code>{`export const developer = {
  name: "Sabir Prajapati",
  role: "Software Developer",
  core: ["C#", "ASP.NET Core", "SQL Server"],
  frontend: ["React.js", "REST APIs"],
  cloud: ["Azure"],
  learning: ["Next.js", "Python", "AI / LLMs"],
};`}</code>
        </pre>

        <div className="flex items-center justify-between border-t border-white/5 px-4 py-2.5 font-mono text-[11px] text-zinc-500">
          <span>TypeScript</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
}
