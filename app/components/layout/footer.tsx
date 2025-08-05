import { Link } from "@remix-run/react";
import Logo from "../image/logo";
import { Separator } from "~/components/ui/separator";
import { motion } from "framer-motion";
import { menu } from "~/lib/data";
import AnimatedNavLink from "../animated/nav-link";

export default function Footer() {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="flex flex-col gap-12 py-6 px-6 container mx-auto"
		>
			<Separator />
			<div className="flex sm:flex-row flex-col w-full justify-between sm:items-center gap-12">
				<Link to="/">
					<Logo />
				</Link>
				<div className="grid lg:grid-cols-3 gap-2 lg:gap-12">
					{menu.map((men, index) => (
						<div key={index}>
							{!men.menuItems && men.path && (
								<Link to={men.path} className="text-primary">
									{men.label}
								</Link>
							)}
							{men.menuItems && (
								<>
									<Link to="" className="text-primary">
										{men.label}
									</Link>

									<div className="flex flex-col space-y-4 items-start px-2 mt-4 mb-4">
										{men.menuItems?.map((option, index) => (
											<div key={index}>
												<AnimatedNavLink
													closeDrawer={() => {}}
													index={index}
													option={option}
												/>
											</div>
										))}
									</div>
								</>
							)}
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col space-y-2">
				<p className="font-light text-sm">
					137 9th Rd, Noordwyk, Midrand, 1687
				</p>
				<a
					href="mailto:connect@circledigital.co.za"
					className="font-medium text-sm text-primary cursor-pointer"
				>
					connect@circledigital.co.za
				</a>
			</div>
			<Separator />
			<div className="flex w-full justify-center">
				<p className="font-light text-sm">
					Copyright © 2025 Circledigital. All rights reserved.
				</p>
			</div>
		</motion.footer>
	);
}
