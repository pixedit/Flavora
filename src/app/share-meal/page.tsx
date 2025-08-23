"use client";
import Image from "next/image";
import { useShareMeal } from "../../../hooks/useShareMeal";

const ShareMealPage = () => {
	const inputStyle = "w-full p-2 mt-2 rounded-lg outline-none bg-stone-500";

	const {
		formData,
		handleChange,
		handleImageChange,
		handleSubmit,
		preview,
		error,
		fileInputRef,
	} = useShareMeal();

	return (
		<div className="max-w-2xl mx-auto p-8 bg-stone-700 rounded-2xl my-[4rem] text-white">
			<h2 className="text-2xl font-semibold mb-6 text-orange-300">
				Share Your Meal
			</h2>
			<form className="flex flex-col gap-y-[1rem]" onSubmit={handleSubmit}>
				{/* Meal Name */}
				<div>
					<label className="text-stone-200">Meal Name</label>
					<input
						type="text"
						name="name"
						aria-label="name"
						value={formData.name}
						onChange={handleChange}
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
						value={formData.category}
						onChange={handleChange}
						className={inputStyle}
					/>
				</div>

				{/* Instructions */}
				<div>
					<label className="text-stone-200">Instructions</label>
					<textarea
						name="instructions"
						value={formData.instructions}
						onChange={handleChange}
						className={inputStyle}
						rows={4}
						aria-label="instructions"
						required
					/>
				</div>

				{/* Ingredients & Measures */}
				<div>
					<label className="text-stone-200">Ingredients & Measures</label>
					<div className="flex gap-x-4">
						<input
							type="text"
							name="ingredient"
							value={formData.ingredient}
							onChange={handleChange}
							placeholder="Ingredients..."
							className={`${inputStyle} placeholder:text-slate-300 placeholder:font-semibold`}
						/>
						<input
							type="text"
							name="measure"
							value={formData.measure}
							onChange={handleChange}
							placeholder="Measures..."
							className={`${inputStyle} placeholder:text-slate-300 placeholder:font-semibold`}
						/>
					</div>
				</div>

				{/* Owner */}
				<div>
					<label className="text-stone-200">Your name (Optional)</label>
					<input
						type="text"
						name="owner"
						aria-label="owner"
						value={formData.owner}
						onChange={handleChange}
						className={`${inputStyle} placeholder:text-stone-300 placeholder:font-semibold`}
					/>
				</div>

				{/* Image Upload */}
				<div>
					<label className="text-stone-200 block">Upload Image</label>
					<input
						type="file"
						name="image"
						accept="image/*"
						aria-label="image"
						ref={fileInputRef}
						onChange={handleImageChange}
						className="p-2 mt-2 w-1/2 text-white bg-neutral-900 rounded-2xl hover:bg-neutral-800"
					/>
					{preview && (
						<div className="mt-[1rem]">
							<Image src={preview} alt="Preview" width={200} height={200} />
						</div>
					)}
					{error && (
						<p className="text-red-500 text-sm mt-2 animate-pulse">{error}</p>
					)}
				</div>

				<button
					type="submit"
					className={`w-full bg-sky-800 outline-none text-white p-2 rounded-lg hover:bg-sky-700`}>
					Submit Meal
				</button>
			</form>
		</div>
	);
};

export default ShareMealPage;
