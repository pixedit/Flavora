"use client";
const LoadingOverlay = () => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center gap-6 backdrop-blur-sm bg-black/30">
			<div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
			<div className="text-white mt-4 text-lg font-semibold">Loading...</div>
		</div>
	);
};

export default LoadingOverlay;
