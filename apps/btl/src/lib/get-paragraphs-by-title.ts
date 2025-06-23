export const getParagraphsByTitle = (
	title: string,
	detailsNavigationElements: { [key: string]: { paragraphs?: string[] } },
): string[] => {
	const element = detailsNavigationElements[title];
	return element?.paragraphs || [];
};
