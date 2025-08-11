import { IoSearch } from "react-icons/io5";
export default function SearchBox() {
	return (
		<form className="bg-linear-to-r from-indigo-500 to-teal-400 rounded-3xl flex mt-8">
			<input
				type="text"
				placeholder="Search any meal here..."
				className="outline-none py-3 px-6 mr-auto text-white placeholder:text-white"
			/>
			<button
				title="Search"
				type="submit"
				className="submit-btn bg-zinc-600 px-6 py-3 rounded-3xl text-white hover:bg-sky-800">
				<IoSearch className="search-icon" />
			</button>
		</form>
	);
}
