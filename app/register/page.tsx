"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

function RegisterContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedPlan = searchParams.get("plan") || "free";
  const selectedIntent = searchParams.get("intent") || null;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState<string | null>(null);

  // Simple password strength check
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
    setErrorState(null);

    if (!termsAccepted) {
      setErrorState("You must agree to the Terms of Service and Privacy Policy to continue.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorState("Passwords do not match. Please verify both fields.");
      return;
    }

    if (password.length < 8) {
      setErrorState("Password must be at least 8 characters long.");
      return;
    }

    // Account exists test trigger
    if (email === "exists@seotriks.com") {
      setErrorState("An account with this email address already exists. Please log in instead.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to email verification screen with parameters
      const params = new URLSearchParams();
      params.set("email", email);
      if (selectedPlan) params.set("plan", selectedPlan);
      if (selectedIntent) params.set("intent", selectedIntent);
      router.push(`/verify-email?${params.toString()}`);
    }, 1000);
  };

  const handleGoogleSignup = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const params = new URLSearchParams();
      if (selectedPlan) params.set("plan", selectedPlan);
      if (selectedIntent) params.set("intent", selectedIntent);
      router.push(`/onboarding?${params.toString()}`);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FE] flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-[1120px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side Branding */}
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

            <div className="mt-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#B8E2FA] font-label-sm text-xs font-semibold backdrop-blur-sm">
                <span className="material-symbols-outlined text-[16px] text-[#F26A4B]">verified</span>
                <span>14-DAY FULL FEATURE FREE TRIAL</span>
              </div>

              <h2 className="font-headline-lg text-3xl font-bold leading-snug">
                Join thousands of SEOs, agencies, and growth leads
              </h2>

              <p className="font-body-md text-[#B8E2FA] text-base leading-relaxed">
                Turn overwhelming technical data into prioritized, deployable search growth blueprints in minutes.
              </p>

              {/* Selected Plan Summary Badge */}
              {selectedPlan && (
                <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-label-sm tracking-wider text-[#B8E2FA] block font-semibold">Selected Plan</span>
                    <span className="font-headline-sm text-lg font-bold text-white capitalize">{selectedPlan} Plan</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F26A4B] text-white text-xs font-bold font-label-sm">
                    {selectedPlan === "free" ? "$0/mo" : "Free 14-Day Trial"}
                  </span>
                </div>
              )}

              {selectedIntent === "audit" && (
                <div className="p-3 rounded-lg bg-[#E3F8F8]/20 border border-[#E3F8F8]/30 text-[#E3F8F8] text-xs font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">travel_explore</span>
                  <span>Instant full-domain audit configured for setup</span>
                </div>
              )}
            </div>
          </div>

          <div className="relative z-10 mt-10 pt-6 border-t border-white/10 space-y-3 text-xs text-[#EEF2FC]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#E3F8F8] text-[18px]">check</span>
              <span>No credit card required for free tier</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#E3F8F8] text-[18px]">check</span>
              <span>Cancel or adjust subscription anytime</span>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-7 p-8 lg:p-12">
          <div className="max-w-lg w-full mx-auto space-y-6">
            <div>
              <h1 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
                Create Your Free Account
              </h1>
              <p className="font-body-md text-slate-500 text-sm mt-1">
                Start optimizing your domain with SEOTRIKS in 2 minutes.
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

            {/* Google Signup Button */}
            <button
              type="button"
              onClick={handleGoogleSignup}
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

            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-slate-200 w-full"></div>
              <span className="bg-white px-4 text-xs font-label-sm text-slate-400 font-medium uppercase tracking-wider absolute">or sign up with work email</span>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-1.5" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Alex"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-1.5" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Morgan"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-1.5" htmlFor="email">
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-1.5" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-1.5" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  required
                  className="w-full px-3.5 py-2.5 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                />
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
                <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-1.5" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  required
                  className="w-full px-3.5 py-2.5 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="w-4 h-4 mt-0.5 text-[#F26A4B] rounded border-slate-300 focus:ring-[#F26A4B]"
                  />
                  <span className="text-xs font-body-sm text-slate-600 leading-normal">
                    I agree to the <Link href="#" className="underline font-semibold text-[#233F63]">Terms of Service</Link> and <Link href="#" className="underline font-semibold text-[#233F63]">Privacy Policy</Link>.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#F26A4B] hover:bg-[#d8583b] text-white font-label-lg text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
              >
                {isLoading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Free Account</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-2 text-center font-body-sm text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-[#233F63] hover:text-[#F26A4B] transition-colors">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F9FE] flex items-center justify-center"><span className="w-8 h-8 border-4 border-[#F26A4B] border-t-transparent rounded-full animate-spin"></span></div>}>
      <RegisterContent />
    </Suspense>
  );
}
