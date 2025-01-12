"use client";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex h-16 w-full items-center bg-white shadow-md">
      {/** アプリのロゴ */}
      <span className="ml-2">筋トレ管理アプリ</span>

      {/** ユーザーアイコン */}
      <PersonIcon className="mr-4 ml-auto rounded-full border border-blue-500 text-gray-700" />
    </div>
  );
};

export default Header;
