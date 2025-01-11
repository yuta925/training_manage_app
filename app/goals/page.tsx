"use client";
import { SidebarContext } from "@/context/SidebarContext"; // SidebarContextをインポート
import { useContext, useState } from "react";

// 型定義
interface Goal {
  id: number;
  name: string;
  target: number; // 目標値
  progress: number; // 現在の進捗
}

export default function GoalSettingPage() {
  const { isOpen } = useContext(SidebarContext); // Sidebarの状態を取得
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoalName, setNewGoalName] = useState<string>("");
  const [newGoalTarget, setNewGoalTarget] = useState<number>(0);

  // 新しい目標を追加
  const handleAddGoal = () => {
    if (newGoalName.trim() === "" || newGoalTarget <= 0) {
      alert("有効な目標名と目標値を入力してください！");
      return;
    }
    const newGoal: Goal = {
      id: goals.length + 1,
      name: newGoalName,
      target: newGoalTarget,
      progress: 0,
    };
    setGoals([...goals, newGoal]);
    setNewGoalName("");
    setNewGoalTarget(0);
  };

  // 進捗を更新
  const handleUpdateProgress = (id: number, newProgress: number) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id
          ? { ...goal, progress: Math.min(newProgress, goal.target) }
          : goal
      )
    );
  };

  return (
    <div
      className={`transition-all duration-300 p-4 ${
        isOpen ? "ml-60" : "ml-16"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">目標設定</h1>

      {/* 新しい目標を追加 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">新しい目標を設定</h2>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            className="border p-2 rounded w-1/2"
            placeholder="目標名 (例: ベンチプレス 100kg)"
            value={newGoalName}
            onChange={(e) => setNewGoalName(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 rounded w-1/4"
            placeholder="目標値"
            value={newGoalTarget}
            onChange={(e) => setNewGoalTarget(Number(e.target.value))}
          />
          <button
            type="button"
            onClick={handleAddGoal}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            追加
          </button>
        </div>
      </div>

      {/* 現在の目標一覧 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">目標一覧</h2>
        {goals.length === 0 ? (
          <p className="text-gray-500">まだ目標が設定されていません。</p>
        ) : (
          <ul className="space-y-4">
            {goals.map((goal) => (
              <li
                key={goal.id}
                className="border p-4 rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-bold">{goal.name}</p>
                  <p className="text-sm text-gray-600">
                    進捗: {goal.progress} / {goal.target}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    className="border p-2 rounded w-24"
                    value={goal.progress}
                    onChange={(e) =>
                      handleUpdateProgress(goal.id, Number(e.target.value))
                    }
                  />
                  <span>
                    達成度: {Math.floor((goal.progress / goal.target) * 100)}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
