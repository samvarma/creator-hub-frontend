import { Layers, Cpu, BadgeIndianRupee, Wand2, LifeBuoy, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const items = [
  { icon: Layers, title: "All Digital Solutions Under One Roof", body: "One accountable partner for websites, marketing, AI, CRM and support." },
  { icon: Cpu, title: "AI Powered Automation", body: "Reduce manual work with intelligent workflows that follow up and convert." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", body: "Startup-friendly pricing without cutting corners on quality or outcomes." },
  { icon: Wand2, title: "Customized Solutions", body: "Systems built around your business, industry and customer journey." },
  { icon: LifeBuoy, title: "Dedicated Business Support", body: "Real people on WhatsApp and calls when you need them the most." },
  { icon: ShieldCheck, title: "End-to-End Implementation", body: "We plan, build, launch and grow — you focus on running your business." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Why Choose Us"
            title={
              <>
                Built for businesses that want <span className="text-gradient">real results</span>.
              </>
            }
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-2xl glass p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5">
                  <it.icon className="h-5 w-5 text-[oklch(0.82_0.15_200)]" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
