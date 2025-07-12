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

const MobileBackground = React.memo(
	({ isHovered, isTapped }: { isHovered: boolean; isTapped: boolean }) => (
		<motion.div
			className={cn(
				"absolute inset-0 transition-all ease-in-out duration-1000",
				"bg-gradient-to-br from-stone-700 to-stone-800",
			)}
			initial={{
				scale: 1,
				opacity: 0.4,
			}}
			animate={{
				scale: isTapped ? 1.02 : 1,
				opacity: isTapped ? 0.8 : isHovered ? 0.6 : 0.4,
			}}
			transition={{
				duration: isTapped ? 0.1 : 0.3,
				ease: "easeOut",
			}}
		>
			<motion.img
				src={"/static_bg.png"}
				alt="Background"
				className="w-full h-full object-cover"
				initial={{
					opacity: 0.4,
					scale: 1,
				}}
				animate={{
					opacity: isTapped ? 0.7 : 0.4,
					scale: isTapped ? 1.01 : 1,
				}}
				transition={{
					duration: isTapped ? 0.1 : 0.3,
					ease: "easeOut",
				}}
			/>

			<motion.div
				className="absolute inset-0 bg-white/10"
				initial={{ opacity: 0 }}
				animate={{
					opacity: isTapped ? 1 : 0,
				}}
				transition={{
					duration: isTapped ? 0.1 : 0.2,
					ease: "easeInOut",
				}}
			/>
		</motion.div>
	),
);

const DitherFallback = () => <div className="absolute inset-0 bg-stone-800" />;

const NoImageFallback = () => <div className="absolute inset-0 bg-stone-900" />;

const DitherCard = React.memo(({ element }: { element: Content }) => {
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
				className="flex flex-row items-center justify-between border-2 p-2 border-stone-700 rounded-none overflow-hidden h-[10vh] md:h-[15vh] w-[70vw] md:w-[45vw]"
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

				<p
					className={cn(
						"text-left text-xl md:text-4xl",
						"mb-2 md:mb-0",
						isHovered ? "opacity-50" : "opacity-10",
					)}
				>
					{element.title}
				</p>
				<div className={cn(isHovered ? "opacity-30" : "opacity-10")}>
					{" "}
					{element.logo}
				</div>
			</motion.div>
		</Magnet>
	);
});

DitherCard.displayName = "DitherCard";

export default DitherCard;
