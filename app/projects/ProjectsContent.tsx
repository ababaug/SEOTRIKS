export function ProjectsContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full">
{/*  Interactive View State Controller  */}
<div className="flex flex-col gap-space-lg w-full">
{/*  Header Section with Breadcrumb Context  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pt-space-xs">
<div className="flex flex-col gap-1 max-w-3xl">
<div className="flex items-center gap-2">
<span className="font-mono-code text-mono-code uppercase tracking-wider text-secondary flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Enterprise Multi-Tenant
          </span>
<span className="text-outline-variant text-label-md">•</span>
<span className="font-mono-code text-mono-code text-outline">Cluster US-EAST-01</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
          All Projects &amp; Monitored Domains
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          Manage website properties, automated audit schedules, and cross-domain indexing health telemetry.
        </p>
</div>
{/*  Quick Fleet Diagnostics Pill  */}
<div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-xl shadow-md">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Edge Auto-Crawl Active</span>
</div>
<div className="h-3.5 w-px bg-surface-variant"></div>
<span className="font-mono-code text-mono-code text-outline text-[11px]">Next sweep: 14m</span>
</div>
</div>
{/*  Aggregate Metric Strip  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Metric 1  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between relative overflow-hidden shadow-md group hover:bg-surface-container transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Monitored Domains</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">8</span>
<span className="font-label-md text-label-md text-secondary font-medium">Active Fleet</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]">domain</span>
</div>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs text-on-surface-variant">
<span className="font-body-sm text-body-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 6 Production
          </span>
<span className="font-body-sm text-body-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> 2 Staging
          </span>
</div>
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
</div>
{/*  Metric 2  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between relative overflow-hidden shadow-md group hover:bg-surface-container transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Fleet Health Average</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">89.2</span>
<span className="font-mono-code text-mono-code text-outline text-[12px]">/ 100</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]">vital_signs</span>
</div>
</div>
<div className="flex items-center gap-2 mt-space-md pt-space-xs">
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden flex">
<div className="h-full bg-secondary rounded-full" ></div>
</div>
<span className="font-mono-code text-mono-code text-secondary text-[11px] font-semibold">+2.4%</span>
</div>
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none"></div>
</div>
{/*  Metric 3  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between relative overflow-hidden shadow-md group hover:bg-surface-container transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Aggregate Organic</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">1.42M</span>
<span className="font-label-md text-label-md text-secondary font-medium flex items-center">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>12.8%
              </span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]">trending_up</span>
</div>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs font-mono-code text-[11px] text-on-surface-variant">
<span>Tracked Clicks (MoM)</span>
<span className="text-on-surface font-semibold">982.4K direct</span>
</div>
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
</div>
{/*  Metric 4  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between relative overflow-hidden shadow-md group hover:bg-surface-container transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Edge Auto-Fixes</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-tertiary font-bold">19</span>
<span className="font-label-md text-label-md text-tertiary font-medium">Ready</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-tertiary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]">auto_fix_high</span>
</div>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs font-mono-code text-[11px]">
<span className="text-on-surface-variant">Canonical &amp; Headers</span>
<button className="text-tertiary hover:underline font-semibold flex items-center gap-0.5">
            Review <span className="material-symbols-outlined text-[13px]">chevron_right</span>
</button>
</div>
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-tertiary/10 rounded-full blur-xl pointer-events-none"></div>
</div>
</div>
{/*  Top Action Bar: Search, Filters, Modes, CTA  */}
<div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col xl:flex-row xl:items-center justify-between gap-space-sm shadow-md">
{/*  Left Controls: Search & Status Filters  */}
<div className="flex flex-wrap items-center gap-space-sm flex-1">
<div className="relative w-full sm:w-72">
<span className="material-symbols-outlined absolute left-space-sm top-2.5 text-on-surface-variant text-[18px]">search</span>
<input className="w-full h-9 pl-9 pr-3 bg-surface-container text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm rounded-lg focus:outline-none focus:bg-surface-container-high transition-colors" id="domain-search" placeholder="Search domains, tags, or IDs..." type="text"/>
</div>
{/*  Filter Tags  */}
<div className="flex items-center gap-1 overflow-x-auto py-0.5">
<button className="filter-btn h-8 px-space-sm bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md font-semibold transition-colors shrink-0" data-filter="all">
            All (8)
          </button>
<button className="filter-btn h-8 px-space-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg font-label-md text-label-md font-medium transition-colors shrink-0 flex items-center gap-1.5" data-filter="healthy">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Healthy (6)
          </button>
<button className="filter-btn h-8 px-space-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg font-label-md text-label-md font-medium transition-colors shrink-0 flex items-center gap-1.5" data-filter="issues">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            Issues Detected (2)
          </button>
<button className="filter-btn h-8 px-space-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg font-label-md text-label-md font-medium transition-colors shrink-0 flex items-center gap-1.5" data-filter="crawling">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Crawling (1)
          </button>
</div>
</div>
{/*  Right Controls: View Switcher & Add Domain Button  */}
<div className="flex items-center justify-between xl:justify-end gap-space-sm pt-space-xs xl:pt-0">
{/*  Grid / Table View Switcher  */}
<div className="flex items-center bg-surface-container rounded-lg p-0.5">
<button className="w-8 h-8 rounded flex items-center justify-center bg-surface-container-high text-primary shadow-sm transition-all" id="view-grid-btn" title="Grid View">
<span className="material-symbols-outlined text-[18px]">grid_view</span>
</button>
<button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-all" id="view-table-btn" title="Table View">
<span className="material-symbols-outlined text-[18px]">view_list</span>
</button>
</div>
<div className="h-6 w-px bg-surface-variant hidden sm:block"></div>
{/*  Add Property Modal Trigger  */}
<button className="h-9 px-space-md bg-secondary text-on-secondary rounded-xl font-label-lg text-label-lg font-semibold flex items-center gap-2 hover:bg-secondary-fixed transition-colors shadow-md hover:shadow-lg" id="open-modal-btn">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
          Add New Domain
        </button>
</div>
</div>
{/*  MAIN DOMAINS GRID VIEW (Active View)  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg transition-opacity duration-200" id="domains-grid-view">
{/*  CARD 1: seotriks.io  */}
<div className="domain-card group bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between gap-space-md shadow-md hover:bg-surface-container transition-all relative overflow-hidden" data-status="healthy">
<div className="flex flex-col gap-space-sm">
{/*  Card Header  */}
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-xl bg-primary-container/30 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">seotriks.io</h3>
<span className="px-2 py-0.5 rounded-full font-mono-code text-[10px] bg-secondary-container/20 text-secondary font-semibold">
                    Primary Production
                  </span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-mono-code text-mono-code text-outline text-[11px] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Auto-synced 24m ago
                  </span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="font-mono-code text-mono-code text-outline text-[11px]">HTTP/3 Enabled</span>
</div>
</div>
</div>
{/*  Health Score Badge  */}
<div className="flex flex-col items-end shrink-0">
<div className="px-2.5 py-1 rounded-xl bg-secondary-container/20 text-secondary flex items-baseline gap-1 shadow-sm">
<span className="font-headline-sm text-headline-sm font-bold leading-none">88</span>
<span className="font-mono-code text-mono-code text-[11px]">/100</span>
</div>
<span className="font-mono-code text-mono-code text-secondary text-[10px] mt-1 font-semibold">Healthy</span>
</div>
</div>
{/*  Sparkline & KPI Matrix  */}
<div className="grid grid-cols-3 gap-2 bg-surface-container p-space-sm rounded-xl mt-space-xs">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Organic Visits</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">142.8K</span>
<span className="font-mono-code text-mono-code text-secondary text-[11px] font-semibold flex items-center mt-0.5">
<span className="material-symbols-outlined text-[13px]">arrow_drop_up</span>+18.4%
              </span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Keywords Tracked</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">1,248</span>
<span className="font-mono-code text-mono-code text-primary text-[11px] mt-0.5">
                Top 3: <strong className="text-on-surface">64</strong>
</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Critical Issues</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold mt-0.5">3</span>
<span className="font-mono-code text-mono-code text-outline text-[11px] mt-0.5">
                12 Warnings
              </span>
</div>
</div>
{/*  Inline Visual: 30-Day Health Trend Wave  */}
<div className="flex flex-col gap-1 mt-space-xs">
<div className="flex items-center justify-between text-on-surface-variant font-mono-code text-[10px]">
<span>30-Day Crawl Consistency</span>
<span className="text-secondary font-medium">99.8% Availability</span>
</div>
<div className="w-full h-12 bg-surface-container rounded-lg p-1.5 flex items-end">
<svg className="w-full h-full text-secondary overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<defs>
<linearGradient id="grad-card1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="currentColor" stopOpacity="0.3"></stop>
<stop offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,18 Q15,16 25,12 T50,8 T75,10 T100,5 L100,24 L0,24 Z" fill="url(#grad-card1)"></path>
<path d="M0,18 Q15,16 25,12 T50,8 T75,10 T100,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
{/*  Quick Actions Footer  */}
<div className="flex items-center justify-between pt-space-sm">
<div className="flex items-center gap-1.5">
<button className="h-8 px-space-sm bg-primary-container text-on-primary-container hover:bg-inverse-primary rounded-lg font-label-md text-label-md font-semibold flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[15px]">dashboard</span>
              Open Dashboard
            </button>
<button className="h-8 px-space-sm bg-surface-container text-on-surface hover:bg-surface-bright rounded-lg font-label-md text-label-md font-medium flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-secondary text-[15px]">play_arrow</span>
              Run Audit
            </button>
</div>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Configure Edge Rules">
<span className="material-symbols-outlined text-[18px]">alt_route</span>
</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Domain Settings">
<span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
</div>
{/*  CARD 2: cloudscale-saas.com  */}
<div className="domain-card group bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between gap-space-md shadow-md hover:bg-surface-container transition-all relative overflow-hidden" data-status="healthy">
<div className="flex flex-col gap-space-sm">
{/*  Header  */}
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-xl bg-surface-container-highest text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">corporate_fare</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">cloudscale-saas.com</h3>
<span className="px-2 py-0.5 rounded-full font-mono-code text-[10px] bg-surface-container-highest text-on-surface-variant font-medium">
                    Client Enterprise
                  </span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-mono-code text-mono-code text-outline text-[11px] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Last audit: 3h ago
                  </span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="font-mono-code text-mono-code text-outline text-[11px]">GSC Connected</span>
</div>
</div>
</div>
{/*  Health Score Badge  */}
<div className="flex flex-col items-end shrink-0">
<div className="px-2.5 py-1 rounded-xl bg-secondary-container/20 text-secondary flex items-baseline gap-1 shadow-sm">
<span className="font-headline-sm text-headline-sm font-bold leading-none">94</span>
<span className="font-mono-code text-mono-code text-[11px]">/100</span>
</div>
<span className="font-mono-code text-mono-code text-secondary text-[10px] mt-1 font-semibold">Optimal</span>
</div>
</div>
{/*  KPI Matrix  */}
<div className="grid grid-cols-3 gap-2 bg-surface-container p-space-sm rounded-xl mt-space-xs">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Organic Visits</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">610.2K</span>
<span className="font-mono-code text-mono-code text-secondary text-[11px] font-semibold flex items-center mt-0.5">
<span className="material-symbols-outlined text-[13px]">arrow_drop_up</span>+6.1%
              </span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Keywords Tracked</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">4,890</span>
<span className="font-mono-code text-mono-code text-primary text-[11px] mt-0.5">
                Top 3: <strong className="text-on-surface">312</strong>
</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Critical Issues</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold mt-0.5">0</span>
<span className="font-mono-code text-mono-code text-outline text-[11px] mt-0.5">
                4 Warnings
              </span>
</div>
</div>
{/*  Inline Visual: 30-Day Health Trend Wave  */}
<div className="flex flex-col gap-1 mt-space-xs">
<div className="flex items-center justify-between text-on-surface-variant font-mono-code text-[10px]">
<span>Core Web Vitals Metric</span>
<span className="text-secondary font-medium">LCP 1.1s (Pass)</span>
</div>
<div className="w-full h-12 bg-surface-container rounded-lg p-1.5 flex items-end">
<svg className="w-full h-full text-secondary overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<defs>
<linearGradient id="grad-card2" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="currentColor" stopOpacity="0.3"></stop>
<stop offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,10 Q25,8 50,6 T100,4 L100,24 L0,24 Z" fill="url(#grad-card2)"></path>
<path d="M0,10 Q25,8 50,6 T100,4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
{/*  Quick Actions Footer  */}
<div className="flex items-center justify-between pt-space-sm">
<div className="flex items-center gap-1.5">
<button className="h-8 px-space-sm bg-primary-container text-on-primary-container hover:bg-inverse-primary rounded-lg font-label-md text-label-md font-semibold flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[15px]">dashboard</span>
              Open Dashboard
            </button>
<button className="h-8 px-space-sm bg-surface-container text-on-surface hover:bg-surface-bright rounded-lg font-label-md text-label-md font-medium flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-secondary text-[15px]">play_arrow</span>
              Run Audit
            </button>
</div>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Configure Edge Rules">
<span className="material-symbols-outlined text-[18px]">alt_route</span>
</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Domain Settings">
<span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
</div>
{/*  CARD 3: fintechpulse.io  */}
<div className="domain-card group bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between gap-space-md shadow-md hover:bg-surface-container transition-all relative overflow-hidden" data-status="issues">
<div className="flex flex-col gap-space-sm">
{/*  Header  */}
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-xl bg-tertiary-container/30 text-tertiary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">warning</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">fintechpulse.io</h3>
<span className="px-2 py-0.5 rounded-full font-mono-code text-[10px] bg-tertiary-container text-on-tertiary-container font-semibold">
                    Staging &amp; Blog
                  </span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-mono-code text-mono-code text-outline text-[11px] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Last audit: 12h ago
                  </span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="font-mono-code text-mono-code text-tertiary text-[11px] font-medium">8 Redirect Loops</span>
</div>
</div>
</div>
{/*  Health Score Badge  */}
<div className="flex flex-col items-end shrink-0">
<div className="px-2.5 py-1 rounded-xl bg-tertiary-container/20 text-tertiary flex items-baseline gap-1 shadow-sm">
<span className="font-headline-sm text-headline-sm font-bold leading-none">71</span>
<span className="font-mono-code text-mono-code text-[11px]">/100</span>
</div>
<span className="font-mono-code text-mono-code text-tertiary text-[10px] mt-1 font-semibold">Needs Attention</span>
</div>
</div>
{/*  KPI Matrix  */}
<div className="grid grid-cols-3 gap-2 bg-surface-container p-space-sm rounded-xl mt-space-xs">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Organic Visits</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">88.4K</span>
<span className="font-mono-code text-mono-code text-tertiary text-[11px] font-semibold flex items-center mt-0.5">
<span className="material-symbols-outlined text-[13px]">arrow_drop_down</span>-4.2%
              </span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Keywords Tracked</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">920</span>
<span className="font-mono-code text-mono-code text-outline text-[11px] mt-0.5">
                Top 3: <strong className="text-on-surface">19</strong>
</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Critical Issues</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold mt-0.5">8</span>
<span className="font-mono-code text-mono-code text-tertiary text-[11px] mt-0.5 font-semibold">
                Canonicals broken
              </span>
</div>
</div>
{/*  Autonomous Action Alert Strip  */}
<div className="flex items-center justify-between p-space-sm bg-tertiary-container/20 rounded-lg text-tertiary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span className="font-body-sm text-body-sm font-medium">5 Autonomous Edge Fixes Generated</span>
</div>
<button className="px-2 py-1 bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold rounded hover:bg-tertiary-fixed transition-colors">
              Deploy Fix
            </button>
</div>
</div>
{/*  Quick Actions Footer  */}
<div className="flex items-center justify-between pt-space-sm">
<div className="flex items-center gap-1.5">
<button className="h-8 px-space-sm bg-primary-container text-on-primary-container hover:bg-inverse-primary rounded-lg font-label-md text-label-md font-semibold flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[15px]">dashboard</span>
              Open Dashboard
            </button>
<button className="h-8 px-space-sm bg-surface-container text-on-surface hover:bg-surface-bright rounded-lg font-label-md text-label-md font-medium flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-secondary text-[15px]">play_arrow</span>
              Run Audit
            </button>
</div>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Configure Edge Rules">
<span className="material-symbols-outlined text-[18px]">alt_route</span>
</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Domain Settings">
<span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
</div>
{/*  CARD 4: devstack-academy.org  */}
<div className="domain-card group bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between gap-space-md shadow-md hover:bg-surface-container transition-all relative overflow-hidden" data-status="healthy">
<div className="flex flex-col gap-space-sm">
{/*  Header  */}
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-xl bg-surface-container-highest text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">school</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">devstack-academy.org</h3>
<span className="px-2 py-0.5 rounded-full font-mono-code text-[10px] bg-surface-container-highest text-on-surface-variant font-medium">
                    Content &amp; Courses
                  </span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-mono-code text-mono-code text-outline text-[11px] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Last audit: 1 day ago
                  </span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="font-mono-code text-mono-code text-outline text-[11px]">Sitemap: 1,840 URLs</span>
</div>
</div>
</div>
{/*  Health Score Badge  */}
<div className="flex flex-col items-end shrink-0">
<div className="px-2.5 py-1 rounded-xl bg-secondary-container/20 text-secondary flex items-baseline gap-1 shadow-sm">
<span className="font-headline-sm text-headline-sm font-bold leading-none">82</span>
<span className="font-mono-code text-mono-code text-[11px]">/100</span>
</div>
<span className="font-mono-code text-mono-code text-secondary text-[10px] mt-1 font-semibold">Good</span>
</div>
</div>
{/*  KPI Matrix  */}
<div className="grid grid-cols-3 gap-2 bg-surface-container p-space-sm rounded-xl mt-space-xs">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Organic Visits</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">245.0K</span>
<span className="font-mono-code text-mono-code text-secondary text-[11px] font-semibold flex items-center mt-0.5">
<span className="material-symbols-outlined text-[13px]">arrow_drop_up</span>+22.0%
              </span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Keywords Tracked</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">2,150</span>
<span className="font-mono-code text-mono-code text-primary text-[11px] mt-0.5">
                Top 3: <strong className="text-on-surface">114</strong>
</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant">Critical Issues</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">1</span>
<span className="font-mono-code text-mono-code text-outline text-[11px] mt-0.5">
                7 Warnings
              </span>
</div>
</div>
{/*  Inline Visual: 30-Day Health Trend Wave  */}
<div className="flex flex-col gap-1 mt-space-xs">
<div className="flex items-center justify-between text-on-surface-variant font-mono-code text-[10px]">
<span>Search Impressions (30D)</span>
<span className="text-secondary font-medium">840K Impressions</span>
</div>
<div className="w-full h-12 bg-surface-container rounded-lg p-1.5 flex items-end">
<svg className="w-full h-full text-secondary overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<defs>
<linearGradient id="grad-card4" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="currentColor" stopOpacity="0.3"></stop>
<stop offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,20 Q30,18 45,11 T75,6 T100,2 L100,24 L0,24 Z" fill="url(#grad-card4)"></path>
<path d="M0,20 Q30,18 45,11 T75,6 T100,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
{/*  Quick Actions Footer  */}
<div className="flex items-center justify-between pt-space-sm">
<div className="flex items-center gap-1.5">
<button className="h-8 px-space-sm bg-primary-container text-on-primary-container hover:bg-inverse-primary rounded-lg font-label-md text-label-md font-semibold flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[15px]">dashboard</span>
              Open Dashboard
            </button>
<button className="h-8 px-space-sm bg-surface-container text-on-surface hover:bg-surface-bright rounded-lg font-label-md text-label-md font-medium flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-secondary text-[15px]">play_arrow</span>
              Run Audit
            </button>
</div>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Configure Edge Rules">
<span className="material-symbols-outlined text-[18px]">alt_route</span>
</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Domain Settings">
<span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
</div>
</div>
{/*  SECONDARY & ARCHIVED DOMAINS TABLE SECTION  */}
<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Archived &amp; Secondary Tracked Domains</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Connected APIs, proxy status, and automated background audit telemetry.</p>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-space-sm bg-surface-container text-on-surface hover:bg-surface-bright rounded-lg font-label-md text-label-md font-medium flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-[16px]">file_download</span> Export Registry CSV
          </button>
</div>
</div>
{/*  Data Table Wrapper  */}
<div className="overflow-x-auto rounded-lg bg-surface-container">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-highest text-outline font-mono-code text-[11px] uppercase tracking-wider">
<th className="py-3 px-space-md">Domain / Environment</th>
<th className="py-3 px-space-md">GSC Connection</th>
<th className="py-3 px-space-md">GTM / Crawler</th>
<th className="py-3 px-space-md">Edge Proxy</th>
<th className="py-3 px-space-md text-right">Monthly Clicks</th>
<th className="py-3 px-space-md">Audit Cadence</th>
<th className="py-3 px-space-md text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-variant/40 font-body-sm text-body-sm text-on-surface">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-high/60 transition-colors">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-lg bg-surface-variant flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[16px]">language</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">app.seotriks.io</span>
<span className="font-mono-code text-mono-code text-[11px] text-outline">Application Subdomain</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-mono-code text-[11px] bg-secondary-container/20 text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Active Sync
                </span>
</td>
<td className="py-3.5 px-space-md font-mono-code text-mono-code text-[11px] text-on-surface-variant">
                V2.4 Crawler JS
              </td>
<td className="py-3.5 px-space-md">
<span className="px-2 py-0.5 rounded font-mono-code text-[11px] bg-surface-container-high text-primary">
                  Cloudflare Worker
                </span>
</td>
<td className="py-3.5 px-space-md font-mono-code text-mono-code text-[13px] text-right text-on-surface font-semibold">
                320.4K
              </td>
<td className="py-3.5 px-space-md font-body-sm text-body-sm text-on-surface-variant">
                Daily @ 02:00 UTC
              </td>
<td className="py-3.5 px-space-md text-right">
<div className="inline-flex items-center gap-1">
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors" title="Manage Domain">
<span className="material-symbols-outlined text-[18px]">tune</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors" title="Pause Monitoring">
<span className="material-symbols-outlined text-[18px]">pause_circle</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:text-tertiary hover:bg-surface-variant transition-colors" title="Delete Domain">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-high/60 transition-colors">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-lg bg-surface-variant flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[16px]">language</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">docs.cloudscale.io</span>
<span className="font-mono-code text-mono-code text-[11px] text-outline">Knowledge Base</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-mono-code text-[11px] bg-secondary-container/20 text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Active Sync
                </span>
</td>
<td className="py-3.5 px-space-md font-mono-code text-mono-code text-[11px] text-on-surface-variant">
                GTM-KD9402
              </td>
<td className="py-3.5 px-space-md">
<span className="px-2 py-0.5 rounded font-mono-code text-[11px] bg-surface-container-high text-primary">
                  Fastly Compute
                </span>
</td>
<td className="py-3.5 px-space-md font-mono-code text-mono-code text-[13px] text-right text-on-surface font-semibold">
                89.1K
              </td>
<td className="py-3.5 px-space-md font-body-sm text-body-sm text-on-surface-variant">
                Weekly on Monday
              </td>
<td className="py-3.5 px-space-md text-right">
<div className="inline-flex items-center gap-1">
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors" title="Manage Domain">
<span className="material-symbols-outlined text-[18px]">tune</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors" title="Pause Monitoring">
<span className="material-symbols-outlined text-[18px]">pause_circle</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:text-tertiary hover:bg-surface-variant transition-colors" title="Delete Domain">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: Token Expired Warning  */}
<tr className="hover:bg-surface-container-high/60 transition-colors">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-lg bg-surface-variant flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[16px]">sync_problem</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">sandbox-clientstore.net</span>
<span className="font-mono-code text-mono-code text-[11px] text-outline">Staging Cluster</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-mono-code text-[11px] bg-tertiary-container text-on-tertiary-container font-semibold">
<span className="material-symbols-outlined text-[12px]">key_off</span> Token Expired
                </span>
</td>
<td className="py-3.5 px-space-md font-mono-code text-mono-code text-[11px] text-outline">
                Disabled
              </td>
<td className="py-3.5 px-space-md">
<span className="px-2 py-0.5 rounded font-mono-code text-[11px] bg-surface-container-high text-outline">
                  Direct Origin
                </span>
</td>
<td className="py-3.5 px-space-md font-mono-code text-mono-code text-[13px] text-right text-outline">
                4.2K
              </td>
<td className="py-3.5 px-space-md font-body-sm text-body-sm text-on-surface-variant">
                Paused
              </td>
<td className="py-3.5 px-space-md text-right">
<div className="inline-flex items-center gap-1">
<button className="px-2 py-1 bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold rounded hover:bg-tertiary-fixed transition-colors">
                    Reconnect
                  </button>
<button className="p-1 rounded text-on-surface-variant hover:text-tertiary hover:bg-surface-variant transition-colors" title="Delete Domain">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: Secondary  */}
<tr className="hover:bg-surface-container-high/60 transition-colors">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-lg bg-surface-variant flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[16px]">language</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">beta-cdn.devstack.org</span>
<span className="font-mono-code text-mono-code text-[11px] text-outline">Static Edge Cache</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-mono-code text-[11px] bg-secondary-container/20 text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Active Sync
                </span>
</td>
<td className="py-3.5 px-space-md font-mono-code text-mono-code text-[11px] text-on-surface-variant">
                V2.4 Crawler JS
              </td>
<td className="py-3.5 px-space-md">
<span className="px-2 py-0.5 rounded font-mono-code text-[11px] bg-surface-container-high text-primary">
                  Cloudflare Worker
                </span>
</td>
<td className="py-3.5 px-space-md font-mono-code text-mono-code text-[13px] text-right text-on-surface font-semibold">
                19.5K
              </td>
<td className="py-3.5 px-space-md font-body-sm text-body-sm text-on-surface-variant">
                Bi-weekly
              </td>
<td className="py-3.5 px-space-md text-right">
<div className="inline-flex items-center gap-1">
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors" title="Manage Domain">
<span className="material-symbols-outlined text-[18px]">tune</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors" title="Pause Monitoring">
<span className="material-symbols-outlined text-[18px]">pause_circle</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:text-tertiary hover:bg-surface-variant transition-colors" title="Delete Domain">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  MODAL: ADD NEW DOMAIN / PROPERTY  */}
<div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md hidden items-center justify-center p-gutter" id="add-domain-modal">
<div className="bg-surface-container-low rounded-2xl w-full max-w-xl p-space-lg flex flex-col gap-space-lg shadow-xl relative animate-in fade-in zoom-in duration-150">
{/*  Modal Header  */}
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="w-8 h-8 rounded-lg bg-primary-container text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">add_link</span>
</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Add New Monitored Property</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Connect a domain for automated headless crawls, SERP rank tracking, and Core Web Vitals profiling.</p>
</div>
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" id="close-modal-btn">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
{/*  Form Inputs  */}
<div className="flex flex-col gap-space-md">
{/*  Domain URL  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-lg text-label-lg font-medium text-on-surface">Target Domain / Origin URL</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">globe</span>
<input className="w-full h-10 pl-9 pr-3 bg-surface-container text-on-surface placeholder:text-outline font-body-sm text-body-sm rounded-xl focus:outline-none focus:bg-surface-container-high transition-colors" id="new-domain-input" placeholder="e.g. acmewidgets.com or staging.store.io" type="text"/>
</div>
<span className="font-mono-code text-mono-code text-[11px] text-outline">Protocol prefix (https://) will be inferred automatically with TLS handshake testing.</span>
</div>
{/*  Project Tag & Category  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1.5">
<label className="font-label-lg text-label-lg font-medium text-on-surface">Environment / Tag</label>
<select className="w-full h-10 px-3 bg-surface-container text-on-surface font-body-sm text-body-sm rounded-xl focus:outline-none focus:bg-surface-container-high transition-colors">
<option>Production (Live Store)</option>
<option>Client Enterprise</option>
<option>Staging / Preview</option>
<option>Content &amp; Blog Hub</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-lg text-label-lg font-medium text-on-surface">Audit Cadence</label>
<select className="w-full h-10 px-3 bg-surface-container text-on-surface font-body-sm text-body-sm rounded-xl focus:outline-none focus:bg-surface-container-high transition-colors">
<option>Daily at 02:00 UTC (Recommended)</option>
<option>Every 12 Hours (High Volatility)</option>
<option>Weekly (Low Priority)</option>
<option>Manual Trigger Only</option>
</select>
</div>
</div>
{/*  Edge Integration Options  */}
<div className="p-space-md bg-surface-container rounded-xl flex flex-col gap-space-sm">
<span className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">bolt</span> Autonomous Edge Optimizer
          </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Inject real-time schema markup, fix redirect chains, and apply canonical headers directly via CDN edge workers.</p>
<label className="flex items-center gap-2 cursor-pointer mt-1">
<input defaultChecked className="w-4 h-4 rounded bg-surface-container-high accent-secondary cursor-pointer" type="checkbox"/>
<span className="font-label-md text-label-md text-on-surface">Enable Cloudflare / Fastly reverse-proxy rules</span>
</label>
</div>
</div>
{/*  Modal Footer  */}
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button className="h-10 px-space-md bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-xl font-label-lg text-label-lg font-medium transition-colors" id="cancel-modal-btn">
          Cancel
        </button>
<button className="h-10 px-space-lg bg-secondary text-on-secondary rounded-xl font-label-lg text-label-lg font-semibold flex items-center gap-2 hover:bg-secondary-fixed transition-colors shadow-md" id="confirm-add-btn">
<span className="material-symbols-outlined text-[18px]">verified</span>
          Verify &amp; Start Initial Crawl
        </button>
</div>
</div>
</div>
{/*  Minimal Client-Side Behavior Script  */}

</div>
</main>
  )
}