"use client";
import { Suspense } from "react";
import { LogInForm } from "./_components/LogInForm";

export default function Home() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <LogInForm />
      </Suspense>
    </div>
  );
}
