import { createFileRoute, useParams } from "@tanstack/react-router";
import { GAMES } from "../../data/games.tsx";
import { cn } from "../../lib/cn.ts";
import { getImagesByTitle } from "../../lib/get-images-by-title.ts";
import { getParagraphsByTitle } from "../../lib/get-paragraphs-by-title.ts";
import { useOptionsStore } from "../../store/useOptionsStore.ts";

export const Route = createFileRoute("/games/$choice")({
	component: RouteComponent,
});

function RouteComponent() {
	const { view, setView } = useOptionsStore();
	const { choice } = useParams({ from: "/games/$choice" });

	const paragraphs = getParagraphsByTitle(choice, GAMES);
	const images = getImagesByTitle(choice, GAMES);

	const displayParagraphs =
		paragraphs.length > 0
			? paragraphs
			: [
					"Content not found for this selection.",
					"Please check the URL or navigate back to the main page.",
				];

	const displayImages = images.length > 0 ? images : ["/img.png"];

	const toggleView = () => {
		setView(view === "images" ? "text" : "images");
	};

	return (
		<div className={"flex flex-col items-center"}>
			<div
				className={cn(
					"absolute flex flex-col items-center md:gap-[30vh] bottom-8 opacity-20 max-h-[85vh] md:max-h-[87vh] w-[80vw] overflow-hidden scale-80 transition-all duration-800 cursor-pointer group",
					view === "images" &&
						"overflow-y-auto scrollbar-hide z-[1] opacity-100 scale-100",
				)}
				onClick={toggleView}
			>
				{displayImages.map((imageSrc, index) => (
					<img
						key={index}
						className={cn(
							"w-[1000px] shadow-lg grayscale-100 hover:grayscale-0 transition-all duration-1000",
							view === "text" && "hover:scale-105",
						)}
						src={imageSrc}
						alt={`${choice} ${index + 1}`}
						onError={(e) => {
							e.currentTarget.src = "/img.png";
						}}
						onClick={(e) => e.stopPropagation()}
					/>
				))}
			</div>

			<div
				className={cn(
					"absolute flex flex-col items-center w-[35vw] min-w-[225px] md:min-w-[400px] opacity-20 text-center text-sm md:text-2xl/14 max-h-[85vh] md:max-h-[87vh] gap-[10rem] bottom-8 overflow-hidden scale-80 transition-all duration-800 cursor-pointer group",
					view === "text" &&
						"overflow-y-auto scrollbar-hide z-[1] opacity-100 scale-100 ",
				)}
				onClick={toggleView}
			>
				{displayParagraphs.map((paragraph, index) => (
					<div
						key={index}
						className="px-4"
						onClick={(e) => e.stopPropagation()}
					>
						{paragraph}
					</div>
				))}
			</div>
		</div>
	);
}
