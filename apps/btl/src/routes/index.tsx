import { createFileRoute, Link } from "@tanstack/react-router";
import PixelCard from "../blocks/Components/PixelCard/PixelCard.tsx";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const galleryElements = [
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

	return (
		<div className=" py-8 w-full overflow-y-auto flex flex-col gap-16 items-center">
			{galleryElements.map((element) => (
				<Link to={element?.link} className="cursor-pointer" key={element?.text}>
					<PixelCard className={"border-2 rounded-none"}>
						<div className="absolute">
							<p className="text-white">{element?.text}</p>
						</div>
					</PixelCard>
				</Link>
			))}
		</div>
	);
}
