import { createFileRoute } from "@tanstack/react-router";
import DitherCard from "../../components/ui/dither-card.tsx";
import type { DetailsNavigationElement } from "../../types/details-navigation-element.ts";

export const Route = createFileRoute("/web/")({
	component: RouteComponent,
});

const WEBSITES: DetailsNavigationElement[] = [
	{
		title: "landing",
		link: "/web/landing",
		icon: (
			<img
				alt={"landing"}
				className={
					"opacity-30 size-48 md:size-58 object-cover grayscale invert rounded-full"
				}
				src={"/pic.jpg"}
			/>
		),
	},
	{
		title: "cccd",
		link: "/web/cccd",
		icon: (
			<img
				alt={"cccd"}
				className={"opacity-40 size-48 md:size-64"}
				src={"/heart.svg"}
			/>
		),
	},
	{
		title: "mediation",
		link: "/web/mediation",
		icon: (
			<img
				alt={"mediation"}
				className={"opacity-40 size-40 md:size-56"}
				src={"/mc.svg"}
			/>
		),
	},
	{ title: "pensiero selvaggio", link: "/web/wild", disabled: true },
];

function RouteComponent() {
	return (
		<div className="absolute max-h-[90vh] md:max-h-[92vh]  bottom-2 w-full overflow-y-auto flex flex-col gap-16 items-center scrollbar-hide">
			{WEBSITES.map((element) => (
				<DitherCard key={element.title} element={element} />
			))}
		</div>
	);
}
