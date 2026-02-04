import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import Heading from "../text/sloop-heading";
import ButtonLink from "../link/button-link";
import UnderlineLink from "../link/underline-link";
import { clientLogos } from "~/lib/data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const getSizeClasses = (size: string) => {
	switch (size) {
		case "small":
			return "w-12 h-12";
		case "medium":
			return "w-16 h-16";
		case "large":
			return "w-20 h-20 lg:w-28 lg:h-28";
		case "xlarge":
			return "w-32 h-32 lg:w-44 lg:h-44";
		default:
			return "w-16 h-16";
	}
};

function OrbLines({ accent = "rgba(120,180,255,0.45)" }: { accent?: string }) {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
			<div
				className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
				style={{
					background: `radial-gradient(circle at 30% 30%, ${accent}, transparent 60%)`,
				}}
			/>
			<div
				className="absolute -right-20 -top-20 h-96 w-96 rounded-full opacity-25"
				style={{
					background: `conic-gradient(from 180deg, transparent, ${accent}, transparent)`,
					maskImage:
						"radial-gradient(circle, transparent 63%, black 64%, black 64.8%, transparent 66%)",
					WebkitMaskImage:
						"radial-gradient(circle, transparent 63%, black 64%, black 64.8%, transparent 66%)",
				}}
			/>
			<div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
		</div>
	);
}

function LogoOrb({
	client,
	index,
}: {
	client: { name: string; logo: string; size: string; className: string };
	index: number;
}) {
	// per-orb subtle drift variations
	const drift = 6 + (index % 3) * 2;
	const delay = 0.1 + index * 0.08;

	return (
		<motion.div
			className={`absolute ${client.className}`}
			initial={{ opacity: 0, y: 10, scale: 0.98 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.8, ease: EASE, delay }}
		>
			<motion.div
				animate={{ y: [0, -drift, 0] }}
				transition={{
					duration: 5 + (index % 4),
					ease: EASE,
					repeat: Infinity,
					repeatType: "mirror",
					delay: index * 0.2,
				}}
				className="relative"
			>
				{/* glass orb */}
				<div className="relative rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.45)]">
					<div
						className={`${getSizeClasses(
							client.size
						)} rounded-full overflow-hidden flex items-center justify-center p-3`}
					>
						{/* logo */}
						<img
							src={client.logo}
							alt={`${client.name} logo`}
							className="w-full h-full object-contain opacity-90"
						/>
					</div>

					{/* thin ring */}
					<div className="pointer-events-none absolute inset-0 rounded-full">
						<div className="absolute inset-0 rounded-full opacity-30"
							style={{
								background:
									"radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 55%)",
							}}
						/>
						<div className="absolute inset-0 rounded-full border border-white/10" />
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default function BecomeTheCircle() {
	// trim to keep it curated
	const logos = clientLogos.slice(0, 6);

	return (
		<section className="relative py-20 md:py-28 overflow-hidden">
			{/* Section ambience */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
				<div className="absolute inset-0 opacity-60 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
			</div>

			<div className="relative mx-auto container px-6">
				<div className="grid lg:grid-cols-12 gap-10 items-center">
					{/* Left: Orbs */}
					<div className="lg:col-span-6">
						<div className="relative h-[360px] md:h-[420px] lg:h-[520px] rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
							{/* subtle orb lines behind */}
							<OrbLines accent="rgba(120,180,255,0.35)" />

							{/* logos */}
							<div className="absolute inset-0">
								{logos.map((client, index) => (
									<LogoOrb key={client.name} client={client} index={index} />
								))}
							</div>

							{/* top fade (keeps it clean) */}
							<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
						</div>
					</div>

					{/* Right: CTA */}
					<div className="lg:col-span-6">
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.8, ease: EASE }}
							className="space-y-7"
						>
							<div className="space-y-4">
								<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
									Work with Circle
								</p>

								{/* If your Heading component is very decorative, consider replacing it here */}
								<Heading style="" value="Become part of the circle." />

								<p className="max-w-xl text-white/70 leading-relaxed">
									Join a small group of brands we partner with closely building identity, systems, and digital experiences that hold up over time.
								</p>
							</div>

							{/* Benefits (cleaner + more premium wording) */}
							<div className="grid gap-3 max-w-xl">
								{[
									{
										icon: Star,
										title: "Strategy-led, premium execution",
										desc: "Direction first, then design, build, and rollout.",
									},
									{
										icon: Users,
										title: "Senior attention, small-team focus",
										desc: "You work directly with the people doing the work.",
									},
									{
										icon: Zap,
										title: "Fast turnaround, clear scope",
										desc: "Tight feedback loops and reliable delivery.",
									},
								].map((b) => (
									<div
										key={b.title}
										className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
									>
										<div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 grid place-items-center text-white/80">
											<b.icon className="h-5 w-5" />
										</div>
										<div>
											<p className="text-sm font-medium text-white">{b.title}</p>
											<p className="text-sm text-white/60">{b.desc}</p>
										</div>
									</div>
								))}
							</div>

							{/* CTAs */}
							<div className="flex items-center gap-4 pt-2">
								<ButtonLink
									to="/contact-us"
									style="bg-white text-black text-sm font-medium shadow hover:bg-white/90 transition"
									title="Start a project"
									icon={ArrowRight}
								/>
								<UnderlineLink to="/work" label="View our work" />
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
