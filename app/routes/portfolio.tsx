import { useState } from "react";
import ImageViewer from "~/components/dynamic/image-viewer";
import WebsitePlayer from "~/components/dynamic/website-player";
import MainLayout from "~/components/layout/main";
import PortfolioTab from "~/components/tab/portfolio-tab";
import Heading from "~/components/text/sloop-heading";
import { designPortfolio, webPortfolio } from "~/lib/data";

export default function Portfolio() {
	const [activeTab, setActiveTab] = useState<"design" | "web">("design");
	return (
		<MainLayout>
			<section className="py-20 text-center">
				<div>
					<Heading value="Portfolio" />
					<p className="max-w-xl mx-auto mt-4 text-lg text-slate-700">
						Purposeful design and digital experiences crafted to inspire,
						connect, and convert.
					</p>
				</div>
			</section>
			<section className="container mx-auto px-6 py-16 space-y-16">
				<PortfolioTab activeTab={activeTab} setActiveTab={setActiveTab} />
				{activeTab === "design" && (
					<div className="flex flex-col space-y-6">
						<div className="grid lg:grid-cols-2 gap-12">
							{designPortfolio.map((proj, index) => (
								<div key={index} className="space-y-2">
									<ImageViewer
										initialUrl={proj.url}
										height={400}
										className="col-span-1"
										title={proj.title}
										category={proj.category}
									/>
								</div>
							))}
						</div>
					</div>
				)}
				{activeTab === "web" && (
					<div className="flex flex-col space-y-6">
						<div className="grid lg:grid-cols-2 gap-12">
							{webPortfolio.map((proj, index) => (
								<div key={index} className="space-y-2">
									<WebsitePlayer
										initialUrl={proj.url}
										height={400}
										className="col-span-1"
										title={proj.title}
									/>
								</div>
							))}
						</div>
					</div>
				)}
			</section>
		</MainLayout>
	);
}
