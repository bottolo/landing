import type { RootNavigationElement } from "./root-navigation-element.ts";

/*
 * Manages routes with content.
 */
export type DetailsNavigationElement = RootNavigationElement & {
	paragraphs?: string[];
	images?: string[];
};
