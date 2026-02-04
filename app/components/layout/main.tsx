import { ReactNode } from "react";

import { useState } from "react";
import { useLocation } from "@remix-run/react";
import Header from "./header";
import Footer from "./footer";

export default function MainLayout({ children }: { children: ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<div className="min-h-screen">
			{/* Glassmorphism Navigation */}
			<Header />
			{/* Main Content */}
			{children}
			<Footer />
		</div>
	);
}
