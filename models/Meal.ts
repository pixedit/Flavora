import mongoose, { Schema, models } from "mongoose";

const MealSchema = new Schema(
	{
		title: { type: String, required: true }, // Meal Name
		category: { type: String },
		instructions: { type: String, required: true },
		ingredients: [
			{
				ingredient: { type: String },
				measure: { type: String },
			},
		],
		owner: { type: String }, // optional
		image: { type: String },
		createdBy: { type: Schema.Types.ObjectId, ref: "User" },
	},
	{ timestamps: true }
);

const Meal = models.Meal || mongoose.model("Meal", MealSchema);
export default Meal;
