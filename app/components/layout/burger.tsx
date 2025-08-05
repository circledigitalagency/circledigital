import { Link } from "@remix-run/react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "~/components/ui/sheet";
import { menu } from "~/lib/data";
import { useState } from "react";
import {
	ArrowDown,
	ArrowDown01Icon,
	ArrowUpRight,
	ChevronDown,
	MenuIcon,
} from "lucide-react";
import Logo from "../image/logo";
import AnimatedNavLink from "../animated/nav-link";
import ButtonLink from "../link/button-link";

const BurgerMenu = () => {
	const [openOptions, setOpenOptions] = useState<boolean>();
	const [openDrawer, setOpenDrawer] = useState<boolean>();

	const closeDrawer = () => {
		setOpenDrawer(false);
		setOpenOptions(false);
	};

	return (
		<Sheet onOpenChange={closeDrawer}>
			<SheetTrigger className="sm:hidden block">
				<MenuIcon size={30} />
			</SheetTrigger>
			<SheetContent side="left" className="bg-white">
				<SheetHeader>
					<SheetTitle>
						<Link to="/">
							<Logo />
						</Link>
					</SheetTitle>
					<SheetDescription className="flex flex-col space-y-2 p-2 w-full items-start h-[12rem] justify-between">
						<div className="flex flex-col space-y-2 p-2 w-full items-start">
							{menu.map((item, index) => (
								<div key={index}>
									{!item.menuItems && item.path && (
										<Link to={item.path}>{item.label}</Link>
									)}

									{item.menuItems && (
										<>
											<div
												className="flex gap-2 items-center cursor-pointer"
												onClick={() => setOpenOptions(!openOptions)}
											>
												<p>{item.label}</p>
												<ChevronDown />
											</div>

											{openOptions && (
												<div className="flex flex-col space-y-4 items-start px-2 mt-4 mb-4">
													{item.menuItems?.map((option, index) => (
														<div key={index}>
															<AnimatedNavLink
																closeDrawer={closeDrawer}
																index={index}
																option={option}
															/>
														</div>
													))}
												</div>
											)}
										</>
									)}
								</div>
							))}
						</div>
						<ButtonLink
							style="bg-primary text-white"
							to="/contact-us"
							title="Join the Circle"
							icon={ArrowUpRight}
						/>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default BurgerMenu;
