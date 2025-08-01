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
	FileText,
	Download,
	ZoomIn,
	ZoomOut,
} from "lucide-react";

interface PDFViewerProps {
	initialUrl?: string;
	height?: number;
	className?: string;
	title?: string;
}

export default function PDFViewer({
	initialUrl = "",
	height = 800,
	className = "",
	title = "Design Portfolio",
}: PDFViewerProps) {
	const [url, setUrl] = useState(initialUrl);
	const [currentUrl, setCurrentUrl] = useState(initialUrl);
	const [isLoading, setIsLoading] = useState(!!initialUrl);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [zoom, setZoom] = useState(100);
	const iframeRef = useRef<HTMLIFrameElement>(null);

	const handleUrlSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!url.trim()) return;

		setCurrentUrl(url.trim());
		setIsLoading(true);
		setHasError(false);
	};

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file && file.type === "application/pdf") {
			const fileUrl = URL.createObjectURL(file);
			setCurrentUrl(fileUrl);
			setUrl(file.name);
			setIsLoading(true);
			setHasError(false);
		}
	};

	const handleRefresh = () => {
		if (iframeRef.current && currentUrl) {
			setIsLoading(true);
			setHasError(false);
			iframeRef.current.src = iframeRef.current.src;
		}
	};

	const handleIframeLoad = () => {
		setIsLoading(false);
		setHasError(false);
	};

	const handleIframeError = () => {
		setIsLoading(false);
		setHasError(true);
	};

	const toggleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};

	const downloadPDF = () => {
		if (currentUrl) {
			const link = document.createElement("a");
			link.href = currentUrl;
			link.download = url || "design-portfolio.pdf";
			link.click();
		}
	};

	const zoomIn = () => {
		setZoom((prev) => Math.min(prev + 25, 200));
	};

	const zoomOut = () => {
		setZoom((prev) => Math.max(prev - 25, 50));
	};

	const getFileName = (url: string) => {
		try {
			return url.split("/").pop()?.split("?")[0] || "PDF Document";
		} catch {
			return "PDF Document";
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
							{currentUrl && (
								<Badge variant="secondary" className="ml-auto">
									{getFileName(url || currentUrl)}
								</Badge>
							)}
						</div>
					</div>
				</CardHeader>

				<CardContent className="p-0">
					<div
						className="relative border-t"
						style={{
							height: isFullscreen ? "calc(100vh - 250px)" : height,
							transform: `scale(${zoom / 100})`,
							transformOrigin: "top left",
							width: `${10000 / zoom}%`,
						}}
					>
						{!currentUrl && (
							<div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
								<div className="text-center space-y-3">
									<FileText className="w-16 h-16 text-muted-foreground/50 mx-auto" />
									<div>
										<h4 className="font-semibold text-muted-foreground">
											Upload or Load PDF
										</h4>
										<p className="text-sm text-muted-foreground/70 mt-1">
											Upload a PDF file or enter a PDF URL to view your design
											work
										</p>
									</div>
								</div>
							</div>
						)}

						{isLoading && currentUrl && (
							<div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
								<div className="flex items-center gap-2 text-muted-foreground">
									<RefreshCw className="w-5 h-5 animate-spin" />
									Loading PDF...
								</div>
							</div>
						)}

						{hasError && (
							<div className="absolute inset-0 bg-background flex items-center justify-center z-10">
								<div className="text-center space-y-3">
									<AlertCircle className="w-12 h-12 text-destructive mx-auto" />
									<div>
										<h4 className="font-semibold text-destructive">
											Failed to load PDF
										</h4>
										<p className="text-sm text-muted-foreground mt-1">
											The PDF file could not be loaded. Please check the URL or
											try uploading the file directly.
										</p>
									</div>
									<Button
										variant="outline"
										onClick={handleRefresh}
										className="gap-2 bg-transparent"
									>
										<RefreshCw className="w-4 h-4" />
										Try Again
									</Button>
								</div>
							</div>
						)}

						{currentUrl && (
							<iframe
								ref={iframeRef}
								src={`${currentUrl}#toolbar=1&navpanes=1&scrollbar=1`}
								className="w-full h-full border-0"
								onLoad={handleIframeLoad}
								onError={handleIframeError}
								title="PDF Viewer"
							/>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
