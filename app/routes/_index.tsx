import { Link } from "@remix-run/react";
import MainLayout from "~/components/layout/main";
import { services } from "~/lib/data";
import { AccentGlow, categoryAccent } from "~/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { WorkCategory } from "~/lib/@types";
import { WorkCard, WorkItem } from "./work";
import { variants } from "~/lib/animations";

import type { MetaFunction } from "@remix-run/node";

const HOME_TITLE =
	"Circle Digital — Branding, Web Development & Social Media in South Africa";

const HOME_DESCRIPTION =
	"Circle Digital is a creative studio building strategy-led branding, high-performance websites, and content systems for modern brands. Built with clarity, craft, and long-term thinking.";

const HOME_IMAGE =
	"https://res.cloudinary.com/dfxorvtuc/image/upload/v1770285768/Screenshot_2026-02-05_at_12.01.48_gcryfg.png";

const CANONICAL_URL = "https://circledigital.co.za/";

export const meta: MetaFunction = () => {
	return [
		{ title: HOME_TITLE },
		{ name: "description", content: HOME_DESCRIPTION },

		// Canonical
		{ tagName: "link", rel: "canonical", href: CANONICAL_URL },

		// Open Graph
		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: "Circle Digital" },
		{ property: "og:title", content: HOME_TITLE },
		{ property: "og:description", content: HOME_DESCRIPTION },
		{ property: "og:url", content: CANONICAL_URL },
		{ property: "og:image", content: HOME_IMAGE },
		{ property: "og:image:alt", content: "Circle Digital homepage hero image" },

		// Twitter
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: HOME_TITLE },
		{ name: "twitter:description", content: HOME_DESCRIPTION },
		{ name: "twitter:image", content: HOME_IMAGE },
	];
};


const projects: WorkItem[] = [
	{
		id: "wertutors",
		title: "WeRTutors",
		category: "web",
		eyebrow: "Web · Build",
		resultLine: "A clear, parent-focused website designed to build trust and drive enquiries.",
		services: ["Re-design", "Brand Refresh", "Development"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770204255/wertutors-hero_agbs4a.jpg",
		featured: true,
		liveUrl: "https://wertutors.co.za/",
	},
	{
		id: "easyfind",
		title: "Easyfind",
		category: "web",
		eyebrow: "Web · Build",
		resultLine: "A clean, professional web presence that simplifies a technical offering for everyday users.",
		services: ["Re-design", "Brand Refresh", "Development"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770203465/easyfind-web_o8r7xw.jpg",
		featured: true,
		liveUrl: "https://easyfindtech.co.za/",
	},
]

export default function Index() {

	return (
		<MainLayout>
			<section className="relative h-[75vh] md:h-[90vh] overflow-hidden">
				{/* Background with combined overlays */}
				<motion.div
					className="absolute inset-0 will-change-transform"
					variants={variants.background}
					initial="hidden"
					animate="show"
				>
					<img
						src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1770203589/home-hero_kgbcvl.jpg"
						alt="Abstract 3D metallic sculpture"
						className="absolute -inset-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)] object-cover object-center"
					/>
					{/* Single overlay with combined gradients */}
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

				{/* Content */}
				<div className="relative z-10 mx-auto flex h-full max-w-6xl items-center md:items-start px-4 sm:px-6">
					<motion.div
						className="w-full text-center pt-10 md:pt-32 lg:pt-36"
						variants={variants.container}
						initial="hidden"
						animate="show"
					>
						{/* Eyebrow */}
						<motion.p
							variants={variants.fadeUp}
							className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.35em] md:text-[11px]"
						>
							<span>Branding</span>
							<span className="opacity-30">•</span>
							<span>Development</span>
							<span className="opacity-30">•</span>
							<span>Social Media</span>
						</motion.p>

						{/* Headline */}
						<motion.h1
							variants={variants.fadeUp}
							className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-white sm:mt-5 sm:text-4xl sm:leading-[1.02] md:mt-6 md:text-6xl md:leading-[0.98] lg:text-7xl"
						>
							<span className="text-balance">We craft digital experiences</span>
							<span className="mt-0.5 block text-white/85 sm:mt-1">that elevate your brand</span>
						</motion.h1>

						{/* Subcopy */}
						<motion.p
							variants={variants.fadeUp}
							className="mx-auto mt-3 max-w-[42rem] px-2 text-pretty leading-relaxed text-white/80 sm:mt-4 text-base md:mt-5 md:text-lg"
						>
							Strategy-led branding, high-performance development, and social systems built for
							growth.
						</motion.p>

						{/* CTAs */}
						<motion.div
							variants={variants.fadeUp}
							className="mt-8 flex flex-col justify-center sm:flex-row gap-3"
						>
							<a
								href="/contact-us"
								className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
							>
								Get in Touch <ArrowUpRight className="ml-2 h-4 w-4" />
							</a>
							<a
								href="/work"
								className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition backdrop-blur"
							>
								View Our Work
							</a>
						</motion.div>
					</motion.div>
				</div>
			</section>
			<section id="services" className="relative py-20 md:py-28">
				<div className="mx-auto container px-6">
					{/* Header */}
					<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
						<div className="max-w-2xl">
							<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
								Capabilities
							</p>
							<h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
								What we do, end-to-end.
							</h2>
							<p className="mt-4 text-white/65 leading-relaxed">
								A small studio with a sharp process, built to help brands look better, work better, and grow.
							</p>
						</div>

						<div className="mt-6 md:mt-0">
							<Link
								to="/contact-us"
								className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-[10px] text-sm font-medium text-white hover:bg-white/10 transition backdrop-blur"
							>
								Get a quote
								<span className="ml-2 opacity-70">→</span>
							</Link>
						</div>
					</div>

					{/* Cards */}
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
						{services.map((item, index) => (
							<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6
							overflow-hidden transition hover:bg-white/[0.06]">
								<AccentGlow accent={categoryAccent(item.category as WorkCategory,)} />
								<div className="flex items-start justify-between">
									<p className="text-[11px] tracking-[0.35em] uppercase text-white/55">
										{index + 1} · {item.label}
									</p>
									<div className="h-9 w-9 rounded-full border border-white/10 bg-white/5 grid place-items-center text-white/70 group-hover:text-white transition">
										{item.icon}
									</div>
								</div>

								<h3 className="mt-5 text-lg font-medium text-white">
									{item.title}
								</h3>
								<p className="mt-2 text-sm text-white/60 leading-relaxed">
									{item.description}
								</p>

								<ul className="mt-5 space-y-2 text-sm text-white/65">
									{item.features.map((feat, index) => (
										<li className="flex gap-2" key={index}>
											<span className="mt-[7px] h-1 w-1 rounded-full bg-white/40" />
											{feat}
										</li>
									))}
								</ul>

								<div className="mt-6">
									<Link to={item.link} className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition">
										{item.linkText} <span className="ml-2 opacity-60 group-hover:opacity-100 transition">→</span>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section id="work" className="relative py-20 md:py-28">
				<div className="container mx-auto px-6">
					<div className="space-y-10 items-end">
						{/* Left intro */}
						<div className="grid md:grid-cols-2">
							<div>
								<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
									Selected work
								</p>
								<h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
									A few projects we’re proud of.
								</h2>
								<p className="mt-4 text-white/65 max-w-md leading-relaxed">
									Strategy-led design and build, delivered with clarity. Here’s what it looks like in practice.
								</p>
							</div>

							<div className="flex items-start mt-2 md:mt-0 md:justify-end md:items-end w-full">
								<a
									href="/work"
									className="inline-flex items-center h-fit rounded-full border border-white/15 bg-white/5 px-5 py-[10px] text-sm font-medium text-white hover:bg-white/10 transition backdrop-blur"
								>
									View full portfolio
									<ArrowUpRight className="w-4 h-4 ml-4" />
								</a>
							</div>
						</div>

						{/* Right cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{projects.map((item) => (
								<WorkCard key={item.id} item={item} onOpen={() => { }} />
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="relative py-20 md:py-28">
				<div className="mx-auto container px-6">

					{/* CTA Panel */}
					<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

						{/* Background image INSIDE panel */}
						<div className="absolute inset-0">
							<img
								src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1770202891/cta_dk2f0t.jpg"
								alt=""
								className="h-full w-full object-cover object-center"
							/>
							{/* Glass overlays */}
							<div
								className="absolute inset-0"
								style={{
									background: `
              linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.9) 100%),
              radial-gradient(80% 70% at 50% 55%, transparent 40%, rgba(0,0,0,0.55) 100%)
            `,
								}}
							/>
						</div>

						{/* Content */}
						<div className="relative z-10 px-8 py-14 md:px-14 md:py-16">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

								{/* Copy */}
								<div className="space-y-5 max-w-xl">
									<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
										Work with Circle
									</p>

									<h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
										Ready to build something considered?
									</h2>

									<p className="text-white/65 leading-relaxed">
										We partner with brands that value clarity, craft, and long-term thinking -
										helping turn ideas into digital systems that last.
									</p>
								</div>

								{/* Actions */}
								<div className="flex flex-col sm:flex-row gap-4 md:justify-end">
									<a
										href="/contact-us"
										className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
									>
										Start a project
										<span className="ml-2">→</span>
									</a>

									<a
										href="/work"
										className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition backdrop-blur"
									>
										View our work
									</a>
								</div>
							</div>
						</div>

						{/* Panel edge highlight */}
						<div className="pointer-events-none absolute inset-0 rounded-3xl
                      ring-1 ring-inset ring-white/10" />
					</div>
				</div>
			</section>

		</MainLayout >
	);
}
