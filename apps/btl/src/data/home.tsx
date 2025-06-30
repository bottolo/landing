import { FaReact } from "react-icons/fa6";
import {
	SiAboutdotme,
	SiGodotengine,
	SiTypescript,
	SiUnity,
} from "react-icons/si";
import type { Content } from "../types/content";

export const ROOT_ELEMENTS: Content[] = [
	{
		title: "apps",
		link: "/apps",
		logo: (
			<div className={"flex flex-row gap-8"}>
				<FaReact className={"fill-white size-24 md:size-36"} />
				<SiTypescript className={"fill-white size-24 md:size-36"} />
			</div>
		),
		paragraphs: [],
		images: [],
	},
	{
		title: "games",
		link: "/games",
		logo: (
			<div className={"flex flex-row gap-8"}>
				<SiGodotengine className={"fill-white  size-24 md:size-36"} />
				<SiUnity className={"fill-white   size-24 md:size-36"} />
			</div>
		),
		paragraphs: [],
		images: [],
	},
	{
		title: "about",
		link: "/about",
		logo: (
			<div className={"flex flex-row gap-8 scale-75 md:scale-100"}>
				<SiAboutdotme className={"fill-white "} size={150} />
			</div>
		),
		paragraphs: [],
		images: [],
	},
];
