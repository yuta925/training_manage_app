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
      <h1 className="mb-4 font-bold text-2xl">筋トレカレンダー</h1>
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-80 rounded bg-white p-6 shadow-lg">
        <h2 className="mb-4 font-semibold text-xl">
          記録登録: {date.toDateString()}
        </h2>
        <form>
          <label className="mb-2 block">
            器具名:
            <select className="block w-full rounded border p-2">
              <option value="bench_press">ベンチプレス</option>
              <option value="dumbbell">ダンベル</option>
              <option value="squat_rack">スクワットラック</option>
            </select>
          </label>
          <label className="mb-2 block">
            重量 (kg):
            <input
              type="number"
              className="block w-full rounded border p-2"
              placeholder="重量を入力"
            />
          </label>
          <label className="mb-2 block">
            回数 (rep):
            <input
              type="number"
              className="block w-full rounded border p-2"
              placeholder="回数を入力"
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
          >
            保存
          </button>
        </form>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 block text-center text-red-500 underline"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
}
