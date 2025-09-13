import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

let clientPromise: Promise<MongoClient>;

// Extend global type to include our custom property
declare global {
	var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Reuse client in development to avoid creating multiple connections
if (process.env.NODE_ENV === "development") {
	if (!global._mongoClientPromise) {
		global._mongoClientPromise = new MongoClient(uri, options).connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	clientPromise = new MongoClient(uri, options).connect();
}

export default clientPromise;
