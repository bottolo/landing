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
		<div>
			<div className={cn("flex flex-row ")}>
				<p
					className={cn(
						"text-md md:text-2xl transition-opacity ease-in-out duration-500",
						isHovered ? "opacity-100" : "opacity-50",
					)}
				>
					/{element.title}
				</p>
			</div>
			<motion.div
				className="relative flex flex-col items-center justify-center border-2 border-stone-700 rounded-none overflow-hidden h-[30vh] md:h-[35vh] w-[80vw] md:w-[45vw]"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				onTouchCancel={handleTouchCancel}
				onClick={() => navigate({ to: element.link })}
			>
				{!isMobile ? (
					<Suspense fallback={<DitherFallback />}>
						<DitherBackground isHovered={isHovered} />
					</Suspense>
				) : (
					<Suspense fallback={<NoImageFallback />}>
						<MobileBackground isHovered={isHovered} isTapped={isTapped} />
					</Suspense>
				)}

				<motion.div
					className={cn(
						"transition-opacity ease-in-out duration-500 absolute inset-0 flex items-center justify-center z-10 opacity-10 scale-75 md:scale-100",
						isHovered && "opacity-30",
					)}
				>
					<Magnet padding={150} disabled={false} magnetStrength={25}>
						{element.logo}
					</Magnet>
				</motion.div>
			</motion.div>
		</div>
	);
});

DitherCard.displayName = "DitherCard";

export default DitherCard;
