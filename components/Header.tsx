import { GiMeal } from "react-icons/gi";
import SearchBox from "./SearchBox";
export default function Header() {
	return (
		<header className="absolute right-[10rem]">
			<div className="bg-black/45 rounded-2xl w-full px-12 py-6 text-white">
				<div>
					<h1 className="font-semibold text-3xl mb-2">
						Welcome to <span className="text-amber-600">Flavora</span>
					</h1>
					<h3 className="ml-[-2rem] flex items-center gap-x-1.5 mt-3">
						Your Recipe Finder{" "}
						<span className="text-cyan-700 animate-bounce text-[20px]">
							<GiMeal />
						</span>
					</h3>
					<p className="ml-[2rem] font-semibold text-cyan-400">
						Discover new Recipes instantly from around the World
					</p>
				</div>
				<SearchBox />
			</div>
		</header>
	);
}
