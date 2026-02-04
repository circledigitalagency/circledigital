import type { ReactNode } from "react";

interface ServiceCardProps {
	icon: ReactNode;
	title: string;
	description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
	return (
		<div className="group">
			<div className="mb-8 text-secondary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 inline-block">
				{icon}
			</div>
			<h3 className="text-2xl md:text-3xl font-light mb-5 tracking-tight">
				{title}
			</h3>
			<p className="text-muted-foreground leading-relaxed text-lg font-light">
				{description}
			</p>
		</div>
	);
}
