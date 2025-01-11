"use server";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { loginSchema } from "../schemas/schema";

export async function login(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  });

  if (submission.status !== "success") {
    return submission.reply(); // Return validation errors
  }
  console.log(JSON.stringify(submission.value));

  const url = `${process.env.NEXT_PUBLIC_API_URL}/login`;
  console.log(url);
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(submission.payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
  const data = await res.json();
  console.table(data.status);
  if (data.status === 200) {
    redirect("/dashboard");
  } else {
    return data.error;
  }
}
