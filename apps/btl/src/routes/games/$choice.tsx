import { createFileRoute, useParams } from "@tanstack/react-router";
import { GAMES_CONTENT_DATA } from "../../data/games-content-data.tsx";
import { cn } from "../../lib/cn.ts";
import { getImagesByTitle } from "../../lib/get-images-by-title.ts";
import { getParagraphsByTitle } from "../../lib/get-paragraphs-by-title.ts";
import { useOptionsStore } from "../../store/useOptionsStore.ts";

export const Route = createFileRoute("/games/$choice")({
	component: RouteComponent,
});

function RouteComponent() {
	const { view } = useOptionsStore();
	const { choice } = useParams({ from: "/games/$choice" });

	const paragraphs = getParagraphsByTitle(choice, GAMES_CONTENT_DATA);
	const images = getImagesByTitle(choice, GAMES_CONTENT_DATA);

	const displayParagraphs =
		paragraphs.length > 0
			? paragraphs
			: [
					"Content not found for this selection.",
					"Please check the URL or navigate back to the main page.",
				];

	const displayImages = images.length > 0 ? images : ["/img.png"];

	return (
		<div className={"flex flex-col items-center"}>
			<div
				className={cn(
					"absolute flex flex-col items-center gap-24 bottom-8 opacity-20 max-h-[85vh] md:max-h-[87vh] w-[300px] md:w-[700px] overflow-hidden scale-80 transition-all duration-800",
					view === "images" &&
						"overflow-y-auto scrollbar-hide z-[1] opacity-100 scale-100",
				)}
			>
				{displayImages.map((imageSrc, index) => (
					<img
						key={index}
						className={"w-[700px] rounded-lg shadow-lg"}
						src={imageSrc}
						alt={`${choice} ${index + 1}`}
						onError={(e) => {
							e.currentTarget.src = "/img.png";
						}}
					/>
				))}
			</div>

			<div
				className={cn(
					"absolute flex flex-col items-center w-[250px] md:w-[700px] opacity-20 text-center text-2xl/14 max-h-[85vh] md:max-h-[87vh] gap-[10rem] bottom-8 overflow-hidden scale-80 transition-all duration-800",
					view === "text" &&
						"overflow-y-auto scrollbar-hide z-[1] opacity-100 scale-100 bg-black/30",
				)}
			>
				{displayParagraphs.map((paragraph, index) => (
					<p key={index} className="px-4">
						{paragraph}
					</p>
				))}
			</div>
		</div>
	);
}
