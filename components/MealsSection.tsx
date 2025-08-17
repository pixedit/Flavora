"use client";
import { useEffect, useState } from "react";
import { fetchMeals } from "../lib/api";
import MealCard from "./MealCard";
import { Meal } from "../types";

export default function MealsSection() {
	const [meals, setMeals] = useState<Meal[]>([]);
	const [error, setError] = useState(false);
	const limitedMeals = meals.slice(0, 11);
	useEffect(() => {
		fetchMeals()
			.then(setMeals)
			.catch(() => setError(true));
	}, []);

	if (error) return <p>Could not fetch meals. Check your connection.</p>;
	if (!meals.length) return <p>Loading...</p>;

	return (
		<main className="p-6" id="meals">
			<h2 className="text-2xl font-semibold mb-6">Tasty Picks</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{limitedMeals.map((meal) => (
					<MealCard key={meal.idMeal} meal={meal} />
				))}
			</div>
		</main>
	);
}
