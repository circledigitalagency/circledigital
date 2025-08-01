import { P } from "node_modules/framer-motion/dist/types.d-Cjd591yU";
import { IMenu, IProject } from "./@types";
import { title } from "framer-motion/client";

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
		color: "#C4A484",
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
		color: "#A8B5A0",
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
		color: "#E8C5A0",
	},
];

export const webPortfolio: IProject[] = [
	{
		type: "web",
		title: "CSResources",
		url: "https://csresources.co.za/",
		category: "",
	},
	{
		type: "web",
		title: "Freedom27",
		url: "https://freedom27.co.za/",
		category: "",
	},
];

export const designPortfolio: IProject[] = [
	{
		type: "design",
		title: "EasyFindTech",
		url: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1753964769/EasyFindTech_-_Home1_-_Light_su5xqa.png",
		category: "",
	},
	{
		type: "design",
		title: "Ubunye",
		url: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1753964769/EasyFindTech_-_Home1_-_Light_su5xqa.png",
		category: "",
	},
	{
		type: "design",
		title: "The Creative Agency",
		url: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1754038815/T-_Home_1_jmycgk.png",
		category: "",
	},
	{
		type: "design",
		title: "Pula",
		url: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1753964769/EasyFindTech_-_Home1_-_Light_su5xqa.png",
		category: "",
	},
];

export const values = [
	{
		title: "Design with Intention",
		description:
			"Every decision we make, visual or technical, is purposeful. We create with clarity, empathy, and the end user in mind.",
	},
	{
		title: "Creativity Meets Precision",
		description:
			"We balance imagination with execution. Artful design is nothing without seamless implementation, and we do both.",
	},
	{
		title: "Human First",
		description:
			"Tech should feel like a natural extension of people’s lives. We build experiences that feel intuitive, accessible, and emotionally intelligent.",
	},
	{
		title: "Collaboration",
		description:
			"Great work happens in dialogue. We co-create with our clients, our partners, and each other, listening deeply and building together.",
	},
	{
		title: "Play With Purpose",
		description:
			"We believe play unlocks creativity, so we explore, experiment, and imagine boldly while always grounding our work in meaning.",
	},
];
