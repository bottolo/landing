import {
	createRootRoute,
	Link,
	Outlet,
	useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { motion } from "motion/react";
import Dither from "../blocks/Backgrounds/Dither/Dither.tsx";
import { useOptionsStore } from "../store/useOptionsStore.ts";

export const Route = createRootRoute({
	component: () => {
		const { view, setView } = useOptionsStore();
		const location = useLocation();
		return (
			<motion.div
				className={
					"bg-black relative overflow-y-auto font-[Spectral] scroll-smooth"
				}
			>
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
				<header className={"absolute top-2 left-1/2 right-1/2 z-[1000]"}>
					<div className={"flex flex-col items-center justify-center"}>
						<div className={"flex flex-row items-center justify-center"}>
							<Link to={"/"}>bottolo</Link>
							{location.pathname
								.split("/")
								.filter((segment) => segment)
								.map((segment, index, arr) => {
									const path = `/${arr.slice(0, index + 1).join("/")}`;
									return (
										<span key={path} className="flex items-center">
											<span className="ml-1">/</span>
											<Link to={path} className="mx-1">
												{segment}
											</Link>
										</span>
									);
								})}
						</div>
						mute
						<p
							className="cursor-pointer"
							onClick={() => setView(view === "text" ? "images" : "text")}
						>
							{view === "text" ? "images" : "text"}
						</p>
					</div>
				</header>
				<main
					className={
						"relative h-screen w-screen flex flex-col items-center justify-center"
					}
				>
					<Outlet />
				</main>
				<TanStackRouterDevtools />
			</motion.div>
		);
	},
});
