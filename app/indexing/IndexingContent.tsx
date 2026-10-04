"use client";
export function IndexingContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full pb-space-2xl">
{/*  Breadcrumb & Top Bar Utility  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
<span className="hover:text-on-surface cursor-pointer transition-colors">Projects</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-on-surface cursor-pointer transition-colors font-medium">stripe.com</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-on-surface cursor-pointer transition-colors">Technical &amp; Infrastructure</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Indexing Coverage &amp; Googlebot Telemetry</span>
</div>
{/*  Live GSC API State Tag  */}
<div className="flex items-center gap-2 self-start md:self-auto bg-surface-container px-3 py-1 rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-xs text-label-xs font-semibold text-secondary uppercase tracking-wider">GSC API Sync Active</span>
<span className="text-secondary font-label-xs text-label-xs opacity-60">· 6 mins ago</span>
</div>
</div>
{/*  Primary Page Header  */}
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mb-space-xl">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
        Search Engine Indexing &amp; Bot Traversal Console
      </h1>
<p className="font-body-md text-body-md text-secondary mt-1">
        High-fidelity crawler telemetry, indexation discrepancy mapping, and enterprise GSC synchronization for <span className="font-semibold text-on-surface">production-stripe</span>.
      </p>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<button className="flex items-center gap-1.5 px-3.5 py-2 bg-surface-container-low text-secondary hover:bg-surface-container text-label-md font-label-md font-semibold rounded-lg shadow-sm transition-all">
<span className="material-symbols-outlined text-[18px]">cloud_sync</span>
<span>Fetch Live Index Status</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 bg-surface-container text-on-surface hover:bg-surface-container-high text-label-md font-label-md font-semibold rounded-lg shadow-sm transition-all">
<span className="material-symbols-outlined text-[18px]">publish</span>
<span>Submit Priority Sitemap XML</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 bg-secondary text-on-secondary hover:opacity-95 text-label-md font-label-md font-semibold rounded-lg shadow-md transition-all">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Export URL Inspection CSV</span>
</button>
</div>
</div>
{/*  KPI Metrics Quartet  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">
{/*  KPI 1  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs uppercase font-bold tracking-wider text-secondary">Valid Indexed Pages</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold">13,974</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-xs font-semibold">
<span className="material-symbols-outlined text-[12px] mr-0.5">trending_up</span>+142/wk
            </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">check_circle</span>
</div>
</div>
<div className="mt-4 pt-3 border-t-0 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-2 flex items-center justify-between text-secondary">
<span className="font-body-sm text-body-sm">98.2% discoverable fleet</span>
<span className="font-label-xs text-label-xs font-semibold text-secondary uppercase">Optimal Health</span>
</div>
</div>
{/*  KPI 2  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs uppercase font-bold tracking-wider text-secondary">Excluded / Non-Indexed</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold">256</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-label-xs font-semibold">
              38 critical
            </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-error-container/40 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[22px]">rule_folder</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-2 flex items-center justify-between text-secondary">
<span className="font-body-sm text-body-sm">184 Crawled · 42 Discovered</span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">30 Noindex</span>
</div>
</div>
{/*  KPI 3  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs uppercase font-bold tracking-wider text-secondary">Crawl Request Velocity</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold">84,200</span>
<span className="text-secondary font-label-md text-label-md">req/day</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">speed</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-2 flex items-center justify-between text-secondary">
<span className="font-body-sm text-body-sm">78% Mobile · 22% Desk</span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">118ms avg latency</span>
</div>
</div>
{/*  KPI 4  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs uppercase font-bold tracking-wider text-secondary">Index Freshness Delta</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-bold">4.2 hrs</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-xs font-semibold">
              3.1x faster
            </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">update</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-2 flex items-center justify-between text-secondary">
<span className="font-body-sm text-body-sm">Deploy to SERP cycle</span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">SLA Benchmark Pass</span>
</div>
</div>
</div>
{/*  AI Sentinel Diagnostic Banner (SEOTRIKS Signature)  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm mb-space-xl relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md relative z-10 pb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-[0_4px_12px_rgba(242,106,75,0.28)]">
<span className="material-symbols-outlined text-[22px]">smart_toy</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">AI Indexation Sentinel</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-label-xs font-bold uppercase tracking-wider">Algorithmic Exclusion Warning</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-semibold">Autonomous Root-Cause Diagnostic &amp; Resolution Engine</span>
</div>
</div>
<div className="flex items-center gap-space-sm self-end lg:self-auto">
<button className="px-3.5 py-2 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg text-label-md font-label-md font-semibold transition-colors">
          View 38 Affected URLs
        </button>
<button className="flex items-center gap-1.5 px-4 py-2 bg-primary-container text-on-primary hover:opacity-95 rounded-lg text-label-md font-label-md font-semibold shadow-[0_4px_12px_rgba(242,106,75,0.28)] transition-all">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Execute IndexNow &amp; Link Fix</span>
</button>
</div>
</div>
{/*  Diagnostic Details Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-sm pt-space-sm">
<div className="bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center gap-2 text-secondary mb-1">
<span className="material-symbols-outlined text-[16px] text-error">flag</span>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">What Happened</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-snug">
<span className="font-semibold text-error">38 newly deployed API docs</span> under <code className="px-1.5 py-0.5 rounded bg-surface-container-highest text-secondary text-label-xs font-mono">/docs/api/v2/*</code> received <span className="font-semibold">"Discovered - currently not indexed"</span> status from Googlebot within last 48 hours.
        </p>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center gap-2 text-secondary mb-1">
<span className="material-symbols-outlined text-[16px] text-secondary">troubleshoot</span>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">Why Did It Happen</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-snug">
          Shallow internal linking topology (<span className="font-semibold">orphan level 4</span>, 0 inbound category links) combined with thin canonical schema templates during the recent v2 preview release.
        </p>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center gap-2 text-secondary mb-1">
<span className="material-symbols-outlined text-[16px] text-primary">auto_fix_high</span>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">Recommended Action</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-snug">
          Execute automated internal link injection from high-PR root hub <code className="px-1.5 py-0.5 rounded bg-surface-container-highest text-secondary text-label-xs font-mono">/docs/api</code> and push priority API IndexNow ping to Googlebot &amp; Bingbot fleets.
        </p>
</div>
</div>
</div>
{/*  Middle Analytics: Trend Visualization & Crawl Budget Allocation  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-xl">
{/*  Left 65% Chart Panel  */}
<div className="xl:col-span-8 bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
<div>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Indexation Status &amp; Googlebot Traversal Trend</h2>
<p className="font-body-sm text-body-sm text-secondary">12-month historical correlation between daily crawl volume and active indexation state</p>
</div>
{/*  Bot Filter Pills  */}
<div className="flex items-center bg-surface-container p-1 rounded-xl gap-1 self-start sm:self-auto">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs font-bold shadow-sm">All Bots</button>
<button className="px-2.5 py-1 rounded-lg text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium">Smartphone</button>
<button className="px-2.5 py-1 rounded-lg text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium">Desktop</button>
<button className="px-2.5 py-1 rounded-lg text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium">Bingbot</button>
</div>
</div>
{/*  Chart Metadata Legend  */}
<div className="flex flex-wrap items-center gap-space-lg mb-space-sm text-label-xs font-label-xs">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="text-on-surface font-semibold">Valid Indexed (13,974)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-error"></span>
<span className="text-on-surface font-semibold">Excluded / Non-Indexed (256)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-1.5 rounded-full bg-secondary-container"></span>
<span className="text-secondary font-medium">Googlebot Daily Crawl Volume (Avg 84.2k)</span>
</div>
</div>
{/*  High Precision SVG Chart  */}
<div className="relative w-full h-64 bg-surface-container-low/40 rounded-xl p-4 flex flex-col justify-end overflow-hidden">
{/*  Milestone Tag  */}
<div className="absolute left-[54%] top-6 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded-md shadow-sm z-10 flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-xs text-label-xs font-bold text-on-surface">Sitemap Resubmission (Nov 14)</span>
</div>
<div className="absolute left-[58%] top-11 bottom-6 w-0.5 bg-primary-container/30 dashed pointer-events-none"></div>
<svg className="w-full h-48 overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 200">
<defs>
<linearGradient id="indexedGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#456085" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#456085" stopOpacity="0.0"></stop>
</linearGradient>
<linearGradient id="crawlBars" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#b8d3ff" stopOpacity="0.4"></stop>
<stop offset="100%" stopColor="#b8d3ff" stopOpacity="0.05"></stop>
</linearGradient>
</defs>
{/*  Crawl volume bars (background)  */}
<g fill="url(#crawlBars)">
<rect height="90" rx="2" width="12" x="20" y="110"></rect>
<rect height="105" rx="2" width="12" x="55" y="95"></rect>
<rect height="75" rx="2" width="12" x="90" y="125"></rect>
<rect height="120" rx="2" width="12" x="125" y="80"></rect>
<rect height="130" rx="2" width="12" x="160" y="70"></rect>
<rect height="100" rx="2" width="12" x="195" y="100"></rect>
<rect height="115" rx="2" width="12" x="230" y="85"></rect>
<rect height="140" rx="2" width="12" x="265" y="60"></rect>
<rect height="125" rx="2" width="12" x="300" y="75"></rect>
<rect height="145" rx="2" width="12" x="335" y="55"></rect>
<rect height="155" rx="2" width="12" x="370" y="45"></rect>
<rect height="170" rx="2" width="12" x="405" y="30"></rect>
<rect height="135" rx="2" width="12" x="440" y="65"></rect>
<rect height="160" rx="2" width="12" x="475" y="40"></rect>
<rect height="150" rx="2" width="12" x="510" y="50"></rect>
<rect height="165" rx="2" width="12" x="545" y="35"></rect>
<rect height="155" rx="2" width="12" x="580" y="45"></rect>
<rect height="170" rx="2" width="12" x="615" y="30"></rect>
<rect height="175" rx="2" width="12" x="650" y="25"></rect>
</g>
{/*  Valid Indexed Area & Line  */}
<path d="M 20 140 Q 150 130 280 90 T 520 60 T 680 40 L 680 200 L 20 200 Z" fill="url(#indexedGrad)"></path>
<path d="M 20 140 Q 150 130 280 90 T 520 60 T 680 40" fill="none" stroke="#456085" strokeLinecap="round" strokeWidth="3"></path>
{/*  Excluded Trajectory Line  */}
<path d="M 20 185 Q 160 180 300 170 T 450 160 T 550 130 T 680 145" fill="none" stroke="#ba1a1a" strokeDasharray="4,4" strokeWidth="2.5"></path>
{/*  Interactive Highlight Nodes  */}
<circle cx="405" cy="74" fill="#456085" r="5" stroke="#ffffff" strokeWidth="2"></circle>
<circle cx="405" cy="154" fill="#ba1a1a" r="4" stroke="#ffffff" strokeWidth="2"></circle>
</svg>
{/*  Timeline Labels  */}
<div className="flex justify-between items-center text-secondary font-label-xs text-label-xs pt-2">
<span>Dec '23</span>
<span>Feb '24</span>
<span>Apr '24</span>
<span>Jun '24</span>
<span>Aug '24</span>
<span>Oct '24</span>
<span className="font-bold text-on-surface">Live (Today)</span>
</div>
</div>
</div>
{/*  Right 35% Crawl Budget Breakdown Panel  */}
<div className="xl:col-span-4 bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-1">
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Crawl Budget Breakdown</h2>
<span className="px-2 py-0.5 bg-surface-container rounded-md font-label-xs text-label-xs text-secondary font-semibold">By Asset Class</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-md">Allocation of Googlebot daily download bandwidth</p>
{/*  Progress Distribution Stack  */}
<div className="space-y-4">
{/*  HTML Pages  */}
<div>
<div className="flex justify-between items-center font-label-md text-label-md mb-1.5">
<span className="flex items-center gap-2 text-on-surface font-medium">
<span className="material-symbols-outlined text-[16px] text-secondary">html</span>
                HTML Document Pages
              </span>
<span className="font-bold text-on-surface">58% <span className="font-normal text-secondary">(48.8k req)</span></span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-secondary rounded-full" ></div>
</div>
</div>
{/*  Static JS & CSS  */}
<div>
<div className="flex justify-between items-center font-label-md text-label-md mb-1.5">
<span className="flex items-center gap-2 text-on-surface font-medium">
<span className="material-symbols-outlined text-[16px] text-secondary">javascript</span>
                Static Client JS &amp; CSS Bundles
              </span>
<span className="font-bold text-on-surface">26% <span className="font-normal text-secondary">(21.9k req)</span></span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-secondary-container rounded-full" ></div>
</div>
</div>
{/*  JSON/API Endpoints  */}
<div>
<div className="flex justify-between items-center font-label-md text-label-md mb-1.5">
<span className="flex items-center gap-2 text-on-surface font-medium">
<span className="material-symbols-outlined text-[16px] text-secondary">data_object</span>
                JSON / Edge API Payloads
              </span>
<span className="font-bold text-on-surface">12% <span className="font-normal text-secondary">(10.1k req)</span></span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-tertiary-container rounded-full" ></div>
</div>
</div>
{/*  Images & Media  */}
<div>
<div className="flex justify-between items-center font-label-md text-label-md mb-1.5">
<span className="flex items-center gap-2 text-on-surface font-medium">
<span className="material-symbols-outlined text-[16px] text-secondary">image</span>
                CDN Media &amp; Brand Assets
              </span>
<span className="font-bold text-on-surface">4% <span className="font-normal text-secondary">(3.4k req)</span></span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-outline rounded-full" ></div>
</div>
</div>
</div>
</div>
{/*  Efficiency Callout  */}
<div className="mt-space-md p-space-sm bg-surface-container-low rounded-xl flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<div>
<p className="font-label-md text-label-md font-semibold text-on-surface">Exceptional Crawl Efficiency</p>
<p className="font-body-sm text-body-sm text-secondary">Only <span className="font-semibold text-on-surface">0.4%</span> of bot request cycles wasted on 4xx/5xx dead ends.</p>
</div>
</div>
</div>
</div>
{/*  Master Indexing Discrepancy & Exclusion Table Panel  */}
<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col">
{/*  Header with Tab Navigation  */}
<div className="p-space-lg pb-0">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
<div>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Master Indexing Discrepancy &amp; Exclusion Table</h2>
<p className="font-body-sm text-body-sm text-secondary">Actionable inventory of URLs requiring inspection, canonical remediation, or priority re-crawl</p>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container text-secondary hover:text-on-surface rounded-lg font-label-md text-label-md font-semibold transition-colors">
<span className="material-symbols-outlined text-[16px]">filter_alt</span>
<span>Filters</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container text-secondary hover:text-on-surface rounded-lg font-label-md text-label-md font-semibold transition-colors">
<span className="material-symbols-outlined text-[16px]">view_column</span>
<span>Columns</span>
</button>
</div>
</div>
{/*  Tab Strip  */}
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3">
<button className="px-3.5 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow-sm whitespace-nowrap">
          All Excluded (256)
        </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md font-medium whitespace-nowrap">
          Crawled - Not Indexed (184)
        </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md font-medium whitespace-nowrap">
          Discovered - Not Indexed (42)
        </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md font-medium whitespace-nowrap">
          Soft 404s (18)
        </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md font-medium whitespace-nowrap">
          Blocked by Robots.txt (12)
        </button>
</div>
</div>
{/*  Filter & Action Controls Sub-bar  */}
<div className="bg-surface-container-low px-space-lg py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="relative w-full sm:w-80">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-secondary">search</span>
<input className="w-full pl-9 pr-4 py-1.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Filter by regex, path, or param..." type="text"/>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
<div className="flex items-center gap-2 font-label-xs text-label-xs text-secondary font-semibold">
<span>Batch Actions:</span>
<button className="px-2.5 py-1 bg-surface-container rounded-md hover:bg-surface-container-high text-on-surface transition-colors">Bulk Inspect</button>
<button className="px-2.5 py-1 bg-surface-container rounded-md hover:bg-surface-container-high text-on-surface transition-colors">Push IndexNow</button>
</div>
</div>
</div>
{/*  Data Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-secondary font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-3 px-space-md w-12 text-center">
<input className="rounded w-4 h-4 text-secondary accent-secondary focus:ring-0" type="checkbox"/>
</th>
<th className="py-3 px-space-md">URL &amp; Path</th>
<th className="py-3 px-space-md">Exclusion Reason</th>
<th className="py-3 px-space-md">Discovery Source</th>
<th className="py-3 px-space-md">Last Fetch</th>
<th className="py-3 px-space-md">Response &amp; Render</th>
<th className="py-3 px-space-md text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-space-md text-center">
<input className="rounded w-4 h-4 text-secondary accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-space-md font-mono font-medium text-on-surface">
<div className="flex items-center gap-2">
<span className="text-secondary opacity-60">stripe.com</span>
<span className="font-bold text-on-surface">/docs/api/v2/treasury/issuing</span>
<span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-sans font-semibold">Critical</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-error-container/40 text-error font-label-xs text-label-xs font-semibold">
                Discovered - Currently Not Indexed
              </span>
</td>
<td className="py-3.5 px-space-md text-secondary">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">account_tree</span>
                Internal Link Depth 4
              </span>
</td>
<td className="py-3.5 px-space-md text-secondary">4 hours ago</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1.5 font-semibold text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                200 OK · SSR
              </span>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-primary-container transition-colors" title="Force Re-Index Ping">
<span className="material-symbols-outlined text-[18px]">bolt</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Inspect URL in GSC">
<span className="material-symbols-outlined text-[18px]">find_in_page</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Fix Canonical">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
</button>
</div>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
<td className="py-3.5 px-space-md text-center">
<input className="rounded w-4 h-4 text-secondary accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-space-md font-mono font-medium text-on-surface">
<div className="flex items-center gap-2">
<span className="text-secondary opacity-60">stripe.com</span>
<span className="text-on-surface">/blog/archive/2021-retrospective</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">
                Crawled - Currently Not Indexed
              </span>
</td>
<td className="py-3.5 px-space-md text-secondary">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">list_alt</span>
                sitemap-archive.xml
              </span>
</td>
<td className="py-3.5 px-space-md text-secondary">12 hours ago</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1.5 font-semibold text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                200 OK · SSR
              </span>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-primary-container transition-colors" title="Force Re-Index Ping">
<span className="material-symbols-outlined text-[18px]">bolt</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Inspect URL in GSC">
<span className="material-symbols-outlined text-[18px]">find_in_page</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Fix Canonical">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
</button>
</div>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-space-md text-center">
<input className="rounded w-4 h-4 text-secondary accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-space-md font-mono font-medium text-on-surface">
<div className="flex items-center gap-2">
<span className="text-secondary opacity-60">stripe.com</span>
<span className="text-on-surface">/checkout/express-checkout-deprecated</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">
                Duplicate Without Canonical
              </span>
</td>
<td className="py-3.5 px-space-md text-secondary">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">link</span>
                External Inbound (GitHub)
              </span>
</td>
<td className="py-3.5 px-space-md text-secondary">2 days ago</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1.5 font-semibold text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                301 Moved Permanently
              </span>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-primary-container transition-colors" title="Force Re-Index Ping">
<span className="material-symbols-outlined text-[18px]">bolt</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Inspect URL in GSC">
<span className="material-symbols-outlined text-[18px]">find_in_page</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Fix Canonical">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
</button>
</div>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
<td className="py-3.5 px-space-md text-center">
<input className="rounded w-4 h-4 text-secondary accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-space-md font-mono font-medium text-on-surface">
<div className="flex items-center gap-2">
<span className="text-secondary opacity-60">stripe.com</span>
<span className="text-on-surface">/search?q=elements+react+hooks</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
                Excluded by 'noindex' Tag
              </span>
</td>
<td className="py-3.5 px-space-md text-secondary">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">account_tree</span>
                Internal Nav Query
              </span>
</td>
<td className="py-3.5 px-space-md text-secondary">1 day ago</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1.5 font-semibold text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                200 OK · Client Render
              </span>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-primary-container transition-colors" title="Force Re-Index Ping">
<span className="material-symbols-outlined text-[18px]">bolt</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Inspect URL in GSC">
<span className="material-symbols-outlined text-[18px]">find_in_page</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Fix Canonical">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
</button>
</div>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-space-md text-center">
<input className="rounded w-4 h-4 text-secondary accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-space-md font-mono font-medium text-on-surface">
<div className="flex items-center gap-2">
<span className="text-secondary opacity-60">stripe.com</span>
<span className="text-on-surface">/resources/guides/global-tax-compliance-2022</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">
                Soft 404 Error
              </span>
</td>
<td className="py-3.5 px-space-md text-secondary">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">list_alt</span>
                sitemap-resources.xml
              </span>
</td>
<td className="py-3.5 px-space-md text-secondary">3 days ago</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1.5 font-semibold text-secondary">
<span className="w-2 h-2 rounded-full bg-error"></span>
                200 OK · Thin Content
              </span>
</td>
<td className="py-3.5 px-space-md text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-primary-container transition-colors" title="Force Re-Index Ping">
<span className="material-symbols-outlined text-[18px]">bolt</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Inspect URL in GSC">
<span className="material-symbols-outlined text-[18px]">find_in_page</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Fix Canonical">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination & Bulk Footer  */}
<div className="px-space-lg py-space-sm bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<span className="font-body-sm text-body-sm text-secondary">
        Showing <span className="font-semibold text-on-surface">1 to 5</span> of <span className="font-semibold text-on-surface">256</span> excluded URL entities
      </span>
<div className="flex items-center gap-1.5">
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface disabled:opacity-40 shadow-sm" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="px-3 py-1 rounded-lg bg-secondary text-on-secondary font-label-xs text-label-xs font-bold shadow-sm">1</button>
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium shadow-sm">2</button>
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium shadow-sm">3</button>
<span className="text-secondary font-label-xs text-label-xs px-1">...</span>
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium shadow-sm">52</button>
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface shadow-sm">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
  )
}