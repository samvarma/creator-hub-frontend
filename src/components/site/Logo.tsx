import { motion } from "motion/react";

type Props = { size?: number; withWordmark?: boolean; className?: string };

export function Logo({ size = 40, withWordmark = true, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative shrink-0"
        style={{ width: size, height: size }}
      >
        <img
          src="/dch-logo.png"
          alt="Digital Creators Hub"
          width={size}
          height={size}
          className="h-full w-full rounded-full object-cover"
        />
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
