"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

function LoginContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectPath = searchParams.get("redirect") || "/onboarding";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorState(null);

    if (!email || !password) {
      setErrorState("Please fill in both email and password fields.");
      return;
    }

    if (!email.includes("@")) {
      setErrorState("Please enter a valid email address.");
      return;
    }

    // Simulate invalid login test case
    if (email === "error@seotriks.com") {
      setErrorState("Invalid email or password. Please verify your credentials and try again.");
      return;
    }

    if (email === "locked@seotriks.com") {
      setErrorState("Account temporarily locked due to multiple failed attempts. Please reset your password.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(redirectPath);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(redirectPath);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FE] flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-[1120px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Left Side - Brand & Features */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#233F63] via-[#2A486D] to-[#1D3352] p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#B8E2FA]/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-[#F26A4B]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#F26A4B] flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-white text-[24px]">insights</span>
              </div>
              <span className="font-headline-sm text-2xl font-bold text-white tracking-tight">SEOtriks</span>
            </Link>

            <div className="mt-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#B8E2FA] font-label-sm text-xs font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#F26A4B] animate-pulse"></span>
                <span>AI-POWERED SEO PLATFORM</span>
              </div>

              <h2 className="font-headline-lg text-3xl font-bold leading-snug">
                Welcome back to your SEO Command Center
              </h2>

              <p className="font-body-md text-[#B8E2FA] text-base leading-relaxed">
                Log in to monitor your technical site health, track keyword ranks, and review instant priority triage fixes.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-12 pt-8 border-t border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-sm text-[#EEF2FC]">
              <span className="material-symbols-outlined text-[#E3F8F8] text-[20px]">check_circle</span>
              <span>Real-time technical audit telemetry</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#EEF2FC]">
              <span className="material-symbols-outlined text-[#E3F8F8] text-[20px]">check_circle</span>
              <span>Proactive SEO Guard alert system</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#EEF2FC]">
              <span className="material-symbols-outlined text-[#E3F8F8] text-[20px]">check_circle</span>
              <span>Automated Google Search Console integration</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto space-y-8">
            <div>
              <h1 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
                Log In to SEOtriks
              </h1>
              <p className="font-body-md text-slate-500 text-sm mt-2">
                Enter your account credentials to access your dashboard.
              </p>
            </div>

            {/* Error Banner */}
            {errorState && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-fade-in">
                <span className="material-symbols-outlined text-red-500 text-[20px] shrink-0 mt-0.5">error</span>
                <div className="flex-1 font-body-sm">{errorState}</div>
                <button onClick={() => setErrorState(null)} aria-label="Dismiss error" className="text-red-400 hover:text-red-600">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            )}

            {/* Google OAuth Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-label-lg text-sm font-semibold flex items-center justify-center gap-3 transition-all duration-200 shadow-sm disabled:opacity-60"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-slate-200 w-full"></div>
              <span className="bg-white px-4 text-xs font-label-sm text-slate-400 font-medium uppercase tracking-wider absolute">or login with email</span>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
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

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider" htmlFor="password">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-xs font-label-sm font-semibold text-[#F26A4B] hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                    lock
                  </span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className="w-full pl-11 pr-11 py-3 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-[#F26A4B] rounded border-slate-300 focus:ring-[#F26A4B]"
                  />
                  <span className="text-xs font-body-sm text-slate-600 font-medium">Remember me on this device</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#F26A4B] hover:bg-[#d8583b] text-white font-label-lg text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Logging in...</span>
                  </>
                ) : (
                  <>
                    <span>Log In</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-4 text-center font-body-sm text-sm text-slate-600">
              Don't have an account?{" "}
              <Link href="/register" className="font-bold text-[#233F63] hover:text-[#F26A4B] transition-colors">
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F9FE] flex items-center justify-center"><span className="w-8 h-8 border-4 border-[#F26A4B] border-t-transparent rounded-full animate-spin"></span></div>}>
      <LoginContent />
    </Suspense>
  );
}
