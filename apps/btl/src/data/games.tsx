import { Link } from "@tanstack/react-router";
import { SiGodotengine, SiUnity } from "react-icons/si";
import type { Content } from "../types/content";

export const GAMES: {
	[key: string]: Content;
} = {
	noclip: {
		title: "noclip",
		link: "/games/noclip",
		logo: <SiUnity className={"fill-white size-48 md:size-64"} />,
		paragraphs: [
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum.
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing.
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing. Ex in eu magna magna
				sunt occaecat amet deserunt ullamco laborum aliqua ea deserunt esse
				anim. Ex sit do ex incididunt fugiat et. Eu excepteur ex eu enim commodo
				Lorem veniam deserunt fugiat dolore officia amet enim sunt laborum.
				Pariatur consectetur anim qui magna quis voluptate laborum quis ea minim
				commodo aliquip tempor et. Aliquip officia cillum elit qui ipsum aute
				consequat labore culpa incididunt qui voluptate nisi. Dolore ex anim
				consectetur est occaecat duis adipisicing.
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing.
			</p>,
		],
		images: [
			"/games/noclip/ncp_0.png",
			"/games/noclip/ncp_1.png",
			"/games/noclip/ncp_2.png",
			"/games/noclip/ncp_3.png",
			"/games/noclip/ncp_4.png",
			"/games/noclip/ncp_5.png",
			"/games/noclip/ncp_6.png",
			"/games/noclip/ncp_7.png",
		],
	},
	octant: {
		title: "octant",
		link: "/games/octant",
		logo: <SiGodotengine className={"fill-white size-48 md:size-64"} />,
		paragraphs: [
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum.
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing.
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing. Ex in eu magna magna
				sunt occaecat amet deserunt ullamco laborum aliqua ea deserunt esse
				anim. Ex sit do ex incididunt fugiat et. Eu excepteur ex eu enim commodo
				Lorem veniam deserunt fugiat dolore officia amet enim sunt laborum.
				Pariatur consectetur anim qui magna quis voluptate laborum quis ea minim
				commodo aliquip tempor et. Aliquip officia cillum elit qui ipsum aute
				consequat labore culpa incididunt qui voluptate nisi. Dolore ex anim
				consectetur est occaecat duis adipisicing.
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing.
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
			"/games/octant/oct_10.png",
			"/games/octant/oct_11.png",
		],
	},
	phony: {
		title: "phony",
		link: "/games/phony",
		logo: <SiGodotengine className={"fill-white size-48 md:size-64"} />,
		paragraphs: [
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum.
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing.
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing. Ex in eu magna magna
				sunt occaecat amet deserunt ullamco laborum aliqua ea deserunt esse
				anim. Ex sit do ex incididunt fugiat et. Eu excepteur ex eu enim commodo
				Lorem veniam deserunt fugiat dolore officia amet enim sunt laborum.
				Pariatur consectetur anim qui magna quis voluptate laborum quis ea minim
				commodo aliquip tempor et. Aliquip officia cillum elit qui ipsum aute
				consequat labore culpa incididunt qui voluptate nisi. Dolore ex anim
				consectetur est occaecat duis adipisicing.
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing.
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
		logo: <SiGodotengine className={"fill-white size-48 md:size-64"} />,
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
				order to proceed
			</p>,

			<p>
				designed in collaboration with{" "}
				<a href={"https://github.com/azazellus"}>azazello</a> after developing
				<Link to={"/games/noclip"}>noclip</Link>, it features low-poly, basic
				spherical shapes and an ethereal landscape which is always a common
				element in init.Sense's projects
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing. Ex in eu magna magna
				sunt occaecat amet deserunt ullamco laborum aliqua ea deserunt esse
				anim. Ex sit do ex incididunt fugiat et. Eu excepteur ex eu enim commodo
				Lorem veniam deserunt fugiat dolore officia amet enim sunt laborum.
				Pariatur consectetur anim qui magna quis voluptate laborum quis ea minim
				commodo aliquip tempor et. Aliquip officia cillum elit qui ipsum aute
				consequat labore culpa incididunt qui voluptate nisi. Dolore ex anim
				consectetur est occaecat duis adipisicing.
			</p>,
			<p>
				Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum aliqua
				ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu excepteur
				ex eu enim commodo Lorem veniam deserunt fugiat dolore officia amet enim
				sunt laborum. Pariatur consectetur anim qui magna quis voluptate laborum
				quis ea minim commodo aliquip tempor et. Aliquip officia cillum elit qui
				ipsum aute consequat labore culpa incididunt qui voluptate nisi. Dolore
				ex anim consectetur est occaecat duis adipisicing.
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
