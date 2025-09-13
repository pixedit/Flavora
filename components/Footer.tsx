import Link from "next/link";
import {
	FaInstagram,
	FaGithub,
	FaTelegram,
	FaUserCircle,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gradient-to-r from-rose-950 via-neutral-900 to-rose-950 text-rose-50 py-8 rounded-t-3xl">
			<div className="max-w-[1380px] mx-auto px-6 flex flex-col md:flex-row justify-between mb-12 gap-x-8">
				{/* Developer section */}
				<div className="md:basis-1/2 mb-8 md:mb-0">
					<div>
						<h3 className="text-2xl text-white mb-[10px]">Developer</h3>
						<ul className="flex gap-x-4 text-[22px]">
							<li>
								<Link
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
									title="Instagram"
									className="transition-colors duration-300 hover:text-amber-400">
									<FaInstagram />
								</Link>
							</li>
							<li>
								<Link
									href="https://github.com/pixedit"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									title="GitHub"
									className="transition-colors duration-300 hover:text-amber-400">
									<FaGithub />
								</Link>
							</li>
							<li>
								<Link
									href="https://t.me/none_ll0lXll"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Telegram"
									title="Telegram"
									className="transition-colors duration-300 hover:text-amber-400">
									<FaTelegram />
								</Link>
							</li>
							<li>
								<Link
									href="#"
									aria-label="Personal Website"
									title="Personal Website"
									className="transition-colors duration-300 hover:text-amber-400">
									<FaUserCircle />
								</Link>
							</li>
						</ul>
					</div>
					<div className="text-sm text-rose-200">
						<h3 className="text-2xl text-white mt-8">About me</h3>
						<p>
							My name is Milad - a junior web developer passionate about
							creating meaningful digital experiences. Flavora is one of my
							favorite creations, and just the beginning of my journey.
						</p>
					</div>
					<div className="text-sm text-rose-200">
						<h3 className="text-2xl text-white mt-8">Future</h3>
						<p>
							Flavora may provide features such as bookmarks, smart search
							powered by AI, a cleaner UI, and a dedicated About page. This app
							is my playground for experimenting with design, code, and flavor.
							New updates coming soon!
						</p>
					</div>
				</div>

				{/* App description */}
				<div className="md:basis-1/2 text-sm text-rose-200">
					<h3 className="text-white text-2xl mb-4">Description</h3>
					<p className="max-w-md mb-2">
						Flavora helps you discover delicious recipes from around the world.
						Search, explore, and cook with ease.
					</p>
					<p className="max-w-md mb-4">
						This app is a personal project built for practice and learning
						purposes. It is powered by{" "}
						<Link
							href="https://www.themealdb.com"
							target="_blank"
							className="text-white font-semibold underline hover:text-gray-300"
							aria-label="TheMealDB.com">
							TheMealDB
						</Link>{" "}
						API which offers free access to many recipes.
					</p>
					<h3 className="text-[22px] text-white mt-6 mb-2">
						Technologies used
					</h3>
					<ul className="list-disc pl-8">
						<li>Next.js 15</li>
						<li>TypeScript</li>
						<li>Tailwind CSS</li>
						<li>React 19.1.0</li>
						<li>React Icons</li>
						<li>MongoDb</li>
					</ul>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="text-center text-sm text-rose-300">
				© {new Date().getFullYear()} Flavora. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
