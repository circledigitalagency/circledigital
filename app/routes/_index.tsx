import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import MainLayout from "~/components/layout/main";

import ButtonLink from "~/components/link/button-link";
import UnderlineLink from "~/components/link/underline-link";
import Heading from "~/components/text/sloop-heading";
import { services, whoarewe } from "~/lib/data";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
	return [
		{ title: "Circledigital - Your Digital Guides" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<MainLayout>
			<section className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid lg:grid-cols-2 gap-5 items-center">
					<div>
						<img
							src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1753884652/hero_nr1r5c.png"
							alt="hero"
							className="w-full object-contain"
						/>
					</div>
					<div className="space-y-8">
						<Heading value="Going digital?" />
						<h2 className="text-4xl lg:text-5xl font-bold leading-tight">
							You've found your digital guides.
						</h2>
						<p className="text-lg leading-relaxed">
							We are your creative technology partner in this pacing digital
							era. We blend design thinking and playful minimalism to craft
							digital experiences that inspire and perform. We specialize in:
						</p>

						<div className="grid grid-cols-3 gap-5">
							<Link to="/services/design">
								<img
									src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1753884632/design-hero_z2iemk.png"
									alt="design"
								/>
							</Link>
							<Link to="/services/development">
								<img
									src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1753884634/development-hero_jzasu5.png"
									alt="development"
								/>
							</Link>
							<Link to="/services/social-media">
								<img
									src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1753884632/social-media-hero_bqd3ld.png"
									alt="social-media"
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
				<div className="grid lg:grid-cols-2 gap-12">
					<div>
						<Heading value="Who are we?" />
					</div>
					<div className="space-y-6">
						<p className="leading-relaxed">
							We’re a team of designers, developers, and content creators
							working together to shape a consistent, compelling digital
							presence for your business. From beautiful design to seamless
							development, we focus on delivering high-quality experiences that
							feel just right.
						</p>
						<Link
							to="/about-us"
							className="text-primary hover:text-primary underline font-medium"
						>
							Learn more
						</Link>
					</div>
				</div>
				<div className="grid lg:grid-cols-3 gap-32">
					{whoarewe.map((item, index) => (
						<div className="flex flex-col items-start space-y-6" key={index}>
							<div className="w-full h-80 overflow-hidden rounded-lg">
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-full object-cover"
								/>
							</div>
							<p className="text-xl font font-semibold">{item.title}</p>
							<div className="flex items-start gap-3">
								<span className="text-2xl font-light">0{index + 1}</span>
								<p className="text-base leading-relaxed">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
				<div className="flex flex-col space-y-4">
					<Heading value="Our Services" />
					<p className="leading-relaxed w-[75%]">
						We digital services that blend design, technology, and storytelling.
						Whether you’re starting from scratch or levelling up your digital
						presence, we help shape ideas into experiences, from websites and
						branding to content and custom development.
					</p>

					<UnderlineLink to="/contact-us" label="Start a project" />
				</div>
				<div className="grid lg: grid-cols-3 gap-32">
					{services.map((val, index) => (
						<div className="space-y-8" key={index}>
							<div className="relative">
								<div className="flex items-center gap-4 mb-2">
									<div
										className="w-8 h-8 rounded-lg flex items-center justify-center"
										style={{ backgroundColor: `${val.color}20` }}
									>
										<div
											className="w-3 h-3 rounded-sm"
											style={{ backgroundColor: val.color }}
										/>
									</div>
									<h3 className="text-2xl font-bold text-gray-900 tracking-tight">
										{val.label}
									</h3>
								</div>
							</div>

							<div className="grid gap-4">
								{val.services.map((serv, serviceIndex) => (
									<div
										className="group relative bg-white border border-gray-200 p-4 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
										key={serviceIndex}
									>
										<div className="flex flex-row items-center space-x-2 relative z-10">
											<h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
												{serv}
											</h4>
										</div>

										<div
											className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
											style={{ backgroundColor: val.color }}
										/>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
				<div className="grid lg:grid-cols-2 gap-12">
					<div>
						<Heading value="Some of our work" />
					</div>
					<div className="space-y-6">
						<p className="leading-relaxed">A look at the work we do.</p>
						<Link
							to="/about-us"
							className="text-primary hover:text-primary underline font-medium"
						>
							See more
						</Link>
					</div>
				</div>
			</section>
		</MainLayout>
	);
}
