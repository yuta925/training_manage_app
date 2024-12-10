"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { loginSchema } from "../schemas/schema";
import { cookies } from "next/headers";

export async function login(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  const cookieStore = await cookies();

  cookieStore.set("user_email", submission.value.email);
  cookieStore.set("user_pwd", submission.value.password);
  
  redirect("/dashboard");

  // TODO:apiへのリクエスト処理
  // try {
  // } catch (e) {
  //   console.error(e);
  // }
}
