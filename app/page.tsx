"use client";
import { redirect } from "next/navigation";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 transition-all duration-300 ">
      {/* ヘッダー */}
      <header className="mb-8 text-center">
        <h1 className="font-bold text-4xl text-gray-800">筋トレ管理アプリ</h1>
        <p className="mt-2 text-gray-600 text-lg">
          あなたのトレーニングを効率的にサポートします
        </p>
      </header>

      {/* メインコンテンツ */}
      <main className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-md">
        {/* セクション1: アプリの説明 */}
        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl text-gray-700">
            アプリの特徴
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>簡単にトレーニングメニューを記録可能</li>
            <li>進捗をグラフで確認できる機能</li>
            <li>トレーニング履歴をカレンダー形式で管理</li>
          </ul>
        </section>

        {/* セクション2: 行動を促す */}
        <section>
          <h2 className="mb-4 font-semibold text-2xl text-gray-700">
            さあ、始めましょう！
          </h2>
          <p className="mb-6 text-gray-600">
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
