import { Link } from "@remix-run/react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "~/components/ui/sheet";
import { useState } from "react";
import {
	ArrowUpRight
} from "lucide-react";
import Logo from "../image/logo";
import { NAV_ITEMS } from "./full-screen-menu";

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
				<button
					type="button"
					className="
    relative text-white text-sm tracking-widest uppercase
    after:absolute after:left-0 after:-bottom-1
    after:h-[1px] after:w-0 after:bg-white
    after:transition-all after:duration-300
    hover:after:w-full
  "
				>
					Menu
				</button>
			</SheetTrigger>
			<SheetContent side="left" className="bg-black">
				<SheetHeader>
					<SheetTitle>
						<Link to="/">
							<Logo />
						</Link>
					</SheetTitle>
					<SheetDescription className="flex flex-col space-y-2 p-2 w-full items-start h-[12rem] justify-between">
						<nav className="flex flex-col gap-4 pt-16 lg:pt-0">
							{NAV_ITEMS.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									className="group text-white"
								>
									<div className="flex items-baseline justify-between">
										<span className="text-2xl font-light tracking-tight">
											{item.label}
										</span>
										<ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition" />
									</div>

									{item.note && (
										<div className="mt-1 text-white/60 text-sm">
											{item.note}
										</div>
									)}

									<div className="mt-4 h-px bg-white/10" />
								</Link>
							))}
						</nav>
						<Link
							to="/contact-us"
							className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm hover:opacity-90 transition"
						>
							Get in touch <ArrowUpRight className="h-4 w-4" />
						</Link>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default BurgerMenu;
