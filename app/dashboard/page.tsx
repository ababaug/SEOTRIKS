"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FE] flex flex-col">
      {/* Dashboard Top Navigation */}
      <header className="bg-[#233F63] text-white border-b border-[#2A486D] sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F26A4B] flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-white text-[20px]">insights</span>
              </div>
              <span className="font-headline-sm text-xl font-bold text-white tracking-tight">SEOtriks</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1 font-label-md text-xs font-semibold">
              <Link href="/dashboard" className="px-3 py-1.5 rounded-lg bg-white/10 text-white">Overview</Link>
              <Link href="/onboarding?step=10" className="px-3 py-1.5 rounded-lg text-[#B8E2FA] hover:text-white transition-colors">Action Plan</Link>
              <Link href="/onboarding?step=8" className="px-3 py-1.5 rounded-lg text-[#B8E2FA] hover:text-white transition-colors">Site Audit</Link>
              <Link href="/onboarding?step=5" className="px-3 py-1.5 rounded-lg text-[#B8E2FA] hover:text-white transition-colors">Keywords</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-label-sm text-[#B8E2FA] font-medium hidden sm:inline-block">
              Workspace: <strong className="text-white font-mono">mycompany.com</strong>
            </span>
            <div className="w-8 h-8 rounded-full bg-[#F26A4B] text-white flex items-center justify-center font-bold text-xs shadow-sm">
              SE
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Header Bar */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#E3F8F8] text-teal-800 text-[11px] font-bold uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"></span>
              <span>LIVE WORKSPACE TELEMETRY</span>
            </div>
            <h1 className="font-headline-lg text-2xl font-bold text-[#233F63]">
              SEOTRIKS Command Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/onboarding?step=8"
              className="px-4 py-2.5 rounded-xl bg-[#233F63] text-white font-label-md text-xs font-bold hover:bg-[#1D3352] transition-colors flex items-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">sync</span>
              <span>Run New Audit</span>
            </Link>
            <Link
              href="/onboarding?step=10"
              className="px-4 py-2.5 rounded-xl bg-[#F26A4B] text-white font-label-md text-xs font-bold hover:bg-[#d8583b] transition-colors flex items-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">task_alt</span>
              <span>View Action Plan</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Dashboard Stats */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-8 w-full space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-xs font-label-sm font-bold text-slate-400 uppercase tracking-wider block">Health Score</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline-lg text-3xl font-bold text-[#233F63]">78</span>
              <span className="text-xs text-emerald-600 font-bold">+6 pts this week</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-xs font-label-sm font-bold text-slate-400 uppercase tracking-wider block">Critical Issues</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline-lg text-3xl font-bold text-[#F26A4B]">3</span>
              <span className="text-xs text-red-500 font-medium">Needs review</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-xs font-label-sm font-bold text-slate-400 uppercase tracking-wider block">Quick Wins</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline-lg text-3xl font-bold text-[#233F63]">5</span>
              <span className="text-xs text-teal-600 font-bold">+420 clicks / wk</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-xs font-label-sm font-bold text-slate-400 uppercase tracking-wider block">Keywords Tracked</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline-lg text-3xl font-bold text-[#233F63]">12</span>
              <span className="text-xs text-slate-500 font-medium">Active rank monitoring</span>
            </div>
          </div>
        </div>

        {/* Action Plan Widget */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-label-sm font-bold text-[#F26A4B] uppercase tracking-wider block">Priority Triage</span>
              <h2 className="font-headline-sm text-lg font-bold text-[#233F63]">Top Pending SEO Actions</h2>
            </div>
            <Link href="/onboarding?step=10" className="text-xs font-label-sm font-bold text-[#233F63] hover:underline">
              View All Actions →
            </Link>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#F26A4B] text-white text-[10px] font-bold uppercase">Critical</span>
                <div>
                  <span className="font-bold text-sm text-[#233F63] block">/enterprise-features rendered with noindex</span>
                  <span className="text-xs text-slate-500">14,200 monthly organic visits at risk</span>
                </div>
              </div>
              <Link href="/onboarding?step=10" className="px-3 py-1.5 rounded-lg bg-[#233F63] text-white text-xs font-bold hover:bg-[#1D3352]">
                Fix Now
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#EEF2FC] border border-[#B8E2FA] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#233F63] text-white text-[10px] font-bold uppercase">Quick Win</span>
                <div>
                  <span className="font-bold text-sm text-[#233F63] block">High impressions, low CTR on /guides/technical-seo</span>
                  <span className="text-xs text-slate-500">Ranked #3 • Snippet update estimated +420 clicks/wk</span>
                </div>
              </div>
              <Link href="/onboarding?step=10" className="px-3 py-1.5 rounded-lg bg-[#233F63] text-white text-xs font-bold hover:bg-[#1D3352]">
                Update Snippet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
