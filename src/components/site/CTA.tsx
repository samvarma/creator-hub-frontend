import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.32 0.14 275), oklch(0.28 0.14 300) 60%, oklch(0.35 0.12 200))",
            }}
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: "oklch(0.82 0.15 200 / 0.5)" }}
            />
            <div className="relative">
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Let's grow your business <span className="text-gradient">together</span>.
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
                Book a free 30-minute strategy call. We'll audit your presence and craft a
                personalised growth roadmap — no obligation.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full btn-primary-gradient px-6 py-3 text-sm font-semibold"
                >
                  Book Free Consultation <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+919912799855"
                  className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold"
                >
                  <Phone className="h-4 w-4" /> Contact Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
