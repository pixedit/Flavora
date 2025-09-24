"use server";

const addMeal = async (formData) => {
	const name = formData.get("name");
	const category = formData.get("category");
	const owner = formData.get("owner");
	const instructions = formData.get("instructions");

	// Parse ingredients (stringified JSON from client)
	let ingredients = [];
	try {
		ingredients = JSON.parse(formData.get("ingredients") || "[]");
	} catch (err) {
		console.error("Invalid ingredients JSON", err);
	}

	// Images
	const images = formData
		.getAll("images")
		.filter((image) => image && image.name !== "")
		.map((image) => image.name);

	console.log({
		name,
		category,
		ingredients,
		instructions,
		owner,
		images,
	});

	// TODO: Save to your database here
};

export default addMeal;
