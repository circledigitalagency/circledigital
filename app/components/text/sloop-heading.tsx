import { cn } from "~/lib/utils";

export default function Heading({ value, style }: { value: string, style: string }) {
	return <h2 className={cn(
		"text-6xl font-sloopscript",
		style
	)}>{value}</h2>;
}
