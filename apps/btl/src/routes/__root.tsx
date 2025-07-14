import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";
import {
	createRootRoute,
	Link,
	Outlet,
	useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { motion } from "motion/react";
import React, { useEffect } from "react";
import { PiDot } from "react-icons/pi";
import Dither from "../blocks/Backgrounds/Dither/Dither.tsx";
import { cn } from "../lib/cn.ts";
import { useSettingsStore } from "../stores/useSettingsStore.ts";

export const Route = createRootRoute({
	component: () => {
		const location = useLocation();
		const { view, setView, muted, setMuted, theme, setTheme } =
			useSettingsStore();

		const handleMuteToggle = () => {
			setMuted(!muted);
		};

		useEffect(() => {
			if (muted) {
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
		}, [muted]);

		const muteNewAudioElements = () => {
			if (muted) {
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
		}, [muted]);

		return (
			<motion.div
				className={
					"bg-black w-screen h-screen relative overflow-y-auto font-[Libertinus Mono] scroll-smooth flex flex-col items-center justify-center cursor-[url('/init_cursor.svg'),_default]"
				}
			>
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
				<header
					className={cn(
						"flex flex-row items-center justify-center mb-auto z-[1] mt-1",
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
					className={
						"flex flex-col items-center justify-center z-[1] gap-16 w-full overflow-y-auto md:py-4 py-8"
					}
				>
					<Outlet />
				</main>
				<footer
					className={
						"flex flex-col items-center md:flex-row mt-auto z-[1] mb-1 justify-center w-full"
					}
				>
					<p
						className={
							"hover:bg-white/20 cursor-[url('/init_cursor_hover.svg'),_pointer]"
						}
						onClick={handleMuteToggle}
					>
						audio[{muted ? "off" : "on"}]
					</p>
					<PiDot size={24} className={"mt-1 md:block hidden"} />
					<Listbox value={theme} onChange={setTheme}>
						<ListboxButton className="hover:bg-white/20 cursor-[url('/init_cursor_hover.svg'),_pointer] text-left">
							theme["{theme}"]
						</ListboxButton>
						<ListboxOptions
							anchor={{ to: "top end" }}
							className="bg-black z-10 "
						>
							<ListboxOption
								value="ascension"
								className={({ active, selected }) =>
									cn(
										"cursor-[url('/init_cursor_hover.svg'),_pointer] hover:bg-white/20",
										(selected || active) && "bg-white/20",
									)
								}
							>
								ascension
							</ListboxOption>
							<ListboxOption
								value="limbo"
								className={cn(
									"cursor-[url('/init_cursor_hover.svg'),_pointer] hover:bg-white/20",
								)}
							>
								limbo
							</ListboxOption>
						</ListboxOptions>
					</Listbox>
					{(location?.pathname.startsWith("/apps/") ||
						location.pathname.startsWith("/games/")) && (
						<>
							<PiDot size={24} className={"mt-1 md:block hidden"} />
							<Listbox value={view} onChange={setView}>
								<ListboxButton className="hover:bg-white/20 cursor-[url('/init_cursor_hover.svg'),_pointer] text-left">
									mode["{view}"]
								</ListboxButton>
								<ListboxOptions
									anchor={{ to: "top end" }}
									className="bg-black z-10 "
								>
									<ListboxOption
										value="text"
										className={({ active, selected }) =>
											cn(
												"cursor-[url('/init_cursor_hover.svg'),_pointer] hover:bg-white/20",
												(selected || active) && "bg-white/20",
											)
										}
									>
										text
									</ListboxOption>
									<ListboxOption
										value="images"
										className={cn(
											"cursor-[url('/init_cursor_hover.svg'),_pointer] hover:bg-white/20",
										)}
									>
										images
									</ListboxOption>
								</ListboxOptions>
							</Listbox>
						</>
					)}
				</footer>
				<TanStackRouterDevtools />
			</motion.div>
		);
	},
});
