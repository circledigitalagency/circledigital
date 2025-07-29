import { ReactNode } from "react";
import Header from "./header";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<main>{children}</main>
		</div>
	);
}
