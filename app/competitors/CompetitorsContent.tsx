"use client";
export function CompetitorsContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full pb-space-2xl space-y-space-xl">
{/*  Top Command & Action Bar  */}
<section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
<div className="flex flex-col space-y-space-xs">
{/*  Breadcrumb Navigation  */}
<nav className="flex items-center gap-space-xs text-secondary">
<span className="font-label-md text-label-md hover:text-on-surface transition-colors cursor-pointer">Projects</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-label-md text-label-md font-semibold text-secondary">stripe.com</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-label-md text-label-md">Intelligence &amp; Links</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Competitors</span>
</nav>
{/*  Title & Context  */}
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Competitor Intelligence &amp; Market Share of Voice</h1>
<p className="font-body-md text-body-md text-secondary max-w-3xl">
        Track algorithmic displacement, SERP share cannibalization, and ranking volatility across tier-1 payment infrastructure rivals in real-time.
      </p>
</div>
{/*  Actions  */}
<div className="flex flex-wrap items-center gap-space-sm pt-2 lg:pt-0">
<button className="flex items-center gap-space-xs px- space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-secondary transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px]">download</span>
<span className="font-label-md text-label-md font-semibold">Export Market Map (CSV)</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">radar</span>
<span className="font-label-md text-label-md font-semibold">Run Competitive Gap Scan</span>
</button>
<button className="flex items-center gap-space-xs px-space-lg py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-md hover:opacity-95 transition-all">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Add Competitor Domain</span>
</button>
</div>
</section>
{/*  Metric Overview Cards  */}
<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/*  Card 1: Tracked Competitors  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col space-y-space-xs">
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-bold">Tracked Competitors</span>
<span className="font-metric-stat text-metric-stat text-on-surface">6 Active</span>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">corporate_fare</span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex flex-col space-y-space-xs">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-semibold">Adyen</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-semibold">Checkout.com</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-semibold">Square</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-semibold">+3 more</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Full API &amp; checkout benchmark cohort</span>
</div>
</div>
{/*  Card 2: Stripe Share of Voice  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col space-y-space-xs">
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-bold">Stripe Share of Voice</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-metric-stat text-metric-stat text-on-surface">38.4%</span>
<span className="flex items-center text-primary font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-[16px]">trending_up</span>+2.8%
            </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/50 flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-[20px]">pie_chart</span>
</div>
</div>
<div className="mt-space-md flex flex-col space-y-space-xs">
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden flex">
<div className="bg-secondary h-full" ></div>
<div className="bg-tertiary-container h-full" ></div>
<div className="bg-primary-container h-full" ></div>
<div className="bg-surface-container-high h-full" ></div>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Dominates FinTech &amp; Developer APIs</span>
</div>
</div>
{/*  Card 3: Total Organic Overlap  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col space-y-space-xs">
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-bold">Mutual Keyword Overlap</span>
<span className="font-metric-stat text-metric-stat text-on-surface">14,820</span>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">join_inner</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between text-secondary">
<span className="font-body-sm text-body-sm">Indexable Cohort Pool</span>
<span className="font-label-md text-label-md font-bold text-on-surface">62.1% Shared</span>
</div>
</div>
{/*  Card 4: Net Displacement Risk  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col space-y-space-xs">
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-bold">Net Displacement Risk</span>
<div className="flex items-center gap-space-xs">
<span className="font-metric-stat text-metric-stat text-on-surface">Low</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">Stable</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">security</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between text-secondary">
<span className="font-body-sm text-body-sm">Outranking Rivals</span>
<span className="font-label-md text-label-md font-bold text-on-surface">68.2% of KWs</span>
</div>
</div>
</section>
{/*  SERP Visibility & Share of Voice Matrix Section  */}
<section className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col space-y-space-xs">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Organic Visibility Matrix &amp; Trajectory</h2>
<span className="material-symbols-outlined text-secondary text-[18px] cursor-pointer" title="Traffic volume vs ranking breadth distribution">info</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Historical SERP real-estate footprint and ranking market-share progression</p>
</div>
{/*  Domain Badges and Time Filter Toggle  */}
<div className="flex flex-wrap items-center gap-space-md">
<div className="flex items-center gap-space-xs bg-surface-container-low p-1 rounded-xl">
<label className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-lowest shadow-xs cursor-pointer">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-label-xs text-label-xs font-bold text-on-surface">stripe.com</span>
</label>
<label className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg cursor-pointer hover:bg-surface-container">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">adyen.com</span>
</label>
<label className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg cursor-pointer hover:bg-surface-container">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">checkout.com</span>
</label>
<label className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg cursor-pointer hover:bg-surface-container">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">braintreegateway.com</span>
</label>
</div>
<div className="flex items-center bg-surface-container p-1 rounded-xl">
<button className="px-space-sm py-1 rounded-lg font-label-xs text-label-xs text-secondary hover:text-on-surface">Last 30D</button>
<button className="px-space-sm py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs font-bold shadow-xs">Last 90D</button>
<button className="px-space-sm py-1 rounded-lg font-label-xs text-label-xs text-secondary hover:text-on-surface">1 Year</button>
</div>
</div>
</div>
{/*  Visual Chart Representation (Inline SVG Scale Matrix)  */}
<div className="relative w-full h-72 bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between overflow-hidden">
{/*  Background subtle grid lines  */}
<div className="absolute inset-0 flex flex-col justify-between p-space-md pointer-events-none opacity-40">
<div className="w-full h-px bg-surface-container-high"></div>
<div className="w-full h-px bg-surface-container-high"></div>
<div className="w-full h-px bg-surface-container-high"></div>
<div className="w-full h-px bg-surface-container-high"></div>
</div>
{/*  Trend Lines & Bubble Chart Overlay  */}
<svg className="absolute inset-0 w-full h-full p-space-md overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
<defs>
<linearGradient id="stripeGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#456085" stopOpacity="0.18"></stop>
<stop offset="100%" stopColor="#456085" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
{/*  Stripe Fill & Path  */}
<polygon fill="url(#stripeGrad)" points="0,240 120,210 240,215 360,170 500,165 650,130 800,120 1000,90 1000,290 0,290"></polygon>
<path d="M0,240 Q120,210 240,215 T500,165 T800,120 T1000,90" fill="none" stroke="#456085" strokeLinecap="round" strokeWidth="3.5"></path>
{/*  Adyen Curve  */}
<path d="M0,260 Q130,250 250,230 T520,210 T780,185 T1000,160" fill="none" stroke="#f26a4b" strokeDasharray="4 4" strokeWidth="2.5"></path>
{/*  Checkout.com Curve  */}
<path d="M0,275 Q150,260 300,250 T600,230 T850,215 T1000,200" fill="none" stroke="#3a6378" strokeWidth="2"></path>
{/*  Braintree Curve  */}
<path d="M0,250 Q160,265 320,260 T620,250 T820,245 T1000,255" fill="none" stroke="#adc8f3" strokeWidth="1.8"></path>
{/*  Key SERP Displacement Markers  */}
<circle cx="650" cy="130" fill="#456085" r="5" stroke="#ffffff" strokeWidth="2"></circle>
<circle cx="1000" cy="90" fill="#456085" r="6" stroke="#ffffff" strokeWidth="2.5"></circle>
<circle cx="780" cy="185" fill="#f26a4b" r="4.5" stroke="#ffffff" strokeWidth="2"></circle>
</svg>
{/*  DynamicSERP Point Tag Overlay  */}
<div className="relative z-10 flex justify-between text-secondary font-label-xs text-label-xs">
<span>High Organic Yield (5M+ Mo. Visits)</span>
<span className="flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded-md shadow-xs text-on-surface font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Stripe Global SOV: 38.4%
        </span>
</div>
<div className="relative z-10 flex justify-between text-secondary font-label-xs text-label-xs">
<span>May 1</span>
<span>Jun 1</span>
<span>Jul 1</span>
<span>Aug 1</span>
<span>Current (Aug 24)</span>
</div>
</div>
{/*  Quick Matrix Micro KPIs  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
<div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col">
<span className="font-label-xs text-label-xs text-secondary">Organic Keyword Reach</span>
<span className="font-title text-title font-bold text-on-surface">192.4k URLs</span>
<span className="font-label-xs text-label-xs text-primary font-semibold mt-0.5">+4.2% vs Q2</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col">
<span className="font-label-xs text-label-xs text-secondary">Shared Core Intent Terms</span>
<span className="font-title text-title font-bold text-on-surface">3,490 Queries</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold mt-0.5">High Intent Pool</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col">
<span className="font-label-xs text-label-xs text-secondary">SERP Top 3 Real Estate</span>
<span className="font-title text-title font-bold text-on-surface">5,810 Positions</span>
<span className="font-label-xs text-label-xs text-primary font-semibold mt-0.5">Stripe leads (+640 vs rivals)</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col">
<span className="font-label-xs text-label-xs text-secondary">Estimated Traffic Value</span>
<span className="font-title text-title font-bold text-on-surface">$12.4M / Mo</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold mt-0.5">PPC Equivalent Yield</span>
</div>
</div>
</section>
{/*  Deep Competitor Comparison Table  */}
<section className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col">
{/*  Table Controls Header  */}
<div className="p-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-lowest">
<div className="flex items-center gap-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Benchmarked Domain Roster</h3>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-secondary font-label-xs text-label-xs font-bold">6 Domains</span>
</div>
<div className="flex items-center gap-space-xs">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-2.5 text-secondary text-[18px]">search</span>
<input className="pl-8 pr-3 py-1.5 rounded-lg bg-surface-container-low text-body-sm font-body-sm text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Filter rival domains..." type="text"/>
</div>
<button className="p-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-secondary">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
</div>
</div>
{/*  Data Table  */}
<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-3 px-space-lg">Domain &amp; Tier</th>
<th className="py-3 px-space-md">Visibility Score</th>
<th className="py-3 px-space-md">Overlap / Shared KWs</th>
<th className="py-3 px-space-md">Top 3 Mutual</th>
<th className="py-3 px-space-md">Outranks Stripe</th>
<th className="py-3 px-space-md">Est. Monthly Value</th>
<th className="py-3 px-space-md">Threat Profile</th>
<th className="py-3 px-space-lg text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-transparent font-body-md text-body-md text-on-surface">
{/*  Row 1: Adyen  */}
<tr className="hover:bg-surface transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-title text-title text-primary font-bold">
                  A
                </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold">adyen.com</span>
<span className="material-symbols-outlined text-secondary text-[14px]">open_in_new</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Tier 1 Direct Rival</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-1 font-title text-title font-bold text-on-surface">
<span>74.2%</span>
<span className="material-symbols-outlined text-primary text-[16px]">arrow_drop_up</span>
<span className="font-label-xs text-label-xs text-primary font-semibold">+1.4%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">High momentum</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-title text-title font-semibold text-on-surface">4,210 KWs</span>
<span className="font-label-xs text-label-xs text-secondary">78.4% overlap index</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1 font-semibold text-on-surface">
<span>312 KWs</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[14px]">warning</span>
                84 Core Terms
              </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-title text-title font-semibold text-on-surface">$4.2M / mo</span>
<span className="font-label-xs text-label-xs text-secondary">1.2M visits</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2.5 py-1 rounded-full bg-error/10 text-error font-label-xs text-label-xs font-bold">Critical</span>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold transition-colors">
                  Compare
                </button>
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 2: Checkout.com  */}
<tr className="hover:bg-surface transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-title text-title text-tertiary font-bold">
                  C
                </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold">checkout.com</span>
<span className="material-symbols-outlined text-secondary text-[14px]">open_in_new</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Tier 1 Enterprise</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-1 font-title text-title font-bold text-on-surface">
<span>61.8%</span>
<span className="material-symbols-outlined text-secondary text-[16px]">arrow_drop_down</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold">-0.8%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Trailing technical debt</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-title text-title font-semibold text-on-surface">3,650 KWs</span>
<span className="font-label-xs text-label-xs text-secondary">64.1% overlap index</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1 font-semibold text-on-surface">
<span>198 KWs</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-secondary-container font-label-xs text-label-xs font-bold">
                42 Terms
              </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-title text-title font-semibold text-on-surface">$2.8M / mo</span>
<span className="font-label-xs text-label-xs text-secondary">720k visits</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-xs text-label-xs font-bold">High</span>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold transition-colors">
                  Compare
                </button>
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: Braintree  */}
<tr className="hover:bg-surface transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-title text-title text-secondary font-bold">
                  B
                </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold">braintreegateway.com</span>
<span className="material-symbols-outlined text-secondary text-[14px]">open_in_new</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Tier 2 Subsidized</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-1 font-title text-title font-bold text-on-surface">
<span>52.4%</span>
<span className="material-symbols-outlined text-secondary text-[16px]">horizontal_rule</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold">0.0%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Stagnant</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-title text-title font-semibold text-on-surface">2,840 KWs</span>
<span className="font-label-xs text-label-xs text-secondary">51.2% overlap index</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1 font-semibold text-on-surface">
<span>144 KWs</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold">
                19 Terms
              </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-title text-title font-semibold text-on-surface">$1.9M / mo</span>
<span className="font-label-xs text-label-xs text-secondary">490k visits</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">Moderate</span>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold transition-colors">
                  Compare
                </button>
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: Square (squareup.com)  */}
<tr className="hover:bg-surface transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-title text-title text-on-surface font-bold">
                  S
                </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold">squareup.com</span>
<span className="material-symbols-outlined text-secondary text-[14px]">open_in_new</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Tier 2 POS &amp; SMB</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-1 font-title text-title font-bold text-on-surface">
<span>68.1%</span>
<span className="material-symbols-outlined text-secondary text-[16px]">arrow_drop_down</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold">-1.1%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Declining developer terms</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-title text-title font-semibold text-on-surface">2,410 KWs</span>
<span className="font-label-xs text-label-xs text-secondary">42.8% overlap index</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1 font-semibold text-on-surface">
<span>210 KWs</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold">
                27 Terms
              </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-title text-title font-semibold text-on-surface">$3.4M / mo</span>
<span className="font-label-xs text-label-xs text-secondary">980k visits</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">Moderate</span>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold transition-colors">
                  Compare
                </button>
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Footer / Pagination  */}
<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm text-secondary font-label-xs text-label-xs">
<span>Displaying 4 of 6 tracked enterprise rivals</span>
<div className="flex items-center gap-1">
<button className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-semibold shadow-xs">1</button>
<button className="px-2.5 py-1 rounded-md hover:bg-surface-container text-secondary">2</button>
<span className="material-symbols-outlined text-[16px] cursor-pointer">chevron_right</span>
</div>
</div>
</section>
{/*  Bottom Strategic Row: Competitive Threats & AI Copilot Opportunity Radar  */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
{/*  Card 1: Top Movements & Threat Feed  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col space-y-space-md justify-between">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Top Competitive Threat Events</h3>
</div>
<span className="font-label-xs text-label-xs text-secondary uppercase font-bold tracking-wider">Last 7 Days</span>
</div>
{/*  Threat Timeline Items  */}
<div className="flex flex-col space-y-space-sm">
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
<div className="p-2 rounded-lg bg-primary-fixed text-primary font-bold">
<span className="material-symbols-outlined text-[18px]">north_east</span>
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-title text-title text-on-surface font-semibold">Adyen captured Position #2</span>
<span className="font-label-xs text-label-xs text-secondary">2 days ago</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">
              Climbed +4 positions on <strong className="text-on-surface">"cross-border payment gateway"</strong> displacing Stripe's secondary docs subpage.
            </p>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
<div className="p-2 rounded-lg bg-surface-container-high text-secondary font-bold">
<span className="material-symbols-outlined text-[18px]">post_add</span>
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-title text-title text-on-surface font-semibold">Checkout.com Content Cluster Expansion</span>
<span className="font-label-xs text-label-xs text-secondary">4 days ago</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">
              Published 18 technical programmatic landing pages targeting <strong className="text-on-surface">"merchant account api integrations"</strong>.
            </p>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
<div className="p-2 rounded-lg bg-secondary-container text-on-secondary-container font-bold">
<span className="material-symbols-outlined text-[18px]">swap_horiz</span>
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-title text-title text-on-surface font-semibold">Braintree Canonicals Repointed</span>
<span className="font-label-xs text-label-xs text-secondary">5 days ago</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">
              Consolidated 12 recurring billing guides onto a single legacy domain root to concentrate backlink equity.
            </p>
</div>
</div>
</div>
<div className="pt-space-xs flex justify-end">
<a className="font-label-md text-label-md font-semibold text-secondary hover:text-on-surface flex items-center gap-1 transition-colors" href="#">
<span>View all 34 displacement triggers</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
{/*  Card 2: AI Copilot Opportunity Radar  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between space-y-space-md relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">auto_awesome</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">AI Copilot Strategic Radar</h3>
<span className="font-label-xs text-label-xs text-secondary">Algorithmic SERP Vulnerability Detected</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">98% Confidence</span>
</div>
{/*  Strategic Briefing Content  */}
<div className="p-space-md rounded-xl bg-surface-container-low space-y-space-sm">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-bold">Opportunity Target</span>
<span className="font-label-md text-label-md font-bold text-on-surface">checkout.com /docs/recurring-billing</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
          Checkout.com experienced a sudden <strong>-6 position drop across 14 high-converting billing queries</strong> following their latest migration, caused by a 301 redirect chain latency spike (&gt;820ms).
        </p>
<div className="p-space-sm rounded-lg bg-surface-container-lowest space-y-space-xs">
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs">
<span>Potential SERP Volume Capture:</span>
<span className="font-bold text-on-surface">42,000 Mo. Searches</span>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs">
<span>Suggested Action:</span>
<span className="font-bold text-primary">Deploy Counter-Strategy Brief &amp; Update Schema</span>
</div>
</div>
</div>
{/*  Action Button  */}
<div className="flex items-center justify-between gap-space-md pt-space-xs">
<span className="font-body-sm text-body-sm text-secondary">Estimated setup: 5 min deployment</span>
<button className="flex items-center gap-space-xs px-space-lg py-2.5 rounded-xl bg-primary-container hover:bg-primary-container/90 text-on-primary font-label-md text-label-md font-semibold shadow-md transition-all">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Deploy Counter-Strategy Brief</span>
</button>
</div>
</div>
</section>
</div>
</main>
  )
}