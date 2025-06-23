import { createFileRoute } from "@tanstack/react-router";
import DitherCard from "../../components/ui/dither-card.tsx";
import type { DetailsNavigationElement } from "../../types/details-navigation-element.ts";

export const Route = createFileRoute("/games/")({
	component: RouteComponent,
});

const GAMES: DetailsNavigationElement[] = [
	{
		title: "noclip",
		link: "/games/noclip",
		icon: (
			<img
				alt={"noclip"}
				className={"opacity-40 size-48 md:size-64"}
				src={"/heart.svg"}
			/>
		),
	},
	{
		title: "noclip",
		link: "/games/octant",
		icon: (
			<img
				alt={"octant"}
				className={"opacity-40 size-48 md:size-64"}
				src={"/heart.svg"}
			/>
		),
	},
	{
		title: "noclip",
		link: "/games/visio",
		icon: (
			<img
				alt={"visio"}
				className={"opacity-40 size-48 md:size-64"}
				src={"/heart.svg"}
			/>
		),
	},
	{
		title: "noclip",
		link: "/games/apus",
		icon: (
			<img
				alt={"apus"}
				className={"opacity-40 size-48 md:size-64"}
				src={"/heart.svg"}
			/>
		),
	},
];

function RouteComponent() {
	return (
		<div className="absolute max-h-[90vh] md:max-h-[92vh] bottom-2 w-full overflow-y-auto flex flex-col gap-16 items-center">
			{GAMES.map((element) => (
				<DitherCard key={element.title} element={element} />
			))}
		</div>
	);
}
