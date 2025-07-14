import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";
import { cn } from "../../../lib/cn.ts";
import { useSettingsStore } from "../../../stores/useSettingsStore.ts";

export const Theme = () => {
	const { theme, setTheme } = useSettingsStore();

	return (
		<Listbox value={theme} onChange={setTheme}>
			<ListboxButton className="hover:bg-white/20 cursor-[url('/init_cursor_hover.svg'),_pointer] text-left">
				theme["{theme}"]
			</ListboxButton>
			<ListboxOptions anchor={{ to: "top end" }} className="bg-black z-10">
				<ListboxOption
					value="ascension"
					className={cn(
						"flex flex-row-reverse cursor-[url('/init_cursor_hover.svg'),_pointer] hover:bg-white/20",
					)}
				>
					<p className={cn(theme === "ascension" && "animate-pulse")}>
						["ascension"]
					</p>
				</ListboxOption>
				<ListboxOption
					value="limbo"
					className={cn(
						"flex flex-row-reverse cursor-[url('/init_cursor_hover.svg'),_pointer] hover:bg-white/20",
					)}
				>
					<p className={cn(theme === "limbo" && "animate-pulse")}>["limbo"]</p>
				</ListboxOption>
			</ListboxOptions>
		</Listbox>
	);
};
