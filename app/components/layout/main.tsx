import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { motion } from "framer-motion";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-white bg-[radial-gradient(rgba(0,0,0,.05)_1px,transparent_1px)] bg-[length:20px_20px]">
			<Header />
			<motion.main
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				// className="relative z-10"
			>
				{children}
			</motion.main>
			<Footer />
		</div>
	);
}
