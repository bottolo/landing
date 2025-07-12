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
		const [isMuted, setIsMuted] = useState(false);
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

		const handleMuteToggle = () => {
			setIsMuted(!isMuted);
		};

		useEffect(() => {
			if (isMuted) {
				const audioElements = document.querySelectorAll("audio, video");
				audioElements.forEach((element) => {
					(element as HTMLAudioElement | HTMLVideoElement).muted = true;
				});

				if ("audioContext" in window) {
					const audioContext = (window as any).audioContext;
					if (audioContext && audioContext.state !== "closed") {
						audioContext.suspend();
					}
				}

				document.documentElement.style.setProperty("--audio-volume", "0");

				const iframes = document.querySelectorAll("iframe");
				iframes.forEach((iframe) => {
					try {
						const iframeDoc =
							iframe.contentDocument || iframe.contentWindow?.document;
						if (iframeDoc) {
							const iframeAudio = iframeDoc.querySelectorAll("audio, video");
							iframeAudio.forEach((element) => {
								(element as HTMLAudioElement | HTMLVideoElement).muted = true;
							});
						}
					} catch (_e) {
						console.log("Cannot access iframe content for muting");
					}
				});
			} else {
				const audioElements = document.querySelectorAll("audio, video");
				audioElements.forEach((element) => {
					(element as HTMLAudioElement | HTMLVideoElement).muted = false;
				});

				if ("audioContext" in window) {
					const audioContext = (window as any).audioContext;
					if (audioContext && audioContext.state === "suspended") {
						audioContext.resume();
					}
				}

				document.documentElement.style.setProperty("--audio-volume", "1");

				const iframes = document.querySelectorAll("iframe");
				iframes.forEach((iframe) => {
					try {
						const iframeDoc =
							iframe.contentDocument || iframe.contentWindow?.document;
						if (iframeDoc) {
							const iframeAudio = iframeDoc.querySelectorAll("audio, video");
							iframeAudio.forEach((element) => {
								(element as HTMLAudioElement | HTMLVideoElement).muted = false;
							});
						}
					} catch (e) {
						console.log("Cannot access iframe content for unmuting");
					}
				});
			}
		}, [isMuted]);

		const muteNewAudioElements = () => {
			if (isMuted) {
				const observer = new MutationObserver((mutations) => {
					mutations.map((mutation) => {
						mutation.addedNodes.forEach((node) => {
							if (node.nodeType === Node.ELEMENT_NODE) {
								const element = node as Element;

								if (
									element.tagName === "AUDIO" ||
									element.tagName === "VIDEO"
								) {
									(element as HTMLAudioElement | HTMLVideoElement).muted = true;
								}

								const audioElements = element.querySelectorAll("audio, video");
								audioElements.forEach((audioEl) => {
									(audioEl as HTMLAudioElement | HTMLVideoElement).muted = true;
								});
							}
						});
					});
				});

				observer.observe(document.body, {
					childList: true,
					subtree: true,
				});

				return () => observer.disconnect();
			}
		};

		useEffect(() => {
			return muteNewAudioElements();
		}, [isMuted]);

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
						waveAmplitude={0.5}
						waveFrequency={1.5}
						waveSpeed={0.05}
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
						mouseRadius={0.3}
						colorNum={2.5}
						waveAmplitude={0.5}
						waveFrequency={1.5}
						waveSpeed={0.05}
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
					<div className="absolute max-h-[87vh] md:max-h-[89vh] top-16 w-full overflow-y-auto flex flex-col gap-16 md:gap-32 items-center justify-start scrollbar-hide py-8">
						<Outlet />
					</div>
					{/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<p
						onClick={handleMuteToggle}
						className={
							"absolute bottom-4 left-1/2 -translate-x-1/2 text-white hover:text-neutral-400 border-none bg-transparent"
						}
					>
						{isMuted ? "unmute" : "mute"}
					</p>
				</main>
				<TanStackRouterDevtools />
			</motion.div>
		);
	},
});
