import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Google Business Profile",
  "Business Websites",
  "Social Media Management",
  "Social Media Marketing",
  "AI Lead Automation",
  "QR Code Solutions",
  "WhatsApp Automation",
  "CRM & Dashboards",
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Your complete business growth partner — websites, marketing, AI automation and
              everything in between.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Linkedin, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full glass transition hover:bg-white/10"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s} className="text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+919912799855"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4" /> +91 99127 99855
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@digitalcreatorshub.in"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" /> hello@digitalcreatorshub.in
                </a>
              </li>
              <li className="text-muted-foreground">Founder & CEO: Satish Chittelu</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Digital Creators Hub. All rights reserved.</p>
          <p>Crafted with care. Built to grow businesses.</p>
        </div>
      </div>
    </footer>
  );
}
