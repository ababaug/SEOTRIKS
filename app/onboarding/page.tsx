"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

// Data types for Onboarding state
export interface OnboardingState {
  websiteUrl: string;
  businessName: string;
  industry: string;
  companySize: string;
  experience: string;
  goals: string[];
  keywords: string[];
  competitors: string[];
  integrations: {
    gsc: boolean;
    ga4: boolean;
  };
}

function OnboardingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const planParam = searchParams.get("plan") || "free";
  const intentParam = searchParams.get("intent") || "";
  const initialStep = parseInt(searchParams.get("step") || "1", 10);

  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  // Form State
  const [formData, setFormData] = useState<OnboardingState>({
    websiteUrl: "",
    businessName: "",
    industry: "SaaS & Software",
    companySize: "1-10 employees",
    experience: "Intermediate",
    goals: ["Increase Organic Traffic", "Fix Technical SEO Friction"],
    keywords: ["technical seo", "site audit", "rank tracker"],
    competitors: ["semrush.com", "ahrefs.com"],
    integrations: {
      gsc: true,
      ga4: false,
    },
  });

  // Additional Error / Visual States
  const [urlError, setUrlError] = useState<string | null>(null);
  const [unreachableWarning, setUnreachableWarning] = useState<boolean>(false);
  const [integrationError, setIntegrationError] = useState<string | null>(null);
  const [auditError, setAuditError] = useState<boolean>(false);

  // Audit Step Animation State
  const [auditProgress, setAuditProgress] = useState<number>(0);
  const [auditStageIndex, setAuditStageIndex] = useState<number>(0);

  // Sync step changes to URL without full refresh
  const goToStep = (step: number) => {
    setCurrentStep(step);
    const params = new URLSearchParams();
    params.set("step", step.toString());
    if (planParam) params.set("plan", planParam);
    if (intentParam) params.set("intent", intentParam);
    router.replace(`/onboarding?${params.toString()}`);
  };

  const handleNext = () => {
    // Step 2 validation: Business & Website
    if (currentStep === 2) {
      if (!formData.websiteUrl.trim()) {
        setUrlError("Please enter your website URL to continue.");
        return;
      }

      let cleanUrl = formData.websiteUrl.trim();
      if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
        cleanUrl = "https://" + cleanUrl;
      }

      // Simulate invalid URL
      if (formData.websiteUrl === "invalid-url") {
        setUrlError("Invalid website URL format. Please enter a valid domain (e.g. company.com).");
        return;
      }

      // Simulate unreachable site
      if (formData.websiteUrl === "unreachable.com") {
        setUnreachableWarning(true);
        setUrlError("Unable to reach domain. Verify website DNS or retry.");
        return;
      }

      setUrlError(null);
      setUnreachableWarning(false);
      setFormData((prev) => ({ ...prev, websiteUrl: cleanUrl }));
    }

    if (currentStep < 11) {
      goToStep(currentStep + 1);
    } else {
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  };

  // Audit stages simulation
  const auditStages = [
    "Connecting to domain protocol...",
    "Discovering pages & site hierarchy...",
    "Checking technical SEO & crawling DOM...",
    "Analyzing metadata, open graph & canonicals...",
    "Verifying Google indexability & status codes...",
    "Evaluating PageSpeed & Core Web Vitals...",
    "Identifying high-impact striking distance opportunities...",
    "Calculating SEOTRIKS composite score...",
    "Generating personalized SEO Action Plan...",
  ];

  useEffect(() => {
    if (currentStep === 8 && !auditError) {
      setAuditProgress(0);
      setAuditStageIndex(0);

      const totalStages = 9;
      const interval = setInterval(() => {
        setAuditProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentStep(9);
              const params = new URLSearchParams();
              params.set("step", "9");
              if (planParam) params.set("plan", planParam);
              if (intentParam) params.set("intent", intentParam);
              router.replace(`/onboarding?${params.toString()}`);
            }, 800);
            return 100;
          }
          const next = prev + 12;
          const stageIdx = Math.min(
            Math.floor((next / 100) * totalStages),
            totalStages - 1
          );
          setAuditStageIndex(stageIdx);
          return next;
        });
      }, 600);

      return () => clearInterval(interval);
    }
  }, [currentStep, auditError, planParam, intentParam, router]);

  const stepTitles = [
    "Welcome",
    "Website Setup",
    "SEO Experience",
    "SEO Goals",
    "Target Keywords",
    "Competitors",
    "Google Integrations",
    "Running Audit",
    "Initial Results",
    "Action Plan",
    "Workspace Ready",
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FE] flex flex-col">
      {/* Onboarding Navigation Header */}
      <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#233F63] flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[#E3F8F8] text-[20px]">insights</span>
            </div>
            <span className="font-headline-sm text-xl font-bold text-[#233F63] tracking-tight">SEOtriks</span>
          </Link>

          {/* Progress Indicator */}
          {currentStep > 1 && currentStep <= 11 && (
            <div className="hidden md:flex items-center gap-3 flex-1 max-w-md mx-8">
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#F26A4B] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(currentStep / 11) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs font-label-md font-bold text-[#233F63] whitespace-nowrap">
                Step {currentStep} of 11
              </span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-label-sm text-slate-500 font-medium">
              Selected Plan: <strong className="text-[#233F63] uppercase">{planParam}</strong>
            </span>
            <button
              onClick={() => router.push("/dashboard")}
              className="text-xs font-label-sm font-semibold text-slate-500 hover:text-[#233F63] transition-colors"
            >
              Skip to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Screen Container */}
      <div className="flex-1 max-w-[1000px] w-full mx-auto px-4 py-8 lg:py-12 flex flex-col justify-center">
        {/* Step Content Renderers */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 lg:p-12 transition-all duration-300">

          {/* SCREEN 6: Welcome to SEOTRIKS */}
          {currentStep === 1 && (
            <div className="space-y-8 text-center max-w-2xl mx-auto py-4">
              <div className="w-16 h-16 rounded-2xl bg-[#E3F8F8] text-[#233F63] flex items-center justify-center mx-auto shadow-sm">
                <span className="material-symbols-outlined text-[36px]">auto_awesome</span>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2FC] text-[#233F63] font-label-sm text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#F26A4B]"></span>
                  <span>WELCOME TO SEOTRIKS</span>
                </div>
                <h1 className="font-headline-lg text-3xl lg:text-4xl font-bold text-[#233F63]">
                  Let's set up your SEO command center
                </h1>
                <p className="font-body-md text-slate-600 text-base leading-relaxed">
                  We'll customize your domain audit, configure keyword telemetry, and build your initial SEO Action Plan in just a few quick steps.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
                <div className="p-4 rounded-xl bg-[#F8F9FE] border border-slate-100">
                  <span className="material-symbols-outlined text-[#F26A4B] text-[24px] mb-2 block">travel_explore</span>
                  <span className="font-bold text-sm text-[#233F63] block">1. Domain Audit</span>
                  <span className="text-xs text-slate-500">Scan technical structure &amp; health score</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8F9FE] border border-slate-100">
                  <span className="material-symbols-outlined text-[#233F63] text-[24px] mb-2 block">track_changes</span>
                  <span className="font-bold text-sm text-[#233F63] block">2. Keyword Goals</span>
                  <span className="text-xs text-slate-500">Identify page-one striking distance terms</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8F9FE] border border-slate-100">
                  <span className="material-symbols-outlined text-[#3B6378] text-[24px] mb-2 block">task</span>
                  <span className="font-bold text-sm text-[#233F63] block">3. Action Plan</span>
                  <span className="text-xs text-slate-500">Receive actionable fixes &amp; quick wins</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F26A4B] hover:bg-[#d8583b] text-white font-label-lg text-base font-bold shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-3"
                >
                  <span>Start Onboarding</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 7: Business & Website Setup */}
          {currentStep === 2 && (
            <div className="space-y-8 max-w-xl mx-auto">
              <div>
                <span className="text-xs font-label-sm font-bold text-[#F26A4B] uppercase tracking-wider block mb-1">
                  Step 02 / 11
                </span>
                <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
                  Business &amp; Website Setup
                </h2>
                <p className="font-body-md text-slate-700 text-sm mt-1 font-medium">
                  Tell us about your website so we can run our JS crawler and tailor recommendations.
                </p>
              </div>

              {urlError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-3 animate-fade-in">
                  <span className="material-symbols-outlined text-red-500 text-[20px] shrink-0">warning</span>
                  <div>
                    <span className="font-bold block text-sm">Website Setup Error</span>
                    <span>{urlError}</span>
                    {unreachableWarning && (
                      <button
                        onClick={() => setUrlError(null)}
                        className="mt-2 px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 rounded font-bold text-xs block"
                      >
                        Retry Domain Connection
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-2" htmlFor="websiteUrl">
                    Primary Website URL *
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                      language
                    </span>
                    <input
                      id="websiteUrl"
                      type="text"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="e.g. https://mycompany.com"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Type 'invalid-url' or 'unreachable.com' to test error states.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-2" htmlFor="businessName">
                    Business / Project Name
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Acme SaaS Platform"
                    className="w-full px-4 py-3 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-2" htmlFor="industry">
                      Industry / Niche
                    </label>
                    <select
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                    >
                      <option>SaaS &amp; Software</option>
                      <option>E-Commerce &amp; Retail</option>
                      <option>Agency &amp; Marketing</option>
                      <option>Content &amp; Publishing</option>
                      <option>Local Services &amp; Healthcare</option>
                      <option>Financial Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-2" htmlFor="companySize">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white transition-colors"
                    >
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-500 employees</option>
                      <option>500+ employees</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 8: SEO Experience */}
          {currentStep === 3 && (
            <div className="space-y-8 max-w-2xl mx-auto">
              <div>
                <span className="text-xs font-label-sm font-bold text-[#F26A4B] uppercase tracking-wider block mb-1">
                  Step 03 / 11
                </span>
                <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
                  What is your SEO Experience Level?
                </h2>
                <p className="font-body-md text-slate-600 text-sm mt-1">
                  This helps us calibrate the depth of explanation in your action items.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: "Beginner",
                    title: "Beginner",
                    desc: "New to search engine optimization. Need step-by-step guidance and plain English explanations.",
                    icon: "school",
                  },
                  {
                    id: "Intermediate",
                    title: "Intermediate",
                    desc: "Familiar with keywords, titles, and basic technical concepts. Managing ongoing site improvements.",
                    icon: "trending_up",
                  },
                  {
                    id: "Advanced",
                    title: "Advanced",
                    desc: "Experienced SEO practitioner. Looking for rapid automated triage, code diffs, and deep telemetry.",
                    icon: "code_blocks",
                  },
                  {
                    id: "Agency",
                    title: "Agency / In-House",
                    desc: "Managing multiple client domains, enterprise architecture, or multi-site portfolios.",
                    icon: "corporate_fare",
                  },
                ].map((exp) => {
                  const isSelected = formData.experience === exp.id;
                  return (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, experience: exp.id })}
                      className={`p-5 rounded-2xl text-left border-2 transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? "border-[#F26A4B] bg-[#F26A4B]/5 shadow-md"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? "bg-[#F26A4B] text-white" : "bg-[#EEF2FC] text-[#233F63]"}`}>
                          <span className="material-symbols-outlined text-[22px]">{exp.icon}</span>
                        </div>
                        {isSelected && (
                          <span className="material-symbols-outlined text-[#F26A4B] text-[24px]">check_circle</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-base font-bold text-[#233F63]">{exp.title}</h3>
                        <p className="font-body-sm text-xs text-slate-500 mt-1 leading-relaxed">{exp.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* SCREEN 9: SEO Goals */}
          {currentStep === 4 && (
            <div className="space-y-8 max-w-2xl mx-auto">
              <div>
                <span className="text-xs font-label-sm font-bold text-[#F26A4B] uppercase tracking-wider block mb-1">
                  Step 04 / 11
                </span>
                <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
                  Select Your Primary SEO Goals
                </h2>
                <p className="font-body-md text-slate-600 text-sm mt-1">
                  Select all objectives that align with your current business targets.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "Increase Organic Traffic", title: "Increase Organic Traffic", desc: "Attract more qualified visitors from Google search", icon: "show_chart" },
                  { id: "Rank #1 for Key Terms", title: "Rank #1 for Key Terms", desc: "Push striking-distance queries onto top page one spots", icon: "leaderboard" },
                  { id: "Fix Technical SEO Friction", title: "Fix Technical SEO Friction", desc: "Resolve crawling, indexing, and canonical bottlenecks", icon: "build" },
                  { id: "Outrank Competitors", title: "Outrank Competitors", desc: "Identify competitor keyword gaps and capture market share", icon: "sports_score" },
                  { id: "Local SEO & GEO Expansion", title: "Local SEO Expansion", desc: "Improve local visibility and multi-region search footprint", icon: "location_on" },
                  { id: "Content Optimization & Refresh", title: "Content Refresh & Optimization", desc: "Revamp decaying articles and optimize heading structure", icon: "published_with_changes" },
                ].map((goal) => {
                  const isSelected = formData.goals.includes(goal.id);
                  const toggleGoal = () => {
                    if (isSelected) {
                      setFormData({ ...formData, goals: formData.goals.filter((g) => g !== goal.id) });
                    } else {
                      setFormData({ ...formData, goals: [...formData.goals, goal.id] });
                    }
                  };

                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={toggleGoal}
                      className={`p-4 rounded-xl text-left border-2 transition-all duration-200 flex items-start gap-3 ${
                        isSelected
                          ? "border-[#233F63] bg-[#233F63]/5 shadow-sm"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg shrink-0 mt-0.5 flex items-center justify-center ${isSelected ? "bg-[#233F63] text-white" : "bg-slate-100 text-slate-500"}`}>
                        <span className="material-symbols-outlined text-[18px]">{goal.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-headline-sm text-sm font-bold text-[#233F63]">{goal.title}</h3>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {}}
                            className="w-4 h-4 text-[#233F63] rounded border-slate-300"
                          />
                        </div>
                        <p className="font-body-sm text-xs text-slate-500 mt-0.5">{goal.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* SCREEN 10: Target Keywords */}
          {currentStep === 5 && (
            <div className="space-y-8 max-w-xl mx-auto">
              <div>
                <span className="text-xs font-label-sm font-bold text-[#F26A4B] uppercase tracking-wider block mb-1">
                  Step 05 / 11
                </span>
                <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
                  Target Keywords
                </h2>
                <p className="font-body-md text-slate-600 text-sm mt-1">
                  Enter keywords you want to track or click recommendations based on your industry.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-2">
                    Add Target Keyword
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="newKeyword"
                      type="text"
                      placeholder="e.g. enterprise seo audit"
                      className="flex-1 px-4 py-3 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          const val = (e.target as HTMLInputElement).value.trim();
                          if (val && !formData.keywords.includes(val)) {
                            setFormData({ ...formData, keywords: [...formData.keywords, val] });
                            (e.target as HTMLInputElement).value = "";
                          }
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById("newKeyword") as HTMLInputElement;
                        if (input && input.value.trim()) {
                          const val = input.value.trim();
                          if (!formData.keywords.includes(val)) {
                            setFormData({ ...formData, keywords: [...formData.keywords, val] });
                            input.value = "";
                          }
                        }
                      }}
                      className="px-5 py-3 rounded-xl bg-[#233F63] text-white font-label-md text-xs font-bold hover:bg-[#1D3352] transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-label-md font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Selected Keywords ({formData.keywords.length})
                  </span>
                  <div className="flex flex-wrap gap-2 min-h-[48px] p-3 rounded-xl bg-[#F8F9FE] border border-slate-200">
                    {formData.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-label-md font-semibold text-[#233F63] shadow-sm"
                      >
                        <span>{kw}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              keywords: formData.keywords.filter((_, i) => i !== idx),
                            })
                          }
                          className="text-slate-400 hover:text-red-500"
                        >
                          <span className="material-symbols-outlined text-[14px]">close</span>
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-label-md font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Industry Suggestions
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["technical seo tool", "site crawler", "seo guard", "rank tracking software", "schema generator"].map((sug) => {
                      const isAdded = formData.keywords.includes(sug);
                      return (
                        <button
                          key={sug}
                          type="button"
                          disabled={isAdded}
                          onClick={() => setFormData({ ...formData, keywords: [...formData.keywords, sug] })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-label-sm font-semibold transition-colors flex items-center gap-1 ${
                            isAdded
                              ? "bg-slate-100 text-slate-400 cursor-default"
                              : "bg-[#EEF2FC] text-[#233F63] hover:bg-[#B8E2FA]/40"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[14px]">{isAdded ? "check" : "add"}</span>
                          <span>{sug}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 11: Competitors */}
          {currentStep === 6 && (
            <div className="space-y-8 max-w-xl mx-auto">
              <div>
                <span className="text-xs font-label-sm font-bold text-[#F26A4B] uppercase tracking-wider block mb-1">
                  Step 06 / 11
                </span>
                <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
                  Add Top Competitors
                </h2>
                <p className="font-body-md text-slate-600 text-sm mt-1">
                  We'll compare your search visibility and content depth against your competitors.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-label-md font-bold text-[#233F63] uppercase tracking-wider mb-2">
                    Competitor Domain
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="newCompetitor"
                      type="text"
                      placeholder="e.g. competitor.com"
                      className="flex-1 px-4 py-3 bg-[#F8F9FE] border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#233F63] focus:bg-white"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          const val = (e.target as HTMLInputElement).value.trim();
                          if (val && !formData.competitors.includes(val)) {
                            setFormData({ ...formData, competitors: [...formData.competitors, val] });
                            (e.target as HTMLInputElement).value = "";
                          }
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById("newCompetitor") as HTMLInputElement;
                        if (input && input.value.trim()) {
                          const val = input.value.trim();
                          if (!formData.competitors.includes(val)) {
                            setFormData({ ...formData, competitors: [...formData.competitors, val] });
                            input.value = "";
                          }
                        }
                      }}
                      className="px-5 py-3 rounded-xl bg-[#233F63] text-white font-label-md text-xs font-bold hover:bg-[#1D3352] transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-xs font-label-md font-bold text-slate-500 uppercase tracking-wider">
                    Tracked Competitors ({formData.competitors.length})
                  </span>
                  <div className="space-y-2">
                    {formData.competitors.map((comp, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#F8F9FE] border border-slate-200 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-slate-400 text-[18px]">public</span>
                          <span className="font-label-md text-sm font-bold text-[#233F63]">{comp}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              competitors: formData.competitors.filter((_, i) => i !== idx),
                            })
                          }
                          className="text-slate-400 hover:text-red-500"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-label-md font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Suggested Competitors
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["screamingfrog.co.uk", "moz.com", "serpstat.com"].map((sug) => {
                      const isAdded = formData.competitors.includes(sug);
                      return (
                        <button
                          key={sug}
                          type="button"
                          disabled={isAdded}
                          onClick={() => setFormData({ ...formData, competitors: [...formData.competitors, sug] })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-label-sm font-semibold transition-colors flex items-center gap-1 ${
                            isAdded
                              ? "bg-slate-100 text-slate-400 cursor-default"
                              : "bg-[#EEF2FC] text-[#233F63] hover:bg-[#B8E2FA]/40"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[14px]">{isAdded ? "check" : "add"}</span>
                          <span>{sug}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 12: Google Integrations */}
          {currentStep === 7 && (
            <div className="space-y-8 max-w-xl mx-auto">
              <div>
                <span className="text-xs font-label-sm font-bold text-[#F26A4B] uppercase tracking-wider block mb-1">
                  Step 07 / 11
                </span>
                <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
                  Connect Google Integrations
                </h2>
                <p className="font-body-md text-slate-600 text-sm mt-1">
                  Integrate Google Search Console and GA4 for live rank telemetry and click attribution.
                </p>
              </div>

              {integrationError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center justify-between animate-fade-in">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500 text-[18px]">error</span>
                    <span>{integrationError}</span>
                  </div>
                  <button
                    onClick={() => setIntegrationError(null)}
                    className="underline font-bold text-red-800 hover:text-red-900 text-xs"
                  >
                    Retry Connection
                  </button>
                </div>
              )}

              <div className="space-y-4">
                {/* Search Console */}
                <div className="p-5 rounded-2xl border-2 border-slate-200 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[26px]">query_stats</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-base font-bold text-[#233F63]">Google Search Console</h3>
                      <p className="font-body-sm text-xs text-slate-500 mt-0.5">Read-only sync for real search queries &amp; impressions</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        integrations: { ...formData.integrations, gsc: !formData.integrations.gsc },
                      })
                    }
                    className={`px-4 py-2 rounded-xl font-label-md text-xs font-bold transition-all ${
                      formData.integrations.gsc
                        ? "bg-[#E3F8F8] text-teal-800 border border-teal-300"
                        : "bg-[#233F63] text-white hover:bg-[#1D3352]"
                    }`}
                  >
                    {formData.integrations.gsc ? "Connected ✓" : "Connect"}
                  </button>
                </div>

                {/* GA4 */}
                <div className="p-5 rounded-2xl border-2 border-slate-200 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[26px]">analytics</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-base font-bold text-[#233F63]">Google Analytics 4</h3>
                      <p className="font-body-sm text-xs text-slate-500 mt-0.5">Correlate technical fixes with organic conversion lift</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        integrations: { ...formData.integrations, ga4: !formData.integrations.ga4 },
                      })
                    }
                    className={`px-4 py-2 rounded-xl font-label-md text-xs font-bold transition-all ${
                      formData.integrations.ga4
                        ? "bg-[#E3F8F8] text-teal-800 border border-teal-300"
                        : "bg-[#233F63] text-white hover:bg-[#1D3352]"
                    }`}
                  >
                    {formData.integrations.ga4 ? "Connected ✓" : "Connect"}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#EEF2FC] text-[#233F63] text-xs font-body-sm flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5 text-[#233F63]">shield</span>
                <span>
                  SEOtriks requests read-only permissions and never alters your Google configuration. You can revoke access anytime.
                </span>
              </div>
            </div>
          )}

          {/* SCREEN 13: Initial Site Audit / Analysis */}
          {currentStep === 8 && (
            <div className="space-y-8 max-w-xl mx-auto text-center py-4">
              {auditError ? (
                <div className="p-6 rounded-2xl bg-red-50 border border-red-200 text-red-800 space-y-4 animate-fade-in text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-[28px]">warning</span>
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold">Audit Processing Exception</h3>
                  <p className="font-body-sm text-xs text-red-600">
                    Target site blocked audit request or timed out during JS DOM parsing.
                  </p>
                  <button
                    onClick={() => setAuditError(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#233F63] text-white font-label-md text-xs font-bold hover:bg-[#1D3352]"
                  >
                    Retry Domain Audit
                  </button>
                </div>
              ) : (
                <>
                  <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#EEF2FC"
                        strokeWidth="3.5"
                      ></path>
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#F26A4B"
                        strokeDasharray={`${auditProgress}, 100`}
                        strokeLinecap="round"
                        strokeWidth="3.5"
                        className="transition-all duration-500 ease-out"
                      ></path>
                    </svg>
                    <span className="absolute font-headline-lg text-2xl font-bold text-[#233F63]">
                      {auditProgress}%
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-headline-lg text-2xl font-bold text-[#233F63]">
                      Analyzing {formData.websiteUrl || "Website"}
                    </h2>
                    <p className="font-body-md text-slate-500 text-sm h-6 font-medium animate-pulse">
                      {auditStages[auditStageIndex]}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8F9FE] border border-slate-200 text-left space-y-2 font-mono text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>Status:</span>
                      <span className="text-teal-600 font-bold">ACTIVE SCAN</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Engine:</span>
                      <span>SEOTRIKS JS DOM Crawler v2.4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Target URL:</span>
                      <span className="text-[#233F63] font-bold">{formData.websiteUrl || "https://example.com"}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* SCREEN 14: Initial SEO Results */}
          {currentStep === 9 && (
            <div className="space-y-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-label-sm font-bold text-[#F26A4B] uppercase tracking-wider block">
                    Step 09 / 11 • Audit Complete
                  </span>
                  <h2 className="font-headline-lg text-2xl font-bold text-[#233F63] mt-0.5">
                    Initial SEO Results
                  </h2>
                  <p className="font-body-sm text-slate-500 text-xs">
                    Analysis for <strong className="text-[#233F63]">{formData.websiteUrl || "your site"}</strong>
                  </p>
                </div>

                {/* Composite Health Score Badge */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#233F63] to-[#1D3352] text-white flex items-center gap-4 shadow-md">
                  <div className="text-center">
                    <span className="font-headline-lg text-3xl font-bold text-[#B8E2FA]">78</span>
                    <span className="text-[10px] text-slate-300 block font-label-sm uppercase font-bold">/ 100</span>
                  </div>
                  <div className="border-l border-white/20 pl-3">
                    <span className="font-label-sm text-xs font-bold text-white block">SEOTRIKS Score</span>
                    <span className="text-[11px] text-[#E3F8F8]">Good Baseline</span>
                  </div>
                </div>
              </div>

              {/* Sub Score Breakdown Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#F8F9FE] border border-slate-200">
                  <span className="font-headline-sm text-lg font-bold text-[#233F63] block">82</span>
                  <span className="text-[11px] font-label-sm text-slate-500 font-semibold">Technical</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FE] border border-slate-200">
                  <span className="font-headline-sm text-lg font-bold text-[#233F63] block">74</span>
                  <span className="text-[11px] font-label-sm text-slate-500 font-semibold">On-Page</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FE] border border-slate-200">
                  <span className="font-headline-sm text-lg font-bold text-[#233F63] block">69</span>
                  <span className="text-[11px] font-label-sm text-slate-500 font-semibold">Content</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FE] border border-slate-200">
                  <span className="font-headline-sm text-lg font-bold text-[#233F63] block">88</span>
                  <span className="text-[11px] font-label-sm text-slate-500 font-semibold">Performance</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FE] border border-slate-200 col-span-2 sm:col-span-1">
                  <span className="font-headline-sm text-lg font-bold text-[#233F63] block">95</span>
                  <span className="text-[11px] font-label-sm text-slate-500 font-semibold">Indexing</span>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500 text-[20px]">warning</span>
                    <span className="font-bold text-sm">Critical Issues</span>
                  </div>
                  <span className="font-headline-lg text-2xl font-bold block text-red-700">3</span>
                  <p className="text-xs text-red-600">Requires priority action before re-index</p>
                </div>

                <div className="p-4 rounded-xl bg-[#EEF2FC] border border-[#B8E2FA] text-[#233F63] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#233F63] text-[20px]">bolt</span>
                    <span className="font-bold text-sm">Quick Wins</span>
                  </div>
                  <span className="font-headline-lg text-2xl font-bold block text-[#233F63]">5</span>
                  <p className="text-xs text-slate-600">Low effort fixes with high CTR impact</p>
                </div>

                <div className="p-4 rounded-xl bg-[#E3F8F8] border border-teal-200 text-teal-900 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-teal-700 text-[20px]">trending_up</span>
                    <span className="font-bold text-sm">Opportunities</span>
                  </div>
                  <span className="font-headline-lg text-2xl font-bold block text-teal-800">12</span>
                  <p className="text-xs text-teal-700">Page-one striking distance terms</p>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 15: Personalized SEO Action Plan */}
          {currentStep === 10 && (
            <div className="space-y-8 max-w-2xl mx-auto">
              <div>
                <span className="text-xs font-label-sm font-bold text-[#F26A4B] uppercase tracking-wider block mb-1">
                  Step 10 / 11 • Priority Triage Engine
                </span>
                <h2 className="font-headline-lg text-2xl font-bold text-[#233F63]">
                  Your Personalized SEO Action Plan
                </h2>
                <p className="font-body-md text-slate-600 text-sm mt-1">
                  Triaged recommendations calculated against search impressions and effort.
                </p>
              </div>

              <div className="space-y-4">
                {/* Item 1: CRITICAL (Coral) */}
                <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#F26A4B] text-white font-label-sm text-xs font-bold tracking-wider uppercase">
                      CRITICAL PRIORITY
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold">URL: /enterprise-features</span>
                  </div>
                  <h3 className="font-headline-sm text-base font-bold text-[#233F63]">
                    Important product page rendered with <code className="bg-red-100 text-red-700 px-1 py-0.5 rounded text-xs font-mono">noindex</code>
                  </h3>
                  <p className="font-body-sm text-xs text-slate-600 leading-relaxed">
                    <strong>Explanation:</strong> Robots meta tag contains noindex instructions, preventing search engine crawlers from indexing this revenue-critical page.<br/>
                    <strong>Potential Impact:</strong> 14,200 monthly organic visits at risk of removal from SERP.
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-red-100 text-xs font-mono text-slate-700">
                    <strong>Recommended Action:</strong> Replace <code className="text-red-600">&lt;meta name="robots" content="noindex"&gt;</code> with <code className="text-emerald-600">&lt;meta name="robots" content="index, follow"&gt;</code>
                  </div>
                </div>

                {/* Item 2: QUICK WIN (Navy/Light Blue) */}
                <div className="p-5 rounded-2xl bg-[#EEF2FC] border border-[#B8E2FA] space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#233F63] text-white font-label-sm text-xs font-bold tracking-wider uppercase">
                      QUICK WIN
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold">URL: /guides/technical-seo</span>
                  </div>
                  <h3 className="font-headline-sm text-base font-bold text-[#233F63]">
                    High impressions, low CTR on page-one ranking article
                  </h3>
                  <p className="font-body-sm text-xs text-slate-600 leading-relaxed">
                    <strong>Explanation:</strong> Ranked #3 for "technical seo checklist" with 18,000 monthly impressions but current CTR is only 0.8%.<br/>
                    <strong>Potential Impact:</strong> Estimated +420 additional clicks/week following snippet refresh.
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-[#B8E2FA] text-xs font-mono text-slate-700">
                    <strong>Recommended Action:</strong> Update meta title to include action benefit: <code className="text-[#233F63]">&lt;title&gt;Technical SEO Checklist (2025 Guide) | SEOtriks&lt;/title&gt;</code>
                  </div>
                </div>

                {/* Item 3: IMPROVING / POSITIVE (Cyan) */}
                <div className="p-5 rounded-2xl bg-[#E3F8F8] border border-teal-200 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-teal-700 text-white font-label-sm text-xs font-bold tracking-wider uppercase">
                      IMPROVING
                    </span>
                    <span className="font-mono text-xs text-teal-800 font-semibold">URL: /solutions/*</span>
                  </div>
                  <h3 className="font-headline-sm text-base font-bold text-teal-950">
                    Organic clicks +24% after canonical consolidation
                  </h3>
                  <p className="font-body-sm text-xs text-teal-900 leading-relaxed">
                    <strong>Explanation:</strong> 18 duplicate query parameters consolidated under primary canonical tag.<br/>
                    <strong>Lift Verified:</strong> Rank improvements observed across 41 tracked target terms.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 16: Onboarding Complete / Workspace Ready */}
          {currentStep === 11 && (
            <div className="space-y-8 max-w-xl mx-auto text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#E3F8F8] text-teal-700 flex items-center justify-center mx-auto shadow-sm">
                <span className="material-symbols-outlined text-[36px]">verified</span>
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-[#EEF2FC] text-[#233F63] text-xs font-bold font-label-sm uppercase tracking-wider">
                  SETUP COMPLETE
                </span>
                <h1 className="font-headline-lg text-2xl lg:text-3xl font-bold text-[#233F63]">
                  Your SEOTRIKS Workspace is Ready!
                </h1>
                <p className="font-body-md text-slate-600 text-sm">
                  Your domain configuration, keyword tracking, and priority triage engine are initialized.
                </p>
              </div>

              {/* Workspace Summary Tile */}
              <div className="p-6 rounded-2xl bg-[#F8F9FE] border border-slate-300 text-left space-y-3 font-body-sm text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-700 font-medium">Configured Domain:</span>
                  <span className="font-bold text-[#233F63]">{formData.websiteUrl || "mycompany.com"}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-700 font-medium">SEOTRIKS SEO Score:</span>
                  <span className="font-bold text-emerald-700">78 / 100</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-700 font-medium">Critical Issues / Quick Wins Found:</span>
                  <span className="font-bold text-[#233F63]">3 Critical • 5 Quick Wins</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-700 font-medium">Keywords Tracked:</span>
                  <span className="font-bold text-[#233F63]">{formData.keywords.length} terms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 font-medium">Google Integrations:</span>
                  <span className="font-bold text-teal-800">
                    {formData.integrations.gsc ? "GSC Connected" : "Pending"}
                  </span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  onClick={() => router.push("/dashboard")}
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#F26A4B] hover:bg-[#d8583b] text-white font-label-lg text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Go to Dashboard</span>
                  <span className="material-symbols-outlined text-[18px]">space_dashboard</span>
                </button>

                <button
                  onClick={() => goToStep(10)}
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#EEF2FC] hover:bg-[#B8E2FA]/40 text-[#233F63] font-label-lg text-sm font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <span>View My SEO Action Plan</span>
                  <span className="material-symbols-outlined text-[18px]">list_alt</span>
                </button>
              </div>
            </div>
          )}

          {/* Navigation Controls for Steps 2 to 10 */}
          {currentStep > 1 && currentStep < 11 && currentStep !== 8 && (
            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-label-md text-xs font-bold transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                <span>Back</span>
              </button>

              <div className="flex items-center gap-3">
                {[3, 4, 5, 6, 7].includes(currentStep) && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="text-xs font-label-sm font-semibold text-slate-400 hover:text-slate-600 px-3 py-2"
                  >
                    Skip step
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-[#F26A4B] hover:bg-[#d8583b] text-white font-label-lg text-xs font-bold shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
                >
                  <span>Continue</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F9FE] flex items-center justify-center"><span className="w-8 h-8 border-4 border-[#F26A4B] border-t-transparent rounded-full animate-spin"></span></div>}>
      <OnboardingContent />
    </Suspense>
  );
}
