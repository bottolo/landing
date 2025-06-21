import { createFileRoute, Link } from "@tanstack/react-router";
import PixelCard from "../../blocks/Components/PixelCard/PixelCard.tsx";

export const Route = createFileRoute("/web/")({
	component: RouteComponent,
});

interface GalleryElement {
	image: string;
	text: string;
	link: string;
}

function RouteComponent() {
	const galleryElements: GalleryElement[] = [
		{ image: "", text: "cccd", link: "/web/cccd" },
		{ image: "", text: "mediation", link: "/web/mediation" },
		{ image: "", text: "pensiero selvaggio", link: "/web/wild" },
		{ image: "", text: "eridanus", link: "/web/eridanus" },
		{ image: "", text: "another project", link: "web/something" },
		{ image: "", text: "portfolio", link: "web/portfolio" },
	];

	return (
		<div className="py-8 w-full overflow-y-auto flex flex-col gap-16 items-center">
			{galleryElements.map((element) => (
				<Link to={element?.link} className="cursor-pointer" key={element?.text}>
					<PixelCard className={"border-2 rounded-none"}>
						<div className="absolute">
							<p className="text-white text-center">{element.text}</p>
						</div>
					</PixelCard>
				</Link>
			))}
		</div>
	);
}
