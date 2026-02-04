export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const variants = {
	container: {
		hidden: {},
		show: {
			transition: { staggerChildren: 0.08, delayChildren: 0.15 },
		},
	},
	fadeUp: {
		hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
		show: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: { duration: 0.6, ease: EASE_OUT },
		},
	},
	background: {
		hidden: { scale: 1.06, y: 10, opacity: 0 },
		show: {
			scale: 1.02,
			y: 0,
			opacity: 1,
			transition: { duration: 1.6, ease: EASE_OUT },
		},
	},
	overlay: {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { duration: 1.1, ease: EASE_OUT } },
	},
};
