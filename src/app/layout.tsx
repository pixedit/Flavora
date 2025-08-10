import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Flavora",
	description: "Find new recipes instantly from around the world",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
