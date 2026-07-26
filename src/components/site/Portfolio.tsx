import { useEffect, useState } from "react";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
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
          {projects.map((p, i) => (
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
                      className="flex h-full w-full items-center justify-center"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <ImageIcon className="h-10 w-10 text-white/40" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
