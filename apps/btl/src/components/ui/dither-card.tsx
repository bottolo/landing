import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import React, { Suspense, useState } from "react";
import Dither from "../../blocks/Backgrounds/Dither/Dither.tsx";
import { useIsMobile } from "../../hooks/useIsMobile.ts";
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
				src={"/img_7.png"}
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

			{/* Additional overlay for tap feedback */}
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

const DitherCard = React.memo(
	({ element }: { element: RootNavigationElement }) => {
		const [isHovered, setIsHovered] = useState(false);
		const [isTapped, setIsTapped] = useState(false);
		const isMobile = useIsMobile();

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
			<Link
				disabled={element?.disabled}
				to={element.link}
				className={cn(
					element.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
				)}
			>
				<motion.div
					className="relative flex flex-col items-center justify-center border-2 border-stone-700 rounded-none overflow-hidden h-[450px] md:h-[550px] w-[300px] md:w-[400px]"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
					onTouchCancel={handleTouchCancel}
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

					<motion.div className="absolute inset-0 flex items-center justify-center z-10">
						{element.icon}
					</motion.div>

					<motion.div
						className={cn(
							"hidden md:block absolute bottom-0 left-0 right-0 p-1 bg-black/20 text-white text-center",
							isHovered
								? "opacity-100"
								: "opacity-0 transition-opacity duration-1000",
						)}
					>
						<h2 className="text-lg font-bold">{element.title}</h2>
					</motion.div>

					<motion.div
						className={cn(
							"md:hidden absolute bottom-0 left-0 right-0 p-1 text-center transition-colors ease-in-out duration-300",
							isTapped ? "text-white" : "text-white/60",
						)}
						animate={{
							// y: isTapped ? -0.5 : 0,
							opacity: isTapped ? 1 : 0.9,
						}}
						transition={{
							duration: isTapped ? 0.1 : 0.5,
							ease: "easeInOut",
						}}
					>
						<motion.div
							className="absolute inset-0 bg-black/20"
							animate={{
								opacity: isTapped ? 0.6 : 0.3,
							}}
							transition={{
								duration: isTapped ? 0.1 : 0.2,
								ease: "easeInOut",
							}}
						/>
						<h2 className="text-lg font-bold relative z-10">{element.title}</h2>
					</motion.div>
				</motion.div>
			</Link>
		);
	},
);

DitherCard.displayName = "GalleryItem";

export default DitherCard;
