import type { ReactNode } from "react";
import { cn } from "../../../lib/cn.ts";

type HeaderProps = {
	children: ReactNode;
};
export const Header = ({ children }: HeaderProps) => (
	<header
		className={cn(
			"flex flex-row items-center justify-center mb-auto z-[1] mt-1",
		)}
	>
		{children}
	</header>
);
