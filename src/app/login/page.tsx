"use client";

import Image from "next/image";
import Login from "@/assets/login-bg.svg";
import { useLogin } from "@/hooks/useLogin";

const BACKGROUND_IMAGE = Login;

export default function LoginPage() {
  const {
    employeeId,
    setEmployeeId,
    password,
    setPassword,
    errors,
    isSubmitting,
    handleSubmit,
  } = useLogin();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src={BACKGROUND_IMAGE}
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 w-full max-w-[380px] rounded-lg bg-white px-9 py-9 shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="font-poppins text-[22px] font-bold leading-tight tracking-wide text-[#151D48]">
            TCSNHS
          </h1>
          <p className="-mt-1 text-[10px] font-semibold text-[#151D48]">
            Infirmary System
          </p>
          <h2 className="mt-4 text-[15px] font-semibold tracking-[0.15em] text-slate-800">
            LOG IN
          </h2>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <fieldset
              className={`rounded-md border px-3 pb-2 pt-0 ${
                errors.employeeId ? "border-red-400" : "border-slate-300"
              }`}
            >
              <legend className="px-1 text-[11px] text-slate-500">
                Employee ID
              </legend>
              <input
                type="text"
                name="employeeId-nofill"
                autoComplete="off"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                disabled={isSubmitting}
                className="w-full border-none p-0 py-1 text-sm text-slate-900 outline-none focus:ring-0"
              />
            </fieldset>
            {errors.employeeId && (
              <p className="mt-1 text-xs text-red-500">{errors.employeeId}</p>
            )}
          </div>

          <div>
            <fieldset
              className={`rounded-md border px-3 pb-2 pt-0 ${
                errors.password ? "border-red-400" : "border-slate-300"
              }`}
            >
              <legend className="px-1 text-[11px] text-slate-500">
                Password
              </legend>
              <input
                type="password"
                name="password-nofill"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
                className="w-full border-none p-0 py-1 text-sm text-slate-900 outline-none focus:ring-0"
              />
            </fieldset>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-[#1B5E3F] py-2.5 text-[13px] font-semibold tracking-wide text-white transition hover:bg-[#154A32] disabled:cursor-not-allowed disabled:opacity-80"
          >
            {isSubmitting ? "SUBMITTING..." : "LOG IN"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-xs text-slate-700 underline underline-offset-2">
            Forgot password?
          </a>
        </div>
      </div>
    </main>
  );
}