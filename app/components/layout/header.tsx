import Logo from "../image/logo";
import { motion } from "framer-motion";
import BurgerMenu from "./burger";
import { FullscreenMenu } from "./full-screen-menu";

export default function Header() {
	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="flex items-center justify-between container mx-auto px-6 py-8"
		>
			<Logo />
			<FullscreenMenu />
			<BurgerMenu />
		</motion.header>
	);
}
