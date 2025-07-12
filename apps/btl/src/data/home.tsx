import { BsMouseFill } from "react-icons/bs";
import { PiGameController, PiQuestionMark, PiUser } from "react-icons/pi";
import type { Content } from "../types/content";

export const ROOT_ELEMENTS: Content[] = [
	{
		title: "apps",
		link: "/apps",
		logo: (
			<div className={"flex flex-row gap-2 md:gap-8"}>
				<BsMouseFill className={"fill-white size-32 md:size-64"} />
			</div>
		),
		paragraphs: [],
		images: [],
	},
	{
		title: "games",
		link: "/games",
		logo: (
			<div className={"flex flex-row gap-2 md:gap-8"}>
				<PiGameController className={"fill-white  size-32 md:size-64"} />
			</div>
		),
		paragraphs: [],
		images: [],
	},
	{
		title: "contributions",
		link: "/contributions",
		logo: (
			<div className={"flex flex-row gap-2 md:gap-8"}>
				<PiUser className={"fill-white  size-32 md:size-64"} />
			</div>
		),
		paragraphs: [],
		images: [],
	},
	{
		title: "about",
		link: "/about",
		logo: (
			<div className={"flex flex-row gap-2 md:gap-8"}>
				<PiQuestionMark
					className={"fill-white size-32 md:size-64"}
					size={150}
				/>
			</div>
		),
		paragraphs: [],
		images: [],
	},
];
