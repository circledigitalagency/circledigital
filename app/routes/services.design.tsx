import BecomeTheCircle from "~/components/dynamic/become-the-cirlce";
import ImageViewer from "~/components/dynamic/image-viewer";
import MainLayout from "~/components/layout/main";
import Heading from "~/components/text/sloop-heading";
import { designPortfolio, designServices, services } from "~/lib/data";

export default function Design() {
	return (
		<MainLayout>
			<section className="py-20 text-center">
				<div>
					<Heading value="Design Services" />
					<p className="max-w-xl mx-auto mt-4 text-lg text-slate-700">
						Intuitive, expressive, and brand-defining visuals that elevate your
						presence across platforms.
					</p>
				</div>
			</section>
			<section className="container mx-auto px-6 py-16 space-y-16">
				<div className="grid grid-cols-3 gap-12">
					{designServices.map((item, i) => (
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
					<div className="grid grid-cols-3 gap-12">
						{designPortfolio.map((proj, index) => (
							<div key={index} className="space-y-2">
								<ImageViewer
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
			<BecomeTheCircle />
		</MainLayout>
	);
}
