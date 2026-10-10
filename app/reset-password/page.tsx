"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getPasswordStrength = (pass: string) => {
    if (!pass) return { label: "", score: 0, color: "" };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 1) return { label: "Weak", score: 25, color: "bg-red-500" };
    if (score === 2) return { label: "Fair", score: 50, color: "bg-amber-500" };
    if (score === 3) return { label: "Good", score: 75, color: "bg-blue-500" };
    return { label: "Strong", score: 100, color: "bg-emerald-500" };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FE] flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 lg:p-12">
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#233F63] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[#E3F8F8] text-[24px]">key</span>
            </div>
            <span className="font-headline-sm text-2xl font-bold text-[#233F63] tracking-tight">SEOtriks</span>
          </Link>

          <h1 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
            Set New Password
          </h1>

          <p className="font-body-md text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
            Create a secure new password for your SEOTRIKS account{emailParam ? ` (${emailParam})` : ""}.
          </p>
        </div>

        {isSuccess ? (
          <div className="mt-8 p-6 rounded-2xl bg-[#E3F8F8] border border-teal-200 text-[#233F63] space-y-4 animate-fade-in text-center">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-700 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[28px]">check_circle</span>
            </div>
            <h3 className="font-headline-sm text-lg font-bold">Password Reset Complete</h3>
            <p className="font-body-sm text-xs leading-relaxed text-slate-700">
              Your password has been successfully updated. You can now log in using your new credentials.
            </p>
            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#F26A4B] text-white font-label-md text-sm font-bold shadow-md hover:bg-[#d8583b] transition-colors"
              >
                Log In Now
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-red-500 text-[18px]">error</span>
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-2" htmlFor="password">
                New Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                  lock
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  required
                  className="w-full pl-11 pr-11 py-3 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {password && (
                <div className="mt-2 space-y-1">
                  <div className="flex items-center justify-between text-xs font-label-sm">
                    <span className="text-slate-500">Strength:</span>
                    <span className="font-bold text-[#233F63]">{strength.label}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full ${strength.color} transition-all duration-300`} style={{ width: `${strength.score}%` }}></div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-2" htmlFor="confirmPassword">
                Confirm New Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                  lock_reset
                </span>
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  required
                  className="w-full pl-11 pr-11 py-3 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
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
                  <span>Updating Password...</span>
                </>
              ) : (
                <>
                  <span>Reset Password</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F9FE] flex items-center justify-center"><span className="w-8 h-8 border-4 border-[#F26A4B] border-t-transparent rounded-full animate-spin"></span></div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
