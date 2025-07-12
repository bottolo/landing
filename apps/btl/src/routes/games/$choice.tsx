import { createFileRoute, useParams } from "@tanstack/react-router";
import { GAMES } from "../../data/games.tsx";
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

	return (
		<div className="flex flex-col items-center justify-center min-h-screen ">
			{view === "images" ? (
				<div
					onClick={() => setView("text")}
					className="flex flex-col p-8 items-center gap-32 md:gap-64 w-[75vw] md:w-[50vw] overflow-y-auto scrollbar-hide hover:bg-white/5"
				>
					{displayImages.map((imageSrc, index) => (
						<img
							key={index}
							className="w-full shadow-lg grayscale-100 hover:grayscale-0 transition-all duration-1000"
							src={imageSrc}
							alt={`${choice} ${index + 1}`}
							onError={(e) => {
								e.currentTarget.src = "/img.png";
							}}
						/>
					))}{" "}
				</div>
			) : (
				<div
					onClick={() => setView("images")}
					className="hover:bg-white/5 flex flex-col items-center w-[35vw] min-w-[225px] md:min-w-[400px] text-center text-lg/10 md:text-2xl/14 gap-[5rem] overflow-y-auto scrollbar-hide px-14"
				>
					{displayParagraphs.map((paragraph, index) => (
						<div key={index}>{paragraph}</div>
					))}
				</div>
			)}
		</div>
	);
}
