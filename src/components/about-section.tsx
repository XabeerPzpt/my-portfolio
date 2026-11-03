import { Section } from "./section";

/** Short introduction. Placeholder content will be expanded later. */
export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A software developer focused on building reliable applications"
      description="A brief introduction for now — a fuller background will be added in a future update."
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <div className="min-w-0 space-y-5 text-base leading-7 text-zinc-400">
          <p>
            I am a software developer with professional experience building
            business web applications. My work covers server-side development
            with C# and ASP.NET Core, data modelling and queries in SQL Server,
            and user interfaces built with React.js.
          </p>
          <p>
            Much of my work involves integrating REST APIs and payment gateways,
            using Azure services, and collaborating with a team through Git and
            Azure DevOps. I value clear, maintainable code and steady, careful
            problem solving.
          </p>
          <p className="rounded-xl border border-dashed border-line bg-surface px-5 py-4 text-sm text-zinc-400">
            <span className="font-medium text-zinc-300">Placeholder:</span>{" "}
            detailed experience, education and certifications will be added
            here. For now, this section only summarises my core technologies.
          </p>
        </div>

        <aside className="min-w-0 rounded-2xl border border-line bg-surface p-6 sm:p-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-300">
            Working with
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-zinc-400">
            {[
              "C# and ASP.NET Core / ASP.NET MVC",
              "SQL Server",
              "React.js",
              "REST API and payment gateway integration",
              "Azure services",
              "Git and Azure DevOps",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
