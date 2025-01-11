"use client";
// import type { CsrfToken } from "@/types";
// import axios from "axios";
import { redirect } from "next/navigation";
import React, { useEffect, useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext"; // SidebarContextをインポート

const Home = () => {
	const { isOpen } = useContext(SidebarContext); // Sidebarの状態を取得

	// useEffect(() => {
	//   axios.defaults.withCredentials = true;
	//   const getCsrfToken = async () => {
	//     const { data } = await axios.get<CsrfToken>(
	//       `${process.env.NEXT_PUBLIC_API_URL}/csrf`
	//     );
	//     axios.defaults.headers.common["X-CSRF-Token"] = data.csrf_token;
	//   };
	//   getCsrfToken();
	// }, []);

	return (
		<div
			className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 transition-all duration-300 ${
				isOpen ? "ml-60" : "ml-16"
			}`}
		>
			{/* ヘッダー */}
			<header className="text-center mb-8">
				<h1 className="text-4xl font-bold text-gray-800">筋トレ管理アプリ</h1>
				<p className="text-lg text-gray-600 mt-2">
					あなたのトレーニングを効率的にサポートします
				</p>
			</header>

			{/* メインコンテンツ */}
			<main className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
				{/* セクション1: アプリの説明 */}
				<section className="mb-8">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						アプリの特徴
					</h2>
					<ul className="list-disc list-inside text-gray-600 space-y-2">
						<li>簡単にトレーニングメニューを記録可能</li>
						<li>進捗をグラフで確認できる機能</li>
						<li>トレーニング履歴をカレンダー形式で管理</li>
					</ul>
				</section>

				{/* セクション2: 行動を促す */}
				<section>
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						さあ、始めましょう！
					</h2>
					<p className="text-gray-600 mb-6">
						今すぐ登録して、理想の体を目指しましょう。
					</p>
					<div className="flex justify-center space-x-4">
						<button
							type="button"
							onClick={() => redirect("/login")}
							className="btn btn-primary"
						>
							ログイン
						</button>
						<button
							type="button"
							onClick={() => redirect("/signup")}
							className="btn btn-secondary"
						>
							新規登録
						</button>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
