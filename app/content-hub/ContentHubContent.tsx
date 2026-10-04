"use client";
export function ContentHubContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full pb-space-2xl">
{/*  Context Breadcrumbs & Meta Bar  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md py-space-md">
<div className="flex items-center gap-space-xs flex-wrap">
<a className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors" href="#">Projects</a>
<span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span>
<span className="font-label-md text-label-md text-secondary">stripe.com</span>
<span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span>
<span className="font-label-md text-label-md text-secondary">Content &amp; On-Page</span>
<span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Content Hub</span>
<span className="ml-space-xs px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold uppercase tracking-wider">Production Sync Active</span>
</div>
{/*  Live Synced Pill  */}
<div className="flex items-center gap-space-xs text-secondary bg-surface-container-low px-3 py-1.5 rounded-lg shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-xs text-label-xs text-secondary font-medium">Last automated crawl: 14 mins ago • Ghost v5.72 + Contentful</span>
</div>
</div>
{/*  Header Section with Distinct Visual Cadence  */}
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg mb-space-xl">
<div className="flex flex-col max-w-3xl">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-xs text-label-xs text-secondary font-bold tracking-widest uppercase">WORKSPACE INTELLIGENCE</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span className="font-label-xs text-label-xs text-primary-container font-semibold">v3.4 Editorial Engine</span>
</div>
<h1 className="font-display text-display text-on-surface tracking-tight font-bold">Content Hub &amp; Editorial Velocity</h1>
<p className="font-body-lg text-body-lg text-secondary mt-1 max-w-2xl">
        Manage topic clusters, monitor content decay, track publication ROI, and orchestrate search-optimized content workflows.
      </p>
</div>
{/*  Action Group  */}
<div className="flex items-center flex-wrap gap-space-sm">
<button className="flex items-center gap-space-xs px-4 py-2.5 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md font-semibold shadow-sm hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-[18px]">sync</span>
<span>Sync CMS</span>
</button>
<button className="flex items-center gap-space-xs px-4 py-2.5 rounded-lg bg-surface-container text-on-secondary-container font-label-md text-label-md font-semibold shadow-sm hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-[18px]">post_add</span>
<span>+ Create New Content Brief</span>
</button>
<button className="flex items-center gap-space-xs px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-[0_4px_14px_rgba(242,106,75,0.32)] hover:opacity-95 transition-all">
<span className="material-symbols-outlined text-[18px]">auto_awesome</span>
<span>+ Draft New Article with AI</span>
</button>
</div>
</div>
{/*  Top Metric KPIs (4 Cards)  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">
{/*  Card 1: Total Content Assets  */}
<div className="relative overflow-hidden bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary font-medium">Total Content Assets</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
</div>
</div>
<div>
<div className="font-metric-stat text-metric-stat text-on-surface">428</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Published Articles</span>
<span className="w-1 h-1 rounded-full bg-surface-variant"></span>
<span className="font-label-xs text-label-xs text-secondary">18 in Pipeline</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary-container h-full rounded-full" ></div>
</div>
</div>
</div>
{/*  Card 2: Content Health Index  */}
<div className="relative overflow-hidden bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary font-medium">Content Health Index</span>
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat text-on-surface">86.4</span>
<span className="font-body-sm text-body-sm text-secondary">/ 100</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[12px]">trending_up</span>
            +3.2 pts
          </span>
<span className="font-body-sm text-body-sm text-secondary">this sprint</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary">94% Core Web Vitals Pass</span>
<span className="font-label-xs text-label-xs text-secondary">Grade A</span>
</div>
</div>
{/*  Card 3: At-Risk / Decaying URLs  */}
<div className="relative overflow-hidden bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary font-medium">At-Risk / Decaying URLs</span>
<div className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[18px]">warning</span>
</div>
</div>
<div>
<div className="font-metric-stat text-metric-stat text-error">14</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Pages Losing Traffic</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">
            -18.2% 90d
          </span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between">
<span className="font-label-xs text-label-xs text-primary-container font-semibold cursor-pointer hover:underline">Review 4 Urgent Refreshes →</span>
</div>
</div>
{/*  Card 4: Organic Traffic Contribution  */}
<div className="relative overflow-hidden bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary font-medium">Organic Traffic Contribution</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</div>
</div>
<div>
<div className="font-metric-stat text-metric-stat text-on-surface">284.5K</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Visits / month</span>
<span className="w-1 h-1 rounded-full bg-surface-variant"></span>
<span className="font-label-xs text-label-xs text-secondary">$740K Value</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary">+12.4% vs prev period</span>
<span className="material-symbols-outlined text-[16px] text-secondary">insights</span>
</div>
</div>
</div>
{/*  AI Content Intelligence Diagnostic Banner (Heroic Contrast Component)  */}
<div className="relative overflow-hidden bg-surface-container-lowest rounded-2xl p-space-xl mb-space-xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_8px_20px_-4px_rgba(35,63,99,0.08)]">
{/*  Background subtle gradient aura  */}
<div className="absolute -right-24 -top-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-sm max-w-4xl">
{/*  Diagnostic Micro Tag  */}
<div className="flex items-center gap-space-xs">
<span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/15 text-primary font-label-xs text-label-xs font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">psychology</span>
            AI Topic Cluster Diagnostic
          </span>
<span className="text-secondary font-label-xs text-label-xs">•</span>
<span className="font-label-sm text-label-md text-on-surface font-semibold">Cluster: Core Payment Orchestration</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">High Priority</span>
</div>
{/*  Diagnostic Grid breakdown  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-xs">
<div className="bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center gap-1.5 text-error font-label-xs text-label-xs font-bold uppercase tracking-wide mb-1">
<span className="material-symbols-outlined text-[14px]">history</span>
              What Happened?
            </div>
<p className="font-body-sm text-body-sm text-on-surface leading-snug">
              Competitor content refresh on <strong className="font-semibold text-on-surface">"Embedded Finance"</strong> eroded Stripe's position from <span className="font-semibold text-secondary">#2 to #5</span>.
            </p>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center gap-1.5 text-on-secondary-container font-label-xs text-label-xs font-bold uppercase tracking-wide mb-1">
<span className="material-symbols-outlined text-[14px]">warning_amber</span>
              Why It Matters
            </div>
<p className="font-body-sm text-body-sm text-on-surface leading-snug">
              Approximately <strong className="font-semibold text-on-surface">14,000 monthly</strong> high-intent organic searchers are entering rival checkout and enterprise funnels.
            </p>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center gap-1.5 text-primary font-label-xs text-label-xs font-bold uppercase tracking-wide mb-1">
<span className="material-symbols-outlined text-[14px]">auto_fix_high</span>
              Recommended Action
            </div>
<p className="font-body-sm text-body-sm text-on-surface leading-snug">
              Update <code className="px-1 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">/solutions/embedded-finance</code> with 4 missing subtopics &amp; 3 interactive code examples.
            </p>
</div>
</div>
</div>
{/*  Action Panel  */}
<div className="flex flex-col sm:flex-row xl:flex-col gap-space-sm w-full xl:w-auto flex-shrink-0">
<button className="flex items-center justify-center gap-space-xs px-5 py-3 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(242,106,75,0.32)] hover:opacity-95 transition-all">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
<span>Open AI Content Brief</span>
</button>
<button className="flex items-center justify-center gap-space-xs px-5 py-3 rounded-xl bg-surface-container text-on-secondary-container font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-[18px]">troubleshoot</span>
<span>View Topic Gap (12 terms)</span>
</button>
</div>
</div>
</div>
{/*  Topic Clusters Health & Coverage Section  */}
<div className="mb-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-md gap-2">
<div>
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-widest">TAXONOMY ARCHITECTURE</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">3 Active Clusters</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">Topic Clusters Health &amp; Coverage</h2>
</div>
<a className="font-label-md text-label-md text-secondary hover:text-on-surface font-semibold flex items-center gap-1" href="#">
<span>Manage Cluster Architecture</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
{/*  Cluster Cards Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
{/*  Cluster 1: Developer API Documentation  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between hover:shadow-lg transition-shadow">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">
<span className="material-symbols-outlined text-[20px]">code</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Developer API Documentation</h3>
<span className="font-label-xs text-label-xs text-secondary">84 Managed Articles • /docs/api</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-xs text-label-xs font-bold">Optimal</span>
</div>
{/*  Cluster Metrics Bars  */}
<div className="space-y-space-sm mb-space-md">
<div>
<div className="flex justify-between items-center text-label-xs font-label-xs mb-1">
<span className="text-secondary font-medium">Health Index</span>
<span className="font-bold text-on-surface">94%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-tertiary-container h-full rounded-full" ></div>
</div>
</div>
<div>
<div className="flex justify-between items-center text-label-xs font-label-xs mb-1">
<span className="text-secondary font-medium">SERP Topic Coverage</span>
<span className="font-bold text-on-surface">98%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
</div>
</div>
</div>
<div className="pt-space-sm border-t border-transparent bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">group</span>
<span className="font-label-sm text-label-md text-on-surface font-semibold">142K Visits/mo</span>
</div>
<button className="font-label-xs text-label-xs font-bold text-secondary hover:text-on-surface uppercase tracking-wider flex items-center gap-1">
<span>Explore (84)</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
</button>
</div>
</div>
{/*  Cluster 2: Payment Gateway & Billing (Decay Warning)  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between hover:shadow-lg transition-shadow">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-error-container flex items-center justify-center text-error font-bold">
<span className="material-symbols-outlined text-[20px]">credit_card</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Payment Gateway &amp; Billing</h3>
<span className="font-label-xs text-label-xs text-secondary">48 Managed Articles • /payments</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">Decay Warning</span>
</div>
{/*  Cluster Metrics Bars  */}
<div className="space-y-space-sm mb-space-md">
<div>
<div className="flex justify-between items-center text-label-xs font-label-xs mb-1">
<span className="text-secondary font-medium">Health Index</span>
<span className="font-bold text-error">78%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-primary-container h-full rounded-full" ></div>
</div>
</div>
<div>
<div className="flex justify-between items-center text-label-xs font-label-xs mb-1">
<span className="text-secondary font-medium">SERP Topic Coverage</span>
<span className="font-bold text-on-surface">82%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
</div>
</div>
</div>
<div className="pt-space-sm border-t border-transparent bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">group</span>
<span className="font-label-sm text-label-md text-on-surface font-semibold">89K Visits/mo</span>
</div>
<button className="font-label-xs text-label-xs font-bold text-primary hover:text-on-primary-fixed-variant uppercase tracking-wider flex items-center gap-1">
<span>Fix 4 Decays</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
{/*  Cluster 3: Fintech Compliance & Tax  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between hover:shadow-lg transition-shadow">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary font-bold">
<span className="material-symbols-outlined text-[20px]">policy</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Fintech Compliance &amp; Tax</h3>
<span className="font-label-xs text-label-xs text-secondary">32 Managed Articles • /tax</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">Stable</span>
</div>
{/*  Cluster Metrics Bars  */}
<div className="space-y-space-sm mb-space-md">
<div>
<div className="flex justify-between items-center text-label-xs font-label-xs mb-1">
<span className="text-secondary font-medium">Health Index</span>
<span className="font-bold text-on-surface">91%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-secondary-container h-full rounded-full" ></div>
</div>
</div>
<div>
<div className="flex justify-between items-center text-label-xs font-label-xs mb-1">
<span className="text-secondary font-medium">SERP Topic Coverage</span>
<span className="font-bold text-on-surface">74%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
</div>
</div>
</div>
<div className="pt-space-sm border-t border-transparent bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">group</span>
<span className="font-label-sm text-label-md text-on-surface font-semibold">38K Visits/mo</span>
</div>
<button className="font-label-xs text-label-xs font-bold text-secondary hover:text-on-surface uppercase tracking-wider flex items-center gap-1">
<span>Explore (32)</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
{/*  Main Content Workspace Table  */}
<div className="bg-surface-container-lowest rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden mb-space-xl">
{/*  Table Header & Controls  */}
<div className="p-space-lg flex flex-col xl:flex-row xl:items-center justify-between gap-space-md bg-surface-container-low/60">
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Managed Content Articles &amp; Velocity</h2>
<span className="font-body-sm text-body-sm text-secondary">Unified editorial lifecycle, rank stability, and AI automated refresh pipeline</span>
</div>
{/*  Search & Filters Toolbar  */}
<div className="flex items-center gap-space-sm flex-wrap">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span>
<input className="w-64 pl-9 pr-4 py-2 bg-surface-container-lowest rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-container shadow-sm" placeholder="Filter articles or slugs..." type="text"/>
</div>
<div className="flex items-center gap-1 bg-surface-container p-1 rounded-xl">
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-on-surface shadow-xs">
<span className="material-symbols-outlined text-[18px]">view_list</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]">calendar_view_month</span>
</button>
</div>
<button className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-lowest rounded-xl text-secondary hover:text-on-surface font-label-md text-label-md font-medium shadow-sm">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
<span>Filters</span>
</button>
</div>
</div>
{/*  Filter Tabs (Active navigation pills)  */}
<div className="flex items-center gap-space-xs px-space-lg pt-space-sm overflow-x-auto bg-surface-container-low/30">
<button className="px-4 py-2 rounded-lg bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold whitespace-nowrap shadow-xs">
        All Articles (428)
      </button>
<button className="px-4 py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span>Decaying / Refresh Needed (14)</span>
</button>
<button className="px-4 py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>High Growth (38)</span>
</button>
<button className="px-4 py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md font-medium whitespace-nowrap transition-colors">
        Drafts &amp; Review (18)
      </button>
</div>
{/*  Data Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-3 px-space-lg font-semibold">Title &amp; URL Path</th>
<th className="py-3 px-space-md font-semibold">Target Keyword &amp; Vol</th>
<th className="py-3 px-space-md font-semibold">Rank &amp; Delta</th>
<th className="py-3 px-space-md font-semibold">Decay Score &amp; Trend</th>
<th className="py-3 px-space-md font-semibold">EEAT &amp; Words</th>
<th className="py-3 px-space-lg font-semibold text-right">AI Action</th>
</tr>
</thead>
<tbody className="divide-y divide-transparent font-body-md text-body-md">
{/*  Row 1: Decaying Article (High Attention)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<a className="font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors flex items-center gap-1.5" href="#">
<span>What is Payment Orchestration?</span>
<span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-body-sm text-body-sm text-secondary font-mono mt-0.5">/resources/payment-orchestration-guide</span>
<div className="flex items-center gap-2 mt-1.5">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">Decay Alert: -24% Views</span>
<span className="text-secondary font-label-xs text-label-xs">Updated 142 days ago</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">payment orchestration</span>
<div className="flex items-center gap-1.5 text-secondary font-label-xs text-label-xs mt-0.5">
<span>18.1K /mo</span>
<span>•</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold">KD 68</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<span className="font-metric-stat text-title text-on-surface">#7</span>
<span className="flex items-center text-error font-label-xs text-label-xs font-bold bg-error-container px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-[12px]">arrow_downward</span>
                  4
                </span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-3">
<div className="w-20">
{/*  Inline SVG Sparkline - Falling  */}
<svg className="w-full h-8 text-error" fill="none" viewBox="0 0 100 30">
<path d="M0 5 L20 8 L40 10 L60 16 L80 24 L100 28" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="100" cy="28" fill="currentColor" r="3"></circle>
</svg>
</div>
<div className="flex flex-col">
<span className="font-label-xs text-label-xs font-bold text-error">Critical</span>
<span className="font-label-xs text-label-xs text-secondary">Loss: 2.1k</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface">88</span>
<span className="font-label-xs text-label-xs text-secondary">/100 EEAT</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">2,840 words</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-sm hover:opacity-95 transition-all">
<span className="material-symbols-outlined text-[16px]">auto_fix_high</span>
<span>Refresh with AI</span>
</button>
</td>
</tr>
{/*  Row 2: Growing Article  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<a className="font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors flex items-center gap-1.5" href="#">
<span>Guide to ACH Direct Debit &amp; Compliance</span>
<span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-body-sm text-body-sm text-secondary font-mono mt-0.5">/resources/ach-transfers-guide</span>
<div className="flex items-center gap-2 mt-1.5">
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">Trending +32%</span>
<span className="text-secondary font-label-xs text-label-xs">Updated 8 days ago</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">ach transfers guide</span>
<div className="flex items-center gap-1.5 text-secondary font-label-xs text-label-xs mt-0.5">
<span>24.5K /mo</span>
<span>•</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold">KD 54</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<span className="font-metric-stat text-title text-on-surface">#3</span>
<span className="flex items-center text-on-tertiary-container font-label-xs text-label-xs font-bold bg-tertiary-fixed px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-[12px]">arrow_upward</span>
                  2
                </span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-3">
<div className="w-20">
{/*  Inline SVG Sparkline - Rising  */}
<svg className="w-full h-8 text-tertiary" fill="none" viewBox="0 0 100 30">
<path d="M0 26 L20 22 L40 18 L60 14 L80 8 L100 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="100" cy="4" fill="currentColor" r="3"></circle>
</svg>
</div>
<div className="flex flex-col">
<span className="font-label-xs text-label-xs font-bold text-tertiary">Strong</span>
<span className="font-label-xs text-label-xs text-secondary">Gain: +4.2k</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface">95</span>
<span className="font-label-xs text-label-xs text-secondary">/100 EEAT</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">3,420 words</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-secondary-container font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-[16px]">data_object</span>
<span>Optimize Schema</span>
</button>
</td>
</tr>
{/*  Row 3: Leader / Canonical Stable  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<a className="font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors flex items-center gap-1.5" href="#">
<span>SEPA Direct Debit Integration Architecture</span>
<span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-body-sm text-body-sm text-secondary font-mono mt-0.5">/docs/payments/sepa-debit</span>
<div className="flex items-center gap-2 mt-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-bold">Featured Snippet</span>
<span className="text-secondary font-label-xs text-label-xs">Updated 21 days ago</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">sepa direct debit api</span>
<div className="flex items-center gap-1.5 text-secondary font-label-xs text-label-xs mt-0.5">
<span>12.4K /mo</span>
<span>•</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold">KD 42</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<span className="font-metric-stat text-title text-on-surface">#1</span>
<span className="flex items-center text-secondary font-label-xs text-label-xs font-bold bg-surface-container px-1.5 py-0.5 rounded">
                  =
                </span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-3">
<div className="w-20">
{/*  Inline SVG Sparkline - Stable Flat  */}
<svg className="w-full h-8 text-secondary" fill="none" viewBox="0 0 100 30">
<path d="M0 12 L20 14 L40 11 L60 13 L80 12 L100 12" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="100" cy="12" fill="currentColor" r="3"></circle>
</svg>
</div>
<div className="flex flex-col">
<span className="font-label-xs text-label-xs font-bold text-secondary">Stable</span>
<span className="font-label-xs text-label-xs text-secondary">#1 SERP hold</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface">92</span>
<span className="font-label-xs text-label-xs text-secondary">/100 EEAT</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">1,950 words</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md font-semibold transition-all">
<span className="material-symbols-outlined text-[16px]">edit_note</span>
<span>Edit Brief</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination / Footer  */}
<div className="p-space-md px-space-lg bg-surface-container-low/40 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="font-body-sm text-body-sm text-secondary">
        Showing <span className="font-semibold text-on-surface">1-3</span> of <span className="font-semibold text-on-surface">428</span> articles
      </div>
<div className="flex items-center gap-space-xs">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary font-label-xs text-label-xs font-semibold shadow-xs disabled:opacity-50">Previous</button>
<button className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-xs text-label-xs font-semibold shadow-xs">1</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold shadow-xs">2</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold shadow-xs">3</button>
<span className="text-secondary px-1">...</span>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold shadow-xs">143</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold shadow-xs">Next</button>
</div>
</div>
</div>
{/*  Bottom Insights: Content ROI Breakdown & Editorial Velocity Analysis  */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-space-md">
{/*  ROI Visual Breakdown (2 cols)  */}
<div className="xl:col-span-2 bg-surface-container-lowest p-space-xl rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div>
<div className="flex items-start justify-between mb-space-md">
<div>
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-widest">FINANCIAL IMPACT MATRIX</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">12x ROI</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Content ROI Breakdown</h3>
<p className="font-body-sm text-body-sm text-secondary">Organic traffic value generated per cluster versus dedicated editorial and engineering effort.</p>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">download</span>
<span>Export Financial Model</span>
</button>
</div>
{/*  Comparative Progress / Cluster Values  */}
<div className="space-y-space-md mt-space-lg">
{/*  Developer API Cluster  */}
<div className="bg-surface-container-low p-space-md rounded-xl">
<div className="flex justify-between items-baseline mb-2">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-title text-on-surface font-bold">Developer API Documentation</span>
<span className="font-label-xs text-label-xs text-secondary font-mono">84 pages</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-sm text-title text-on-surface font-bold">$412,000 /mo</span>
<span className="font-label-xs text-label-xs text-tertiary font-bold">Value</span>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-3 overflow-hidden flex">
<div className="bg-tertiary-container h-full"  title="Traffic Value Share"></div>
<div className="bg-secondary-fixed h-full"  title="Production Cost Share"></div>
</div>
<div className="flex justify-between items-center mt-2 text-label-xs font-label-xs text-secondary">
<span>Production Effort: 420 hrs • Cost: $34K</span>
<span className="font-semibold text-tertiary font-label-xs">Net Yield: 12.1x organic payback</span>
</div>
</div>
{/*  Payment Gateway & Billing  */}
<div className="bg-surface-container-low p-space-md rounded-xl">
<div className="flex justify-between items-baseline mb-2">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-title text-on-surface font-bold">Payment Gateway &amp; Billing</span>
<span className="font-label-xs text-label-xs text-secondary font-mono">48 pages</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-sm text-title text-on-surface font-bold">$238,500 /mo</span>
<span className="font-label-xs text-label-xs text-secondary font-bold">Value</span>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-3 overflow-hidden flex">
<div className="bg-secondary h-full"  title="Traffic Value Share"></div>
<div className="bg-primary-container h-full"  title="Production Cost Share"></div>
</div>
<div className="flex justify-between items-center mt-2 text-label-xs font-label-xs text-secondary">
<span>Production Effort: 310 hrs • Cost: $28K</span>
<span className="font-semibold text-secondary font-label-xs">Net Yield: 8.5x organic payback</span>
</div>
</div>
{/*  Fintech Compliance & Tax  */}
<div className="bg-surface-container-low p-space-md rounded-xl">
<div className="flex justify-between items-baseline mb-2">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-title text-on-surface font-bold">Fintech Compliance &amp; Tax</span>
<span className="font-label-xs text-label-xs text-secondary font-mono">32 pages</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-sm text-title text-on-surface font-bold">$89,500 /mo</span>
<span className="font-label-xs text-label-xs text-secondary font-bold">Value</span>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-3 overflow-hidden flex">
<div className="bg-secondary-container h-full"  title="Traffic Value Share"></div>
<div className="bg-surface-container-high h-full"  title="Production Cost Share"></div>
</div>
<div className="flex justify-between items-center mt-2 text-label-xs font-label-xs text-secondary">
<span>Production Effort: 180 hrs • Cost: $16K</span>
<span className="font-semibold text-secondary font-label-xs">Net Yield: 5.6x organic payback</span>
</div>
</div>
</div>
</div>
<div className="mt-space-lg flex items-center justify-between text-secondary font-label-xs text-label-xs pt-space-sm">
<span className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-tertiary-container"></span>
<span>Traffic Value ($ Equivalent)</span>
</span>
<span className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-secondary-fixed"></span>
<span>Editorial Creation &amp; Maintenance Cost</span>
</span>
</div>
</div>
{/*  Editorial Velocity & Sprint Burnup  */}
<div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-widest">EDITORIAL CAPACITY</span>
<span className="material-symbols-outlined text-secondary text-[20px]">speed</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Sprint Velocity &amp; Cadence</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">18 deliverables active across 4 editorial squads</p>
{/*  Velocity KPIs  */}
<div className="grid grid-cols-2 gap-space-sm mt-space-md">
<div className="p-space-sm rounded-xl bg-surface-container-low">
<span className="font-label-xs text-label-xs text-secondary">Avg Production Cycle</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">4.2 Days</div>
<span className="font-label-xs text-label-xs text-tertiary font-semibold">-1.1d vs Q3</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low">
<span className="font-label-xs text-label-xs text-secondary">Time to Index</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">18 Hours</div>
<span className="font-label-xs text-label-xs text-tertiary font-semibold">Google Index API</span>
</div>
</div>
{/*  Progress Pipeline  */}
<div className="mt-space-lg space-y-space-sm">
<div className="flex items-center justify-between text-body-sm text-body-sm">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
              AI Draft Generation
            </span>
<span className="font-semibold text-on-surface">6 articles</span>
</div>
<div className="flex items-center justify-between text-body-sm text-body-sm">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
              SME Fact &amp; EEAT Review
            </span>
<span className="font-semibold text-on-surface">8 articles</span>
</div>
<div className="flex items-center justify-between text-body-sm text-body-sm">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
              Staging &amp; CMS Approval
            </span>
<span className="font-semibold text-on-surface">4 articles</span>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-md">
<button className="w-full py-2.5 rounded-xl bg-surface-container text-on-secondary-container font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
<span>View Editorial Calendar</span>
</button>
</div>
</div>
</div>
</div>
</main>
  )
}