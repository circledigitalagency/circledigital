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

export default function Header() {
	return (
		<header className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
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
		</header>
	);
}
