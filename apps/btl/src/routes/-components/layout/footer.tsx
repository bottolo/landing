import type { ReactNode } from "react";

type FooterProps = {
	children: ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
	return (
		<footer
			className={
				"flex flex-col items-center md:flex-row mt-auto z-[1] mb-1 justify-center w-full"
			}
		>
			{children}
		</footer>
	);
};
