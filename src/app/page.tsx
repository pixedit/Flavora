import Header from "../../components/Header";
import MealsSection from "../../components/MealsSection";
import ScrollButton from "../../components/ScrollButton";
import SearchResults from "../../components/SearchResults";

export default function page() {
	return (
		<div className="app">
			<section className="flex items-center justify-center relative h-dvh">
				<Header />
				<ScrollButton />
			</section>
			<div id="meals">
				<SearchResults />
				<MealsSection />
			</div>
		</div>
	);
}
