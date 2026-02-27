import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MainLayout from "~/components/layout/main";
import { variants } from "~/lib/animations";
import type { MetaFunction } from "@remix-run/node";

const ABOUT_TITLE =
	"About Circle Digital | Brand Repositioning & Digital Systems";

const ABOUT_DESCRIPTION =
	"Circle Digital is a small senior studio in South Africa. We help growing businesses reposition their brand with clearer messaging, premium design, and high-performance websites built to convert.";

const ABOUT_IMAGE =
	"https://res.cloudinary.com/dfxorvtuc/image/upload/v1770293729/Screenshot_2026-02-05_at_14.12.47_qebbly.png";

const CANONICAL_URL = "https://circledigital.co.za/about-us";

export const meta: MetaFunction = () => {
	return [
		{ title: ABOUT_TITLE },
		{ name: "description", content: ABOUT_DESCRIPTION },

		// Canonical
		{ tagName: "link", rel: "canonical", href: CANONICAL_URL },

		// Open Graph
		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: "Circle Digital" },
		{ property: "og:title", content: ABOUT_TITLE },
		{ property: "og:description", content: ABOUT_DESCRIPTION },
		{ property: "og:url", content: CANONICAL_URL },
		{ property: "og:image", content: ABOUT_IMAGE },
		{ property: "og:image:alt", content: "Circle Digital — About page hero image" },
	];
};


function GlassCard({
	eyebrow,
	title,
	body,
}: {
	eyebrow: string;
	title: string;
	body: string;
}) {
	return (
		<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
			<p className="relative text-[11px] tracking-[0.35em] uppercase text-pink-600/55">{eyebrow}</p>
			<h3 className="relative mt-3 text-lg font-medium text-white">{title}</h3>
			<p className="relative mt-2 text-sm leading-relaxed text-white/65">{body}</p>
		</div>
	);
}

export default function About() {
	return (
		<MainLayout>
			{/* HERO */}
			<section className="relative overflow-hidden">

				<motion.div
					className="absolute inset-0 will-change-transform"
					variants={variants.background}
					initial="hidden"
					animate="show"
				>
					<img
						src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1770202764/aboutus-hero_xqqhf7.jpg"
						alt="Abstract 3D metallic sculpture"
						className="absolute -inset-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)] object-cover object-top md:object-center"
					/>
					<div
						className="absolute inset-0"
						style={{
							background: `
              linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.9) 100%),
              radial-gradient(80% 70% at 50% 55%, transparent 40%, rgba(0,0,0,0.55) 100%)
            `,
						}}
					/>
				</motion.div>

				<div className="relative mx-auto container px-6 pt-10 md:pt-28 pb-16 md:pb-20">
					<div className="max-w-3xl">
						<motion.p
							variants={variants.fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-white/60">
							About Circle
						</motion.p>
						<motion.h1 variants={variants.fadeUp} className="mt-5 text-4xl md:text-6xl font-medium leading-[0.98] tracking-[-0.02em] text-white">
							A studio built for businesses who’ve outgrown their brand.
						</motion.h1>
						<motion.p
							variants={variants.fadeUp} className="mt-6 text-white/65 leading-relaxed max-w-2xl">
							We help growing businesses align their brand with the level they’re operating at, through sharper messaging, premium design, and performance-led builds.
						</motion.p>

						<motion.div
							variants={variants.fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
							<a
								href="/contact-us"
								className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
							>
								Start a project <ArrowUpRight className="ml-2 h-4 w-4" />
							</a>
							<a
								href="/work"
								className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition backdrop-blur"
							>
								View our work
							</a>
						</motion.div>
					</div>
				</div>
			</section>

			{/* STORY + IMAGE PANEL */}
			<section className="relative py-16 md:py-20">
				<div className="mx-auto container px-6">
					<div className="space-y-6">
						<p className="text-[11px] tracking-[0.35em] uppercase text-pink-600/60">
							Our story
						</p>

						<h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
							We kept seeing the same problem: strong businesses, unclear digital presence.
						</h2>

						<div className="text-white/65 leading-relaxed grid md:grid-cols-2 gap-12">
							<p>
								Many teams do great work but their brand, website, and messaging still reflect an earlier stage. The result is inconsistency: mixed signals, slower trust, and missed opportunities. Circle exists to close that gap through repositioning and systems that hold up over time.
							</p>
							<p>
								We work as a small senior team: one side focused on positioning, messaging, and brand direction - the other on building fast, scalable digital experiences that support real acquisition.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-14 md:py-16">
				<div className="mx-auto container px-6">
					<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-xl">
						{/* subtle glow */}
						<div className="pointer-events-none absolute inset-0 opacity-60">
							<div
								className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
								aria-hidden
							/>
						</div>

						<div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
							<div className="max-w-xl">
								<p className="text-[11px] tracking-[0.35em] uppercase text-pink-600/60">
									Best for
								</p>
								<h3 className="mt-4 text-2xl md:text-3xl font-medium tracking-[-0.02em] text-white">
									Teams who’ve outgrown their current brand.
								</h3>
								<p className="mt-4 text-white/65 leading-relaxed">
									If your work is strong but your positioning, messaging, or website still reflects an earlier stage,
									this is for you.
								</p>
							</div>

							<ul className="relative space-y-3 text-sm md:text-[15px] text-white/75">
								{[
									"Have outgrown their current website or identity",
									"Need clearer positioning and sharper messaging",
									"Want to elevate credibility to attract better clients & talent",
									"Need a digital presence that converts attention into enquiries",
									"Are ready to invest in a premium foundation, not quick fixes",
								].map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-1.5 h-2 w-2 rounded-full bg-pink-600/40 shrink-0" />
										<span className="leading-relaxed">{item}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="relative mt-10 flex flex-col sm:flex-row gap-3">
							<a
								href="/contact-us"
								className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
							>
								Request a call <span className="ml-2">→</span>
							</a>
							<a
								href="/work"
								className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition backdrop-blur"
							>
								See examples
							</a>
						</div>

						<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
					</div>
				</div>
			</section>

			{/* WHAT WE BELIEVE */}
			<section className="relative py-16 md:py-20">
				<div className="mx-auto container px-6">
					<div className="max-w-2xl">
						<p className="text-[11px] tracking-[0.35em] uppercase text-pink-600/60">
							How we think
						</p>
						<h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
							Brand is not a logo. It’s the clarity people buy into.
						</h2>
						<p className="mt-4 text-white/65 leading-relaxed">
							We’re deliberate about what we make and why. Our work is built to support real outcomes: stronger positioning, clearer messaging, better conversion, and a presence your team can grow with.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
						<GlassCard
							eyebrow="Clarity"
							title="We simplify the message first."
							body="Clarity builds trust. We shape the positioning before we touch design so every asset has direction."
						/>
						<GlassCard
							eyebrow="Craft"
							title="Premium lives in the details."
							body="From typography to performance, the work should feel considered because credibility is felt before it’s explained."
						/>
						<GlassCard
							eyebrow="Systems"
							title="We build for the next stage."
							body="Not a one-off launch. A foundation your team can iterate on with consistency across brand, web, and content."
						/>
					</div>
				</div>
			</section>

			{/* PROCESS (short + confident) */}
			<section className="relative py-16 md:py-20">
				<div className="mx-auto container px-6">
					<div className="max-w-2xl">
						<p className="text-[11px] tracking-[0.35em] uppercase text-pink-600/60">
							Our process
						</p>
						<h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
							A clear process. Calm execution.
						</h2>
						<p className="mt-4 text-white/65 leading-relaxed">
							We keep the work structured and transparent so you always know what we’re doing, what decisions matter, and what success looks like.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
						{[
							{ n: "01", t: "Audit", d: "Understand goals, audience, perception gaps, and constraints." },
							{ n: "02", t: "Reposition", d: "Clarify messaging, structure, and success metrics." },
							{ n: "03", t: "Design & Build", d: "Create the identity + website with performance and polish." },
							{ n: "04", t: "Launch & Optimise", d: "Ship, refine, and support what comes next." },
						].map((s) => (
							<div
								key={s.n}
								className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition"
							>
								<p className="text-[11px] tracking-[0.35em] uppercase text-pink-600/50">{s.n}</p>
								<h3 className="mt-3 text-white font-medium">{s.t}</h3>
								<p className="mt-2 text-sm text-white/60 leading-relaxed">{s.d}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</MainLayout >
	);
}
