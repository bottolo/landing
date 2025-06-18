import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Dither from "../blocks/Backgrounds/Dither/Dither.tsx";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className={"absolute top-0 left-0 h-full w-full z-0 opacity-80"}>
				<Dither
					waveColor={[0.1, 0.1, 0.1]}
					disableAnimation={false}
					enableMouseInteraction={true}
					mouseRadius={0.1}
					colorNum={2.3}
					waveAmplitude={0.1}
					waveFrequency={2}
					waveSpeed={0.05}
				/>
			</div>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
