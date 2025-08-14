export const scrollToMeals = (id: string) => {
	const mealsSection = document.getElementById(id);
	if (mealsSection) {
		mealsSection.scrollIntoView({ behavior: "smooth" });
	}
};
