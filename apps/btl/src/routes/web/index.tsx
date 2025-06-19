import { createFileRoute, Link } from "@tanstack/react-router";
import RollingGallery from "../../blocks/Components/RollingGallery/RollingGallery.tsx";

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
		{ image: "", text: "cccd", link: "/web" },
		{ image: "", text: "mediation", link: "/games" },
		{ image: "", text: "pensiero selvaggio", link: "/about" },
		{ image: "", text: "eridanus", link: "/web" },
		{ image: "", text: "another project", link: "/projects" },
		{ image: "", text: "portfolio", link: "/portfolio" },
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
								"flex flex-col items-center justify-center border border-white h-[300px] w-[220px] hover:bg-white/20"
							}
						>
							<pre className="text-white text-center">{element.text}</pre>
						</div>
					</Link>
				)}
				autoplay={true}
				pauseOnHover={false}
			/>
		</div>
	);
}
