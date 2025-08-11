import Header from "../../components/Header";
import MealsSection from "../../components/MealsSection";

export default function page() {
	return (
		<div className="app">
			<section className="flex items-center justify-center relative h-dvh">
				<Header />
			</section>
			<MealsSection />
		</div>
	);
}
