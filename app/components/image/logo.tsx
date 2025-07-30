import { Link } from "@remix-run/react";

export default function Logo({ style }: { style?: string }) {
	return (
		<Link to="/">
			<div className="w-44">
				<img
					src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1753884633/logo_xmafed.png"
					alt="logo"
					className="object-fill"
				/>
			</div>
		</Link>
	);
}
