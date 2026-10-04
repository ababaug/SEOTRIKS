export function CommandCenterContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full gap-space-lg">
{/*  COMMAND CENTER APEX BAR: Header + Impact Prioritization Engine  */}
<div className="flex flex-col gap-space-md pt-2">
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-md">
<div className="space-y-1">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono-code text-mono-code bg-surface-container-high text-primary">
<span className="material-symbols-outlined text-[13px] text-secondary">memory</span>
            ENGINE v4.9 · IMPACT OPTIMIZED
          </span>
<span className="font-mono-code text-mono-code text-outline">|</span>
<span className="font-mono-code text-mono-code text-secondary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
            Algorithmic Parity Stabilized
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">SEO Command Center</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Know exactly what to fix next. Automated prioritization powered by organic impact modeling and autonomous remediation.
        </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="h-9 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl font-label-lg text-label-lg flex items-center gap-2 shadow-sm transition-all" id="viewHistoryBtn">
<span className="material-symbols-outlined text-[17px] text-on-surface-variant">history_toggle_off</span>
          Audit Rollback Log
        </button>
<button className="relative group h-9 px-space-md bg-gradient-to-r from-secondary-container to-secondary text-surface-container-lowest font-label-lg text-label-lg font-semibold rounded-xl flex items-center gap-2 shadow-[0_4px_20px_-2px_rgba(78,222,163,0.35)] hover:shadow-[0_4px_24px_rgba(78,222,163,0.5)] active:scale-95 transition-all" id="autoFixGlobal">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Auto-Fix All Safe Issues (8)</span>
<span className="font-mono-code text-[11px] bg-surface-container-lowest/25 px-1.5 py-0.5 rounded">Remediate</span>
</button>
</div>
</div>
{/*  TACTICAL FILTER & QUERY DOCK (No borders, pure structural contrast)  */}
<div className="bg-surface-container p-space-sm rounded-xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm shadow-md">
{/*  Segmented Category Switcher  */}
<div className="flex items-center gap-1 overflow-x-auto py-0.5">
<button className="filter-cat-btn px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg font-semibold flex items-center gap-1.5 shrink-0 transition-colors">
<span className="material-symbols-outlined text-[16px]">clear_all</span>
          All Issues <span className="font-mono-code text-[11px] opacity-75">24</span>
</button>
<button className="filter-cat-btn px-3 py-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg flex items-center gap-1.5 shrink-0 transition-colors">
<span className="material-symbols-outlined text-[16px] text-tertiary">construction</span>
          Technical <span className="font-mono-code text-[11px] text-outline">11</span>
</button>
<button className="filter-cat-btn px-3 py-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg flex items-center gap-1.5 shrink-0 transition-colors">
<span className="material-symbols-outlined text-[16px] text-primary">article</span>
          Content <span className="font-mono-code text-[11px] text-outline">6</span>
</button>
<button className="filter-cat-btn px-3 py-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg flex items-center gap-1.5 shrink-0 transition-colors">
<span className="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
          Rankings <span className="font-mono-code text-[11px] text-outline">4</span>
</button>
<button className="filter-cat-btn px-3 py-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg flex items-center gap-1.5 shrink-0 transition-colors">
<span className="material-symbols-outlined text-[16px] text-primary-fixed-dim">link</span>
          Backlinks <span className="font-mono-code text-[11px] text-outline">3</span>
</button>
</div>
{/*  Impact Threshold Filters + URL Search  */}
<div className="flex items-center gap-space-sm flex-wrap lg:flex-nowrap">
<div className="flex items-center bg-surface-container-low p-1 rounded-xl">
<button className="filter-impact-btn px-2.5 py-1 rounded-lg text-tertiary font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container-high transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Critical
          </button>
<button className="filter-impact-btn px-2.5 py-1 rounded-lg text-on-surface-variant font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container-high transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> High Impact
          </button>
<button className="filter-impact-btn px-2.5 py-1 rounded-lg text-secondary font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container-high transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Quick Wins
          </button>
</div>
<div className="relative w-full lg:w-64">
<span className="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-[16px]">filter_alt</span>
<input className="w-full h-8 pl-8 pr-3 bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm rounded-lg focus:outline-none focus:bg-surface-container-highest transition-colors" placeholder="Filter URL pattern or bug..." type="text"/>
</div>
</div>
</div>
</div>
{/*  HIGHLIGHTS TELEMETRY STRIP (Monospaced Lift Projections)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Stat 1: Traffic Recovery  */}
<div className="relative overflow-hidden bg-surface-container p-space-md rounded-xl shadow-md flex flex-col justify-between">
<div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-mono-code text-mono-code uppercase tracking-wider text-outline">Potential Traffic Recovery</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-mono-metric text-mono-metric font-semibold text-secondary">+34,200</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">visits / mo</span>
</div>
</div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">moving</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-mono-code text-[11px]">
<span className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[13px]">arrow_drop_up</span> 18.2% organic upside
        </span>
<span className="text-outline">Across 312 target paths</span>
</div>
</div>
{/*  Stat 2: Revenue Lift  */}
<div className="relative overflow-hidden bg-surface-container p-space-md rounded-xl shadow-md flex flex-col justify-between">
<div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary/5 blur-2xl pointer-events-none"></div>
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-mono-code text-mono-code uppercase tracking-wider text-outline">Estimated Revenue Lift</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-mono-metric text-mono-metric font-semibold text-primary">+$14,800</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">recurring / mo</span>
</div>
</div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">payments</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-mono-code text-[11px]">
<span className="text-on-surface-variant">High-intent conversion model</span>
<span className="font-medium text-primary-fixed-dim">ARR Run-rate +$177k</span>
</div>
</div>
{/*  Stat 3: Autonomous Actions Available  */}
<div className="relative overflow-hidden bg-surface-container p-space-md rounded-xl shadow-md flex flex-col justify-between">
<div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-tertiary/5 blur-2xl pointer-events-none"></div>
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-mono-code text-mono-code uppercase tracking-wider text-outline">Remediation Status</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-mono-metric text-mono-metric font-semibold text-on-surface">8 Tasks Ready</span>
<span className="font-label-md text-label-md text-secondary bg-secondary-container/20 px-2 py-0.5 rounded">Zero Code Required</span>
</div>
</div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-mono-code text-[11px]">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 100% test-sandbox verified
        </span>
<span className="text-outline">Avg runtime: 42s</span>
</div>
</div>
</div>
{/*  WORKSPACE SPLIT: Primary Priority Command (Left) vs Autonomous Ops Cockpit (Right)  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/*  LEFT 8-COL: Action Queue & Mission Priorities  */}
<div className="xl:col-span-8 flex flex-col gap-space-lg">
{/*  SECTION TITLE: Top Priorities This Week  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Priority Action Stream</h2>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-outline font-mono-code text-[11px]">Sorted by algorithmic urgency</span>
</div>
<span className="font-mono-code text-mono-code text-outline hidden sm:inline">Telemetry synced 3m ago</span>
</div>
{/*  HERO HIGHLIGHTED ACTION CARD (Apex Impact Item)  */}
<div className="relative bg-surface-container rounded-xl overflow-hidden shadow-xl flex flex-col gap-space-md p-space-lg group">
{/*  Ambient Critical Accent Gradient  */}
<div className="absolute inset-0 bg-gradient-to-r from-tertiary-container/20 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"></div>
{/*  Meta Bar  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm relative z-10">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-error-container text-on-error-container font-mono-code text-[11px] font-semibold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
              CRITICAL THREAT
            </span>
<span className="px-2 py-1 rounded bg-surface-container-high text-on-surface-variant font-mono-code text-[11px]">
              Effort: ~5 mins
            </span>
<span className="px-2 py-1 rounded bg-surface-container-high text-secondary font-mono-code text-[11px] font-medium">
              Expected Impact: +12.4K visits/mo
            </span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-mono-code text-[11px]">
<span className="material-symbols-outlined text-[14px]">device_hub</span>
            Issue ID: TECH-4091
          </div>
</div>
{/*  Issue Description Header  */}
<div className="relative z-10 space-y-1">
<h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
            4 High-Intent Landing Pages Missing H1 &amp; Canonical Tags After CMS Deployment
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Search crawlers are falling back to non-canonical duplicated variants, triggering an algorithmic relevance penalty and an immediate 4-position drop across prime transactional queries.
          </p>
</div>
{/*  Affected URIs Preview Pill Cluster  */}
<div className="relative z-10 bg-surface-container-low p-space-sm rounded-xl space-y-1.5">
<div className="flex items-center justify-between text-on-surface-variant font-mono-code text-[11px] uppercase tracking-wider">
<span>Directly Affected Paths</span>
<span className="text-tertiary">4 URLs Dropping In SERP</span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 rounded bg-surface-container text-on-surface font-mono-code text-[12px] flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> /features/seo-automation
            </span>
<span className="px-2 py-1 rounded bg-surface-container text-on-surface font-mono-code text-[12px] flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> /pricing
            </span>
<span className="px-2 py-1 rounded bg-surface-container text-on-surface font-mono-code text-[12px] flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> /tools/keyword-clustering
            </span>
<span className="px-2 py-1 rounded bg-surface-container-high text-on-surface-variant font-mono-code text-[12px]">
              +1 enterprise directory path
            </span>
</div>
</div>
{/*  Why It Matters Deep Diagnostic Visualizer  */}
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-[18px]">troubleshoot</span>
</div>
<div className="flex flex-col">
<span className="font-mono-code text-[10px] uppercase text-outline">Diagnosis</span>
<span className="font-label-lg text-label-lg text-on-surface font-medium">Canonical Tag Absent</span>
</div>
</div>
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-error shrink-0">
<span className="material-symbols-outlined text-[18px]">trending_down</span>
</div>
<div className="flex flex-col">
<span className="font-mono-code text-[10px] uppercase text-outline">SERP Slippage</span>
<span className="font-label-lg text-label-lg text-error font-medium">-4 Avg Rank Fall</span>
</div>
</div>
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[18px]">price_change</span>
</div>
<div className="flex flex-col">
<span className="font-mono-code text-[10px] uppercase text-outline">Revenue Impact</span>
<span className="font-label-lg text-label-lg text-secondary font-medium">-$5,900 / mo Risk</span>
</div>
</div>
</div>
{/*  Strategic Execution Action Buttons  */}
<div className="relative z-10 flex flex-wrap items-center justify-between gap-space-sm pt-2">
<div className="flex items-center gap-2">
<button className="h-9 px-space-md bg-secondary hover:bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-semibold rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
              Fix with SEOTRIKS Autonomous Agent
            </button>
<button className="h-9 px-space-md bg-surface-container-high hover:bg-surface-bright text-on-surface rounded-xl font-label-lg text-label-lg flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[16px] text-primary">send_to_mobile</span>
              Assign to Dev Team
            </button>
</div>
<button className="h-9 px-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-mono-code text-[12px] flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">difference</span>
            View Technical Diff
          </button>
</div>
</div>
{/*  RECOMMENDATION FEED & PRIORITY QUEUE  */}
<div className="flex flex-col gap-space-md">
{/*  CARD 1: Striking Distance Keyword  */}
<div className="bg-surface-container hover:bg-surface-container-high p-space-md rounded-xl transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md group">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-xl bg-primary-container/40 flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">ads_click</span>
</div>
<div className="space-y-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-primary-container/30 text-on-primary-container font-medium">Rank Opportunity</span>
<span className="font-mono-code text-[11px] text-secondary font-medium">+4.2k traffic upside</span>
<span className="font-mono-code text-[11px] text-outline">Effort: Medium</span>
</div>
<h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">
                Striking Distance Keyword: “automated technical seo” ranked #4 → target #1
              </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                Competitors above you have 38% more structured FAQ markup and recent case study citations.
              </p>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="h-9 px-space-md bg-primary-container hover:bg-inverse-primary text-on-primary-container rounded-xl font-label-lg text-label-lg font-medium flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              Optimize in AI Content Writer
            </button>
<button className="w-9 h-9 flex items-center justify-center rounded-xl text-on-surface-variant hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</div>
{/*  CARD 2: Core Web Vitals LCP Degradation  */}
<div className="bg-surface-container hover:bg-surface-container-high p-space-md rounded-xl transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md group">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-tertiary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">speed</span>
</div>
<div className="space-y-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-medium">Performance / CWV</span>
<span className="font-mono-code text-[11px] text-secondary font-medium">Quick Win</span>
<span className="font-mono-code text-[11px] text-outline">Impact: High</span>
</div>
<h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">
                Core Web Vitals LCP Degraded on Mobile Templates (3.8s)
              </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                Uncompressed hero SVG masks on blog landing index causing Google mobile-first throttling.
              </p>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="h-9 px-space-md bg-surface-container-highest hover:bg-surface-bright text-on-surface rounded-xl font-label-lg text-label-lg font-medium flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[16px] text-secondary">compress</span>
              Auto-compress Cloudflare images
            </button>
<button className="w-9 h-9 flex items-center justify-center rounded-xl text-on-surface-variant hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</div>
{/*  CARD 3: Toxic Backlink Spike  */}
<div className="bg-surface-container hover:bg-surface-container-high p-space-md rounded-xl transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md group">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">security</span>
</div>
<div className="space-y-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium">Off-Page Authority</span>
<span className="font-mono-code text-[11px] text-on-surface-variant font-medium">Effort: Low</span>
<span className="font-mono-code text-[11px] text-outline">Impact: Medium</span>
</div>
<h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">
                Toxic Backlink Spike from Scraper Domain Network (42 domains)
              </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                Sudden surge of mirrored scraper URLs referencing outdated documentation subdomains.
              </p>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="h-9 px-space-md bg-surface-container-highest hover:bg-surface-bright text-on-surface rounded-xl font-label-lg text-label-lg font-medium flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[16px] text-primary">download</span>
              Export Disavow List
            </button>
<button className="w-9 h-9 flex items-center justify-center rounded-xl text-on-surface-variant hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</div>
{/*  CARD 4: Broken Internal Links  */}
<div className="bg-surface-container hover:bg-surface-container-high p-space-md rounded-xl transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md group">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">link_off</span>
</div>
<div className="space-y-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-secondary-container/30 text-secondary font-medium">Crawl Equity</span>
<span className="font-mono-code text-[11px] text-secondary font-medium">Effort: 2 mins</span>
<span className="font-mono-code text-[11px] text-outline">Impact: Quick Win</span>
</div>
<h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">
                Broken Internal Links to High-Value Product Tour Page
              </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                18 navigation anchor links pointing to legacy <code className="font-mono-code text-[11px] text-primary">/product-tour-v1</code> returning 404 header status.
              </p>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="h-9 px-space-md bg-secondary-container/40 hover:bg-secondary-container/60 text-secondary font-label-lg text-label-lg font-medium rounded-xl flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[16px]">alt_route</span>
              Apply 301 Redirect Rule
            </button>
<button className="w-9 h-9 flex items-center justify-center rounded-xl text-on-surface-variant hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</div>
</div>
{/*  VISUAL COMPARISON / SERP SIMULATION TELEMETRY (Inline SVG)  */}
<div className="bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<span className="font-mono-code text-mono-code uppercase tracking-wider text-outline">Telemetry Model</span>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Remediation Velocity vs Search Authority</h3>
</div>
<div className="flex items-center gap-4 font-mono-code text-[11px]">
<span className="flex items-center gap-1.5 text-secondary">
<span className="w-2.5 h-1 rounded bg-secondary"></span> With SEOTRIKS Autonomous
            </span>
<span className="flex items-center gap-1.5 text-outline">
<span className="w-2.5 h-1 rounded bg-outline-variant"></span> Manual Dev Cycle
            </span>
</div>
</div>
{/*  Inline Telemetry Graph  */}
<div className="w-full h-44 relative flex items-end">
<svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 160">
<defs>
<linearGradient id="velocityGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#4edea3" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#4edea3" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
{/*  Grid lines  */}
<line opacity="0.3" stroke="#43474e" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="800" y1="40" y2="40"></line>
<line opacity="0.3" stroke="#43474e" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="800" y1="80" y2="80"></line>
<line opacity="0.3" stroke="#43474e" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="800" y1="120" y2="120"></line>
{/*  Manual projection line (stagnant)  */}
<path d="M 0,130 C 200,128 400,120 800,105" fill="none" stroke="#43474e" strokeDasharray="4 4" strokeWidth="2"></path>
{/*  Autonomous projection fill  */}
<path d="M 0,130 Q 180,120 320,80 T 800,18 L 800,160 L 0,160 Z" fill="url(#velocityGrad)"></path>
{/*  Autonomous line  */}
<path d="M 0,130 Q 180,120 320,80 T 800,18" fill="none" stroke="#4edea3" strokeWidth="2.5"></path>
{/*  Target marker point  */}
<circle cx="800" cy="18" fill="#4edea3" r="4" stroke="#0a1421" strokeWidth="2"></circle>
</svg>
</div>
<div className="flex items-center justify-between text-outline font-mono-code text-[11px] pt-1 border-t border-transparent">
<span>Day 0 (Now)</span>
<span>Day 7 (+11.8k Visits)</span>
<span>Day 14 (+24.1k Visits)</span>
<span className="text-secondary font-medium">Day 30 (+34.2k Target Reached)</span>
</div>
</div>
</div>
{/*  RIGHT 4-COL: Autonomous Ops Cockpit & Live Telemetry  */}
<div className="xl:col-span-4 flex flex-col gap-space-md">
{/*  PANEL: SEOTRIKS Autonomous Ops Log  */}
<div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">neurology</span>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Autonomous Ops Log</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-mono-code text-[10px] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> ACTIVE
          </span>
</div>
{/*  Engine Status Strip  */}
<div className="bg-surface-container-low p-space-sm rounded-xl space-y-2">
<div className="flex items-center justify-between text-on-surface font-body-sm text-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-primary">sync</span>
              Next Scheduled Crawl
            </span>
<span className="font-mono-code text-mono-code text-on-surface font-medium">In 4 hours</span>
</div>
<div className="flex items-center justify-between text-on-surface font-body-sm text-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-secondary">rule</span>
              Remediation Rules Engine
            </span>
<span className="font-mono-code text-mono-code text-secondary font-medium">Strict (Zero-Loss)</span>
</div>
<div className="flex items-center justify-between text-on-surface font-body-sm text-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-primary-fixed-dim">verified</span>
              Automated Rollback Safeguard
            </span>
<span className="font-mono-code text-mono-code text-primary-fixed-dim font-medium">Armed (1-Click)</span>
</div>
</div>
{/*  Terminal-like Realtime Event Feed  */}
<div className="space-y-space-sm">
<span className="font-mono-code text-mono-code uppercase tracking-wider text-outline">Real-Time Autonomous Events</span>
<div className="space-y-2 font-mono-code text-[11px]">
{/*  Event 1  */}
<div className="p-2 rounded-lg bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between text-outline">
<span>14:22:08 UTC</span>
<span className="text-secondary font-medium">SUCCESS</span>
</div>
<p className="text-on-surface">Auto-injected self-canonical to <span className="text-primary-fixed-dim">/docs/api-reference</span> after CMS rewrite bug.</p>
</div>
{/*  Event 2  */}
<div className="p-2 rounded-lg bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between text-outline">
<span>13:58:41 UTC</span>
<span className="text-secondary font-medium">DISPATCHED</span>
</div>
<p className="text-on-surface">Triggered Google Indexing API ping for 14 refreshed sitemap entries.</p>
</div>
{/*  Event 3  */}
<div className="p-2 rounded-lg bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between text-outline">
<span>11:15:02 UTC</span>
<span className="text-tertiary font-medium">GUARD DETECTED</span>
</div>
<p className="text-on-surface">Blocked staging URL leak: <span className="text-tertiary">qa.seotriks.io</span> found in robots.txt disallow exception.</p>
</div>
{/*  Event 4  */}
<div className="p-2 rounded-lg bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between text-outline">
<span>09:40:19 UTC</span>
<span className="text-secondary font-medium">OPTIMIZED</span>
</div>
<p className="text-on-surface">Compressed 8 hero WebP assets via Cloudflare edge worker (Save: 1.8MB).</p>
</div>
</div>
</div>
{/*  Actionable Sandbox Switch  */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-medium text-on-surface">Autonomous Safe-Mode</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Require approval for metadata changes</span>
</div>
<button aria-pressed="true" className="w-10 h-6 bg-secondary-container rounded-full relative p-0.5 transition-colors cursor-pointer" id="safeModeToggle">
<span className="block w-5 h-5 bg-on-secondary rounded-full shadow-sm transform translate-x-4 transition-transform"></span>
</button>
</div>
</div>
{/*  SECONDARY CONTEXT CARD: Crawl Budget & Edge Worker Node Health  */}
<div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Edge Remediator Mesh</span>
<span className="font-mono-code text-[11px] text-secondary">99.98% uptime</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Workers deployed on Cloudflare and Fastly edge nodes intercept crawlers and apply SEO micro-fixes at sub-millisecond latencies.
        </p>
<div className="grid grid-cols-2 gap-space-sm pt-2">
<div className="bg-surface-container-low p-2 rounded-lg flex flex-col">
<span className="font-mono-code text-[10px] text-outline uppercase">Edge Intercepts</span>
<span className="font-mono-metric text-[18px] text-on-surface font-semibold">142,890</span>
</div>
<div className="bg-surface-container-low p-2 rounded-lg flex flex-col">
<span className="font-mono-code text-[10px] text-outline uppercase">Remediation Lag</span>
<span className="font-mono-metric text-[18px] text-secondary font-semibold">1.4ms</span>
</div>
</div>
</div>
</div>
</div>
</div>

</main>
  )
}