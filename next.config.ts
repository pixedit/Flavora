/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.themealdb.com",
				pathname: "/**", // allow thumbnails from TheMealDB
			},
		],
	},
};

module.exports = nextConfig;
