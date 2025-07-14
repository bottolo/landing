import { createFileRoute, useParams } from "@tanstack/react-router";
import { APPS } from "../../data/apps.tsx";
import { getImagesByTitle } from "../../lib/get-images-by-title.ts";
import { getParagraphsByTitle } from "../../lib/get-paragraphs-by-title.ts";
import { useSettingsStore } from "../../stores/useSettingsStore.ts";

export const Route = createFileRoute("/apps/$choice")({
	component: RouteComponent,
});

function RouteComponent() {
	const { view } = useSettingsStore();
	const { choice } = useParams({ from: "/apps/$choice" });

	const paragraphs = getParagraphsByTitle(choice, APPS);
	const images = getImagesByTitle(choice, APPS);

	return (
		<div
			className={
				"flex flex-col w-[45vw] h-[90vh] overflow-y-auto text-center gap-16 md:gap-32 text-lg/10 md:text-2xl/14 items-center scrollbar-hide"
			}
		>
			{view === "images"
				? images.map((image) => (
						<img
							key={image}
							className="w-full md:w-[500px] hover:w-full shadow-lg grayscale-100 hover:grayscale-0 transition-all ease-out duration-[0.5s] cursor-[url('/init_cursor_hover.svg'),_pointer]"
							src={image}
							alt={`app-${choice}`}
							onError={(e) => {
								e.currentTarget.src = "/img.png";
							}}
						/>
					))
				: paragraphs.map((paragraph) => paragraph)}
		</div>
	);
}
