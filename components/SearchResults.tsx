"use client";
import { useSearch } from "../context/SearchContext";
import ErrorMessage from "./ErrorMessage";
import LoadingOverlay from "./LoadingOverlay";
import MealCard from "./MealCard";

const SearchResults = () => {
	const { meals, hasSearched, isLoading } = useSearch();

	if (!hasSearched) return null; // no search => nothing

	if (isLoading) {
		return <LoadingOverlay />;
	}

	// invalid search => ErorrMessage
	if (meals.length === 0) {
		return (
			<ErrorMessage
				message="No meals found for your search"
				suggestion="Try searching for something like 'chicken', 'pasta', 'salad', or other."
				id="search-results"
			/>
		);
	}

	return (
		<section
			className="p-6 mb-[3rem] pb-10 border-b-2 border-stone-600"
			id="search-results">
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
