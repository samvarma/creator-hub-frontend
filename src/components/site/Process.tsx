import { Reveal, SectionHeader } from "./Reveal";

const steps = [
  { n: "01", title: "Discovery", body: "Understand your goals, audience and offer." },
  { n: "02", title: "Strategy", body: "Craft the roadmap for growth, channels and KPIs." },
  { n: "03", title: "Design", body: "Beautiful brand-aligned interfaces and creatives." },
  { n: "04", title: "Development", body: "Websites, automations and integrations built to scale." },
  { n: "05", title: "Launch", body: "Go live with campaigns, tracking and QA." },
  { n: "06", title: "Growth", body: "Iterate weekly on data — compound your results." },
];

export function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Our Process"
            title={
              <>
                A proven <span className="text-gradient">6-step growth system</span>.
              </>
            }
          />
        </Reveal>
        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
            style={{ background: "linear-gradient(180deg, transparent, oklch(1 0 0 / 0.15), transparent)" }}
          />
          <ol className="space-y-6 lg:space-y-0">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <li
                  className={`grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:col-start-2" : ""
                  }`}
                >
                  <div className={`${i % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}>
                    <div className="rounded-2xl glass p-6">
                      <div className="text-xs uppercase tracking-[0.25em] text-[oklch(0.82_0.15_200)]">
                        Step {s.n}
                      </div>
                      <h3 className="mt-2 text-2xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block" />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
