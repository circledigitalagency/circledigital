import { Link } from "@remix-run/react";

export default function Logo({ style }: { style?: string }) {
	return (
		<Link to="/">
			<div className="w-fit flex items-center gap-3">
				<img
					src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1770204263/logo_ivdt4y.png"
					alt="logo"
					className="object-fill w-12 h-10"
				/>
				<p className="text-white text-3xl font-sloopscript">Circle Digital</p>
			</div>
		</Link>
	);
}
