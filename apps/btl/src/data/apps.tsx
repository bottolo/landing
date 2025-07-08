import { MdWeb } from "react-icons/md";
import type { Content } from "../types/content.ts";

export const APPS: {
	[key: string]: Content;
} = {
	landing: {
		title: "landing",
		link: "/apps/landing",
		logo: <MdWeb className={"fill-white size-48 md:size-64"} />,
		paragraphs: [
			<p>
				my personal landing page: a project which showcases how i approach web
				development both creatively and technically
			</p>,
			<p>
				it is a monorepo developed with <a href={"https://react.dev/"}>react</a>
				, <a href={"https://www.typescriptlang.org/"}>typescript</a>, and{" "}
				<a href={"https://tailwindcss.com/"}>tailwind</a>, built with{" "}
				<a href={"https://turborepo.com/"} target={"_blank"} rel="noopener">
					turborepo
				</a>{" "}
				and deployed on <a href={"https://vercel.com/"}>vercel</a>
			</p>,
			<p>
				the idea behind this tech stack for a landing page comes from the need
				to have a template for landing pages so that i can share my work if
				anyone is interested in it
			</p>,
			<p>
				while the landing page is not a complex application, it serves more as a
				manifesto for my current visual values and how i approach creative
				development
			</p>,
			<p>
				i'm aware that a site like this is not the best example of accessibility
				or that it doesn't adhere to ui/ux standards, but the idea is to express
				how sacrificing some well-known and respected practices can lead to a
				more unique experience
			</p>,
			<p>
				if you want to learn more about unconventional designs, take a look at{" "}
				<a
					href={
						"https://books.google.it/books/about/72_dpi.html?id=ZBh0QgAACAAJ&redir_esc=y"
					}
				>
					this cool book
				</a>{" "}
			</p>,
		],
		images: [
			"/apps/landing/lnd_0.png",
			"/apps/landing/lnd_1.png",
			"/apps/landing/lnd_2.png",
			"/apps/landing/lnd_3.png",
		],
	},
	cccd: {
		title: "cccd",
		link: "/apps/cccd",
		logo: (
			<img
				alt={"cccd"}
				className={"opacity-40 size-48 md:size-64"}
				src={"/heart.svg"}
			/>
		),
		paragraphs: [
			<p>
				a project that i've worked on in the first half of 2025: it's built on
				top of <a href={"https://react.dev/"}>react </a>
				and <a href={"https://www.typescriptlang.org/"}>typescript</a> and it is
				a full-stack application with no database service, deployed on{" "}
				<a href={"https://fly.io/"}>fly.io</a>
			</p>,
			<p>
				it relies on google docs, google sheet and{" "}
				<a href={"https://www.zotero.org/"}>zotero</a>'s api in order to
				retrieve the catalog; <a href={"https://bun.sh/"}>bun</a> is used to
				serve the application and <a href={"https://hono.dev/"}>hono</a> is used
				to route the apis
			</p>,
			<p>
				below the preface as written by samuele anzellotti, the author of the
				project
			</p>,
			<p>
				"born out of a shared library on, climate change in communication cesign
				index is a desk research project on global warming issues related to the
				field of communication design, with a particular focus on book
				publishing
			</p>,
			<p>
				addressed to young and old researchers, designers and academics, cccd is
				a work in progress repository facilitated by samuele anzellotti during
				his ms's research thesis in communication design at the school of
				politecnico in Milan.
			</p>,
			<p>
				climate change, sustainability and regenerative design are huge and
				extremely complex topics, that's why the results we show in the website
				cannot be exhaustive"
			</p>,
		],
		images: [
			"/apps/cccd/cccd_0.png",
			"/apps/cccd/cccd_1.png",
			"/apps/cccd/cccd_2.png",
			"/apps/cccd/cccd_3.png",
		],
	},
	mediation: {
		title: "mediation",
		link: "/apps/mediation",
		logo: (
			<img
				alt={"mediation"}
				className={"fill-white«„ size-48 md:size-64"}
				src={"/mc.svg"}
			/>
		),
		paragraphs: [
			<p>
				funny that i've decided to include this website in my own, but it's
				still built on top of <a href={"https://react.dev/"}>react </a>
				and <a href={"https://www.typescriptlang.org/"}>typescript</a> and it is
				a full-stack application with no database service, deployed on{" "}
				<a href={"https://fly.io/"}>fly.io</a>
			</p>,
			<p>
				a landing page designed for my father! it's very simple, but it
				showcases a design drastically different from the one used here to prove
				that, apart from creative manifestos, standard ui/ux practices are still
				my thing. it's not entirely my work, as{" "}
				<a href={"https://github.com/FrankieBortot"}>frankie</a> designed the
				website
			</p>,
			<p>
				it relies on google calendar apis to fetch events and show my father's
				availability for appointments while giving him some freedom with mega's
				apis to change some of the site's content
			</p>,
		],
		images: [
			"/apps/mediations/mdz_0.png",
			"/apps/mediations/mdz_1.png",
			"/apps/mediations/mdz_2.png",
		],
	},
};
