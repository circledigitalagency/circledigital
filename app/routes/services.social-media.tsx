import ImageViewer from "~/components/dynamic/image-viewer";
import WebsitePlayer from "~/components/dynamic/website-player";
import MainLayout from "~/components/layout/main";
import Heading from "~/components/text/sloop-heading";
import { designPortfolio, services, webPortfolio } from "~/lib/data";

export default function SocialMedia() {
	return (
		<MainLayout>
			<section className="py-20 text-center">
				<div>
					<Heading value="Social Media Marketing" />
					<p className="max-w-xl mx-auto mt-4 text-lg text-slate-700">
						Strategy. Story. Scroll-stopping content. We help brands grow with
						presence and purpose across platforms.
					</p>
				</div>
			</section>
			<section className="container mx-auto px-6 py-16 space-y-16">
				<div className="space-y-6">
					{[
						{
							title: "Content Strategy",
							description:
								"We craft content plans aligned with your goals, audience, and tone of voice.",
						},
						{
							title: "Visual Creation",
							description:
								"Reels, carousels, stories, and branded graphics — designed to connect and convert.",
						},
						{
							title: "Platform Management",
							description:
								"End-to-end management across IG, LinkedIn, TikTok and more — including scheduling, engagement, and reporting.",
						},
					].map((item, i) => (
						<div
							key={i}
							className="p-6 border border-slate-200 bg-white shadow hover:shadow-lg transition"
						>
							<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
							<p className="text-sm text-gray-600">{item.description}</p>
						</div>
					))}
				</div>
			</section>
			<section className="py-20 max-w-6xl mx-auto px-6 text-center">
				<h2 className="text-2xl font-bold mb-6">Recent Content Work</h2>

				<div className="bg-slate-50 rounded-xl p-12 shadow-inner flex flex-col items-center justify-center">
					<svg
						className="w-12 h-12 text-pink-400 mb-4 animate-pulse"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>

					<h3 className="text-lg font-semibold text-gray-700 mb-2">
						We're working on it!
					</h3>
					<p className="text-sm text-gray-500 max-w-md">
						Our latest content campaigns and social media case studies are in
						the works. Check back soon to see what we've been creating for our
						clients.
					</p>
				</div>
			</section>
		</MainLayout>
	);
}
