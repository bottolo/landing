export const getImagesByTitle = (
	title: string,
	detailsNavigationElements: { [key: string]: { images?: string[] } },
): string[] => {
	const element = detailsNavigationElements[title];
	return element?.images || [];
};
