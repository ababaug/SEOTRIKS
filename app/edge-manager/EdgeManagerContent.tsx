"use client";
import React from 'react';

export default function EdgeManagerContent() {
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
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="crawl-settings-bot-simulator" href="#">Crawl Settings &amp; Bot Simulator</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="keyword-research" href="#">Keyword Research</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="rank-tracking" href="#">Rank Tracking</a>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">REPORTS &amp; ANALYTICS</span>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="reports" href="#">Reports</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="report-builder" href="#">Report Builder</a>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">INTEGRATIONS &amp; ALERTS</span>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="integrations" href="#">Integrations</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="edge-rules-middleware-manager" href="#">Edge Rules &amp; Middleware Manager</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="api-webhook-studio" href="#">API &amp; Webhook Studio</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="notification-center" href="#">Notification Center</a>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">SETTINGS &amp; BILLING</span>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="billing" href="#">Billing &amp; Subscription</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="organization-settings" href="#">Organization Settings</a>
<a className="flex items-center px-space-sm py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="team-rbac-permissions" href="#">Team &amp; RBAC Permissions</a>
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
<main className="relative pt-16 w-full px-8 bg-surface"><div className="flex flex-col w-full">
<div className="relative py-space-xl overflow-hidden">
<div className="flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs uppercase tracking-wider text-secondary font-bold">INTEGRATIONS &amp; ALERTS</span>
<span className="text-secondary/40 font-label-xs text-label-xs">/</span>
<span className="font-label-xs text-label-xs uppercase tracking-wider text-primary font-bold">EDGE RULES &amp; MIDDLEWARE</span>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
              Live Sync: Cloudflare &amp; Fastly
            </span>
</div>
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
            Edge SEO Rules &amp; CDN Middleware Manager
          </h1>
<p className="font-body-md text-body-md text-secondary max-w-4xl">
            Deploy instant, zero-code SEO hotfixes at the CDN edge (Cloudflare Workers, Fastly VCL, Akamai EdgeWorkers) without waiting for engineering sprint cycles.
          </p>
</div>
<div className="flex items-center gap-space-sm flex-wrap self-start md:self-auto">
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold shadow-sm transition-all">
<span className="material-symbols-outlined text-[18px] text-secondary">history</span>
<span>Edge Rollback History</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-secondary text-on-secondary hover:bg-secondary/90 font-label-md text-label-md font-semibold shadow-sm transition-all">
<span className="material-symbols-outlined text-[18px]">publish</span>
<span>Deploy Staged Rules to CDN</span>
<span className="w-5 h-5 rounded-full bg-surface-container-lowest text-on-surface font-label-xs text-label-xs flex items-center justify-center font-bold">2</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-md hover:bg-primary transition-all">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>+ Create New Edge Rule</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
<div className="relative bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between mb-space-sm">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Active Edge Rules</span>
<span className="font-metric-stat text-metric-stat text-on-surface font-bold tracking-tight mt-1">18 Live</span>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[22px]">alt_route</span>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between font-label-xs text-label-xs">
<span className="text-secondary">Cloudflare Workers: <strong className="text-on-surface">12</strong></span>
<span className="text-secondary">Compute@Edge: <strong className="text-on-surface">6</strong></span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex">
<div className="h-full bg-primary-container rounded-full" style={{ /* width: 66.6%; */ }}></div>
<div className="h-full bg-tertiary-container rounded-full" style={{ /* width: 33.4%; */ }}></div>
</div>
</div>
<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary-container/20 rounded-full blur-xl pointer-events-none"></div>
</div>
<div className="relative bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between mb-space-sm">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Edge Interceptions (24h)</span>
<span className="font-metric-stat text-metric-stat text-on-surface font-bold tracking-tight mt-1">4.20M</span>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">monitoring</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">speed</span>
<span>1.2ms Avg Overhead</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">+14.2% vs yesterday</span>
</div>
<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-tertiary-fixed/20 rounded-full blur-xl pointer-events-none"></div>
</div>
<div className="relative bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between mb-space-sm">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Staged Drafts</span>
<span className="font-metric-stat text-metric-stat text-primary-container font-bold tracking-tight mt-1">2 Pending</span>
</div>
<div className="w-10 h-10 rounded-xl bg-error-container/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">pending_actions</span>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-xs text-label-xs text-on-surface font-medium truncate">1. Hreflang repair (/de/payments)</span>
<span className="font-label-xs text-label-xs text-secondary truncate">2. Canonical fix on /checkout/v3</span>
</div>
<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-fixed/30 rounded-full blur-xl pointer-events-none"></div>
</div>
<div className="relative bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between mb-space-sm">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Edge Uptime &amp; Fallback</span>
<span className="font-metric-stat text-metric-stat text-on-surface font-bold tracking-tight mt-1">99.998%</span>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/60 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">security</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary">Origin Bypass: <strong className="text-on-surface">0.002%</strong></span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">Zero Failures</span>
</div>
<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary-fixed-dim/20 rounded-full blur-xl pointer-events-none"></div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-label-md text-label-md font-semibold text-on-surface mr-1">Platform:</span>
<button className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow-sm">All Platforms (18)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-label-md font-medium transition-colors">Cloudflare (12)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-label-md font-medium transition-colors">Fastly (6)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-label-md font-medium transition-colors">Akamai (0)</button>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<div className="relative flex items-center min-w-[240px]">
<span className="material-symbols-outlined absolute left-3 text-secondary text-base">search</span>
<input className="w-full pl-9 pr-3 py-1.5 bg-surface-container rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Filter rule identifier, URI, trigger..." type="text"/>
</div>
<select className="px-3 py-1.5 bg-surface-container rounded-lg font-label-md text-label-md text-on-surface focus:outline-none">
<option>All Rule Types</option>
<option>Redirect 301 / 302</option>
<option>Canonical Injection</option>
<option>Schema JSON-LD</option>
<option>Robots / Meta Headers</option>
<option>Bot Dynamic Rendering</option>
</select>
<select className="px-3 py-1.5 bg-surface-container rounded-lg font-label-md text-label-md text-on-surface focus:outline-none">
<option>Status: All</option>
<option>Active</option>
<option>Staged</option>
<option>Disabled</option>
</select>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-body-md">
<thead>
<tr className="bg-surface-container-low text-secondary uppercase font-label-xs text-label-xs tracking-wider">
<th className="p-space-md rounded-l-xl">Edge Rule &amp; Type</th>
<th className="p-space-md">Pattern / Ingress Trigger</th>
<th className="p-space-md">Edge Transformation</th>
<th className="p-space-md">Platform &amp; Target</th>
<th className="p-space-md">Telemetry (7d)</th>
<th className="p-space-md">Status</th>
<th className="p-space-md rounded-r-xl text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="p-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title text-title font-semibold text-on-surface">ERR-CRW-104 Robots.txt Scope</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">Header / Robots</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Custom X-Robots-Tag hotfix for staging leaks</span>
</div>
</td>
<td className="p-space-md font-mono text-body-sm text-on-surface">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">filter_alt</span>
<span>Path: /docs/*checkout*</span>
</div>
</td>
<td className="p-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">Strip Disallow Header</span>
<span className="font-label-xs text-label-xs text-secondary">Verified Googlebot Autonomous System Only</span>
</div>
</td>
<td className="p-space-md">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Cloudflare Worker</span>
</div>
</td>
<td className="p-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">184k hits</span>
<span className="font-label-xs text-label-xs text-secondary">0.9ms edge wall-time</span>
</div>
</td>
<td className="p-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Active
                  </span>
</td>
<td className="p-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors" title="Simulate Edge Request">
<span className="material-symbols-outlined text-[18px]">play_circle</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors" title="Edit Configuration">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors" title="Toggle On/Off">
<span className="material-symbols-outlined text-[18px]">toggle_on</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="p-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title text-title font-semibold text-on-surface">Canonical Normalization /v3</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-semibold">Canonical Injection</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Self-referential strip for session query strings</span>
</div>
</td>
<td className="p-space-md font-mono text-body-sm text-on-surface">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">filter_alt</span>
<span>URL matches: /checkout/v3/*</span>
</div>
</td>
<td className="p-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">Canonical Tag Rewrite</span>
<span className="font-label-xs text-label-xs text-secondary">Injected clean link element into &lt;head&gt;</span>
</div>
</td>
<td className="p-space-md">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Fastly Compute@Edge</span>
</div>
</td>
<td className="p-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">890k hits</span>
<span className="font-label-xs text-label-xs text-secondary">1.1ms edge wall-time</span>
</div>
</td>
<td className="p-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Active
                  </span>
</td>
<td className="p-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">play_circle</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">toggle_on</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="p-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title text-title font-semibold text-on-surface">FAQPage JSON-LD Dynamic Stream</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-semibold">Schema Injection</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Microdata injection directly via Cloudflare KV store</span>
</div>
</td>
<td className="p-space-md font-mono text-body-sm text-on-surface">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">filter_alt</span>
<span>Path: /docs/payments/*</span>
</div>
</td>
<td className="p-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">Inject JSON-LD</span>
<span className="font-label-xs text-label-xs text-secondary">Streamed in chunk before primary origin render</span>
</div>
</td>
<td className="p-space-md">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Cloudflare KV</span>
</div>
</td>
<td className="p-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">620k hits</span>
<span className="font-label-xs text-label-xs text-secondary">1.4ms edge wall-time</span>
</div>
</td>
<td className="p-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Active
                  </span>
</td>
<td className="p-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">play_circle</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">toggle_on</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="p-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title text-title font-semibold text-on-surface">301 Loop Breaker: /v2/atlas</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold">301 Redirect</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Terminal resolution bypassing origin redirection loop</span>
</div>
</td>
<td className="p-space-md font-mono text-body-sm text-on-surface">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">filter_alt</span>
<span>Path exact: /v2/atlas</span>
</div>
</td>
<td className="p-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">301 Moved Permanently</span>
<span className="font-label-xs text-label-xs text-secondary">Target: https://stripe.com/atlas</span>
</div>
</td>
<td className="p-space-md">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Cloudflare</span>
</div>
</td>
<td className="p-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">42k hits</span>
<span className="font-label-xs text-label-xs text-secondary">0.4ms edge wall-time</span>
</div>
</td>
<td className="p-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Active
                  </span>
</td>
<td className="p-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">play_circle</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">toggle_on</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container/50 transition-colors bg-primary-fixed/10">
<td className="p-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title text-title font-semibold text-on-surface">Bot Dynamic SSR Rendering</span>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-xs text-label-xs font-semibold">Pre-render SSR</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Middleware cache router for JS heavy React landing pages</span>
</div>
</td>
<td className="p-space-md font-mono text-body-sm text-on-surface">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
<span>UA: Googlebot, Bingbot</span>
</div>
</td>
<td className="p-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">Return Prerendered HTML</span>
<span className="font-label-xs text-label-xs text-secondary">Fetch from S3 Snapshot bucket (TTL: 6h)</span>
</div>
</td>
<td className="p-space-md">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Fastly VCL</span>
</div>
</td>
<td className="p-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">0 hits (Staged)</span>
<span className="font-label-xs text-label-xs text-secondary">Awaiting Canary Deploy</span>
</div>
</td>
<td className="p-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    Staged Draft
                  </span>
</td>
<td className="p-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="px-3 py-1 bg-secondary text-on-secondary hover:bg-secondary/90 rounded-lg font-label-xs text-label-xs font-bold shadow-sm transition-all">
                      Deploy Now
                    </button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
<div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[24px]">terminal</span>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Interactive Edge Rule Sandbox &amp; Simulator</h3>
<span className="font-label-xs text-label-xs text-secondary">Test a simulated incoming HTTP request through the edge middleware chain in real-time</span>
</div>
</div>
<button className="px-3 py-1.5 bg-secondary-container text-on-secondary-fixed rounded-lg font-label-md text-label-md font-semibold hover:bg-secondary hover:text-on-secondary transition-colors">
              Reset Headers
            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-secondary font-bold uppercase">HTTP Method &amp; Protocol</label>
<select className="p-2 bg-surface-container-lowest rounded-lg font-mono text-body-sm text-on-surface focus:outline-none">
<option>GET HTTP/2</option>
<option>HEAD HTTP/2</option>
<option>GET HTTP/3 (QUIC)</option>
</select>
</div>
<div className="md:col-span-2 flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-secondary font-bold uppercase">Target Ingress URI</label>
<div className="flex items-center">
<span className="bg-surface-container px-3 py-2 rounded-l-lg font-mono text-body-sm text-secondary">https://stripe.com</span>
<input className="w-full p-2 bg-surface-container-lowest rounded-r-lg font-mono text-body-sm text-on-surface focus:outline-none" type="text" value="/docs/checkout/v3/payments?session_id=usr_991823&amp;ref=affiliate"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-secondary font-bold uppercase">Simulated User-Agent</label>
<select className="p-2 bg-surface-container-low rounded-lg font-label-md text-label-md text-on-surface focus:outline-none">
<option>Googlebot/2.1 (+http://www.google.com/bot.html)</option>
<option>Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X)</option>
<option>Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/124.0.0.0</option>
<option>Bingbot/2.0</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-secondary font-bold uppercase">Client IP / AS Network</label>
<div className="flex items-center">
<input className="w-full p-2 bg-surface-container-low rounded-lg font-mono text-body-sm text-on-surface focus:outline-none" type="text" value="66.249.66.1 (Google LLC - AS15169)"/>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<button className="flex items-center gap-2 px-5 py-2.5 bg-primary-container text-on-primary rounded-xl font-label-md text-label-md font-bold hover:bg-primary transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">play_arrow</span>
<span>Execute Edge Simulation Chain</span>
</button>
<span className="font-label-xs text-label-xs text-secondary">Active Workers Evaluated: <strong>4 Rules</strong></span>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Edge Middleware Output &amp; Trace</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">200 OK (Edge Modified)</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg font-mono text-body-sm text-on-surface overflow-x-auto space-y-1">
<div className="text-secondary font-semibold">&gt; HTTP/2 200 OK</div>
<div><span className="text-primary font-bold">+ x-robots-tag:</span> index, follow, noarchive <span className="text-secondary text-label-xs font-sans">(Rule: ERR-CRW-104)</span></div>
<div><span className="text-primary font-bold">+ link:</span> &lt;https://stripe.com/checkout/v3/payments&gt;; rel="canonical" <span className="text-secondary text-label-xs font-sans">(Rule: Canonical Normalization)</span></div>
<div className="text-secondary">&gt; content-type: text/html; charset=UTF-8</div>
<div className="text-secondary">&gt; cf-ray: 88fa3910c8-IAD</div>
<div className="pt-2 text-on-surface font-semibold">// Injected In Head Tag:</div>
<div className="text-primary-container pl-4 truncate">&lt;script type="application/ld+json"&gt;{"@context":"https://schema.org","@type":"FAQPage",...}&lt;/script&gt;</div>
</div>
</div>
</div>
<div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Telemetry &amp; Canary Release</h3>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">Region: Global Edge</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
              Sub-millisecond execution latency distribution across 320 CDN Point-of-Presences (PoPs).
            </p>
</div>
<div className="flex flex-col gap-space-sm bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Latency Distribution (ms)</span>
<span className="font-label-xs text-label-xs text-on-surface font-bold">p99: 2.1ms | p50: 0.8ms</span>
</div>
<div className="h-28 w-full flex items-end gap-1.5 pt-4">
<div className="flex-1 bg-secondary-container rounded-t-sm h-[30%] hover:bg-secondary transition-all" title="0.2ms"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[50%] hover:bg-secondary transition-all" title="0.4ms"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[85%] hover:bg-secondary transition-all" title="0.6ms"></div>
<div className="flex-1 bg-primary-container rounded-t-sm h-[100%] hover:bg-primary transition-all" title="0.8ms (Peak p50)"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[75%] hover:bg-secondary transition-all" title="1.0ms"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[45%] hover:bg-secondary transition-all" title="1.2ms"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[30%] hover:bg-secondary transition-all" title="1.4ms"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[18%] hover:bg-secondary transition-all" title="1.6ms"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[10%] hover:bg-secondary transition-all" title="1.8ms"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[6%] hover:bg-secondary transition-all" title="2.0ms"></div>
<div className="flex-1 bg-surface-variant rounded-t-sm h-[4%] hover:bg-secondary transition-all" title="2.2ms"></div>
<div className="flex-1 bg-surface-variant rounded-t-sm h-[2%] hover:bg-secondary transition-all" title="2.4ms"></div>
</div>
<div className="flex justify-between font-label-xs text-label-xs text-secondary">
<span>0.1ms</span>
<span>1.0ms</span>
<span>2.5ms</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-medium">Memory Wall Limit</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">14.2 MB / 128 MB</span>
<span className="font-label-xs text-label-xs text-secondary">Optimal Footprint</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-medium">CPU Execution Ratio</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">0.04 ms</span>
<span className="font-label-xs text-label-xs text-secondary">Non-blocking async</span>
</div>
</div>
<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">shield_with_heart</span>
<span className="font-label-xs text-label-xs text-on-surface font-semibold">Automatic Zero-Origin Canary Failover</span>
</div>
<span className="font-label-xs text-label-xs text-primary font-bold">ARMED</span>
</div>
</div>
</div>
</div>
</div>
</div></main>
</div>

    </>
  );
}
