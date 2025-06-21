import type { JSX } from "react";
import { useCallback, useEffect, useMemo, useRef } from "react";

class Pixel {
	width: number;
	height: number;
	ctx: CanvasRenderingContext2D;
	x: number;
	y: number;
	color: string;
	speed: number;
	size: number;
	sizeStep: number;
	minSize: number;
	maxSizeInteger: number;
	maxSize: number;
	delay: number;
	counter: number;
	counterStep: number;
	isIdle: boolean;
	isReverse: boolean;
	isShimmer: boolean;

	constructor(
		canvas: HTMLCanvasElement,
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		color: string,
		speed: number,
		delay: number,
	) {
		this.width = canvas.width;
		this.height = canvas.height;
		this.ctx = context;
		this.x = x;
		this.y = y;
		this.color = color;
		this.speed = this.getRandomValue(0.1, 0.9) * speed;
		this.size = 0;
		this.sizeStep = Math.random() * 0.4;
		this.minSize = 0.5;
		this.maxSizeInteger = 2;
		this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
		this.delay = delay;
		this.counter = 0;
		this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
		this.isIdle = false;
		this.isReverse = false;
		this.isShimmer = false;
	}

	getRandomValue(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	draw() {
		const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(
			this.x + centerOffset,
			this.y + centerOffset,
			this.size,
			this.size,
		);
	}

	appear() {
		this.isIdle = false;
		if (this.counter <= this.delay) {
			this.counter += this.counterStep;
			return;
		}
		if (this.size >= this.maxSize) {
			this.isShimmer = true;
		}
		if (this.isShimmer) {
			this.shimmer();
		} else {
			this.size += this.sizeStep;
		}
		this.draw();
	}

	disappear() {
		this.isShimmer = false;
		this.counter = 0;
		if (this.size <= 0) {
			this.isIdle = true;
			return;
		} else {
			this.size -= 0.1;
		}
		this.draw();
	}

	shimmer() {
		if (this.size >= this.maxSize) {
			this.isReverse = true;
		} else if (this.size <= this.minSize) {
			this.isReverse = false;
		}
		if (this.isReverse) {
			this.size -= this.speed;
		} else {
			this.size += this.speed;
		}
	}
}

function getEffectiveSpeed(value: number, reducedMotion: boolean) {
	const min = 0;
	const max = 100;
	const throttle = 0.001;

	if (value <= min || reducedMotion) {
		return min;
	} else if (value >= max) {
		return max * throttle;
	} else {
		return value * throttle;
	}
}

const VARIANTS = {
	default: {
		activeColor: null,
		gap: 5,
		speed: 35,
		colors: "#f8fafc,#f1f5f9,#cbd5e1",
		noFocus: false,
	},
	blue: {
		activeColor: "#e0f2fe",
		gap: 10,
		speed: 25,
		colors: "#e0f2fe,#7dd3fc,#0ea5e9",
		noFocus: false,
	},
	yellow: {
		activeColor: "#fef08a",
		gap: 3,
		speed: 20,
		colors: "#fef08a,#fde047,#eab308",
		noFocus: false,
	},
	pink: {
		activeColor: "#fecdd3",
		gap: 6,
		speed: 80,
		colors: "#fecdd3,#fda4af,#e11d48",
		noFocus: true,
	},
};

interface PixelCardProps {
	variant?: "default" | "blue" | "yellow" | "pink";
	gap?: number;
	speed?: number;
	colors?: string;
	noFocus?: boolean;
	className?: string;
	children: React.ReactNode;
}

interface VariantConfig {
	activeColor: string | null;
	gap: number;
	speed: number;
	colors: string;
	noFocus: boolean;
}

export default function PixelCard({
	variant = "default",
	gap,
	speed,
	colors,
	noFocus,
	className = "",
	children,
}: PixelCardProps): JSX.Element {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const pixelsRef = useRef<Pixel[]>([]);
	const animationRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
		null,
	);
	const timePreviousRef = useRef(performance.now());
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

	const reducedMotion = useRef(
		window.matchMedia("(prefers-reduced-motion: reduce)").matches,
	).current;

	const variantCfg: VariantConfig = VARIANTS[variant] || VARIANTS.default;
	const finalGap = gap ?? variantCfg.gap;
	const finalSpeed = speed ?? variantCfg.speed;
	const finalColors = colors ?? variantCfg.colors;
	const finalNoFocus = noFocus ?? variantCfg.noFocus;

	const colorsArray = useMemo(() => finalColors.split(","), []);

	const initPixels = useCallback(() => {
		if (!containerRef.current || !canvasRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const width = Math.floor(rect.width);
		const height = Math.floor(rect.height);

		const dpr = Math.min(window.devicePixelRatio, 2);
		const scaledWidth = Math.floor(width * dpr);
		const scaledHeight = Math.floor(height * dpr);

		canvasRef.current.width = scaledWidth;
		canvasRef.current.height = scaledHeight;
		canvasRef.current.style.width = `${width}px`;
		canvasRef.current.style.height = `${height}px`;

		const ctx = canvasRef.current.getContext("2d");
		if (!ctx) return;

		ctxRef.current = ctx;

		ctx.scale(dpr, dpr);

		// Optimize canvas context settings
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = "low";

		const pxs: Pixel[] = [];
		const gapInt = parseInt(finalGap.toString(), 10);

		for (let x = 0; x < width; x += gapInt) {
			for (let y = 0; y < height; y += gapInt) {
				const color =
					colorsArray[Math.floor(Math.random() * colorsArray.length)];
				const dx = x - width / 2;
				const dy = y - height / 2;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const delay = reducedMotion ? 0 : distance;

				pxs.push(
					new Pixel(
						canvasRef.current,
						ctx,
						x,
						y,
						color,
						getEffectiveSpeed(finalSpeed, reducedMotion),
						delay,
					),
				);
			}
		}
		pixelsRef.current = pxs;
	}, [colorsArray, reducedMotion]);

	const doAnimate = useCallback((fnName: keyof Pixel) => {
		animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
		const timeNow = performance.now();
		const timePassed = timeNow - timePreviousRef.current;
		const timeInterval = 1000 / 60;

		if (timePassed < timeInterval) return;
		timePreviousRef.current = timeNow - (timePassed % timeInterval);

		const ctx = ctxRef.current;
		const canvas = canvasRef.current;
		if (!ctx || !canvas) return;

		// Single clear operation for entire canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		let allIdle = true;
		const pixels = pixelsRef.current;

		for (let i = 0; i < pixels.length; i++) {
			const pixel = pixels[i];
			// @ts-ignore
			pixel[fnName]();
			if (!pixel.isIdle) {
				allIdle = false;
			}
		}

		if (allIdle && animationRef.current) {
			cancelAnimationFrame(animationRef.current);
			animationRef.current = null;
		}
	}, []);

	const handleAnimation = useCallback(
		(name: keyof Pixel) => {
			if (animationRef.current !== null) {
				cancelAnimationFrame(animationRef.current);
			}
			animationRef.current = requestAnimationFrame(() => doAnimate(name));
		},
		[doAnimate],
	);

	const onMouseEnter = useCallback(
		() => handleAnimation("appear"),
		[handleAnimation],
	);
	const onMouseLeave = useCallback(
		() => handleAnimation("disappear"),
		[handleAnimation],
	);

	const onFocus = useCallback<React.FocusEventHandler<HTMLDivElement>>(
		(e) => {
			if (e.currentTarget.contains(e.relatedTarget)) return;
			handleAnimation("appear");
		},
		[handleAnimation],
	);

	const onBlur = useCallback<React.FocusEventHandler<HTMLDivElement>>(
		(e) => {
			if (e.currentTarget.contains(e.relatedTarget)) return;
			handleAnimation("disappear");
		},
		[handleAnimation],
	);

	// Debounced resize handler to prevent excessive re-initialization
	const resizeTimeoutRef = useRef<NodeJS.Timeout>();
	const handleResize = useCallback(() => {
		if (resizeTimeoutRef.current) {
			clearTimeout(resizeTimeoutRef.current);
		}
		resizeTimeoutRef.current = setTimeout(initPixels, 150);
	}, [initPixels]);

	useEffect(() => {
		initPixels();

		const observer = new ResizeObserver(handleResize);
		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			observer.disconnect();
			if (animationRef.current !== null) {
				cancelAnimationFrame(animationRef.current);
			}
			if (resizeTimeoutRef.current) {
				clearTimeout(resizeTimeoutRef.current);
			}
		};
	}, [initPixels, handleResize]);

	return (
		<div
			ref={containerRef}
			className={`h-[300px] w-[500px] relative overflow-hidden grid place-items-center aspect-[4/5] border border-[#27272a] rounded-[25px] isolate transition-colors duration-200 ease-[cubic-bezier(0.5,1,0.89,1)] select-none ${className}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onFocus={finalNoFocus ? undefined : onFocus}
			onBlur={finalNoFocus ? undefined : onBlur}
			tabIndex={finalNoFocus ? -1 : 0}
		>
			<canvas className="w-full h-full block" ref={canvasRef} />
			{children}
		</div>
	);
}
