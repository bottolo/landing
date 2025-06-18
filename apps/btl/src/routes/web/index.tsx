import { createFileRoute, Link } from "@tanstack/react-router";
import PixelCard from "../../blocks/Components/PixelCard/PixelCard.tsx";

export const Route = createFileRoute("/web/")({
	component: RouteComponent,
});

function RouteComponent() {
	const galleryElements = [
		{ image: "", text: "cccd", link: "/web" },
		{ image: "", text: "mediation", link: "/games" },
		{ image: "", text: "pensiero selvaggio", link: "/about" },
		{ image: "", text: "eridanus", link: "/web" },
	];

	return (
		<div className={"grid grid-cols-1 md:grid-cols-4 gap-4"}>
			{galleryElements.map((element) => (
				<Link href={element?.link} className={"cursor-pointer"}>
					<PixelCard key={element?.text}>
						<div className={"absolute"}>
							<pre className={"text-white"}>{element?.text}</pre>
						</div>
					</PixelCard>
				</Link>
			))}
		</div>
	);
}
