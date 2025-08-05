import ImageViewer from "~/components/dynamic/image-viewer";
import WebsitePlayer from "~/components/dynamic/website-player";
import MainLayout from "~/components/layout/main";
import Heading from "~/components/text/sloop-heading";
import {
	designPortfolio,
	developmentServices,
	services,
	webPortfolio,
} from "~/lib/data";

export default function Development() {
	return (
		<MainLayout>
			<section className="py-20 text-center px-2">
				<div>
					<Heading value="Development Services" />
					<p className="max-w-xl mx-auto mt-4 text-lg text-slate-700">
						Clean code meets clear purpose. We develop digital platforms that
						scale, adapt, and perform beautifully.
					</p>
				</div>
			</section>
			<section className="container mx-auto px-6 py-16 space-y-16">
				<div className="grid lg:grid-cols-3 gap-12">
					{developmentServices.map((item, i) => (
						<div
							key={i}
							className="p-6 border border-slate-200 bg-white shadow hover:shadow-lg transition"
						>
							<item.icon className="w-6 h-6 text-primary mb-4" />
							<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
							<p className="text-sm text-gray-600">{item.description}</p>
						</div>
					))}
				</div>
			</section>
			<section className="container mx-auto px-6 py-16">
				<div className="flex flex-col space-y-6">
					<Heading value="Recent work" />
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
			</section>
		</MainLayout>
	);
}
