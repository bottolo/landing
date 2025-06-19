import { createFileRoute, Link } from "@tanstack/react-router";
import RollingGallery from "../../blocks/Components/RollingGallery/RollingGallery.tsx";

export const Route = createFileRoute("/games/")({
	component: RouteComponent,
});

function RouteComponent() {
	const galleryElements = [
		{ image: "", text: "noclip", link: "/games/noclip" },
		{ image: "", text: "octant", link: "/games" },
		{ image: "", text: "visio", link: "/about" },
		{ image: "", text: "apus", link: "/web" },
	];

	return (
		<div className="w-full p-8">
			<RollingGallery
				items={galleryElements}
				renderItem={(element, index) => (
					<Link
						to={element.link}
						className="cursor-pointer block w-full h-full"
						key={element.text}
					>
						<div
							className={
								"flex flex-col items-center justify-center border border-white h-[300px] w-[500px] hover:bg-white/20"
							}
						>
							<p className="text-white text-center">{element.text}</p>
						</div>
					</Link>
				)}
				autoplay={true}
				pauseOnHover={false}
			/>
		</div>
	);
}
