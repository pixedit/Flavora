import type { Metadata } from "next";
import "./globals.css";
import { SearchProvider } from "../../context/SearchContext";

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
			<body>
				<SearchProvider>{children}</SearchProvider>
			</body>
		</html>
	);
}
