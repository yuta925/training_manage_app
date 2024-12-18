"use client";
import { LogInForm } from "@/components/login";
import { CsrfToken } from "@/types";
import axios from "axios";
import { Suspense, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios.defaults.withCredentials = true;
    const getCsrfToken = async () => {
      const { data } = await axios.get<CsrfToken>(
        `${process.env.NEXT_PUBLIC_API_URL}/csrf`
      );
      axios.defaults.headers.common["X-CSRF-Token"] = data.csrf_token;
    };
    getCsrfToken();
  }, []);
  return (
    <div>
      <Suspense fallback="Loading...">
        <LogInForm />
      </Suspense>
    </div>
  );
}
