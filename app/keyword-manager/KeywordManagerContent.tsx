"use client";
export function KeywordManagerContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full pb-16">
{/*  Top Ambient Glow Gradient Layer  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="absolute -top-20 right-10 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
{/*  Editorial Header Section  */}
<div className="relative z-10 pt-4 pb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-3xl">
<div className="flex items-center gap-space-xs text-secondary">
<span className="font-label-xs text-label-xs uppercase tracking-wider font-semibold text-secondary">Search Intelligence</span>
<span className="font-label-xs text-label-xs text-outline-variant">/</span>
<span className="font-label-xs text-label-xs font-semibold text-primary">stripe.com Portfolio</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-xs text-label-xs font-semibold">18 Clusters</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Keyword Portfolio Manager</h1>
<p className="font-body-lg text-body-lg text-secondary">Organize, tag, and cluster 3,420 tracked keywords across operational search hubs.</p>
</div>
{/*  Action Suite  */}
<div className="flex flex-wrap items-center gap-space-sm">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold shadow-sm hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined text-[18px] text-secondary">create_new_folder</span>
<span>Create New Keyword Cluster</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold shadow-sm hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined text-[18px] text-secondary">upload_file</span>
<span>Import CSV</span>
</button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-md shadow-primary-container/25 hover:opacity-95 transition-all">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>Add Keywords</span>
</button>
</div>
</div>
{/*  Cluster Pill Nav Switcher  */}
<div className="relative z-10 flex items-center justify-between pb-6">
<div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow-sm whitespace-nowrap">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span>All Tracked Keywords</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary font-label-xs text-label-xs">3,420</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container-low transition-all whitespace-nowrap">
<span>Core Checkout Hub</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs">840</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container-low transition-all whitespace-nowrap">
<span>Developer API Hub</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs">1,120</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container-low transition-all whitespace-nowrap">
<span>Enterprise Billing</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs">640</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container-low transition-all whitespace-nowrap">
<span>Fraud &amp; Risk</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs">820</span>
</button>
</div>
<div className="hidden xl:flex items-center gap-2 pl-4">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Sync:</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-xs text-label-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          Live US SERP (24m ago)
        </span>
</div>
</div>
</div>
{/*  Portfolio KPI Summary Row  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
{/*  KPI 1  */}
<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary font-medium">Managed Keywords</span>
<span className="p-1.5 rounded-lg bg-surface-container-low text-secondary">
<span className="material-symbols-outlined text-[20px]">dataset</span>
</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold tracking-tight">3,420</span>
<span className="font-label-xs text-label-xs text-secondary font-medium">across 18 clusters</span>
</div>
<div className="flex items-center justify-between pt-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
          100% Crawl Freshness
        </span>
<svg className="w-20 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 80 24">
<path d="M1 18 L18 16 L35 19 L52 11 L68 13 L79 4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
{/*  KPI 2  */}
<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary font-medium">Top 3 Positions</span>
<span className="p-1.5 rounded-lg bg-secondary-container/30 text-on-secondary-fixed">
<span className="material-symbols-outlined text-[20px]">military_tech</span>
</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold tracking-tight">418</span>
<span className="inline-flex items-center text-primary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-sm">trending_up</span>+34
        </span>
</div>
<div className="flex items-center justify-between pt-2">
<span className="font-label-xs text-label-xs text-secondary font-medium">vs 384 previous cycle</span>
<svg className="w-20 h-6 text-primary-container" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 80 24">
<path d="M1 20 L20 18 L40 12 L60 8 L79 3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
{/*  KPI 3  */}
<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary font-medium">Average Ranking</span>
<span className="p-1.5 rounded-lg bg-surface-container-low text-secondary">
<span className="material-symbols-outlined text-[20px]">leaderboard</span>
</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold tracking-tight">14.2</span>
<span className="inline-flex items-center text-primary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-sm">arrow_upward</span>+1.8
        </span>
</div>
<div className="flex items-center justify-between pt-2">
<span className="font-label-xs text-label-xs text-secondary font-medium">Weighted search trajectory</span>
<svg className="w-20 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 80 24">
<path d="M1 22 L22 17 L44 14 L62 9 L79 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
{/*  KPI 4  */}
<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary font-medium">Est. Traffic Value</span>
<span className="p-1.5 rounded-lg bg-primary-fixed/50 text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-[20px]">payments</span>
</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold tracking-tight">$1.24M</span>
<span className="font-label-xs text-label-xs text-secondary font-medium">/ month</span>
</div>
<div className="flex items-center justify-between pt-2">
<span className="inline-flex items-center gap-1 text-primary font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">arrow_outward</span>+9.4% MoM
        </span>
<svg className="w-20 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 80 24">
<path d="M1 19 L19 14 L38 16 L57 7 L79 2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>
{/*  Cluster Performance Overview Cards  */}
<div className="mb-space-xl">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Priority Cluster Performance</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-xs text-label-xs font-semibold">Live Cohorts</span>
</div>
<a className="font-label-sm text-label-sm font-semibold text-secondary hover:text-on-surface transition-colors flex items-center gap-1" href="#">
<span>View all 18 clusters</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Card 1: Developer API Hub  */}
<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div className="flex items-start justify-between gap-4 mb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<h3 className="font-title text-title text-on-surface font-bold">Developer API Hub</h3>
</div>
<p className="font-body-sm text-body-sm text-secondary">Target: /docs/api, /developers/sdks</p>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-bold uppercase tracking-wider">
            1,120 KWs
          </span>
</div>
<div className="grid grid-cols-3 gap-2 py-3 my-2 rounded-xl bg-surface-container-low px-3">
<div>
<span className="block font-label-xs text-label-xs text-secondary uppercase font-semibold">Visibility</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">84%</span>
</div>
<div>
<span className="block font-label-xs text-label-xs text-secondary uppercase font-semibold">Avg Pos</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">8.4</span>
</div>
<div>
<span className="block font-label-xs text-label-xs text-secondary uppercase font-semibold">Health</span>
<span className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-on-secondary-fixed">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>Excellent
            </span>
</div>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1.5 font-label-xs text-label-xs">
<span className="text-secondary font-medium">SERP Dominance Coverage</span>
<span className="font-semibold text-on-surface">612 in Top 10</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
<div className="h-full bg-secondary" ></div>
<div className="h-full bg-secondary-container" ></div>
<div className="h-full bg-outline-variant" ></div>
</div>
</div>
</div>
{/*  Card 2: Core Checkout Hub  */}
<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div className="flex items-start justify-between gap-4 mb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<h3 className="font-title text-title text-on-surface font-bold">Core Checkout Hub</h3>
</div>
<p className="font-body-sm text-body-sm text-secondary">Target: /payments, /checkout, /elements</p>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-bold uppercase tracking-wider">
            840 KWs
          </span>
</div>
<div className="grid grid-cols-3 gap-2 py-3 my-2 rounded-xl bg-surface-container-low px-3">
<div>
<span className="block font-label-xs text-label-xs text-secondary uppercase font-semibold">Visibility</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">79%</span>
</div>
<div>
<span className="block font-label-xs text-label-xs text-secondary uppercase font-semibold">Avg Pos</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">11.2</span>
</div>
<div>
<span className="block font-label-xs text-label-xs text-secondary uppercase font-semibold">Health</span>
<span className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-on-surface">
<span className="w-2 h-2 rounded-full bg-secondary"></span>Stable
            </span>
</div>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1.5 font-label-xs text-label-xs">
<span className="text-secondary font-medium">SERP Dominance Coverage</span>
<span className="font-semibold text-on-surface">390 in Top 10</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
<div className="h-full bg-primary-container" ></div>
<div className="h-full bg-secondary-container" ></div>
<div className="h-full bg-outline-variant" ></div>
</div>
</div>
</div>
{/*  Card 3: Enterprise Billing  */}
<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div className="flex items-start justify-between gap-4 mb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<h3 className="font-title text-title text-on-surface font-bold">Enterprise Billing</h3>
</div>
<p className="font-body-sm text-body-sm text-secondary">Target: /billing, /invoicing, /tax</p>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-bold uppercase tracking-wider">
            640 KWs
          </span>
</div>
<div className="grid grid-cols-3 gap-2 py-3 my-2 rounded-xl bg-surface-container-low px-3">
<div>
<span className="block font-label-xs text-label-xs text-secondary uppercase font-semibold">Visibility</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">68%</span>
</div>
<div>
<span className="block font-label-xs text-label-xs text-secondary uppercase font-semibold">Avg Pos</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">19.4</span>
</div>
<div>
<span className="block font-label-xs text-label-xs text-secondary uppercase font-semibold">Health</span>
<span className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary">
<span className="w-2 h-2 rounded-full bg-primary"></span>Needs Attention
            </span>
</div>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1.5 font-label-xs text-label-xs">
<span className="text-secondary font-medium">SERP Dominance Coverage</span>
<span className="font-semibold text-on-surface">184 in Top 10</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
<div className="h-full bg-primary" ></div>
<div className="h-full bg-secondary-container" ></div>
<div className="h-full bg-outline-variant" ></div>
</div>
</div>
</div>
</div>
</div>
{/*  Main Keyword Manager Table Container  */}
<div className="rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden">
{/*  Filter & Search Toolbar  */}
<div className="p-space-lg bg-surface-container-low flex flex-col gap-space-md">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
{/*  Quick Search  */}
<div className="relative flex-1 max-w-lg">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-secondary text-[20px]">search</span>
<input className="w-full pl-10 pr-24 py-2 bg-surface-container-lowest text-on-surface placeholder:text-secondary rounded-xl font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all" id="kwSearchInput" placeholder="Filter by keyword term or URL path..." type="text"/>
<kbd className="absolute right-3 top-2 px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Press /</kbd>
</div>
{/*  Filter Selectors  */}
<div className="flex flex-wrap items-center gap-2">
{/*  Position Range Filter  */}
<div className="flex items-center rounded-xl bg-surface-container-lowest p-1 shadow-sm">
<button className="px-3 py-1.5 rounded-lg text-on-surface font-label-xs text-label-xs font-semibold bg-surface-container-high">All Ranks</button>
<button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium transition-colors">Top 3</button>
<button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium transition-colors">4-10</button>
<button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium transition-colors">11-20</button>
<button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium transition-colors">21+</button>
</div>
{/*  Intent Dropdown Trigger  */}
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-medium shadow-sm hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-secondary text-[18px]">psychology</span>
<span>Intent: Commercial</span>
<span className="material-symbols-outlined text-secondary text-sm">expand_more</span>
</button>
{/*  Clusters Dropdown Trigger  */}
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-medium shadow-sm hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-secondary text-[18px]">hub</span>
<span>Tag: All Hubs</span>
<span className="material-symbols-outlined text-secondary text-sm">expand_more</span>
</button>
<button className="p-2 rounded-xl bg-surface-container-lowest text-secondary hover:text-on-surface shadow-sm hover:bg-surface-container transition-all" title="Reset Filters">
<span className="material-symbols-outlined text-[18px]">restart_alt</span>
</button>
</div>
</div>
{/*  Batch Selection Sticky Bar (Visible when rows selected)  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm p-space-sm rounded-xl bg-surface-container text-on-surface transition-all" id="batchActionBar">
<div className="flex items-center gap-space-sm pl-2">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-on-secondary font-label-xs text-label-xs font-bold" id="selectedCount">2</span>
<span className="font-label-md text-label-md font-semibold">Keywords Selected</span>
<span className="text-secondary font-body-sm text-body-sm">from Core Checkout &amp; Developer API</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs font-semibold shadow-sm hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-[16px] text-secondary">drive_file_move</span>
<span>Assign to Cluster</span>
</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs font-semibold shadow-sm hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-[16px] text-secondary">label</span>
<span>Tag</span>
</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs font-semibold shadow-sm hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-[16px] text-secondary">link</span>
<span>Set Target URL</span>
</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs font-semibold shadow-sm hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-[16px] text-secondary">download</span>
<span>Export (CSV)</span>
</button>
<button className="text-secondary hover:text-on-surface p-1 rounded-md transition-colors" id="clearSelectionBtn" title="Deselect All">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</div>
</div>
{/*  Data Table View  */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low font-label-xs text-label-xs uppercase tracking-wider text-secondary">
<th className="py-3 px-4 w-10">
<input className="w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" id="selectAllCheckbox" type="checkbox"/>
</th>
<th className="py-3 px-4 font-bold">Keyword</th>
<th className="py-3 px-4 font-bold">Cluster / Tag</th>
<th className="py-3 px-4 font-bold">Target URL</th>
<th className="py-3 px-4 font-bold text-center">Pos &amp; Delta</th>
<th className="py-3 px-4 font-bold text-right">Volume</th>
<th className="py-3 px-4 font-bold text-center">KD%</th>
<th className="py-3 px-4 font-bold">SERP Features</th>
<th className="py-3 px-4 font-bold">Priority</th>
<th className="py-3 px-4 font-bold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
{/*  Row 1 (Selected)  */}
<tr className="bg-secondary-container/15 hover:bg-secondary-container/25 transition-colors group">
<td className="py-3.5 px-4">
<input defaultChecked className="row-checkbox w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<a className="font-title text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5" href="#">
<span>payment gateway api</span>
<span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-label-xs text-label-xs text-secondary">Intent: Commercial • US English</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
                Developer API Hub
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 max-w-[200px] truncate" title="https://stripe.com/docs/api/payment_intents">
<span className="font-body-sm text-body-sm text-secondary font-mono truncate">/docs/api/payment_intents</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-surface-container-high">
<span className="font-metric-stat text-title font-bold text-on-surface">#2</span>
<span className="inline-flex items-center text-primary font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>1
                </span>
</div>
</td>
<td className="py-3.5 px-4 text-right">
<span className="font-title text-body-md font-bold text-on-surface">49,500</span>
<span className="block font-label-xs text-label-xs text-secondary">$32.40 CPC</span>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-on-primary-container font-label-xs text-label-xs font-bold">
                74%
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[18px] text-primary-container" title="Featured Snippet">featured_play_list</span>
<span className="material-symbols-outlined text-[18px]" title="Site Links">link</span>
<span className="material-symbols-outlined text-[18px]" title="People Also Ask">quiz</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary-fixed/40 text-on-primary-fixed-variant font-label-xs text-label-xs font-bold uppercase">
                P0 • Critical
              </span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface" title="Refresh Live SERP">
<span className="material-symbols-outlined text-[18px]">sync</span>
</button>
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface" title="Edit Target URL">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-error" title="Delete Keyword">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 2 (Selected)  */}
<tr className="bg-secondary-container/15 hover:bg-secondary-container/25 transition-colors group">
<td className="py-3.5 px-4">
<input defaultChecked className="row-checkbox w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<a className="font-title text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5" href="#">
<span>embedded checkout solution</span>
<span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-label-xs text-label-xs text-secondary">Intent: Transactional • US English</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                Core Checkout Hub
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 max-w-[200px] truncate" title="https://stripe.com/payments/checkout">
<span className="font-body-sm text-body-sm text-secondary font-mono truncate">/payments/checkout</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-surface-container-high">
<span className="font-metric-stat text-title font-bold text-on-surface">#1</span>
<span className="inline-flex items-center text-secondary font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">remove</span>0
                </span>
</div>
</td>
<td className="py-3.5 px-4 text-right">
<span className="font-title text-body-md font-bold text-on-surface">22,100</span>
<span className="block font-label-xs text-label-xs text-secondary">$18.90 CPC</span>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-xs text-label-xs font-bold">
                58%
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[18px]" title="Site Links">link</span>
<span className="material-symbols-outlined text-[18px]" title="Reviews">star</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-high text-secondary font-label-xs text-label-xs font-bold uppercase">
                P1 • High
              </span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface" title="Refresh Live SERP">
<span className="material-symbols-outlined text-[18px]">sync</span>
</button>
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface" title="Edit Target URL">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-error" title="Delete Keyword">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3.5 px-4">
<input className="row-checkbox w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<a className="font-title text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5" href="#">
<span>saas recurring billing platform</span>
<span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-label-xs text-label-xs text-secondary">Intent: Commercial • US English</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                Enterprise Billing
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 max-w-[200px] truncate" title="https://stripe.com/billing">
<span className="font-body-sm text-body-sm text-secondary font-mono truncate">/billing</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-surface-container-high">
<span className="font-metric-stat text-title font-bold text-on-surface">#6</span>
<span className="inline-flex items-center text-primary font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>3
                </span>
</div>
</td>
<td className="py-3.5 px-4 text-right">
<span className="font-title text-body-md font-bold text-on-surface">14,800</span>
<span className="block font-label-xs text-label-xs text-secondary">$44.10 CPC</span>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-on-primary-container font-label-xs text-label-xs font-bold">
                81%
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[18px] text-primary-container" title="Featured Snippet">featured_play_list</span>
<span className="material-symbols-outlined text-[18px]" title="People Also Ask">quiz</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary-fixed/40 text-on-primary-fixed-variant font-label-xs text-label-xs font-bold uppercase">
                P0 • Critical
              </span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface" title="Refresh Live SERP">
<span className="material-symbols-outlined text-[18px]">sync</span>
</button>
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface" title="Edit Target URL">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-error" title="Delete Keyword">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3.5 px-4">
<input className="row-checkbox w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<a className="font-title text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5" href="#">
<span>chargeback mitigation machine learning</span>
<span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-label-xs text-label-xs text-secondary">Intent: Informational • US English</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                Fraud &amp; Risk
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 max-w-[200px] truncate" title="https://stripe.com/radar">
<span className="font-body-sm text-body-sm text-secondary font-mono truncate">/radar</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-surface-container-high">
<span className="font-metric-stat text-title font-bold text-on-surface">#18</span>
<span className="inline-flex items-center text-error font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[14px]">arrow_downward</span>2
                </span>
</div>
</td>
<td className="py-3.5 px-4 text-right">
<span className="font-title text-body-md font-bold text-on-surface">8,900</span>
<span className="block font-label-xs text-label-xs text-secondary">$14.20 CPC</span>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-xs text-label-xs font-bold">
                42%
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[18px]" title="People Also Ask">quiz</span>
<span className="material-symbols-outlined text-[18px]" title="Video Carousels">play_circle</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-high text-secondary font-label-xs text-label-xs font-bold uppercase">
                P2 • Moderate
              </span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface" title="Refresh Live SERP">
<span className="material-symbols-outlined text-[18px]">sync</span>
</button>
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface" title="Edit Target URL">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-error" title="Delete Keyword">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3.5 px-4">
<input className="row-checkbox w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<a className="font-title text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5" href="#">
<span>global multi currency payment rails</span>
<span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-label-xs text-label-xs text-secondary">Intent: Commercial • US English</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                Developer API Hub
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 max-w-[200px] truncate" title="https://stripe.com/global">
<span className="font-body-sm text-body-sm text-secondary font-mono truncate">/global</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-surface-container-high">
<span className="font-metric-stat text-title font-bold text-on-surface">#4</span>
<span className="inline-flex items-center text-primary font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>2
                </span>
</div>
</td>
<td className="py-3.5 px-4 text-right">
<span className="font-title text-body-md font-bold text-on-surface">19,400</span>
<span className="block font-label-xs text-label-xs text-secondary">$28.50 CPC</span>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-on-primary-container font-label-xs text-label-xs font-bold">
                67%
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[18px] text-primary-container" title="Featured Snippet">featured_play_list</span>
<span className="material-symbols-outlined text-[18px]" title="Site Links">link</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary-fixed/40 text-on-primary-fixed-variant font-label-xs text-label-xs font-bold uppercase">
                P0 • Critical
              </span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface" title="Refresh Live SERP">
<span className="material-symbols-outlined text-[18px]">sync</span>
</button>
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface" title="Edit Target URL">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1 rounded-lg hover:bg-surface-container text-secondary hover:text-error" title="Delete Keyword">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination & Bulk Details Footer  */}
<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm font-body-sm text-body-sm text-secondary">
<span>Showing <strong className="text-on-surface">1 - 5</strong> of <strong className="text-on-surface">3,420</strong> tracked keywords</span>
<span>•</span>
<div className="flex items-center gap-1">
<span>Rows per page:</span>
<select className="bg-surface-container-lowest rounded-md px-2 py-1 font-label-sm text-label-sm text-on-surface focus:outline-none">
<option>25</option>
<option>50</option>
<option defaultChecked>100</option>
<option>250</option>
</select>
</div>
</div>
<div className="flex items-center gap-1">
<button className="p-2 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface shadow-sm disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold shadow-sm">1</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-sm text-label-sm font-semibold shadow-sm hover:bg-surface-container transition-all">2</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-sm text-label-sm font-semibold shadow-sm hover:bg-surface-container transition-all">3</button>
<span className="px-2 text-secondary">...</span>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-sm text-label-sm font-semibold shadow-sm hover:bg-surface-container transition-all">69</button>
<button className="p-2 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface shadow-sm hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

</main>
  )
}