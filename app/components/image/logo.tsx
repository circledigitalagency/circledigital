import { Link } from "@remix-run/react";

export default function Logo({ style }: { style?: string }) {
	return (
		<Link to="/">
			<div className="w-44">
				<img src="/logo.png" alt="logo" className="object-fill" />
			</div>
		</Link>
	);
}
