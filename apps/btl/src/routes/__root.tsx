import {
	createRootRoute,
	Link,
	Outlet,
	useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { motion } from "motion/react";
import { PiDot } from "react-icons/pi";
import { Mute } from "./-components/interactables/mute.tsx";
import { Theme } from "./-components/interactables/theme.tsx";
import { View } from "./-components/interactables/view.tsx";
import { Background } from "./-components/layout/background.tsx";
import { Footer } from "./-components/layout/footer.tsx";
import { Header } from "./-components/layout/header.tsx";
import { Main } from "./-components/layout/main.tsx";

export const Route = createRootRoute({
	component: () => {
		const location = useLocation();

		return (
			<motion.div
				className={
					"bg-black w-screen h-screen relative overflow-y-auto font-[Libertinus Mono] scroll-smooth flex flex-col items-center justify-center cursor-[url('/init_cursor.svg'),_default]"
				}
			>
				<Background />
				<Header>
					<Link
						to={"/"}
						className={"cursor-[url('/init_cursor_hover.svg'),_pointer]"}
					>
						bottolo
					</Link>
					{location.pathname
						.split("/")
						.filter((segment) => segment)
						.map((segment, index, arr) => {
							const path = `/${arr.slice(0, index + 1).join("/")}`;
							return (
								<span key={path} className="flex items-center">
									<span>/</span>
									<Link
										className={
											"cursor-[url('/init_cursor_hover.svg'),_pointer]"
										}
										to={path}
									>
										{segment}
									</Link>
								</span>
							);
						})}
				</Header>

				<Main>
					<Outlet />
				</Main>
				<Footer>
					<Mute />
					<PiDot size={24} className={"mt-1 md:block hidden"} />
					<Theme />
					{(location?.pathname.startsWith("/apps/") ||
						location.pathname.startsWith("/games/")) && (
						<>
							<PiDot size={24} className={"mt-1 md:block hidden"} />
							<View />
						</>
					)}
				</Footer>
				<TanStackRouterDevtools />
			</motion.div>
		);
	},
});
