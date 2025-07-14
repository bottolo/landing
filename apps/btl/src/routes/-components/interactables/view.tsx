import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";
import { cn } from "../../../lib/cn.ts";
import { useSettingsStore } from "../../../stores/useSettingsStore.ts";

export const View = () => {
	const { view, setView } = useSettingsStore();

	return (
		<Listbox value={view} onChange={setView}>
			<ListboxButton className="hover:bg-white/20 cursor-[url('/init_cursor_hover.svg'),_pointer] text-left">
				mode["{view}"]
			</ListboxButton>
			<ListboxOptions anchor={{ to: "top end" }} className="bg-black/80 z-10 ">
				<ListboxOption
					value="text"
					className={cn(
						"flex flex-row-reverse cursor-[url('/init_cursor_hover.svg'),_pointer] hover:bg-white/20",
					)}
				>
					<p className={cn(view === "text" && "animate-pulse")}>["text"]</p>
				</ListboxOption>
				<ListboxOption
					value="images"
					className={cn(
						"flex flex-row-reverse cursor-[url('/init_cursor_hover.svg'),_pointer] hover:bg-white/20",
					)}
				>
					<p className={cn(view === "images" && "animate-pulse")}>["images"]</p>
				</ListboxOption>
			</ListboxOptions>
		</Listbox>
	);
};
