"use client";
import { FaCircleArrowDown } from "react-icons/fa6";

export default function ScrollButton() {
	const handleScroll = () => {
		document.getElementById("meals")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<button
			title="Tap to scroll down"
			type="button"
			onClick={handleScroll}
			className="scroll-btn absolute bottom-19 left-1/2 transform -translate-x-1/2 text-3xl bg-stone-500 text-white rounded-full p-2 hover:text-stone-400 transition duration-300">
			<FaCircleArrowDown />
		</button>
	);
}
