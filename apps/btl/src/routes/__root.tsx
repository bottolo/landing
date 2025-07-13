import {
	createRootRoute,
	Link,
	Outlet,
	useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Dither from "../blocks/Backgrounds/Dither/Dither.tsx";
import { cn } from "../lib/cn.ts";
import { useOptionsStore } from "../store/useOptionsStore.ts";

export const Route = createRootRoute({
	component: () => {
		const location = useLocation();
		const [isMuted, setIsMuted] = useState(false);

		const { view, setView } = useOptionsStore();

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
					"bg-black w-screen h-screen relative overflow-y-auto font-[Libertinus Mono] scroll-smooth flex flex-col items-center justify-center cursor-[url('/init_cursor.svg'),_default]"
				}
			>
				<div
					className={cn(
						"absolute left-0 h-full w-1/6 md:w-1/4 z-0  transition-all duration-[1s]",
						view === "text" ? "" : "invert",
						isMuted ? "opacity-50" : "opacity-100",
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
						view === "text" ? "" : "invert",
						isMuted ? "opacity-50" : "opacity-100",
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
				<header
					className={cn(
						"flex flex-row items-center justify-center mb-auto z-[1]",
					)}
				>
					<Link
						to={"/"}
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
					>
						bottolo
					</Link>
					{location.pathname
						.split("/")
						.filter((segment) => segment)
						.map((segment, index, arr) => {
							const path = `/${arr.slice(0, index + 1).join("/")}`;
							return (
								<span key={path} className="flex items-center">
									<span>/</span>
									<Link
										className={
											"cursor-[url('/init_cursor_hover.svg'),_pointer]"
										}
										to={path}
									>
										{segment}
									</Link>
								</span>
							);
						})}
				</header>
				<main
					className={"flex flex-col items-center justify-center z-[1] gap-16"}
				>
					<Outlet />
				</main>
				<footer className={"flex mt-auto z-[1] gap-2"}>
					<p
						className={
							"hover:bg-white/20 cursor-[url('/init_cursor_hover.svg'),_pointer]"
						}
						onClick={handleMuteToggle}
					>
						audio: {isMuted ? "off" : "on"}
					</p>
					|
					<p
						className={
							"hover:bg-white/20 cursor-[url('/init_cursor_hover.svg'),_pointer]"
						}
						onClick={() => setView(view === "images" ? "text" : "images")}
					>
						mode: {view === "images" ? "images" : "text"}
					</p>
				</footer>
				<TanStackRouterDevtools />
			</motion.div>
		);
	},
});
