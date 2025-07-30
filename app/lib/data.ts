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
		image:
			"https://res.cloudinary.com/dg1g6ctku/image/upload/v1753884640/designers_wrdyuj.png",
		title: "Designers",
		description:
			"We craft visuals that do more than just look good, they tell your story. From branding to interfaces, we design with clarity, emotion, and purpose.",
	},
	{
		image:
			"https://res.cloudinary.com/dg1g6ctku/image/upload/v1753884645/developers_meb2ij.png",
		title: "Developers",
		description:
			"We bring ideas to life through clean code and smart systems. Whether it’s a sleek website or a complex product, we build with stability, speed, and scalability in mind.",
	},
	{
		image:
			"https://res.cloudinary.com/dg1g6ctku/image/upload/v1753884639/content-creators_ae8ju3.png",
		title: "Content Creators",
		description:
			"We find the words, images, and stories that connect. From copywriting to campaigns, we shape content that feels real, sounds right, and moves people.",
	},
];

export const services = [
	{
		label: "Design",
		services: [
			"Visual Identity & Logo Design",
			"UI/UX Design for Web & Mobile",
			"Interactive Prototypes",
			"Moodboards & Brand Guidelines",
			"Pitch Decks",
			"Presentation Design",
			"Design Systems",
		],
		color: "#5B3B6D",
	},
	{
		label: "Development",
		services: [
			"Frontend Web Development",
			"Backend/API Integration",
			"MVP Builds",
			"CMS Setup & Deployment",
			"Responsive Website Design",
			"Hosting & Technical Support",
		],
		color: "#3D6B66",
	},
	{
		label: "Social Media",
		services: [
			"Social Media Strategy & Planning",
			"Monthly Content Calendars",
			"Visual Content Creation (Reels, Graphics, Stories)",
			"Platform Management (IG, LinkedIn, TikTok, etc.)",
			"Campaign Planning & Execution",
			"Community Engagement",
		],
		color: "#D4AF37",
	},
];
