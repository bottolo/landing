import {
	motion,
	type PanInfo,
	type ResolvedValues,
	useAnimation,
	useMotionValue,
	useTransform,
} from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";

const DEFAULT_IMGS: string[] = [
	"https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

interface RollingGalleryProps<T = string> {
	autoplay?: boolean;
	pauseOnHover?: boolean;
	items?: T[];
	renderItem?: (item: T, index: number) => React.ReactNode;
	// Legacy props for backwards compatibility
	images?: string[];
}

const RollingGallery = <T = string>({
	autoplay = false,
	pauseOnHover = false,
	items,
	renderItem,
	images,
}: RollingGalleryProps<T>) => {
	const galleryItems = items || (images as T[]) || (DEFAULT_IMGS as T[]);

	const defaultRenderItem = (item: T, index: number): React.ReactNode => {
		if (typeof item === "string") {
			return (
				<img
					src={item}
					alt={`gallery-${index}`}
					className="pointer-events-none h-[120px] w-[300px] rounded-[15px] border-[3px] border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[100px] sm:w-[220px]"
				/>
			);
		}
		return item as React.ReactNode;
	};

	const itemRenderer = renderItem || defaultRenderItem;

	const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(
		typeof window !== "undefined" ? window.innerWidth <= 640 : false,
	);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
	const faceCount: number = galleryItems.length;
	const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
	const radius: number = cylinderWidth / (2 * Math.PI);

	const dragFactor: number = 0.05;
	const rotation = useMotionValue(0);
	const controls = useAnimation();

	const transform = useTransform(
		rotation,
		(val: number) => `rotate3d(0,1,0,${val}deg)`,
	);

	const startInfiniteSpin = (startAngle: number) => {
		controls.start({
			rotateY: [startAngle, startAngle - 360],
			transition: {
				duration: 20,
				ease: "linear",
				repeat: Infinity,
			},
		});
	};

	useEffect(() => {
		if (autoplay) {
			const currentAngle = rotation.get();
			startInfiniteSpin(currentAngle);
		} else {
			controls.stop();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [autoplay]);

	const handleUpdate = (latest: ResolvedValues) => {
		if (typeof latest.rotateY === "number") {
			rotation.set(latest.rotateY);
		}
	};

	const handleDrag = (
		_: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo,
	): void => {
		controls.stop();
		rotation.set(rotation.get() + info.offset.x * dragFactor);
	};

	const handleDragEnd = (
		_: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo,
	): void => {
		const finalAngle = rotation.get() + info.velocity.x * dragFactor;
		rotation.set(finalAngle);
		if (autoplay) {
			startInfiniteSpin(finalAngle);
		}
	};

	const handleMouseEnter = (): void => {
		if (autoplay && pauseOnHover) {
			controls.stop();
		}
	};

	const handleMouseLeave = (): void => {
		if (autoplay && pauseOnHover) {
			const currentAngle = rotation.get();
			startInfiniteSpin(currentAngle);
		}
	};

	return (
		<div className="h-[500px] w-full overflow-hidden">
			<div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
				<motion.div
					drag="x"
					dragElastic={0}
					onDrag={handleDrag}
					onDragEnd={handleDragEnd}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					animate={controls}
					onUpdate={handleUpdate}
					style={{
						transform: transform,
						rotateY: rotation,
						width: cylinderWidth,
						transformStyle: "preserve-3d",
					}}
					className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
				>
					{galleryItems.map((item, i) => (
						<div
							key={i}
							className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
							style={{
								width: `${faceWidth}px`,
								transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
							}}
						>
							{itemRenderer(item, i)}
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default RollingGallery;
