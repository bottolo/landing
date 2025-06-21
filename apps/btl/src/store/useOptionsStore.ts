import { create } from "zustand";

export interface Options {
	view: "text" | "image";
	muted: boolean;
}

type OptionsState = {
	setView: (view: Options["view"]) => void;
	setMuted: (muted: boolean) => void;
};

export const useOptionsStore = create<OptionsState>((set) => ({
	view: "text",
	muted: false,
	setView: (view) => set(() => ({ view })),
	setMuted: (muted) => set(() => ({ muted })),
}));
