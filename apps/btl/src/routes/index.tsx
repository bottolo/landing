import { createFileRoute } from "@tanstack/react-router";
import DitherCard from "../components/ui/dither-card.tsx";
import { ROOT_ELEMENTS } from "../data/home.tsx";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return ROOT_ELEMENTS.map((element, index) => (
		<DitherCard index={index} key={element.title} element={element} />
	));
}

export default Index;
