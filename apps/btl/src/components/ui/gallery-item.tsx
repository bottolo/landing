import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import React, { Suspense, useState } from "react";
import Dither from "../../blocks/Backgrounds/Dither/Dither.tsx";
import { cn } from "../../lib/cn.ts";

interface DitherBackgroundProps {
	isHovered: boolean;
}

const DitherBackground = React.memo(({ isHovered }: DitherBackgroundProps) => (
	<motion.div
		className={cn(
			"absolute inset-0 transition-all ease-in-out duration-300",
			isHovered ? "opacity-40" : "opacity-20",
		)}
	>
		<Dither
			waveColor={[0.5, 0.5, 0.5]}
			disableAnimation={!isHovered}
			enableMouseInteraction={false}
			mouseRadius={0.1}
			colorNum={1.5}
			waveFrequency={2}
			waveSpeed={0.1}
		/>
	</motion.div>
));

const DitherFallback = () => <div className="absolute inset-0 bg-stone-800" />;

const GalleryItem = React.memo(({ element }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link to={element.link} className="cursor-pointer">
			<motion.div
				className="relative flex flex-col items-center justify-center border-2 border-stone-700 rounded-none overflow-hidden h-[450px] w-[300px] md:w-[400px]"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<Suspense fallback={<DitherFallback />}>
					<DitherBackground isHovered={isHovered} />
				</Suspense>
				<p className="relative text-white z-10">{element.text}</p>
			</motion.div>
		</Link>
	);
});

GalleryItem.displayName = "GalleryItem";

export default GalleryItem;
