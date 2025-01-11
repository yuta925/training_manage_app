"use client";

import { useContext, useState } from "react";
import Calendar from "react-calendar"; // npm install react-calendar
import "react-calendar/dist/Calendar.css";
import { SidebarContext } from "@/context/SidebarContext"; // SidebarContextをインポート

// 型定義
interface TrainingModalProps {
	date: Date;
	onClose: () => void;
}

export default function CalendarPage() {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [isModalOpen, setModalOpen] = useState<boolean>(false);
	const { isOpen } = useContext(SidebarContext); // Sidebarの状態を取得

	const handleDateClick = (date: Date) => {
		setSelectedDate(date);
		setModalOpen(true);
	};

	return (
		<div
			className={`transition-all duration-300 ${
				isOpen ? "ml-60" : "ml-16"
			} p-4`} // Sidebarの幅に応じて調整
		>
			<h1 className="text-2xl font-bold mb-4">筋トレカレンダー</h1>
			<Calendar onClickDay={handleDateClick} className="shadow-md" />
			{isModalOpen && (
				<TrainingModal
					date={selectedDate}
					onClose={() => setModalOpen(false)}
				/>
			)}
		</div>
	);
}

function TrainingModal({ date, onClose }: TrainingModalProps) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-6 rounded shadow-lg w-80">
				<h2 className="text-xl font-semibold mb-4">
					記録登録: {date.toDateString()}
				</h2>
				<form>
					<label className="block mb-2">
						器具名:
						<select className="block w-full border p-2 rounded">
							<option value="bench_press">ベンチプレス</option>
							<option value="dumbbell">ダンベル</option>
							<option value="squat_rack">スクワットラック</option>
						</select>
					</label>
					<label className="block mb-2">
						重量 (kg):
						<input
							type="number"
							className="block w-full border p-2 rounded"
							placeholder="重量を入力"
						/>
					</label>
					<label className="block mb-2">
						回数 (rep):
						<input
							type="number"
							className="block w-full border p-2 rounded"
							placeholder="回数を入力"
						/>
					</label>
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
					>
						保存
					</button>
				</form>
				<button
					type="button"
					onClick={onClose}
					className="mt-4 text-red-500 underline block text-center"
				>
					キャンセル
				</button>
			</div>
		</div>
	);
}
