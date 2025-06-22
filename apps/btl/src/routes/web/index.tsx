import { createFileRoute, Link } from "@tanstack/react-router";
import PixelCard from "../../blocks/Components/PixelCard/PixelCard.tsx";
import GalleryItem from "../../components/ui/gallery-item.tsx";

export const Route = createFileRoute("/web/")({
	component: RouteComponent,
});

interface GalleryElement {
	image: string;
	text: string;
	link: string;
}

const GALLERY_ELEMENTS: GalleryElement[] = [
	{ image: "", text: "cccd", link: "/web/cccd" },
	{ image: "", text: "mediation", link: "/web/mediation" },
	{ image: "", text: "pensiero selvaggio", link: "/web/wild" },
	{ image: "", text: "eridanus", link: "/web/eridanus" },
	{ image: "", text: "another project", link: "web/something" },
	{ image: "", text: "portfolio", link: "web/portfolio" },
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
