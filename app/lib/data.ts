import { IMenu, IProject } from "./@types";
import {
	Megaphone,
	CalendarCheck,
	Video,
	Smartphone,
	Target,
	MessageSquare,
	PenTool,
	LayoutDashboard,
	MousePointer,
	Palette,
	FileBarChart,
	MonitorSmartphone,
	Layers,
	Code,
	Database,
	Zap,
	ServerCog,
	Monitor,
	LifeBuoy,
} from "lucide-react";

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

export const socialServices = [
	{
		title: "Content Strategy",
		description:
			"We craft content plans aligned with your goals, audience, and tone of voice.",
		icon: Megaphone,
	},
	{
		title: "Monthly Content Calendars",
		description:
			"Plan ahead with thoughtful, consistent content tailored to your brand.",
		icon: CalendarCheck,
	},
	{
		title: "Reels, Stories, Graphics",
		description:
			"Visual content designed to engage, share, and perform on every platform.",
		icon: Video,
	},
	{
		title: "Platform Management",
		description:
			"End-to-end support on IG, LinkedIn, TikTok & more — posting, engagement & analytics.",
		icon: Smartphone,
	},
	{
		title: "Campaign Planning",
		description:
			"Big ideas turned into structured campaigns across formats and platforms.",
		icon: Target,
	},
	{
		title: "Community Engagement",
		description:
			"We respond, listen, and grow your audience with care and clarity.",
		icon: MessageSquare,
	},
];

export const designServices = [
	{
		title: "Visual Identity & Logo Design",
		description:
			"Logos, color systems, and branding assets that reflect your essence.",
		icon: PenTool,
	},
	{
		title: "UI/UX Design for Web & Mobile",
		description:
			"User-centered interfaces that are intuitive, elegant, and functional.",
		icon: LayoutDashboard,
	},
	{
		title: "Interactive Prototypes",
		description:
			"Clickable, animated mockups that bring your product to life early.",
		icon: MousePointer,
	},
	{
		title: "Moodboards & Brand Guidelines",
		description:
			"Creative direction, tone, and visual inspiration in one cohesive doc.",
		icon: Palette,
	},
	{
		title: "Pitch Decks",
		description:
			"Investor-ready slide decks that balance data and storytelling.",
		icon: FileBarChart,
	},
	{
		title: "Presentation Design",
		description:
			"Visually polished, branded presentations tailored to your voice.",
		icon: MonitorSmartphone,
	},
	{
		title: "Design Systems",
		description:
			"Reusable UI components and rules for consistent product scaling.",
		icon: Layers,
	},
];

export const developmentServices = [
	{
		title: "Frontend Web Development",
		description:
			"Responsive, fast, and accessible frontends using modern frameworks.",
		icon: Code,
	},
	{
		title: "Backend/API Integration",
		description:
			"Robust backend setups, API integrations, and seamless data flow.",
		icon: Database,
	},
	{
		title: "MVP Builds",
		description:
			"Quick, effective product development for lean startups and test launches.",
		icon: Zap,
	},
	{
		title: "CMS Setup & Deployment",
		description:
			"Flexible content management using platforms like WordPress, Sanity, or Strapi.",
		icon: ServerCog,
	},
	{
		title: "Responsive Website Design",
		description:
			"Beautiful layouts that look and perform well across all devices.",
		icon: Monitor,
	},
	{
		title: "Hosting & Technical Support",
		description:
			"We handle deployments, updates, and offer support as you scale.",
		icon: LifeBuoy,
	},
];

export const clientLogos = [
	{
		name: "EasyFindTech",
		logo: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1754053429/397_Easyfind_collateral_logo_pFinal_20190529-01_3_rzxl6x.jpg",
		size: "large",
		position: { top: "10%", left: "15%" },
		delay: 0,
	},
	{
		name: "Freedom27",
		logo: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751621471/freedom-logo_g1idsk.png",
		size: "medium",
		position: { top: "25%", left: "5%" },
		delay: 0.5,
	},
	{
		name: "DesignStudio",
		logo: "/placeholder.svg?height=70&width=70",
		size: "large",
		position: { top: "45%", left: "20%" },
		delay: 1,
	},
	{
		name: "InnovateLab",
		logo: "/placeholder.svg?height=45&width=45",
		size: "small",
		position: { top: "15%", left: "35%" },
		delay: 1.5,
	},
	{
		name: "GlobalBrand",
		logo: "/placeholder.svg?height=65&width=65",
		size: "large",
		position: { top: "65%", left: "10%" },
		delay: 2,
	},
	{
		name: "CreativeAgency",
		logo: "/placeholder.svg?height=55&width=55",
		size: "medium",
		position: { top: "75%", left: "30%" },
		delay: 2.5,
	},
	{
		name: "TechStartup",
		logo: "/placeholder.svg?height=40&width=40",
		size: "small",
		position: { top: "35%", left: "8%" },
		delay: 3,
	},
	{
		name: "DigitalCorp",
		logo: "/placeholder.svg?height=60&width=60",
		size: "medium",
		position: { top: "55%", left: "35%" },
		delay: 3.5,
	},
];

export const services = [
	{
		label: "Design",
		services: designServices,
		color: "#5B3B6D",
	},
	{
		label: "Development",
		services: developmentServices,
		color: "#3D6B66",
	},
	{
		label: "Social Media",
		services: socialServices,
		color: "#D4AF37",
	},
];
