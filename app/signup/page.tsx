"use client";
import { Suspense } from "react";
import { SignUpForm } from "./_components/SignUpForm";

export default function Home() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <SignUpForm />
      </Suspense>
    </div>
  );
}
