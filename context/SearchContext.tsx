"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { fetchMealBySearch } from "../lib/api";
import { Meal } from "../types";

type SearchContextType = {
	meals: Meal[];
	searchMeals: (term: string) => Promise<void>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
	const [meals, setMeals] = useState<Meal[]>([]);

	const searchMeals = async (term: string) => {
		const results = await fetchMealBySearch(term);
		setMeals(results);
	};

	return (
		<SearchContext.Provider value={{ meals, searchMeals }}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearch = () => {
	const context = useContext(SearchContext);
	if (!context) throw new Error("useSearch must be used within SearchProvider");
	return context;
};
