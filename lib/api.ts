import { Meal } from "../types";

export const fetchMeals = async (): Promise<Meal[]> => {
	const res = await fetch(
		"https://www.themealdb.com/api/json/v1/1/search.php?s="
	);
	const data = await res.json();
	return data.meals;
};
