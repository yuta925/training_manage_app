"use client";
import { sideBarAtom } from "@/jotai/atom";
import { useAtom } from "jotai";
import { useState } from "react";

// 型定義
interface Goal {
  id: number;
  name: string;
  target: number; // 目標値
  progress: number; // 現在の進捗
}

export default function GoalSettingPage() {
  const [isOpen] = useAtom(sideBarAtom);
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
          : goal,
      ),
    );
  };

  return (
    <div
      className={`p-4 transition-all duration-300 ${
        isOpen ? "ml-60" : "ml-16"
      }`}
    >
      <h1 className="mb-4 font-bold text-2xl">目標設定</h1>

      {/* 新しい目標を追加 */}
      <div className="mb-6">
        <h2 className="mb-2 font-semibold text-xl">新しい目標を設定</h2>
        <div className="mb-2 flex gap-2">
          <input
            type="text"
            className="w-1/2 rounded border p-2"
            placeholder="目標名 (例: ベンチプレス 100kg)"
            value={newGoalName}
            onChange={(e) => setNewGoalName(e.target.value)}
          />
          <input
            type="number"
            className="w-1/4 rounded border p-2"
            placeholder="目標値"
            value={newGoalTarget}
            onChange={(e) => setNewGoalTarget(Number(e.target.value))}
          />
          <button
            type="button"
            onClick={handleAddGoal}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            追加
          </button>
        </div>
      </div>

      {/* 現在の目標一覧 */}
      <div>
        <h2 className="mb-2 font-semibold text-xl">目標一覧</h2>
        {goals.length === 0 ? (
          <p className="text-gray-500">まだ目標が設定されていません。</p>
        ) : (
          <ul className="space-y-4">
            {goals.map((goal) => (
              <li
                key={goal.id}
                className="flex items-center justify-between rounded border p-4 shadow-sm"
              >
                <div>
                  <p className="font-bold text-lg">{goal.name}</p>
                  <p className="text-gray-600 text-sm">
                    進捗: {goal.progress} / {goal.target}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="w-24 rounded border p-2"
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
