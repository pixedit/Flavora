/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: {
			bodySizeLimit: "5mb",
		},
	},

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
