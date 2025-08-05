import { MetaFunction } from "@remix-run/react";
import { ChevronDown } from "lucide-react";
import React from "react";
import CircleTheorySection from "~/components/animated/circle-theory-section";
import BecomeTheCircle from "~/components/dynamic/become-the-cirlce";
import MainLayout from "~/components/layout/main";
import UnderlineLink from "~/components/link/underline-link";
import Heading from "~/components/text/sloop-heading";

export const meta: MetaFunction = () => {
	return [
		{
			title:
				"About CircleDigital | Creative Tech Studio Shaping Digital Brands",
		},
		{
			name: "description",
			content:
				"Discover the vision, mission, and approach of CircleDigital—a creative technology studio blending design, development, and storytelling to shape brands in a digital world.",
		},
		{
			property: "og:title",
			content: "About CircleDigital | Creative Tech Studio",
		},
		{
			property: "og:description",
			content:
				"CircleDigital combines design thinking, content creation, and technical precision to build intuitive, human-centered digital experiences. Learn about our mission and values.",
		},
		{
			property: "og:image",
			content:
				"https://res.cloudinary.com/dg1g6ctku/image/upload/v1754044573/pexels-chayanan-chaisaart-748435690-25559836_rwgzcb.jpg",
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://www.circledigital.co.za/about" },
	];
};

export default function AboutUs() {
	return (
		<MainLayout>
			<section className="container mx-auto px-6 py-16">
				<div className="grid grid-cols-2 gap-10">
					<div className="">
						<div className="grid lg:grid-cols-2">
							<div className="col-span-1 aspect-square ">
								<img
									src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1754044573/pexels-chayanan-chaisaart-748435690-25559836_rwgzcb.jpg"
									alt="hero"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="col-span-1 aspect-square ">
								<img
									src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1754044577/pexels-peter-steiner-1973-560957992-17103460_g5jm57.jpg"
									alt="hero"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className="grid lg:grid-cols-2">
							<div className="col-span-1 aspect-square ">
								<img
									src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1754044578/pexels-steve-29463245_azkovf.jpg"
									alt="hero"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="col-span-1 aspect-square ">
								<img
									src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1754044579/pexels-whiterecord-17214939_xhfbly.jpg"
									alt="hero"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
					<div className="">
						<div className="space-y-6">
							<Heading value="About Us" />
							<p>
								CircleDigital is a creative technology studio shaping how brands
								live, move, and grow in the digital world.
							</p>
							<p>
								We blend design thinking, digital craft, and content strategy to
								help businesses build experiences that feel intuitive,
								beautiful, and human. From web platforms to scroll-stopping
								content, we turn ideas into impact, with clarity, creativity,
								and care.
							</p>
							<div>
								<p>Our work moves across two core dimensions:</p>
								<ul className="flex flex-col gap-2 p-4 list-disc">
									<li>
										Digital Design & Development – building interfaces,
										websites, and brand identities that are as functional as
										they are expressive.
									</li>
									<li>
										Social Media & Content – crafting stories, visuals, and
										strategies that make brands impossible to ignore.
									</li>
								</ul>
							</div>
							<p>
								We’re digital guides who help brands navigate complexity with
								intention and imagination.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="container mx-auto px-6 py-16">
				<div className="flex flex-col space-y-4">
					<Heading value="Our Vision" />
					<p className="leading-relaxed w-[75%]">
						To shape a future where digital experiences feel natural, intuitive,
						and deeply human. While blending design, technology, and
						storytelling to move people and ideas forward.
					</p>
				</div>
			</section>
			<section className="container mx-auto px-6 py-16">
				<div className="flex flex-col space-y-4 justify-end items-end">
					<Heading value="Our Mission" />
					<p className="leading-relaxed w-[75%] text-left">
						We craft digital products, brands, and content that merge emotional
						intelligence with technical precision. Through thoughtful design,
						strategic development, and creative storytelling, we empower
						businesses to launch, grow, and connect in a digital world that’s
						always evolving.
					</p>
				</div>
			</section>
			<CircleTheorySection />
			<BecomeTheCircle />
		</MainLayout>
	);
}
