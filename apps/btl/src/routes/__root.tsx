import {
	createRootRoute,
	Link,
	Outlet,
	useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Dither from "../blocks/Backgrounds/Dither/Dither.tsx";

export const Route = createRootRoute({
	component: () => {
		const location = useLocation();
		const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
		const [showBlackScreen, setShowBlackScreen] = useState(false);
		const prevPathname = useRef(location.pathname);
		const isInitialLoad = useRef(true);

		useEffect(() => {
			const handleMouseMove = (e: MouseEvent) => {
				setMousePosition({
					x: e.clientX,
					y: e.clientY,
				});
			};

			window.addEventListener("mousemove", handleMouseMove);
			return () => window.removeEventListener("mousemove", handleMouseMove);
		}, []);

		useEffect(() => {
			if (isInitialLoad.current) {
				isInitialLoad.current = false;
				prevPathname.current = location.pathname;
				return;
			}

			if (prevPathname.current !== location.pathname) {
				setShowBlackScreen(true);

				const timer = setTimeout(() => {
					setShowBlackScreen(false);
				}, 1000);

				prevPathname.current = location.pathname;

				return () => clearTimeout(timer);
			}
		}, [location.pathname]);

		return (
			<motion.div
				className={
					"bg-black relative overflow-y-auto font-[Libertinus Mono] scroll-smooth flex flex-col items-center justify-center"
				}
			>
				<AnimatePresence>
					{showBlackScreen && (
						<motion.div
							className="fixed inset-0 bg-black z-[10001]"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.05, ease: "linear" }}
						/>
					)}
				</AnimatePresence>

				<div
					className="hidden md:block fixed w-56 h-56 pointer-events-none z-[1]"
					style={{
						left: mousePosition.x - 105,
						top: mousePosition.y - 100,
						background:
							"radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, transparent 100%)",
						borderRadius: "50%",
						filter: "blur(64px)",
					}}
				/>
				<img
					alt={"cursor"}
					className="hidden md:block fixed pointer-events-none z-[10000]"
					src={"/init_cursor.svg"}
					style={{
						left: mousePosition.x,
						top: mousePosition.y,
					}}
				/>
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
						mouseRadius={0.3}
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
						"relative h-screen w-screen flex flex-col items-center justify-center z-[100]"
					}
				>
					<div className={"absolute top-2 left-1/2 right-1/2 z-[1]"}>
						<div className={"flex flex-row items-center justify-center"}>
							<Link to={"/"}>bottolo</Link>
							{location.pathname
								.split("/")
								.filter((segment) => segment)
								.map((segment, index, arr) => {
									const path = `/${arr.slice(0, index + 1).join("/")}`;
									return (
										<span key={path} className="flex items-center">
											<span>/</span>
											<Link to={path}>{segment}</Link>
										</span>
									);
								})}
						</div>
					</div>
					<div className="absolute max-h-[87vh] md:max-h-[89vh] bottom-16 w-full overflow-y-auto flex flex-col gap-16 md:gap-32 items-center scrollbar-hide">
						<Outlet />
					</div>
					<footer
						className={"absolute bottom-2 left-1/2 -translate-x-1/2 text-white"}
					>
						mute
					</footer>
				</main>
				<TanStackRouterDevtools />
			</motion.div>
		);
	},
});
