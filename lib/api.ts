import { Meal } from "../types";

export const fetchMeals = async (): Promise<Meal[]> => {
	try {
		const res = await fetch(
			"https://www.themealdb.com/api/json/v1/1/search.php?s="
		);

		if (!res.ok) throw new Error("Failed to fetch meals");

		const data = await res.json();
		return data.meals || [];
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
		return data.meals || [];
	} catch (error) {
		console.error("Couldn't search for meal:", error);
		return [];
	}
};

export const fetchMealDetails = async (id: string): Promise<Meal | null> => {
	try {
		const res = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		);
		if (!res.ok) throw new Error("Failed to get details");
		const data = await res.json();
		return data.meals?.[0] || null;
	} catch (error) {
		console.error("Error getting details", error);
		return null;
	}
};
