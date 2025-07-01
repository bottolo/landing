import { createFileRoute } from "@tanstack/react-router";
import DitherCard from "../../components/ui/dither-card.tsx";
import { GAMES } from "../../data/games.tsx";

export const Route = createFileRoute("/games/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="absolute max-h-[87vh] md:max-h-[89vh] bottom-16 w-full overflow-y-auto flex flex-col gap-16 md:gap-32 items-center scrollbar-hide">
			{Object.values(GAMES).map((game) => (
				<DitherCard key={game.title} element={game} />
			))}
		</div>
	);
}
