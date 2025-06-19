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
		<div className="flex flex-col gap-4">
			<div className="flex flex-col md:flex-row gap-4">
				{galleryElements.slice(0, -1).map((element) => (
					<Link
						to={element?.link}
						className="cursor-pointer"
						key={element?.text}
					>
						<PixelCard className={"border-2 rounded-none"}>
							<div className="absolute">
								<pre className="text-white">{element?.text}</pre>
							</div>
						</PixelCard>
					</Link>
				))}
			</div>

			{galleryElements.length > 0 && (
				<Link
					to={galleryElements[galleryElements.length - 1]?.link}
					className="cursor-pointer"
				>
					<PixelCard className="w-full border-2 rounded-none">
						<div className="absolute">
							<pre className="text-white">
								{galleryElements[galleryElements.length - 1]?.text}
							</pre>
						</div>
					</PixelCard>
				</Link>
			)}
		</div>
	);
}
