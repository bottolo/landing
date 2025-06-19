import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "../../lib/cn.ts";

export const Route = createFileRoute("/web/cccd")({
	component: RouteComponent,
});

function RouteComponent() {
	const [view, setView] = useState<"text" | "images">("text");
	return (
		<div className={"flex flex-col items-center"}>
			<div
				className={"absolute top-4 flex flex-col items-center z-[5] text-xl"}
			>
				<p>
					<Link to={"/"}>bottolo </Link>/ <Link to={"/web"}>web</Link> / cccd
				</p>
				<p>mute</p>
				<p onClick={() => setView(view === "text" ? "images" : "text")}>
					{view}
				</p>
			</div>

			<div
				className={cn(
					"absolute flex flex-col items-center gap-24 bottom-8 opacity-20 h-[85vh] w-[300px] md:w-[700px] overflow-hidden scale-80 transition-all duration-800",
					view === "images" && "overflow-y-auto z-[1] opacity-100 scale-100",
				)}
			>
				<img className={"w-[700px]"} src={"/img.png"} />
				<img className={"w-[700px]"} src={"/img.png"} />
				<img className={"w-[700px]"} src={"/img.png"} />
				<img className={"w-[700px]"} src={"/img.png"} />
				<img className={"w-[700px]"} src={"/img.png"} />
				<img className={"w-[700px]"} src={"/img.png"} />
			</div>

			<div
				className={cn(
					"absolute flex flex-col items-center w-[250px] md:w-[700px] opacity-20 text-center text-2xl/14 h-[85vh] gap-[10rem] bottom-8 overflow-hidden scale-80 transition-all duration-800",
					view === "text" &&
						"overflow-y-auto z-[1] opacity-100 scale-100 bg-black/30",
				)}
			>
				<p>
					Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum
					aliqua ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu
					excepteur ex eu enim commodo Lorem veniam deserunt fugiat dolore
					officia amet enim sunt laborum.
				</p>
				<p>
					Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum
					aliqua ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu
					excepteur ex eu enim commodo Lorem veniam deserunt fugiat dolore
					officia amet enim sunt laborum. Pariatur consectetur anim qui magna
					quis voluptate laborum quis ea minim commodo aliquip tempor et.
					Aliquip officia cillum elit qui ipsum aute consequat labore culpa
					incididunt qui voluptate nisi. Dolore ex anim consectetur est occaecat
					duis adipisicing.
				</p>
				<p>
					Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum
					aliqua ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu
					excepteur ex eu enim commodo Lorem veniam deserunt fugiat dolore
					officia amet enim sunt laborum. Pariatur consectetur anim qui magna
					quis voluptate laborum quis ea minim commodo aliquip tempor et.
					Aliquip officia cillum elit qui ipsum aute consequat labore culpa
					incididunt qui voluptate nisi. Dolore ex anim consectetur est occaecat
					duis adipisicing. Ex in eu magna magna sunt occaecat amet deserunt
					ullamco laborum aliqua ea deserunt esse anim. Ex sit do ex incididunt
					fugiat et. Eu excepteur ex eu enim commodo Lorem veniam deserunt
					fugiat dolore officia amet enim sunt laborum. Pariatur consectetur
					anim qui magna quis voluptate laborum quis ea minim commodo aliquip
					tempor et. Aliquip officia cillum elit qui ipsum aute consequat labore
					culpa incididunt qui voluptate nisi. Dolore ex anim consectetur est
					occaecat duis adipisicing.
				</p>
				<p>
					Ex in eu magna magna sunt occaecat amet deserunt ullamco laborum
					aliqua ea deserunt esse anim. Ex sit do ex incididunt fugiat et. Eu
					excepteur ex eu enim commodo Lorem veniam deserunt fugiat dolore
					officia amet enim sunt laborum. Pariatur consectetur anim qui magna
					quis voluptate laborum quis ea minim commodo aliquip tempor et.
					Aliquip officia cillum elit qui ipsum aute consequat labore culpa
					incididunt qui voluptate nisi. Dolore ex anim consectetur est occaecat
					duis adipisicing.
				</p>
			</div>
		</div>
	);
}
