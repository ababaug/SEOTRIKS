"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FE] flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 lg:p-12">
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#233F63] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[#E3F8F8] text-[24px]">lock_reset</span>
            </div>
            <span className="font-headline-sm text-2xl font-bold text-[#233F63] tracking-tight">SEOtriks</span>
          </Link>

          <h1 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
            Forgot Password?
          </h1>

          <p className="font-body-md text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
            Enter the work email associated with your SEOTRIKS account and we will send you instructions to reset your password.
          </p>
        </div>

        {isSubmitted ? (
          <div className="mt-8 p-6 rounded-2xl bg-[#E3F8F8] border border-teal-200 text-[#233F63] space-y-4 animate-fade-in text-center">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-700 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[28px]">mark_email_read</span>
            </div>
            <h3 className="font-headline-sm text-lg font-bold">Reset Link Dispatched</h3>
            <p className="font-body-sm text-xs leading-relaxed text-slate-700">
              If an account exists for <span className="font-bold">{email}</span>, you will receive a password reset link shortly.
            </p>
            <div className="pt-2">
              <Link
                href={`/reset-password?email=${encodeURIComponent(email)}`}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#233F63] text-white font-label-md text-xs font-bold hover:bg-[#1D3352] transition-colors"
              >
                Simulate Opening Reset Link
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-red-500 text-[18px]">error</span>
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-2" htmlFor="email">
                Work Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                  mail
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-xl bg-[#F26A4B] hover:bg-[#d8583b] text-white font-label-lg text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Sending Instructions...</span>
                </>
              ) : (
                <>
                  <span>Send Reset Link</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <Link href="/login" className="inline-flex items-center gap-1.5 text-xs font-label-sm font-bold text-[#233F63] hover:text-[#F26A4B] transition-colors">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Return to Log In</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
