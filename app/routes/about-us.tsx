import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MainLayout from "~/components/layout/main";
import { variants } from "~/lib/animations";
import type { MetaFunction } from "@remix-run/node";

const ABOUT_TITLE =
	"About Circle Digital | Strategy-led Branding, Development & Social Systems";

const ABOUT_DESCRIPTION =
	"Circle Digital is a small senior studio based in South Africa. We build calm, high-performing brand and web systems—strategy, design, development, and content—built to last beyond launch.";

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
			<p className="relative text-[11px] tracking-[0.35em] uppercase text-white/55">{eyebrow}</p>
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
							A creative studio built around clarity, craft, and systems that last.
						</motion.h1>
						<motion.p
							variants={variants.fadeUp} className="mt-6 text-white/65 leading-relaxed max-w-2xl">
							Circle partners with brands and teams who want more than “a nice design.”
							We build digital experiences that feel intentional, and perform in the real world.
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
						<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
							Our story
						</p>

						<h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
							We kept seeing the same problem: good brands, weak systems.
						</h2>

						<div className="text-white/65 leading-relaxed grid md:grid-cols-2 gap-12">
							<p>
								Too many businesses look great on the surface but underneath, their websites are slow,
								hard to update, and disconnected from how they actually operate. Circle was built to close that gap. We combine strategy, design, and engineering
								so the work doesn’t just launch, it holds up over time.
							</p>
							<p>
								We work as a small senior team: one side focused on brand and marketing clarity,
								the other on building fast, scalable digital experiences.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* WHAT WE BELIEVE */}
			<section className="relative py-16 md:py-20">
				<div className="mx-auto container px-6">
					<div className="max-w-2xl">
						<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
							How we think
						</p>
						<h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
							Design is not decoration. It’s direction.
						</h2>
						<p className="mt-4 text-white/65 leading-relaxed">
							We’re deliberate about what we make and why we make it. Our work is built to support real goals:
							positioning, conversion, performance, and consistency.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
						<GlassCard
							eyebrow="Clarity"
							title="We simplify before we amplify."
							body="No noise, no fluff. We focus the message and build around what matters."
						/>
						<GlassCard
							eyebrow="Craft"
							title="The details carry the brand."
							body="Typography, motion, performance, and polish, the work should feel considered."
						/>
						<GlassCard
							eyebrow="Systems"
							title="Built to last beyond launch."
							body="We create foundations your team can grow with not one-off designs that fade."
						/>
					</div>
				</div>
			</section>

			{/* TEAM */}
			{/* <section className="relative py-16 md:py-20">
				<div className="mx-auto container px-6">
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
						<div className="max-w-2xl">
							<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
								The team
							</p>
							<h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
								Small by design. Senior by default.
							</h2>
							<p className="mt-4 text-white/65 leading-relaxed">
								Circle is led by two complementary strengths: strategy & marketing direction, and engineering & product build.
								You work directly with the people doing the work.
							</p>
						</div>
					</div>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* Kagiso */}
			{/* <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
				<OrbAccent className="opacity-70" />
				<div className="relative p-7">
					<div className="flex items-center gap-4">
						<div className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5" />
						<div>
							<p className="text-white font-medium">Kagiso</p>
							<p className="text-sm text-white/60">Engineering & Product Build</p>
						</div>
					</div>
					<p className="mt-5 text-sm text-white/65 leading-relaxed">
						Leads development and implementation — turning strategy into fast, scalable digital experiences.
						Focused on performance, clean UX, and systems that are easy to maintain.
					</p>
					<p className="mt-4 text-xs text-white/45">
						Add portrait after photoshoot
					</p>
				</div>
			</div> */}

			{/* Co-founder */}
			{/* <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
				<OrbAccent className="opacity-70" />
				<div className="relative p-7">
					<div className="flex items-center gap-4">
						<div className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5" />
						<div>
							<p className="text-white font-medium">Co-Founder</p>
							<p className="text-sm text-white/60">Strategy & Marketing Direction</p>
						</div>
					</div>
					<p className="mt-5 text-sm text-white/65 leading-relaxed">
						Leads positioning, messaging, and campaign direction — ensuring the work is aligned to the market
						and built to convert.
					</p>
					<p className="mt-4 text-xs text-white/45">
						Add portrait after photoshoot
					</p>
				</div>
			</div>
		</div> */}
			{/* </div >
			</section >  */}

			{/* PROCESS (short + confident) */}
			<section className="relative py-16 md:py-20">
				<div className="mx-auto container px-6">
					<div className="max-w-2xl">
						<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
							Our process
						</p>
						<h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
							Clear steps. Tight feedback loops.
						</h2>
						<p className="mt-4 text-white/65 leading-relaxed">
							We keep the process structured so you always know what’s happening, what’s next, and what decisions matter.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
						{[
							{ n: "01", t: "Discover", d: "Understand goals, audience, and constraints." },
							{ n: "02", t: "Define", d: "Set direction, structure, and success metrics." },
							{ n: "03", t: "Build", d: "Design + develop with performance and polish." },
							{ n: "04", t: "Launch & Grow", d: "Ship, refine, and support what comes next." },
						].map((s) => (
							<div
								key={s.n}
								className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition"
							>
								<p className="text-[11px] tracking-[0.35em] uppercase text-white/50">{s.n}</p>
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
