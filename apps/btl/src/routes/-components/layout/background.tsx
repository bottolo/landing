import Dither from "../../../blocks/Backgrounds/Dither/Dither.tsx";
import { cn } from "../../../lib/cn.ts";
import { useSettingsStore } from "../../../stores/useSettingsStore";

export const Background = () => {
	const { muted, theme } = useSettingsStore();

	return (
		<>
			<div
				className={cn(
					"absolute left-0 h-full w-1/6 md:w-1/4 z-0  transition-all duration-[1s]",
					theme === "limbo" ? "invert" : "",
					muted ? "opacity-50" : "opacity-100",
				)}
				style={{
					maskImage:
						"linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
					WebkitMaskImage:
						"linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
				}}
			>
				<Dither
					waveColor={[1, 1, 1]}
					disableAnimation={false}
					enableMouseInteraction={false}
					mouseRadius={0.3}
					colorNum={2.5}
					waveAmplitude={0.5}
					waveFrequency={1.5}
					waveSpeed={0.05}
				/>
			</div>
			<div
				className={cn(
					"absolute right-0 h-full w-1/6 md:w-1/4 z-0 rotate-180 transition-all duration-[1s]",
					theme === "limbo" ? "invert" : "",
					muted ? "opacity-50" : "opacity-100",
				)}
				style={{
					maskImage:
						"linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
					WebkitMaskImage:
						"linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
				}}
			>
				<Dither
					waveColor={[1, 1, 1]}
					disableAnimation={false}
					enableMouseInteraction={false}
					mouseRadius={0.3}
					colorNum={2.5}
					waveAmplitude={0.5}
					waveFrequency={1.5}
					waveSpeed={0.05}
				/>
			</div>
		</>
	);
};
