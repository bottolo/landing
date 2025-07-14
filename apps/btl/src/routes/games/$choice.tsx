import { createFileRoute, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { GAMES } from "../../data/games.tsx";
import { getImagesByTitle } from "../../lib/get-images-by-title.ts";
import { getParagraphsByTitle } from "../../lib/get-paragraphs-by-title.ts";
import { useSettingsStore } from "../../stores/useSettingsStore.ts";

export const Route = createFileRoute("/games/$choice")({
	component: RouteComponent,
});

function RouteComponent() {
	const { view } = useSettingsStore();
	const { choice } = useParams({ from: "/games/$choice" });
	const [pinnedImage, setPinnedImage] = useState<string | null>(null);

	const paragraphs = getParagraphsByTitle(choice, GAMES);
	const images = getImagesByTitle(choice, GAMES);

	const handleImageClick = (e: React.MouseEvent, image: string) => {
		e.stopPropagation();

		if (pinnedImage) {
			setPinnedImage(null);
		} else {
			setPinnedImage(image);
		}
	};

	return (
		<div
			className="w-full h-[90vh] overflow-y-auto scrollbar-hide"
			onClick={() => {
				if (pinnedImage) {
					setPinnedImage(null);
				}
			}}
		>
			<div
				className={
					"flex flex-col w-[45vw] items-center mx-auto text-center gap-16 md:gap-32 text-lg/10 md:text-2xl/14"
				}
			>
				{view === "images"
					? images.map((image) => {
							const isPinned = pinnedImage === image;
							return (
								<img
									key={image}
									className={`hover:grayscale-0 hover:w-full shadow-lg grayscale-100 transition-all ease-out duration-[0.5s] cursor-[url('/init_cursor_hover.svg'),_pointer] ${
										isPinned ? "w-full grayscale-0" : "w-full md:w-[500px]"
									}`}
									src={image}
									alt={`app-${choice}`}
									onClick={(e) => handleImageClick(e, image)}
									onError={(e) => {
										e.currentTarget.src = "/img.png";
									}}
								/>
							);
						})
					: paragraphs.map((paragraph) => paragraph)}
			</div>
		</div>
	);
}
