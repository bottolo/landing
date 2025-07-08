import { createFileRoute } from "@tanstack/react-router";
import DitherCard from "../../components/ui/dither-card.tsx";
import { GAMES } from "../../data/games.tsx";

export const Route = createFileRoute("/games/")({
	component: RouteComponent,
});

function RouteComponent() {
	return Object.values(GAMES).map((game) => (
		<DitherCard key={game.title} element={game} />
	));
}
