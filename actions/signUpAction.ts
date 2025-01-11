"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { signupSchema } from "../schemas/schema";

export async function signup(_prevState: unknown, formData: FormData) {
  // Validate formData with Zod schema
  const submission = parseWithZod(formData, {
    schema: signupSchema,
  });

  if (submission.status !== "success") {
    return submission.reply(); // Return validation errors
  }
  console.log(submission.value);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
    method: "POST",
    body: JSON.stringify(submission.value),
  });
  console.log(res);
  // Check if response is successful
  if (res.status === 201) {
    console.log(res);
    redirect("/dashboard");
  }
}
