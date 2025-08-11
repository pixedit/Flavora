import { fetchMeals } from "../lib/api";
import MealCard from "./MealCard";

export default async function MealsSection() {
	const meals = await fetchMeals();
	const limitedMeals = meals.slice(0, 11); // fetch only 11 meals, not more.

	return (
		<main className="p-6">
			<h2 className="text-2xl font-semibold mb-6">Tasty Picks</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{limitedMeals.map((meal) => (
					<MealCard key={meal.idMeal} meal={meal} />
				))}
			</div>
		</main>
	);
}
