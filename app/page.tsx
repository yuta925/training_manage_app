"use client";
import { Suspense } from "react";
import { LoginForm } from "./components/login";

export default function Home() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <LoginForm />
      </Suspense>
    </div>
  );
}
