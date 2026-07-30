import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as Hotel, B as ChevronRight, C as LoaderCircle, D as Layers, E as LayoutDashboard, F as Facebook, G as ArrowUpRight, H as Building2, I as Eye, K as ArrowRight, L as Cpu, M as HardHat, N as GraduationCap, O as Instagram, P as Globe, R as Compass, S as Mail, T as LifeBuoy, U as Bot, V as ChevronLeft, W as BadgeIndianRupee, _ as Phone, a as User, b as Megaphone, c as Stethoscope, d as ShoppingBag, f as ShieldCheck, g as Plus, h as QrCode, i as Utensils, j as HeartPulse, k as Image, l as Star, m as Quote, n as X, o as Target, p as Rocket, r as WandSparkles, s as Store, t as Youtube, u as Sparkles, v as MessageCircle, w as Linkedin, x as MapPin, y as Menu, z as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DiIS5Qn9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var dch_logo_png_asset_default = {
	version: 1,
	asset_id: "76371818-0204-4cb3-8857-17b16065a07d",
	project_id: "446e1dbb-8026-4e6b-9f9a-900e14267c0d",
	url: "/__l5e/assets-v1/76371818-0204-4cb3-8857-17b16065a07d/dch-logo.png",
	r2_key: "a/v1/446e1dbb-8026-4e6b-9f9a-900e14267c0d/76371818-0204-4cb3-8857-17b16065a07d/dch-logo.png",
	original_filename: "dch-logo.png",
	size: 1911250,
	content_type: "image/png",
	created_at: "2026-07-26T06:41:43Z"
};
function Logo({ size = 40, withWordmark = true, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-3 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				rotate: -10,
				opacity: 0
			},
			animate: {
				rotate: 0,
				opacity: 1
			},
			transition: { duration: .6 },
			className: "relative shrink-0",
			style: {
				width: size,
				height: size
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: dch_logo_png_asset_default.url,
				alt: "Digital Creators Hub",
				width: size,
				height: size,
				className: "h-full w-full rounded-full object-cover"
			})
		}), withWordmark && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
				children: "Digital"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-semibold text-foreground",
				children: "Creators Hub"
			})]
		})]
	});
}
var links = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#portfolio",
		label: "Portfolio"
	},
	{
		href: "#testimonials",
		label: "Testimonials"
	},
	{
		href: "#faq",
		label: "FAQ"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: `flex items-center justify-between rounded-2xl px-4 py-2.5 sm:px-5 transition-all duration-500 ${scrolled ? "glass-strong shadow-[var(--shadow-card)]" : "bg-transparent"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#home",
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
							children: l.label
						}) }, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "hidden sm:inline-flex items-center gap-2 rounded-full btn-primary-gradient px-4 py-2.5 text-sm font-semibold",
							children: ["Book Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Toggle menu",
							onClick: () => setOpen((v) => !v),
							className: "grid h-10 w-10 place-items-center rounded-full glass lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -10
				},
				className: "mt-2 rounded-2xl glass-strong p-3 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "flex flex-col",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: "block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground",
						children: l.label
					}) }, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							onClick: () => setOpen(false),
							className: "flex items-center justify-center gap-2 rounded-xl btn-primary-gradient px-4 py-3 text-sm font-semibold",
							children: ["Book Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					})]
				})
			}) })]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				style: { background: "var(--gradient-hero)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 grid-lines opacity-60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-[oklch(0.72_0.19_250/0.25)] blur-3xl animate-float" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[8%] top-[30%] h-56 w-56 rounded-full bg-[oklch(0.65_0.24_300/0.25)] blur-3xl animate-pulse-glow" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[30%] bottom-[10%] h-32 w-32 rounded-full bg-[oklch(0.82_0.15_200/0.25)] blur-3xl animate-float" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 14
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						className: "inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[oklch(0.82_0.15_200)]" }),
							"AI-powered growth studio",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 h-1 w-1 rounded-full bg-white/30" }),
							"Est. Growth Partner"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .05
						},
						className: "mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Your Complete "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Business Growth"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: " Partner"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .15
						},
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "A strong business starts with strong marketing. Every business needs a powerful digital presence to attract customers, build trust, and increase sales — we build that presence end-to-end."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .25
						},
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-full btn-primary-gradient px-6 py-3 text-sm font-semibold",
								children: ["Get Started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10",
								children: "Our Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+919912799855",
								className: "inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +91 99127 99855"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .7,
							delay: .4
						},
						className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground",
						children: [
							"Local SEO",
							"AI Automation",
							"Google Business",
							"WhatsApp Systems",
							"CRM & Dashboards"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.19_155)]" }), t]
						}, t))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .92
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .8,
						delay: .2
					},
					className: "relative mx-auto w-full max-w-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square rounded-3xl glass-strong p-8 glow-ring",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-0 rounded-3xl",
								style: { background: "var(--gradient-glow)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute -top-6 -left-6 h-16 w-16 rounded-2xl glass grid place-items-center",
								animate: { y: [
									0,
									-10,
									0
								] },
								transition: {
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-[oklch(0.82_0.15_200)] shadow-[0_0_20px_oklch(0.82_0.15_200)]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute -bottom-8 -right-4 h-20 w-20 rounded-3xl glass grid place-items-center",
								animate: { y: [
									0,
									12,
									0
								] },
								transition: {
									duration: 6,
									repeat: Infinity,
									ease: "easeInOut"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6 text-[oklch(0.65_0.24_300)]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute top-1/3 -right-8 h-12 w-12 rounded-2xl glass grid place-items-center",
								animate: { y: [
									0,
									-8,
									0
								] },
								transition: {
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
									delay: .5
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-[oklch(0.82_0.19_155)] shadow-[0_0_18px_oklch(0.82_0.19_155)]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-full flex-col items-center justify-center gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "scale-[2]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
										size: 140,
										withWordmark: false
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
										children: "Digital Creators Hub"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm text-gradient-brand font-semibold",
										children: "Growth. Automated. Beautifully."
									})]
								})]
							})
						]
					})
				})]
			})
		]
	});
}
function Reveal({ children, delay = 0, y = 24, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function SectionHeader({ eyebrow, title, description, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"} ${align === "center" ? "" : "mx-0"}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.19_250)]" }), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-bold tracking-tight sm:text-5xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: description
			})
		]
	});
}
var stats = [
	{
		label: "Businesses Served",
		value: 250,
		suffix: "+"
	},
	{
		label: "Projects Completed",
		value: 480,
		suffix: "+"
	},
	{
		label: "Happy Clients",
		value: 220,
		suffix: "+"
	},
	{
		label: "Customer Satisfaction",
		value: 98,
		suffix: "%"
	},
	{
		label: "Years of Experience",
		value: 7,
		suffix: "+"
	}
];
function Counter({ to, suffix }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const duration = 1400;
		const start = performance.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(eased * to));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "text-4xl font-bold sm:text-5xl text-gradient",
		children: [n, suffix]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 rounded-3xl glass-strong p-6 sm:p-8 md:grid-cols-5",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: s.value,
						suffix: s.suffix
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			}) })
		})
	});
}
var items$1 = [
	{
		icon: Compass,
		title: "Who We Are",
		body: "A team of designers, marketers and AI engineers building growth systems for modern businesses across India."
	},
	{
		icon: Target,
		title: "Our Mission",
		body: "Help every business — from local shops to scaling brands — win customers with beautiful digital presence and automation."
	},
	{
		icon: Eye,
		title: "Our Vision",
		body: "Become the most trusted growth partner for small and medium businesses in the AI era."
	},
	{
		icon: Rocket,
		title: "Growth Philosophy",
		body: "Attract, convert, retain. Every asset we build is measured by the revenue and reputation it creates."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "About Us",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"We turn digital presence into ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "real revenue"
					}),
					"."
				] }),
				description: "Digital Creators Hub is your single partner for websites, marketing, automation and AI — engineered to grow your business faster and smarter."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: items$1.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-xl",
								style: { background: "var(--gradient-brand)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5 text-[oklch(0.12_0.03_265)]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold",
								children: it.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: it.body
							})
						]
					})
				}, it.title))
			})]
		})
	});
}
var services$1 = [
	{
		icon: MapPin,
		title: "Google Business Profile Optimization",
		desc: "Rank in the local Top 3 and turn searches into walk-ins.",
		features: [
			"GBP Setup",
			"Local SEO",
			"Google Top 3 Ranking",
			"Review Management"
		]
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
			"Responsive Design"
		]
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
			"Instagram Management"
		]
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
			"Conversion Campaigns"
		]
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
			"Conversion Automation"
		]
	},
	{
		icon: QrCode,
		title: "QR Code Solutions",
		desc: "Smart QR systems for menus, reviews and instant customer actions.",
		features: [
			"Restaurant Ordering",
			"Digital Menu",
			"Google Review QR",
			"Review Automation"
		]
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
			"Zero Commission Ordering"
		]
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
			"Marketing Dashboard"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-x-0 top-40 -z-10 mx-auto h-72 max-w-4xl blur-3xl",
			style: { background: "var(--gradient-glow)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Our Services",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Everything you need to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "grow online"
					}),
					"."
				] }),
				description: "From your Google presence to AI-powered automation — one team, one roadmap, one growth engine."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: services$1.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
							style: { background: "var(--gradient-brand)" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 place-items-center rounded-2xl",
									style: { background: "var(--gradient-brand)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-[oklch(0.12_0.03_265)]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-semibold leading-snug",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: s.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground",
										children: f
									}, f))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition-colors hover:text-[oklch(0.82_0.15_200)]",
									children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								})
							]
						})]
					})
				}, s.title))
			})]
		})]
	});
}
var items = [
	{
		icon: Layers,
		title: "All Digital Solutions Under One Roof",
		body: "One accountable partner for websites, marketing, AI, CRM and support."
	},
	{
		icon: Cpu,
		title: "AI Powered Automation",
		body: "Reduce manual work with intelligent workflows that follow up and convert."
	},
	{
		icon: BadgeIndianRupee,
		title: "Affordable Pricing",
		body: "Startup-friendly pricing without cutting corners on quality or outcomes."
	},
	{
		icon: WandSparkles,
		title: "Customized Solutions",
		body: "Systems built around your business, industry and customer journey."
	},
	{
		icon: LifeBuoy,
		title: "Dedicated Business Support",
		body: "Real people on WhatsApp and calls when you need them the most."
	},
	{
		icon: ShieldCheck,
		title: "End-to-End Implementation",
		body: "We plan, build, launch and grow — you focus on running your business."
	}
];
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Why Choose Us",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Built for businesses that want ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "real results"
					}),
					"."
				] })
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl glass p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5 text-[oklch(0.82_0.15_200)]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-semibold",
								children: it.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: it.body
							})
						]
					})
				}, it.title))
			})]
		})
	});
}
var steps = [
	{
		n: "01",
		title: "Discovery",
		body: "Understand your goals, audience and offer."
	},
	{
		n: "02",
		title: "Strategy",
		body: "Craft the roadmap for growth, channels and KPIs."
	},
	{
		n: "03",
		title: "Design",
		body: "Beautiful brand-aligned interfaces and creatives."
	},
	{
		n: "04",
		title: "Development",
		body: "Websites, automations and integrations built to scale."
	},
	{
		n: "05",
		title: "Launch",
		body: "Go live with campaigns, tracking and QA."
	},
	{
		n: "06",
		title: "Growth",
		body: "Iterate weekly on data — compound your results."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Our Process",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"A proven ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "6-step growth system"
					}),
					"."
				] })
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block",
					style: { background: "linear-gradient(180deg, transparent, oklch(1 0 0 / 0.15), transparent)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-6 lg:space-y-0",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:col-start-2" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `${i % 2 === 1 ? "lg:text-left" : "lg:text-right"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl glass p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs uppercase tracking-[0.25em] text-[oklch(0.82_0.15_200)]",
											children: ["Step ", s.n]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 text-2xl font-semibold",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: s.body
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block" })]
						})
					}, s.n))
				})]
			})]
		})
	});
}
var list = [
	{
		icon: Building2,
		label: "Real Estate"
	},
	{
		icon: Utensils,
		label: "Restaurants"
	},
	{
		icon: Hotel,
		label: "Hotels"
	},
	{
		icon: Stethoscope,
		label: "Clinics"
	},
	{
		icon: HeartPulse,
		label: "Hospitals"
	},
	{
		icon: ShoppingBag,
		label: "Retail Stores"
	},
	{
		icon: GraduationCap,
		label: "Educational Institutes"
	},
	{
		icon: HardHat,
		label: "Construction"
	},
	{
		icon: Rocket,
		label: "Startups"
	},
	{
		icon: Store,
		label: "Small Businesses"
	}
];
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Industries",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Trusted across ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "10+ industries"
					}),
					"."
				] })
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",
				children: list.map((i, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: idx % 5 * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex items-center gap-3 rounded-2xl glass p-4 transition hover:-translate-y-1 hover:bg-white/[0.06]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { className: "h-5 w-5 text-[oklch(0.82_0.19_155)]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: i.label
						})]
					})
				}, i.label))
			})]
		})
	});
}
var fallback$1 = [
	{
		id: 1,
		name: "Skyline Realty",
		category: "Real Estate",
		description: "Lead-gen website + AI follow-up automation."
	},
	{
		id: 2,
		name: "Curry Leaf Kitchen",
		category: "Restaurant",
		description: "QR ordering, WhatsApp orders and reviews."
	},
	{
		id: 3,
		name: "Aster Dental",
		category: "Clinic",
		description: "Local SEO to Google Top 3 in 90 days."
	},
	{
		id: 4,
		name: "Nova Interiors",
		category: "Retail",
		description: "Portfolio site + Meta ad funnels."
	},
	{
		id: 5,
		name: "Vista Hotels",
		category: "Hospitality",
		description: "Direct booking site with WhatsApp CRM."
	},
	{
		id: 6,
		name: "BrightPath EdTech",
		category: "Education",
		description: "Full growth stack: ads, CRM and site."
	}
];
function Portfolio() {
	const [projects, setProjects] = (0, import_react.useState)(fallback$1);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		fetch("/api/portfolio").then((r) => r.ok ? r.json() : Promise.reject()).then((data) => {
			if (!cancelled && Array.isArray(data) && data.length) setProjects(data);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Portfolio",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Selected ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "work & results"
					}),
					"."
				] }),
				description: "A glimpse of businesses we've helped grow. Full case studies are loaded from your dashboard."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group h-full overflow-hidden rounded-2xl glass transition hover:-translate-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [
								p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.name,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-full w-full items-center justify-center",
									style: { background: "var(--gradient-hero)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-10 w-10 text-white/40" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground",
									children: p.category
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: p.description
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								"aria-label": `View ${p.name}`,
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-full glass transition hover:bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
							})]
						})]
					})
				}, p.id))
			})]
		})
	});
}
var fallback = [
	{
		id: 1,
		name: "Ramesh Kumar",
		company: "Skyline Realty",
		rating: 5,
		comment: "Our lead flow tripled in 3 months. The AI WhatsApp follow-ups alone paid back the entire investment."
	},
	{
		id: 2,
		name: "Priya S.",
		company: "Curry Leaf Kitchen",
		rating: 5,
		comment: "QR ordering + Google reviews made our restaurant number one on Maps in the area. Simply outstanding."
	},
	{
		id: 3,
		name: "Dr. Anil Reddy",
		company: "Aster Dental",
		rating: 5,
		comment: "Professional, responsive and results-driven. We rank in the Google Top 3 and stay booked out weekly."
	}
];
function Testimonials() {
	const [items, setItems] = (0, import_react.useState)(fallback);
	const [idx, setIdx] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		fetch("/api/testimonials").then((r) => r.ok ? r.json() : Promise.reject()).then((d) => {
			if (Array.isArray(d) && d.length) setItems(d);
		}).catch(() => {});
	}, []);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setIdx((v) => (v + 1) % items.length), 6e3);
		return () => clearInterval(t);
	}, [items.length]);
	const t = items[idx];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Testimonials",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"What our ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "clients say"
					}),
					"."
				] })
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-14 overflow-hidden rounded-3xl glass-strong p-8 sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute -top-4 -left-2 h-24 w-24 rotate-12 text-white/[0.04]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -16
							},
							transition: { duration: .5 },
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1",
									children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-[oklch(0.85_0.17_85)] text-[oklch(0.85_0.17_85)]" }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-xl leading-relaxed text-foreground/90 sm:text-2xl",
									children: [
										"“",
										t.comment,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
									className: "mt-8 flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 place-items-center overflow-hidden rounded-full glass",
										children: t.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: t.image,
											alt: t.name,
											className: "h-full w-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold",
											children: t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: t.company
									})] })]
								})
							]
						}, t.id)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5",
							children: items.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIdx(i),
								"aria-label": `Show testimonial ${i + 1}`,
								className: `h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-3 bg-white/25"}`
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIdx((v) => (v - 1 + items.length) % items.length),
								"aria-label": "Previous",
								className: "grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIdx((v) => (v + 1) % items.length),
								"aria-label": "Next",
								className: "grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							})]
						})]
					})
				]
			}) })]
		})
	});
}
var faqs = [
	{
		q: "What services does Digital Creators Hub offer?",
		a: "We offer end-to-end digital growth — websites, Local SEO, Google Business Profile, social media, ads, AI automation, WhatsApp systems, QR solutions and CRM dashboards."
	},
	{
		q: "How long does it take to see results?",
		a: "Websites go live in 7–14 days. Local SEO and ad campaigns typically show measurable growth in the first 30–60 days."
	},
	{
		q: "Do you work with small and local businesses?",
		a: "Absolutely. We specialize in helping local businesses, clinics, restaurants, real estate and startups grow with affordable growth systems."
	},
	{
		q: "Can you integrate AI and automations with my existing tools?",
		a: "Yes. Our automations connect with WhatsApp, CRMs, Google Sheets, Meta Ads and most modern business tools."
	},
	{
		q: "How do I get started?",
		a: "Book a free consultation via the contact form or call +91 99127 99855 — we'll craft a custom growth plan for your business."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "FAQ",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Frequently asked ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "questions"
					}),
					"."
				] })
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 space-y-3",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .04,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl glass",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen(isOpen ? null : i),
								"aria-expanded": isOpen,
								className: "flex w-full items-center justify-between gap-4 px-5 py-5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-medium",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									animate: { rotate: isOpen ? 45 : 0 },
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								initial: false,
								children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										height: 0,
										opacity: 0
									},
									animate: {
										height: "auto",
										opacity: 1
									},
									exit: {
										height: 0,
										opacity: 0
									},
									transition: {
										duration: .3,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "px-5 pb-5 text-sm leading-relaxed text-muted-foreground",
										children: f.a
									})
								})
							})]
						})
					}, f.q);
				})
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center",
				style: { background: "linear-gradient(135deg, oklch(0.32 0.14 275), oklch(0.28 0.14 300) 60%, oklch(0.35 0.12 200))" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-0 grid-lines opacity-40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl",
						style: { background: "oklch(0.82 0.15 200 / 0.5)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-3xl font-bold tracking-tight sm:text-5xl",
								children: [
									"Let's grow your business ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "together"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg",
								children: "Book a free 30-minute strategy call. We'll audit your presence and craft a personalised growth roadmap — no obligation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-full btn-primary-gradient px-6 py-3 text-sm font-semibold",
									children: ["Book Free Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+919912799855",
									className: "inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Contact Us"]
								})]
							})
						]
					})
				]
			}) })
		})
	});
}
function Contact() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)(null);
	async function onSubmit(e) {
		e.preventDefault();
		setStatus("loading");
		setError(null);
		const fd = new FormData(e.currentTarget);
		const payload = Object.fromEntries(fd.entries());
		try {
			if (!(await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			})).ok) throw new Error("Request failed");
			setStatus("success");
			e.target.reset();
		} catch (err) {
			setStatus("error");
			setError("Something went wrong. Please try again or WhatsApp us directly.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Contact",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Let's build your ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "growth engine"
					}),
					"."
				] }),
				description: "Tell us about your business. We'll get back within a few hours."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl glass-strong p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
								children: "Digital Creators Hub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 place-items-center rounded-xl glass",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5 text-[oklch(0.82_0.15_200)]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-base font-semibold",
									children: "Satish Chittelu"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Founder & CEO"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+919912799855",
										className: "flex items-center gap-3 text-foreground/90 hover:text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[oklch(0.82_0.19_155)]" }), "+91 99127 99855"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "mailto:hello@digitalcreatorshub.in",
										className: "flex items-center gap-3 text-foreground/90 hover:text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-[oklch(0.82_0.15_200)]" }), "hello@digitalcreatorshub.in"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), "India — Serving businesses worldwide"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/919912799855",
								target: "_blank",
								rel: "noreferrer",
								className: "mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
								style: {
									background: "oklch(0.72 0.18 155)",
									color: "oklch(0.15 0.03 265)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "Chat on WhatsApp"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-3xl glass-strong",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-[16/10] w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Location map",
								src: "https://www.google.com/maps?q=India&output=embed",
								className: "absolute inset-0 h-full w-full grayscale-[40%] opacity-90",
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade"
							})
						})
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "rounded-3xl glass-strong p-7 sm:p-9",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full name",
										name: "name",
										required: true,
										placeholder: "Your name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone",
										name: "phone",
										required: true,
										placeholder: "+91 …"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										name: "email",
										type: "email",
										required: true,
										placeholder: "you@company.com",
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Company / Business",
										name: "company",
										placeholder: "Optional",
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-medium text-muted-foreground",
											children: "How can we help?"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											name: "message",
											required: true,
											rows: 4,
											placeholder: "Tell us about your goals…",
											className: "mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-white/20 focus:bg-white/[0.07]"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "We reply within a few hours on business days."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: status === "loading",
									className: "inline-flex items-center gap-2 rounded-full btn-primary-gradient px-6 py-3 text-sm font-semibold disabled:opacity-70",
									children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Sending…"] }) : status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Message sent"] }) : "Send Message"
								})]
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-destructive",
								children: error
							})
						]
					})
				})]
			})]
		})
	});
}
function Field({ label, className = "", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...props,
			className: "mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-white/20 focus:bg-white/[0.07]"
		})]
	});
}
var quickLinks = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#portfolio",
		label: "Portfolio"
	},
	{
		href: "#testimonials",
		label: "Testimonials"
	},
	{
		href: "#faq",
		label: "FAQ"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var services = [
	"Google Business Profile",
	"Business Websites",
	"Social Media Management",
	"Social Media Marketing",
	"AI Lead Automation",
	"QR Code Solutions",
	"WhatsApp Automation",
	"CRM & Dashboards"
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative mt-10 border-t border-white/10 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
							children: "Your complete business growth partner — websites, marketing, AI automation and everything in between."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex gap-2",
							children: [
								Facebook,
								Instagram,
								Linkedin,
								Youtube
							].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Social link",
								className: "grid h-9 w-9 place-items-center rounded-full glass transition hover:bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4" })
							}, i))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: quickLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-muted-foreground transition-colors hover:text-foreground",
							children: l.label
						}) }, l.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-muted-foreground",
							children: s
						}, s))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+919912799855",
								className: "flex items-center gap-2 text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +91 99127 99855"]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:hello@digitalcreatorshub.in",
								className: "flex items-center gap-2 text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " hello@digitalcreatorshub.in"]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted-foreground",
								children: "Founder & CEO: Satish Chittelu"
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Digital Creators Hub. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Crafted with care. Built to grow businesses." })]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
