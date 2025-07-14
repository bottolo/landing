import { useEffect } from "react";
import { useSettingsStore } from "../../../stores/useSettingsStore.ts";

export const Mute = () => {
	const { muted, setMuted } = useSettingsStore();

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

							if (element.tagName === "AUDIO" || element.tagName === "VIDEO") {
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
		<p
			className={
				"hover:bg-white/20 cursor-[url('/init_cursor_hover.svg'),_pointer]"
			}
			onClick={handleMuteToggle}
		>
			audio[{muted ? "off" : "on"}]
		</p>
	);
};
