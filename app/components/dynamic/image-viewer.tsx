"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
	RefreshCw,
	Maximize2,
	Minimize2,
	AlertCircle,
	ImageIcon,
	Download,
	ZoomIn,
	ZoomOut,
	RotateCw,
	FileText,
} from "lucide-react";

interface ImageViewerProps {
	initialUrl?: string;
	height?: number;
	className?: string;
	title?: string;
}

export default function ImageViewer({
	initialUrl = "",
	height = 600,
	className = "",
	title = "Design Portfolio",
}: ImageViewerProps) {
	const [url, setUrl] = useState(initialUrl);
	const [currentUrl, setCurrentUrl] = useState(initialUrl);
	const [isLoading, setIsLoading] = useState(!!initialUrl);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [zoom, setZoom] = useState(100);
	const [rotation, setRotation] = useState(0);
	const imageRef = useRef<HTMLImageElement>(null);

	const handleUrlSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!url.trim()) return;

		setCurrentUrl(url.trim());
		setIsLoading(true);
		setHasError(false);
	};

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file && file.type.startsWith("image/")) {
			const fileUrl = URL.createObjectURL(file);
			setCurrentUrl(fileUrl);
			setUrl(file.name);
			setIsLoading(true);
			setHasError(false);
		}
	};

	const handleRefresh = () => {
		if (currentUrl) {
			setIsLoading(true);
			setHasError(false);
			if (imageRef.current) {
				imageRef.current.src = currentUrl + "?t=" + Date.now();
			}
		}
	};

	const handleImageLoad = () => {
		setIsLoading(false);
		setHasError(false);
	};

	const handleImageError = () => {
		setIsLoading(false);
		setHasError(true);
	};

	const toggleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};

	const downloadImage = () => {
		if (currentUrl) {
			const link = document.createElement("a");
			link.href = currentUrl;
			link.download = url || "design-image";
			link.click();
		}
	};

	const zoomIn = () => {
		setZoom((prev) => Math.min(prev + 25, 300));
	};

	const zoomOut = () => {
		setZoom((prev) => Math.max(prev - 25, 25));
	};

	const resetZoom = () => {
		setZoom(100);
		setRotation(0);
	};

	const rotateImage = () => {
		setRotation((prev) => (prev + 90) % 360);
	};

	const getFileName = (url: string) => {
		try {
			return url.split("/").pop()?.split("?")[0] || "Image";
		} catch {
			return "Image";
		}
	};

	return (
		<div className={`w-full ${className}`}>
			<Card
				className={`${
					isFullscreen ? "fixed inset-4 z-50" : ""
				} transition-all duration-300`}
			>
				<CardHeader className="pb-3">
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-2">
							<FileText className="w-5 h-5 text-muted-foreground" />
							<h3 className="text-lg font-semibold">{title}</h3>
						</div>
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
