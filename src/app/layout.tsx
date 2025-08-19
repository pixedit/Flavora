import type { Metadata } from "next";
import "./globals.css";
import { SearchProvider } from "../../context/SearchContext";
import Footer from "../../components/Footer";

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
				<SearchProvider>
					<div className="flex flex-col min-h-screen">
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
				</SearchProvider>
			</body>
		</html>
	);
}
