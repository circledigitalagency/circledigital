import { useState } from "react";
import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";

interface SparkleButtonProps {
	to: string;
	title: string;
	Icon?: React.ComponentType<{ className?: string; size?: number }>;
	style?: string;
}

const SparkleButton = ({ to, title, Icon, style }: SparkleButtonProps) => {
	const [sparkles, setSparkles] = useState<
		Array<{ id: number; x: number; y: number }>
	>([]);

	const createSparkles = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		// Create multiple sparkles
		const newSparkles = Array.from({ length: 12 }, (_, i) => ({
			id: Date.now() + i,
			x,
			y,
		}));

		setSparkles((prev) => [...prev, ...newSparkles]);

		// Remove sparkles after animation
		setTimeout(() => {
			setSparkles((prev) =>
				prev.filter((s) => !newSparkles.find((ns) => ns.id === s.id))
			);
		}, 1000);
	};

	return (
		<Link
			className={cn(
				"px-2 py-2 flex items-center gap-2 relative overflow-hidden",
				"transition-all duration-300 ease-in-out",
				"hover:scale-105 hover:shadow-lg",
				"active:scale-95",
				style
			)}
			to={to}
			onClick={createSparkles}
		>
			{/* Sparkles */}
			{sparkles.map((sparkle, index) => (
				<div
					key={sparkle.id}
					className="absolute pointer-events-none"
					style={{
						left: sparkle.x,
						top: sparkle.y,
						animation: `sparkle-${index % 4} 1s ease-out forwards`,
					}}
				>
					<div className="text-yellow-400 text-xl">✨</div>
				</div>
			))}

			{title}
			{Icon && (
				<Icon
					className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
					size={16}
				/>
			)}

			<style>{`
				@keyframes sparkle-0 {
					to {
						transform: translate(30px, -40px) scale(0);
						opacity: 0;
					}
				}
				@keyframes sparkle-1 {
					to {
						transform: translate(-30px, -40px) scale(0);
						opacity: 0;
					}
				}
				@keyframes sparkle-2 {
					to {
						transform: translate(40px, 10px) scale(0);
						opacity: 0;
					}
				}
				@keyframes sparkle-3 {
					to {
						transform: translate(-40px, 10px) scale(0);
						opacity: 0;
					}
				}
			`}</style>
		</Link>
	);
};

export default SparkleButton;
