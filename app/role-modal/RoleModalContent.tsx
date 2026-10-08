import React from 'react';

export default function RoleModalContent() {
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
<main className="relative pt-16 w-full px-8 bg-surface"><div className="flex flex-col w-full relative">
<div className="w-full pointer-events-none select-none filter blur-[6px] opacity-40 transition-all duration-300">
<div className="flex items-center justify-between py-6">
<div className="flex flex-col gap-1">
<span className="font-label-xs text-label-xs text-secondary font-bold tracking-widest uppercase">Security &amp; Governance</span>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Team &amp; RBAC Permissions</h1>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-surface-container text-secondary font-label-md text-label-md rounded-lg">Export Directory</button>
<button className="px-4 py-2 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-md">+ Add Role</button>
</div>
</div>
<div className="grid grid-cols-4 gap-6 mb-8">
<div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col gap-2">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">Active Custom Roles</span>
<span className="font-metric-stat text-metric-stat text-on-surface">14</span>
<span className="font-label-xs text-label-xs text-tertiary">3 pending approval</span>
</div>
<div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col gap-2">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">Enrolled Members</span>
<span className="font-metric-stat text-metric-stat text-on-surface">182</span>
<span className="font-label-xs text-label-xs text-tertiary">Across 12 global squads</span>
</div>
<div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col gap-2">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">Hardware 2FA Compliance</span>
<span className="font-metric-stat text-metric-stat text-on-surface">99.4%</span>
<span className="font-label-xs text-label-xs text-tertiary">FIDO2 WebAuthn strict</span>
</div>
<div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col gap-2">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">Policy Mutations (30d)</span>
<span className="font-metric-stat text-metric-stat text-on-surface">43</span>
<span className="font-label-xs text-label-xs text-tertiary">All SOC2 signed</span>
</div>
</div>
<div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden mb-12">
<div className="px-6 py-4 bg-surface-container-low flex justify-between items-center">
<span className="font-title text-title text-on-surface">System &amp; Custom Role Registry</span>
<span className="font-label-xs text-label-xs text-secondary uppercase tracking-wider">Showing 8 of 14</span>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between p-4 bg-surface-container rounded-xl">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-secondary">admin_panel_settings</span>
<div>
<p className="font-title text-title text-on-surface">Staff Platform Engineer</p>
<p className="font-body-sm text-body-sm text-secondary">Root level telemetry and pipeline authoring</p>
</div>
</div>
<span className="px-3 py-1 bg-surface-container-highest rounded-full text-secondary font-label-xs text-label-xs font-semibold">24 Assigned</span>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container rounded-xl">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-secondary">terminal</span>
<div>
<p className="font-title text-title text-on-surface">Growth SEO Director</p>
<p className="font-body-sm text-body-sm text-secondary">Domain architecture, keyword indexing, organic revenue telemetry</p>
</div>
</div>
<span className="px-3 py-1 bg-surface-container-highest rounded-full text-secondary font-label-xs text-label-xs font-semibold">9 Assigned</span>
</div>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-on-surface/40 backdrop-blur-md overflow-y-auto">
<div className="relative w-full max-w-[860px] bg-surface-container-lowest rounded-2xl shadow-2xl my-auto overflow-hidden animate-in fade-in duration-200">
<div className="px-8 pt-8 pb-6 bg-surface-container-lowest flex items-start justify-between">
<div className="flex flex-col gap-2 max-w-xl">
<div className="flex items-center gap-2.5">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold tracking-wide uppercase">Enterprise Tier Custom Role</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Draft Policy ID: rbac-e941f</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Create Custom RBAC Role</h2>
<p className="font-body-sm text-body-sm text-secondary">Define granular capability tiers, edge deployment scopes, and audit access policies for specialized squads.</p>
</div>
<button aria-label="Close dialog" className="p-2 rounded-xl text-secondary hover:text-on-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[22px]">close</span>
</button>
</div>
<div className="px-8 py-2 max-h-[655px] overflow-y-auto space-y-7">
<div className="bg-surface-container-low p-6 rounded-2xl space-y-4">
<div className="flex items-center justify-between pb-1">
<span className="font-title text-title text-on-surface">Role Identity &amp; Inheritance</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">Step 01 / 03</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Role Title</label>
<input className="w-full px-3.5 py-2.5 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all shadow-sm" type="text" value="Edge Site Reliability Engineer (Edge SRE)"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Squad / Cluster Scope</label>
<div className="relative">
<select className="w-full px-3.5 py-2.5 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all shadow-sm pr-9 cursor-pointer">
<option defaultValue="">Edge &amp; Cloudflare Workers</option>
<option>Core Architecture &amp; Platform</option>
<option>Autonomous Organic Growth</option>
<option>Security &amp; Data Pipeline</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 text-secondary pointer-events-none text-base">expand_more</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Inherit Permissions From</label>
<div className="relative">
<select className="w-full px-3.5 py-2.5 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all shadow-sm pr-9 cursor-pointer">
<option defaultValue="">Staff Engineer (Base Baseline)</option>
<option>Read-Only Auditor</option>
<option>SEO Growth Director</option>
<option>Zero Baseline (Blank Policy)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 text-secondary pointer-events-none text-base">unfold_more</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Operational Context</label>
<input className="w-full px-3.5 py-2.5 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all shadow-sm" type="text" value="Direct access to edge staging gateways &amp; simulated bot engines"/>
</div>
</div>
<div className="flex flex-col gap-1.5 pt-1">
<label className="font-label-md text-label-md text-on-surface font-semibold">Role Functional Description</label>
<textarea className="w-full px-3.5 py-2.5 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all shadow-sm resize-none" rows={2}>Authorized to deploy zero-code CDN hotfixes, modify robots.txt overrides, and run high-concurrency bot simulations.</textarea>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-title text-title text-on-surface">Granular Permission Matrix</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">12 Selected</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">Step 02 / 03</span>
</div>
<div className="space-y-3">
<div className="p-5 bg-surface-container-lowest rounded-2xl shadow-sm space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[18px]">dns</span>
</div>
<div>
<h3 className="font-title text-title text-on-surface">Edge SEO &amp; CDN Hotfixes</h3>
<p className="font-body-sm text-body-sm text-secondary">Cloudflare, Fastly, and Akamai runtime rule execution</p>
</div>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold uppercase">Critical Scope</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="mt-0.5 h-4 w-4 rounded accent-secondary-container text-on-secondary-fixed" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Read Edge Rules</span>
<span className="font-body-sm text-body-sm text-secondary">Inspect live headers and proxy rewrite logic</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="mt-0.5 h-4 w-4 rounded accent-secondary-container" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Simulate in Sandbox</span>
<span className="font-body-sm text-body-sm text-secondary">Run V8 edge isolate test invocations</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="mt-0.5 h-4 w-4 rounded accent-secondary-container" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Deploy Canary to Staging</span>
<span className="font-body-sm text-body-sm text-secondary">Instant routing to staging traffic split (5%)</span>
</div>
</label>
<div className="flex items-start justify-between p-3 rounded-xl bg-primary-fixed/20">
<div className="flex flex-col gap-1 pr-2">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-primary font-bold">Deploy to Production Live</span>
<span className="material-symbols-outlined text-primary text-sm">shield</span>
</div>
<span className="font-label-xs text-label-xs text-primary font-semibold">Requires 2FA &amp; Multi-party Approval</span>
</div>
<label className="relative inline-flex items-center cursor-pointer mt-1">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</div>
</div>
<div className="p-5 bg-surface-container-lowest rounded-2xl shadow-sm space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
</div>
<div>
<h3 className="font-title text-title text-on-surface">Crawl &amp; Bot Simulator</h3>
<p className="font-body-sm text-body-sm text-secondary">Rendering engines, concurrency caps, and robot indexing policies</p>
</div>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold uppercase">Standard Tier</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="mt-0.5 h-4 w-4 rounded accent-secondary-container" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Trigger Manual Crawl</span>
<span className="font-body-sm text-body-sm text-secondary">Run on-demand passes</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="mt-0.5 h-4 w-4 rounded accent-secondary-container" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Concurrency &amp; UA</span>
<span className="font-body-sm text-body-sm text-secondary">Simulate Googlebot / Bing</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="mt-0.5 h-4 w-4 rounded accent-secondary-container" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Robots.txt Directives</span>
<span className="font-body-sm text-body-sm text-secondary">Override Disallow rules</span>
</div>
</label>
</div>
</div>
<div className="p-5 bg-surface-container-lowest rounded-2xl shadow-sm space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">psychology</span>
</div>
<div>
<h3 className="font-title text-title text-on-surface">AI SEO Assistant &amp; LLM Token Quotas</h3>
<p className="font-body-sm text-body-sm text-secondary">Autonomous schema generators and vector indexing copilot</p>
</div>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold uppercase">LLM Engine</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="mt-0.5 h-4 w-4 rounded accent-secondary-container" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Query Autonomous Copilot</span>
<span className="font-body-sm text-body-sm text-secondary">Conversational analysis on internal rank logs</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="mt-0.5 h-4 w-4 rounded accent-secondary-container" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Automated Code Diffs &amp; PRs</span>
<span className="font-body-sm text-body-sm text-secondary">Auto-push schema changes to GitHub repos</span>
</div>
</label>
</div>
<div className="p-4 bg-surface-container-low rounded-xl flex items-center justify-between gap-4">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Monthly Token Cap Allowance</span>
<span className="font-body-sm text-body-sm text-secondary">Maximum model token consumption limit assigned to this role</span>
</div>
<div className="w-64">
<input className="w-full px-3 py-2 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface text-right font-semibold focus:outline-none focus:ring-2 focus:ring-secondary-container shadow-sm" type="text" value="500,000 Tokens / month"/>
</div>
</div>
</div>
<div className="p-5 bg-surface-container-lowest rounded-2xl shadow-sm space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
</div>
<div>
<h3 className="font-title text-title text-on-surface">Financials &amp; Governance</h3>
<p className="font-body-sm text-body-sm text-secondary">Billing accounts, IdP sync, and non-repudiation audit trails</p>
</div>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold uppercase">Governance</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
<input className="mt-0.5 h-4 w-4 rounded accent-secondary-container" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">View Invoices &amp; Billing</span>
<span className="font-body-sm text-body-sm text-secondary">Plan changes &amp; add-ons</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
<input className="mt-0.5 h-4 w-4 rounded accent-secondary-container" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Manage SAML / SCIM</span>
<span className="font-body-sm text-body-sm text-secondary">Okta &amp; Entra ID mapping</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="mt-0.5 h-4 w-4 rounded accent-secondary-container" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Immutable Audit Logs</span>
<span className="font-body-sm text-body-sm text-secondary">Read SOC2 SIEM events</span>
</div>
</label>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-2xl space-y-4">
<div className="flex items-center justify-between pb-1">
<span className="font-title text-title text-on-surface">Security Safeguards &amp; IP Restrictions</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">Step 03 / 03</span>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container text-[24px]">key</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Enforce Hardware FIDO2 WebAuthn for any Edge Rule mutation</span>
<span className="font-body-sm text-body-sm text-secondary">Requires physical YubiKey or TouchID prompt before edge edge worker pushes</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
<div className="flex flex-col gap-1.5 pt-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-semibold">IP CIDR Whitelist (Optional)</label>
<span className="font-label-xs text-label-xs text-secondary">Zero-trust network binding</span>
</div>
<input className="w-full px-3.5 py-2.5 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all shadow-sm font-mono text-[13px]" type="text" value="10.240.0.0/16, 192.168.1.0/24"/>
</div>
</div>
</div>
<div className="px-8 py-5 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="font-label-xs text-label-xs">Audit Trail: Role creation will be logged to SOC2 SIEM endpoint</span>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto justify-end">
<button className="px-4 py-2 text-secondary hover:text-on-surface font-label-md text-label-md font-semibold transition-colors">
            Cancel
          </button>
<button className="px-4 py-2 bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md font-semibold rounded-lg transition-colors">
            Test Role Assignment
          </button>
<button className="px-5 py-2 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity">
            Create &amp; Publish Role
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
