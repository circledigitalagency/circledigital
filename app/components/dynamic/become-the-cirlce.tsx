import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { ArrowRight, Link, Star, Users, Zap } from "lucide-react";
import Heading from "../text/sloop-heading";
import ButtonLink from "../link/button-link";
import UnderlineLink from "../link/underline-link";
import { clientLogos } from "~/lib/data";

const getSizeClasses = (size: string) => {
	switch (size) {
		case "small":
			return "w-12 h-12";
		case "medium":
			return "w-16 h-16";
		case "large":
			return "lg:w-28 lg:h-28 w-20 h-20";
		case "xlarge":
			return "lg:w-44 lg:h-44 w-32 h-32";
		default:
			return "w-16 h-16";
	}
};

export default function BecomeTheCircle() {
	return (
		<section className="py-20  relative overflow-hidden">
			<div className="container mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="relative h-96 lg:h-[500px]">
						<div className="absolute inset-0 z-10">
							{clientLogos.map((client, index) => (
								<div
									key={client.name}
									className={`absolute animate-float ${client.className}`}
									style={{
										animationDelay: `${client.delay}s`,
										animationDuration: `${3 + (index % 3)}s`,
									}}
								>
									<Card className="p-3 bg-white backdrop-blur-sm border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full">
										<div
											className={`${getSizeClasses(
												client.size
											)} rounded-full overflow-hidden bg-gray-100 flex items-center justify-center`}
										>
											<img
												src={client.logo}
												alt={`${client.name} logo`}
												className="w-full h-full object-contain p-2"
											/>
										</div>
									</Card>
								</div>
							))}
						</div>
						{/* Background circles for visual effect */}
						<div className="absolute inset-0 opacity-20">
							<div className="absolute top-1/4 left-2/4 w-32 h-32 bg-primary/20 rounded-full animate-pulse"></div>
							<div
								className="absolute bottom-1/3 right-2/4 w-24 h-24 bg-secondary rounded-full animate-pulse"
								style={{ animationDelay: "1s" }}
							></div>
							<div
								className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-200 rounded-full animate-pulse"
								style={{ animationDelay: "2s" }}
							></div>
						</div>{" "}
					</div>

					{/* Right Side - Call to Action */}
					<div className="space-y-8">
						<div className="flex flex-col space-y-6">
							<div>
								<Heading value="Become part of the circle." />
							</div>
							<div className="space-y-6">
								<p className="leading-relaxed">
									Join the exclusive community of forward-thinking brands who
									trust us to bring their vision to life. Your logo could be
									floating here next.
								</p>
							</div>
						</div>

						{/* Benefits */}
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
									<Star className="w-5 h-5 text-primary" />
								</div>
								<span className="text-gray-700 font-medium">
									Premium design, development and marketing solutions tailored
									to your brand
								</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
									<Users className="w-5 h-5 text-primary" />
								</div>
								<span className="text-gray-700 font-medium">
									Dedicated team of expert designers, developers and creators
								</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
									<Zap className="w-5 h-5 text-primary" />
								</div>
								<span className="text-gray-700 font-medium">
									Fast turnaround with unlimited revisions and support
								</span>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className="flex items-center sm:flex-row gap-4">
							<ButtonLink
								to="/contact-us"
								style="bg-gradient-to-r from-primary to-secondary text-white  text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
								title="Start Your Project"
								icon={ArrowRight}
							/>
							<UnderlineLink to="/portfolio" label="View Our Work" />
						</div>
					</div>
				</div>
			</div>

			<style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
		</section>
	);
}
