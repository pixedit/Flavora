"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { BiError } from "react-icons/bi";

type ErrorMessageProps = {
	message: string;
	suggestion?: string;
	id?: string;
};

const ErrorMessage = ({ message, suggestion }: ErrorMessageProps) => {
	const [isError, setIsError] = useState(true);
	const deleteErrorMessage = () => {
		setIsError(false);
	};

	if (!isError) return null;
	return (
		<div className="relative bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow-lg max-w-xl mx-auto my-8">
			<div>
				<h3 className="font-bold text-lg mb-2 flex items-center">
					<BiError className="text-2xl" /> Oops!
				</h3>
				<p>{message}</p>
				{suggestion && (
					<p className="mt-2 text-sm text-gray-600">{suggestion}</p>
				)}
			</div>
			<button
				type="submit"
				title="Close error message"
				onClick={deleteErrorMessage}
				className="absolute right-5 top-4 text-2xl text-red-500 hover:text-red-700 transition-colors duration-400">
				<IoIosCloseCircle />
			</button>
		</div>
	);
};

export default ErrorMessage;
