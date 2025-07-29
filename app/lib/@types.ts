export interface IMenu {
	icon?: string;
	label: string;
	path?: string;
	menuItems?: {
		label: string;
		path: string;
	}[];
}
