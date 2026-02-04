export interface IMenu {
	icon?: string;
	label: string;
	path?: string;
	menuItems?: {
		label: string;
		path: string;
	}[];
}

export interface IProject {
	type: "web" | "design";
	title: string;
	url: string;
	category: string;
}

export const ACCENT = {
	branding: "rgba(120, 180, 255, 0.55)", // electric blue
	dev: "rgba(170, 120, 255, 0.50)", // violet
	social: "rgba(90, 220, 200, 0.45)", // teal
};

export type WorkCategory = "web" | "branding" | "social";
