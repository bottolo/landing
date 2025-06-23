import type { ReactNode } from "react";

/*
 * Manages routes without content.
 */
export type RootNavigationElement = {
	title: string;
	link: string;
	icon: ReactNode;
	disabled?: boolean;
};
