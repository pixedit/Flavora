"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const images = [
	"/header-background/header-bg1.jpg",
	"/header-background/header-bg2.jpg",
	"/header-background/header-bg3.jpg",
	"/header-background/header-bg4.jpg",
	"/header-background/header-bg5.jpg",
	"/header-background/header-bg6.jpg",
];

const HeaderBackground = () => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="absolute inset-0 w-full h-[30%] sm:h-[30%] md:h-[40%] lg:h-full overflow-hidden z-0">
			{images.map((src, index) => (
				<Image
					key={index}
					src={src}
					alt={`Header ${index}`}
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
						index === current ? "opacity-100" : "opacity-0"
					}`}
					fill
					priority
				/>
			))}
		</div>
	);
};

export default HeaderBackground;
