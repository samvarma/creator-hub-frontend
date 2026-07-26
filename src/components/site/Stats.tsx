import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Reveal";

const stats = [
  { label: "Businesses Served", value: 250, suffix: "+" },
  { label: "Projects Completed", value: 480, suffix: "+" },
  { label: "Happy Clients", value: 220, suffix: "+" },
  { label: "Customer Satisfaction", value: 98, suffix: "%" },
  { label: "Years of Experience", value: 7, suffix: "+" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="text-4xl font-bold sm:text-5xl text-gradient">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 rounded-3xl glass-strong p-6 sm:p-8 md:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
