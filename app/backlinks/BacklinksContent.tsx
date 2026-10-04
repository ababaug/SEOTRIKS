export function BacklinksContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full">
{/*  Command Hub & Realtime Sync Header  */}
<section className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl mb-gutter">
<div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div className="absolute right-1/3 -bottom-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md relative z-10">
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-surface-container font-mono-code text-mono-code text-primary uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
            Telemetry Feed
          </span>
<span className="text-outline-variant font-mono-code text-mono-code">•</span>
<span className="text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">update</span>
            Live Index synced 18 mins ago
          </span>
<span className="text-outline-variant font-mono-code text-mono-code">•</span>
<span className="font-mono-code text-mono-code text-outline">Target Node: <span className="text-on-surface font-semibold">seotriks.io</span></span>
</div>
<h1 className="font-headline-lg text-headline-lg tracking-tight text-on-surface font-bold mt-1">
          Backlink Intelligence &amp; Domain Authority
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Deep graph telemetry, link velocity diagnostics, toxicity isolation, and real-time gap intelligence against organic SERP competitors.
        </p>
</div>
{/*  Action Suite  */}
<div className="flex items-center gap-2 flex-wrap lg:justify-end shrink-0">
<button className="h-9 px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center gap-1.5 transition-all shadow-sm">
<span className="material-symbols-outlined text-[17px] text-primary">security</span>
          + Disavow File Generator
        </button>
<button className="h-9 px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center gap-1.5 transition-all shadow-sm">
<span className="material-symbols-outlined text-[17px] text-tertiary">radar</span>
          Monitor Competitor Inflow
        </button>
<button className="h-9 px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center gap-1.5 transition-all shadow-sm">
<span className="material-symbols-outlined text-[17px] text-outline">tune</span>
          Filter Spam Velocity
        </button>
<button className="h-9 px-space-md rounded-xl bg-primary-container hover:bg-inverse-primary text-on-primary-container font-label-lg text-label-lg flex items-center gap-1.5 transition-all shadow-md">
<span className="material-symbols-outlined text-[17px]">file_download</span>
          Export Link Profile
        </button>
</div>
</div>
</section>
{/*  Primary Authority & Telemetry Metrics (5-Column Bento Grid)  */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter-sm mb-gutter">
{/*  Metric 1: Domain Authority  */}
<div className="relative bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Domain Authority</span>
<span className="material-symbols-outlined text-primary text-[20px]">award_star</span>
</div>
<div className="my-space-sm flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric text-on-surface font-bold">68</span>
<span className="font-mono-code text-mono-code text-on-surface-variant">/ 100</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary flex items-center gap-0.5 font-medium">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
          +4 pts
        </span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-mono-code text-[11px]">High Trust</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full mt-3 overflow-hidden">
<div className="h-full bg-primary rounded-full" ></div>
</div>
</div>
{/*  Metric 2: Total Backlinks  */}
<div className="relative bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Backlinks</span>
<span className="material-symbols-outlined text-secondary text-[20px]">link</span>
</div>
<div className="my-space-sm flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric text-on-surface font-bold">14,240</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary flex items-center gap-0.5 font-medium">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
          100% Crawled
        </span>
<span className="text-on-surface-variant font-mono-code text-[11px]">Live Graph</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full mt-3 overflow-hidden">
<div className="h-full bg-secondary rounded-full" ></div>
</div>
</div>
{/*  Metric 3: Referring Domains  */}
<div className="relative bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Referring Domains</span>
<span className="material-symbols-outlined text-primary-fixed-dim text-[20px]">hub</span>
</div>
<div className="my-space-sm flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric text-on-surface font-bold">892</span>
<span className="font-mono-code text-mono-code text-on-surface-variant">unique</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary flex items-center gap-0.5 font-medium">
<span className="material-symbols-outlined text-[16px]">arrow_upward</span>
          +42 this mo.
        </span>
<span className="text-on-surface-variant font-mono-code text-[11px]">Velocity +8.2%</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full mt-3 overflow-hidden">
<div className="h-full bg-primary-fixed-dim rounded-full" ></div>
</div>
</div>
{/*  Metric 4: Follow vs NoFollow Ratio  */}
<div className="relative bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Link Equity Split</span>
<span className="material-symbols-outlined text-outline text-[20px]">donut_large</span>
</div>
<div className="my-space-sm flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric text-secondary font-bold">78%</span>
<span className="font-mono-code text-mono-code text-on-surface-variant">DoFollow</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant font-mono-code text-[11px]">11,107 DoFollow</span>
<span className="text-outline font-mono-code text-[11px]">3,133 NoFollow</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full mt-3 overflow-hidden flex">
<div className="h-full bg-secondary" ></div>
<div className="h-full bg-outline-variant" ></div>
</div>
</div>
{/*  Metric 5: Toxic / Scraper Risk  */}
<div className="relative bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Toxic / Scraper Risk</span>
<span className="material-symbols-outlined text-tertiary text-[20px]">qr_code_2</span>
</div>
<div className="my-space-sm flex items-baseline gap-2">
<span className="font-mono-metric text-mono-metric text-on-surface font-bold">1.2%</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-mono-code text-[10px]">Low Risk</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-tertiary flex items-center gap-0.5 font-medium">
<span className="material-symbols-outlined text-[16px]">warning</span>
          3 toxic nodes
        </span>
<span className="text-on-surface-variant font-mono-code text-[11px]">Auto-quarantine</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full mt-3 overflow-hidden">
<div className="h-full bg-tertiary" ></div>
</div>
</div>
</section>
{/*  Charts & Link Velocity Section (Asymmetric Split 7 / 5)  */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-gutter">
{/*  Left: Link Acquisition Velocity 90-Day Telemetry Chart (Span 7)  */}
<div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md">
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Link Acquisition Velocity</h2>
<span className="font-mono-code text-mono-code px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">90D Rolling</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Weekly net balance: Referring domains acquired vs lost link attrition.</p>
</div>
<div className="flex items-center gap-4 text-mono-code font-mono-code text-[11px]">
<div className="flex items-center gap-1.5 text-secondary">
<span className="w-2.5 h-2.5 rounded bg-secondary"></span>
<span>New Domains (+481)</span>
</div>
<div className="flex items-center gap-1.5 text-tertiary">
<span className="w-2.5 h-2.5 rounded bg-tertiary"></span>
<span>Lost Domains (-68)</span>
</div>
</div>
</div>
{/*  High-Density Inline Chart Visualizer  */}
<div className="w-full pt-4">
<div className="relative h-48 w-full">
{/*  Horizontal reference lines  */}
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full h-px bg-outline border-b border-dashed border-outline"></div>
<div className="w-full h-px bg-outline border-b border-dashed border-outline"></div>
<div className="w-full h-px bg-outline border-b border-dashed border-outline"></div>
<div className="w-full h-px bg-outline border-b border-dashed border-outline"></div>
</div>
{/*  Weekly Columns Representation  */}
<div className="relative h-full flex items-end justify-between gap-1.5 px-2">
{/*  Week 1  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W1</span>
</div>
{/*  Week 2  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W2</span>
</div>
{/*  Week 3  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W3</span>
</div>
{/*  Week 4  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W4</span>
</div>
{/*  Week 5  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W5</span>
</div>
{/*  Week 6  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W6</span>
</div>
{/*  Week 7  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W7</span>
</div>
{/*  Week 8  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W8</span>
</div>
{/*  Week 9  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W9</span>
</div>
{/*  Week 10  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W10</span>
</div>
{/*  Week 11  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-secondary transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-on-surface-variant mt-1">W11</span>
</div>
{/*  Week 12 (Current)  */}
<div className="flex-1 flex flex-col items-center justify-end h-full gap-1 group cursor-pointer">
<div className="w-full rounded-t bg-primary-container transition-all group-hover:brightness-125" ></div>
<div className="w-full rounded-b bg-tertiary transition-all group-hover:brightness-125" ></div>
<span className="font-mono-code text-[10px] text-primary font-bold mt-1">Now</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant bg-surface-container rounded-lg px-3 py-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span>Net Growth Differential: <strong className="text-secondary font-mono-code">+413 Referring Nodes</strong> (+14.2% acceleration)</span>
</div>
<span className="font-mono-code text-mono-code text-outline">Algorithm safe zone</span>
</div>
</div>
</div>
{/*  Right: Anchor Text Cloud & Distribution (Span 5)  */}
<div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between pb-space-sm">
<div>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Anchor Text Distribution</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Profile health &amp; Penguin penalty mitigation analysis</p>
</div>
<button className="w-7 h-7 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]">info</span>
</button>
</div>
{/*  Multi-segmented Progress Bar  */}
<div className="my-2">
<div className="w-full h-3 rounded-full overflow-hidden flex bg-surface-container-highest shadow-inner">
<div className="bg-primary hover:opacity-90 transition-opacity"  title="Branded 48%"></div>
<div className="bg-secondary hover:opacity-90 transition-opacity"  title="Target Exact 24%"></div>
<div className="bg-primary-container hover:opacity-90 transition-opacity"  title="Partial Match 18%"></div>
<div className="bg-outline hover:opacity-90 transition-opacity"  title="Generic/URL 10%"></div>
</div>
</div>
{/*  Categories & Exact Percentages  */}
<div className="space-y-2.5 my-2">
<div className="flex items-center justify-between text-body-sm font-body-sm p-1.5 rounded-lg bg-surface-container/60">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0"></span>
<span className="text-on-surface font-medium truncate">Branded</span>
<span className="text-on-surface-variant font-mono-code text-[11px] truncate">('seotriks', 'seotriks ai')</span>
</div>
<div className="flex items-center gap-3 shrink-0">
<span className="font-mono-code text-mono-code text-on-surface font-bold">48%</span>
<span className="text-secondary font-mono-code text-[10px] px-1.5 py-0.5 rounded bg-secondary-container/20">Optimal</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm p-1.5 rounded-lg bg-surface-container/60">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0"></span>
<span className="text-on-surface font-medium truncate">Target Exact Match</span>
<span className="text-on-surface-variant font-mono-code text-[11px] truncate">('seo automation platform', 'ai crawler')</span>
</div>
<div className="flex items-center gap-3 shrink-0">
<span className="font-mono-code text-mono-code text-on-surface font-bold">24%</span>
<span className="text-secondary font-mono-code text-[10px] px-1.5 py-0.5 rounded bg-secondary-container/20">Clean</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm p-1.5 rounded-lg bg-surface-container/60">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container shrink-0"></span>
<span className="text-on-surface font-medium truncate">Partial Match</span>
<span className="text-on-surface-variant font-mono-code text-[11px] truncate">('explore seotriks link tool', 'smart bot')</span>
</div>
<div className="flex items-center gap-3 shrink-0">
<span className="font-mono-code text-mono-code text-on-surface font-bold">18%</span>
<span className="text-on-surface-variant font-mono-code text-[10px] px-1.5 py-0.5 rounded bg-surface-container-highest">Balanced</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm p-1.5 rounded-lg bg-surface-container/60">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2.5 h-2.5 rounded-full bg-outline shrink-0"></span>
<span className="text-on-surface font-medium truncate">Generic / Raw URL</span>
<span className="text-on-surface-variant font-mono-code text-[11px] truncate">('visit site', 'seotriks.io/blog')</span>
</div>
<div className="flex items-center gap-3 shrink-0">
<span className="font-mono-code text-mono-code text-on-surface font-bold">10%</span>
<span className="text-outline font-mono-code text-[10px] px-1.5 py-0.5 rounded bg-surface-container-highest">Standard</span>
</div>
</div>
</div>
{/*  Anchor Cloud Pill Badges  */}
<div className="flex flex-wrap gap-1.5 pt-2">
<span className="px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-mono-code text-mono-code transition-colors cursor-pointer">seotriks [2,481]</span>
<span className="px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-secondary font-mono-code text-mono-code transition-colors cursor-pointer">ai crawl agent [1,190]</span>
<span className="px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-mono-code text-mono-code transition-colors cursor-pointer">seo automation [914]</span>
<span className="px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-mono-code text-mono-code transition-colors cursor-pointer">domain metrics [482]</span>
</div>
</div>
</section>
{/*  Backlink Profile & Acquisition Stream Table  */}
<section className="bg-surface-container-low rounded-xl shadow-xl overflow-hidden mb-gutter">
{/*  Filter Bar Header  */}
<div className="p-space-md bg-surface-container flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0" id="filterTabs">
<button className="h-8 px-space-md rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg font-medium transition-all shadow-sm">
          All Backlinks (14,240)
        </button>
<button className="h-8 px-space-md rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors">
          New (Past 30d) <span className="ml-1 text-secondary font-mono-code">+481</span>
</button>
<button className="h-8 px-space-md rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors">
          Lost Links <span className="ml-1 text-tertiary font-mono-code">-68</span>
</button>
<button className="h-8 px-space-md rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors">
          Toxic Flags <span className="ml-1 text-tertiary-fixed-dim font-mono-code">3</span>
</button>
<button className="h-8 px-space-md rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors">
          Competitor Intercepts
        </button>
</div>
<div className="flex items-center gap-2">
<div className="relative w-48 sm:w-64">
<span className="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-[16px]">filter_list</span>
<input className="w-full h-8 pl-8 pr-3 bg-surface-container-lowest text-on-surface placeholder:text-outline font-mono-code text-mono-code rounded-lg focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Filter anchor or root domain..." type="text"/>
</div>
<button className="h-8 px-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">tune</span>
          Rules
        </button>
</div>
</div>
{/*  Data Table Viewport  */}
<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest text-outline uppercase font-mono-code text-[11px] tracking-wider">
<th className="py-3 px-space-md font-semibold">Source Page Title &amp; Referring Domain</th>
<th className="py-3 px-space-md font-semibold">Authority</th>
<th className="py-3 px-space-md font-semibold">Target Landing URL</th>
<th className="py-3 px-space-md font-semibold">Anchor Text &amp; Attributes</th>
<th className="py-3 px-space-md font-semibold">First Seen / State</th>
<th className="py-3 px-space-md font-semibold">Risk Index</th>
<th className="py-3 px-space-md font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-highest/20 text-body-sm font-body-sm">
{/*  Row 1: High tier editorial link  */}
<tr className="hover:bg-surface-container transition-colors group">
<td className="py-3.5 px-space-md max-w-sm">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-primary-container/40 flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">article</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-medium text-on-surface truncate group-hover:text-primary transition-colors">TechCrunch Review: Modern Autonomous Crawlers</span>
<span className="font-mono-code text-mono-code text-on-surface-variant truncate">https://techcrunch.com/2024/09/autonomous-seo-crawlers-landscape</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5">
<span className="font-mono-metric text-[16px] text-on-surface font-bold">91</span>
<span className="font-mono-code text-[10px] text-secondary px-1.5 py-0.5 rounded bg-secondary-container/20">Tier 1</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1 font-mono-code text-mono-code text-on-surface-variant">
<span className="text-primary truncate max-w-[180px]">/features/autonomous-remediation</span>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-outline hover:text-on-surface">
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</button>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1">
<span className="text-on-surface font-medium truncate max-w-[190px]">"seo automation platform"</span>
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-secondary-container/25 text-secondary">DoFollow</span>
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-surface-container text-on-surface-variant">In-Content</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<div className="flex flex-col">
<span className="text-on-surface font-mono-code text-mono-code">Oct 12, 2024</span>
<span className="text-on-surface-variant font-mono-code text-[10px]">Active Crawl</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1">
<span className="font-mono-code text-mono-code text-secondary font-semibold">1%</span>
<span className="font-mono-code text-[10px] text-on-surface-variant">Safe</span>
</div>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Inspect Link Node">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-tertiary transition-colors" title="Add to Disavow File">
<span className="material-symbols-outlined text-[16px]">block</span>
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors" title="Track Source Domain">
<span className="material-symbols-outlined text-[16px]">bookmark_add</span>
</button>
</div>
</td>
</tr>
{/*  Row 2: Search Engine Journal Guide  */}
<tr className="hover:bg-surface-container transition-colors group">
<td className="py-3.5 px-space-md max-w-sm">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">feed</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-medium text-on-surface truncate group-hover:text-primary transition-colors">Search Engine Journal: The State of Enterprise Crawling</span>
<span className="font-mono-code text-mono-code text-on-surface-variant truncate">https://searchenginejournal.com/enterprise-seo-indexing-benchmark/</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5">
<span className="font-mono-metric text-[16px] text-on-surface font-bold">88</span>
<span className="font-mono-code text-[10px] text-secondary px-1.5 py-0.5 rounded bg-secondary-container/20">Tier 1</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1 font-mono-code text-mono-code text-on-surface-variant">
<span className="text-primary truncate max-w-[180px]">/architecture/indexing-telemetry</span>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-outline hover:text-on-surface">
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</button>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1">
<span className="text-on-surface font-medium truncate max-w-[190px]">"SEOTRIKS architecture"</span>
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-secondary-container/25 text-secondary">DoFollow</span>
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-surface-container text-on-surface-variant">Editorial</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<div className="flex flex-col">
<span className="text-on-surface font-mono-code text-mono-code">Oct 09, 2024</span>
<span className="text-on-surface-variant font-mono-code text-[10px]">Active Crawl</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1">
<span className="font-mono-code text-mono-code text-secondary font-semibold">2%</span>
<span className="font-mono-code text-[10px] text-on-surface-variant">Safe</span>
</div>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Inspect Link Node">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-tertiary transition-colors" title="Add to Disavow File">
<span className="material-symbols-outlined text-[16px]">block</span>
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors" title="Track Source Domain">
<span className="material-symbols-outlined text-[16px]">bookmark_add</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: Product Hunt Community  */}
<tr className="hover:bg-surface-container transition-colors group">
<td className="py-3.5 px-space-md max-w-sm">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-fixed-dim shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">rocket_launch</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-medium text-on-surface truncate group-hover:text-primary transition-colors">Product Hunt: SEOTRIKS 3.0 Platform Discussion</span>
<span className="font-mono-code text-mono-code text-on-surface-variant truncate">https://producthunt.com/posts/seotriks-os</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5">
<span className="font-mono-metric text-[16px] text-on-surface font-bold">82</span>
<span className="font-mono-code text-[10px] text-primary px-1.5 py-0.5 rounded bg-primary-container/30">Tier 2</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1 font-mono-code text-mono-code text-on-surface-variant">
<span className="text-primary truncate max-w-[180px]">/</span>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-outline hover:text-on-surface">
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</button>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1">
<span className="text-on-surface font-medium truncate max-w-[190px]">"https://seotriks.io"</span>
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-surface-container-highest text-outline">NoFollow</span>
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-surface-container text-on-surface-variant">UGC Link</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<div className="flex flex-col">
<span className="text-on-surface font-mono-code text-mono-code">Sep 28, 2024</span>
<span className="text-on-surface-variant font-mono-code text-[10px]">Active Crawl</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1">
<span className="font-mono-code text-mono-code text-secondary font-semibold">0%</span>
<span className="font-mono-code text-[10px] text-on-surface-variant">Verified</span>
</div>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Inspect Link Node">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-tertiary transition-colors" title="Add to Disavow File">
<span className="material-symbols-outlined text-[16px]">block</span>
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors" title="Track Source Domain">
<span className="material-symbols-outlined text-[16px]">bookmark_add</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: Dropped / Lost Link  */}
<tr className="hover:bg-surface-container transition-colors group opacity-80">
<td className="py-3.5 px-space-md max-w-sm">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">link_off</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-medium text-on-surface truncate group-hover:text-tertiary transition-colors">VentureBeat AI Digest: Automated Keyword Intelligence</span>
<span className="font-mono-code text-mono-code text-on-surface-variant truncate">https://venturebeat.com/ai/automated-seo-ranking-agents/</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5">
<span className="font-mono-metric text-[16px] text-on-surface font-bold">89</span>
<span className="font-mono-code text-[10px] text-tertiary px-1.5 py-0.5 rounded bg-tertiary-container/30">Lost Link</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1 font-mono-code text-mono-code text-on-surface-variant">
<span className="text-tertiary truncate max-w-[180px]">/solutions/enterprise-ai</span>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-outline hover:text-on-surface">
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</button>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1">
<span className="text-on-surface font-medium truncate max-w-[190px]">"AI crawler telemetry"</span>
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-tertiary-container/30 text-tertiary">404 Removed</span>
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-surface-container text-on-surface-variant">Prior DoFollow</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<div className="flex flex-col">
<span className="text-on-surface font-mono-code text-mono-code">Dropped 3d ago</span>
<span className="text-tertiary font-mono-code text-[10px]">Requires Outreach</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1">
<span className="font-mono-code text-mono-code text-secondary font-semibold">1%</span>
<span className="font-mono-code text-[10px] text-on-surface-variant">Safe</span>
</div>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="h-8 px-2 rounded-lg bg-primary-container text-on-primary-container text-label-md font-medium hover:bg-inverse-primary transition-colors flex items-center gap-1" title="Re-engage Webmaster">
<span className="material-symbols-outlined text-[14px]">outgoing_mail</span>
                  Reclaim
                </button>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Inspect Link Node">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
</div>
</td>
</tr>
{/*  Row 5: Toxic / Scraper Domain Alert  */}
<tr className="bg-tertiary-container/10 hover:bg-tertiary-container/20 transition-colors group">
<td className="py-3.5 px-space-md max-w-sm">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-tertiary-container/50 flex items-center justify-center text-tertiary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">security_update_warning</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-medium text-tertiary truncate">Free-SEO-Rankings-Audit-Scraper-Bot.xyz/directory</span>
<span className="font-mono-code text-mono-code text-outline truncate">http://free-seo-rankings-audit-scraper-bot.xyz/p/892182</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5">
<span className="font-mono-metric text-[16px] text-tertiary font-bold">11</span>
<span className="font-mono-code text-[10px] text-tertiary-fixed-dim px-1.5 py-0.5 rounded bg-tertiary-container">PBN Flag</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1 font-mono-code text-mono-code text-on-surface-variant">
<span className="text-tertiary truncate max-w-[180px]">/pricing</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1">
<span className="text-on-surface font-medium truncate max-w-[190px]">"cheap ranking tracker bot"</span>
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-tertiary text-on-tertiary">Toxic Pattern</span>
<span className="px-1.5 py-0.2 rounded font-mono-code text-[10px] bg-surface-container text-outline">Sitewide Footer</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
<div className="flex flex-col">
<span className="text-on-surface font-mono-code text-mono-code">Oct 17, 2024</span>
<span className="text-tertiary font-mono-code text-[10px]">Spam Burst</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1">
<span className="font-mono-code text-mono-code text-tertiary font-bold">89%</span>
<span className="font-mono-code text-[10px] text-tertiary">Critical</span>
</div>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="h-8 px-2.5 rounded-lg bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold hover:brightness-110 transition-all flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[14px]">shield</span>
                  Auto-Disavow
                </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination & Bulk Status Footer  */}
<div className="p-space-sm bg-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm text-body-sm font-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span>Displaying <strong className="text-on-surface font-mono-code">1 - 5</strong> of <strong className="text-on-surface font-mono-code">14,240</strong> live records</span>
<span className="text-outline">•</span>
<span className="text-secondary font-mono-code text-[11px] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          All clusters indexed
        </span>
</div>
<div className="flex items-center gap-1">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface disabled:opacity-40" disabled>
<span className="material-symbols-outlined text-[16px] align-middle">chevron_left</span>
</button>
<button className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container font-mono-code text-[12px] font-bold">1</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-mono-code text-[12px]">2</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-mono-code text-[12px]">3</button>
<span className="px-1 text-outline font-mono-code text-[12px]">...</span>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-mono-code text-[12px]">285</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[16px] align-middle">chevron_right</span>
</button>
</div>
</div>
</section>
{/*  Bottom High-Opportunity Card: Competitor Link Gaps & Unlinked Brand Mentions  */}
<section className="bg-surface-container-low rounded-xl p-space-lg shadow-xl relative overflow-hidden">
<div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg relative z-10">
<div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">High Priority Outreach Matrix</span>
</div>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
          Competitor Link Gaps &amp; Unlinked Brand Mentions
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-0.5">
          These 4 high-authority publications link to your primary competitors (Ahrefs, Semrush, Conductor) in active crawl trees but have not yet linked to <span className="text-primary font-mono-code">seotriks.io</span>.
        </p>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="h-9 px-space-md rounded-xl bg-surface-container hover:bg-surface-bright text-on-surface font-label-lg text-label-lg flex items-center gap-1.5 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">tune</span>
          Gap Parameters
        </button>
<button className="h-9 px-space-md rounded-xl bg-primary-container hover:bg-inverse-primary text-on-primary-container font-label-lg text-label-lg flex items-center gap-1.5 transition-colors shadow-md">
<span className="material-symbols-outlined text-[16px]">campaign</span>
          Launch Unified Campaign
        </button>
</div>
</div>
{/*  4 High-Authority Opportunity Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter-sm relative z-10">
{/*  Opportunity 1  */}
<div className="bg-surface-container rounded-xl p-space-md shadow-sm hover:translate-y-[-2px] transition-all flex flex-col justify-between group">
<div>
<div className="flex items-start justify-between gap-2 mb-2">
<div className="flex items-center gap-2 min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary font-bold font-display text-[15px] shrink-0">
                W
              </div>
<div className="flex flex-col min-w-0">
<span className="font-semibold text-on-surface text-body-md font-body-md truncate">Wired Enterprise</span>
<span className="font-mono-code text-[11px] text-on-surface-variant truncate">wired.com</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-mono-metric text-[18px] text-secondary font-bold">DA 93</span>
<span className="text-outline font-mono-code text-[9px] uppercase">Top Tier</span>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-low mb-3 space-y-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant text-[11px]">Competitors Linked:</span>
<span className="text-on-surface font-mono-code text-[11px]">Semrush, Conductor</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant text-[11px]">Opportunity Type:</span>
<span className="text-secondary font-mono-code text-[11px]">Autonomous SEO Guide</span>
</div>
</div>
</div>
<button className="w-full h-8 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface text-label-md font-label-md font-medium transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[15px]">send_spark</span>
          One-Click AI Pitch
        </button>
</div>
{/*  Opportunity 2  */}
<div className="bg-surface-container rounded-xl p-space-md shadow-sm hover:translate-y-[-2px] transition-all flex flex-col justify-between group">
<div>
<div className="flex items-start justify-between gap-2 mb-2">
<div className="flex items-center gap-2 min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary font-bold font-display text-[15px] shrink-0">
                G
              </div>
<div className="flex flex-col min-w-0">
<span className="font-semibold text-on-surface text-body-md font-body-md truncate">Gartner Software Insights</span>
<span className="font-mono-code text-[11px] text-on-surface-variant truncate">gartner.com/reviews</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-mono-metric text-[18px] text-secondary font-bold">DA 92</span>
<span className="text-outline font-mono-code text-[9px] uppercase">Magic Q</span>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-low mb-3 space-y-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant text-[11px]">Competitors Linked:</span>
<span className="text-on-surface font-mono-code text-[11px]">BrightEdge, Conductor</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant text-[11px]">Opportunity Type:</span>
<span className="text-primary font-mono-code text-[11px]">Vendor Profile Inclusion</span>
</div>
</div>
</div>
<button className="w-full h-8 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface text-label-md font-label-md font-medium transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[15px]">send_spark</span>
          One-Click AI Pitch
        </button>
</div>
{/*  Opportunity 3  */}
<div className="bg-surface-container rounded-xl p-space-md shadow-sm hover:translate-y-[-2px] transition-all flex flex-col justify-between group">
<div>
<div className="flex items-start justify-between gap-2 mb-2">
<div className="flex items-center gap-2 min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed font-bold font-display text-[15px] shrink-0">
                H
              </div>
<div className="flex flex-col min-w-0">
<span className="font-semibold text-on-surface text-body-md font-body-md truncate">HubSpot Growth Blog</span>
<span className="font-mono-code text-[11px] text-on-surface-variant truncate">blog.hubspot.com</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-mono-metric text-[18px] text-secondary font-bold">DA 91</span>
<span className="text-outline font-mono-code text-[9px] uppercase">Domain Lead</span>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-low mb-3 space-y-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant text-[11px]">Competitors Linked:</span>
<span className="text-on-surface font-mono-code text-[11px]">Ahrefs, Moz, Semrush</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant text-[11px]">Opportunity Type:</span>
<span className="text-tertiary font-mono-code text-[11px]">Unlinked Brand Mention</span>
</div>
</div>
</div>
<button className="w-full h-8 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface text-label-md font-label-md font-medium transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[15px]">send_spark</span>
          Claim Mention Link
        </button>
</div>
{/*  Opportunity 4  */}
<div className="bg-surface-container rounded-xl p-space-md shadow-sm hover:translate-y-[-2px] transition-all flex flex-col justify-between group">
<div>
<div className="flex items-start justify-between gap-2 mb-2">
<div className="flex items-center gap-2 min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary-fixed font-bold font-display text-[15px] shrink-0">
                S
              </div>
<div className="flex flex-col min-w-0">
<span className="font-semibold text-on-surface text-body-md font-body-md truncate">Smashing Magazine</span>
<span className="font-mono-code text-[11px] text-on-surface-variant truncate">smashingmagazine.com</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-mono-metric text-[18px] text-secondary font-bold">DA 89</span>
<span className="text-outline font-mono-code text-[9px] uppercase">Tech Authority</span>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-low mb-3 space-y-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant text-[11px]">Competitors Linked:</span>
<span className="text-on-surface font-mono-code text-[11px]">Screaming Frog</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant text-[11px]">Opportunity Type:</span>
<span className="text-secondary font-mono-code text-[11px]">Technical Web Architecture</span>
</div>
</div>
</div>
<button className="w-full h-8 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface text-label-md font-label-md font-medium transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[15px]">send_spark</span>
          One-Click AI Pitch
        </button>
</div>
</div>
</section>
{/*  Interactive Filter Tabs & Quick Action Micro-Script  */}

</div>
</main>
  )
}