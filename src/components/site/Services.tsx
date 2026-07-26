import {
  MapPin,
  Globe,
  Instagram,
  Megaphone,
  Bot,
  QrCode,
  MessageCircle,
  LayoutDashboard,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const services = [
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    desc: "Rank in the local Top 3 and turn searches into walk-ins.",
    features: ["GBP Setup", "Local SEO", "Google Top 3 Ranking", "Review Management"],
  },
  {
    icon: Globe,
    title: "Professional Business Website",
    desc: "Fast, beautiful, SEO-ready websites that convert visitors into leads.",
    features: [
      "Business Website",
      "Portfolio Website",
      "Service Pages",
      "Lead Generation Forms",
      "SEO Optimized",
      "Responsive Design",
    ],
  },
  {
    icon: Instagram,
    title: "Social Media Management",
    desc: "Consistent creatives, reels and stories that grow your brand daily.",
    features: [
      "Daily Creative Posts",
      "Reels",
      "Stories",
      "Brand Awareness",
      "Facebook Management",
      "Instagram Management",
    ],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "High-ROI ad campaigns engineered for leads and sales.",
    features: [
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation",
      "Sales Campaigns",
      "Conversion Campaigns",
    ],
  },
  {
    icon: Bot,
    title: "AI Lead Automation",
    desc: "Never lose a lead again — AI follows up, qualifies and books for you.",
    features: [
      "WhatsApp Follow-up",
      "Automatic Reminders",
      "AI Voice Agents",
      "Lead Qualification",
      "Conversion Automation",
    ],
  },
  {
    icon: QrCode,
    title: "QR Code Solutions",
    desc: "Smart QR systems for menus, reviews and instant customer actions.",
    features: [
      "Restaurant Ordering",
      "Digital Menu",
      "Google Review QR",
      "Review Automation",
    ],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Automation",
    desc: "Automate replies, broadcasts and orders — with zero commission.",
    features: [
      "Auto Replies",
      "Broadcast Marketing",
      "Bulk Messaging",
      "Customer Support",
      "Ordering System",
      "Zero Commission Ordering",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Business Automation",
    desc: "A CRM & dashboard that runs your sales, customers and marketing.",
    features: [
      "CRM",
      "Customer Database",
      "Sales Tracking",
      "Workflow Automation",
      "Marketing Dashboard",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-40 -z-10 mx-auto h-72 max-w-4xl blur-3xl"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Our Services"
            title={
              <>
                Everything you need to <span className="text-gradient">grow online</span>.
              </>
            }
            description="From your Google presence to AI-powered automation — one team, one roadmap, one growth engine."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div className="relative">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <s.icon className="h-5 w-5 text-[oklch(0.12_0.03_265)]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition-colors hover:text-[oklch(0.82_0.15_200)]"
                  >
                    Learn more <ArrowUpRight className="h-4 w-4" />
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
