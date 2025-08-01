import { Link } from "@remix-run/react";
import { Icon, LucideProps } from "lucide-react";
import { cn } from "~/lib/utils";

export default function ButtonLink({
	to,
	title,
	style,
	icon: Icon,
}: {
	to: string;
	style: string;
	title: string;
	icon?: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
}) {
	return (
		<Link
			className={cn(
				"h-9 px-4 py-2 flex items-center gap-2",
				"transition-all duration-300 ease-in-out",
				"hover:scale-105 hover:shadow-lg",
				"active:scale-95",
				style
			)}
			to={to}
		>
			{title}
			{Icon && (
				<Icon
					className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
					size={16}
				/>
			)}
		</Link>
	);
}
