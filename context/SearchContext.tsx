"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { fetchMealBySearch } from "../lib/api";
import { Meal } from "../types";
import { scrollToMeals } from "@/lib/constants";

type SearchContextType = {
	meals: Meal[];
	hasSearched: boolean;
	isLoading: boolean;
	searchMeals: (term: string) => Promise<void>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
	const [hasSearched, setHasSearched] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [meals, setMeals] = useState<Meal[]>([]);

	const searchMeals = async (term: string) => {
		setIsLoading(true);
		setHasSearched(true);
		const results = await fetchMealBySearch(term);
		setMeals(results);
		setIsLoading(false);
		scrollToMeals("search-results");
	};

	return (
		<SearchContext.Provider
			value={{ meals, searchMeals, hasSearched, isLoading }}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearch = () => {
	const context = useContext(SearchContext);
	if (!context) throw new Error("useSearch must be used within SearchProvider");
	return context;
};
