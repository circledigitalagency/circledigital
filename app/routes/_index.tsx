import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import MainLayout from "~/components/layout/main";
import { whoarewe } from "~/lib/data";

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
						<img src="/hero.png" alt="hero" className="w-full object-contain" />
					</div>
					<div className="space-y-8">
						<h1 className="text-5xl font-sloopscript mb-2">Going digital?</h1>
						<h2 className="text-4xl lg:text-5xl font-bold leading-tight">
							You've found your digital guides.
						</h2>
						<p className="text-lg leading-relaxed">
							CircleDigital is your creative technology partner, blending design
							thinking and playful minimalism to craft digital experiences that
							inspire and perform. We specialize in:
						</p>

						<div className="grid grid-cols-3 gap-5">
							<Link to="/services/design">
								<img src="/design-hero.png" alt="design" />
							</Link>
							<Link to="/services/development">
								<img src="/development-hero.png" alt="development" />
							</Link>
							<Link to="/services/social-media">
								{" "}
								<img src="/social-media-hero.png" alt="social-media" />
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="max-w-7xl mx-auto px-6 py-16 space-y-10">
				<div className="grid lg:grid-cols-2 gap-12">
					<div>
						<h2 className="text-6xl font-sloopscript mb-6">Who are we?</h2>
					</div>
					<div className="space-y-6">
						<p className="leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id
							lorem vel mi scelerisque tempor vel ut urna. Sed porta
							pellentesque neque.
						</p>
						<Link
							to="/about-us"
							className="text-primary hover:text-primary underline font-medium"
						>
							Learn more
						</Link>
					</div>
				</div>
				<div className="grid lg:grid-cols-3 gap-12">
					{whoarewe.map((item, index) => (
						<div className="space-y-6" key={index}>
							<div className="w-full aspect-square overflow-hidden rounded-lg">
								<img
									src={item.image || "/placeholder.svg"}
									alt={item.title}
									className="w-full h-full object-cover"
								/>
							</div>
							<p className="text-xl font-semibold">{item.title}</p>
							<div className="flex items-start gap-3">
								<span className="text-2xl font-light">0{index + 1}</span>
								<p className="text-sm leading-relaxed">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</MainLayout>
	);
}
