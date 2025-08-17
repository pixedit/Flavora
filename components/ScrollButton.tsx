"use client";
import { FaCircleArrowDown } from "react-icons/fa6";
import { scrollToMeals } from "../lib/constants";

export default function ScrollButton() {
	return (
		<button
			title="Tap to scroll down"
			type="button"
			onClick={() => scrollToMeals("meals")}
			className="scroll-btn outline-none absolute bottom-19 left-1/2 transform -translate-x-1/2 text-3xl bg-stone-500 text-white rounded-full p-2 hover:text-stone-400 transition duration-300 cursor-pointer">
			<FaCircleArrowDown />
		</button>
	);
}
