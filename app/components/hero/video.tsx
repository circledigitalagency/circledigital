import { Button } from "~/components/ui/button";

export default function VideoHero() {
	return (
		<div className="h-screen w-full overflow-hidden">
			{/* Video Background */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 h-full w-full object-cover"
			>
				<source
					src="https://res.cloudinary.com/dfxorvtuc/video/upload/v1768221669/Circledigital_Portfolio_Video_dj6lqt.mp4"
					type="video/mp4"
				/>
			</video>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/10" />

			{/* Hero Content */}
			{/* <div className="relative z-10 h-full flex items-center justify-center px-4">
				<div className="text-center max-w-4xl">
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance leading-tight">
						Creative Digital
						<br />
						Excellence
					</h1>
					<p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
						We craft stunning digital experiences that captivate audiences and
						drive results
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-white text-black hover:bg-white/90 font-medium px-8"
						>
							View Our Work
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm font-medium px-8"
						>
							Learn More
						</Button>
					</div>
				</div>
			</div> */}

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
				<div className="flex flex-col items-center gap-2 animate-bounce">
					<span className="text-white/70 text-sm uppercase tracking-wider">
						Scroll
					</span>
					<div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
						<div className="w-1.5 h-3 bg-white/70 rounded-full" />
					</div>
				</div>
			</div>
		</div>
	);
}
