"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { RefreshCw, FileText } from "lucide-react";
import { Badge } from "../ui/badge";

interface ImageViewerProps {
	initialUrl?: string;
	height?: number;
	className?: string;
	title?: string;
	category?: string;
}

export default function ImageViewer({
	initialUrl = "",
	height = 600,
	className = "",
	title = "Design Portfolio",
	category,
}: ImageViewerProps) {
	const [url, setUrl] = useState(initialUrl);
	const [currentUrl, setCurrentUrl] = useState(initialUrl);
	const [isLoading, setIsLoading] = useState(!!initialUrl);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [zoom, setZoom] = useState(100);
	const [rotation, setRotation] = useState(0);
	const imageRef = useRef<HTMLImageElement>(null);

	const handleImageLoad = () => {
		setIsLoading(false);
		setHasError(false);
	};

	const handleImageError = () => {
		setIsLoading(false);
		setHasError(true);
	};

	return (
		<div className={`w-full ${className}`}>
			<Card
				className={`${
					isFullscreen ? "fixed inset-4 z-50" : ""
				} transition-all duration-300`}
			>
				<CardHeader className="pb-3">
					<div className="flex flex-row justify-between items-center">
						<div className="flex items-center gap-2">
							<FileText className="w-5 h-5 text-muted-foreground" />
							<h3 className="text-lg font-semibold">{title}</h3>
						</div>
						<Badge className="text-black bg-slate-200 hover:bg-slate-100">
							{category}
						</Badge>
					</div>
				</CardHeader>

				<CardContent className="p-0">
					<div
						className="relative border-t overflow-y-auto overflow-x-hidden bg-gray-50"
						style={{
							height: isFullscreen ? "calc(100vh - 250px)" : height,
						}}
					>
						{isLoading && currentUrl && (
							<div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
								<div className="flex items-center gap-2 text-muted-foreground">
									<RefreshCw className="w-5 h-5 animate-spin" />
									Loading image...
								</div>
							</div>
						)}

						{currentUrl && (
							<div className="w-full overflow-y-auto overflow-x-hidden">
								<img
									ref={imageRef}
									src={currentUrl}
									alt="Design preview"
									className="w-full h-auto transition-all duration-300 shadow-lg"
									style={{
										transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
										transformOrigin: "top center",
									}}
									onLoad={handleImageLoad}
									onError={handleImageError}
								/>
							</div>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
