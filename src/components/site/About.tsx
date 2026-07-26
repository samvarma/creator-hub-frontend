import { Compass, Target, Eye, Rocket } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const items = [
  {
    icon: Compass,
    title: "Who We Are",
    body: "A team of designers, marketers and AI engineers building growth systems for modern businesses across India.",
  },
  {
    icon: Target,
    title: "Our Mission",
    body: "Help every business — from local shops to scaling brands — win customers with beautiful digital presence and automation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "Become the most trusted growth partner for small and medium businesses in the AI era.",
  },
  {
    icon: Rocket,
    title: "Growth Philosophy",
    body: "Attract, convert, retain. Every asset we build is measured by the revenue and reputation it creates.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="About Us"
            title={
              <>
                We turn digital presence into <span className="text-gradient">real revenue</span>.
              </>
            }
            description="Digital Creators Hub is your single partner for websites, marketing, automation and AI — engineered to grow your business faster and smarter."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]">
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <it.icon className="h-5 w-5 text-[oklch(0.12_0.03_265)]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
