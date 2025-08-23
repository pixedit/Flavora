import { useRef, useState } from "react";

export const useShareMeal = () => {
	// States and Refs
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		instructions: "",
		ingredient: "",
		measure: "",
		owner: "",
		image: null as File | null,
	});
	const [preview, setPreview] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	// Form functionalities
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	//////////// image size and type
	const MAX_FILE_SIZE = 2 * 1024 * 1024;
	const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		// Validate file type
		if (!ALLOWED_TYPES.includes(file.type)) {
			setError("Only JPEG, PNG, and WEBP formats are allowed.");
			return;
		}

		// Validate file size
		if (file.size > MAX_FILE_SIZE) {
			setError("File size must be less than 2MB.");
			return;
		}

		setError(null);
		setFormData((prev) => ({ ...prev, image: file }));
		// Generate preview
		const reader = new FileReader();
		reader.onloadend = () => {
			setPreview(reader.result as string);
		};
		reader.readAsDataURL(file);
	};

	const resetImagePreview = () => {
		setPreview(null);
		setError(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	// submit
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (error) return null;

		console.log("Form submitted:", formData);
		setFormData({
			name: "",
			category: "",
			instructions: "",
			ingredient: "",
			measure: "",
			owner: "",
			image: null,
		});
		resetImagePreview();

		// backend codes here
	};
	return {
		formData,
		handleChange,
		handleImageChange,
		handleSubmit,
		preview,
		error,
		fileInputRef,
	};
};
