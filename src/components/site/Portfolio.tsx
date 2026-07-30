import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Home,
  UtensilsCrossed,
  Stethoscope,
  Armchair,
  BedDouble,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

type Project = {
  id: string | number;
  name: string;
  category: string;
  description: string;
  image?: string;
};

const fallback: Project[] = [
  { id: 1, name: "Skyline Realty", category: "Real Estate", description: "Lead-gen website + AI follow-up automation." },
  { id: 2, name: "Curry Leaf Kitchen", category: "Restaurant", description: "QR ordering, WhatsApp orders and reviews." },
  { id: 3, name: "Aster Dental", category: "Clinic", description: "Local SEO to Google Top 3 in 90 days." },
  { id: 4, name: "Nova Interiors", category: "Retail", description: "Portfolio site + Meta ad funnels." },
  { id: 5, name: "Vista Hotels", category: "Hospitality", description: "Direct booking site with WhatsApp CRM." },
  { id: 6, name: "BrightPath EdTech", category: "Education", description: "Full growth stack: ads, CRM and site." },
];

const CATEGORY_ART: Record<
  string,
  { icon: LucideIcon; from: string; to: string; accent: string }
> = {
  "Real Estate": {
    icon: Home,
    from: "oklch(0.72 0.19 250)",
    to: "oklch(0.5 0.14 260)",
    accent: "oklch(0.82 0.15 200)",
  },
  Restaurant: {
    icon: UtensilsCrossed,
    from: "oklch(0.75 0.18 55)",
    to: "oklch(0.55 0.16 30)",
    accent: "oklch(0.82 0.19 155)",
  },
  Clinic: {
    icon: Stethoscope,
    from: "oklch(0.72 0.17 195)",
    to: "oklch(0.5 0.12 220)",
    accent: "oklch(0.82 0.15 200)",
  },
  Retail: {
    icon: Armchair,
    from: "oklch(0.7 0.2 300)",
    to: "oklch(0.5 0.16 320)",
    accent: "oklch(0.65 0.24 300)",
  },
  Hospitality: {
    icon: BedDouble,
    from: "oklch(0.68 0.16 165)",
    to: "oklch(0.48 0.13 190)",
    accent: "oklch(0.82 0.19 155)",
  },
  Education: {
    icon: GraduationCap,
    from: "oklch(0.7 0.19 280)",
    to: "oklch(0.5 0.15 265)",
    accent: "oklch(0.82 0.15 200)",
  },
};

const DEFAULT_ART = CATEGORY_ART["Real Estate"];

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>(fallback);

  useEffect(() => {
    // Ready to plug into your backend REST API
    // Example:
    // axios.get('/api/portfolio').then(r => setProjects(r.data)).catch(() => {})
    let cancelled = false;
    fetch("/api/portfolio")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: Project[]) => {
        if (!cancelled && Array.isArray(data) && data.length) setProjects(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Portfolio"
            title={
              <>
                Selected <span className="text-gradient">work & results</span>.
              </>
            }
            description="A glimpse of businesses we've helped grow. Full case studies are loaded from your dashboard."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const art = CATEGORY_ART[p.category] ?? DEFAULT_ART;
            const Icon = art.icon;
            return (
            <Reveal key={p.id} delay={(i % 3) * 0.05}>
              <article className="group h-full overflow-hidden rounded-2xl glass transition hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="relative flex h-full w-full items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-105"
                      style={{ background: `linear-gradient(135deg, ${art.from}, ${art.to})` }}
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-25"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                          backgroundSize: "16px 16px",
                        }}
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-3xl"
                        style={{ background: art.accent, opacity: 0.35 }}
                      />
                      <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
                        <Icon className="h-8 w-8 text-white" strokeWidth={1.75} />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-base font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                  </div>
                  <a
                    href="#contact"
                    aria-label={`View ${p.name}`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass transition hover:bg-white/10"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
