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
