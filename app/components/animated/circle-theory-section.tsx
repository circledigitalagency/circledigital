import { motion } from "framer-motion";
import Heading from "../text/sloop-heading";
import UnderlineLink from "../link/underline-link";
import { values } from "~/lib/data";

const CircleTheorySection = () => {
	// Animation variants for the container
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Delay between each item
				delayChildren: 0.3, // Initial delay before starting
			},
		},
	};

	// Animation variants for each value item
	const itemVariants = {
		hidden: {
			opacity: 0,
			x: 50, // Start from the right
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	// Animation for the gradient line
	const lineVariants = {
		hidden: {
			scaleX: 0,
			opacity: 0,
		},
		visible: {
			scaleX: 1,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
				delay: 0.2, // Slight delay after the content appears
			},
		},
	};

	// Animation for the left content
	const leftContentVariants = {
		hidden: {
			opacity: 0,
			x: -30,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className="container mx-auto px-6 py-16">
			<div className="grid grid-cols-2">
				{/* Left Content - Animated */}
				<motion.div
					className="flex flex-col space-y-4"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						leftContentVariants,
					}}
				>
					<Heading value="The Circle Theory" />
					<p className="leading-relaxed w-[80%]">
						Our approach is grounded in the belief that creative work is not
						linear, it's cyclical, collaborative, and constantly evolving.
					</p>
					<UnderlineLink to="/contact-us" label="Work with us" />
				</motion.div>

				{/* Right Content - Values List */}
				<motion.div
					className="space-y-6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
				>
					{values.map((val, index) => (
						<motion.div
							className="space-y-6"
							key={index}
							variants={{ itemVariants }}
							whileHover={{
								x: 5,
								transition: { duration: 0.2 },
							}} // Optional hover effect
						>
							<div className="flex flex-row space-x-6">
								<motion.div
									className="w-8 h-8 rounded-full flex items-center justify-center"
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<p className="text-sm font-medium">{index + 1}</p>
								</motion.div>
								<div className="flex flex-col space-y-2">
									<p className="text-lg font-semibold">{val.title}</p>
									<p className="font-light text-slate-700">{val.description}</p>
								</div>
							</div>
							<motion.div
								className="w-full h-[1px] bg-gradient-to-r from-primary to-secondary origin-left"
								variants={{ lineVariants }}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default CircleTheorySection;
