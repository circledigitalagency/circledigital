import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-white bg-[radial-gradient(rgba(0,0,0,.05)_1px,transparent_1px)] bg-[length:20px_20px]">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
