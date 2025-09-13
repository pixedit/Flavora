import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const client = await clientPromise;
		const db = client.db("flavora");
		const mealsCollection = db.collection("meals");

		const meal = {
			...body,
			createdAt: new Date(),
		};

		const result = await mealsCollection.insertOne(meal);
		return NextResponse.json(
			{ message: "Meal added!", mealId: result.insertedId },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Error adding meal:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db("flavora");
		const mealsCollection = db.collection("meals");

		const meals = await mealsCollection.find({}).toArray();
		return NextResponse.json(meals);
	} catch (error) {
		console.error("Error fetching meals:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
