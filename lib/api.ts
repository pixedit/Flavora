import { Meal } from "../types";

export const fetchMeals = async (): Promise<Meal[]> => {
	try {
		const res = await fetch(
			"https://www.themealdb.com/api/json/v1/1/search.php?s="
		);
		if (!res.ok) throw new Error("Faled to fetch meals");
		const data = await res.json();
		return data.meals;
	} catch (error) {
		console.error("Error fetching meals:", error);
		return [];
	}
};

export const fetchMealBySearch = async (meal: string) => {
	try {
		const res = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
		);
		if (!res.ok) throw new Error("Failed to search for meal");
		const data = await res.json();
		console.log(data);
		return data.meals || [];
	} catch (error) {
		console.error("Couldn't search for meal:", error);
		return [];
	}
};
