"use client";
import React from 'react';

export default function WebhooksContent() {
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
<main className="relative pt-16 w-full px-8 bg-surface"><div className="flex flex-col w-full pb-16">

<div className="flex flex-col gap-6 pt-6 pb-8">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">INTEGRATIONS &amp; ALERTS</span>
<span className="text-secondary/40 font-label-xs">/</span>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">API &amp; WEBHOOK STUDIO</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">v2.4 Core Engine</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Developer API &amp; Webhook Dispatch Studio</h1>
<p className="font-body-md text-body-md text-secondary max-w-4xl">
          Build automated SEO workflows, ingest real-time SERP and crawler telemetry, manage production REST/GraphQL API tokens, and configure event-driven webhooks with millisecond precision dispatch.
        </p>
</div>
<div className="flex items-center flex-wrap gap-2.5">
<a className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-low text-secondary hover:bg-surface-container font-label-md text-label-md font-semibold transition-colors shadow-sm" href="#playground">
<span className="material-symbols-outlined text-[18px]">terminal</span>
<span>Interactive API Docs</span>
</a>
<button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 font-label-md text-label-md font-semibold transition-colors shadow-sm" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">webhook</span>
<span>+ Create Webhook Endpoint</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">key</span>
<span>+ Generate New API Key</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between relative overflow-hidden group">
<div className="flex items-start justify-between">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">API Monthly Quota</span>
<span className="p-2 rounded-xl bg-surface-container-low text-secondary">
<span className="material-symbols-outlined text-[20px]">data_usage</span>
</span>
</div>
<div className="mt-4 mb-3">
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat text-on-surface">2.10M</span>
<span className="font-body-sm text-body-sm text-secondary font-medium">/ 5.00M calls</span>
</div>
<p className="font-label-xs text-label-xs text-secondary mt-1">42% consumed • 14 days remaining in cycle</p>
</div>
<div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{ /* TODO: convert inline style width: 42%; */ }}></div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Active Webhooks</span>
<span className="p-2 rounded-xl bg-surface-container-low text-secondary">
<span className="material-symbols-outlined text-[20px]">hub</span>
</span>
</div>
<div className="mt-4 mb-2">
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat text-on-surface">18</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">Listeners</span>
</div>
<p className="font-label-xs text-label-xs text-secondary mt-1 truncate">Slack #seo-war-room, Datadog APM, Jira, Custom</p>
</div>
<div className="flex items-center gap-1.5 pt-2">
<span className="inline-block w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-xs text-label-xs text-secondary">Broadcasting on 7 cluster regions</span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Webhook Delivery Rate</span>
<span className="p-2 rounded-xl bg-surface-container-low text-secondary">
<span className="material-symbols-outlined text-[20px]">verified</span>
</span>
</div>
<div className="mt-4 mb-2">
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat text-on-surface">99.96%</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold text-secondary">Delivered</span>
</div>
<p className="font-label-xs text-label-xs text-secondary mt-1">Median latency: 24ms • 0 failing retries</p>
</div>
<div className="flex items-center justify-between text-secondary pt-2">
<span className="font-label-xs text-label-xs">p99: 41ms</span>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="font-label-xs text-label-xs text-secondary">Zero Backlog</span>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Active Prod Tokens</span>
<span className="p-2 rounded-xl bg-surface-container-low text-secondary">
<span className="material-symbols-outlined text-[20px]">vpn_key</span>
</span>
</div>
<div className="mt-4 mb-2">
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat text-on-surface">4 Keys</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Enterprise</span>
</div>
<p className="font-label-xs text-label-xs text-secondary mt-1">2 Server-to-Server • 1 CI/CD • 1 Read-Only</p>
</div>
<div className="flex items-center gap-1.5 pt-2">
<span className="material-symbols-outlined text-secondary text-sm">lock</span>
<span className="font-label-xs text-label-xs text-secondary">mTLS &amp; HMAC-SHA256 enforced</span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-xl">
<button className="px-4 py-2 rounded-lg font-label-md text-label-md font-semibold transition-all bg-secondary-container text-on-secondary-fixed shadow-sm" id="tab-btn-tokens" onClick={() => {}}>
        API Credentials &amp; Access Tokens
      </button>
<button className="px-4 py-2 rounded-lg font-label-md text-label-md text-secondary hover:text-on-surface transition-all" id="tab-btn-webhooks" onClick={() => {}}>
        Webhook Endpoints &amp; Subscriptions
      </button>
<button className="px-4 py-2 rounded-lg font-label-md text-label-md text-secondary hover:text-on-surface transition-all flex items-center gap-2" id="tab-btn-stream" onClick={() => {}}>
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span>Live Event Stream &amp; Inspector</span>
</button>
<button className="px-4 py-2 rounded-lg font-label-md text-label-md text-secondary hover:text-on-surface transition-all" id="tab-btn-playground" onClick={() => {}}>
        GraphQL &amp; REST Playground
      </button>
</div>
<div className="hidden xl:flex items-center gap-3">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Environment:</span>
<div className="flex items-center gap-1 px-3 py-1.5 bg-surface-container-lowest rounded-lg shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-md text-label-md font-bold text-on-surface">production-live (us-east)</span>
</div>
</div>
</div>

<div className="tab-panel flex flex-col gap-6" id="tab-content-tokens">
<div className="rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden">

<div className="p-space-lg bg-surface-container-lowest flex flex-wrap items-center justify-between gap-4">
<div>
<h2 className="font-title text-title text-on-surface">Production API Keys</h2>
<p className="font-body-sm text-body-sm text-secondary">Authorized credentials to interact with SEOTRIKS Rank, Crawl, and Edge rule endpoints.</p>
</div>
<div className="flex items-center gap-2">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-secondary text-sm">filter_list</span>
<input className="pl-8 pr-3 py-1.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Filter tokens..." type="text"/>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-secondary font-label-md text-label-md hover:text-on-surface transition-colors">
            Rotate All Keys
          </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-body-md">
<thead>
<tr className="bg-surface-container-low">
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Key Name &amp; Context</th>
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Token String (Masked)</th>
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Permissions / Scopes</th>
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Rate Limit</th>
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Created / Last Used</th>
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="text-on-surface">

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-secondary-container/40 flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[20px]">dns</span>
</div>
<div>
<span className="font-title text-title text-on-surface">Prod Server-to-Server Dispatch</span>
<span className="block font-label-xs text-label-xs text-secondary">Backend Orchestration Pipeline (AWS EKS)</span>
</div>
</div>
</td>
<td className="py-4 px-6 font-mono text-body-sm">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container-low text-secondary font-semibold" id="tok-1">strik_live_89f02c48419a••••••••</span>
<button className="p-1 text-secondary hover:text-on-surface" onClick={() => {}} title="Show token">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1 text-secondary hover:text-on-surface" onClick={() => {}} title="Copy to clipboard">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
</div>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1.5 max-w-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">telemetry:read</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">crawl:execute</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">edge_rules:deploy</span>
</div>
</td>
<td className="py-4 px-6">
<span className="font-label-md text-label-md font-semibold text-on-surface">1,000 req/min</span>
<span className="block font-label-xs text-label-xs text-secondary">Burst: 2,500</span>
</td>
<td className="py-4 px-6">
<span className="font-label-md text-label-md text-on-surface">Oct 14, 2024</span>
<span className="block font-label-xs text-label-xs text-primary-container font-semibold">2m ago</span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Rotate</button>
<button className="px-2.5 py-1 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-semibold">Revoke</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-secondary-container/40 flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[20px]">smart_toy</span>
</div>
<div>
<span className="font-title text-title text-on-surface">CI/CD GitHub Action Validator</span>
<span className="block font-label-xs text-label-xs text-secondary">Pre-deployment crawl &amp; meta validation</span>
</div>
</div>
</td>
<td className="py-4 px-6 font-mono text-body-sm">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container-low text-secondary font-semibold" id="tok-2">strik_live_33de81fa029b••••••••</span>
<button className="p-1 text-secondary hover:text-on-surface" onClick={() => {}} title="Show token">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1 text-secondary hover:text-on-surface" onClick={() => {}} title="Copy to clipboard">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
</div>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1.5 max-w-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">crawl:execute</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">audit:read</span>
</div>
</td>
<td className="py-4 px-6">
<span className="font-label-md text-label-md font-semibold text-on-surface">500 req/min</span>
<span className="block font-label-xs text-label-xs text-secondary">Burst: 1,000</span>
</td>
<td className="py-4 px-6">
<span className="font-label-md text-label-md text-on-surface">Nov 02, 2024</span>
<span className="block font-label-xs text-label-xs text-secondary">18m ago</span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Rotate</button>
<button className="px-2.5 py-1 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-semibold">Revoke</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-secondary-container/40 flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[20px]">query_stats</span>
</div>
<div>
<span className="font-title text-title text-on-surface">BI &amp; Executive Tableau Ingest</span>
<span className="block font-label-xs text-label-xs text-secondary">Read-only daily SERP trajectories &amp; market share</span>
</div>
</div>
</td>
<td className="py-4 px-6 font-mono text-body-sm">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container-low text-secondary font-semibold" id="tok-3">strik_live_77aa44ee8812••••••••</span>
<button className="p-1 text-secondary hover:text-on-surface" onClick={() => {}} title="Show token">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1 text-secondary hover:text-on-surface" onClick={() => {}} title="Copy to clipboard">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
</div>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1.5 max-w-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">serp:read</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">analytics:export</span>
</div>
</td>
<td className="py-4 px-6">
<span className="font-label-md text-label-md font-semibold text-on-surface">250 req/min</span>
<span className="block font-label-xs text-label-xs text-secondary">Burst: 500</span>
</td>
<td className="py-4 px-6">
<span className="font-label-md text-label-md text-on-surface">Dec 11, 2024</span>
<span className="block font-label-xs text-label-xs text-secondary">4 hours ago</span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Rotate</button>
<button className="px-2.5 py-1 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-semibold">Revoke</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-secondary-container/40 flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[20px]">memory</span>
</div>
<div>
<span className="font-title text-title text-on-surface">Edge Worker Middleware</span>
<span className="block font-label-xs text-label-xs text-secondary">Cloudflare Worker SEO Canonical Injector</span>
</div>
</div>
</td>
<td className="py-4 px-6 font-mono text-body-sm">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container-low text-secondary font-semibold" id="tok-4">strik_live_10fe992c7a40••••••••</span>
<button className="p-1 text-secondary hover:text-on-surface" onClick={() => {}} title="Show token">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1 text-secondary hover:text-on-surface" onClick={() => {}} title="Copy to clipboard">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
</div>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1.5 max-w-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">edge_rules:deploy</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">cache:purge</span>
</div>
</td>
<td className="py-4 px-6">
<span className="font-label-md text-label-md font-semibold text-on-surface">1,500 req/min</span>
<span className="block font-label-xs text-label-xs text-secondary">Burst: 3,000</span>
</td>
<td className="py-4 px-6">
<span className="font-label-md text-label-md text-on-surface">Jan 04, 2025</span>
<span className="block font-label-xs text-label-xs text-primary-container font-semibold">Just now</span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Rotate</button>
<button className="px-2.5 py-1 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-semibold">Revoke</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-surface-container-low flex flex-wrap items-center justify-between text-secondary">
<span className="font-label-xs text-label-xs">Showing 4 of 4 active enterprise keys • All communications authenticated over TLS 1.3</span>
<button className="font-label-md text-label-md font-semibold text-secondary hover:text-on-surface">Audit Access History →</button>
</div>
</div>
</div>

<div className="tab-panel hidden flex flex-col gap-6" id="tab-content-webhooks">
<div className="rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden">
<div className="p-space-lg flex flex-wrap items-center justify-between gap-4">
<div>
<h2 className="font-title text-title text-on-surface">Registered Webhook Destinations</h2>
<p className="font-body-sm text-body-sm text-secondary">Signed payloads delivered immediately upon detection of critical SEO events.</p>
</div>
<button className="px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold" onClick={() => {}}>
          + Add Endpoint
        </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-body-md">
<thead>
<tr className="bg-surface-container-low">
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Destination URL &amp; Receiver</th>
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Subscribed Events</th>
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Signing Secret</th>
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Status &amp; Response</th>
<th className="py-3 px-6 font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="text-on-surface">

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs">
                    POST
                  </div>
<div>
<span className="font-mono text-body-sm font-semibold text-on-surface">https://api.stripe.com/webhooks/seotriks-telemetry</span>
<span className="block font-label-xs text-label-xs text-secondary">Production Ingestion Gateway • Primary Listener</span>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1 max-w-sm">
<span className="px-2 py-0.5 rounded bg-surface-container font-mono text-label-xs text-label-xs text-secondary">serp.position.drop</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono text-label-xs text-label-xs text-secondary">crawl.anomaly.p0</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono text-label-xs text-label-xs text-secondary">indexing.spike</span>
</div>
</td>
<td className="py-4 px-6 font-mono text-label-xs text-label-xs text-secondary">
                whsec_994821a37c98••••••••
              </td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">200 OK</span>
<span className="font-label-xs text-label-xs text-secondary">(24ms)</span>
</div>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 rounded bg-surface-container text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold">Test Ping</button>
<button className="px-2.5 py-1 rounded bg-surface-container text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold">Logs</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs">
                    POST
                  </div>
<div>
<span className="font-mono text-body-sm font-semibold text-on-surface">https://hooks.slack.com/services/T00/B00/X891104</span>
<span className="block font-label-xs text-label-xs text-secondary">Slack Notification Channel: #seo-war-room</span>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1 max-w-sm">
<span className="px-2 py-0.5 rounded bg-surface-container font-mono text-label-xs text-label-xs text-secondary">cwv.degraded</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono text-label-xs text-label-xs text-secondary">crawl.blocked.robotstxt</span>
</div>
</td>
<td className="py-4 px-6 font-mono text-label-xs text-label-xs text-secondary">
                whsec_410294fc2190••••••••
              </td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">200 OK</span>
<span className="font-label-xs text-label-xs text-secondary">(62ms)</span>
</div>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 rounded bg-surface-container text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold">Test Ping</button>
<button className="px-2.5 py-1 rounded bg-surface-container text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold">Logs</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs">
                    POST
                  </div>
<div>
<span className="font-mono text-body-sm font-semibold text-on-surface">https://http-intake.logs.datadoghq.com/api/v2/logs</span>
<span className="block font-label-xs text-label-xs text-secondary">Datadog APM &amp; Synthetic Observer Pipeline</span>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1 max-w-sm">
<span className="px-2 py-0.5 rounded bg-surface-container font-mono text-label-xs text-label-xs text-secondary">serp.*</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono text-label-xs text-label-xs text-secondary">crawl.*</span>
</div>
</td>
<td className="py-4 px-6 font-mono text-label-xs text-label-xs text-secondary">
                whsec_dd83901ba672••••••••
              </td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">200 OK</span>
<span className="font-label-xs text-label-xs text-secondary">(12ms)</span>
</div>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1 rounded bg-surface-container text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold">Test Ping</button>
<button className="px-2.5 py-1 rounded bg-surface-container text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold">Logs</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="tab-panel flex flex-col gap-6" id="tab-content-stream">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-5 rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden flex flex-col">
<div className="p-4 bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-title text-title text-on-surface">Live Event Stream</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">Auto-Scroll: ON</span>
<button className="p-1 rounded bg-surface-container text-secondary hover:text-on-surface">
<span className="material-symbols-outlined text-[16px]">pause</span>
</button>
</div>
</div>
<div className="p-3 flex flex-col gap-2 overflow-y-auto max-h-[580px]">

<div className="event-item cursor-pointer p-3.5 rounded-xl bg-secondary-container/30 transition-all flex flex-col gap-1.5" onClick={() => {}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-mono text-label-xs text-label-xs font-bold text-on-surface">evt_84920</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">CRITICAL</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">14s ago</span>
</div>
<div className="font-mono text-label-md text-label-md text-on-surface font-semibold">
              serp.position.drop
            </div>
<div className="flex items-center justify-between text-secondary">
<span className="font-label-xs text-label-xs truncate max-w-[220px]">stripe.com/billing (pos #1 → #4)</span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">200 OK • 18ms</span>
</div>
</div>

<div className="event-item cursor-pointer p-3.5 rounded-xl hover:bg-surface-container-low transition-all flex flex-col gap-1.5" onClick={() => {}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-mono text-label-xs text-label-xs font-bold text-on-surface">evt_84919</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">WARNING</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">1m 12s ago</span>
</div>
<div className="font-mono text-label-md text-label-md text-on-surface font-semibold">
              crawl.blocked.robotstxt
            </div>
<div className="flex items-center justify-between text-secondary">
<span className="font-label-xs text-label-xs truncate max-w-[220px]">Disallow: /docs/v1/internal/*</span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">200 OK • 24ms</span>
</div>
</div>

<div className="event-item cursor-pointer p-3.5 rounded-xl hover:bg-surface-container-low transition-all flex flex-col gap-1.5" onClick={() => {}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-mono text-label-xs text-label-xs font-bold text-on-surface">evt_84918</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">INFO</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">3m 40s ago</span>
</div>
<div className="font-mono text-label-md text-label-md text-on-surface font-semibold">
              backlink.discovered.high_da
            </div>
<div className="flex items-center justify-between text-secondary">
<span className="font-label-xs text-label-xs truncate max-w-[220px]">techcrunch.com/article • DA 92</span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">200 OK • 31ms</span>
</div>
</div>

<div className="event-item cursor-pointer p-3.5 rounded-xl hover:bg-surface-container-low transition-all flex flex-col gap-1.5" onClick={() => {}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-mono text-label-xs text-label-xs font-bold text-on-surface">evt_84917</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">INFO</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">5m 01s ago</span>
</div>
<div className="font-mono text-label-md text-label-md text-on-surface font-semibold">
              cwv.metric.improved
            </div>
<div className="flex items-center justify-between text-secondary">
<span className="font-label-xs text-label-xs truncate max-w-[220px]">stripe.com/checkout • LCP 1.1s</span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">200 OK • 19ms</span>
</div>
</div>

<div className="event-item cursor-pointer p-3.5 rounded-xl hover:bg-surface-container-low transition-all flex flex-col gap-1.5" onClick={() => {}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-mono text-label-xs text-label-xs font-bold text-on-surface">evt_84916</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">CRITICAL</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">8m 19s ago</span>
</div>
<div className="font-mono text-label-md text-label-md text-on-surface font-semibold">
              indexing.exclusion.spike
            </div>
<div className="flex items-center justify-between text-secondary">
<span className="font-label-xs text-label-xs truncate max-w-[220px]">GSC: 142 URLs tagged 'noindex'</span>
<span className="font-label-xs text-label-xs font-semibold text-secondary">200 OK • 44ms</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 rounded-2xl bg-[#0f172a] text-slate-100 shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden flex flex-col">

<div className="px-5 py-3.5 bg-[#1e293b] flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-3">
<span className="font-mono text-label-xs text-label-xs text-slate-400">Payload Inspector:</span>
<span className="font-mono font-bold text-label-md text-label-md text-emerald-400" id="inspector-event-id">evt_84920</span>
<span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-label-xs text-label-xs font-bold">HTTP 200 OK (18ms)</span>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 font-label-xs text-label-xs font-semibold transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[14px]">content_copy</span>
<span id="copy-btn-text">Copy JSON</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-xs text-label-xs font-semibold hover:opacity-95 transition-opacity" onClick={() => {}}>
<span className="material-symbols-outlined text-[14px]">send</span>
<span>Re-send Webhook</span>
</button>
</div>
</div>

<div className="px-5 py-2.5 bg-[#131d33] flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono">
<div className="flex items-center gap-4">
<span>Destination: <strong className="text-slate-200">https://api.stripe.com/webhooks/seotriks-telemetry</strong></span>
<span>Attempts: <strong className="text-emerald-400">1 of 3</strong></span>
</div>
<span className="text-slate-500">Signature: sha256=9b9d31...881a</span>
</div>

<div className="p-5 font-mono text-body-sm text-body-sm overflow-x-auto leading-relaxed bg-[#0f172a]">
<pre className="font-mono text-xs leading-5 text-surface-container-lowest overflow-x-auto"><code>{`{
  "id": "evt_84920",
  "object": "event",
  "api_version": "2025-01-15",
  "created": 1736938924,
  "type": "serp.position.drop",
  "data": {
    "domain": "stripe.com",
    "target_url": "https://stripe.com/billing",
    "query": "recurring billing platform",
    "search_engine": "google_desktop_us",
    "previous_position": 1,
    "current_position": 4,
    "delta": -3,
    "competitor_displaced_by": {
      "domain": "chargebee.com",
      "position": 1
    },
    "serp_features": [
      "featured_snippet",
      "people_also_ask"
    ]
  },
  "dispatch_metadata": {
    "latency_ms": 18,
    "sender_ip": "34.118.230.12",
    "signature_hmac": "whsec_994821a37c9811..."
  }
}`}</code></pre>
</div>

<div className="hidden px-5 py-2.5 bg-emerald-950/80 text-emerald-300 font-mono text-label-xs flex items-center justify-between" id="simulation-toast">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Payload successfully dispatched to test endpoint (HTTP 200 OK - 21ms)</span>
</span>
<span className="text-emerald-400/60">ID: resend_00839a</span>
</div>
</div>
</div>
</div>

<div className="tab-panel hidden flex flex-col gap-6" id="tab-content-playground">
<div className="rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] p-6">
<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
<div>
<h2 className="font-title text-title text-on-surface">Interactive Query Console</h2>
<p className="font-body-sm text-body-sm text-secondary">Execute authenticated queries against production read replicas using live GraphQL or REST schemas.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-semibold">GraphQL Schema</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-secondary font-label-md text-label-md hover:text-on-surface transition-colors">OpenAPI 3.1 Spec</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="rounded-xl bg-[#0f172a] p-4 text-slate-100 flex flex-col justify-between">
<div className="flex items-center justify-between pb-3 border-b border-slate-800">
<div className="flex items-center gap-2">
<span className="font-mono text-label-xs font-bold text-pink-400">QUERY</span>
<span className="font-mono text-label-xs text-slate-400">seotriks.graphql/v2</span>
</div>
<button className="flex items-center gap-1 px-3 py-1 rounded bg-primary-container text-on-primary font-label-xs font-semibold hover:opacity-95">
<span className="material-symbols-outlined text-[14px]">play_arrow</span>
<span>Execute</span>
</button>
</div>
<div className="pt-3 font-mono text-body-sm text-slate-300 leading-relaxed overflow-x-auto">
<pre className="font-mono text-xs leading-5 text-surface-container-lowest overflow-x-auto"><code>{`query FetchKeywordVisibility(\$domain: String!) {
  targetDomain(name: \$domain) {
    visibilityIndex
    crawlHealthScore
    keywordClusters(limit: 5) {
      clusterTag
      aggregateTrafficShare
      serpPositions(filter: { position_lte: 10 }) {
        keyword
        currentRank
        historicalDelta30d
      }
    }
  }
}`}</code></pre>
</div>
<div className="pt-3 border-t border-slate-800 text-xs font-mono text-slate-400 flex justify-between">
<span>Variables: {"{ \"domain\": \"stripe.com\" }" }</span>
<span>Auth: Bearer strik_live_89f...</span>
</div>
</div>

<div className="rounded-xl bg-[#0f172a] p-4 text-slate-100 flex flex-col justify-between">
<div className="flex items-center justify-between pb-3 border-b border-slate-800">
<div className="flex items-center gap-2">
<span className="font-mono text-label-xs font-bold text-emerald-400">RESPONSE</span>
<span className="font-mono text-label-xs text-slate-400">200 OK • 41ms • 1.2 KB</span>
</div>
<span className="material-symbols-outlined text-slate-400 text-sm cursor-pointer hover:text-white">content_copy</span>
</div>
<div className="pt-3 font-mono text-body-sm text-slate-300 leading-relaxed overflow-x-auto">
<pre className="font-mono text-xs leading-5 text-surface-container-lowest overflow-x-auto"><code>{`{
  "data": {
    "targetDomain": {
      "visibilityIndex": 94.8,
      "crawlHealthScore": 99.2,
      "keywordClusters": [
        {
          "clusterTag": "Developer Billing",
          "aggregateTrafficShare": 0.41,
          "serpPositions": [
            { "keyword": "recurring billing api", "currentRank": 1, "historicalDelta30d": 0 },
            { "keyword": "subscription checkout engine", "currentRank": 2, "historicalDelta30d": 1 }
          ]
        }
      ]
    }
  }
}`}</code></pre>
</div>
<div className="pt-3 border-t border-slate-800 text-xs font-mono text-slate-400 flex justify-between">
<span>Cache: HIT (Cloudflare Edge)</span>
<span>Engine: Apollo v4.2</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" id="new-key-modal">
<div className="w-full max-w-lg rounded-2xl bg-surface-container-lowest p-6 shadow-2xl flex flex-col gap-5">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Generate New API Key</h3>
<button className="p-1 rounded-lg text-secondary hover:text-on-surface" onClick={() => {}}>
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex flex-col gap-4">
<div>
<label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">Key Name / Identifier</label>
<input className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="e.g. NextJS Vercel Build Hook" type="text"/>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">Select Permission Scopes</label>
<div className="grid grid-cols-2 gap-2 text-secondary font-label-md text-label-md">
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<input defaultChecked className="rounded text-secondary" type="checkbox"/>
<span>serp:read</span>
</label>
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<input defaultChecked className="rounded text-secondary" type="checkbox"/>
<span>crawl:execute</span>
</label>
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<input className="rounded text-secondary" type="checkbox"/>
<span>edge_rules:deploy</span>
</label>
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<input className="rounded text-secondary" type="checkbox"/>
<span>telemetry:stream</span>
</label>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">Rate Limit Throttle</label>
<select className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none">
<option>1,000 requests/minute (Standard Tier)</option>
<option>2,500 requests/minute (High Throughput)</option>
<option>500 requests/minute (Subdued Rate)</option>
</select>
</div>
</div>
<div className="flex items-center justify-end gap-3 pt-3">
<button className="px-4 py-2 rounded-lg bg-surface-container text-secondary font-label-md text-label-md font-semibold" onClick={() => {}}>
          Cancel
        </button>
<button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold" onClick={() => {}}>
          Generate Secret Token
        </button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" id="new-webhook-modal">
<div className="w-full max-w-lg rounded-2xl bg-surface-container-lowest p-6 shadow-2xl flex flex-col gap-5">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Create Webhook Endpoint</h3>
<button className="p-1 rounded-lg text-secondary hover:text-on-surface" onClick={() => {}}>
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex flex-col gap-4">
<div>
<label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">Endpoint Payload URL</label>
<input className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none" placeholder="https://api.stripe.com/webhooks/..." type="text"/>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">Events to Dispatch</label>
<div className="flex flex-col gap-1.5 text-secondary font-label-md text-label-md">
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<input defaultChecked className="rounded text-secondary" type="checkbox"/>
<span>serp.position.drop (Sudden ranking drops &gt; 3 positions)</span>
</label>
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<input defaultChecked className="rounded text-secondary" type="checkbox"/>
<span>crawl.anomaly.p0 (5xx spikes, DNS errors, timeout bursts)</span>
</label>
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<input className="rounded text-secondary" type="checkbox"/>
<span>indexing.exclusion.spike (GSC coverage failures)</span>
</label>
</div>
</div>
</div>
<div className="flex items-center justify-end gap-3 pt-3">
<button className="px-4 py-2 rounded-lg bg-surface-container text-secondary font-label-md text-label-md font-semibold" onClick={() => {}}>
          Cancel
        </button>
<button className="px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold" onClick={() => {}}>
          Save &amp; Verify Handshake
        </button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
