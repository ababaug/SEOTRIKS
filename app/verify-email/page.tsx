"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const emailParam = searchParams.get("email") || "alex@company.com";
  const planParam = searchParams.get("plan") || "free";
  const intentParam = searchParams.get("intent") || "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Status: "pending" | "success" | "invalid_code" | "expired"
  const [status, setStatus] = useState<"pending" | "success" | "invalid_code" | "expired">("pending");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer, canResend]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto advance focus
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");

    if (code.length < 6) {
      setErrorMessage("Please enter all 6 digits of your verification code.");
      return;
    }

    setErrorMessage(null);

    // Simulation trigger states
    if (code === "000000") {
      setStatus("invalid_code");
      setErrorMessage("Invalid verification code. Please check your email and try again.");
      return;
    }

    if (code === "999999") {
      setStatus("expired");
      setErrorMessage("This verification code has expired. Please click 'Resend Code' to receive a new one.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStatus("success");
      setTimeout(() => {
        const params = new URLSearchParams();
        if (planParam) params.set("plan", planParam);
        if (intentParam) params.set("intent", intentParam);
        router.push(`/onboarding?${params.toString()}`);
      }, 1200);
    }, 1000);
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(60);
    setCanResend(false);
    setStatus("pending");
    setErrorMessage(null);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FE] flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-[620px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 lg:p-12">
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#233F63] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[#E3F8F8] text-[24px]">mark_email_read</span>
            </div>
            <span className="font-headline-sm text-2xl font-bold text-[#233F63] tracking-tight">SEOtriks</span>
          </Link>

          <h1 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
            Verify Your Email Address
          </h1>

          <p className="font-body-md text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            We sent a 6-digit confirmation code to <span className="font-bold text-[#233F63]">{emailParam}</span>. Enter the code below to activate your account.
          </p>
        </div>

        {/* State Banner Feedback */}
        {status === "success" && (
          <div className="mt-6 p-4 rounded-xl bg-[#E3F8F8] border border-emerald-300 text-emerald-800 text-sm flex items-center gap-3 animate-fade-in">
            <span className="material-symbols-outlined text-emerald-600 text-[24px]">verified</span>
            <div>
              <span className="font-bold block">Email Verified Successfully!</span>
              <span className="text-xs">Preparing your SEOTRIKS onboarding environment...</span>
            </div>
          </div>
        )}

        {status === "expired" && (
          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm flex items-start gap-3 animate-fade-in">
            <span className="material-symbols-outlined text-amber-600 text-[20px] shrink-0 mt-0.5">timer_off</span>
            <div className="flex-1">
              <span className="font-bold block">Verification Code Expired</span>
              <span className="text-xs">Codes expire after 10 minutes. Click 'Resend Code' below for a new pin.</span>
            </div>
          </div>
        )}

        {errorMessage && status !== "expired" && (
          <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-fade-in">
            <span className="material-symbols-outlined text-red-500 text-[20px] shrink-0 mt-0.5">error</span>
            <div className="flex-1 text-xs leading-relaxed">{errorMessage}</div>
          </div>
        )}

        {/* OTP Input Form */}
        <form onSubmit={handleVerify} className="mt-8 space-y-8">
          <div>
            <label className="block text-center text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-4">
              Enter 6-Digit Security Code
            </label>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  disabled={status === "success" || isLoading}
                  className="w-11 h-13 sm:w-13 sm:h-14 text-center font-headline-sm text-2xl font-bold bg-[#F8F9FE] border-2 border-slate-200 rounded-xl text-[#233F63] focus:outline-none focus:border-[#F26A4B] focus:bg-white transition-all duration-200"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || status === "success"}
            className="w-full py-3.5 px-6 rounded-xl bg-[#F26A4B] hover:bg-[#d8583b] text-white font-label-lg text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Verifying Code...</span>
              </>
            ) : (
              <>
                <span>Confirm &amp; Continue</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </>
            )}
          </button>
        </form>

        {/* Resend Controls */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-3">
          <p className="text-xs font-body-sm text-slate-500">
            Didn't receive the email check your spam or try resending.
          </p>
          <button
            type="button"
            onClick={handleResend}
            disabled={!canResend || isLoading}
            className="px-4 py-2 rounded-lg bg-[#EEF2FC] text-[#233F63] hover:bg-[#B8E2FA]/40 font-label-md text-xs font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            {canResend ? "Resend Verification Code" : `Resend Code in ${timer}s`}
          </button>

          <Link href="/register" className="text-xs font-label-sm text-slate-400 hover:text-[#233F63] transition-colors mt-2">
            ← Change email address
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F9FE] flex items-center justify-center"><span className="w-8 h-8 border-4 border-[#F26A4B] border-t-transparent rounded-full animate-spin"></span></div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
