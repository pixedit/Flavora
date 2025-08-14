"use client";
import { useSearch } from "../context/SearchContext";
import MealCard from "./MealCard";

const SearchResults = () => {
	const { meals } = useSearch();

	if (meals.length === 0) return null;

	return (
		<section className="p-6" id="search-results">
			<h2 className="text-2xl font-semibold mb-6">Search Results</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{meals.map((meal) => (
					<MealCard key={meal.idMeal} meal={meal} />
				))}
			</div>
		</section>
	);
};

export default SearchResults;
