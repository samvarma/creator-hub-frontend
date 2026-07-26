import { motion } from "motion/react";

type Props = { size?: number; withWordmark?: boolean; className?: string };

/**
 * Placeholder brand mark — replace `src/components/site/Logo.tsx` with the
 * uploaded official Digital Creators Hub logo when available.
 */
export function Logo({ size = 40, withWordmark = true, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 48 48" width={size} height={size} aria-label="Digital Creators Hub">
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.82 0.15 200)" />
              <stop offset="55%" stopColor="oklch(0.72 0.19 250)" />
              <stop offset="100%" stopColor="oklch(0.65 0.24 300)" />
            </linearGradient>
            <linearGradient id="lg2" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.82 0.19 155)" />
              <stop offset="100%" stopColor="oklch(0.72 0.19 250)" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#lg1)" opacity="0.18" />
          <path
            d="M14 14h11a10 10 0 0 1 0 20H14z"
            fill="none"
            stroke="url(#lg1)"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <circle cx="34" cy="15" r="3" fill="url(#lg2)" />
          <circle cx="10" cy="34" r="2" fill="url(#lg2)" opacity="0.8" />
        </svg>
      </motion.div>
      {withWordmark && (
        <div className="flex flex-col leading-none">
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Digital
          </span>
          <span className="text-sm font-semibold text-foreground">Creators Hub</span>
        </div>
      )}
    </div>
  );
}
