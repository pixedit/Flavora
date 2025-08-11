export interface Meal {
	idMeal: string;
	strMeal: string;
	strDrinkAlternate?: string | null;
	strCategory?: string;
	strArea?: string;
	strInstructions?: string;
	strMealThumb?: string;
	strTags?: string | null;
	strYoutube?: string;
	strSource?: string | null;
	strImageSource?: string | null;
	strCreativeCommonsConfirmed?: string | null;
	dateModified?: string | null;

	// Ingredients and Measures (up to 20)
	[key: `strIngredient${number}`]: string | null | undefined;
	[key: `strMeasure${number}`]: string | null | undefined;
	[key: string]: any;
}
