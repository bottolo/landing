import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contributions/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div
			className={
				"flex flex-col w-[45vw] text-center gap-16 md:gap-32 text-lg/10 md:text-2xl/14"
			}
		>
			<p>a brief list of people i've worked with:</p>

			<div className={"flex flex-col gap-8"}>
				<a href={"https://github.com/azazellus"}>azazello</a>
				<a href={"https://github.com/FrankieBortot"}>frankie</a>
				<a href={"https://github.com/riccardopestrin"}>verso</a>
				<a href={"https://github.com/roxmysox"}>roxanne</a>
			</div>
		</div>
	);
}
