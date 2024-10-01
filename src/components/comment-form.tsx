"use client";

import React, { useState, useRef } from "react";
import { createComment } from "@/lib/actions";

const CommentForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		password: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const formRef = useRef<HTMLFormElement>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const data = new FormData();
		data.append("name", formData.name);
		data.append("password", formData.password);
		data.append("message", formData.message);

		await createComment(data); // form data를 액션으로 보냄

		// Reset form data
		if (formRef.current) {
			formRef.current.reset();
		}
		setFormData({
			name: "",
			password: "",
			message: "",
		});
		setLoading(false);
	};

	return (
		<div>
			{loading && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
					<svg
						className="animate-spin h-10 w-10 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
						></path>
					</svg>
				</div>
			)}
			<form ref={formRef} className="mb-6" onSubmit={handleSubmit}>
				<div className="grid grid-cols-2 gap-x-4">
					<div className="relative mb-6">
						<label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
							이름
							<svg
								width="7"
								height="7"
								className="ml-1"
								viewBox="0 0 7 7"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
									fill="#EF4444"
								/>
							</svg>
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal border border-gray-300 rounded-lg rounded-t-lg placeholder-gray-400 focus:outline-none"
							placeholder="이름"
							required
						/>
					</div>
					<div className="relative mb-6">
						<label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
							비밀번호
							<svg
								width="7"
								height="7"
								className="ml-1"
								viewBox="0 0 7 7"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
									fill="#EF4444"
								/>
							</svg>
						</label>
						<input
							type="text"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal border border-gray-300 rounded-lg rounded-t-lg placeholder-gray-400 focus:outline-none"
							placeholder="비밀번호"
							required
						/>
					</div>
				</div>

				<label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
					메시지
				</label>
				<div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-300">
					<textarea
						id="message"
						rows={3}
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="px-0 w-full border-0 focus:ring-0 focus:outline-none"
						placeholder="신랑,신부에게 축하메시지를 남겨주세요."
						required
					></textarea>
				</div>
				<div className="flex justify-end">
					<button
						type="submit"
						className="inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-pink-600 rounded-lg focus:ring-4 focus:ring-pink-200 hover:bg-pink-700"
						disabled={loading}
					>
						글쓰기
					</button>
				</div>
			</form>
		</div>
	);
};

export default CommentForm;
