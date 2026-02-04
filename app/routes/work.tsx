import React from "react";
import { ArrowUpRight, X } from "lucide-react";
import MainLayout from "~/components/layout/main";
import { AccentGlow, categoryAccent } from "~/lib/utils";
import { WorkCategory } from "~/lib/@types";

export type WorkItem = {
	id: string;
	title: string;
	category: WorkCategory;
	eyebrow: string; // e.g. "Web · Build"
	resultLine: string; // e.g. "Rebuilt site for clarity + conversion."
	services: string[]; // chips
	cover: string; // image path
	featured?: boolean;
	liveUrl?: string;
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
	{
		id: "freedom27brand",
		title: "Freedom 27",
		category: "branding",
		eyebrow: "Branding · Identity",
		resultLine: "A calm, human-centred identity rooted in balance, intention, and personal growth.",
		services: ["Positioning", "Brand Identity", "Visual System", "Guidelines"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770203401/freedom27-logo_fo2rl8.jpg",
		featured: true,
	},
	{
		id: "pa-autors",
		title: "Private Auto",
		category: "social",
		eyebrow: "Social · Content",
		resultLine: "A structured content system that keeps automotive communication consistent and credible.",
		services: ["Content Direction", "Templates", "Production"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770204261/pa-social_voytwy.jpg",
	},
	{
		id: "mnstudios",
		title: "MN Studios",
		category: "web",
		eyebrow: "Web · Build",
		resultLine: "A polished portfolio site designed to showcase craft, credibility, and completed work.",
		services: ["Design", "Development", "SEO"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770204236/mnstudios-web_eo2cnh.jpg",
		featured: true,
		liveUrl: "https://www.mnstudios.co.za/",
	},
	{
		id: "luambo",
		title: "Luambo",
		category: "branding",
		eyebrow: "Branding · Identity",
		resultLine: "A playful, expressive identity built to spark imagination in child-focused environments.",
		services: ["Brand Identity", "Logo Design", "Visual Language"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770203469/luambo-logo_csbacz.jpg",
		featured: false,
	},
	{
		id: "freedom27",
		title: "Freedom 27",
		category: "web",
		eyebrow: "Web · Build",
		resultLine: "A considered digital home designed to reflect calm, clarity, and intentional living.",
		services: ["Design", "Development", "SEO"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770203474/freedom27-web_aex03x.jpg",
		featured: true,
		liveUrl: "https://www.freedom27.co.za/",
	},
	{
		id: "broerwelas",
		title: "Broerwelas",
		category: "branding",
		eyebrow: "Branding · Identity",
		resultLine: "A bold, character-led identity designed to feel distinctive and instantly recognisable.",
		services: ["Brand Identity", "Logo Design", "Visual Language"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770202765/broerwelas-logo_gjggt1.jpg",
		featured: false,
	},
	{
		id: "wertutors-social",
		title: "WeRTutors Social Media",
		category: "social",
		eyebrow: "Social · Content",
		resultLine: "An educational content system built to inform parents and support student success.",
		services: ["Content Direction", "Templates", "Production"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770204243/wertutors-social_kzgudp.jpg",
	},
	{
		id: "csresources",
		title: "CS Resources",
		category: "web",
		eyebrow: "Web · Build",
		resultLine: "A clear, conversion-focused website for a growing industrial services business.",
		services: ["Design", "Development", "SEO"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770202769/csresources-web_bw6snz.jpg",
		featured: true,
		liveUrl: "https://csresources.co.za/",
	},
	{
		id: "freedom-social",
		title: "Freedom27 Social Media",
		category: "social",
		eyebrow: "Social · Content",
		resultLine: "A calm, cohesive social presence aligned with the brand’s wellness-led philosophy.",
		services: ["Content Direction", "Templates", "Production"],
		cover: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770203463/freedom27-social_cppq8y.jpg",
	},
];

const tabs = [
	{ key: "all" as const, label: "All work" },
	{ key: "web" as const, label: "Web" },
	{ key: "branding" as const, label: "Branding" },
	{ key: "social" as const, label: "Social" },
];


function Chip({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-white/75 backdrop-blur">
			{children}
		</span>
	);
}

export function WorkCard({ item, onOpen }: { item: WorkItem; onOpen: () => void }) {
	return (
		<button
			type="button"
			onClick={onOpen}
			className="group text-left relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition w-full"
		>
			<AccentGlow accent={categoryAccent(item.category)} />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

			<div className="relative">
				{/* Cover */}
				<div className="relative aspect-[16/10] overflow-hidden">
					<img
						src={item.cover}
						alt={item.title}
						className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
						loading="lazy"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/60" />
					<div className="absolute left-5 top-5">
						<Chip>{item.eyebrow}</Chip>
					</div>
				</div>

				{/* Meta */}
				<div className="relative p-6">
					<h3 className="text-lg font-medium text-white">{item.title}</h3>
					<p className="mt-2 text-sm text-white/65 leading-relaxed">{item.resultLine}</p>

					<div className="mt-5 flex flex-wrap gap-2">
						{item.services.slice(0, 3).map((s) => (
							<span
								key={s}
								className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
							>
								{s}
							</span>
						))}
					</div>

					<div className="mt-6 flex items-center justify-between">
						<span className="text-sm font-medium text-white/80 group-hover:text-white transition">
							View details <span className="ml-2 opacity-60 group-hover:opacity-100">→</span>
						</span>
						<span className="text-[11px] tracking-[0.35em] uppercase text-white/45">
							{item.category}
						</span>
					</div>
				</div>
			</div>
		</button>
	);
}

function Modal({
	open,
	onClose,
	item,
}: {
	open: boolean;
	onClose: () => void;
	item: WorkItem | null;
}) {
	if (!open || !item) return null;

	return (
		<div className="fixed inset-0 z-50">
			<div className="absolute inset-0 bg-black/70" onClick={onClose} />
			<div className="absolute inset-x-0 top-10 mx-auto w-[min(980px,92vw)]">
				<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-background/70 backdrop-blur-2xl">
					<div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />

					<div className="relative p-6 md:p-8">
						<div className="flex items-start justify-between gap-6">
							<div>
								<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
									{item.eyebrow}
								</p>
								<h3 className="mt-3 text-2xl md:text-3xl font-medium text-white">
									{item.title}
								</h3>
								<p className="mt-4 text-white/65 leading-relaxed max-w-2xl">
									{item.resultLine}
								</p>

								<div className="mt-5 flex flex-wrap gap-2">
									{item.services.map((s) => (
										<span
											key={s}
											className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
										>
											{s}
										</span>
									))}
								</div>
							</div>

							<button
								onClick={onClose}
								className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
								aria-label="Close"
							>
								<X className="h-4 w-4 text-white/80" />
							</button>
						</div>

						<div className="mt-7 overflow-hidden rounded-2xl border border-white/10">
							<div className="relative aspect-[16/9]">
								<img
									src={item.cover}
									alt={item.title}
									className="h-full w-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/40" />
							</div>
						</div>

						<div className="mt-7 flex flex-col sm:flex-row gap-3 justify-end">
							{item.liveUrl ? (
								<a
									href={item.liveUrl}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
								>
									Visit live <ArrowUpRight className="ml-2 h-4 w-4" />
								</a>
							) : null}

							<a
								href="/contact-us"
								className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition backdrop-blur"
							>
								Start a project
							</a>
						</div>
					</div>

					<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
				</div>
			</div>
		</div>
	);
}

export default function WorkPage() {
	const [active, setActive] = React.useState<(typeof tabs)[number]["key"]>("all");
	const [selected, setSelected] = React.useState<WorkItem | null>(null);

	const featured = projects.filter((p) => p.featured);
	const filtered =
		active === "all" ? projects : projects.filter((p) => p.category === active);

	return (
		<MainLayout>
			{/* HERO */}
			<section className="relative overflow-hidden">
				<img
					src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1770204270/work-hero_nmm1zi.jpg"
					alt="Abstract 3D metallic sculpture"
					className="absolute -inset-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)] object-cover object-center"
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

				<div className="relative mx-auto container px-6 pt-10 md:pt-28 pb-10">
					<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">Work</p>
					<h1 className="mt-5 text-4xl md:text-6xl font-medium leading-[0.98] tracking-[-0.02em] text-white max-w-4xl">
						A few projects we’re proud of.
					</h1>
					<p className="mt-6 text-white/65 leading-relaxed max-w-2xl">
						Strategy-led design and build, delivered with clarity. Explore websites, identity work, and content systems.
					</p>
				</div>
			</section>



			{/* FILTER + GRID */}
			<section className="relative py-12 md:py-16">
				<div className="mx-auto container px-6">
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
						<div>

							<h2 className="mt-4 text-2xl md:text-3xl font-medium tracking-[-0.02em] text-white">
								Explore by category
							</h2>
						</div>

						<div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur">
							{tabs.map((t) => {
								const isActive = active === t.key;
								return (
									<button
										key={t.key}
										onClick={() => setActive(t.key)}
										className={[
											"rounded-full px-4 py-2 text-sm transition",
											isActive ? "bg-white text-black" : "text-white/70 hover:text-white",
										].join(" ")}
									>
										{t.label}
									</button>
								);
							})}
						</div>
					</div>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
						{filtered.map((item) => (
							<WorkCard key={item.id} item={item} onOpen={() => setSelected(item)} />
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="relative py-16 md:py-20">
				<div className="mx-auto container px-6">
					<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
						<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
						<div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(120,180,255,0.45),transparent_60%)]" />
						<div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full blur-3xl opacity-15 bg-[radial-gradient(circle_at_30%_30%,rgba(170,120,255,0.40),transparent_60%)]" />

						<div className="relative z-10 px-8 py-14 md:px-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
							<div className="max-w-2xl">
								<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">Work with Circle</p>
								<h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
									Ready to build something considered?
								</h2>
								<p className="mt-4 text-white/65 leading-relaxed">
									We partner with brands that value clarity, craft, and long-term thinking.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-3">
								<a
									href="/contact-us"
									className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
								>
									Start a project <ArrowUpRight className="ml-2 h-4 w-4" />
								</a>
							</div>
						</div>

						<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
					</div>
				</div>
			</section>

			<Modal open={!!selected} onClose={() => setSelected(null)} item={selected} />
		</MainLayout>
	);
}
