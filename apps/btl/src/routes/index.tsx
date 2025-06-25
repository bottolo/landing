import { createFileRoute } from "@tanstack/react-router";
import { FaReact } from "react-icons/fa6";
import {
	SiAboutdotme,
	SiGodotengine,
	SiTypescript,
	SiUnity,
} from "react-icons/si";
import DitherCard from "../components/ui/dither-card.tsx";
import type { RootNavigationElement } from "../types/root-navigation-element.ts";

const ROOT_ELEMENTS: RootNavigationElement[] = [
	{
		title: "apps",
		link: "/apps",
		icon: (
			<div className={"flex flex-row gap-8"}>
				<FaReact className={"fill-black/40 size-24 md:size-36"} />
				<SiTypescript className={"fill-black/40 size-24 md:size-36"} />
			</div>
		),
	},
	{
		title: "games",
		link: "/games",
		icon: (
			<div className={"flex flex-row gap-8"}>
				<SiGodotengine className={"fill-black/40  size-24 md:size-36"} />
				<SiUnity className={"fill-black/40  size-24 md:size-36"} />
			</div>
		),
	},
	{
		title: "about",
		link: "/about",
		icon: (
			<div className={"flex flex-row gap-8 scale-75 md:scale-100"}>
				<SiAboutdotme className={"fill-stone-500/50"} size={150} />
			</div>
		),
	},
];

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="absolute max-h-[90vh] bottom-2 w-full overflow-y-auto flex flex-col gap-16 items-center scrollbar-hide">
			{ROOT_ELEMENTS.map((element) => (
				<DitherCard key={element.title} element={element} />
			))}
		</div>
	);
}

export default Index;
