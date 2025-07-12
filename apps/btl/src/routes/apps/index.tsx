import { createFileRoute } from "@tanstack/react-router";
import DitherCard from "../../components/ui/dither-card.tsx";
import { APPS } from "../../data/apps.tsx";

export const Route = createFileRoute("/apps/")({
	component: RouteComponent,
});

function RouteComponent() {
	return Object.values(APPS).map((app, index) => (
		<DitherCard index={index} key={app.title} element={app} />
	));
}
