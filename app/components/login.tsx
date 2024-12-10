"use client";

import { login } from "../actions/action";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { loginSchema } from "../schemas/schema";
import { useActionState, useState } from "react";

export function LoginForm() {
  const [lastResult, action] = useActionState(login, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [showPwd, setShowPwd] = useState(false);

  const togglePwd = () => {
    setShowPwd((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        <div className="space-y-4 place-items-center">
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                key={fields.email.key}
                name={fields.email.name}
                defaultValue={fields.email.initialValue}
                className="grow"
                placeholder="Email"
              />
            </label>
            <div>{fields.email.errors}</div>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={showPwd ? "text" : "password"}
                key={fields.password.key}
                name={fields.password.name}
                defaultValue={fields.password.initialValue}
                className="grow"
              />
              <button
                type="button"
                onClick={togglePwd}
                className="text-gray-500 hover:text-gray-700"
              >
                {showPwd ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M1.318 8a7.884 7.884 0 0 1 .717-1.02C3.29 5.368 5.61 4 8 4s4.71 1.368 5.965 2.98A7.884 7.884 0 0 1 14.682 8a7.884 7.884 0 0 1-.717 1.02C12.71 10.632 10.39 12 8 12s-4.71-1.368-5.965-2.98A7.884 7.884 0 0 1 1.318 8Zm6.682 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M13.359 4.635A8.007 8.007 0 0 0 8 3C5.61 3 3.29 4.368 2.035 5.98 1.622 6.526 1.319 7.247 1.318 8c0 .753.304 1.475.717 2.02 1.256 1.612 3.576 2.98 5.965 2.98a8.007 8.007 0 0 0 5.36-1.635l1.086 1.086a.5.5 0 1 0 .707-.707l-12-12a.5.5 0 1 0-.707.707l1.086 1.086ZM11.086 9.586A2.5 2.5 0 0 0 8 6.5c-.39 0-.758.092-1.086.258l1.34 1.34a1.5 1.5 0 0 1 1.814 1.814l1.34 1.34Z" />
                  </svg>
                )}
              </button>
            </label>
            <div>{fields.password.errors}</div>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">パスワードを保存する</span>
              <input
                type="checkbox"
                key={fields.remember.key}
                name={fields.remember.name}
                defaultChecked={fields.remember.initialValue === "on"}
                className="checkbox checkbox-success"
              />
            </label>
            <div>{fields.remember.errors}</div>
          </div>
          <button className="btn btn-wide">登録</button>
        </div>
      </form>
    </div>
  );
}
