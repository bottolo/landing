import { createFileRoute, Link } from "@tanstack/react-router";
import PixelCard from "../../blocks/Components/PixelCard/PixelCard.tsx";

export const Route = createFileRoute("/games/")({
	component: RouteComponent,
});

function RouteComponent() {
	const galleryElements = [
		{ image: "", text: "noclip", link: "/games/noclip" },
		{ image: "", text: "octant", link: "/games/octant" },
		{ image: "", text: "visio", link: "/games/visio" },
		{ image: "", text: "apus", link: "/games/apus" },
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
