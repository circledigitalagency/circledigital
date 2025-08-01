import { Link } from "@remix-run/react";
import Logo from "../image/logo";
import { Separator } from "~/components/ui/separator";

export default function Footer() {
	return (
		<footer className="flex flex-col gap-12 py-6 container mx-auto">
			<Separator />
			<div className="flex sm:flex-row flex-col w-full justify-between sm:items-center">
				<Link to="/">
					<Logo />
				</Link>
				<div className="flex flex-row sm:space-x-10 space-x-5">
					{/* <NavLink path="/about-us" title="About us" />
                <NavLink path="/sustainability" title="Sustainability" />
                <NavLink path="/contact-us" title="Contact us" /> */}
				</div>
			</div>

			<div className="flex flex-col space-y-2">
				<p className="font-light text-sm">
					137 9th Rd, Noordwyk, Midrand, 1687
				</p>
				<p className="font-light text-sm">063 500 7223</p>
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
		</footer>
	);
}
