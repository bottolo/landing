import { createFileRoute } from "@tanstack/react-router";
import DitherCard from "../components/ui/dither-card.tsx";
import { ROOT_ELEMENTS } from "../data/home.tsx";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="absolute max-h-[87vh] md:max-h-[89vh] bottom-2 w-full overflow-y-auto flex flex-col gap-16 items-center scrollbar-hide">
			{ROOT_ELEMENTS.map((element) => (
				<DitherCard key={element.title} element={element} />
			))}
		</div>
	);
}

export default Index;
