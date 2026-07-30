import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Phone,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const VIDEOS = [
  { src: "/DCH_Ad.mp4", caption: "Digital Creators Hub" },
  { src: "/Haveli_Ad.mp4", caption: "Client success story" },
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  // Load + play the newly selected video whenever the index changes
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.muted = muted;
    if (playing) v.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoIndex]);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  function nextVideo() {
    setVideoIndex((i) => (i + 1) % VIDEOS.length);
  }

  function prevVideo() {
    setVideoIndex((i) => (i - 1 + VIDEOS.length) % VIDEOS.length);
  }

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

        {/* Right — Video testimonial card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]"
        >
          <div className="relative aspect-[480/854] overflow-hidden rounded-3xl glass-strong glow-ring">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={VIDEOS[videoIndex].src}
              autoPlay
              muted
              playsInline
              aria-label="Client video testimonial"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={nextVideo}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.1 0.02 265 / 0.75) 0%, oklch(0.1 0.02 265 / 0.1) 45%, transparent 70%)",
              }}
            />

            {/* Playback controls */}
            <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause video" : "Play video"}
                className="grid h-9 w-9 place-items-center rounded-full glass text-white/90 backdrop-blur-md transition hover:bg-white/20"
              >
                {playing ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4 translate-x-[1px]" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="grid h-9 w-9 place-items-center rounded-full glass text-white/90 backdrop-blur-md transition hover:bg-white/20"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 text-center">
              <div className="text-sm font-semibold text-gradient-brand">
                Growth. Automated. Beautifully.
              </div>
              <div className="mt-1 text-xs text-white/70">{VIDEOS[videoIndex].caption}</div>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                {VIDEOS.map((v, i) => (
                  <button
                    key={v.src}
                    type="button"
                    onClick={() => setVideoIndex(i)}
                    aria-label={`Show video ${i + 1}: ${v.caption}`}
                    aria-current={i === videoIndex}
                    className={`h-1.5 rounded-full transition-all ${
                      i === videoIndex ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

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
          <motion.button
            type="button"
            onClick={prevVideo}
            aria-label="Previous video"
            className="absolute top-1/3 -left-8 grid h-12 w-12 place-items-center rounded-2xl glass transition hover:bg-white/15"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            <ChevronLeft
              className="h-5 w-5 text-[oklch(0.82_0.19_155)]"
              style={{ filter: "drop-shadow(0 0 6px oklch(0.82 0.19 155 / 0.7))" }}
            />
          </motion.button>
          <motion.button
            type="button"
            onClick={nextVideo}
            aria-label="Next video"
            className="absolute top-1/3 -right-8 grid h-12 w-12 place-items-center rounded-2xl glass transition hover:bg-white/15"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <ChevronRight
              className="h-5 w-5 text-[oklch(0.82_0.19_155)]"
              style={{ filter: "drop-shadow(0 0 6px oklch(0.82 0.19 155 / 0.7))" }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
