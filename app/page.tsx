"use client";
import { Suspense } from "react";
import { LoginForm } from "./components/form";

export default function Home() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <LoginForm />
      </Suspense>
    </div>
  );
}
