import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
	mongoose.set("strictQuery", true);

	// if it's connected, don't connect again
	if (isConnected) {
		console.log("MongoDB is connected");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI as string);
		isConnected = true;
		console.log("connected to MongoDB");
	} catch (error) {
		console.log("MongoDB connection error", error);
	}
}
