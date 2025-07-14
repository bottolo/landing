import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contributions/")({
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
				<p>a brief list of people i've worked with:</p>

				<div className={"flex flex-col gap-8"}>
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://github.com/azazellus"}
					>
						azazello
					</a>
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://github.com/FrankieBortot"}
					>
						frankie
					</a>
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://github.com/riccardopestrin"}
					>
						verso
					</a>
					<a
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
						href={"https://github.com/roxmysox"}
					>
						roxanne
					</a>
				</div>
			</div>
		</div>
	);
}
