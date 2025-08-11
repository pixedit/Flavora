import Image from "next/image";
import { Meal } from "../types";

interface Props {
	meal: Meal;
}

const MealCard = ({ meal }: Props) => {
	return (
		<div className="text-gray-300 rounded-lg shadow-md overflow-hidden bg-stone-800">
			<div className="relative">
				{meal.strMealThumb && (
					<Image
						src={meal.strMealThumb}
						alt={meal.strMeal}
						className="w-full h-48 object-cover"
						width={500}
						height={500}
						priority
					/>
				)}
				<h3 className="text-[16px] text-black font-semibold absolute top-0 px-2 py-1 rounded-br-2xl bg-amber-500">
					{meal.strCategory}
				</h3>
			</div>
			<div className="p-4 flex items-center">
				<p className="text-sm text-gray-200 mr-auto">
					{meal.strMeal} • {meal.strArea}
				</p>
				<button
					title="See Details"
					type="button"
					className="bg-zinc-600 text-orange-300 text-sm rounded-2xl px-2 hover:bg-green-800">
					Details
				</button>
			</div>
		</div>
	);
};

export default MealCard;
