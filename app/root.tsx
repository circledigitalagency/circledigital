import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";

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
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-QVM4527GB7"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-QVM4527GB7');
		`,
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "CircleDigital",
							url: "https://www.circledigital.co.za",
							logo: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770204263/logo_ivdt4y.png",
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
							url: "https://www.circledigital.co.za/work",
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
