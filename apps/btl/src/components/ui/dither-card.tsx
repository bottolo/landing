import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import React, { Suspense, useState } from "react";
import Magnet from "../../blocks/Animations/Magnet/Magnet.tsx";
import Dither from "../../blocks/Backgrounds/Dither/Dither.tsx";
import { useIsMobile } from "../../hooks/useIsMobile.ts";
import { cn } from "../../lib/cn.ts";
import type { Content } from "../../types/content.ts";

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

interface DitherCardProps {
	element: Content;
	index: number; // Add index prop
}

const DitherCard = React.memo(({ element, index }: DitherCardProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isTapped, setIsTapped] = useState(false);
	const isMobile = useIsMobile();
	const navigate = useNavigate();

	const handleTouchStart = () => {
		if (isMobile) {
			setIsTapped(true);
		}
	};

	const handleTouchEnd = () => {
		if (isMobile) {
			setIsTapped(false);
		}
	};

	const handleTouchCancel = () => {
		if (isMobile) {
			setIsTapped(false);
		}
	};

	return (
		<Magnet padding={100} disabled={false} magnetStrength={25}>
			<motion.div
				className="flex flex-row items-center justify-between border-2 p-4 border-stone-700 rounded-none overflow-hidden h-[10vh] md:h-[15vh] w-[70vw] md:w-[45vw] cursor-[url('/init_cursor_hover.svg'),_pointer]"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				onTouchCancel={handleTouchCancel}
				onClick={() => navigate({ to: element.link })}
			>
				<Suspense fallback={<DitherFallback />}>
					<DitherBackground isHovered={isHovered} />
				</Suspense>

				<div className="flex-1 flex items-center min-w-0">
					<span
						className={cn(
							"text-left text-xl md:text-4xl flex-shrink-0",
							isHovered
								? "opacity-125 md:opacity-50"
								: "opacity-70 md:opacity-10",
						)}
					>
						{index}
					</span>

					<div
						className={cn(
							"flex-1 relative h-3 md:h-6",
							"border-b-2 md:border-b-4 border-dotted",
							isHovered
								? "opacity-125 md:opacity-50"
								: "opacity-70 md:opacity-10",
						)}
					/>

					<span
						className={cn(
							"text-left text-xl md:text-4xl flex-shrink-0",
							isHovered
								? "opacity-125 md:opacity-50"
								: "opacity-70 md:opacity-10",
						)}
					>
						{element.title}
					</span>
				</div>
			</motion.div>
		</Magnet>
	);
});

DitherCard.displayName = "DitherCard";

export default DitherCard;
