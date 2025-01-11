"use client";

import { login } from "@/actions/logInAction";
import { SidebarContext } from "@/context/SidebarContext"; // SidebarContextをインポート
import { loginSchema } from "@/schemas/schema";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState, useContext, useState } from "react";

export function LogInForm() {
	const { isOpen } = useContext(SidebarContext); // Sidebarの状態を取得
	const [showPwd, setShowPwd] = useState(false);
	const [lastResult, action, isPending] = useActionState(login, null);
	const [form, fields] = useForm({
		lastResult,

		onValidate({ formData }) {
			return parseWithZod(formData, { schema: loginSchema });
		},

		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});

	const togglePwd = () => {
		setShowPwd((prev) => !prev);
	};

	return (
		<div
			className={`flex justify-center items-center min-h-screen from-blue-100  transition-all duration-300 ${
				isOpen ? "ml-60" : "ml-16"
			}`}
		>
			<div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
				{/* ソーシャルログイン */}
				<div className="space-y-2">
					<button
						type="button"
						className="btn btn-outline btn-google w-full flex items-center justify-center gap-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4"
						>
							<title>Google Icon</title>
							<path d="M8 0C3.582 0 0 3.582 0 8c0 4.418 3.582 8 8 8 4.418 0 8-3.582 8-8 0-.523-.047-1.033-.138-1.526H8v3.056h4.697a3.926 3.926 0 0 1-1.702 2.574V12h2.742A8.002 8.002 0 0 0 16 8c0-4.418-3.582-8-8-8z" />
						</svg>
						Googleでログイン
					</button>
					<button
						type="button"
						className="btn btn-outline btn-twitter w-full flex items-center justify-center gap-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4"
						>
							<title>Twitter Icon</title>
							<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.142 0-.283-.009-.425A6.696 6.696 0 0 0 16 3.542a6.59 6.59 0 0 1-1.885.516 3.293 3.293 0 0 0 1.444-1.816 6.588 6.588 0 0 1-2.084.797A3.281 3.281 0 0 0 7.88 7.125a9.32 9.32 0 0 1-6.768-3.429 3.283 3.283 0 0 0 1.018 4.382 3.27 3.27 0 0 1-1.487-.409v.041a3.284 3.284 0 0 0 2.633 3.218 3.288 3.288 0 0 1-1.482.057 3.285 3.285 0 0 0 3.067 2.279A6.588 6.588 0 0 1 1 13.557a9.313 9.313 0 0 0 5.026 1.47" />
						</svg>
						Twitterでログイン
					</button>
				</div>

				{/* 区切り線 */}
				<div className="divider">または</div>

				{/* 通常ログインフォーム */}
				<form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
					<div className="space-y-4">
						<div>
							<label className="input input-bordered flex items-center gap-2">
								<input
									type="email"
									key={fields.email.key}
									name={fields.email.name}
									defaultValue={fields.email.initialValue}
									className="grow"
									placeholder="メールアドレス"
								/>
							</label>
							<div className="text-red-500 text-sm">{fields.email.errors}</div>
						</div>
						<div>
							<label className="input input-bordered flex items-center gap-2">
								<input
									type={showPwd ? "text" : "password"}
									key={fields.password.key}
									name={fields.password.name}
									defaultValue={fields.password.initialValue}
									className="grow"
									placeholder="パスワード"
								/>
								<button
									type="button"
									onClick={togglePwd}
									className="text-gray-500 hover:text-gray-700"
								>
									{/* Toggleアイコン */}
									{showPwd ? "👁️" : "🙈"}
								</button>
							</label>
							<div className="text-red-500 text-sm">
								{fields.password.errors}
							</div>
						</div>
					</div>

					{/* ボタン */}
					<button type="submit" className="btn btn-primary w-full mt-4">
						ログイン
					</button>
					{isPending ? <div>ログイン中...</div> : lastResult}
				</form>
			</div>
		</div>
	);
}
