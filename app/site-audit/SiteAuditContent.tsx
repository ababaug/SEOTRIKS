export function SiteAuditContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full gap-space-lg">
{/*  Header Banner & Operations Command Area  */}
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md p-space-lg bg-surface-container rounded-xl shadow-md relative overflow-hidden">
{/*  Subtle Ambient Backdrop Wave  */}
<div className="absolute -right-20 -top-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -left-12 -bottom-20 w-80 h-80 bg-secondary/5 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex flex-col gap-space-xs z-10">
<div className="flex items-center gap-3 flex-wrap">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">Site Audit &amp; Crawl Telemetry</span>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface text-label-md font-mono-code shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-semibold text-primary">seotriks.io</span>
<span className="text-on-surface-variant font-label-md">(Production)</span>
</div>
<span className="px-2 py-0.5 rounded text-label-md font-mono-code bg-surface-container-highest text-secondary-fixed">Live Telemetry</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant font-body-sm flex-wrap">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
          Completed 24 minutes ago
        </span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">smart_toy</span>
          DeepBot v4.2 Crawler
        </span>
<span className="text-outline-variant">•</span>
<span className="font-mono-code text-on-surface font-medium">9,812 URLs analyzed</span>
<span className="text-outline-variant">•</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-lowest text-primary font-mono-code text-[11px]">HTTP/2 Concurrent</span>
</div>
</div>
{/*  Crawl Action Buttons  */}
<div className="flex items-center gap-2 flex-wrap z-10">
<button className="h-10 px-4 bg-secondary-container hover:bg-secondary text-on-secondary-container font-label-lg font-semibold rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-[0.98]">
<span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
        Run New Full Crawl
      </button>
<div className="relative group">
<button className="h-10 px-3.5 bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-lg rounded-xl flex items-center gap-1.5 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[17px] text-on-surface-variant">tune</span>
<span>Config</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_drop_down</span>
</button>
</div>
<button className="h-10 px-3.5 bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-lg rounded-xl flex items-center gap-1.5 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[17px] text-on-surface-variant">compare_arrows</span>
<span>Compare Crawls</span>
</button>
<button className="h-10 px-3.5 bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-lg rounded-xl flex items-center gap-1.5 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[17px] text-primary">download</span>
<span>Export</span>
</button>
</div>
</div>
{/*  Primary Metric KPI Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  1. Site Health Score Card  */}
<div className="bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Site Health Score</span>
</div>
<span className="flex items-center gap-0.5 text-secondary font-mono-code text-label-md bg-secondary/10 px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>+3 pts
        </span>
</div>
<div className="flex items-center justify-between mt-4">
<div>
<div className="font-display text-display text-on-surface leading-none font-bold tracking-tight">88<span className="text-on-surface-variant font-headline-sm font-normal">/100</span></div>
<span className="font-label-md text-label-md text-secondary block mt-1.5">Algorithmic Grade: High</span>
</div>
{/*  Radial Gauge Indicator  */}
<div className="relative w-16 h-16 shrink-0">
<svg className="w-full h-full -rotate-90" viewBox="0 0 44 44">
<circle className="text-surface-container-highest" cx="22" cy="22" fill="none" r="18" stroke="currentColor" strokeWidth="3.5"></circle>
<circle className="text-secondary" cx="22" cy="22" fill="none" r="18" stroke="currentColor" strokeDasharray="113.1" strokeDashoffset="13.5" strokeLinecap="round" strokeWidth="3.5"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center font-mono-code text-[11px] text-on-surface font-bold">88%</div>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-mono-code text-label-md">
<span>Prev crawl: 85/100</span>
<span className="text-secondary-fixed">Target: 92+</span>
</div>
</div>
{/*  2. Crawl Scope Breakdown Card  */}
<div className="bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">travel_explore</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Crawl Scope</span>
</div>
<span className="font-mono-code text-label-md text-primary bg-primary/10 px-1.5 py-0.5 rounded">Deep Crawl</span>
</div>
<div className="mt-3">
<div className="font-mono-metric text-mono-metric text-on-surface font-bold">9,812 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">URLs</span></div>
{/*  Multi-segment Progress Bar  */}
<div className="w-full h-2 rounded-full bg-surface-container-highest flex overflow-hidden mt-3 shadow-inner">
<div className="bg-secondary h-full"  title="Healthy: 8,419 (85.8%)"></div>
<div className="bg-tertiary h-full"  title="Warnings: 1,042 (10.6%)"></div>
<div className="bg-error h-full"  title="Errors: 351 (3.6%)"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-1 mt-4 pt-2 text-center font-mono-code">
<div className="bg-surface-container-low py-1 rounded">
<span className="block text-secondary text-[11px] font-bold">8,419</span>
<span className="text-on-surface-variant text-[10px]">Healthy</span>
</div>
<div className="bg-surface-container-low py-1 rounded">
<span className="block text-tertiary text-[11px] font-bold">1,042</span>
<span className="text-on-surface-variant text-[10px]">Warnings</span>
</div>
<div className="bg-surface-container-low py-1 rounded">
<span className="block text-error text-[11px] font-bold">351</span>
<span className="text-on-surface-variant text-[10px]">Errors</span>
</div>
</div>
</div>
{/*  3. Canonical & Indexation Integrity Card  */}
<div className="bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed">
<span className="material-symbols-outlined text-[18px]">schema</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Indexation Integrity</span>
</div>
<span className="text-secondary font-mono-code text-label-md bg-secondary/10 px-1.5 py-0.5 rounded">98.2%</span>
</div>
<div className="mt-3">
<div className="font-mono-metric text-mono-metric text-on-surface font-bold">0 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">Orphan Pages</span></div>
<span className="text-body-sm text-secondary block mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">done_all</span> 9,635 matching canonical tags
        </span>
</div>
<div className="mt-3 pt-3 flex flex-col gap-1.5 font-label-md">
<div className="flex justify-between text-on-surface-variant">
<span>Robots.txt Allowed:</span>
<span className="font-mono-code text-on-surface">9,740 URLs</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Sitemap Conformity:</span>
<span className="font-mono-code text-secondary font-medium">99.4% Match</span>
</div>
</div>
</div>
{/*  4. Core Web Vitals Telemetry Card  */}
<div className="bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">speed</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Avg CWV (Field Data)</span>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary text-label-md font-mono-code font-bold">PASS</span>
</div>
<div className="grid grid-cols-3 gap-2 mt-3 font-mono-code text-center">
<div className="bg-surface-container-low p-2 rounded-lg">
<span className="block text-secondary font-mono-metric text-headline-sm font-bold">1.12s</span>
<span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">LCP (Fast)</span>
</div>
<div className="bg-surface-container-low p-2 rounded-lg">
<span className="block text-secondary font-mono-metric text-headline-sm font-bold">42ms</span>
<span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">INP (Good)</span>
</div>
<div className="bg-surface-container-low p-2 rounded-lg">
<span className="block text-secondary font-mono-metric text-headline-sm font-bold">0.02</span>
<span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">CLS (Stable)</span>
</div>
</div>
<div className="mt-3 pt-2 flex items-center justify-between text-on-surface-variant font-mono-code text-label-md">
<span>Desktop: 94 / Mobile: 89</span>
<span className="text-primary hover:underline cursor-pointer flex items-center gap-0.5">Details <span className="material-symbols-outlined text-[13px]">arrow_forward</span></span>
</div>
</div>
</div>
{/*  Deep Interactive Visualizations Bento Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Issue Distribution by Category & Severity (7 Cols)  */}
<div className="lg:col-span-7 bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between pb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">donut_large</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">Issue Breakdown by Category &amp; Severity</h2>
</div>
<div className="flex items-center gap-3 text-label-md font-mono-code">
<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-error"></span>Critical (15)</span>
<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>Warning (103)</span>
<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary"></span>Notice (48)</span>
</div>
</div>
{/*  Category Comparison Bars  */}
<div className="flex flex-col gap-3.5 my-2">
{/*  Category 1: Metadata & Tags  */}
<div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-1.5 hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-center justify-between font-label-lg text-label-lg">
<span className="text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">title</span>
              Metadata &amp; Structured Data
            </span>
<div className="flex items-center gap-3 font-mono-code text-label-md">
<span className="text-error font-semibold">8 Critical</span>
<span className="text-tertiary font-semibold">24 Warnings</span>
<span className="text-on-surface-variant">12 Notices</span>
</div>
</div>
<div className="w-full h-2 rounded bg-surface-container-highest flex overflow-hidden">
<div className="bg-error h-full" ></div>
<div className="bg-tertiary h-full" ></div>
<div className="bg-primary h-full" ></div>
</div>
</div>
{/*  Category 2: Performance & CWV  */}
<div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-1.5 hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-center justify-between font-label-lg text-label-lg">
<span className="text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
              Page Performance &amp; CWV
            </span>
<div className="flex items-center gap-3 font-mono-code text-label-md">
<span className="text-error font-semibold">2 Critical</span>
<span className="text-tertiary font-semibold">45 Warnings</span>
<span className="text-on-surface-variant">19 Notices</span>
</div>
</div>
<div className="w-full h-2 rounded bg-surface-container-highest flex overflow-hidden">
<div className="bg-error h-full" ></div>
<div className="bg-tertiary h-full" ></div>
<div className="bg-primary h-full" ></div>
</div>
</div>
{/*  Category 3: Crawlability & Architecture  */}
<div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-1.5 hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-center justify-between font-label-lg text-label-lg">
<span className="text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">alt_route</span>
              Crawlability &amp; Architecture
            </span>
<div className="flex items-center gap-3 font-mono-code text-label-md">
<span className="text-error font-semibold">4 Critical</span>
<span className="text-tertiary font-semibold">12 Warnings</span>
<span className="text-on-surface-variant">9 Notices</span>
</div>
</div>
<div className="w-full h-2 rounded bg-surface-container-highest flex overflow-hidden">
<div className="bg-error h-full" ></div>
<div className="bg-tertiary h-full" ></div>
<div className="bg-primary h-full" ></div>
</div>
</div>
{/*  Category 4: Internal Links  */}
<div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-1.5 hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-center justify-between font-label-lg text-label-lg">
<span className="text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-fixed">link_off</span>
              Internal Linking &amp; Anchors
            </span>
<div className="flex items-center gap-3 font-mono-code text-label-md">
<span className="text-error font-semibold">1 Critical</span>
<span className="text-tertiary font-semibold">18 Warnings</span>
<span className="text-on-surface-variant">8 Notices</span>
</div>
</div>
<div className="w-full h-2 rounded bg-surface-container-highest flex overflow-hidden">
<div className="bg-error h-full" ></div>
<div className="bg-tertiary h-full" ></div>
<div className="bg-primary h-full" ></div>
</div>
</div>
{/*  Category 5: Security & HTTPS  */}
<div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-1.5 hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-center justify-between font-label-lg text-label-lg">
<span className="text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
              Security &amp; HTTPS Verification
            </span>
<div className="flex items-center gap-3 font-mono-code text-label-md">
<span className="text-secondary font-semibold">0 Critical</span>
<span className="text-tertiary font-semibold">4 Warnings</span>
<span className="text-on-surface-variant">0 Notices</span>
</div>
</div>
<div className="w-full h-2 rounded bg-surface-container-highest flex overflow-hidden">
<div className="bg-secondary h-full" ></div>
<div className="bg-tertiary h-full" ></div>
</div>
</div>
</div>
<div className="pt-3 flex items-center justify-between text-on-surface-variant font-label-md">
<span>Click any row to filter the issues stream below</span>
<button className="text-primary hover:text-on-surface flex items-center gap-1 font-semibold">
          Reset Filter <span className="material-symbols-outlined text-[14px]">refresh</span>
</button>
</div>
</div>
{/*  Historical Health Score Trend (5 Cols)  */}
<div className="lg:col-span-5 bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-secondary">monitoring</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">6-Month Health Progression</h2>
</div>
<span className="text-label-md font-mono-code text-secondary bg-secondary/10 px-2 py-0.5 rounded">+20 pts Total Gain</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Progression from Q4 release to latest automated Cloudflare edge deployment.</p>
{/*  SVG Line Chart with Gradient  */}
<div className="w-full h-48 relative mt-3">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 180">
<defs>
<linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#4edea3" stopOpacity="0.3"></stop>
<stop offset="100%" stopColor="#4edea3" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
{/*  Dashed Grid Lines  */}
<line stroke="#2c3544" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="400" y1="35" y2="35"></line>
<line stroke="#2c3544" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="400" y1="75" y2="75"></line>
<line stroke="#2c3544" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="400" y1="115" y2="115"></line>
<line stroke="#2c3544" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="400" y1="155" y2="155"></line>
{/*  Fill Area  */}
<polygon fill="url(#chartGradient)" points="10,140 70,132 140,118 210,95 280,72 350,55 390,40 390,170 10,170"></polygon>
{/*  Trend Stroke  */}
<polyline fill="none" points="10,140 70,132 140,118 210,95 280,72 350,55 390,40" stroke="#4edea3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></polyline>
{/*  Data Points & Milestones  */}
<circle cx="10" cy="140" fill="#abc8f4" r="3.5"></circle>
<circle cx="140" cy="118" fill="#abc8f4" r="3.5"></circle>
<circle cx="210" cy="95" fill="#ffb4a3" r="4.5" stroke="#0a1421" strokeWidth="2"></circle>
<circle cx="390" cy="40" fill="#4edea3" r="5" stroke="#0a1421" strokeWidth="2"></circle>
</svg>
{/*  Overlay Deployment Pins  */}
<div className="absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-full bg-surface-container-highest px-1.5 py-0.5 rounded shadow text-label-md font-mono-code text-tertiary">
          v3.1 SSR Deploy
        </div>
<div className="absolute right-2 top-4 bg-secondary-container px-2 py-0.5 rounded shadow text-label-md font-mono-code text-on-secondary-container font-bold">
          88 (Today)
        </div>
</div>
{/*  X-Axis Labels  */}
<div className="flex justify-between text-on-surface-variant font-mono-code text-label-md pt-2">
<span>Oct '23 (68)</span>
<span>Nov '23 (71)</span>
<span>Dec '23 (76)</span>
<span>Jan '24 (81)</span>
<span>Feb '24 (85)</span>
<span className="text-secondary font-bold">Mar '24 (88)</span>
</div>
{/*  Context Note  */}
<div className="mt-3 p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between text-label-md font-mono-code">
<span className="text-on-surface-variant">Algorithmic Risk Level:</span>
<span className="text-secondary font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Very Low (Minimal SERP Penalty Risk)
        </span>
</div>
</div>
</div>
{/*  Audit Issues Stream & Direct Remediation Section  */}
<div className="bg-surface-container rounded-xl shadow-md p-space-lg flex flex-col gap-space-md">
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-sm pb-2">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">Audit Issues Stream &amp; Remediation Queue</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Automated deep inspection diagnostics prioritized by potential SERP impact</p>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 bg-secondary-container text-on-secondary-container font-label-lg font-medium rounded-lg flex items-center gap-1.5 shadow-sm hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-[17px]">auto_fix_high</span>
          Remediate 8 Edge Fixes Now
        </button>
</div>
</div>
{/*  Filter Pills / Tabs  */}
<div className="flex items-center gap-2 overflow-x-auto pb-1 border-b-0">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md font-semibold flex items-center gap-1.5 shadow-sm">
<span>All Issues</span>
<span className="px-1.5 py-0.2 rounded-full font-mono-code text-[10px] bg-surface-container text-on-surface">24</span>
</button>
<button className="px-3 py-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant font-label-md flex items-center gap-1.5 transition-colors">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span>Critical Errors</span>
<span className="px-1.5 py-0.2 rounded-full font-mono-code text-[10px] bg-tertiary-container text-on-tertiary-container">3</span>
</button>
<button className="px-3 py-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant font-label-md flex items-center gap-1.5 transition-colors">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>High Warnings</span>
<span className="px-1.5 py-0.2 rounded-full font-mono-code text-[10px] bg-surface-container-highest text-on-surface-variant">14</span>
</button>
<button className="px-3 py-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant font-label-md flex items-center gap-1.5 transition-colors">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>Notices</span>
<span className="px-1.5 py-0.2 rounded-full font-mono-code text-[10px] bg-surface-container-highest text-on-surface-variant">7</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-secondary-container/20 text-secondary font-label-md flex items-center gap-1.5 font-semibold">
<span className="material-symbols-outlined text-[15px]">flash_on</span>
<span>Auto-Fixable via Edge</span>
<span className="px-1.5 py-0.2 rounded-full font-mono-code text-[10px] bg-secondary-container text-on-secondary-container">8</span>
</button>
</div>
{/*  Data Table Container  */}
<div className="overflow-x-auto rounded-lg bg-surface-container-low">
<table className="w-full text-left font-body-sm border-collapse">
<thead className="bg-surface-container-lowest text-on-surface-variant font-mono-code text-[11px] uppercase tracking-wider">
<tr>
<th className="py-3 px-4">Severity</th>
<th className="py-3 px-4">Issue Description &amp; Diagnostic Details</th>
<th className="py-3 px-4">Category</th>
<th className="py-3 px-4 text-center">Affected URLs</th>
<th className="py-3 px-4">Automation Status</th>
<th className="py-3 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface">
{/*  Row 1: Critical Redirect Loop  */}
<tr className="hover:bg-surface-container-high/60 transition-colors">
<td className="py-3.5 px-4 align-top">
<span className="px-2 py-0.5 rounded font-mono-code text-[11px] bg-error-container text-on-error-container font-semibold uppercase flex items-center gap-1 w-fit">
<span className="material-symbols-outlined text-[14px]">dangerous</span>
                Critical
              </span>
</td>
<td className="py-3.5 px-4 max-w-md">
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[14px] leading-tight">
                404 Canonical Redirect Loops on /features/*
              </div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Trailing slash canonical rewrite rules create a circular 301 loop returning final 404 response to search engine crawlers.
              </p>
<div className="flex items-center gap-2 mt-1.5 font-mono-code text-[11px] text-tertiary">
<span className="material-symbols-outlined text-[13px]">warning</span> Potential lost crawl equity: ~1,200 impressions/mo
              </div>
</td>
<td className="py-3.5 px-4 align-top">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-mono-code text-label-md">
                Crawlability
              </span>
</td>
<td className="py-3.5 px-4 align-top text-center font-mono-code font-bold text-error">
              42 URLs
            </td>
<td className="py-3.5 px-4 align-top">
<div className="flex items-center gap-1.5 text-secondary font-mono-code text-[12px] bg-secondary/10 px-2 py-1 rounded w-fit">
<span className="material-symbols-outlined text-[14px]">bolt</span>
                Ready for Edge Fix
              </div>
</td>
<td className="py-3.5 px-4 align-top text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 bg-secondary-container hover:bg-secondary text-on-secondary-container text-label-md font-semibold rounded transition-colors flex items-center gap-1">
                  Fix Edge Rule
                </button>
<button className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors" title="Inspect URLs">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors" title="Assign to Engineer">
<span className="material-symbols-outlined text-[16px]">person_add</span>
</button>
</div>
</td>
</tr>
{/*  Row 2: Missing Meta / OG  */}
<tr className="hover:bg-surface-container-high/60 transition-colors bg-surface-container-lowest/30">
<td className="py-3.5 px-4 align-top">
<span className="px-2 py-0.5 rounded font-mono-code text-[11px] bg-tertiary-container text-on-tertiary-container font-semibold uppercase flex items-center gap-1 w-fit">
<span className="material-symbols-outlined text-[14px]">warning</span>
                Warning
              </span>
</td>
<td className="py-3.5 px-4 max-w-md">
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[14px] leading-tight">
                Missing OpenGraph &amp; Meta Descriptions on Localized Paths
              </div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Sub-directories <code className="font-mono-code text-[12px] text-primary">/es/*</code> and <code className="font-mono-code text-[12px] text-primary">/fr/*</code> lack translated descriptions, causing search engines to pull arbitrary body boilerplate.
              </p>
</td>
<td className="py-3.5 px-4 align-top">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-mono-code text-label-md">
                Metadata
              </span>
</td>
<td className="py-3.5 px-4 align-top text-center font-mono-code font-bold text-tertiary">
              18 URLs
            </td>
<td className="py-3.5 px-4 align-top">
<div className="flex items-center gap-1.5 text-primary font-mono-code text-[12px] bg-primary/10 px-2 py-1 rounded w-fit">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                AI Remediation Ready
              </div>
</td>
<td className="py-3.5 px-4 align-top text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 bg-primary-container hover:bg-inverse-primary text-on-primary-container text-label-md font-semibold rounded transition-colors flex items-center gap-1">
                  Generate AI Meta
                </button>
<button className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors" title="Inspect URLs">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors" title="Assign to Engineer">
<span className="material-symbols-outlined text-[16px]">person_add</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: Performance Asset LCP  */}
<tr className="hover:bg-surface-container-high/60 transition-colors">
<td className="py-3.5 px-4 align-top">
<span className="px-2 py-0.5 rounded font-mono-code text-[11px] bg-error-container text-on-error-container font-semibold uppercase flex items-center gap-1 w-fit">
<span className="material-symbols-outlined text-[14px]">dangerous</span>
                Critical
              </span>
</td>
<td className="py-3.5 px-4 max-w-md">
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[14px] leading-tight">
                Large Uncompressed Hero LCP Assets (PNG &gt; 2.4 MB)
              </div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Primary above-the-fold hero imagery on key landing pages is rendered as non-responsive uncompressed PNG instead of modern AVIF/WebP.
              </p>
</td>
<td className="py-3.5 px-4 align-top">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-mono-code text-label-md">
                Performance
              </span>
</td>
<td className="py-3.5 px-4 align-top text-center font-mono-code font-bold text-error">
              9 URLs
            </td>
<td className="py-3.5 px-4 align-top">
<div className="flex items-center gap-1.5 text-secondary font-mono-code text-[12px] bg-secondary/10 px-2 py-1 rounded w-fit">
<span className="material-symbols-outlined text-[14px]">compress</span>
                Edge CDN Polish
              </div>
</td>
<td className="py-3.5 px-4 align-top text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 bg-surface-container-high hover:bg-surface-bright text-on-surface text-label-md font-semibold rounded transition-colors flex items-center gap-1">
                  Apply Compression
                </button>
<button className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors" title="Inspect URLs">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors" title="Assign to Engineer">
<span className="material-symbols-outlined text-[16px]">person_add</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: Multiple H1 Tags  */}
<tr className="hover:bg-surface-container-high/60 transition-colors bg-surface-container-lowest/30">
<td className="py-3.5 px-4 align-top">
<span className="px-2 py-0.5 rounded font-mono-code text-[11px] bg-tertiary-container text-on-tertiary-container font-semibold uppercase flex items-center gap-1 w-fit">
<span className="material-symbols-outlined text-[14px]">warning</span>
                Warning
              </span>
</td>
<td className="py-3.5 px-4 max-w-md">
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[14px] leading-tight">
                Duplicate H1 Hierarchy in Header Components
              </div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                The global mobile drawer menu contains an unhidden &lt;h1&gt; element violating primary document heading structure.
              </p>
</td>
<td className="py-3.5 px-4 align-top">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-mono-code text-label-md">
                On-Page HTML
              </span>
</td>
<td className="py-3.5 px-4 align-top text-center font-mono-code font-bold text-tertiary">
              1,410 URLs
            </td>
<td className="py-3.5 px-4 align-top">
<div className="flex items-center gap-1.5 text-on-surface-variant font-mono-code text-[12px] bg-surface-container-highest px-2 py-1 rounded w-fit">
<span className="material-symbols-outlined text-[14px]">code</span>
                Manual Dev Task
              </div>
</td>
<td className="py-3.5 px-4 align-top text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 bg-surface-container-high hover:bg-surface-bright text-on-surface text-label-md font-semibold rounded transition-colors flex items-center gap-1">
                  Create Jira Ticket
                </button>
<button className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors" title="Inspect URLs">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors" title="Assign to Engineer">
<span className="material-symbols-outlined text-[16px]">person_add</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Footer / Pagination  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-2 text-on-surface-variant font-label-md">
<div className="flex items-center gap-2 font-mono-code">
<span>Showing 1-4 of 24 issues</span>
<span>•</span>
<span className="text-secondary">8 Autonomous Edge rules pending deployment</span>
</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-md font-medium hover:bg-surface-bright transition-colors disabled:opacity-50" disabled>Previous</button>
<span className="font-mono-code text-on-surface text-label-md">Page 1 of 6</span>
<button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-md font-medium hover:bg-surface-bright transition-colors">Next</button>
</div>
</div>
</div>
{/*  Real-time Crawler Engine Activity & Diagnostics Stream  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  DeepBot Crawler Status Box  */}
<div className="bg-surface-container p-space-md rounded-xl shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between pb-2">
<span className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">dns</span>
          Crawl Engine Daemon
        </span>
<span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-secondary-container/20 text-secondary">Idle (Standby)</span>
</div>
<div className="space-y-2 mt-2 font-mono-code text-label-md">
<div className="flex justify-between text-on-surface-variant">
<span>Worker Pool:</span>
<span className="text-on-surface">64 Concurrency Threads</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Target Server Response:</span>
<span className="text-secondary font-semibold">184ms Avg TTFB</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Robots Exclusion Directives:</span>
<span className="text-on-surface">12 active disallows</span>
</div>
</div>
<button className="mt-4 w-full py-1.5 bg-surface-container-high hover:bg-surface-bright text-primary font-label-md rounded text-center transition-colors">
        Configure Rate Limiting &amp; User Agent
      </button>
</div>
{/*  Security & SSL Telemetry  */}
<div className="bg-surface-container p-space-md rounded-xl shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between pb-2">
<span className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">lock_reset</span>
          SSL &amp; Transport Security
        </span>
<span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-secondary-container/20 text-secondary">A+ Grade</span>
</div>
<div className="space-y-2 mt-2 font-mono-code text-label-md">
<div className="flex justify-between text-on-surface-variant">
<span>TLS Version:</span>
<span className="text-on-surface">TLS 1.3 / 0-RTT</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Certificate Expiry:</span>
<span className="text-secondary">Valid (284 days remain)</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>HSTS Preload:</span>
<span className="text-secondary font-semibold">Enabled (max-age=31536000)</span>
</div>
</div>
<button className="mt-4 w-full py-1.5 bg-surface-container-high hover:bg-surface-bright text-primary font-label-md rounded text-center transition-colors">
        View Cryptographic Report
      </button>
</div>
{/*  Edge Auto-Fix Sandbox Integration  */}
<div className="bg-surface-container p-space-md rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden">
<div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 w-28 h-28 bg-secondary-container/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between pb-2">
<span className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">hub</span>
          SEOTRIKS Edge Sync
        </span>
<span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-primary-container text-on-primary-container">Cloudflare Worker</span>
</div>
<div className="space-y-2 mt-2 font-body-sm text-on-surface-variant">
<p className="text-label-md leading-relaxed">
          Zero-code edge proxy intercepts canonical mismatches and missing metadata directly at the network edge before Googlebot crawl execution.
        </p>
<div className="flex items-center gap-2 pt-1 font-mono-code text-label-md text-secondary">
<span className="material-symbols-outlined text-[15px]">electric_bolt</span>
<span>Zero Server Latency Overhead</span>
</div>
</div>
<button className="mt-4 w-full py-1.5 bg-secondary-container hover:bg-secondary text-on-secondary-container font-label-lg font-semibold rounded text-center transition-colors shadow-sm">
        Review Edge Automation Rules (8 Ready)
      </button>
</div>
</div>
</div>
</main>
  )
}