import MainLayout from "~/components/layout/main";
import Heading from "~/components/text/sloop-heading";

export default function ContactUs() {
	return (
		<MainLayout>
			<section className="text-center py-20 px-2">
				<Heading value="Join the Circle" />
				<p className="text-lg text-slate-700 mt-4 max-w-xl mx-auto">
					Whether you have a big idea, a spark of something new, or just need a
					fresh perspective, we’re here to help you bring it to life.
				</p>
			</section>
			<section className="max-w-4xl mx-auto gap-8 px-6 pb-20">
				<div className="bg-slate-50 rounded-xl p-6 shadow-sm">
					<h2 className="text-lg font-semibold mb-2">Email Us</h2>
					<p className="text-gray-700 mb-4">
						Reach out with your project ideas or questions.
					</p>
					<a
						href="mailto:connect@circledigital.co.za"
						className="text-primary font-medium underline"
					>
						connect@circledigital.co.za
					</a>
				</div>

				{/* <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
					<h2 className="text-lg font-semibold mb-2">Follow Along</h2>
					<p className="text-gray-700 mb-4">
						We share ideas, work in progress, and inspiration here:
					</p>
					<ul className="space-y-1">
						<li>
							<a
								href="https://instagram.com/yourhandle"
								className="underline text-primary"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https://linkedin.com/in/yourhandle"
								className="underline text-primary"
							>
								LinkedIn
							</a>
						</li>
					</ul>
				</div> */}
			</section>
		</MainLayout>
	);
}
