import { Link } from "@tanstack/react-router";
import type { Content } from "../types/content";

export const GAMES: {
	[key: string]: Content;
} = {
	noclip: {
		title: "noclip",
		link: "/games/noclip",
		logo: <p className={"text-[36px] md:text-[70px]"}>0</p>,
		paragraphs: [
			<p>
				this is a project that i've made in collaboration with the politecnico
				di milano as a part of my videogames curriculum at the university of
				milan
			</p>,
			<p>
				it's made in <a href={"https://unity.com/"}>unity</a> and it is the
				first game that i have ever developed, contributing to ui/ux aspects as
				well as the game design. check out its
				<a href={"https://polimi-game-collective.itch.io/noclip"}> itch.io</a>{" "}
				page! below a brief description taken from the aforementioned link:
			</p>,
			<p>
				"noclip is an experimental first-person game in which you break its
				boundaries to discover a secret reality
			</p>,
			<p>
				you've found yourself on a mysterious planet. you're able to feel it:
				your surroundings do not feel quite right. you are not real. yet,
				discovering that you belong to a digital world gave you the power to
				transcend reality and see what lies beyond the simulation, letting you
				spot invisible and intangible objects hidden around the map
			</p>,
			<p>
				you'll have to solve platforming puzzles by noclipping through the map,
				memorizing the path to your goal. however, your real body isn't as free:
				you'll need to be quick and accurate with your movements! during
				platforming you'll only have a limited time, which can be recharged
				through various checkpoints"
			</p>,
		],
		images: [
			"/games/noclip/ncp_0.jpg",
			"/games/noclip/ncp_1.jpg",
			"/games/noclip/ncp_2.jpg",
			"/games/noclip/ncp_3.jpg",
			"/games/noclip/ncp_4.jpg",
			"/games/noclip/ncp_5.jpg",
		],
	},
	octant: {
		title: "octant",
		link: "/games/octant",
		logo: <p className={"text-[36px] md:text-[70px]"}>1</p>,
		paragraphs: [
			<p>
				a game made in <a href={"https://godotengine.org/"}>godot</a> for the
				university of kassel during 2024
			</p>,
			<p>
				it is a fairly simple game where you have to visit different worlds in
				order to activate a mechanism which lets you finish the game
			</p>,
			<p>
				it was developed with{" "}
				<a href={"https://github.com/azazellus"}>azazello</a> and two other
				collaborators, and the idea behind it was to create different
				environments, each with its own gimmick
			</p>,
			<p>
				technically there are some neat things, like infinitely looping worlds
				and zero-g environments, but since the project was made in a short time
				it was redesigned as a simple walking simulator with interesting places
			</p>,
			<p>
				i'd say that between all the projects that i've made, this is the one
				that i was attracted to the most during the conceptualization phase
			</p>,
		],
		images: [
			"/games/octant/oct_0.png",
			"/games/octant/oct_1.png",
			"/games/octant/oct_2.png",
			"/games/octant/oct_3.png",
			"/games/octant/oct_4.png",
			"/games/octant/oct_5.png",
			"/games/octant/oct_6.png",
			"/games/octant/oct_7.png",
			"/games/octant/oct_8.png",
			"/games/octant/oct_9.png",
		],
	},
	phony: {
		title: "phony",
		link: "/games/phony",
		logo: <p className={"text-[36px] md:text-[70px]"}>2</p>,
		paragraphs: [
			<p>
				my second project made in <a href={"https://godotengine.org/"}>godot</a>{" "}
				with <a href={"https://github.com/azazellus"}>azazello</a> which aimed
				to replicate a visual novel by using a very interesting library called{" "}
				<a href={"https://github.com/nathanhoad/godot_dialogue_manager"}>
					godot dialogue manager
				</a>
			</p>,
			<p>
				it has never been finished, but technically speaking it has interesting
				elements such as branching dialogues, a reactive environment and story
				based on your choices and the coolest art style, for which i have to
				credit <a href={"https://github.com/roxmysox"}>roxanne</a>
			</p>,
			<p>
				it visually tried to blend 3d elements along with 2d ones to create an
				unique environment, and i have to say that it succeeded in doing so
			</p>,
			<p>
				perhaps, one day, i'll return to it... "phony" isn't even its name!
			</p>,
		],
		images: [
			"/games/phony/ph_0.png",
			"/games/phony/ph_1.png",
			"/games/phony/ph_2.png",
			"/games/phony/ph_3.png",
			"/games/phony/ph_4.png",
			"/games/phony/ph_5.png",
		],
	},
	visio: {
		title: "visio",
		link: "/games/visio",
		logo: <p className={"text-[36px] md:text-[70px]"}>3</p>,
		paragraphs: [
			<p>
				visio is a project that i've made for the virtual reality course at the
				university of milan during 2023. it is a 3d VR puzzle game made with{" "}
				<a href={"https://unity.com/"}> unity </a> and developed with the aid of
				the{" "}
				<a href={"https://www.meta.com/it/en/quest/products/quest-2/"}>
					meta quest 2
				</a>{" "}
				where you have to connect rays of light to the respective inputs in
				order to finish the game
			</p>,

			<p>
				designed in collaboration with{" "}
				<a href={"https://github.com/azazellus"}>azazello</a> after developing
				<Link to={"/games/noclip"}>noclip</Link>, it features low-poly, basic
				spherical shapes and an ethereal landscape which is always a common
				element in init.Sense's projects
			</p>,
			<p>
				what was interesting about its level design was the fact that the whole
				gameplay was linked to this elevator at the center that you had to reach
				in order to proceed
			</p>,
			<p>
				considering that it was made with a vr and that i had no prior
				experience, i'd say i'm mostly proud of what i have achieved, although
				it is not complete
			</p>,
		],
		images: [
			"/games/visio/vis_0.jpg",
			"/games/visio/vis_1.jpg",
			"/games/visio/vis_2.jpg",
			"/games/visio/vis_3.jpg",
			"/games/visio/vis_4.jpg",
			"/games/visio/vis_5.jpg",
		],
	},
};
