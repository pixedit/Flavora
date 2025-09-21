import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema(
	{
		email: {
			type: String,
			unique: [true, "Email already exists"],
			required: [true, "Email is required"],
		},
		username: { type: String, required: [true, "Username is required"] },
		image: { type: String },
		// bookmarks: [  ==> in case we wanted to add bookmarks functionality later
		// 	{
		// 		type: Schema.Types.ObjectId,
		// 		ref: "Meal",
		// 	},
		// ],
	},
	{ timestamps: true }
);

const User = models.User || mongoose.model("User", UserSchema);

export default User;
