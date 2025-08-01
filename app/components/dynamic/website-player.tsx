import { useState, useRef } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
	RefreshCw,
	ExternalLink,
	Maximize2,
	Minimize2,
	AlertCircle,
	Globe,
} from "lucide-react";

interface WebsitePlayerProps {
	initialUrl?: string;
	height?: number;
	className?: string;
	title: string;
}

export default function WebsitePlayer({
	initialUrl = "https://example.com",
	height = 600,
	className = "",
	title,
}: WebsitePlayerProps) {
	const [url, setUrl] = useState(initialUrl);
	const [currentUrl, setCurrentUrl] = useState(initialUrl);
	const [isLoading, setIsLoading] = useState(true);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [hasError, setHasError] = useState(false);
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	const handleUrlSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!url.trim()) return;

		let formattedUrl = url.trim();
		if (
			!formattedUrl.startsWith("http://") &&
			!formattedUrl.startsWith("https://")
		) {
			formattedUrl = "https://" + formattedUrl;
		}

		setCurrentUrl(formattedUrl);
		setIsLoading(true);
		setHasError(false);
	};

	const loadWebsite = () => {
		if (!url.trim()) return;

		let formattedUrl = url.trim();
		if (
			!formattedUrl.startsWith("http://") &&
			!formattedUrl.startsWith("https://")
		) {
			formattedUrl = "https://" + formattedUrl;
		}

		setCurrentUrl(formattedUrl);
		setIsLoading(true);
		setHasError(false);
	};

	const handleRefresh = () => {
		if (iframeRef.current) {
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

	const openInNewTab = () => {
		window.open(currentUrl, "_blank");
	};

	const getDomain = (url: string) => {
		try {
			return new URL(url).hostname;
		} catch {
			return url;
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
							<Globe className="w-5 h-5 text-muted-foreground" />
							<h3 className="text-lg font-semibold">{title}</h3>
						</div>
					</div>
				</CardHeader>

				<CardContent className="p-0">
					<div
						className="relative border-t"
						style={{ height: isFullscreen ? "calc(100vh - 200px)" : height }}
					>
						{isLoading && (
							<div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
								<div className="flex items-center gap-2 text-muted-foreground">
									<RefreshCw className="w-5 h-5 animate-spin" />
									Loading website...
								</div>
							</div>
						)}

						{hasError && (
							<div className="absolute inset-0 bg-background flex items-center justify-center z-10">
								<div className="text-center space-y-3">
									<AlertCircle className="w-12 h-12 text-destructive mx-auto" />
									<div>
										<h4 className="font-semibold text-destructive">
											Failed to load website
										</h4>
										<p className="text-sm text-muted-foreground mt-1">
											This website may not allow embedding or the URL might be
											invalid.
										</p>
									</div>
									<Button
										variant="outline"
										onClick={loadWebsite}
										className="gap-2 bg-transparent"
									>
										<RefreshCw className="w-4 h-4" />
										Try Again
									</Button>
								</div>
							</div>
						)}

						<iframe
							ref={iframeRef}
							src={currentUrl}
							className="w-full h-full border-0"
							onLoad={handleIframeLoad}
							onError={handleIframeError}
							sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
							title="Website Player"
						/>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
