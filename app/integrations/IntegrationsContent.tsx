"use client";
export function IntegrationsContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">

<div className="flex flex-col w-full pb-space-2xl">
{/*  Header & Context Area  */}
<section className="relative pt-space-lg pb-space-xl overflow-hidden">
<div className="absolute -top-16 right-12 w-96 h-96 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none"></div>
<div className="absolute top-8 right-64 w-64 h-64 rounded-full bg-primary-container/10 blur-2xl pointer-events-none"></div>
<div className="relative flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg">
<div className="max-w-3xl">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs uppercase tracking-wider font-bold">API Mesh &amp; Connectors</span>
<span className="text-secondary font-label-xs text-label-xs">• Enterprise Tier</span>
</div>
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-space-xs">
          Ecosystem Integrations &amp; Data Connectors
        </h1>
<p className="font-body-lg text-body-lg text-secondary leading-relaxed">
          Connect search engines, developer CI/CD pipelines, CMS platforms, CDNs, and collaboration tools to automate end-to-end SEO execution.
        </p>
</div>
<div className="flex flex-wrap items-center gap-space-sm self-start xl:self-end">
<button className="flex items-center gap-2 px-space-md py-2.5 bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md font-semibold rounded-xl shadow-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">terminal</span>
<span>API Documentation &amp; Keys</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 bg-primary-container text-on-primary hover:opacity-95 transition-all shadow-[0_4px_16px_rgba(242,106,75,0.32)] font-label-md text-label-md font-semibold rounded-xl">
<span className="material-symbols-outlined text-[18px]">add_link</span>
<span>Add Custom Webhook</span>
</button>
</div>
</div>
{/*  Telemetry Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-xl">
{/*  Card 1  */}
<div className="relative bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-semibold">Mesh Status</span>
<div className="font-metric-stat text-metric-stat text-on-surface font-bold mt-1">9 Active</div>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="font-label-xs text-label-xs font-semibold">Operational</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-secondary">
<span className="font-body-sm text-body-sm">All pipelines synchronized</span>
<span className="font-label-md text-label-md font-bold text-on-surface">0 Degraded</span>
</div>
<div className="w-full h-1 bg-surface-container-high rounded-full mt-2 overflow-hidden">
<div className="h-full bg-secondary w-full"></div>
</div>
</div>
{/*  Card 2  */}
<div className="relative bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-semibold">Monthly Ingestion &amp; Sync</span>
<div className="font-metric-stat text-metric-stat text-on-surface font-bold mt-1">1.42M <span className="font-headline-sm text-headline-sm font-semibold text-secondary">events/mo</span></div>
</div>
<span className="material-symbols-outlined text-secondary text-2xl">sync_saved_locally</span>
</div>
<div className="mt-4 flex items-center justify-between text-secondary">
<span className="font-body-sm text-body-sm">Data reliability SLA</span>
<span className="font-label-md text-label-md font-bold text-emerald-600">99.98% Success</span>
</div>
<div className="w-full h-1 bg-surface-container-high rounded-full mt-2 overflow-hidden">
<div className="h-full bg-primary-container w-[82%]"></div>
</div>
</div>
{/*  Card 3  */}
<div className="relative bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-semibold">Edge Middleware Deployment</span>
<div className="font-metric-stat text-metric-stat text-on-surface font-bold mt-1">4 Edge Workers</div>
</div>
<span className="material-symbols-outlined text-secondary text-2xl">dns</span>
</div>
<div className="mt-4 flex items-center justify-between text-secondary">
<span className="font-body-sm text-body-sm">Cloudflare &amp; Fastly status</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Global Active</span>
</div>
<div className="w-full h-1 bg-surface-container-high rounded-full mt-2 overflow-hidden">
<div className="h-full bg-secondary-container w-[100%]"></div>
</div>
</div>
</div>
</section>
{/*  Filter & Search Controls  */}
<section className="mt-space-md mb-space-lg flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
{/*  Category Pills  */}
<div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" id="categoryFilterContainer">
<button className="category-btn active px-3.5 py-1.5 rounded-full font-label-md text-label-md font-semibold bg-secondary text-on-secondary transition-all" onClick={() => {}}>
        All Integrations (24)
      </button>
<button className="category-btn px-3.5 py-1.5 rounded-full font-label-md text-label-md font-medium bg-surface-container-low text-secondary hover:bg-surface-container transition-all" onClick={() => {}}>
        Search &amp; Analytics (5)
      </button>
<button className="category-btn px-3.5 py-1.5 rounded-full font-label-md text-label-md font-medium bg-surface-container-low text-secondary hover:bg-surface-container transition-all" onClick={() => {}}>
        Developer &amp; CI/CD (6)
      </button>
<button className="category-btn px-3.5 py-1.5 rounded-full font-label-md text-label-md font-medium bg-surface-container-low text-secondary hover:bg-surface-container transition-all" onClick={() => {}}>
        CMS &amp; Content (4)
      </button>
<button className="category-btn px-3.5 py-1.5 rounded-full font-label-md text-label-md font-medium bg-surface-container-low text-secondary hover:bg-surface-container transition-all" onClick={() => {}}>
        CDN &amp; Edge (3)
      </button>
<button className="category-btn px-3.5 py-1.5 rounded-full font-label-md text-label-md font-medium bg-surface-container-low text-secondary hover:bg-surface-container transition-all" onClick={() => {}}>
        Alerts &amp; Messaging (6)
      </button>
</div>
{/*  Quick Search  */}
<div className="relative w-full lg:w-80 flex-shrink-0">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[18px]">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm" id="searchInput" onInput={() => {}} placeholder="Search integrations by name..." type="text"/>
</div>
</section>
{/*  Section: Active Connectors  */}
<div className="mb-space-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Active Deployments</h2>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-xs text-label-xs font-bold">6 LIVE</span>
</div>
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-semibold">Bi-Directional Syncing</span>
</div>
{/*  Connected Integrations Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg mb-space-2xl" id="connectedGrid">
{/*  Card 1: GSC  */}
<div className="integration-card flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] hover:shadow-md transition-all group" data-category="search" data-name="google search console gsc">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface p-2.5">
<svg className="w-full h-full fill-current text-secondary" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"></path>
</svg>
</div>
<div>
<h3 className="font-title text-title font-bold text-on-surface">Google Search Console</h3>
<span className="font-label-xs text-label-xs text-secondary font-medium">Search &amp; Analytics</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> CONNECTED
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-space-md">
          Real-time query impressions, CTR, indexation telemetry, and sitemap sync for production-stripe.
        </p>
</div>
<div>
<div className="bg-surface-container-low p-space-sm rounded-xl mb-space-md flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-emerald-600">sync</span>
<span className="font-label-xs text-label-xs font-semibold text-on-surface">Live Sync • 4m ago</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono">42k paths</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex-1 py-2 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold rounded-lg transition-colors text-center">
            Configure Sync Settings
          </button>
<button className="p-2 rounded-lg bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Trigger Instant Fetch">
<span className="material-symbols-outlined text-[18px]">refresh</span>
</button>
</div>
</div>
</div>
{/*  Card 2: Cloudflare  */}
<div className="integration-card flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] hover:shadow-md transition-all group" data-category="cdn" data-name="cloudflare edge workers cdn">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center p-2.5">
<svg className="w-full h-full fill-current text-primary-container" viewBox="0 0 24 24">
<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path>
</svg>
</div>
<div>
<h3 className="font-title text-title font-bold text-on-surface">Cloudflare Edge Workers</h3>
<span className="font-label-xs text-label-xs text-secondary font-medium">CDN &amp; Edge</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> CONNECTED
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-space-md">
          Instantaneous edge redirects, robots.txt header overrides, and schema microdata injection without code deploys.
        </p>
</div>
<div>
<div className="bg-surface-container-low p-space-sm rounded-xl mb-space-md flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container">bolt</span>
<span className="font-label-xs text-label-xs font-semibold text-on-surface">4 Workers Active</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono">Latency: 1.2ms</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex-1 py-2 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold rounded-lg transition-colors text-center">
            Manage Edge Rules
          </button>
<button className="p-2 rounded-lg bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Purge Cache">
<span className="material-symbols-outlined text-[18px]">cached</span>
</button>
</div>
</div>
</div>
{/*  Card 3: GitHub  */}
<div className="integration-card flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] hover:shadow-md transition-all group" data-category="dev" data-name="github ci/cd developer actions">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface p-2.5">
<svg className="w-full h-full fill-current text-on-surface" viewBox="0 0 24 24">
<path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
</svg>
</div>
<div>
<h3 className="font-title text-title font-bold text-on-surface">GitHub CI/CD</h3>
<span className="font-label-xs text-label-xs text-secondary font-medium">Developer &amp; CI/CD</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> CONNECTED
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-space-md">
          Automated PR creation for schema markup diffs, canonical tags, and pre-commit robots.txt assertion linting.
        </p>
</div>
<div>
<div className="bg-surface-container-low p-space-sm rounded-xl mb-space-md flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">merge</span>
<span className="font-label-xs text-label-xs font-semibold text-on-surface">stripe/marketing-web</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono">112 PRs Merged</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex-1 py-2 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold rounded-lg transition-colors text-center">
            Review PR Guardrails
          </button>
<button className="p-2 rounded-lg bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Repository Settings">
<span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
</div>
{/*  Card 4: Jira Software  */}
<div className="integration-card flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] hover:shadow-md transition-all group" data-category="dev" data-name="jira software atlassian agile backlog">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center p-2.5">
<svg className="w-full h-full fill-current text-blue-600" viewBox="0 0 24 24">
<path d="M11.53 2c0 2.4 1.97 4.35 4.39 4.35h3.69V2h-8.08zm-4.4 4.38c0 2.4 1.97 4.35 4.39 4.35h3.69V6.38H7.13zm-4.4 4.38c0 2.4 1.97 4.35 4.39 4.35h3.69v-4.35H2.73z"></path>
</svg>
</div>
<div>
<h3 className="font-title text-title font-bold text-on-surface">Jira Software</h3>
<span className="font-label-xs text-label-xs text-secondary font-medium">Developer &amp; CI/CD</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> CONNECTED
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-space-md">
          Bi-directional sync between SEOTRIKS recommendations and engineering sprint backlogs.
        </p>
</div>
<div>
<div className="bg-surface-container-low p-space-sm rounded-xl mb-space-md flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-blue-600">task_alt</span>
<span className="font-label-xs text-label-xs font-semibold text-on-surface">Project SEO-SPRINT</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono">42 Issues Active</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex-1 py-2 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold rounded-lg transition-colors text-center">
            Configure Issue Mapping
          </button>
<button className="p-2 rounded-lg bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Sync Status">
<span className="material-symbols-outlined text-[18px]">sync_alt</span>
</button>
</div>
</div>
</div>
{/*  Card 5: Slack  */}
<div className="integration-card flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] hover:shadow-md transition-all group" data-category="alerts" data-name="slack enterprise alerts messaging">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center p-2.5">
<svg className="w-full h-full fill-current text-purple-700" viewBox="0 0 24 24">
<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.527 2.527 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path>
</svg>
</div>
<div>
<h3 className="font-title text-title font-bold text-on-surface">Slack Enterprise</h3>
<span className="font-label-xs text-label-xs text-secondary font-medium">Alerts &amp; Messaging</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> CONNECTED
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-space-md">
          Real-time volatility alerts, P0 crawl friction alerts, and weekly executive performance digests.
        </p>
</div>
<div>
<div className="bg-surface-container-low p-space-sm rounded-xl mb-space-md flex items-center justify-between">
<div className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-[16px] text-purple-600 flex-shrink-0">tag</span>
<span className="font-label-xs text-label-xs font-semibold text-on-surface truncate">#seo-telemetry, #growth-ops</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono flex-shrink-0">Instant Dispatch</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex-1 py-2 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold rounded-lg transition-colors text-center">
            Edit Notification Channels
          </button>
<button className="p-2 rounded-lg bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Test Payload">
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</div>
</div>
{/*  Card 6: Contentful  */}
<div className="integration-card flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] hover:shadow-md transition-all group" data-category="cms" data-name="contentful headless cms content">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center p-2.5">
<svg className="w-full h-full fill-current text-blue-500" viewBox="0 0 24 24">
<circle cx="12" cy="12" fill="none" r="9" stroke="currentColor" strokeWidth="2.5"></circle>
<path d="M12 7v5l3 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
<div>
<h3 className="font-title text-title font-bold text-on-surface">Contentful Headless</h3>
<span className="font-label-xs text-label-xs text-secondary font-medium">CMS &amp; Content</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> CONNECTED
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-space-md">
          Direct publishing for AI-generated content briefs and automated metadata updates across 428 blog articles.
        </p>
</div>
<div>
<div className="bg-surface-container-low p-space-sm rounded-xl mb-space-md flex items-center justify-between">
<div className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-[16px] text-blue-500 flex-shrink-0">cloud_done</span>
<span className="font-label-xs text-label-xs font-semibold text-on-surface truncate">Stripe Production Content</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono flex-shrink-0">Auto-Sync</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex-1 py-2 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold rounded-lg transition-colors text-center">
            Manage CMS Webhooks
          </button>
<button className="p-2 rounded-lg bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Sync Schema">
<span className="material-symbols-outlined text-[18px]">schema</span>
</button>
</div>
</div>
</div>
</div>
{/*  Section: Available Integrations  */}
<div className="mb-space-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Available Integrations</h2>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-xs text-label-xs font-bold">READY TO DEPLOY</span>
</div>
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-semibold">1-Click OAuth &amp; Tokens</span>
</div>
{/*  Available Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-2xl" id="availableGrid">
{/*  Fastly  */}
<div className="integration-card flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] hover:shadow-md transition-all" data-category="cdn" data-name="fastly compute edge cdn vcl cache">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center p-2 text-error font-bold font-headline-sm">
            F
          </div>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">CDN &amp; Edge</span>
</div>
<h3 className="font-title text-title font-bold text-on-surface mb-1">Fastly Compute@Edge</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-space-lg">
          Deploy dynamic VCL logic and surrogate-key cache purging based on algorithmic SERP changes.
        </p>
</div>
<button className="w-full py-2 px-3 bg-surface-container-low hover:bg-primary-container hover:text-on-primary text-primary font-label-md text-label-md font-semibold rounded-lg transition-all text-center flex items-center justify-center gap-1.5 group">
<span>Connect Fastly</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
</div>
{/*  Vercel  */}
<div className="integration-card flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] hover:shadow-md transition-all" data-category="dev" data-name="vercel enterprise nextjs dev developer preview">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center p-2">
<svg className="w-6 h-6 fill-current text-on-surface" viewBox="0 0 24 24">
<path d="M12 1L24 22H0L12 1Z"></path>
</svg>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">CI/CD</span>
</div>
<h3 className="font-title text-title font-bold text-on-surface mb-1">Vercel Enterprise</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-space-lg">
          Automated preview deployment testing for Core Web Vitals and SSR hydration checks.
        </p>
</div>
<button className="w-full py-2 px-3 bg-surface-container-low hover:bg-primary-container hover:text-on-primary text-primary font-label-md text-label-md font-semibold rounded-lg transition-all text-center flex items-center justify-center gap-1.5 group">
<span>Connect Vercel</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
</div>
{/*  BigQuery  */}
<div className="integration-card flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] hover:shadow-md transition-all" data-category="search" data-name="google bigquery data warehouse lake sql analytics">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center p-2 text-blue-600">
<span className="material-symbols-outlined text-2xl">database</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Warehouse</span>
</div>
<h3 className="font-title text-title font-bold text-on-surface mb-1">BigQuery Warehouse</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-space-lg">
          Stream raw rank tracking, crawl logs, and backlink tables into your enterprise data lake.
        </p>
</div>
<button className="w-full py-2 px-3 bg-surface-container-low hover:bg-primary-container hover:text-on-primary text-primary font-label-md text-label-md font-semibold rounded-lg transition-all text-center flex items-center justify-center gap-1.5 group">
<span>Connect BigQuery</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
</div>
{/*  Datadog  */}
<div className="integration-card flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] hover:shadow-md transition-all" data-category="alerts" data-name="datadog apm telemetry latency monitoring">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-md">
<div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center p-2 text-purple-700">
<span className="material-symbols-outlined text-2xl">monitoring</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Monitoring</span>
</div>
<h3 className="font-title text-title font-bold text-on-surface mb-1">Datadog APM</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-space-lg">
          Correlate server latency spikes and TTFB regressions with organic search rank drops.
        </p>
</div>
<button className="w-full py-2 px-3 bg-surface-container-low hover:bg-primary-container hover:text-on-primary text-primary font-label-md text-label-md font-semibold rounded-lg transition-all text-center flex items-center justify-center gap-1.5 group">
<span>Connect Datadog</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
</div>
</div>
{/*  Bottom Hero / Architecture & API Management Banner  */}
<section className="relative bg-surface-container-lowest rounded-3xl p-space-xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden">
<div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative">
<div className="lg:col-span-7">
<div className="flex items-center gap-2 mb-space-xs">
<span className="material-symbols-outlined text-primary-container text-xl">hub</span>
<span className="font-label-xs text-label-xs uppercase tracking-wider text-primary font-bold">Programmable Edge SEO</span>
</div>
<h3 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mb-space-xs">
          Custom Webhooks &amp; REST API Access
        </h3>
<p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-lg">
          Build custom orchestration pipelines with the SEOTRIKS v2 GraphQL and REST endpoints. Ingest audit telemetry, push automated metadata patches, and listen for algorithmic drops in realtime.
        </p>
{/*  API Key & Controls  */}
<div className="bg-surface-container-low p-space-md rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
<div className="min-w-0">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">Active Production Token</span>
<div className="flex items-center gap-2 mt-1">
<code className="font-mono font-label-md text-label-md text-on-surface bg-surface-container px-2.5 py-1 rounded-md select-all">
                strik_live_89f02c48419a...
              </code>
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface transition-colors" onClick={() => {}} title="Copy Secret">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
</div>
</div>
<div className="flex items-center gap-space-sm flex-shrink-0">
<button className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors">
              Rotate Key
            </button>
<button className="px-space-md py-2 rounded-xl bg-secondary text-on-secondary hover:opacity-95 font-label-md text-label-md font-semibold transition-opacity flex items-center gap-1.5">
<span>View SDK</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</button>
</div>
</div>
</div>
{/*  Quota Gauge & Architectural Spec  */}
<div className="lg:col-span-5 flex flex-col gap-space-md bg-surface-container-low p-space-lg rounded-2xl">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-bold">API Ingestion Rate Limit</span>
<span className="font-label-xs text-label-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800">42% Used</span>
</div>
<div>
<div className="flex items-baseline justify-between mb-1.5">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">2,100,420</span>
<span className="font-label-xs text-label-xs text-secondary font-mono">/ 5,000,000 calls</span>
</div>
<div className="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden flex">
<div className="bg-primary-container h-full rounded-full transition-all duration-500" ></div>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-2">
<div className="p-2.5 bg-surface-container-lowest rounded-xl">
<span className="font-label-xs text-label-xs text-secondary block mb-0.5">Average Response</span>
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">24ms</span>
</div>
<div className="p-2.5 bg-surface-container-lowest rounded-xl">
<span className="font-label-xs text-label-xs text-secondary block mb-0.5">Active Webhooks</span>
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">18 Listeners</span>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive Filtering Logic  */}

</div>

</main>
  )
}