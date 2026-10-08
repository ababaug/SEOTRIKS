export function RankTrackingContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full">
{/*  Dynamic Atmospheric Glow Underlay (Self-contained)  */}
<div className="relative w-full">
<div className="absolute -top-16 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute -top-8 right-1/6 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
{/*  Header & Intelligence Context Bar  */}
<section className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg mb-margin-lg pt-space-xs">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-2 py-0.5 rounded-lg bg-surface-container-high text-primary font-mono-code text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Algorithmic Telemetry Active
          </span>
<span className="text-outline text-body-sm font-body-sm">Updated 14 mins ago via Search Engine API</span>
<span className="text-surface-variant font-mono-code text-mono-code hidden sm:inline">•</span>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-surface-container-low text-on-surface-variant font-mono-code text-[11px]">
<span className="material-symbols-outlined text-[14px] text-secondary">devices</span>
            Google US (Desktop &amp; Mobile 50/50 Blended)
          </div>
</div>
<div className="flex items-baseline gap-space-md flex-wrap mt-space-xs">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-display font-semibold">
            Rank Tracking &amp; Keyword Intelligence
          </h1>
<span className="font-mono-code text-mono-code text-primary-fixed-dim bg-surface-container-high/80 px-2.5 py-1 rounded-xl shadow-inner">
            target: seotriks.io
          </span>
</div>
</div>
{/*  Action Panel & Comparison Controls  */}
<div className="flex flex-wrap items-center gap-space-sm">
{/*  Comparison selector pill  */}
<div className="flex items-center bg-surface-container-lowest p-1 rounded-xl shadow-md">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-primary">calendar_month</span>
            vs Past 30 Days
          </button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors">
            vs 90D
          </button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors">
            YoY
          </button>
</div>
{/*  Secondary Action Buttons  */}
<button className="h-9 px-space-md bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg rounded-xl flex items-center gap-1.5 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">sync_alt</span>
          Import GSC
        </button>
<button className="h-9 px-space-md bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg rounded-xl flex items-center gap-1.5 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">tag</span>
          Keyword Groups
        </button>
<button className="h-9 px-3 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg rounded-xl flex items-center gap-1 transition-colors shadow-sm" title="Export SERP Data">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">download</span>
</button>
{/*  Primary CTA  */}
<button className="h-9 px-space-lg bg-primary text-on-primary font-label-lg text-label-lg rounded-xl font-semibold flex items-center gap-1.5 hover:bg-primary-fixed transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
          Add Keywords
        </button>
</div>
</section>
{/*  6 KPI Telemetry Cards Bento  */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-gutter-sm mb-margin-lg">
{/*  1: SERP Visibility Index  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-secondary/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-mono-code text-[11px] uppercase tracking-wider text-outline">Visibility Index</span>
<span className="material-symbols-outlined text-[18px] text-secondary">visibility</span>
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric font-bold text-on-surface">74.2%</span>
<span className="font-mono-code text-[11px] font-semibold text-secondary flex items-center">
<span className="material-symbols-outlined text-[14px]">trending_up</span>+5.8%
            </span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Organic search share</span>
</div>
{/*  Progress Bar Indicator  */}
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mt-space-xs">
<div className="h-full bg-secondary rounded-full" ></div>
</div>
</div>
{/*  2: Average Ranking Position  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-mono-code text-[11px] uppercase tracking-wider text-outline">Avg SERP Position</span>
<span className="material-symbols-outlined text-[18px] text-primary">pin_drop</span>
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric font-bold text-on-surface">8.4</span>
<span className="font-mono-code text-[11px] font-semibold text-secondary flex items-center">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>+2.8
            </span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Improved from 11.2 base</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mt-space-xs">
<div className="h-full bg-primary rounded-full" ></div>
</div>
</div>
{/*  3: Top 3 Positions  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-mono-code text-[11px] uppercase tracking-wider text-outline">Top 3 Winners</span>
<span className="material-symbols-outlined text-[18px] text-secondary">workspace_premium</span>
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric font-bold text-secondary">64</span>
<span className="font-mono-code text-[11px] font-semibold text-secondary flex items-center">
              +12 new
            </span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">High-conversion tier</span>
</div>
<div className="flex items-center gap-1 mt-space-xs">
<div className="h-1 flex-1 bg-secondary rounded-full"></div>
<div className="h-1 flex-1 bg-secondary/80 rounded-full"></div>
<div className="h-1 flex-1 bg-secondary/50 rounded-full"></div>
</div>
</div>
{/*  4: Top 10 Positions  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-mono-code text-[11px] uppercase tracking-wider text-outline">Top 10 (Page 1)</span>
<span className="material-symbols-outlined text-[18px] text-primary-fixed">filter_1</span>
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric font-bold text-on-surface">312</span>
<span className="font-mono-code text-[11px] font-semibold text-secondary flex items-center">
              +28 queries
            </span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">25.0% of tracked index</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mt-space-xs">
<div className="h-full bg-primary-container rounded-full" ></div>
</div>
</div>
{/*  5: Top 100 Tracked  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-mono-code text-[11px] uppercase tracking-wider text-outline">Tracked Pool</span>
<span className="material-symbols-outlined text-[18px] text-outline">view_list</span>
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric font-bold text-on-surface">1,248</span>
<span className="font-mono-code text-[11px] text-on-surface-variant">Active</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Across 14 categories</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mt-space-xs">
<div className="h-full bg-outline rounded-full" ></div>
</div>
</div>
{/*  6: Ranking Shifts 7D  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-mono-code text-[11px] uppercase tracking-wider text-outline">Shifts (7D)</span>
<span className="material-symbols-outlined text-[18px] text-tertiary">swap_vert</span>
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric font-bold text-secondary">84 <span className="text-[14px] text-outline font-normal">▲</span></span>
<span className="font-mono-metric text-mono-metric font-bold text-tertiary">19 <span className="text-[14px] text-outline font-normal">▼</span></span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">81.5% positive ratio</span>
</div>
<div className="flex h-1 bg-surface-container-highest rounded-full overflow-hidden mt-space-xs">
<div className="bg-secondary h-full" ></div>
<div className="bg-tertiary h-full" ></div>
</div>
</div>
</section>
{/*  Main Analytics Arena: Split Visualizer (Performance Curve vs Competitors) & Quick Wins Sidebar  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg mb-margin-lg items-start">
{/*  30-Day SERP Performance Curve with Competitor Benchmark (8 Columns)  */}
<div className="lg:col-span-8 bg-surface-container-low p-space-lg rounded-xl shadow-lg flex flex-col">
{/*  Graph Header  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md mb-space-md bg-surface-container-low/50">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Ranking Movement Benchmark</span>
<span className="px-2 py-0.5 rounded font-mono-code text-[10px] bg-secondary-container/20 text-secondary">Daily Crawl</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Weighted average position of Core Commercial Clusters over 30 Days</span>
</div>
{/*  Competitor Legend & Filter Toggles  */}
<div className="flex items-center gap-space-md flex-wrap font-mono-code text-[11px]">
<div className="flex items-center gap-1.5 cursor-pointer">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="text-on-surface font-semibold">seotriks.io (8.4)</span>
</div>
<div className="flex items-center gap-1.5 opacity-80 cursor-pointer hover:opacity-100 transition-opacity">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="text-on-surface-variant">OmniSEO.ai (12.1)</span>
</div>
<div className="flex items-center gap-1.5 opacity-80 cursor-pointer hover:opacity-100 transition-opacity">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span className="text-on-surface-variant">SearchGenius.io (16.9)</span>
</div>
</div>
</div>
{/*  Inline Telemetry SVG Chart (Under 2KB, responsive vector graphic with gradients)  */}
<div className="relative w-full h-72">
{/*  Background Axis Grid Lines  */}
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6 text-outline-variant/40">
<div className="flex items-center justify-between text-mono-code text-[10px] text-outline">
<span>Pos #1</span><div className="w-full mx-2 h-px bg-surface-container-high border-dashed border-t border-outline-variant/30"></div><span>Strongest</span>
</div>
<div className="flex items-center justify-between text-mono-code text-[10px] text-outline">
<span>Pos #5</span><div className="w-full mx-2 h-px bg-surface-container-high border-dashed border-t border-outline-variant/30"></div><span>Top Fold</span>
</div>
<div className="flex items-center justify-between text-mono-code text-[10px] text-outline">
<span>Pos #10</span><div className="w-full mx-2 h-px bg-surface-container-high border-dashed border-t border-outline-variant/30"></div><span>Page 1 Edge</span>
</div>
<div className="flex items-center justify-between text-mono-code text-[10px] text-outline">
<span>Pos #20</span><div className="w-full mx-2 h-px bg-surface-container-high border-dashed border-t border-outline-variant/30"></div><span>Page 2</span>
</div>
</div>
{/*  SVG Chart Paths  */}
<svg className="w-full h-full pb-6 overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 240">
<defs>
<linearGradient id="primaryAreaGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#4edea3" stopOpacity="0.28"></stop>
<stop offset="100%" stopColor="#4edea3" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
{/*  seotriks.io Fill Gradient (Inverted: lower Y is higher position in rank tracking)  */}
<path d="M 0,160 Q 120,150 200,130 T 400,95 T 600,68 T 800,42 L 800,240 L 0,240 Z" fill="url(#primaryAreaGrad)"></path>
{/*  SearchGenius.io Trend (Tertiary)  */}
<path d="M 0,195 Q 150,205 300,190 T 550,175 T 800,185" fill="none" opacity="0.7" stroke="#ffb4a3" strokeDasharray="4,4" strokeWidth="2"></path>
{/*  OmniSEO.ai Trend (Primary)  */}
<path d="M 0,140 Q 140,135 280,145 T 520,130 T 800,120" fill="none" opacity="0.85" stroke="#abc8f4" strokeWidth="2"></path>
{/*  seotriks.io Main Winning Curve (Secondary Emerald)  */}
<path d="M 0,160 Q 120,150 200,130 T 400,95 T 600,68 T 800,42" fill="none" stroke="#4edea3" strokeLinecap="round" strokeWidth="3.5"></path>
{/*  Highlight Checkpoint Node  */}
<circle cx="800" cy="42" fill="#4edea3" r="5" stroke="#0a1421" strokeWidth="2"></circle>
<circle cx="400" cy="95" fill="#4edea3" r="4"></circle>
</svg>
{/*  X-Axis Labels  */}
<div className="absolute bottom-0 left-0 right-0 flex justify-between font-mono-code text-[10px] text-outline pt-1">
<span>Day -30</span>
<span>Day -24</span>
<span>Day -18</span>
<span>Day -12</span>
<span>Day -6</span>
<span className="text-secondary font-semibold">Today (Pos #8.4)</span>
</div>
{/*  Micro Floating Tooltip Tag  */}
<div className="absolute top-10 right-16 px-2.5 py-1 rounded-lg bg-surface-container-highest shadow-xl font-mono-code text-[11px] text-on-surface flex items-center gap-1.5 pointer-events-none">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            seotriks.io: <strong className="text-secondary">#4.2 Peak Avg</strong>
</div>
</div>
{/*  Chart Bottom Metadata & Telemetry Diagnostics  */}
<div className="mt-space-md pt-space-sm grid grid-cols-2 sm:grid-cols-4 gap-space-sm bg-surface-container-lowest/60 p-space-sm rounded-xl font-mono-code text-[11px]">
<div>
<span className="text-outline block">Algorithm Fluctuation:</span>
<span className="text-secondary font-semibold">Low (2.4/10)</span>
</div>
<div>
<span className="text-outline block">SERP Feature Delta:</span>
<span className="text-primary font-semibold">+6 Snippets</span>
</div>
<div>
<span className="text-outline block">Overlap with OmniSEO:</span>
<span className="text-on-surface font-semibold">418 Queries</span>
</div>
<div>
<span className="text-outline block">Next Scheduled Crawl:</span>
<span className="text-on-surface-variant font-semibold">In 3h 12m</span>
</div>
</div>
</div>
{/*  Striking Distance Quick Wins Side-Panel (4 Columns)  */}
<div className="lg:col-span-4 bg-surface-container-low p-space-lg rounded-xl shadow-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">target</span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Striking Distance</h3>
<span className="font-label-md text-label-md text-secondary">3 High-Impact Quick Wins</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full font-mono-code text-[10px] bg-surface-container-high text-on-surface-variant">Pos #4–#7</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Keywords hovering right below the fold. Minor H2 optimizations and internal linking can yield estimated <strong className="text-secondary">+14,200 monthly clicks</strong>.
          </p>
{/*  3 Quick Win Cards  */}
<div className="flex flex-col gap-space-sm">
{/*  Win Item 1  */}
<div className="p-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex flex-col gap-1.5 shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col min-w-0 pr-2">
<span className="font-label-lg text-label-lg font-semibold text-on-surface truncate">ai search audit tool</span>
<span className="font-mono-code text-[11px] text-outline truncate">/features/ai-seo-audit</span>
</div>
<div className="flex items-center gap-1 shrink-0 font-mono-code text-[12px] bg-secondary-container/20 text-secondary px-2 py-0.5 rounded-lg">
<strong>#4</strong>
<span className="text-[10px]">▲1</span>
</div>
</div>
<div className="flex items-center justify-between font-mono-code text-[11px] text-on-surface-variant pt-1">
<span>Vol: <strong>9,400/mo</strong></span>
<span>CPC: $6.20</span>
<button className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container hover:bg-inverse-primary text-[10px] font-label-md transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">auto_awesome</span>Optimize
                </button>
</div>
</div>
{/*  Win Item 2  */}
<div className="p-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex flex-col gap-1.5 shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col min-w-0 pr-2">
<span className="font-label-lg text-label-lg font-semibold text-on-surface truncate">automated internal linking software</span>
<span className="font-mono-code text-[11px] text-outline truncate">/blog/internal-links-guide</span>
</div>
<div className="flex items-center gap-1 shrink-0 font-mono-code text-[12px] bg-secondary-container/20 text-secondary px-2 py-0.5 rounded-lg">
<strong>#5</strong>
<span className="text-[10px]">▲2</span>
</div>
</div>
<div className="flex items-center justify-between font-mono-code text-[11px] text-on-surface-variant pt-1">
<span>Vol: <strong>6,800/mo</strong></span>
<span>CPC: $4.90</span>
<button className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container hover:bg-inverse-primary text-[10px] font-label-md transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">auto_awesome</span>Optimize
                </button>
</div>
</div>
{/*  Win Item 3  */}
<div className="p-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex flex-col gap-1.5 shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col min-w-0 pr-2">
<span className="font-label-lg text-label-lg font-semibold text-on-surface truncate">serp volatility index tracker</span>
<span className="font-mono-code text-[11px] text-outline truncate">/tools/serp-radar</span>
</div>
<div className="flex items-center gap-1 shrink-0 font-mono-code text-[12px] bg-secondary-container/20 text-secondary px-2 py-0.5 rounded-lg">
<strong>#6</strong>
<span className="text-[10px]">▲1</span>
</div>
</div>
<div className="flex items-center justify-between font-mono-code text-[11px] text-on-surface-variant pt-1">
<span>Vol: <strong>12,100/mo</strong></span>
<span>CPC: $3.80</span>
<button className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container hover:bg-inverse-primary text-[10px] font-label-md transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">auto_awesome</span>Optimize
                </button>
</div>
</div>
</div>
</div>
<button className="mt-space-md w-full py-2 bg-surface-container-high hover:bg-surface-bright text-primary font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm">
<span>View All 148 Striking Distance Targets</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
{/*  Keyword Management & SERP Tracking Data Table Section  */}
<section className="bg-surface-container-low rounded-xl shadow-lg overflow-hidden flex flex-col">
{/*  Filter Bar & Segment Controls  */}
<div className="p-space-md flex flex-col xl:flex-row xl:items-center justify-between gap-space-md bg-surface-container-low">
{/*  Search and Quick Category Filter Input  */}
<div className="relative flex-1 max-w-xl">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">filter_list</span>
<input className="w-full h-10 pl-10 pr-10 bg-surface-container text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm rounded-xl focus:outline-none focus:bg-surface-container-high transition-colors" placeholder="Filter keywords by name, tag, landing page URL, or regex..." type="text"/>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-outline text-[16px] cursor-pointer hover:text-on-surface">tune</span>
</div>
{/*  Filter Quick Pills  */}
<div className="flex items-center gap-1.5 overflow-x-auto pb-1 xl:pb-0 scrollbar-none">
<button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold whitespace-nowrap shadow-sm">
            All (1,248)
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors">
            Striking Distance Pos 4–10 (148)
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors">
            Top 3 Winners (64)
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors">
            Featured Snippets (18)
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-tertiary hover:bg-surface-container-high font-label-md text-label-md whitespace-nowrap transition-colors">
            Declining (19)
          </button>
</div>
</div>
{/*  Granular Data Table  */}
<div className="overflow-x-auto w-full">
<table className="w-full text-left font-body-sm text-body-sm text-on-surface">
{/*  Table Header  */}
<thead className="bg-surface-container-lowest font-mono-code text-[11px] text-outline uppercase tracking-wider select-none">
<tr>
<th className="py-3 px-space-md w-10">
<input className="rounded bg-surface-container-high border-none text-primary focus:ring-0 w-3.5 h-3.5 cursor-pointer" type="checkbox"/>
</th>
<th className="py-3 px-space-md">Keyword &amp; Search Intent</th>
<th className="py-3 px-space-md">Position</th>
<th className="py-3 px-space-md">SERP Features</th>
<th className="py-3 px-space-md">Search Vol &amp; CPC</th>
<th className="py-3 px-space-md">KD %</th>
<th className="py-3 px-space-md">Target Landing URL</th>
<th className="py-3 px-space-md">7-Day Trend</th>
<th className="py-3 px-space-md text-right">Actions</th>
</tr>
</thead>
{/*  Table Body with Structured Rows  */}
<tbody className="divide-none font-body-sm">
{/*  ROW 1  */}
<tr className="bg-surface-container-low hover:bg-surface-container transition-colors group">
<td className="py-3.5 px-space-md">
<input className="rounded bg-surface-container border-none text-primary focus:ring-0 w-3.5 h-3.5 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="font-medium text-on-surface hover:text-primary cursor-pointer transition-colors">enterprise seo automation platform</span>
<span className="px-1.5 py-0.5 rounded font-mono-code text-[10px] bg-secondary-container/20 text-secondary uppercase font-semibold">Commercial</span>
</div>
<span className="font-mono-code text-[11px] text-outline">Tags: core-saas, tier-1</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-mono-code">
<span className="text-[16px] font-bold text-secondary">#1</span>
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-secondary-container/20 text-secondary">+2</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-secondary" title="Owned: Featured Snippet">featured_play_list</span>
<span className="material-symbols-outlined text-[16px] text-primary" title="SiteLinks Available">table_rows</span>
<span className="material-symbols-outlined text-[16px] opacity-40" title="Video Carousel">smart_display</span>
</div>
</td>
<td className="py-3.5 px-space-md font-mono-code text-[12px]">
<div className="font-semibold text-on-surface">14,800/mo</div>
<div className="text-[11px] text-outline">$8.40 CPC</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="font-mono-code text-[11px] font-semibold text-secondary">42%</span>
<div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
</div>
<span className="font-label-md text-[10px] text-outline">Medium</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1 max-w-[180px] truncate">
<span className="material-symbols-outlined text-[14px] text-outline">link</span>
<a className="font-mono-code text-[11px] text-primary hover:underline truncate" href="#">/features/ai-automation</a>
</div>
</td>
<td className="py-3.5 px-space-md">
{/*  Inline Sparkline SVG Trend  */}
<svg className="w-20 h-5" viewBox="0 0 80 20">
<path d="M 0,18 L 16,16 L 32,14 L 48,8 L 64,4 L 80,2" fill="none" stroke="#4edea3" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-primary" title="AI Optimization Recommendations">
<span className="material-symbols-outlined text-[16px]">auto_awesome</span>
</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface" title="View Live SERP Snapshot">
<span className="material-symbols-outlined text-[16px]">travel_explore</span>
</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface" title="Historical Positions">
<span className="material-symbols-outlined text-[16px]">history</span>
</button>
</div>
</td>
</tr>
{/*  ROW 2  */}
<tr className="bg-surface-container-lowest/40 hover:bg-surface-container transition-colors group">
<td className="py-3.5 px-space-md">
<input className="rounded bg-surface-container border-none text-primary focus:ring-0 w-3.5 h-3.5 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="font-medium text-on-surface hover:text-primary cursor-pointer transition-colors">ai search audit tool</span>
<span className="px-1.5 py-0.5 rounded font-mono-code text-[10px] bg-primary-container/40 text-on-primary-container uppercase font-semibold">Transactional</span>
</div>
<span className="font-mono-code text-[11px] text-outline">Tags: striking-dist, audits</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-mono-code">
<span className="text-[16px] font-bold text-on-surface">#4</span>
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-secondary-container/20 text-secondary">+1</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-tertiary" title="People Also Ask">quiz</span>
<span className="material-symbols-outlined text-[16px] opacity-40">featured_play_list</span>
<span className="material-symbols-outlined text-[16px] text-primary">smart_display</span>
</div>
</td>
<td className="py-3.5 px-space-md font-mono-code text-[12px]">
<div className="font-semibold text-on-surface">9,400/mo</div>
<div className="text-[11px] text-outline">$6.20 CPC</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="font-mono-code text-[11px] font-semibold text-primary">68%</span>
<div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" ></div>
</div>
</div>
<span className="font-label-md text-[10px] text-outline">High</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1 max-w-[180px] truncate">
<span className="material-symbols-outlined text-[14px] text-outline">link</span>
<a className="font-mono-code text-[11px] text-primary hover:underline truncate" href="#">/features/ai-seo-audit</a>
</div>
</td>
<td className="py-3.5 px-space-md">
<svg className="w-20 h-5" viewBox="0 0 80 20">
<path d="M 0,16 L 20,16 L 40,12 L 60,8 L 80,6" fill="none" stroke="#4edea3" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[16px]">auto_awesome</span>
</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[16px]">travel_explore</span>
</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[16px]">history</span>
</button>
</div>
</td>
</tr>
{/*  ROW 3  */}
<tr className="bg-surface-container-low hover:bg-surface-container transition-colors group">
<td className="py-3.5 px-space-md">
<input className="rounded bg-surface-container border-none text-primary focus:ring-0 w-3.5 h-3.5 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="font-medium text-on-surface hover:text-primary cursor-pointer transition-colors">real-time rank tracker api</span>
<span className="px-1.5 py-0.5 rounded font-mono-code text-[10px] bg-primary-container/40 text-on-primary-container uppercase font-semibold">Transactional</span>
</div>
<span className="font-mono-code text-[11px] text-outline">Tags: api, developers</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-mono-code">
<span className="text-[16px] font-bold text-secondary">#2</span>
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-secondary-container/20 text-secondary">NEW</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary">table_rows</span>
<span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
</div>
</td>
<td className="py-3.5 px-space-md font-mono-code text-[12px]">
<div className="font-semibold text-on-surface">5,200/mo</div>
<div className="text-[11px] text-outline">$11.20 CPC</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="font-mono-code text-[11px] font-semibold text-tertiary">84%</span>
<div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" ></div>
</div>
</div>
<span className="font-label-md text-[10px] text-outline">Very Hard</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1 max-w-[180px] truncate">
<span className="material-symbols-outlined text-[14px] text-outline">link</span>
<a className="font-mono-code text-[11px] text-primary hover:underline truncate" href="#">/api/rank-tracking</a>
</div>
</td>
<td className="py-3.5 px-space-md">
<svg className="w-20 h-5" viewBox="0 0 80 20">
<path d="M 0,20 L 30,18 L 50,8 L 80,4" fill="none" stroke="#4edea3" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[16px]">auto_awesome</span>
</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[16px]">travel_explore</span>
</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[16px]">history</span>
</button>
</div>
</td>
</tr>
{/*  ROW 4 (Declining example)  */}
<tr className="bg-surface-container-lowest/40 hover:bg-surface-container transition-colors group">
<td className="py-3.5 px-space-md">
<input className="rounded bg-surface-container border-none text-primary focus:ring-0 w-3.5 h-3.5 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="font-medium text-on-surface hover:text-primary cursor-pointer transition-colors">core web vitals debugging checklist</span>
<span className="px-1.5 py-0.5 rounded font-mono-code text-[10px] bg-surface-container-high text-on-surface-variant uppercase font-semibold">Informational</span>
</div>
<span className="font-mono-code text-[11px] text-outline">Tags: technical-seo, guide</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-mono-code">
<span className="text-[16px] font-bold text-tertiary">#14</span>
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-tertiary-container/40 text-on-tertiary-container">-3</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-tertiary">quiz</span>
</div>
</td>
<td className="py-3.5 px-space-md font-mono-code text-[12px]">
<div className="font-semibold text-on-surface">8,100/mo</div>
<div className="text-[11px] text-outline">$2.10 CPC</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="font-mono-code text-[11px] font-semibold text-secondary">36%</span>
<div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
</div>
<span className="font-label-md text-[10px] text-outline">Easy</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1 max-w-[180px] truncate">
<span className="material-symbols-outlined text-[14px] text-outline">link</span>
<a className="font-mono-code text-[11px] text-primary hover:underline truncate" href="#">/blog/cwv-audit-checklist</a>
</div>
</td>
<td className="py-3.5 px-space-md">
<svg className="w-20 h-5" viewBox="0 0 80 20">
<path d="M 0,4 L 20,6 L 40,8 L 60,14 L 80,18" fill="none" stroke="#ffb4a3" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[16px]">auto_awesome</span>
</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[16px]">travel_explore</span>
</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[16px]">history</span>
</button>
</div>
</td>
</tr>
{/*  ROW 5  */}
<tr className="bg-surface-container-low hover:bg-surface-container transition-colors group">
<td className="py-3.5 px-space-md">
<input className="rounded bg-surface-container border-none text-primary focus:ring-0 w-3.5 h-3.5 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="font-medium text-on-surface hover:text-primary cursor-pointer transition-colors">serp volatility index tracker</span>
<span className="px-1.5 py-0.5 rounded font-mono-code text-[10px] bg-secondary-container/20 text-secondary uppercase font-semibold">Commercial</span>
</div>
<span className="font-mono-code text-[11px] text-outline">Tags: free-tool, striking-dist</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-mono-code">
<span className="text-[16px] font-bold text-on-surface">#6</span>
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-secondary-container/20 text-secondary">+1</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary">table_rows</span>
<span className="material-symbols-outlined text-[16px] text-tertiary">quiz</span>
</div>
</td>
<td className="py-3.5 px-space-md font-mono-code text-[12px]">
<div className="font-semibold text-on-surface">12,100/mo</div>
<div className="text-[11px] text-outline">$3.80 CPC</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="font-mono-code text-[11px] font-semibold text-secondary">49%</span>
<div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
</div>
<span className="font-label-md text-[10px] text-outline">Medium</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1 max-w-[180px] truncate">
<span className="material-symbols-outlined text-[14px] text-outline">link</span>
<a className="font-mono-code text-[11px] text-primary hover:underline truncate" href="#">/tools/serp-radar</a>
</div>
</td>
<td className="py-3.5 px-space-md">
<svg className="w-20 h-5" viewBox="0 0 80 20">
<path d="M 0,14 L 20,12 L 40,12 L 60,10 L 80,6" fill="none" stroke="#4edea3" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[16px]">auto_awesome</span>
</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[16px]">travel_explore</span>
</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[16px]">history</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Footer / Pagination & Bulk Operations  */}
<div className="p-space-md bg-surface-container-lowest flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<span className="font-mono-code text-[11px] text-outline">
            Showing <strong className="text-on-surface">1 - 5</strong> of 1,248 tracked queries
          </span>
<div className="flex items-center gap-1.5 text-on-surface-variant font-mono-code text-[11px]">
<span>Rows:</span>
<select className="bg-surface-container-high rounded px-1.5 py-0.5 text-on-surface border-none focus:ring-0">
<option>25</option>
<option>50</option>
<option>100</option>
</select>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface disabled:opacity-40 font-mono-code text-[11px]" disabled>
            Prev
          </button>
<div className="flex items-center gap-1 font-mono-code text-[11px]">
<span className="w-6 h-6 rounded flex items-center justify-center bg-primary text-on-primary font-bold">1</span>
<span className="w-6 h-6 rounded flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant cursor-pointer">2</span>
<span className="w-6 h-6 rounded flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant cursor-pointer">3</span>
<span className="px-1 text-outline">...</span>
<span className="w-6 h-6 rounded flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant cursor-pointer">50</span>
</div>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright font-mono-code text-[11px]">
            Next
          </button>
</div>
</div>
</section>
{/*  Bottom Contextual Intelligence Banner: Engine Crawl & SERP Radar Status  */}
<section className="mt-space-lg mb-margin bg-surface-container-lowest p-space-md rounded-xl shadow-inner flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[22px]">satellite_alt</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-medium text-on-surface">Global Search Engine Scrape Pipeline: Operational</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
            Next deep SERP render cycle commences at <strong>04:00 UTC</strong>. 14 Webhooks synchronized with Search Console Indexing API.
          </span>
</div>
</div>
<div className="flex items-center gap-space-sm self-end md:self-auto shrink-0">
<button className="px-space-md py-1.5 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-secondary">tune</span>
          SERP Proxy Settings
        </button>
<button className="px-space-md py-1.5 rounded-xl bg-primary-container hover:bg-inverse-primary text-on-primary-container font-label-md text-label-md transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">refresh</span>
          Force Re-Crawl
        </button>
</div>
</section>
</div>
</div>
</main>
  )
}