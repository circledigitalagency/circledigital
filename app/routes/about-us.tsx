import { ChevronDown } from "lucide-react";
import React from "react";
import BecomeTheCircle from "~/components/dynamic/become-the-cirlce";
import MainLayout from "~/components/layout/main";
import UnderlineLink from "~/components/link/underline-link";
import Heading from "~/components/text/sloop-heading";
import { values } from "~/lib/data";
import { cn } from "~/lib/utils";

export default function AboutUs() {
	const steps = [
		{ label: "Spark", description: "The initial idea or intention" },
		{ label: "Shape", description: "We define direction & creative tone" },
		{ label: "Design", description: "Visuals, copy, and systems come to life" },
		{ label: "Build", description: "We develop your product or platform" },
		{ label: "Amplify", description: "Social content, visibility, and voice" },
		{ label: "Reflect", description: "We evolve, refine, and loop back" },
	];

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
			<section className="container mx-auto px-6 py-16">
				<div className="grid grid-cols-2">
					<div className="flex flex-col space-y-4">
						<Heading value="The Circle Theory" />
						<p className="leading-relaxed w-[80%]">
							Our approach is grounded in the belief that creative work is not
							linear, it’s cyclical, collaborative, and constantly evolving.
						</p>

						<UnderlineLink to="/contact-us" label="Work with us" />
					</div>
					<div className="space-y-6">
						{values.map((val, index) => (
							<div className="space-y-6" key={index}>
								<div className="flex flex-row space-x-6">
									<div className="w-8 h-8 rounded-full flex items-center justify-center">
										<p className="text-sm font-medium ">{index + 1}</p>
									</div>

									<div className="flex flex-col space-y-2">
										<p className="text-lg font-semibold">{val.title}</p>
										<p className="font-light text-slate-700">
											{val.description}
										</p>
									</div>
								</div>
								<div className="w-full h-[1px] bg-gradient-to-r from-primary  to-secondary" />
							</div>
						))}
					</div>
				</div>
			</section>
			{/* <div className="relative w-[400px] h-[400px] mx-auto my-20">
			
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center text-center text-sm font-semibold shadow-xl">
						CircleDigital
						<br />
						The Core
					</div>
				</div>

			
				{steps.map((step, i) => {
					const angle = (i / steps.length) * 2 * Math.PI;
					const radius = 160;

					const x = radius * Math.cos(angle);
					const y = radius * Math.sin(angle);

					return (
						<div
							key={i}
							className="absolute w-20 h-20 rounded-full bg-white text-xs font-medium shadow-md flex items-center justify-center hover:scale-110 hover:bg-indigo-100 transition-all duration-300"
							style={{
								top: `calc(50% + ${y}px - 40px)`,
								left: `calc(50% + ${x}px - 40px)`,
							}}
						>
							{step.label}
						</div>
					);
				})}
			</div> */}

			<BecomeTheCircle />
		</MainLayout>
	);
}
