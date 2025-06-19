import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Dither from "../blocks/Backgrounds/Dither/Dither.tsx";

export const Route = createRootRoute({
	component: () => (
		<div className={"bg-black relative overflow-y-auto"}>
			<div
				className="absolute left-0 h-full w-1/6 md:w-1/4 z-0"
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
					mouseRadius={0.1}
					colorNum={2.5}
					waveAmplitude={0.1}
					waveFrequency={2}
					waveSpeed={0.01}
				/>
			</div>
			<div
				className="absolute right-0 h-full w-1/6 md:w-1/4 z-0 rotate-180"
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
					mouseRadius={0.1}
					colorNum={2.5}
					waveAmplitude={0.1}
					waveFrequency={0.1}
					waveSpeed={0.01}
				/>
			</div>
			<main
				className={
					"relative h-screen w-screen flex flex-col items-center justify-center"
				}
			>
				<Outlet />
			</main>
			<TanStackRouterDevtools />
		</div>
	),
});
