"use client";

import useSWR from "swr";
import Image from "next/image";

interface Meal {
	id: string;
	name: string;
	category: string;
	instructions: string;
	ingredient: string;
	measure: string;
	owner: string;
	imageUrl: string;
	createdAt: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MyFlavoraPage() {
	const { data: meals, error } = useSWR<Meal[]>("/api/meals", fetcher);

	if (error) return <p>Failed to load your recipes.</p>;
	if (!meals) return <p>Loading…</p>;

	return (
		<main className="p-[2rem]">
			<h1>My Flavora Recipes</h1>
			<ul className="grid grid-cols-3">
				{meals.map((meal) => (
					<li key={meal.id} className="my-[2rem]">
						<h2>{meal.name}</h2>
						<Image
							src={meal.imageUrl}
							alt={meal.name}
							width={300}
							height={200}
						/>
						<p>
							<strong>Category:</strong> {meal.category}
						</p>
						<p>
							<strong>Ingredients:</strong> {meal.ingredient} ({meal.measure})
						</p>
						<p>
							<strong>Instructions:</strong> {meal.instructions}
						</p>
						<p className="text-[0.8rem] text-[#666]">
							Submitted by {meal.owner} on{" "}
							{new Date(meal.createdAt).toLocaleDateString()}
						</p>
					</li>
				))}
			</ul>
		</main>
	);
}
