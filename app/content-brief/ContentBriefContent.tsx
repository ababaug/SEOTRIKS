"use client";
export function ContentBriefContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full pb-16">
{/*  Top Contextual Breadcrumb & Meta Bar  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 mb-6">
<div className="flex items-center flex-wrap gap-2 text-secondary font-label-md">
<span className="hover:text-on-surface cursor-pointer transition-colors">Projects</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-on-surface cursor-pointer transition-colors">stripe.com</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-on-surface cursor-pointer transition-colors">Content &amp; On-Page</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-on-surface cursor-pointer transition-colors">Content Brief</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold tracking-wide">BRF-2025-089</span>
</div>
{/*  Live Status Pills  */}
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-md">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
        Assigned: <strong className="text-on-surface font-semibold ml-0.5">Marcus Vance</strong>
</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-md font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        Status: In Production
      </span>
</div>
</div>
{/*  Editorial Document Header Bar  */}
<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 mb-8 relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
<div className="space-y-3 max-w-3xl">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-surface-container-low text-secondary font-label-xs tracking-wider uppercase font-bold">
<span className="material-symbols-outlined text-xs text-primary-container">auto_awesome</span>
          AI-Engineered SERP Brief
        </div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
          Global Subscription Billing Compliance
        </h1>
<p className="font-body-md text-secondary leading-relaxed">
          Data-driven editorial brief built from reverse-engineering the top 10 SERP results, competitor content gaps, and search intent.
        </p>
{/*  Target Keyword Chip Cluster  */}
<div className="flex flex-wrap items-center gap-3 pt-2">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md">
<span className="material-symbols-outlined text-[18px] text-secondary">key</span>
<span>Target Keyword: <strong className="font-semibold text-on-surface">saas recurring billing compliance</strong></span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-low text-secondary font-label-xs font-semibold">
<span>Vol:</span>
<span className="text-on-surface font-bold">14,800</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-fixed font-label-xs font-bold">
<span>KD:</span>
<span>62 (Medium-High)</span>
</div>
</div>
</div>
{/*  Action Button Group  */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
<button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-secondary hover:bg-surface-container-high transition-colors font-label-md font-semibold">
<span className="material-symbols-outlined text-[18px]">share</span>
<span>Share Brief</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-secondary hover:bg-surface-container-high transition-colors font-label-md font-semibold">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
<span>Download PDF</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary hover:opacity-95 shadow-md shadow-primary-container/20 transition-all font-label-md font-semibold">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
<span>Send to AI Writer</span>
</button>
</div>
</div>
</div>
{/*  1. Executive Target & Opportunity Summary (Top 4 Metrics Grid)  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
{/*  Card 1  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary mb-3">
<span className="font-label-xs uppercase tracking-wider font-semibold">Primary Search Intent</span>
<span className="material-symbols-outlined text-secondary text-[20px]">psychology</span>
</div>
<p className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Commercial Investigation</p>
<p className="font-body-sm text-secondary">B2B SaaS CTOs, VP Eng &amp; CFOs preparing international expansion</p>
</div>
<div className="mt-4 pt-3 flex items-center gap-1.5 text-secondary font-label-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
        High transactional purchase intent
      </div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary mb-3">
<span className="font-label-xs uppercase tracking-wider font-semibold">Target Word Count</span>
<span className="material-symbols-outlined text-secondary text-[20px]">format_align_left</span>
</div>
<div className="flex items-baseline gap-2 mb-1">
<span className="font-metric-stat text-metric-stat font-bold text-on-surface">2,850</span>
<span className="font-label-sm text-secondary font-medium">words</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-2">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-secondary font-label-xs">
<span>Range: 2,600 - 3,100</span>
<span className="font-semibold text-on-surface">Comp Avg: 2,400</span>
</div>
</div>
{/*  Card 3  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary mb-3">
<span className="font-label-xs uppercase tracking-wider font-semibold">Est. Traffic Potential</span>
<span className="material-symbols-outlined text-secondary text-[20px]">trending_up</span>
</div>
<div className="flex items-baseline gap-2 mb-1">
<span className="font-metric-stat text-metric-stat font-bold text-on-surface">4,200</span>
<span className="font-label-sm text-secondary font-medium">visits / mo</span>
</div>
<p className="font-body-sm text-secondary">Valued at ~$38,400/mo organic media spend</p>
</div>
<div className="mt-4 pt-3 flex items-center gap-1.5 text-secondary font-label-xs">
<span className="material-symbols-outlined text-[16px] text-primary-container">monetization_on</span>
<span>$9.14 estimated CPC benchmark</span>
</div>
</div>
{/*  Card 4  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary mb-3">
<span className="font-label-xs uppercase tracking-wider font-semibold">Target SERP Trajectory</span>
<span className="material-symbols-outlined text-secondary text-[20px]">military_tech</span>
</div>
<div className="flex items-baseline gap-2 mb-1">
<span className="font-metric-stat text-metric-stat font-bold text-on-surface">Top 3</span>
<span className="font-label-sm text-secondary font-medium">SERP Goal</span>
</div>
<p className="font-body-sm text-secondary">Within 45 days post-index crawl cycle</p>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-secondary font-label-xs">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-bold">Fast-Rank Gap</span>
<span className="text-on-surface font-semibold">45 Days</span>
</div>
</div>
</div>
{/*  Main Grid: Left Detailed Editorial Architecture & Right Side Intelligence Rails  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Left Column: The Comprehensive Content Blueprint (8 cols)  */}
<div className="lg:col-span-8 space-y-8">
{/*  2. AI SERP Reverse-Engineering Insights ("The Unfair Advantage")  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm relative overflow-hidden">
<div className="flex items-center gap-3 mb-4">
<div className="w-9 h-9 rounded-xl bg-primary-container/15 text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">radar</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">AI SERP Reverse-Engineering Insights</h2>
<p className="font-body-sm text-secondary">Dissected top 10 SERP ranking structures for content blindspots</p>
</div>
</div>
{/*  Highlight Callout Box  */}
<div className="bg-surface-container-low rounded-xl p-5 mb-5">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container shrink-0 text-[20px] mt-0.5">offline_bolt</span>
<div className="space-y-2">
<h3 className="font-title text-title text-on-surface font-bold">What Competitors Miss (The Unfair Content Advantage)</h3>
<p className="font-body-md text-secondary leading-relaxed">
                Competitors thoroughly cover foundational GDPR and standard PCI-DSS Level 1 compliance, but uniformly fail to explain localized VAT/GST tax withholding thresholds by territory and automated dunning recovery logic during bank network outages.
              </p>
</div>
</div>
</div>
{/*  Strategic Recommendation Action Card  */}
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-secondary-container/20">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[24px]">account_tree</span>
<div>
<p className="font-label-md text-label-md font-semibold text-on-surface">Required Interactive Asset Recommendation</p>
<p className="font-body-sm text-secondary">Embed a collapsible compliance decision tree + production sample JSON webhook payload.</p>
</div>
</div>
<span className="px-3 py-1 rounded-md bg-surface-container-lowest text-secondary font-label-xs font-bold shrink-0 shadow-xs">High Impact (+28% Dwell Time)</span>
</div>
</div>
{/*  3. Detailed Outline & Headings Structure (Interactive Checklist)  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Structured Document Blueprint</h2>
<p className="font-body-sm text-secondary">Complete editorial headings with semantic targets and requirements</p>
</div>
<div className="flex items-center gap-2">
<span className="font-label-xs font-semibold text-secondary">6 SECTIONS DEFINED</span>
</div>
</div>
{/*  Interactive Checklist Items  */}
<div className="space-y-3" id="outline-checklist">
{/*  H1 Container  */}
<div className="p-4 rounded-xl bg-surface-container-low transition-all">
<div className="flex items-start gap-3">
<input defaultChecked className="mt-1 w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" id="h1_item" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-xs font-bold">H1</span>
<span className="font-label-xs text-secondary">Primary Canonical Header</span>
</div>
<label className="font-title text-title font-bold text-on-surface block cursor-pointer" htmlFor="h1_item">
                  Global Subscription Billing Compliance: The Complete 2025 Engineering &amp; Legal Guide
                </label>
<p className="font-body-sm text-secondary mt-1">Include exact primary keyword in first 60 characters; keep title tag under 65 chars total.</p>
</div>
</div>
</div>
{/*  Section 1  */}
<div className="p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" id="sec_1" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs font-bold">H2</span>
<span className="font-label-xs text-secondary font-medium">Est. 450 words</span>
</div>
<label className="font-title text-title font-semibold text-on-surface block cursor-pointer" htmlFor="sec_1">
                  1. Core Regulatory Frameworks (PCI-DSS 4.0, SOC 2 Type II, PSD2 SCA)
                </label>
<div className="mt-2 flex flex-wrap gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs">PCI 4.0 Deadlines</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs">SCA Exemption Rules</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs">Audit Logging</span>
</div>
</div>
</div>
</div>
{/*  Section 2  */}
<div className="p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" id="sec_2" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs font-bold">H2</span>
<span className="font-label-xs text-secondary font-medium">Est. 600 words</span>
</div>
<label className="font-title text-title font-semibold text-on-surface block cursor-pointer" htmlFor="sec_2">
                  2. Cross-Border Tax Invoicing &amp; Merchant of Record vs Direct Billing
                </label>
<p className="font-body-sm text-secondary mt-1">Differentiate between MOR models vs own merchant accounts with automated tax engines.</p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs">Economic Nexus Limits</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs">EU VAT MOSS replacement</span>
</div>
</div>
</div>
</div>
{/*  Section 3  */}
<div className="p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" id="sec_3" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs font-bold">H2</span>
<span className="font-label-xs text-secondary font-medium">Est. 550 words</span>
</div>
<label className="font-title text-title font-semibold text-on-surface block cursor-pointer" htmlFor="sec_3">
                  3. Smart Dunning, Involuntary Churn &amp; Card Network Rules
                </label>
<p className="font-body-sm text-secondary mt-1">Crucial competitor blindspot. Outline retry strategies without triggering bank chargeback penalties.</p>
</div>
</div>
</div>
{/*  Section 4  */}
<div className="p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" id="sec_4" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs font-bold">H2</span>
<span className="font-label-xs text-secondary font-medium">Est. 500 words</span>
</div>
<label className="font-title text-title font-semibold text-on-surface block cursor-pointer" htmlFor="sec_4">
                  4. Data Residency &amp; Tokenization Architecture (EU, US, APAC)
                </label>
<p className="font-body-sm text-secondary mt-1">Include technical architecture diagram showing vault token isolation.</p>
</div>
</div>
</div>
{/*  Section 5  */}
<div className="p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" id="sec_5" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs font-bold">H2</span>
<span className="font-label-xs text-secondary font-medium">Est. 400 words</span>
</div>
<label className="font-title text-title font-semibold text-on-surface block cursor-pointer" htmlFor="sec_5">
                  5. Implementation Checklist for High-Scale SaaS Platforms
                </label>
<p className="font-body-sm text-secondary mt-1">Actionable step-by-step checklist formatted for fast developer consumption.</p>
</div>
</div>
</div>
</div>
</div>
{/*  6. SERP Competitor Benchmarks (Mini Table)  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">SERP Top Competitor Benchmarks</h2>
<p className="font-body-sm text-secondary">Real-time metrics for existing Google top positions</p>
</div>
<span className="px-3 py-1 rounded-full bg-surface-container text-secondary font-label-xs font-bold">Live SERP Feed</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-xs uppercase">
<th className="py-3 px-4 rounded-l-lg">Rank &amp; Rival</th>
<th className="py-3 px-4">Content Length</th>
<th className="py-3 px-4">Domain Rating</th>
<th className="py-3 px-4">Ref. Domains</th>
<th className="py-3 px-4 rounded-r-lg">Content Strength</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-on-surface">
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3.5 px-4 font-semibold flex items-center gap-2.5">
<span className="w-6 h-6 rounded-md bg-secondary-container text-on-secondary-fixed font-bold flex items-center justify-center font-label-xs">#1</span>
<span>Chargebee</span>
</td>
<td className="py-3.5 px-4 text-secondary">2,800 words</td>
<td className="py-3.5 px-4 font-semibold">DR 84</td>
<td className="py-3.5 px-4 text-secondary">18 Backlinks</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs font-medium">Authoritative</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3.5 px-4 font-semibold flex items-center gap-2.5">
<span className="w-6 h-6 rounded-md bg-secondary-container text-on-secondary-fixed font-bold flex items-center justify-center font-label-xs">#2</span>
<span>Paddle</span>
</td>
<td className="py-3.5 px-4 text-secondary">2,200 words</td>
<td className="py-3.5 px-4 font-semibold">DR 81</td>
<td className="py-3.5 px-4 text-secondary">12 Backlinks</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs font-medium">MoR Focused</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3.5 px-4 font-semibold flex items-center gap-2.5">
<span className="w-6 h-6 rounded-md bg-secondary-container text-on-secondary-fixed font-bold flex items-center justify-center font-label-xs">#4</span>
<span>Recurly</span>
</td>
<td className="py-3.5 px-4 text-secondary">1,900 words</td>
<td className="py-3.5 px-4 font-semibold">DR 79</td>
<td className="py-3.5 px-4 text-secondary">9 Backlinks</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-xs font-semibold">Thin Content Gap</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Right Column: Semantic Entities & Linking Architecture (4 cols)  */}
<div className="lg:col-span-4 space-y-6">
{/*  4. Semantic Entities & Keywords to Include  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">bubble_chart</span>
<h3 className="font-title text-title font-bold text-on-surface">Semantic Entities</h3>
</div>
<span className="font-label-xs text-secondary font-semibold">NLP Targets</span>
</div>
<p className="font-body-sm text-secondary mb-4">
          Include these natural language entities with indicated frequency targets for maximum topical authority:
        </p>
<div className="flex flex-wrap gap-2.5">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md font-medium">
<span>SCA exemptions</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-secondary text-[11px] font-bold">4x</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md font-medium">
<span>tokenized customer credentials</span>
<span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-fixed text-[11px] font-bold">6x</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md font-medium">
<span>dunning schedule</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-secondary text-[11px] font-bold">3x</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md font-medium">
<span>economic nexus</span>
<span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-fixed text-[11px] font-bold">5x</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md font-medium">
<span>automated tax filing</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-secondary text-[11px] font-bold">4x</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md font-medium">
<span>chargeback ratio</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-secondary text-[11px] font-bold">2x</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md font-medium">
<span>ISO/IEC 27001</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-secondary text-[11px] font-bold">3x</span>
</div>
</div>
</div>
{/*  5. Recommended Internal Linking Architecture  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">hub</span>
<h3 className="font-title text-title font-bold text-on-surface">Internal Link Graph</h3>
</div>
<span className="material-symbols-outlined text-secondary text-sm">link</span>
</div>
{/*  Inbound Links  */}
<div className="space-y-3 mb-5">
<div className="flex items-center justify-between">
<span className="font-label-xs uppercase font-bold text-secondary tracking-wider">Inbound Links (Receive Equity)</span>
<span className="font-label-xs text-secondary">3 Sources</span>
</div>
<div className="space-y-2 font-body-sm">
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
<span className="font-mono text-[12px] text-on-surface">/docs/billing/tax</span>
<span className="material-symbols-outlined text-[16px] text-secondary">arrow_downward</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
<span className="font-mono text-[12px] text-on-surface">/solutions/saas</span>
<span className="material-symbols-outlined text-[16px] text-secondary">arrow_downward</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
<span className="font-mono text-[12px] text-on-surface">/pricing</span>
<span className="material-symbols-outlined text-[16px] text-secondary">arrow_downward</span>
</div>
</div>
</div>
{/*  Outbound Links  */}
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="font-label-xs uppercase font-bold text-secondary tracking-wider">Outbound Links (Pass Topical Signals)</span>
<span className="font-label-xs text-secondary">2 Targets</span>
</div>
<div className="space-y-2 font-body-sm">
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
<span className="font-mono text-[12px] text-on-surface">/docs/security/pci-compliance</span>
<span className="material-symbols-outlined text-[16px] text-secondary">arrow_upward</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
<span className="font-mono text-[12px] text-on-surface">/radar/fraud-prevention</span>
<span className="material-symbols-outlined text-[16px] text-secondary">arrow_upward</span>
</div>
</div>
</div>
</div>
{/*  Editorial Notes & Guidance  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
<h3 className="font-title text-title font-bold text-on-surface mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">rate_review</span>
          Voice &amp; Quality Mandate
        </h3>
<ul className="space-y-2.5 font-body-sm text-secondary">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
<span>Tone: Authoritative engineering precision, free of marketing jargon or hyperbole.</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
<span>Code snippets: Provide modern Node.js SDK and cURL examples for webhooks.</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
<span>Legal disclaimer: Clearly note this document is architectural guidance, not statutory counsel.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</main>
  )
}