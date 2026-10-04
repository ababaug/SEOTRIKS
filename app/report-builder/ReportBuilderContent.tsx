"use client";
export function ReportBuilderContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">

<div className="flex flex-col w-full">
{/*  Sub-Header Studio Controls  */}
<div className="sticky top-16 z-30 bg-surface/90 backdrop-blur-md px-space-xl py-space-sm mb-space-md shadow-sm">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
{/*  Title & Metadata  */}
<div className="flex items-center gap-space-sm min-w-0">
<div className="p-2 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-lg">description</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-space-xs">
<input className="font-headline-sm text-headline-sm font-bold text-on-surface bg-transparent hover:bg-surface-container-low px-1.5 py-0.5 rounded focus:bg-surface-container-lowest focus:outline-none transition-colors truncate max-w-xl" type="text" value="Stripe Q1 Enterprise Organic Performance &amp; Competitor Benchmark"/>
<span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-on-surface">edit</span>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-xs text-label-xs mt-0.5">
<span className="px-1.5 py-0.5 rounded bg-surface-container font-semibold text-on-secondary-fixed">Draft v2.1</span>
<span>•</span>
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Auto-saved 3m ago
            </span>
<span>•</span>
<span>Created by Marcus Vance</span>
</div>
</div>
</div>
{/*  Mode Switcher Tabs  */}
<div className="flex items-center bg-surface-container-high p-1 rounded-xl">
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold shadow-sm transition-all flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary-container">space_dashboard</span>
<span>Canvas Designer</span>
</button>
<button className="px-space-sm py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md font-medium transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">database</span>
<span>Data Sources</span>
</button>
<button className="px-space-sm py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md font-medium transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">palette</span>
<span>Branding &amp; White-label</span>
</button>
</div>
{/*  Action CTAs  */}
<div className="flex items-center gap-space-xs">
<button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium transition-colors">
<span className="material-symbols-outlined text-[16px] text-secondary">visibility</span>
<span>Preview PDF</span>
</button>
<button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium transition-colors">
<span className="material-symbols-outlined text-[16px] text-secondary">bookmark_border</span>
<span>Save Template</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-primary-container hover:opacity-90 text-on-primary font-label-md text-label-md font-semibold shadow-md transition-all">
<span className="material-symbols-outlined text-[16px]">send</span>
<span>Schedule &amp; Dispatch</span>
</button>
</div>
</div>
</div>
{/*  Studio 3-Column Layout  */}
<div className="grid grid-cols-12 gap-space-lg items-start pb-space-2xl">
{/*  LEFT COLUMN: Widget Palette (~260px)  */}
<div className="col-span-12 xl:col-span-3 2xl:col-span-2 flex flex-col gap-space-md sticky top-36">
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Data Blocks</span>
<span className="font-label-xs text-label-xs bg-surface-container text-secondary px-2 py-0.5 rounded-full font-bold">28 Available</span>
</div>
{/*  Palette Search  */}
<div className="relative flex items-center mb-space-md">
<span className="material-symbols-outlined absolute left-2.5 text-secondary text-base">search</span>
<input className="w-full pl-8 pr-3 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="Search blocks &amp; charts..." type="text"/>
</div>
{/*  Draggable Categories  */}
<div className="flex flex-col gap-space-md max-h-[calc(100vh-270px)] overflow-y-auto pr-1">
{/*  Category 1  */}
<div>
<div className="flex items-center justify-between text-secondary mb-space-xs px-1">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider">Executive &amp; High-Level</span>
<span className="material-symbols-outlined text-xs">expand_less</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">widgets</span>
<span className="font-label-md text-label-md text-on-surface font-medium">KPI Summary Cards</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">psychology</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Executive AI Summary</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">radar</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Health Radar Dial</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
</div>
</div>
{/*  Category 2  */}
<div>
<div className="flex items-center justify-between text-secondary mb-space-xs px-1">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider">Technical SEO</span>
<span className="material-symbols-outlined text-xs">expand_less</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">speed</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Crawl Budget Velocity</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">bolt</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Core Web Vitals (CrUX)</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">http</span>
<span className="font-label-md text-label-md text-on-surface font-medium">HTTP Status Breakdown</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">terminal</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Robots &amp; Schema Log</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
</div>
</div>
{/*  Category 3  */}
<div>
<div className="flex items-center justify-between text-secondary mb-space-xs px-1">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider">Rank &amp; Visibility</span>
<span className="material-symbols-outlined text-xs">expand_less</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">trending_up</span>
<span className="font-label-md text-label-md text-on-surface font-medium">SERP Trajectory Chart</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">swap_vert</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Keyword Gainers/Losers</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">pie_chart</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Share of Voice Donut</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
</div>
</div>
{/*  Category 4  */}
<div>
<div className="flex items-center justify-between text-secondary mb-space-xs px-1">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider">Competitive &amp; Content</span>
<span className="material-symbols-outlined text-xs">expand_less</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">bubble_chart</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Competitor Overlap Venn</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
<div className="group flex items-center justify-between p-2 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-grab active:cursor-grabbing transition-colors" draggable="true">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary group-hover:text-primary-container text-sm">table_chart</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Decaying Content List</span>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 text-sm">drag_indicator</span>
</div>
</div>
</div>
</div>
<div className="mt-space-md p-space-sm bg-surface-container-low rounded-xl">
<div className="flex items-center gap-2 text-secondary mb-1">
<span className="material-symbols-outlined text-sm text-primary-container">lightbulb</span>
<span className="font-label-xs text-label-xs font-bold uppercase">Pro Canvas Tip</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Hold <kbd className="px-1 rounded bg-surface-container font-semibold">Shift</kbd> while dragging to drop widgets side-by-side in custom multi-column grids.</p>
</div>
</div>
</div>
{/*  CENTER COLUMN: Canvas Document Workspace  */}
<div className="col-span-12 xl:col-span-6 2xl:col-span-7 flex flex-col items-center">
{/*  Executive Canvas Sheet  */}
<div className="w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-xl p-space-xl flex flex-col gap-space-lg relative">
{/*  Report Header Block  */}
<div className="group relative p-space-md rounded-xl hover:bg-surface-container-low/40 transition-colors">
<div className="absolute -top-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface px-2 py-0.5 rounded text-label-xs font-label-xs flex items-center gap-1 shadow-md">
<span className="material-symbols-outlined text-xs">drag_indicator</span> Header Configuration
          </div>
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md gap-4">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-on-secondary font-bold font-headline-sm text-headline-sm">
                S
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">Stripe, Inc.</span>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">Enterprise Client</span>
</div>
<span className="font-label-md text-label-md text-secondary">Organic Performance Intelligence &amp; Benchmark Report</span>
</div>
</div>
<div className="flex flex-col md:items-end text-secondary font-label-md text-label-md">
<span className="font-semibold text-on-surface">Reporting Cycle: Q1 2025</span>
<span>Jan 1, 2025 – Mar 31, 2025</span>
<span className="text-label-xs font-label-xs text-secondary/80 mt-0.5">Author: Marcus Vance (SEO Tech Lead)</span>
</div>
</div>
<div className="h-1 w-full bg-gradient-to-r from-primary-container via-secondary to-secondary-container rounded-full"></div>
</div>
{/*  Section 1: Executive KPI Summary (ACTIVE SELECTED WIDGET)  */}
<div className="group relative p-space-md rounded-xl bg-surface-container-low/50 ring-2 ring-primary-container shadow-md transition-all">
{/*  Widget Toolbar Overlay  */}
<div className="absolute -top-3 left-4 bg-primary-container text-on-primary px-2.5 py-0.5 rounded-full font-label-xs text-label-xs font-bold flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[13px]">tune</span>
<span>Section 1: Executive KPI Summary (Selected)</span>
</div>
<div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 rounded bg-surface-container-lowest text-secondary hover:text-on-surface shadow-sm" title="Duplicate">
<span className="material-symbols-outlined text-sm">content_copy</span>
</button>
<button className="p-1 rounded bg-surface-container-lowest text-secondary hover:text-on-surface cursor-grab shadow-sm" title="Drag">
<span className="material-symbols-outlined text-sm">drag_handle</span>
</button>
<button className="p-1 rounded bg-surface-container-lowest text-error hover:bg-error-container shadow-sm" title="Remove">
<span className="material-symbols-outlined text-sm">delete</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm mt-space-xs">
{/*  Card 1  */}
<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Health Score</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold">94</span>
<span className="text-secondary font-label-md text-label-md">/100</span>
</div>
</div>
<div className="flex items-center gap-1 mt-2 text-secondary">
<span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-fixed text-label-xs font-label-xs font-bold">+6 pts</span>
<span className="text-label-xs font-label-xs">vs Q4 2024</span>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Traffic Uplift</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold">+142.8K</span>
</div>
</div>
<div className="flex items-center gap-1 mt-2 text-secondary">
<span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-fixed text-label-xs font-label-xs font-bold">+18.4%</span>
<span className="text-label-xs font-label-xs">Organic sessions</span>
</div>
</div>
{/*  Card 3  */}
<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">ARR Potential</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-metric-stat text-metric-stat text-primary-container font-bold">$420K</span>
</div>
</div>
<div className="flex items-center gap-1 mt-2 text-secondary">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface text-label-xs font-label-xs font-bold">Pipeline</span>
<span className="text-label-xs font-label-xs">Attributed lead gen</span>
</div>
</div>
{/*  Card 4  */}
<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Sprint Velocity</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold">87.5%</span>
</div>
</div>
<div className="flex items-center gap-1 mt-2 text-secondary">
<span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-fixed text-label-xs font-label-xs font-bold">28 / 32</span>
<span className="text-label-xs font-label-xs">Tasks deployed</span>
</div>
</div>
</div>
</div>
{/*  Section 2: AI Synthesized Executive Commentary  */}
<div className="group relative p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="absolute -top-3 left-4 bg-surface-container-highest text-secondary px-2.5 py-0.5 rounded-full font-label-xs text-label-xs font-bold flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[13px] text-primary-container">psychology</span>
<span>Section 2: AI Synthesized Executive Takeaway</span>
</div>
<div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 rounded bg-surface-container-lowest text-secondary hover:text-on-surface shadow-sm">
<span className="material-symbols-outlined text-sm">refresh</span>
</button>
<button className="p-1 rounded bg-surface-container-lowest text-secondary hover:text-on-surface cursor-grab shadow-sm">
<span className="material-symbols-outlined text-sm">drag_handle</span>
</button>
</div>
<div className="mt-2 flex items-start gap-space-sm">
<div className="p-2 rounded-lg bg-surface-container-lowest text-primary-container shadow-sm flex-shrink-0">
<span className="material-symbols-outlined text-lg">auto_awesome</span>
</div>
<div className="flex-1">
<h4 className="font-title text-title font-bold text-on-surface mb-1">Crawl Remediation &amp; SERP Recovery Thesis</h4>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
                Strategic remediation of <code className="font-mono text-label-xs bg-surface-container-highest px-1.5 py-0.5 rounded text-on-surface font-semibold">ERR-CRW-104</code> resulted in instantaneous crawl re-activation across 24 critical API paths. Indexed URL velocity improved by 41% week-over-week, directly contributing to dominant top-3 placements for high-intent queries including <span className="font-semibold text-on-surface">"global recurring billing infrastructure"</span> and <span className="font-semibold text-on-surface">"embedded financial services APIs"</span>.
              </p>
</div>
</div>
</div>
{/*  Section 3: Dual Column (SERP Trajectory & Competitor Share of Voice)  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/*  Left: SERP Trajectory & Resilience  */}
<div className="group relative p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between">
<div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 rounded bg-surface-container-lowest text-secondary hover:text-on-surface shadow-sm">
<span className="material-symbols-outlined text-sm">fullscreen</span>
</button>
<button className="p-1 rounded bg-surface-container-lowest text-secondary hover:text-on-surface cursor-grab shadow-sm">
<span className="material-symbols-outlined text-sm">drag_handle</span>
</button>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<span className="font-title text-title font-bold text-on-surface">SERP Trajectory (CrUX / Core Update)</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold">Q1 Baseline</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-sm">Organic visibility resilience during March 2025 Google Core Algorithm update.</p>
</div>
{/*  Trajectory Visual SVG  */}
<div className="w-full bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
<div className="flex justify-between items-center text-label-xs font-label-xs text-secondary mb-2">
<span>Jan 01 (Pos 14.2)</span>
<span className="font-semibold text-primary-container">Update Rolled Out (Mar 12)</span>
<span>Mar 31 (Pos 4.1)</span>
</div>
<svg className="w-full h-24 stroke-current overflow-visible" viewBox="0 0 340 100">
<defs>
<linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#f26a4b" stopOpacity="0.3"></stop>
<stop offset="100%" stopColor="#f26a4b" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
<path d="M 0,80 Q 80,75 140,55 T 220,38 T 280,24 T 340,12 L 340,100 L 0,100 Z" fill="url(#chartGradient)"></path>
<path d="M 0,80 Q 80,75 140,55 T 220,38 T 280,24 T 340,12" fill="none" stroke="#f26a4b" strokeLinecap="round" strokeWidth="2.5"></path>
<line stroke="#aa361c" strokeDasharray="3 3" strokeWidth="1.5" x1="220" x2="220" y1="0" y2="100"></line>
<circle cx="220" cy="38" fill="#aa361c" r="4"></circle>
<circle cx="340" cy="12" fill="#f26a4b" r="4"></circle>
</svg>
<div className="flex items-center justify-between pt-2 text-label-xs font-label-xs text-secondary">
<span className="flex items-center gap-1 font-semibold text-on-surface">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  Top 3 Keywords: 1,842 (+312)
                </span>
<span className="font-bold text-on-secondary-fixed bg-secondary-container px-1.5 py-0.5 rounded">+10.1 avg rank</span>
</div>
</div>
</div>
{/*  Right: Competitor Share of Voice  */}
<div className="group relative p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between">
<div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 rounded bg-surface-container-lowest text-secondary hover:text-on-surface shadow-sm">
<span className="material-symbols-outlined text-sm">fullscreen</span>
</button>
<button className="p-1 rounded bg-surface-container-lowest text-secondary hover:text-on-surface cursor-grab shadow-sm">
<span className="material-symbols-outlined text-sm">drag_handle</span>
</button>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<span className="font-title text-title font-bold text-on-surface">Competitive Share of Voice</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold">Fintech Tier-1</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-sm">Organic SERP market-share across 4,200 commercial transactional queries.</p>
</div>
{/*  Share of Voice Visual Donut / Stacked Bar  */}
<div className="w-full bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-center py-2">
<svg className="w-24 h-24 -rotate-90" viewBox="0 0 36 36">
{/*  Stripe 38.4%  */}
<circle cx="18" cy="18" fill="none" r="15.915" stroke="#f26a4b" strokeDasharray="38.4 61.6" strokeDashoffset="0" strokeWidth="4.5"></circle>
{/*  Adyen 28.1%  */}
<circle cx="18" cy="18" fill="none" r="15.915" stroke="#456085" strokeDasharray="28.1 71.9" strokeDashoffset="-38.4" strokeWidth="4.5"></circle>
{/*  Checkout.com 19.5%  */}
<circle cx="18" cy="18" fill="none" r="15.915" stroke="#719ab0" strokeDasharray="19.5 80.5" strokeDashoffset="-66.5" strokeWidth="4.5"></circle>
{/*  Others 14%  */}
<circle cx="18" cy="18" fill="none" r="15.915" stroke="#dee2ec" strokeDasharray="14 86" strokeDashoffset="-86" strokeWidth="4.5"></circle>
</svg>
</div>
<div className="grid grid-cols-2 gap-2 text-label-xs font-label-xs">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-primary-container"></span>
<span className="font-semibold text-on-surface">Stripe: 38.4%</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-secondary"></span>
<span className="text-secondary">Adyen: 28.1%</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-tertiary-container"></span>
<span className="text-secondary">Checkout: 19.5%</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-surface-container-highest"></span>
<span className="text-secondary">Others: 14.0%</span>
</div>
</div>
</div>
</div>
</div>
{/*  Section 4: High-Impact Backlog & Resolved Incidents Table  */}
<div className="group relative p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="absolute -top-3 left-4 bg-surface-container-highest text-secondary px-2.5 py-0.5 rounded-full font-label-xs text-label-xs font-bold flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[13px]">task_alt</span>
<span>Section 4: High-Impact Backlog &amp; Resolved Incidents</span>
</div>
<div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 rounded bg-surface-container-lowest text-secondary hover:text-on-surface shadow-sm">
<span className="material-symbols-outlined text-sm">filter_list</span>
</button>
<button className="p-1 rounded bg-surface-container-lowest text-secondary hover:text-on-surface cursor-grab shadow-sm">
<span className="material-symbols-outlined text-sm">drag_handle</span>
</button>
</div>
<div className="mt-space-sm bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low text-secondary font-label-xs text-label-xs uppercase">
<tr>
<th className="py-2.5 px-space-md font-semibold">Incident / Remediation</th>
<th className="py-2.5 px-space-sm font-semibold">Cluster</th>
<th className="py-2.5 px-space-sm font-semibold">Status</th>
<th className="py-2.5 px-space-sm font-semibold text-right">Attributed ARR</th>
</tr>
</thead>
<tbody className="text-on-surface">
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-2 px-space-md font-medium flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Fix Canonical Loops on /docs/payments</span>
</td>
<td className="py-2 px-space-sm text-secondary">Developer Hub</td>
<td className="py-2 px-space-sm">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-label-xs font-label-xs font-bold">Deployed</span>
</td>
<td className="py-2 px-space-sm text-right font-semibold text-primary-container">+$180,000</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-2 px-space-md font-medium flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Hreflang Reciprocal Tags for LatAm Regions</span>
</td>
<td className="py-2 px-space-sm text-secondary">Global i18n</td>
<td className="py-2 px-space-sm">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-label-xs font-label-xs font-bold">Deployed</span>
</td>
<td className="py-2 px-space-sm text-right font-semibold text-primary-container">+$94,000</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-2 px-space-md font-medium flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Purge 404 Soft Errors in /resources</span>
</td>
<td className="py-2 px-space-sm text-secondary">Content Hub</td>
<td className="py-2 px-space-sm">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-label-xs font-label-xs font-bold">Deployed</span>
</td>
<td className="py-2 px-space-sm text-right font-semibold text-primary-container">+$62,000</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-2 px-space-md font-medium flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Optimize TTFB across Billing pricing matrix</span>
</td>
<td className="py-2 px-space-sm text-secondary">Core Web Vitals</td>
<td className="py-2 px-space-sm">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-label-xs font-label-xs font-bold">Deployed</span>
</td>
<td className="py-2 px-space-sm text-right font-semibold text-primary-container">+$54,000</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-2 px-space-md font-medium flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span>Structured Schema for Billing Product Guides</span>
</td>
<td className="py-2 px-space-sm text-secondary">Rich Snippets</td>
<td className="py-2 px-space-sm">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface text-label-xs font-label-xs font-bold">Staging QA</span>
</td>
<td className="py-2 px-space-sm text-right font-semibold text-secondary">+$30,000</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Canvas Drop Zone Prompt  */}
<div className="group border-2 border-dashed border-surface-container-highest hover:border-primary-container rounded-2xl p-space-lg flex flex-col items-center justify-center cursor-pointer bg-surface-container-low/30 hover:bg-surface-container-low transition-all">
<div className="w-10 h-10 rounded-full bg-surface-container-highest group-hover:bg-primary-container group-hover:text-on-primary text-secondary flex items-center justify-center transition-all mb-2">
<span className="material-symbols-outlined">add</span>
</div>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Drop Data Widget Here</span>
<span className="font-body-sm text-body-sm text-secondary mt-1">Or click to insert a dynamic page break, Markdown block, or custom HTML embed</span>
</div>
{/*  Report Footer Indicator  */}
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs pt-space-md border-t border-surface-container-high">
<span>Generated by SEOTRIKS Intelligence Suite • Enterprise Edition</span>
<span>Page 1 of 4</span>
<span>Confidential • Internal Distribution Only</span>
</div>
</div>
</div>
{/*  RIGHT COLUMN: Inspector & Automated Dispatch Settings (~300px)  */}
<div className="col-span-12 xl:col-span-3 flex flex-col gap-space-md sticky top-36">
{/*  Widget Settings Inspector Panel  */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-lg">tune</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Block Inspector</span>
</div>
<span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-on-surface">more_vert</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-label-xs text-label-xs text-secondary uppercase font-bold">Active Selection</span>
<span className="font-title text-title font-semibold text-on-surface">Executive KPI Summary Block</span>
</div>
{/*  Scope & Date Range Filter  */}
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-secondary font-bold uppercase">Date Scope &amp; Comparison</label>
<div className="relative">
<select className="w-full bg-surface-container-low text-on-surface rounded-lg px-space-sm py-2 font-body-sm text-body-sm appearance-none focus:outline-none cursor-pointer">
<option>Last 90 Days (Q1 2025)</option>
<option>Month-to-Date (MTD)</option>
<option>Trailing 12 Months (YoY)</option>
<option>Custom Date Span...</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-2.5 text-secondary text-sm pointer-events-none">expand_more</span>
</div>
</div>
{/*  Metric Toggles  */}
<div className="flex flex-col gap-2">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Metric Selection</span>
<div className="flex flex-col gap-1.5 font-label-md text-label-md">
<label className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<span className="text-on-surface font-medium">Site Health Score</span>
<input defaultChecked className="w-4 h-4 accent-secondary rounded cursor-pointer" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<span className="text-on-surface font-medium">Traffic Uplift Delta</span>
<input defaultChecked className="w-4 h-4 accent-secondary rounded cursor-pointer" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<span className="text-on-surface font-medium">Attributed ARR Opportunity</span>
<input defaultChecked className="w-4 h-4 accent-secondary rounded cursor-pointer" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<span className="text-on-surface font-medium">SEO Sprint Completion Rate</span>
<input defaultChecked className="w-4 h-4 accent-secondary rounded cursor-pointer" type="checkbox"/>
</label>
</div>
</div>
{/*  Display Styling & Brand Tone  */}
<div className="flex flex-col gap-2">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Display Styling</span>
<div className="grid grid-cols-2 gap-2 text-center font-label-md text-label-md">
<button className="py-1.5 px-2 rounded-lg bg-surface-container font-semibold text-on-surface ring-2 ring-secondary">Clean Minimalist</button>
<button className="py-1.5 px-2 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface">Data Dense</button>
</div>
<div className="flex items-center justify-between mt-2 pt-2 border-t border-surface-container-high">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Accent Color</span>
<div className="flex items-center gap-1.5">
<button className="w-5 h-5 rounded-full bg-primary-container ring-2 ring-primary ring-offset-2"></button>
<button className="w-5 h-5 rounded-full bg-secondary hover:scale-110 transition-transform"></button>
<button className="w-5 h-5 rounded-full bg-tertiary-container hover:scale-110 transition-transform"></button>
<button className="w-5 h-5 rounded-full bg-surface-container-highest hover:scale-110 transition-transform"></button>
</div>
</div>
</div>
</div>
{/*  Automated Dispatch & Scheduling Panel  */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-lg">schedule_send</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Automated Dispatch</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">Active Sync</span>
</div>
<div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
{/*  Dispatch Frequency  */}
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-secondary font-bold uppercase">Frequency &amp; Cadence</label>
<div className="p-2 rounded-xl bg-surface-container-low flex items-center justify-between">
<span className="font-medium text-on-surface">Monthly (1st at 08:00 UTC)</span>
<span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-on-surface">edit</span>
</div>
</div>
{/*  Format Choice  */}
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-secondary font-bold uppercase">Export Format</label>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">picture_as_pdf</span> 300 DPI PDF
              </span>
<span className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">web</span> Web Dossier
              </span>
</div>
</div>
{/*  Recipients Multi-Tag  */}
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-secondary font-bold uppercase">Recipients List</label>
<div className="flex flex-wrap gap-1.5 p-2 rounded-xl bg-surface-container-low">
<span className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-md text-label-xs font-label-xs text-on-surface shadow-xs">
<span>c-suite@stripe.com</span>
<span className="material-symbols-outlined text-xs text-secondary hover:text-error cursor-pointer">close</span>
</span>
<span className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-md text-label-xs font-label-xs text-on-surface shadow-xs">
<span>growth-leads@stripe.com</span>
<span className="material-symbols-outlined text-xs text-secondary hover:text-error cursor-pointer">close</span>
</span>
<button className="text-primary-container font-label-xs text-label-xs font-semibold flex items-center gap-0.5 hover:underline">
<span className="material-symbols-outlined text-xs">add</span> Add
              </button>
</div>
</div>
{/*  Integrations Webhooks  */}
<div className="flex flex-col gap-1.5 pt-2 border-t border-surface-container-high">
<label className="font-label-xs text-label-xs text-secondary font-bold uppercase">External Sync Dest.</label>
<div className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-md bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs">#</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">#marketing-exec</span>
<span className="font-label-xs text-label-xs text-secondary">Slack Notification</span>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
</div>
<div className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">folder</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">/SEO Reports</span>
<span className="font-label-xs text-label-xs text-secondary">Google Drive Archive</span>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</main>
  )
}