import { designPortfolio, webPortfolio } from "~/lib/data";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useState } from "react";

export default function PortfolioTab({
	activeTab,
	setActiveTab,
}: {
	activeTab: "design" | "web";
	setActiveTab: (activeTab: "design" | "web") => void;
}) {
	return (
		<div className="flex justify-start">
			<div className="bg-white/60">
				<div className="flex gap-2">
					<Button
						variant={activeTab === "design" ? "default" : "ghost"}
						onClick={() => setActiveTab("design")}
						className={`p-4 transition-all duration-300 ${
							activeTab === "design"
								? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
								: "text-gray-600 hover:text-gray-900"
						}`}
					>
						Branding
						<Badge
							variant="secondary"
							className="ml-2 bg-white/20 text-current"
						>
							{designPortfolio.length}
						</Badge>
					</Button>
					<Button
						variant={activeTab === "web" ? "default" : "ghost"}
						onClick={() => setActiveTab("web")}
						className={`p-4 transition-all duration-300 ${
							activeTab === "web"
								? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
								: "text-gray-600 hover:text-gray-900"
						}`}
					>
						Websites & Apps
						<Badge
							variant="secondary"
							className="ml-2 bg-white/20 text-current"
						>
							{webPortfolio.length}
						</Badge>
					</Button>
				</div>
			</div>
		</div>
	);
}
