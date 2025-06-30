import type { ReactNode } from "react";

export type Content = {
	title: string;
	link: string;
	logo: ReactNode;
	paragraphs: ReactNode[];
	images: string[];
};
