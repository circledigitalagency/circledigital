import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WorkCategory } from "./@types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function AccentGlow({
	accent,
}: {
	accent: "blue" | "violet" | "coral";
}) {
	const map = {
		blue: "bg-[radial-gradient(70%_60%_at_20%_10%,rgba(120,180,255,0.18),transparent_60%)]",
		violet:
			"bg-[radial-gradient(70%_60%_at_20%_10%,rgba(170,120,255,0.16),transparent_60%)]",
		coral:
			"bg-[radial-gradient(70%_60%_at_20%_10%,rgba(255,140,90,0.14),transparent_60%)]",
	} as const;

	return (
		<div
			className={[
				"pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500",
				map[accent],
			].join(" ")}
		/>
	);
}

export function categoryAccent(c: WorkCategory): "blue" | "violet" | "coral" {
	if (c === "web") return "blue";
	if (c === "branding") return "violet";
	return "coral";
}