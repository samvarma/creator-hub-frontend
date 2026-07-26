import { motion } from "motion/react";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-60" />

      {/* Floating shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-[oklch(0.72_0.19_250/0.25)] blur-3xl animate-float" />
        <div className="absolute right-[8%] top-[30%] h-56 w-56 rounded-full bg-[oklch(0.65_0.24_300/0.25)] blur-3xl animate-pulse-glow" />
        <div className="absolute left-[30%] bottom-[10%] h-32 w-32 rounded-full bg-[oklch(0.82_0.15_200/0.25)] blur-3xl animate-float" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.82_0.15_200)]" />
            AI-powered growth studio
            <span className="mx-1 h-1 w-1 rounded-full bg-white/30" />
            Est. Growth Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-foreground">Your Complete </span>
            <span className="text-gradient">Business Growth</span>
            <br className="hidden sm:block" />
            <span className="text-foreground"> Partner</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A strong business starts with strong marketing. Every business needs a powerful
            digital presence to attract customers, build trust, and increase sales — we build
            that presence end-to-end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full btn-primary-gradient px-6 py-3 text-sm font-semibold"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
            >
              Our Services
            </a>
            <a
              href="tel:+919912799855"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Phone className="h-4 w-4" /> +91 99127 99855
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground"
          >
            {[
              "Local SEO",
              "AI Automation",
              "Google Business",
              "WhatsApp Systems",
              "CRM & Dashboards",
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.19_155)]" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — Logo showcase card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square rounded-3xl glass-strong p-8 glow-ring">
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl"
              style={{ background: "var(--gradient-glow)" }}
            />
            {/* Floating AI orbs */}
            <motion.div
              className="absolute -top-6 -left-6 h-16 w-16 rounded-2xl glass grid place-items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-3 w-3 rounded-full bg-[oklch(0.82_0.15_200)] shadow-[0_0_20px_oklch(0.82_0.15_200)]" />
            </motion.div>
            <motion.div
              className="absolute -bottom-8 -right-4 h-20 w-20 rounded-3xl glass grid place-items-center"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-6 w-6 text-[oklch(0.65_0.24_300)]" />
            </motion.div>
            <motion.div
              className="absolute top-1/3 -right-8 h-12 w-12 rounded-2xl glass grid place-items-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="h-2 w-2 rounded-full bg-[oklch(0.82_0.19_155)] shadow-[0_0_18px_oklch(0.82_0.19_155)]" />
            </motion.div>

            <div className="relative flex h-full flex-col items-center justify-center gap-6">
              <div className="scale-[2]">
                <Logo size={140} withWordmark={false} />
              </div>
              <div className="text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Digital Creators Hub
                </div>
                <div className="mt-1 text-sm text-gradient-brand font-semibold">
                  Growth. Automated. Beautifully.
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
