import type { ReactNode } from "react";

type MainProps = {
	children: ReactNode;
};
export const Main = ({ children }: MainProps) => {
	return (
		<main
			className={
				"flex flex-col items-center justify-center z-[1] gap-16 w-full overflow-y-auto md:py-4 py-8"
			}
		>
			{children}
		</main>
	);
};
