import Header from "../../components/Header";
import MealsSection from "../../components/MealsSection";
import ScrollButton from "../../components/ScrollButton";
import SearchResults from "../../components/SearchResults";
import HeaderBackground from "../../components/HeaderBackground";

export default function page() {
	return (
		<main className="app">
			<section className="flex items-center justify-center w-full h-dvh">
				<HeaderBackground />

				<Header />
				<ScrollButton />
			</section>
			<section id="search-results" className="py-12">
				<SearchResults />
			</section>
			<section id="meals" className="py-12">
				<MealsSection />
			</section>
		</main>
	);
}
