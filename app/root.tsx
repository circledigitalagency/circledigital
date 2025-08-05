import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import {
	designServices,
	developmentServices,
	socialServices,
} from "./lib/data";

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	const serviceToJSONLD = (
		title: string,
		description: string,
		category: string
	) => ({
		"@type": "Service",
		name: title,
		description,
		serviceType: category,
		areaServed: "South Africa",
		url: `https://circledigital.agency/services/${category
			.toLowerCase()
			.replace(/\s+/g, "-")}`,
		provider: {
			"@type": "Organization",
			name: "Circle Digital",
			url: "https://circledigital.agency",
		},
	});

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "CircleDigital",
							url: "https://www.circledigital.co.za",
							logo: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1753884633/logo_xmafed.png",
							description:
								"CircleDigital is a creative technology studio shaping how brands live, move, and grow in the digital world.",
							foundingDate: "2025-05-20",
							address: {
								"@type": "PostalAddress",
								addressLocality: "Johannesburg",
								addressCountry: "ZA",
							},
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "ItemList",
							name: "Portfolio Projects",
							url: "https://www.circledigital.co.za/portfolio",
							itemListElement: [
								{
									"@type": "WebSite",
									name: "CSResources",
									url: "https://csresources.co.za/",
								},
								{
									"@type": "WebSite",
									name: "Freedom27",
									url: "https://freedom27.co.za/",
								},
								{
									"@type": "CreativeWork",
									name: "EasyFindTech",
									url: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1753964769/EasyFindTech_-_Home1_-_Light_su5xqa.png",
									about: "UI/UX Design",
								},
								{
									"@type": "CreativeWork",
									name: "Ubunye",
									url: "https://ugmnpojyvwbpcnvpmbnk.supabase.co/storage/v1/object/sign/cd-assets/Explore%20Experiences%20(1)%20(2).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOTczZWQ2Ny1iYTJkLTRiZGEtOTFkMi1mNzZlM2U0N2E5N2QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJjZC1hc3NldHMvRXhwbG9yZSBFeHBlcmllbmNlcyAoMSkgKDIpLnBuZyIsImlhdCI6MTc1NDM4Njg3NiwiZXhwIjoxODQ4OTk0ODc2fQ.U2fVevTYNH58hlF04y4wX5Za_Y4PYQt7GWgBVQxGMW8",
									about: "UI/UX Design",
								},
								{
									"@type": "CreativeWork",
									name: "The Creative Agency",
									url: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1754038815/T-_Home_1_jmycgk.png",
									about: "UI/UX Design",
								},
								{
									"@type": "CreativeWork",
									name: "Pula",
									url: "https://ugmnpojyvwbpcnvpmbnk.supabase.co/storage/v1/object/sign/cd-assets/Frame%2039642%20(1)%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kOTczZWQ2Ny1iYTJkLTRiZGEtOTFkMi1mNzZlM2U0N2E5N2QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJjZC1hc3NldHMvRnJhbWUgMzk2NDIgKDEpICgxKS5wbmciLCJpYXQiOjE3NTQzODcxMDgsImV4cCI6MTg0ODk5NTEwOH0.t9uKJW0cRbmbX3GKIfuTLfWXzCXvg1kOCwOT5PNf9y4",
									about: "Pitch Deck",
								},
							],
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@graph": [
								...socialServices.map((s) =>
									serviceToJSONLD(s.title, s.description, "Social Media")
								),
								...designServices.map((s) =>
									serviceToJSONLD(s.title, s.description, "Design")
								),
								...developmentServices.map((s) =>
									serviceToJSONLD(s.title, s.description, "Web Development")
								),
							],
						}),
					}}
				/>

				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
