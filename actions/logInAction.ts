"use server";

// import { parseWithZod } from "@conform-to/zod";
import { loginSchema } from "../schemas/schema";
import { redirect } from "next/navigation";
import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

// type LoginResponse = {

// }

export async function login(prevState: unknown, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const data: LoginData = {
    email: email as string,
    password: password as string,
  };

  const submission = loginSchema.safeParse(data);

  try {
    // サーバーへリクエスト
    console.log("Payload:", submission.data);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      submission.data
    );

    const resData = res.data;
    console.log(resData);
    // レスポンスが成功か確認
    if (res.status === 200) {
      redirect("/dashboard");
    }

    // レスポンスデータの取得

    // メールアドレスが一致する場合リダイレクト
  } catch (error) {
    // エラーハンドリング
    console.error("ログインに失敗しました:", error);
  }
}
