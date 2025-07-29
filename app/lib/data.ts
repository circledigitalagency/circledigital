import { IMenu } from "./@types";

export const menu: IMenu[] = [
	{
		label: "About us",
		path: "/about-us",
	},
	{
		label: "Our Services",
		menuItems: [
			{
				label: "Design",
				path: "/services/design",
			},
			{
				label: "Social Media",
				path: "/services/social-media",
			},
			{
				label: "Development",
				path: "/services/development",
			},
		],
	},
	{
		label: "Portfolio",
		path: "/portfolio",
	},
];

export const whoarewe = [
	{
		image: "/designers.png",
		title: "Designers",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id lorem vel mi scelerisque tempor vel ut urna. Sed porta pellentesque neque. ",
	},
	{
		image: "/developers.png",
		title: "Developers",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id lorem vel mi scelerisque tempor vel ut urna. Sed porta pellentesque neque. ",
	},
	{
		image: "/content-creators.png",
		title: "Content Creators",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id lorem vel mi scelerisque tempor vel ut urna. Sed porta pellentesque neque. ",
	},
];
