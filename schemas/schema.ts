import { z } from "zod";

export const signupSchema = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" }),
  password: z
    .string()
    .min(8, { message: "パスワードは8文字以上で入力してください" }),
  remember: z.boolean().optional(),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" }),
  password: z
    .string()
    .min(8, { message: "パスワードは8文字以上で入力してください" }),
  remember: z.boolean().optional(),
});

// schemaを追加していく
