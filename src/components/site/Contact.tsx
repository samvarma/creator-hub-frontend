import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, User, Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

const SERVICES = [
  "Google Business Profile Optimization",
  "Professional Business Website",
  "Social Media Management",
  "Social Media Marketing",
  "AI Lead Automation",
  "QR Code Solutions",
  "WhatsApp Business Automation",
  "Business Automation (CRM & Dashboards)",
] as const;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [services, setServices] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const fd = new FormData(e.currentTarget);
    fd.delete("services");
    services.forEach((s) => fd.append("services", s));
    const payload = {
      ...Object.fromEntries(fd.entries()),
      services,
    };

    try {
      // Wire to your existing backend REST API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setServices([]);
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again or WhatsApp us directly.");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title={
              <>
                Let's build your <span className="text-gradient">growth engine</span>.
              </>
            }
            description="Tell us about your business. We'll get back within a few hours."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Info + Map */}
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl glass-strong p-7">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Digital Creators Hub
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl glass">
                    <User className="h-5 w-5 text-[oklch(0.82_0.15_200)]" />
                  </div>
                  <div>
                    <div className="text-base font-semibold">Satish Chittelu</div>
                    <div className="text-xs text-muted-foreground">Founder & CEO</div>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <a href="tel:+919912799855" className="flex items-center gap-3 text-foreground/90 hover:text-foreground">
                    <Phone className="h-4 w-4 text-[oklch(0.82_0.19_155)]" />
                    +91 99127 99855
                  </a>
                  <a
                    href="mailto:hello@digitalcreatorshub.in"
                    className="flex items-center gap-3 text-foreground/90 hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 text-[oklch(0.82_0.15_200)]" />
                    hello@digitalcreatorshub.in
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    India — Serving businesses worldwide
                  </div>
                </div>

                <a
                  href="https://wa.me/919912799855"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                  style={{ background: "oklch(0.72 0.18 155)", color: "oklch(0.15 0.03 265)" }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl glass-strong">
                <div className="relative aspect-[16/10] w-full">
                  <iframe
                    title="Location map"
                    src="https://www.google.com/maps?q=India&output=embed"
                    className="absolute inset-0 h-full w-full grayscale-[40%] opacity-90"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl glass-strong p-7 sm:p-9"
              noValidate
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required placeholder="Your name" />
                <Field label="Phone" name="phone" required placeholder="+91 …" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="sm:col-span-2"
                />
                <Field
                  label="Company / Business"
                  name="company"
                  placeholder="Optional"
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <ServicesMultiSelect value={services} onChange={setServices} />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-muted-foreground">
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your goals…"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-white/20 focus:bg-white/[0.07]"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  We reply within a few hours on business days.
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-full btn-primary-gradient px-6 py-3 text-sm font-semibold disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Message sent
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
              {error && <p className="mt-3 text-xs text-destructive">{error}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesMultiSelect({
  value,
  onChange,
}: {
  value: string[];
  onChange: (next: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function toggle(service: string) {
    onChange(
      value.includes(service)
        ? value.filter((s) => s !== service)
        : [...value, service]
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <label className="text-xs font-medium text-muted-foreground">
        Services you're interested in
      </label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="mt-1.5 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm outline-none transition focus:border-white/20 focus:bg-white/[0.07]"
      >
        <span className={value.length ? "text-foreground/90" : "text-muted-foreground"}>
          {value.length
            ? `${value.length} service${value.length > 1 ? "s" : ""} selected`
            : "Select the services you need"}
        </span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {value.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {value.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/80"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {open && (
        <div
          role="listbox"
          aria-multiselectable="true"
          className="absolute z-20 mt-2 w-full rounded-xl border border-white/10 bg-[oklch(0.16_0.02_265)]/95 p-2 shadow-xl backdrop-blur-md"
        >
          {SERVICES.map((service) => {
            const checked = value.includes(service);
            return (
              <label
                key={service}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-white/5"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(service)}
                  className="h-4 w-4 rounded border-white/20 bg-white/5 accent-[oklch(0.72_0.18_155)]"
                />
                {service}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-white/20 focus:bg-white/[0.07]"
      />
    </div>
  );
}
