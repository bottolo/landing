import { createFileRoute } from "@tanstack/react-router";
import GalleryItem from "../components/ui/gallery-item.tsx";

const GALLERY_ELEMENTS = [
	{
		text: "web",
		link: "/web",
	},
	{
		text: "games",
		link: "/games",
	},
	{
		text: "substack...?",
		link: "/about",
	},
	{
		text: "about",
		link: "/about",
	},
];

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="py-8 w-full overflow-y-auto flex flex-col gap-16 items-center">
			{GALLERY_ELEMENTS.map((element) => (
				<GalleryItem key={element.text} element={element} />
			))}
		</div>
	);
}

export default Index;
