"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { signupSchema } from "../schemas/schema";
import axios from "axios";

interface SignUp extends FormData {
  email: string;
  password: string;
}

export async function signup(prevState: unknown, formData: SignUp) {
  // Validate formData with Zod schema
  const submission = parseWithZod(formData, {
    schema: signupSchema,
  });

  if (submission.status !== "success") {
    return submission.reply(); // Return validation errors
  }

  try {
    // Make API request to sign up
    
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/signup`,
      JSON.stringify(submission.payload)
    );

    // Check if response is successful
    if (res.status === 200) {
      const { email } = submission.payload;
      const responseData = res.data;

      // If email matches or conditionally redirect
      if (responseData.email === email) {
        redirect("/dashboard");
      } else {
        console.error("Email mismatch in response.");
      }
    } else {
      console.error("Signup failed with status:", res.status);
    }
  } catch (error) {
    console.error("Signup request failed:", error);
  }
}
