"use client";

import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
const Sidebar = () => {
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const router = useRouter();

	return (
		<div
			className={`fixed top-[64px] left-0 h-[calc(100vh-64px)] ${
				isOpen ? "w-60" : "w-16"
			} bg-white text-white border-t-2 shadow-lg transition-all duration-300`}
			style={{ zIndex: 1000 }}
		>
			{/* 開閉ボタン */}
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={`absolute top-4 ${
					isOpen ? "right-[-20px]" : "right-[-20px]"
				} bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 transition-all`}
				style={{ zIndex: 1000 }}
			>
				{isOpen ? "←" : "→"}
			</button>

			{/* サイドバータイトル */}
			<div
				className={`p-4 text-lg font-semibold border-b bg-gray-500 border-gray-700 ${
					isOpen ? "block" : "hidden"
				}`}
			>
				筋トレ管理アプリ
			</div>

			{/* ナビゲーション */}
			<nav className="mt-4">
				<ul className="space-y-4 p-4">
					<li>
						<button
							type="button"
							className={`w-full rounded-3xl flex items-center px-4 py-2 ${
								isOpen ? "bg-gray-500" : "bg-white"
							} hover:bg-gray-700 roundedA`}
							onClick={() => router.push("/")}
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
							{isOpen && <span className="ml-4">ダッシュボード</span>}
						</button>
					</li>
					<li>
						<button
							type="button"
							className={`w-full rounded-3xl flex items-center px-4 py-2 ${
								isOpen ? "bg-gray-500" : "bg-white"
							} hover:bg-gray-700 roundedA`}
							onClick={() => router.push("/calendar")}
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 6.75h7.5m-7.5 4.5h7.5m-7.5 4.5h7.5m-10.5 3h13.5A2.25 2.25 0 0021 16.5V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v11.25A2.25 2.25 0 005.25 19.5z"
								/>
							</svg>
							{isOpen && <span className="ml-4">カレンダー</span>}
						</button>
					</li>
					<li>
						<button
							type="button"
							className={`w-full rounded-3xl flex items-center px-4 py-2 ${
								isOpen ? "bg-gray-500" : "bg-white"
							} hover:bg-gray-700 roundedA`}
							onClick={() => router.push("/goals")}
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.5 8.25V6a3 3 0 00-3-3h-3a3 3 0 00-3 3v2.25m-3 0H21m-9 12.75v-8.25m-3.75 3.75h7.5"
								/>
							</svg>
							{isOpen && <span className="ml-4">目標設定</span>}
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
