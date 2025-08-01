import { menu } from "~/lib/data";
import Logo from "../image/logo";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
	NavigationMenuViewport,
} from "~/components/ui/navigation-menu";
import AnimatedNavLink from "../animated/nav-link";
import { Button } from "../ui/button";
import { ArrowBigUp, ArrowUpRight } from "lucide-react";
import ButtonLink from "../link/button-link";
import { motion } from "framer-motion";

export default function Header() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: -10 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="flex items-center justify-between container mx-auto px-6 py-6"
		>
			<Logo />
			<div className="flex items-center space-x-5">
				<NavigationMenu>
					<NavigationMenuList>
						{menu.map((item, index) => (
							<NavigationMenuItem key={index}>
								{!item.menuItems && (
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										href={item.path}
									>
										{item.label}
									</NavigationMenuLink>
								)}
								{item.menuItems && (
									<>
										<NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul
												className="flex flex-col gap-2 w-[250px] p-4"
												key={index}
											>
												{item.menuItems.map((option, index) => (
													<div key={index}>
														<AnimatedNavLink
															closeDrawer={() => {}}
															index={index}
															option={option}
														/>
													</div>
												))}
											</ul>
										</NavigationMenuContent>
									</>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				<ButtonLink
					style="bg-primary text-white"
					to="/contact-us"
					title="Join the Circle"
					icon={ArrowUpRight}
				/>
			</div>
		</motion.header>
	);
}
