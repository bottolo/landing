import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface Settings {
	view: "text" | "image";
	theme: "ascension" | "limbo";
	muted: boolean;
}

type SettingsState = {
	view: Settings["view"];
	muted: Settings["muted"];
	theme: Settings["theme"];
	setView: (view: Settings["view"]) => void;
	setTheme: (theme: Settings["theme"]) => void;
	setMuted: (muted: boolean) => void;
};

export const useSettingsStore = create<SettingsState>()(
	immer(
		persist(
			(set) => ({
				view: "text",
				muted: false,
				theme: "ascension",
				setView: (view) =>
					set((state) => {
						state.view = view;
					}),
				setTheme: (theme) =>
					set((state) => {
						state.theme = theme;
					}),
				setMuted: (muted) =>
					set((state) => {
						state.muted = muted;
					}),
			}),
			{
				name: "settings-store",
				version: 1,
				storage: createJSONStorage(() => localStorage),
			},
		),
	),
);
