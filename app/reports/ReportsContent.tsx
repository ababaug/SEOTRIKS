"use client";
export function ReportsContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">

<div className="flex flex-col w-full pb-16">
{/*  Header / Action Bar  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg mb-space-xl">
<div className="flex flex-col max-w-3xl">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">Reporting &amp; Deliverables Engine</span>
<span className="w-1 h-1 rounded-full bg-secondary/40"></span>
<span className="font-label-xs text-label-xs font-semibold text-primary px-2 py-0.5 rounded-full bg-primary-fixed/40">Enterprise Tier</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Executive SEO Reports &amp; Automated Deliverables</h1>
<p className="font-body-md text-body-md text-secondary mt-1">Scheduled, white-label PDF/CSV reports, stakeholder briefs, and automated search intelligence digests for <span className="font-semibold text-on-surface">stripe.com</span></p>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-low text-secondary hover:bg-surface-container font-label-md text-label-md font-semibold transition-colors">
<span className="material-symbols-outlined text-[18px]">history</span>
<span>Export History</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-low text-secondary hover:bg-surface-container font-label-md text-label-md font-semibold transition-colors">
<span className="material-symbols-outlined text-[18px]">tune</span>
<span>Schedule Settings</span>
</button>
<button className="flex items-center gap-2 px-space-lg py-2.5 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-md hover:bg-primary transition-all">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>Create New Report</span>
</button>
</div>
</div>
{/*  Metric / KPI Summary Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-lg mb-space-xl">
{/*  Metric 1  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">Active Schedules</span>
<div className="font-metric-stat text-metric-stat text-on-surface font-bold mt-1">12 Reports</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">calendar_month</span>
</div>
</div>
<div className="flex items-center gap-2 mt-4 pt-3 bg-surface-container-lowest">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-body-sm text-body-sm text-secondary font-medium">8 Weekly, 4 Monthly cadence</span>
</div>
</div>
{/*  Metric 2  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">Delivered This Month</span>
<div className="font-metric-stat text-metric-stat text-on-surface font-bold mt-1">48 Deliveries</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/50 flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[22px]">mark_email_read</span>
</div>
</div>
<div className="flex items-center gap-2 mt-4 pt-3">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">100% On Time</span>
<span className="font-body-sm text-body-sm text-secondary">Zero dispatch failures</span>
</div>
</div>
{/*  Metric 3  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">Stakeholder Reach</span>
<div className="font-metric-stat text-metric-stat text-on-surface font-bold mt-1">34 Recipients</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">group</span>
</div>
</div>
<div className="flex items-center gap-2 mt-4 pt-3">
<span className="font-body-sm text-body-sm text-secondary">C-Suite, Engineering &amp; Growth pods</span>
</div>
</div>
{/*  Metric 4  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">AI Synthesized Briefs</span>
<div className="font-metric-stat text-metric-stat text-on-surface font-bold mt-1">4 Generated</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">auto_awesome</span>
</div>
</div>
<div className="flex items-center gap-2 mt-4 pt-3">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-container font-label-xs text-label-xs font-bold">GPT-4o Deep Causal</span>
<span className="font-body-sm text-body-sm text-secondary">Real-time narrative</span>
</div>
</div>
</div>
{/*  AI Executive Briefing Engine Highlight Banner  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm mb-space-xl relative overflow-hidden">
<div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-gradient-to-br from-primary-container/10 via-secondary-container/20 to-transparent pointer-events-none blur-2xl"></div>
<div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="flex items-start gap-space-md max-w-4xl">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[24px]">psychology</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-primary">AI Executive Briefing Engine</span>
<span className="text-secondary font-label-xs text-label-xs">•</span>
<span className="font-label-xs text-label-xs font-semibold px-2 py-0.5 rounded-full bg-surface-container text-on-surface">Q1 Performance Summary Ready</span>
<span className="font-label-xs text-label-xs text-secondary">Processed 42 mins ago</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">Stripe Q1 Organic Health reached 94/100 (+3.4 pts)</p>
<p className="font-body-md text-body-md text-secondary mt-1">
            Accelerated crawl velocity following the <span className="font-semibold text-on-surface">robots.txt sitemap directory restyle</span> unlocked <span className="font-semibold text-primary">+14.8k estimated monthly visits</span>. Competitor displacement engine recorded <span className="font-semibold text-on-surface">32 keyword gap closures</span> against Adyen payments documentation.
          </p>
</div>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col gap-2 flex-shrink-0">
<button className="flex items-center justify-center gap-2 px-space-md py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow-sm hover:opacity-95 transition-opacity">
<span className="material-symbols-outlined text-[18px]">visibility</span>
<span>Preview Summary</span>
</button>
<button className="flex items-center justify-center gap-2 px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px]">send</span>
<span>Send to C-Suite Slack</span>
</button>
</div>
</div>
</div>
{/*  Pre-Built Executive Templates Gallery  */}
<div className="mb-space-xl">
<div className="flex items-center justify-between mb-space-md">
<div>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">Pre-Built Deliverable Blueprints</h2>
<p className="font-body-sm text-body-sm text-secondary">Proven corporate templates built for VP, Engineering, and Growth audiences.</p>
</div>
<a className="font-label-md text-label-md font-semibold text-primary flex items-center gap-1 hover:underline" href="#">
<span>Browse all 14 blueprints</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Blueprint Card 1  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="h-36 w-full rounded-xl bg-surface-container-low overflow-hidden relative mb-space-md">
<div className="absolute inset-0 bg-gradient-to-tr from-secondary/80 to-tertiary/40 p-4 flex flex-col justify-between">
<span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-xs text-label-xs font-bold w-fit">Monthly Deck</span>
<div className="flex items-end justify-between">
<div>
<span className="font-label-xs text-label-xs text-inverse-on-surface/80 uppercase font-semibold">Slide Count</span>
<p className="font-headline-sm text-headline-sm font-bold text-on-secondary">12 Formatted Slides</p>
</div>
<span className="material-symbols-outlined text-on-secondary text-2xl">monitoring</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider">Executive Tier</span>
<span className="text-secondary">•</span>
<span className="font-label-xs text-label-xs text-secondary">PDF &amp; Google Slides</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">C-Suite Organic Growth &amp; ARR Impact</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Translates crawl delta, keyword visibility gains, and SERP share into attributable pipeline and revenue retention metrics.</p>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between bg-surface-container-low/40 rounded-xl px-3 py-2">
<span className="font-label-xs text-label-xs font-semibold text-secondary">Covers: ARR, Competitors, CWV</span>
<div className="flex items-center gap-2">
<button className="p-1 text-secondary hover:text-on-surface rounded">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="px-3 py-1 bg-secondary text-on-secondary font-label-xs text-label-xs font-bold rounded-lg hover:opacity-95">Use Template</button>
</div>
</div>
</div>
{/*  Blueprint Card 2  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="h-36 w-full rounded-xl bg-surface-container-low overflow-hidden relative mb-space-md">
<div className="absolute inset-0 bg-gradient-to-tr from-on-secondary-fixed/90 to-secondary/60 p-4 flex flex-col justify-between">
<span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-xs text-label-xs font-bold w-fit">Bi-Weekly Technical</span>
<div className="flex items-end justify-between">
<div>
<span className="font-label-xs text-label-xs text-inverse-on-surface/80 uppercase font-semibold">CrUX Radar</span>
<p className="font-headline-sm text-headline-sm font-bold text-on-secondary">CrUX + Bot Logs</p>
</div>
<span className="material-symbols-outlined text-on-secondary text-2xl">terminal</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider">DevOps &amp; Infra</span>
<span className="text-secondary">•</span>
<span className="font-label-xs text-label-xs text-secondary">PDF, CSV, Jira Hook</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">Engineering &amp; Technical Health Dossier</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Deep-dive into 5xx/4xx crawl errors, canonical status loops, schema validation bugs, and Core Web Vitals latency telemetry.</p>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between bg-surface-container-low/40 rounded-xl px-3 py-2">
<span className="font-label-xs text-label-xs font-semibold text-secondary">Covers: Status codes, CWV, Schema</span>
<div className="flex items-center gap-2">
<button className="p-1 text-secondary hover:text-on-surface rounded">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="px-3 py-1 bg-secondary text-on-secondary font-label-xs text-label-xs font-bold rounded-lg hover:opacity-95">Use Template</button>
</div>
</div>
</div>
{/*  Blueprint Card 3  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="h-36 w-full rounded-xl bg-surface-container-low overflow-hidden relative mb-space-md">
<div className="absolute inset-0 bg-gradient-to-tr from-primary-container/85 to-primary/80 p-4 flex flex-col justify-between">
<span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-xs text-label-xs font-bold w-fit">Weekly Growth</span>
<div className="flex items-end justify-between">
<div>
<span className="font-label-xs text-label-xs text-inverse-on-surface/80 uppercase font-semibold">Topic Velocity</span>
<p className="font-headline-sm text-headline-sm font-bold text-on-primary">18 Decay Signals</p>
</div>
<span className="material-symbols-outlined text-on-primary text-2xl">trending_down</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider">Content Strategy</span>
<span className="text-secondary">•</span>
<span className="font-label-xs text-label-xs text-secondary">PDF &amp; Web Dashboard Link</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">Content Decay &amp; Topic Cluster Velocity</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Identifies high-impression documentation URLs sliding off page 1, keyword cannibalization clusters, and urgent refresh needs.</p>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between bg-surface-container-low/40 rounded-xl px-3 py-2">
<span className="font-label-xs text-label-xs font-semibold text-secondary">Covers: Decay, Cannibalization, Gaps</span>
<div className="flex items-center gap-2">
<button className="p-1 text-secondary hover:text-on-surface rounded">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="px-3 py-1 bg-secondary text-on-secondary font-label-xs text-label-xs font-bold rounded-lg hover:opacity-95">Use Template</button>
</div>
</div>
</div>
</div>
</div>
{/*  Active Scheduled Reports Section  */}
<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden mb-space-xl">
{/*  Filter Navigation Tabs  */}
<div className="p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-low/30">
<div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
<button className="px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold whitespace-nowrap shadow-sm">
          All Reports (18)
        </button>
<button className="px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-secondary font-label-md text-label-md font-medium whitespace-nowrap transition-colors">
          Scheduled (12)
        </button>
<button className="px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-secondary font-label-md text-label-md font-medium whitespace-nowrap transition-colors">
          Executive (4)
        </button>
<button className="px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-secondary font-label-md text-label-md font-medium whitespace-nowrap transition-colors">
          Ad-hoc / On Demand (2)
        </button>
</div>
<div className="flex items-center gap-space-sm">
<div className="relative flex items-center w-full md:w-64">
<span className="material-symbols-outlined absolute left-3 text-secondary text-sm">search</span>
<input className="w-full pl-9 pr-3 py-1.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Filter deliverable name..." type="text"/>
</div>
<button className="p-2 bg-surface-container-lowest text-secondary hover:text-on-surface rounded-lg transition-colors">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
</div>
</div>
{/*  Data Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-xs text-label-xs uppercase tracking-wider font-bold">
<th className="py-3 px-space-lg">Report Name &amp; Focus</th>
<th className="py-3 px-space-md">Cadence</th>
<th className="py-3 px-space-md">Last Sent &amp; Status</th>
<th className="py-3 px-space-md">Recipients</th>
<th className="py-3 px-space-md">Format</th>
<th className="py-3 px-space-lg text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-transparent font-body-md text-body-md text-on-surface">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-4 px-space-lg">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-secondary-container/40 flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">bar_chart</span>
</div>
<div className="min-w-0">
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Stripe Executive Organic Growth Deck</div>
<div className="font-label-xs text-label-xs text-secondary">Global Domain Visibility • Tier 1 Briefing</div>
</div>
</div>
</td>
<td className="py-4 px-space-md font-body-sm text-body-sm text-secondary whitespace-nowrap">
              Monthly <span className="font-label-xs text-label-xs text-secondary block">(1st business day)</span>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Delivered</span>
</div>
<span className="font-label-xs text-label-xs text-secondary block">2 days ago (Mar 1, 08:00 UTC)</span>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="flex -space-x-2 overflow-hidden">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-on-secondary font-label-xs text-label-xs font-bold">JD</span>
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-tertiary text-on-tertiary font-label-xs text-label-xs font-bold">PC</span>
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-bold">+4</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">6 execs</span>
</div>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs font-bold text-secondary">PDF</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs font-bold text-secondary">Slides</span>
</div>
</td>
<td className="py-4 px-space-lg text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold hover:bg-surface-container-high transition-colors">
                  Run Now
                </button>
<button className="p-1 text-secondary hover:text-on-surface rounded transition-colors" title="Download latest">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-1 text-secondary hover:text-on-surface rounded transition-colors" title="Edit configuration">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
</div>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-4 px-space-lg">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">terminal</span>
</div>
<div className="min-w-0">
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Weekly Technical Infrastructure Audit</div>
<div className="font-label-xs text-label-xs text-secondary">Core Web Vitals, Crawl 5xx, Canonical Maps</div>
</div>
</div>
</td>
<td className="py-4 px-space-md font-body-sm text-body-sm text-secondary whitespace-nowrap">
              Weekly <span className="font-label-xs text-label-xs text-secondary block">Mondays, 06:00 UTC</span>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Delivered</span>
</div>
<span className="font-label-xs text-label-xs text-secondary block">Yesterday (06:01 UTC)</span>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="flex -space-x-2 overflow-hidden">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-on-secondary font-label-xs text-label-xs font-bold">Dev</span>
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-bold">+13</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">14 eng team</span>
</div>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs font-bold text-secondary">PDF</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs font-bold text-secondary">CSV</span>
</div>
</td>
<td className="py-4 px-space-lg text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold hover:bg-surface-container-high transition-colors">
                  Run Now
                </button>
<button className="p-1 text-secondary hover:text-on-surface rounded transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-1 text-secondary hover:text-on-surface rounded transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
</div>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-4 px-space-lg">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">notifications_active</span>
</div>
<div className="min-w-0">
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Competitor Displacement Alert: Adyen &amp; Checkout.com</div>
<div className="font-label-xs text-label-xs text-secondary">Real-time delta tracking on &gt;3 pos movements</div>
</div>
</div>
</td>
<td className="py-4 px-space-md font-body-sm text-body-sm text-secondary whitespace-nowrap">
              Event Triggered <span className="font-label-xs text-label-xs text-secondary block">Delta ≥ 3 positions</span>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-md text-label-md font-semibold text-primary">Active Trigger</span>
</div>
<span className="font-label-xs text-label-xs text-secondary block">Last fired 4 hours ago</span>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs font-semibold text-secondary">4 leads (Slack #seo-war-room)</span>
</div>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">Slack</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs font-bold text-secondary">Email</span>
</div>
</td>
<td className="py-4 px-space-lg text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded-md bg-secondary text-on-secondary font-label-xs text-label-xs font-semibold hover:opacity-95 transition-opacity">
                  Configure
                </button>
<button className="p-1 text-secondary hover:text-on-surface rounded transition-colors" title="Test Webhook">
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-4 px-space-lg">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">dataset</span>
</div>
<div className="min-w-0">
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Content Strategy &amp; Decay Radar</div>
<div className="font-label-xs text-label-xs text-secondary">Docs &amp; Guide page degradation over 90 days</div>
</div>
</div>
</td>
<td className="py-4 px-space-md font-body-sm text-body-sm text-secondary whitespace-nowrap">
              Bi-weekly <span className="font-label-xs text-label-xs text-secondary block">Every other Wednesday</span>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Scheduled</span>
</div>
<span className="font-label-xs text-label-xs text-secondary block">Next run in 3 days</span>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary">8 editors &amp; product marketers</span>
</div>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs font-bold text-secondary">Web Link</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs font-bold text-secondary">PDF</span>
</div>
</td>
<td className="py-4 px-space-lg text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold hover:bg-surface-container-high transition-colors">
                  Run Now
                </button>
<button className="p-1 text-secondary hover:text-on-surface rounded transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
</div>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-4 px-space-lg">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">speed</span>
</div>
<div className="min-w-0">
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Core Web Vitals &amp; Real-User Latency Report</div>
<div className="font-label-xs text-label-xs text-secondary">LCP, INP, CLS benchmarks by region &amp; device</div>
</div>
</div>
</td>
<td className="py-4 px-space-md font-body-sm text-body-sm text-secondary whitespace-nowrap">
              Weekly <span className="font-label-xs text-label-xs text-secondary block">Sundays, 23:00 UTC</span>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Delivered</span>
</div>
<span className="font-label-xs text-label-xs text-secondary block">3 days ago</span>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary">9 front-end architects</span>
</div>
</td>
<td className="py-4 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs font-bold text-secondary">PDF</span>
</div>
</td>
<td className="py-4 px-space-lg text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold hover:bg-surface-container-high transition-colors">
                  Run Now
                </button>
<button className="p-1 text-secondary hover:text-on-surface rounded transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-1 text-secondary hover:text-on-surface rounded transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination / Summary Footer  */}
<div className="px-space-lg py-space-md bg-surface-container-low/40 flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary">Showing 5 of 18 configured deliverable schedules</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded bg-surface-container text-secondary disabled:opacity-40" disabled>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<span className="px-2 font-label-xs text-label-xs font-bold text-on-surface">Page 1 of 4</span>
<button className="p-1 rounded bg-surface-container text-secondary hover:text-on-surface">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  Real-Time Automation & Webhook Dispatch Stream Log  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-secondary-container"></div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Automated Telemetry &amp; Dispatch Stream</h3>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono">Live Webhook Log • Socket ID: sock_stripe_telemetry_99</span>
</div>
<div className="space-y-2">
{/*  Log item 1  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-sm bg-surface-container-low rounded-xl text-body-sm">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-base">cloud_sync</span>
<span className="font-mono text-secondary text-label-xs">14:02:18 UTC</span>
<span className="font-semibold text-on-surface">Google Drive White-Label Sync:</span>
<span className="text-secondary">Exported "Stripe Executive Organic Growth Deck.pdf" (14.2 MB) to /Enterprise-Shared/SEO-Briefs</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-secondary font-label-xs text-label-xs font-semibold self-start sm:self-auto mt-1 sm:mt-0">HTTP 200 OK</span>
</div>
{/*  Log item 2  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-sm bg-surface-container-low rounded-xl text-body-sm">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-base">warning</span>
<span className="font-mono text-secondary text-label-xs">12:45:00 UTC</span>
<span className="font-semibold text-on-surface">Slack Webhook Dispatched:</span>
<span className="text-secondary">Triggered notification to #seo-war-room: "Adyen shifted +4 on 'embedded finance api'"</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-secondary font-label-xs text-label-xs font-semibold self-start sm:self-auto mt-1 sm:mt-0">Slack API: Delivered</span>
</div>
{/*  Log item 3  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-sm bg-surface-container-low rounded-xl text-body-sm">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-base">mail</span>
<span className="font-mono text-secondary text-label-xs">06:01:22 UTC</span>
<span className="font-semibold text-on-surface">SendGrid Batch Dispatch:</span>
<span className="text-secondary">14 recipients delivered for "Weekly Technical Infrastructure Audit"</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-secondary font-label-xs text-label-xs font-semibold self-start sm:self-auto mt-1 sm:mt-0">Delivered 14/14</span>
</div>
</div>
</div>
</div>

</main>
  )
}