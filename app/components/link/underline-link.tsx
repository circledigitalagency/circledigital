import { Link } from "@remix-run/react";

export default function UnderlineLink({
	label,
	to,
}: {
	label: string;
	to: string;
}) {
	return (
		<Link
			to={to}
			className="text-primary hover:text-primary underline font-medium"
		>
			{label}
		</Link>
	);
}
