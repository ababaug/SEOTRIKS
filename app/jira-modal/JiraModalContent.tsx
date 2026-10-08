"use client";
import React from 'react';

export default function JiraModalContent() {
  return (
    <>

<aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
<div className="p-space-lg flex flex-col">
<div className="flex items-center gap-space-sm mb-space-lg">
<img alt="SEOTRIKS Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VPzY9qlbmJ7zE7t-JK-KgVVu4JSno0bD6-3h1gv6Op5a7m7WbP_35aZKpzDVJr2-9BNRRpeEKnCWRgJHtx0FTq_dBSVwUolwvbaA1tLsGzz0OB_VSE35p54gmuY4gKg2VJv0cK28-Wik5TX3tF8O-0eRR7_zdAsjZEos6Ap4FJLbZKAzQCERrjmG_IiBSsD8-FKPCnaZbOE9Eo9DDubH64BwOevLD44LZb6361GebUBNUI5pYL9hYmKUc"/>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">SEOTRIKS</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Intelligence Suite</span>
</div>
</div>
<div className="mb-space-lg p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between shadow-[0_1px_3px_rgba(35,63,99,0.04)]">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-2.5 h-2.5 rounded-full bg-secondary-container ring-2 ring-secondary/20 flex-shrink-0"></div>
<div className="truncate">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">stripe.com</p>
<p className="font-label-xs text-label-xs text-secondary truncate">Production Domain</p>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-sm">unfold_more</span>
</div>
<nav className="flex flex-col gap-space-xs" data-active-classes="bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-xs pb-space-xs">CORE &amp; WORKSPACE</span>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="dashboard" href="#">Dashboard</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="seo-command-center" href="#">SEO Command Center</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="projects" href="#">Projects</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="seo-tasks" href="#">SEO Tasks</a>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">AUDIT &amp; RESEARCH</span>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="site-audit" href="#">Site Audit</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="keyword-research" href="#">Keyword Research</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="rank-tracking" href="#">Rank Tracking</a>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">REPORTS &amp; ANALYTICS</span>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="reports" href="#">Reports</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="report-builder" href="#">Report Builder</a>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">INTEGRATIONS &amp; ALERTS</span>
<a aria-current="page" className="flex items-center px-space-sm py-2 transition-colors bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg" data-path="integrations" href="#">Integrations</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="notification-center" href="#">Notification Center</a>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">SETTINGS &amp; BILLING</span>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="billing" href="#">Billing &amp; Subscription</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="organization-settings" href="#">Organization Settings</a>
</nav>
</div>
<div className="p-space-md border-t border-surface-container bg-surface-container-lowest">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-on-secondary">
<span className="material-symbols-outlined text-sm">bolt</span>
</div>
<div className="flex flex-col flex-1">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Crawl Quota</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">48,200 / 100k URLs</span>
</div>
</div>
</div>
</aside>
<div className="pl-72">
<header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Health</span>
<span className="font-label-md text-label-md font-bold text-secondary">94/100</span>
<span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">A+</span>
</div>
<div className="hidden xl:flex items-center gap-space-xs text-secondary font-label-sm text-label-md">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-xs text-label-xs text-secondary">Crawl: Running on 42 paths</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="relative flex items-center w-80">
<span className="material-symbols-outlined absolute left-3 text-secondary text-base">search</span>
<input className="w-full pl-9 pr-12 py-1.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Search keywords, URLs, issues..." type="text"/>
<kbd className="absolute right-2 px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">⌘K</kbd>
</div>
<button className="flex items-center gap-1.5 px-space-sm py-2 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>New Project</span>
</button>
<button className="relative p-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[20px]">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span>
</button>
<div className="flex items-center gap-space-xs pl-space-xs">
<img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvEq_gWuJ6OI_cWyB99KxlzSCH910sd9uRymPkEWgwBagbbn3fRt-5VINmP-LgsAaaJWXwIIzxKqkkZV1T6JB8gVgZ8wtnOy5gxydReR9y-N0aklNVwQDCyGyXDEHfZlIOUJlMrR1yR_plTGs0v8XP334LqCuvLXmvX3aUxbn5EEkhdC-P9CuO4Gdm4V2chZz3MyUm2zPbdYxO6PhgSNwY6_k7C5U9Xt3_mNeQL7ZzwAlB-_8sw4nY"/>
<span className="material-symbols-outlined text-secondary text-base">expand_more</span>
</div>
</div>
</header>
<main className="relative pt-16 w-full px-8 bg-surface"><div className="flex flex-col w-full relative">

<div className="w-full filter blur-[6px] opacity-40 pointer-events-none select-none py-space-xl">

<div className="flex items-center justify-between mb-space-xl">
<div>
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-bold">Ecosystem &amp; Data Fabric</span>
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mt-space-xs">Integrations &amp; CI/CD Pipelines</h1>
<p className="font-body-md text-body-md text-secondary mt-space-xs">Manage programmatic search intelligence pipelines, data warehouse syncs, and issue tracking automations.</p>
</div>
<div className="flex items-center gap-space-md">
<span className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span> 14 Active Connectors
        </span>
<button className="px-space-md py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md font-semibold shadow-sm">Audit Sync Logs</button>
</div>
</div>

<div className="flex items-center gap-space-sm mb-space-lg">
<span className="px-space-md py-1.5 rounded-lg bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-semibold">All Connectors (28)</span>
<span className="px-space-md py-1.5 rounded-lg bg-surface-container text-secondary font-label-md text-label-md">Engineering &amp; CI/CD (6)</span>
<span className="px-space-md py-1.5 rounded-lg bg-surface-container text-secondary font-label-md text-label-md">Analytics &amp; Data Warehouses (8)</span>
<span className="px-space-md py-1.5 rounded-lg bg-surface-container text-secondary font-label-md text-label-md">Search Consoles &amp; Crawlers (5)</span>
<span className="px-space-md py-1.5 rounded-lg bg-surface-container text-secondary font-label-md text-label-md">Alerting &amp; ChatOps (9)</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
<div className="flex items-start justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[26px]">task_alt</span>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold">CONNECTED</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Atlassian Jira Software</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Bi-directional issue sync for critical crawl anomalies and edge regressions.</p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
<div className="flex items-start justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[26px]">terminal</span>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">ACTIVE PR RUNNER</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">GitHub Actions Guardrails</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Halt deploys that trigger robots.txt disallow rules or schema drops.</p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
<div className="flex items-start justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[26px]">travel_explore</span>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold">SYNCED 2M AGO</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Google Search Console API</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Granular URL performance metrics and inspection indexing feeds.</p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
<div className="flex items-start justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[26px]">monitoring</span>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold">AVAILABLE</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Datadog APM &amp; Logs</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Correlate organic rank fluctuations with origin latencies and CDN cache hits.</p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
<div className="flex items-start justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[26px]">database</span>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold">DAILY DUMP</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Google BigQuery Warehouse</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Raw log streaming and historical multi-million keyword trajectory exports.</p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
<div className="flex items-start justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[26px]">forum</span>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold">4 CHANNELS</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Slack Incident Notifications</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Instant dispatcher alerts into #growth-seo-critical and #sre-oncall.</p>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-secondary/30 backdrop-blur-md overflow-y-auto">

<div className="relative w-full max-w-[780px] my-auto bg-surface-container-lowest rounded-2xl shadow-[0_24px_48px_-12px_rgba(35,63,99,0.22)] overflow-hidden flex flex-col max-h-[942px]">

<div className="p-space-lg pb-space-md bg-surface-container-lowest flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-md">

<div className="flex items-center gap-space-sm">
<div className="flex items-center -space-x-1.5">
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary shadow-sm">
<span className="material-symbols-outlined text-[22px]">developer_board</span>
</div>
<div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm z-10">
<span className="material-symbols-outlined text-[14px]">sync_alt</span>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed shadow-sm">
<span className="material-symbols-outlined text-[22px]">account_tree</span>
</div>
</div>
<div>
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-bold">Atlassian Jira Enterprise Sync</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Automated Jira Issue Sync &amp; CI/CD Guardrails</h2>
</div>
</div>

<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<p className="font-body-sm text-body-sm text-secondary max-w-[650px] leading-relaxed">
          Automatically convert algorithmic SEO regressions, P0 robots.txt blockers, and Core Web Vitals drops into sprint-ready engineering tickets with complete reproduction traces.
        </p>

<div className="flex items-center gap-space-xs mt-space-sm bg-surface-container-low p-1 rounded-xl">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold shadow-sm transition-all flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
            Connection &amp; Project
          </button>
<button className="px-space-md py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md font-medium transition-colors">
            Issue Mapping &amp; Severity
          </button>
<button className="px-space-md py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md font-medium transition-colors">
            Automated PR Guardrails
          </button>
<button className="px-space-md py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md font-medium transition-colors">
            Sync Telemetry &amp; Webhooks
          </button>
</div>
</div>

<div className="px-space-lg py-space-md overflow-y-auto space-y-space-lg flex-1">

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
<span className="material-symbols-outlined text-[20px]">cloud_done</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md font-bold text-on-surface">stripe-engineering.atlassian.net</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                  OAuth 2.0 PKCE
                </span>
</div>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Service Account: <code className="font-mono text-on-surface font-semibold bg-surface-container px-1 py-0.5 rounded">seotriks-bot@stripe.com</code></span>
</div>
</div>
<button className="self-start sm:self-center px-space-sm py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-secondary text-label-xs font-label-xs font-semibold shadow-sm transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">refresh</span>
            Re-Authenticate
          </button>
</div>

<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h4 className="font-title text-title text-on-surface font-semibold flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">folder_special</span>
              Target Project &amp; Issue Routing
            </h4>
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">Sprint Auto-Routing</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">

<div className="flex flex-col gap-1.5">
<label className="font-label-xs text-label-xs font-bold text-secondary uppercase">Jira Project</label>
<div className="relative flex items-center">
<select className="w-full appearance-none bg-surface-container-lowest rounded-lg py-2 pl-3 pr-8 font-body-sm text-body-sm text-on-surface font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary-container">
<option defaultValue="">CORE-PLATFORM - Core Web</option>
<option>SEO-OPS - Organic Growth</option>
<option>INFRA - Global Edge &amp; CDN</option>
</select>
<span className="material-symbols-outlined text-secondary text-base absolute right-2.5 pointer-events-none">expand_more</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-xs text-label-xs font-bold text-secondary uppercase">Default Issue Type</label>
<div className="relative flex items-center">
<select className="w-full appearance-none bg-surface-container-lowest rounded-lg py-2 pl-3 pr-8 font-body-sm text-body-sm text-on-surface font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary-container">
<option defaultValue="">Bug / Incident</option>
<option>Task / Investigation</option>
<option>Regression Sub-task</option>
</select>
<span className="material-symbols-outlined text-secondary text-base absolute right-2.5 pointer-events-none">expand_more</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-xs text-label-xs font-bold text-secondary uppercase">Target Component</label>
<div className="relative flex items-center">
<select className="w-full appearance-none bg-surface-container-lowest rounded-lg py-2 pl-3 pr-8 font-body-sm text-body-sm text-on-surface font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary-container">
<option defaultValue="">SEO &amp; Edge Routing</option>
<option>Frontend Architecture</option>
<option>Content Delivery &amp; SSR</option>
</select>
<span className="material-symbols-outlined text-secondary text-base absolute right-2.5 pointer-events-none">expand_more</span>
</div>
</div>
</div>

<div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-xl">
<div className="flex items-start gap-space-sm pr-space-md">
<span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">offline_bolt</span>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Auto-assign P0 Critical SEO bugs directly to Current Active Sprint</p>
<p className="font-body-sm text-body-sm text-secondary">Bypasses product backlog triage; flags ticket with highest priority and triggers on-call rotation.</p>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h4 className="font-title text-title text-on-surface font-semibold flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">tune</span>
              Algorithmic Ticket Dispatch Triggers
            </h4>
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">3 Enabled Rules</span>
</div>
<div className="flex flex-col gap-space-xs">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-md hover:bg-surface-container-low transition-colors">
<div className="pt-0.5">
<input defaultChecked className="w-4 h-4 rounded text-secondary bg-surface-container-lowest focus:ring-0 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-bold uppercase">P0 Critical</span>
<span className="font-label-md text-label-md font-bold text-on-surface">P0 Crawl Blocker &amp; Disallow Regressions</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-semibold">Immediate Dispatch</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
                  Trigger engineering incident ticket when &gt;1% of high-intent URLs or any <code className="font-mono bg-surface-container px-1 rounded text-on-surface">sitemap.xml</code> entries return 4xx/5xx responses to Googlebot Smartphone.
                </p>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-md hover:bg-surface-container-low transition-colors">
<div className="pt-0.5">
<input defaultChecked className="w-4 h-4 rounded text-secondary bg-surface-container-lowest focus:ring-0 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold uppercase">P1 Major</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Organic Visibility Free-Fall Alert</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-semibold">Δ ≥ 3 Pos</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
                  Trigger Jira task when any monitored Tier 1 Money Keyword drops ≥ 3 positions in top 10 search results within 24 hours of a code push.
                </p>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-md hover:bg-surface-container-low transition-colors">
<div className="pt-0.5">
<input defaultChecked className="w-4 h-4 rounded text-secondary bg-surface-container-lowest focus:ring-0 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-bold uppercase">P2 Standard</span>
<span className="font-label-md text-label-md font-bold text-on-surface">LCP / INP Real-User Performance Degradation</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-semibold">p75 &gt; 2.5s</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
                  Trigger ticket when Chrome UX Report (CrUX) and RUM p75 Core Web Vitals degrade into the 'Poor' threshold for 3 consecutive automated runs.
                </p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<h4 className="font-title text-title text-on-surface font-semibold flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">published_with_changes</span>
            Bi-Directional Resolution &amp; CI/CD Hooks
          </h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">

<div className="p-space-md bg-surface-container-low rounded-xl flex items-start justify-between gap-space-sm">
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Auto-Close on Production Fix</p>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Automatically mark Jira ticket as Resolved when crawler confirms fix for 48 consecutive hours.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>

<div className="p-space-md bg-surface-container-low rounded-xl flex items-start justify-between gap-space-sm">
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Generate Suggested PR Diff</p>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Create draft GitHub/GitLab PR with canonical tag fixes, meta descriptions, or schema patch syntax.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
</div>
</div>
</div>

<div className="p-space-lg pt-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">

<button className="w-full sm:w-auto px-space-md py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-secondary text-label-md font-label-md font-semibold shadow-sm transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">send</span>
          Send Test Webhook Ticket
        </button>

<div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
<button className="px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md font-semibold transition-colors">
            Cancel
          </button>
<button className="px-space-lg py-2 rounded-lg bg-primary-container hover:opacity-95 text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_12px_rgba(242,106,75,0.28)] transition-all flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">verified</span>
            Save &amp; Activate Pipeline Sync
          </button>
</div>
</div>
</div>
</div>
</div></main>
</div>

    </>
  );
}
