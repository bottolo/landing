import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import React, { Suspense, useState } from "react";
import Dither from "../../blocks/Backgrounds/Dither/Dither.tsx";
import { cn } from "../../lib/cn.ts";
import type { RootNavigationElement } from "../../types/root-navigation-element.ts";

interface DitherBackgroundProps {
	isHovered: boolean;
}

const DitherBackground = React.memo(({ isHovered }: DitherBackgroundProps) => (
	<motion.div
		className={cn(
			"absolute inset-0 transition-all ease-in-out duration-1000",
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

const DitherCard = React.memo(
	({ element }: { element: RootNavigationElement }) => {
		const [isHovered, setIsHovered] = useState(false);

		return (
			<Link
				disabled={element?.disabled}
				to={element.link}
				className={cn(
					element.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
				)}
			>
				<motion.div
					className="relative flex flex-col items-center justify-center border-2 border-stone-700 rounded-none overflow-hidden h-[450px] w-[300px] md:w-[400px]"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<Suspense fallback={<DitherFallback />}>
						<DitherBackground isHovered={isHovered} />
					</Suspense>
					<div className="absolute inset-0 flex items-center justify-center z-10">
						{element.icon}
					</div>
					<div
						className={cn(
							"absolute bottom-0 left-0 right-0 p-1 bg-black/20 text-white text-center",
							isHovered
								? "opacity-100"
								: "opacity-0 transition-opacity duration-1000",
						)}
					>
						<h2 className="text-lg font-bold">{element.title}</h2>
					</div>
				</motion.div>
			</Link>
		);
	},
);

DitherCard.displayName = "GalleryItem";

export default DitherCard;
