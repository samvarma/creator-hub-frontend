import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const faqs = [
  {
    q: "What services does Digital Creators Hub offer?",
    a: "We offer end-to-end digital growth — websites, Local SEO, Google Business Profile, social media, ads, AI automation, WhatsApp systems, QR solutions and CRM dashboards.",
  },
  {
    q: "How long does it take to see results?",
    a: "Websites go live in 7–14 days. Local SEO and ad campaigns typically show measurable growth in the first 30–60 days.",
  },
  {
    q: "Do you work with small and local businesses?",
    a: "Absolutely. We specialize in helping local businesses, clinics, restaurants, real estate and startups grow with affordable growth systems.",
  },
  {
    q: "Can you integrate AI and automations with my existing tools?",
    a: "Yes. Our automations connect with WhatsApp, CRMs, Google Sheets, Meta Ads and most modern business tools.",
  },
  {
    q: "How do I get started?",
    a: "Book a free consultation via the contact form or call +91 99127 99855 — we'll craft a custom growth plan for your business.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="FAQ"
            title={
              <>
                Frequently asked <span className="text-gradient">questions</span>.
              </>
            }
          />
        </Reveal>

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="rounded-2xl glass">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-base font-medium">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
