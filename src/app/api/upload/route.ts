import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const config = {
	api: {
		bodyParser: false,
	},
};

export async function POST(request: NextRequest) {
	const formData = await request.formData();
	const formFile = formData.get("image");

	if (!formFile || !(formFile instanceof File)) {
		return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
	}

	const buffer = Buffer.from(await formFile.arrayBuffer());
	const uploadDir = path.join(process.cwd(), "public/uploads");
	await fs.mkdir(uploadDir, { recursive: true });

	const filename = `${Date.now()}-${formFile.name}`;
	const filepath = path.join(uploadDir, filename);
	await fs.writeFile(filepath, buffer);

	const imageUrl = `/uploads/${filename}`;

	// Extract other form fields
	const name = formData.get("name")?.toString() || "";
	const category = formData.get("category")?.toString() || "";
	const instructions = formData.get("instructions")?.toString() || "";
	const ingredient = formData.get("ingredient")?.toString() || "";
	const measure = formData.get("measure")?.toString() || "";
	const owner = formData.get("owner")?.toString() || "";

	return NextResponse.json({
		imageUrl,
		name,
		category,
		instructions,
		ingredient,
		measure,
		owner,
	});
}
