import {
  Building2,
  Utensils,
  Hotel,
  Stethoscope,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  HardHat,
  Rocket,
  Store,
} from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const list = [
  { icon: Building2, label: "Real Estate" },
  { icon: Utensils, label: "Restaurants" },
  { icon: Hotel, label: "Hotels" },
  { icon: Stethoscope, label: "Clinics" },
  { icon: HeartPulse, label: "Hospitals" },
  { icon: ShoppingBag, label: "Retail Stores" },
  { icon: GraduationCap, label: "Educational Institutes" },
  { icon: HardHat, label: "Construction" },
  { icon: Rocket, label: "Startups" },
  { icon: Store, label: "Small Businesses" },
];

export function Industries() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Industries"
            title={
              <>
                Trusted across <span className="text-gradient">10+ industries</span>.
              </>
            }
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {list.map((i, idx) => (
            <Reveal key={i.label} delay={(idx % 5) * 0.04}>
              <div className="group flex items-center gap-3 rounded-2xl glass p-4 transition hover:-translate-y-1 hover:bg-white/[0.06]">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5">
                  <i.icon className="h-5 w-5 text-[oklch(0.82_0.19_155)]" />
                </div>
                <span className="text-sm font-medium">{i.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
