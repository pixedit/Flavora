"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchMealDetails } from "../../../../lib/api";
import LoadingOverlay from "../../../../components/LoadingOverlay";
import ErrorMessage from "../../../../components/ErrorMessage";
import { Meal } from "../../../../types";
import Image from "next/image";
import { TbCategory } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { BsBrowserEdge } from "react-icons/bs";
import { FaTags } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const RecipeDetailPage = () => {
	const { id } = useParams();
	const [meal, setMeal] = useState<Meal | null>(null);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (typeof id === "string") {
			const fetchMealDetail = async () => {
				setLoading(true);
				try {
					const data = await fetchMealDetails(id);
					setMeal(data);
				} catch (error) {
					console.error("Failed to fetch meal details:", error);
				} finally {
					setLoading(false);
				}
			};
			fetchMealDetail();
		}
	}, [id]);

	if (loading) return <LoadingOverlay />;
	if (!meal) return <ErrorMessage message="No meal detail found." />;

	const ingredientPairs = Object.entries(meal)
		.filter(([key, value]) => key.startsWith("strIngredient") && value?.trim())
		.map(([key, value]) => {
			const measureKey = `strMeasure${key.replace("strIngredient", "")}`;
			const measure = meal[measureKey as keyof Meal];
			return { ingredient: value, measure };
		});

	return (
		<main className="max-w-[1380px] mx-auto pt-24">
			<section className="flex items-center w-full gap-x-24 px-18 pb-24 border-b-1">
				<div className="w-1/2">
					<div className="flex flex-col items-center">
						<Image
							src={meal.strMealThumb as string}
							alt={meal.strMeal}
							width={200}
							height={200}
							className="rounded-3xl mb-10"
							priority
						/>
						<div className="gap-y-6">
							<dl className="grid grid-cols-2 gap-12 pl-12">
								<div>
									<dt className="text-gray-700">
										<GiMeal />
									</dt>
									<dd className="font-semibold text-amber-800">
										{meal.strMeal}
									</dd>
								</div>
								<div>
									<dt>
										<TbCategory />{" "}
									</dt>
									<dd>{meal.strCategory}</dd>
								</div>
								<div>
									<dt className="text-red-700">
										<FaLocationDot />
									</dt>
									<dd>{meal.strArea}</dd>
								</div>
								{meal.strTags && (
									<div>
										<dt className="text-sky-700">
											<FaTags />
										</dt>
										<dd>{meal.strTags}</dd>
									</div>
								)}
								{meal.strSource && (
									<div className="">
										<dt className="text-slate-600">
											<BsBrowserEdge />
										</dt>
										<dd>
											<Link
												href={meal.strSource}
												className="text-sky-900 border-b-2 hover:text-amber-800 duration-300"
												target="_blank">
												Source Here
											</Link>
										</dd>
									</div>
								)}
							</dl>
						</div>
					</div>
				</div>
				<div className="text-center w-1/2">
					<h2 className="text-2xl mb-4">Ingredients</h2>
					<ul className="list-none">
						{ingredientPairs.map(({ ingredient, measure }, index) => (
							<li
								key={index}
								className="flex gap-8 border-b-1 border-b-gray-400 mb-3">
								<p className="mr-auto">{ingredient}</p>
								<p>{measure && `${measure}`}</p>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="text-center px-24 py-12">
				<h3 className="text-2xl font-semibold mb-6">Instruction</h3>
				<p className="text-gray-700">{meal.strInstructions}</p>
			</section>
			{meal.strYoutube && (
				<section className="max-w-[700px] rounded-4xl mx-auto text-center py-16">
					<div className="bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg shadow-rose-200/50 py-4 px-8">
						<h3 className="flex items-center justify-center gap-x-[7px] text-2xl mb-[1.5rem]">
							Watch <span className="text-rose-900">{meal.strMeal}</span> on
							YouTube <FaYoutube className="text-[30px] text-red-700 mt-1" />
						</h3>
						<Link
							href={meal.strYoutube as string}
							target="_blank"
							rel="noopener noreferrer"
							className="animate-pulse font-semibold text-rose-900 hover:text-[17px] hover:text-red-950 hover:border-b duration-400">
							Take me to YouTube video
						</Link>
					</div>
				</section>
			)}
		</main>
	);
};

export default RecipeDetailPage;
