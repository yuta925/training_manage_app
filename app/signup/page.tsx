"use client";
import { SignUpForm } from "@/components/signup";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <SignUpForm />
      </Suspense>
    </div>
  );
}
