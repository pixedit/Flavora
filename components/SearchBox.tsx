"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearch } from "../context/SearchContext";
import { scrollToMeals } from "../lib/constants";

const SearchBox = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { searchMeals } = useSearch();

	const handleSearch = async function (e: React.FormEvent) {
		e.preventDefault();
		if (!searchTerm.trim()) return;
		await searchMeals(searchTerm);
		setSearchTerm("");
		setTimeout(() => {
			scrollToMeals("search-results");
		}, 100);
	};

	return (
		<form
			className="form-section bg-gradient-to-r from-indigo-500 to-teal-400 rounded-3xl flex mt-8 overflow-hidden"
			onSubmit={handleSearch}>
			<div className="flex-grow focus-within:bg-gradient-to-r from-black to-red-800 w-full rounded-l-3xl">
				<input
					type="text"
					placeholder="Search any meal here..."
					className="search-input outline-none py-3 px-6 text-white placeholder:text-white w-full bg-transparent"
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
				/>
			</div>

			<button
				title="Search"
				type="submit"
				className="submit-btn bg-zinc-700 px-6 py-3 rounded-r-3xl text-white hover:bg-zinc-600">
				<BsSearch className="search-icon animate-pulse" />
			</button>
		</form>
	);
};
export default SearchBox;
