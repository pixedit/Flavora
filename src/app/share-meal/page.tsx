"use client";
import addMeal from "@/src/app/actions/addMeal";
import { useState } from "react";
type Ingredient = {
	ingredient: string;
	measure: string;
};

const ShareMealPage = () => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([
		{ ingredient: "", measure: "" },
	]);

	// handle ingredient and measure inputs
	const handleChange = (
		index: number,
		field: keyof Ingredient,
		value: string
	) => {
		const newIngredients = [...ingredients];
		newIngredients[index][field] = value;
		setIngredients(newIngredients);
	};

	// add ingredient button
	const addIngredient = () => {
		setIngredients([...ingredients, { ingredient: "", measure: "" }]);
	};

	// remove ingredient button
	const removeIngredient = (index: number) => {
		setIngredients(ingredients.filter((_, i) => i !== index));
	};

	// form submission
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		formData.append("ingredients", JSON.stringify(ingredients));

		await addMeal(formData);

		console.log("Meal submitted!");
	};

	const inputStyle = "w-full p-2 mt-2 rounded-lg outline-none bg-stone-500";

	return (
		<div className="max-w-2xl mx-auto p-8 bg-stone-700 rounded-2xl my-[4rem] text-white">
			<h2 className="text-2xl font-semibold mb-6 text-orange-300">
				Share Your Meal
			</h2>
			<form className="flex flex-col gap-y-[1rem]" onSubmit={handleSubmit}>
				{" "}
				<div>
					<label className="text-stone-200">Meal Name</label>
					<input
						type="text"
						name="name"
						aria-label="name"
						className={`${inputStyle}`}
					/>
				</div>
				{/* Category */}
				<div>
					<label className="text-stone-200">Category</label>
					<input
						type="text"
						name="category"
						aria-label="category"
						className={inputStyle}
					/>
				</div>
				{/* Instructions */}
				<div>
					<label className="text-stone-200">Instructions</label>
					<textarea
						name="instructions"
						className={inputStyle}
						rows={4}
						aria-label="instructions"
						required
					/>
				</div>
				{/* Ingredients & Measures */}
				{ingredients.map((ing, index) => (
					<div key={index} className="flex gap-2">
						<input
							type="text"
							placeholder="Ingredient (required)"
							value={ing.ingredient}
							onChange={(e) =>
								handleChange(index, "ingredient", e.target.value)
							}
							className="border px-2 py-1 rounded-2xl w-1/2 border-stone-50/30 outline-none"
							required
						/>
						<input
							type="text"
							placeholder="Measure (optional)"
							value={ing.measure}
							onChange={(e) => handleChange(index, "measure", e.target.value)}
							className="border px-2 py-1 rounded-2xl w-1/2 border-stone-50/30 outline-none"
						/>
						<button
							type="button"
							onClick={() => removeIngredient(index)}
							className="text-red-500 px-2 hover:scale-125 hover:font-semibold">
							✕
						</button>
					</div>
				))}
				<button
					type="button"
					onClick={addIngredient}
					className="w-full bg-stone-800 outline-none text-white p-2 rounded-lg hover:bg-slate-900 cursor-pointer">
					+ Add Ingredient
				</button>
				{/* Owner */}
				<div>
					<label className="text-stone-200">Your name (Optional)</label>
					<input
						type="text"
						name="owner"
						aria-label="owner"
						className={`${inputStyle} placeholder:text-stone-300 placeholder:font-semibold`}
					/>
				</div>
				{/* Image */}
				<div>
					<label className="text-stone-200 block">Upload Image</label>
					<input
						type="file"
						name="images"
						accept="image/*"
						aria-label="image"
						className="p-2 mt-2 w-1/2 text-white bg-neutral-900 rounded-2xl hover:bg-neutral-800"
					/>
				</div>
				<button
					type="submit"
					className={`w-full bg-sky-800 outline-none text-white p-2 rounded-lg hover:bg-sky-700 cursor-pointer`}>
					Submit Meal
				</button>
			</form>
		</div>
	);
};

export default ShareMealPage;
