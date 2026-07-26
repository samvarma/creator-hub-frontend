import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

type Testimonial = {
  id: string | number;
  name: string;
  company: string;
  rating: number;
  comment: string;
  image?: string;
};

const fallback: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    company: "Skyline Realty",
    rating: 5,
    comment:
      "Our lead flow tripled in 3 months. The AI WhatsApp follow-ups alone paid back the entire investment.",
  },
  {
    id: 2,
    name: "Priya S.",
    company: "Curry Leaf Kitchen",
    rating: 5,
    comment:
      "QR ordering + Google reviews made our restaurant number one on Maps in the area. Simply outstanding.",
  },
  {
    id: 3,
    name: "Dr. Anil Reddy",
    company: "Aster Dental",
    rating: 5,
    comment:
      "Professional, responsive and results-driven. We rank in the Google Top 3 and stay booked out weekly.",
  },
];

export function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>(fallback);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: Testimonial[]) => {
        if (Array.isArray(d) && d.length) setItems(d);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);

  const t = items[idx];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Testimonials"
            title={
              <>
                What our <span className="text-gradient">clients say</span>.
              </>
            }
          />
        </Reveal>

        <Reveal>
          <div className="relative mt-14 overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
            <Quote className="absolute -top-4 -left-2 h-24 w-24 rotate-12 text-white/[0.04]" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[oklch(0.85_0.17_85)] text-[oklch(0.85_0.17_85)]" />
                  ))}
                </div>
                <p className="mt-5 text-xl leading-relaxed text-foreground/90 sm:text-2xl">
                  “{t.comment}”
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-full glass">
                    {t.image ? (
                      <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-sm font-semibold">
                        {t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.company}</div>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-1.5">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx ? "w-8 bg-white" : "w-3 bg-white/25"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIdx((v) => (v - 1 + items.length) % items.length)}
                  aria-label="Previous"
                  className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIdx((v) => (v + 1) % items.length)}
                  aria-label="Next"
                  className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
