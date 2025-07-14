import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="w-full h-[90vh] overflow-y-auto scrollbar-hide">
			<div
				className={
					"flex flex-col w-[45vw] mx-auto text-center gap-16 md:gap-32 text-lg/10 md:text-2xl/14"
				}
			>
				<p>
					i'm samuele castiglia (aka{" "}
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://github.com/bottolo"}
					>
						bottolo
					</a>
					). i'm a full-stack developer working at{" "}
					<a href={"https://fiscomed.it/"}>fiscomed</a>.
				</p>
				<p>
					i've studied computer science at the{" "}
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://www.unimi.it/it"}
					>
						university of milan
					</a>{" "}
					and, after obtaining my degree, i've started working as a technical
					consultant at
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://www.gntechonomy.com/"}
					>
						{" "}
						gn techonomy
					</a>{" "}
					until july 2025, where i've started covering the role of full-stack
					developer at the company mentioned above
				</p>
				<p>
					in the meantime i've worked in several projects which will be found in
					this landing page. mostly games made with{" "}
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://godotengine.org/"}
					>
						godot
					</a>{" "}
					and{" "}
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://unity.com/"}
					>
						unity
					</a>
					, but i have also developed web applications using{" "}
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://react.dev/"}
					>
						react
					</a>
					,
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://www.typescriptlang.org/"}
					>
						{" "}
						typescript
					</a>
					,{" "}
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://bun.sh/"}
					>
						{" "}
						bun
					</a>{" "}
					with deployments on <a href={"https://vercel.com/"}>vercel</a> and{" "}
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://fly.io/"}
					>
						fly.io
					</a>
				</p>{" "}
				<p>
					my main areas of interest are web and game development, mostly
					visually and sonically interesting things
				</p>
				<p>
					but what about me, really? as mentioned briefly before, i believe that
					building a visual and sonic identity is one of the most important
					things to make everything we develop valuable in some way
				</p>
				<p>
					our eyes need to catch a glimpse of our personality, our ears must
					embrace the sound of design and what i think we are all really capable
					of
				</p>
				<p>ciao!</p>
			</div>
		</div>
	);
}
