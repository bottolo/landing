import { createFileRoute } from "@tanstack/react-router";
import GalleryItem from "../../components/ui/gallery-item.tsx";

export const Route = createFileRoute("/games/")({
	component: RouteComponent,
});

const GALLERY_ELEMENTS = [
	{ image: "", text: "noclip", link: "/games/noclip" },
	{ image: "", text: "octant", link: "/games/octant" },
	{ image: "", text: "visio", link: "/games/visio" },
	{ image: "", text: "apus", link: "/games/apus" },
];

function RouteComponent() {
	return (
		<div className="py-8 w-full overflow-y-auto flex flex-col gap-16 items-center">
			{GALLERY_ELEMENTS.map((element) => (
				<GalleryItem key={element.text} element={element} />
			))}
		</div>
	);
}
