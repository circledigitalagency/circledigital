import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
				aileron: ["Aileron"],
				sloopscript: ["SloopScript"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				primary: "#883E18",
			},
			backgroundImage: {
				sparkle:
					"url('https://res.cloudinary.com/dg1g6ctku/image/upload/v1753884645/developers_meb2ij.png')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
