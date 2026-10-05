import React from 'react';

export default function PageDetailsContent() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="p-space-lg flex flex-col"><div className="flex items-center gap-space-sm mb-space-lg"><img alt="SEOTRIKS Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VPzY9qlbmJ7zE7t-JK-KgVVu4JSno0bD6-3h1gv6Op5a7m7WbP_35aZKpzDVJr2-9BNRRpeEKnCWRgJHtx0FTq_dBSVwUolwvbaA1tLsGzz0OB_VSE35p54gmuY4gKg2VJv0cK28-Wik5TX3tF8O-0eRR7_zdAsjZEos6Ap4FJLbZKAzQCERrjmG_IiBSsD8-FKPCnaZbOE9Eo9DDubH64BwOevLD44LZb6361GebUBNUI5pYL9hYmKUc"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">SEOTRIKS</span><span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Intelligence Suite</span></div></div><div className="mb-space-lg p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between shadow-[0_1px_3px_rgba(35,63,99,0.04)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-2.5 h-2.5 rounded-full bg-secondary-container ring-2 ring-secondary/20 flex-shrink-0"></div><div className="truncate"><p className="font-label-md text-label-md text-on-surface font-semibold truncate">stripe.com</p><p className="font-label-xs text-label-xs text-secondary truncate">Production Domain</p></div></div><span className="material-symbols-outlined text-secondary text-sm">unfold_more</span></div><nav className="flex flex-col gap-space-xs" data-active-classes="bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-xs pb-space-xs">CORE</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-command-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">hub</span><span className="font-label-md text-label-md">SEO Command Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="projects" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">folder_open</span><span className="font-label-md text-label-md">Projects</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="project-overview" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">analytics</span><span className="font-label-md text-label-md">Project Overview</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">AUDIT &amp; DISCOVERY</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="site-audit" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">verified_user</span><span className="font-label-md text-label-md">Site Audit</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="audit-issues" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">error_outline</span><span className="font-label-md text-label-md">Audit Issues</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-issue-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">find_in_page</span><span className="font-label-md text-label-md">SEO Issue Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-research" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">travel_explore</span><span className="font-label-md text-label-md">Keyword Research</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-manager" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">list_alt</span><span className="font-label-md text-label-md">Keyword Manager</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="rank-tracking" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">trending_up</span><span className="font-label-md text-label-md">Rank Tracking</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">insights</span><span className="font-label-md text-label-md">Keyword Details</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">INTELLIGENCE &amp; LINKS</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitors" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">group</span><span className="font-label-md text-label-md">Competitors</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitor-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">visibility</span><span className="font-label-md text-label-md">Competitor Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitor-opportunity-map" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">radar</span><span className="font-label-md text-label-md">Competitor Opportunity Map</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="backlinks" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">link</span><span className="font-label-md text-label-md">Backlinks</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="backlink-opportunities" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">link_off</span><span className="font-label-md text-label-md">Backlink Opportunities</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">CONTENT &amp; ON-PAGE</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-hub" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">library_books</span><span className="font-label-md text-label-md">Content Hub</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="ai-content-writer" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">auto_awesome</span><span className="font-label-md text-label-md">AI Content Writer</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-brief" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">description</span><span className="font-label-md text-label-md">Content Brief</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-colors bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg" data-path="content-opportunities" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">lightbulb</span><span className="font-label-md text-label-md">Content Opportunities</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="on-page-seo" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">tune</span><span className="font-label-md text-label-md">On-Page SEO</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="technical-seo" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">terminal</span><span className="font-label-md text-label-md">Technical SEO</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="site-health" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">health_and_safety</span><span className="font-label-md text-label-md">Site Health</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">DIAGNOSTICS &amp; AI</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="page-explorer" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">manage_search</span><span className="font-label-md text-label-md">Page Explorer</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="page-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">article</span><span className="font-label-md text-label-md">Page Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="indexing" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">schema</span><span className="font-label-md text-label-md">Indexing</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="performance-and-core-web-vitals" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">speed</span><span className="font-label-md text-label-md">Performance &amp; Core Web Vitals</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="ai-seo-assistant" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">smart_toy</span><span className="font-label-md text-label-md">AI SEO Assistant</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="recommendations" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">recommend</span><span className="font-label-md text-label-md">Recommendations</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-tasks" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">task_alt</span><span className="font-label-md text-label-md">SEO Tasks</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">MANAGEMENT</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">bar_chart</span><span className="font-label-md text-label-md">Reports</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="report-builder" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">post_add</span><span className="font-label-md text-label-md">Report Builder</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="integrations" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">integration_instructions</span><span className="font-label-md text-label-md">Integrations</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="notification-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">notifications</span><span className="font-label-md text-label-md">Notification Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="billing" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">credit_card</span><span className="font-label-md text-label-md">Billing</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="usage" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">data_usage</span><span className="font-label-md text-label-md">Usage</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="profile" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">account_circle</span><span className="font-label-md text-label-md">Profile</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">settings</span><span className="font-label-md text-label-md">Settings</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="team" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">groups</span><span className="font-label-md text-label-md">Team</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="help-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">help</span><span className="font-label-md text-label-md">Help Center</span></a></nav></div><div className="p-space-md border-t border-surface-container bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-on-secondary"><span className="material-symbols-outlined text-sm">bolt</span></div><div className="flex flex-col flex-1"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Crawl Quota</span><span className="font-label-md text-label-md text-on-surface font-semibold">48,200 / 100k URLs</span></div></div></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Health</span><span className="font-label-md text-label-md font-bold text-secondary">94/100</span><span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">A+</span></div><div className="hidden xl:flex items-center gap-space-xs text-secondary font-label-sm text-label-md"><span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span><span className="font-label-xs text-label-xs text-secondary">Crawl: Running on 42 paths</span></div></div><div className="flex items-center gap-space-md"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-base">search</span><input className="w-full pl-9 pr-12 py-1.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Search keywords, URLs, issues..." type="text"/><kbd className="absolute right-2 px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">⌘K</kbd></div><button className="flex items-center gap-1.5 px-space-sm py-2 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity"><span className="material-symbols-outlined text-[18px]">add</span><span>New Project</span></button><button className="relative p-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="flex items-center gap-space-xs pl-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvEq_gWuJ6OI_cWyB99KxlzSCH910sd9uRymPkEWgwBagbbn3fRt-5VINmP-LgsAaaJWXwIIzxKqkkZV1T6JB8gVgZ8wtnOy5gxydReR9y-N0aklNVwQDCyGyXDEHfZlIOUJlMrR1yR_plTGs0v8XP334LqCuvLXmvX3aUxbn5EEkhdC-P9CuO4Gdm4V2chZz3MyUm2zPbdYxO6PhgSNwY6_k7C5U9Xt3_mNeQL7ZzwAlB-_8sw4nY"/><span className="material-symbols-outlined text-secondary text-base">expand_more</span></div></div></header><main className="relative pt-16 w-full px-8 bg-surface"><div className="flex flex-col w-full pb-16">
{/* BREADCRUMBS & SYSTEM STATUS BANNER */}
<div className="flex flex-col gap-space-sm pt-space-md mb-space-lg">
<div className="flex items-center gap-space-xs text-secondary font-label-xs">
<a className="hover:text-primary-container transition-colors" href="#">Projects</a>
<span className="material-symbols-outlined text-[13px] text-secondary">chevron_right</span>
<span className="font-semibold text-on-surface">stripe.com</span>
<span className="material-symbols-outlined text-[13px] text-secondary">chevron_right</span>
<a className="hover:text-primary-container transition-colors" href="#">Content &amp; On-Page</a>
<span className="material-symbols-outlined text-[13px] text-secondary">chevron_right</span>
<a className="hover:text-primary-container transition-colors" href="#">Page Explorer</a>
<span className="material-symbols-outlined text-[13px] text-secondary">chevron_right</span>
<span className="text-secondary font-mono bg-surface-container px-2 py-0.5 rounded text-label-xs">/payments/checkout</span>
</div>
{/* MAIN DOSSIER TITLE BAR */}
<div className="flex flex-wrap items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">URL Dossier: <span className="font-mono text-secondary">/payments/checkout</span></h1>
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-secondary font-label-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>Production Endpoint
          </span>
</div>
<p className="font-body-md text-secondary flex items-center gap-2">
<span className="material-symbols-outlined text-sm">link</span>
<span className="text-on-surface font-medium">Target Entity:</span> Stripe Checkout — Prebuilt, Hosted Payment Page
          <a className="text-primary-container inline-flex items-center hover:underline" href="https://stripe.com/payments/checkout" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-xs ml-1">open_in_new</span>
</a>
</p>
</div>
{/* ACTIONS SUITE */}
<div className="flex items-center gap-space-xs flex-wrap">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface font-label-md hover:bg-surface-container-high transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">bolt</span>
<span>Test Live URL</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface font-label-md hover:bg-surface-container-high transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">travel_explore</span>
<span>Search Console</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary text-on-secondary font-label-md hover:opacity-90 transition-opacity shadow-sm">
<span className="material-symbols-outlined text-[18px]">sync</span>
<span>Re-Crawl Page</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md font-semibold hover:opacity-95 shadow-md shadow-primary-container/20 transition-all">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Export Audit</span>
</button>
</div>
</div>
{/* METADATA CHIPS BAR */}
<div className="flex items-center gap-space-sm flex-wrap mt-space-xs pt-space-xs">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-fixed font-label-xs font-semibold">
<span className="material-symbols-outlined text-xs">check_circle</span>
<span>Status: 200 OK</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-low text-secondary font-label-xs font-medium">
<span className="material-symbols-outlined text-xs text-secondary">fingerprint</span>
<span>Indexable: Canonical Self-Referencing</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-low text-secondary font-label-xs font-medium">
<span className="material-symbols-outlined text-xs text-secondary">schedule</span>
<span>Crawl Freshness: 18m ago</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-low text-secondary font-label-xs font-medium">
<span className="material-symbols-outlined text-xs text-secondary">lan</span>
<span>Cluster: Core Payment Products</span>
</div>
<div className="ml-auto hidden xl:flex items-center gap-2 text-label-xs font-mono text-secondary">
<span>HASH: sha256:8b4f...a029</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span>Edge POP: SFO-1</span>
</div>
</div>
</div>
{/* TOP 5 KPI SUMMARY CARDS (Bento Grid) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md mb-space-xl">
{/* KPI 1: SEO Health Score */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Page SEO Health</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">94</span>
<span className="text-secondary font-label-md">/ 100</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<span className="font-headline-sm text-headline-sm font-black">A</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between pt-2">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">shield</span> Optimal Health
        </span>
<span className="font-label-xs text-secondary">1 minor alert</span>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-container">
<div className="h-full bg-secondary" style={{ width: "94%" }}></div>
</div>
</div>
{/* KPI 2: Monthly Organic Traffic */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Organic Traffic</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">642.0K</span>
<span className="text-secondary font-label-xs">/mo</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-[20px]">trending_up</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between pt-2">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs font-bold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span> +18.4% YoY
        </span>
<span className="font-label-xs text-on-surface font-semibold">$1.92M est.</span>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-container">
<div className="h-full bg-primary-container" style={{ width: "78%" }}></div>
</div>
</div>
{/* KPI 3: Keywords in Top 10 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Top 10 Keywords</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">84</span>
<span className="font-label-xs text-secondary">/ 1,280 total</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[20px]">trophy</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between pt-2">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs font-bold flex items-center gap-1">
<span className="text-primary-container font-black">#1</span> hosted checkout
        </span>
<span className="font-label-xs text-secondary font-mono">#2 form</span>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-container">
<div className="h-full bg-secondary" style={{ width: "82%" }}></div>
</div>
</div>
{/* KPI 4: Inbound Internal Links */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Internal Backlinks</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">342</span>
<span className="font-label-xs text-secondary">pages</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<span className="material-symbols-outlined text-[20px]">hub</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between pt-2">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs font-bold">
          High PageRank Tier
        </span>
<span className="font-label-xs text-secondary">Tier 1 Link Flow</span>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-container">
<div className="h-full bg-tertiary" style={{ width: "88%" }}></div>
</div>
</div>
{/* KPI 5: Core Web Vitals Status */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Core Web Vitals</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">All Passing</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[20px]">speed</span>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-1 text-[11px] font-mono text-secondary pt-1">
<div>LCP: <span className="font-bold text-on-surface">1.2s</span></div>
<div>FID: <span className="font-bold text-on-surface">8ms</span></div>
<div>CLS: <span className="font-bold text-on-surface">0.01</span></div>
<div>INP: <span className="font-bold text-on-surface">42ms</span></div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-container">
<div className="h-full bg-secondary" style={{ width: "100%" }}></div>
</div>
</div>
</div>
{/* PAGE PERFORMANCE & SERP TRAJECTORY (CHART + HIGHLIGHT MODULE) */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm mb-space-xl">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Search Visibility &amp; SERP Trajectory</h2>
<span className="px-2 py-0.5 bg-surface-container text-secondary text-label-xs font-semibold rounded">Last 6 Months (GSC Synchronized)</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Correlating organic click volume and SERP impressions with primary target term rank shifts.</p>
</div>
{/* CHART METRIC LEGEND & TIME SELECT */}
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-sm text-label-xs">
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-sm bg-secondary"></span>
<span className="text-on-surface font-medium">Clicks (642k)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-sm bg-secondary-container"></span>
<span className="text-secondary font-medium">Impressions (4.8M)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-1 bg-primary-container rounded-full"></span>
<span className="text-primary-container font-bold">"stripe checkout" Rank (#1.2 avg)</span>
</div>
</div>
<div className="flex bg-surface-container rounded-lg p-0.5">
<button className="px-2.5 py-1 text-label-xs font-medium text-secondary rounded">30D</button>
<button className="px-2.5 py-1 text-label-xs font-bold text-on-surface bg-surface-container-lowest rounded shadow-sm">6M</button>
<button className="px-2.5 py-1 text-label-xs font-medium text-secondary rounded">12M</button>
</div>
</div>
</div>
{/* INLINE VECTOR TRAJECTORY CHART (Clean scalable SVG data viz) */}
<div className="w-full h-64 relative bg-surface-container-low/40 rounded-xl p-space-md flex flex-col justify-end">
{/* Grid lines */}
<div className="absolute inset-x-space-md inset-y-space-md flex flex-col justify-between pointer-events-none opacity-40">
<div className="w-full border-b border-surface-container-highest"></div>
<div className="w-full border-b border-surface-container-highest"></div>
<div className="w-full border-b border-surface-container-highest"></div>
<div className="w-full border-b border-surface-container-highest"></div>
</div>
{/* SVG Drawing */}
<svg className="w-full h-44 overflow-visible relative z-10" preserveAspectRatio="none" viewBox="0 0 1000 180">
<defs>
<linearGradient id="clickGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#456085" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#456085" stopOpacity="0.0"></stop>
</linearGradient>
<linearGradient id="impressionGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#b8d3ff" stopOpacity="0.35"></stop>
<stop offset="100%" stopColor="#b8d3ff" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
{/* Area: Impressions */}
<path d="M 0 130 Q 150 110, 300 95 T 600 70 T 850 45 T 1000 30 L 1000 180 L 0 180 Z" fill="url(#impressionGradient)"></path>
<path d="M 0 130 Q 150 110, 300 95 T 600 70 T 850 45 T 1000 30" fill="none" stroke="#adc8f3" stroke-dasharray="4 4" strokeWidth="2"></path>
{/* Area: Organic Clicks */}
<path d="M 0 155 Q 150 145, 300 130 T 600 95 T 850 68 T 1000 52 L 1000 180 L 0 180 Z" fill="url(#clickGradient)"></path>
<path d="M 0 155 Q 150 145, 300 130 T 600 95 T 850 68 T 1000 52" fill="none" stroke="#456085" strokeWidth="2.5"></path>
{/* Rank Line: Inverted (Higher is better rank) */}
<path d="M 0 50 Q 200 45, 400 35 T 700 24 T 1000 18" fill="none" stroke="#f26a4b" strokeLinecap="round" strokeWidth="3"></path>
{/* Highlight Pins / Points */}
<circle cx="400" cy="35" fill="#f26a4b" r="4" stroke="#ffffff" strokeWidth="2"></circle>
<circle cx="700" cy="24" fill="#f26a4b" r="4" stroke="#ffffff" strokeWidth="2"></circle>
<circle cx="1000" cy="18" fill="#f26a4b" r="5" stroke="#ffffff" strokeWidth="2"></circle>
</svg>
{/* X-Axis Labels */}
<div className="flex justify-between items-center text-label-xs font-mono text-secondary pt-space-xs z-10">
<span>Nov 2024</span>
<span>Dec 2024</span>
<span>Jan 2025</span>
<span>Feb 2025</span>
<span>Mar 2025</span>
<span className="font-bold text-on-surface">Apr 2025 (Present)</span>
</div>
</div>
{/* Trajectory Insights Strip */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-md pt-space-sm border-t border-surface-container">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px]">query_stats</span>
<div className="flex flex-col">
<span className="font-label-xs text-secondary uppercase font-bold">Query CTR Index</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">13.38% Avg CTR <span className="text-primary-container">(+2.1%)</span></span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px]">star</span>
<div className="flex flex-col">
<span className="font-label-xs text-secondary uppercase font-bold">SERP Rich Snippets</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">FAQ Accordion &amp; Review Star Rating active</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px]">compare_arrows</span>
<div className="flex flex-col">
<span className="font-label-xs text-secondary uppercase font-bold">Algorithm Resilience</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Zero volatility through March Core Update</span>
</div>
</div>
</div>
</div>
{/* TAB BAR NAVIGATION */}
<div className="flex items-center gap-space-xs mb-space-lg overflow-x-auto pb-1 border-b border-surface-container">
<button className="px-space-md py-2.5 rounded-lg font-label-md text-label-md font-bold bg-secondary-container text-on-secondary-fixed flex items-center gap-2 flex-shrink-0 shadow-sm">
<span className="material-symbols-outlined text-sm">tune</span>
<span>Overview &amp; Diagnostics</span>
</button>
<button className="px-space-md py-2.5 rounded-lg font-label-md text-label-md font-medium text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2 flex-shrink-0">
<span className="material-symbols-outlined text-sm">code</span>
<span>On-Page &amp; Meta</span>
</button>
<button className="px-space-md py-2.5 rounded-lg font-label-md text-label-md font-medium text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2 flex-shrink-0">
<span className="material-symbols-outlined text-sm">account_tree</span>
<span>Internal Link Graph</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container text-[11px] font-bold">342</span>
</button>
<button className="px-space-md py-2.5 rounded-lg font-label-md text-label-md font-medium text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2 flex-shrink-0">
<span className="material-symbols-outlined text-sm">radar</span>
<span>Competitor SERP Overlap</span>
<span className="px-1.5 py-0.2 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[11px] font-bold">Opportunity</span>
</button>
<button className="px-space-md py-2.5 rounded-lg font-label-md text-label-md font-medium text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2 flex-shrink-0">
<span className="material-symbols-outlined text-sm">history</span>
<span>Crawl History &amp; Headers</span>
</button>
</div>
{/* INSPECTOR PANELS: TWO COLUMN WORKSPACE */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
{/* LEFT COLUMN: ON-PAGE ANATOMY (7 COLS) */}
<div className="lg:col-span-7 flex flex-col gap-space-lg">
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">view_compact</span>
<h3 className="font-title text-title text-on-surface font-bold">On-Page Technical Anatomy</h3>
</div>
<span className="font-label-xs text-secondary uppercase font-semibold">Render: SSR + Edge Revalidated</span>
</div>
{/* Title Tag Section */}
<div className="flex flex-col gap-1.5 bg-surface-container-low/60 p-space-md rounded-xl">
<div className="flex items-center justify-between">
<span className="font-label-xs text-secondary font-bold uppercase tracking-wider">Title Tag</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-label-xs font-bold">
              59 / 60 Chars (Optimal)
            </span>
</div>
<p className="font-body-md text-on-surface font-semibold select-all">Stripe Checkout | Prebuilt Payment Form &amp; Hosted Checkout</p>
<div className="flex items-center gap-2 text-label-xs text-secondary mt-1">
<span className="material-symbols-outlined text-xs text-secondary">check</span> Primary entity positioned left
            <span className="material-symbols-outlined text-xs text-secondary ml-2">check</span> Brand name suffixed correctly
          </div>
</div>
{/* Meta Description Section */}
<div className="flex flex-col gap-1.5 bg-surface-container-low/60 p-space-md rounded-xl">
<div className="flex items-center justify-between">
<span className="font-label-xs text-secondary font-bold uppercase tracking-wider">Meta Description</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-label-xs font-bold">
              142 / 160 Chars (Optimal)
            </span>
</div>
<p className="font-body-md text-on-surface select-all leading-relaxed">Accept payments online with Stripe Checkout. A prebuilt, hosted payment page optimized for conversion across desktop and mobile devices.</p>
<div className="w-full bg-surface-container h-1 rounded-full overflow-hidden mt-1">
<div className="bg-secondary h-full rounded-full" style={{ width: "88%" }}></div>
</div>
</div>
{/* Canonical Verification */}
<div className="flex flex-col gap-1 bg-surface-container-low/60 p-space-md rounded-xl">
<div className="flex items-center justify-between">
<span className="font-label-xs text-secondary font-bold uppercase tracking-wider">Canonical Specification</span>
<span className="flex items-center gap-1 text-label-xs font-bold text-secondary">
<span className="material-symbols-outlined text-xs">verified</span> Self-Referential &amp; Strict
            </span>
</div>
<p className="font-mono text-label-md text-on-surface bg-surface-container-lowest p-2 rounded border border-surface-container select-all truncate">
            https://stripe.com/payments/checkout
          </p>
</div>
{/* Structural Metrics Grid: Headings, Content Volume, Schema */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
{/* Heading Hierarchy */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<span className="font-label-xs text-secondary font-bold uppercase">Heading Tree</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Valid</span>
<span className="font-label-xs text-secondary">Hierarchy</span>
</div>
<div className="flex items-center gap-1.5 text-label-xs font-mono text-secondary">
<span className="px-1.5 py-0.5 bg-surface-container-highest rounded text-on-surface font-bold">H1: 1</span>
<span className="px-1.5 py-0.5 bg-surface-container-highest rounded text-on-surface font-bold">H2: 6</span>
<span className="px-1.5 py-0.5 bg-surface-container-highest rounded text-on-surface font-bold">H3: 14</span>
</div>
</div>
{/* Content Volume & Readability */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<span className="font-label-xs text-secondary font-bold uppercase">Copy Analytics</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">2,420</span>
<span className="font-label-xs text-secondary">words</span>
</div>
<div className="text-label-xs text-secondary flex items-center gap-1 font-mono">
<span>Grade: 10.4</span>
<span>•</span>
<span>Flesch Score: 62</span>
</div>
</div>
{/* Structured Data Validation */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<span className="font-label-xs text-secondary font-bold uppercase">Structured Data</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm font-bold text-secondary">2 Schemas</span>
</div>
<div className="flex flex-col gap-0.5 text-label-xs font-mono text-on-surface">
<span className="flex items-center gap-1 text-[11px]"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>SoftwareApplication</span>
<span className="flex items-center gap-1 text-[11px]"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>FAQPage (Valid JSON-LD)</span>
</div>
</div>
</div>
{/* OpenGraph & Social Preview Snip */}
<div className="bg-surface-container-low/40 p-space-md rounded-xl flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[24px]">share</span>
</div>
<div className="truncate">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">Open Graph Protocol &amp; Twitter Card Ready</p>
<p className="font-body-sm text-body-sm text-secondary truncate">og:image: 1200x630px webp cached • summary_large_image tagged</p>
</div>
</div>
<button className="px-3 py-1.5 bg-surface-container text-on-surface font-label-xs font-bold rounded-lg hover:bg-surface-container-high transition-colors">
            Inspect Meta Tags
          </button>
</div>
</div>
{/* INBOUND INTERNAL LINK FLOW MATRIX */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">alt_route</span>
<h3 className="font-title text-title text-on-surface font-bold">Top Internal Link Equity Sources</h3>
</div>
<span className="font-label-xs text-secondary">5 of 342 Nodes Rendered</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-xs uppercase">
<th className="py-2.5 px-3 rounded-l-lg">Origin Page Path</th>
<th className="py-2.5 px-3">Anchor Context</th>
<th className="py-2.5 px-3">PageRank Weight</th>
<th className="py-2.5 px-3 rounded-r-lg text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3 font-mono text-label-xs font-bold text-on-surface">/docs</td>
<td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-label-xs">"Checkout prebuilt guide"</span></td>
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: "98%" }}></div>
</div>
<span className="font-mono text-label-xs font-bold text-on-surface">9.8</span>
</div>
</td>
<td className="py-3 px-3 text-right">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs font-bold">Follow</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3 font-mono text-label-xs font-bold text-on-surface">/pricing</td>
<td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-label-xs">"integrated checkout"</span></td>
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: "92%" }}></div>
</div>
<span className="font-mono text-label-xs font-bold text-on-surface">9.2</span>
</div>
</td>
<td className="py-3 px-3 text-right">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs font-bold">Follow</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3 font-mono text-label-xs font-bold text-on-surface">/solutions/ecommerce</td>
<td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-label-xs">"Stripe Checkout platform"</span></td>
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: "84%" }}></div>
</div>
<span className="font-mono text-label-xs font-bold text-on-surface">8.4</span>
</div>
</td>
<td className="py-3 px-3 text-right">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs font-bold">Follow</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3 font-mono text-label-xs font-bold text-on-surface">/global</td>
<td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-label-xs">"multi-currency checkout"</span></td>
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: "76%" }}></div>
</div>
<span className="font-mono text-label-xs font-bold text-on-surface">7.6</span>
</div>
</td>
<td className="py-3 px-3 text-right">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs font-bold">Follow</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3 font-mono text-label-xs font-bold text-on-surface">/payments</td>
<td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-label-xs">"hosted payment page"</span></td>
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: "95%" }}></div>
</div>
<span className="font-mono text-label-xs font-bold text-on-surface">9.5</span>
</div>
</td>
<td className="py-3 px-3 text-right">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs font-bold">Follow</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* RIGHT COLUMN: INTELLIGENT AI INSIGHTS & INFRASTRUCTURE (5 COLS) */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
{/* AI INTELLIGENCE & KEYWORD EXPANSION RECOMMENDATION */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border-l-4 border-l-primary-container relative overflow-hidden">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[22px]">auto_awesome</span>
<span className="font-label-xs text-primary-container font-extrabold uppercase tracking-wider">SEOTRIKS Neural Copilot</span>
</div>
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-xs font-bold">High Impact</span>
</div>
<h4 className="font-title text-title text-on-surface font-bold mb-2">High-Intent Keyword Expansion Opportunity</h4>
<p className="font-body-sm text-body-sm text-secondary mb-space-md leading-relaxed">
          Competitor <strong className="text-on-surface font-semibold">Adyen</strong> presently captures Position #1 for <code className="text-on-surface font-mono bg-surface-container px-1 py-0.5 rounded text-[12px]">"multi-currency payout settlement"</code> (18,400 monthly searches). This page possesses the internal PageRank equity to dethrone them by introducing an authoritative H2 cluster.
        </p>
{/* SERP Opportunity Comparison Card */}
<div className="bg-surface-container-low p-space-sm rounded-xl mb-space-md flex flex-col gap-2">
<div className="flex items-center justify-between text-label-xs">
<span className="text-secondary font-medium">Competitor SERP Leader</span>
<span className="font-bold text-on-surface">Adyen (/settlement) • Pos #1</span>
</div>
<div className="flex items-center justify-between text-label-xs">
<span className="text-secondary font-medium">Stripe Current Rank</span>
<span className="font-bold text-primary-container">Pos #14 (Page 2) • Opportunity Gap</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-primary-container h-full rounded-full" style={{ width: "65%" }}></div>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary font-label-md font-semibold hover:opacity-95 shadow-md shadow-primary-container/20 transition-all flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">add_task</span>
<span>Generate Content Brief</span>
</button>
<button className="p-2 rounded-lg bg-surface-container text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[20px]">bookmark_add</span>
</button>
</div>
</div>
{/* SERVER & HEADER INSPECTOR MODULE */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">terminal</span>
<h3 className="font-title text-title text-on-surface font-bold">Server Protocol &amp; HTTP Headers</h3>
</div>
<span className="material-symbols-outlined text-secondary text-sm">lock</span>
</div>
<div className="font-mono text-label-xs bg-inverse-surface text-inverse-on-surface p-space-md rounded-xl overflow-x-auto flex flex-col gap-2 leading-relaxed">
<div className="flex items-center gap-2 pb-1 border-b border-white/10 text-secondary-fixed">
<span>&gt; HTTP/2 200 OK</span>
<span className="text-white/40">|</span>
<span>TLS 1.3 / ChaCha20</span>
</div>
<div><span className="text-tertiary-fixed font-bold">date:</span> Tue, 08 Apr 2025 14:22:04 GMT</div>
<div><span className="text-tertiary-fixed font-bold">content-type:</span> text/html; charset=utf-8</div>
<div><span className="text-tertiary-fixed font-bold">content-encoding:</span> br (Brotli-11)</div>
<div><span className="text-tertiary-fixed font-bold">x-cache:</span> HIT (Fastly Edge POP: SFO-1)</div>
<div><span className="text-tertiary-fixed font-bold">strict-transport-security:</span> max-age=63072000; includeSubDomains; preload</div>
<div><span className="text-tertiary-fixed font-bold">x-content-type-options:</span> nosniff</div>
<div><span className="text-tertiary-fixed font-bold">last-modified:</span> Sat, 05 Apr 2025 11:18:22 GMT (3 days ago)</div>
</div>
{/* Infrastructure Diagnostics List */}
<div className="grid grid-cols-2 gap-space-xs text-body-sm pt-space-xs">
<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-base">dns</span>
<div className="flex flex-col">
<span className="font-label-xs text-secondary">CDN Origin</span>
<span className="font-label-md font-semibold text-on-surface">Fastly Dual-Shield</span>
</div>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-base">timer</span>
<div className="flex flex-col">
<span className="font-label-xs text-secondary">TTFB Latency</span>
<span className="font-label-md font-semibold text-on-surface">28ms (Edge Hit)</span>
</div>
</div>
</div>
</div>
{/* COMPETITOR SERP BENCHMARK CARD */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">group</span>
<h3 className="font-title text-title text-on-surface font-bold">SERP Share of Voice Competitors</h3>
</div>
<span className="font-label-xs text-secondary font-semibold">Volume Weighted</span>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[10px]">S</div>
<span className="font-label-md font-bold text-on-surface">stripe.com (This URL)</span>
</div>
<span className="font-mono text-label-md font-bold text-on-surface">68.4% SoV</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: "68.4%" }}></div>
</div>
<div className="flex items-center justify-between mt-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-bold text-[10px]">A</div>
<span className="font-label-md text-secondary">adyen.com</span>
</div>
<span className="font-mono text-label-md text-secondary font-semibold">18.2% SoV</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-bold text-[10px]">C</div>
<span className="font-label-md text-secondary">checkout.com</span>
</div>
<span className="font-mono text-label-md text-secondary font-semibold">9.1% SoV</span>
</div>
</div>
</div>
</div>
</div>
{/* PERSISTENT / FLOATING QUICK-FIX ACTIONS BAR */}
<div className="w-full bg-surface-container-lowest rounded-2xl p-space-md shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-md border border-surface-container">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant flex-shrink-0">
<span className="material-symbols-outlined text-[24px]">offline_bolt</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Quick Optimization Actions</span>
<span className="font-body-sm text-body-sm text-secondary">Automated workflows ready for single-click execution on this endpoint.</span>
</div>
</div>
<div className="flex items-center gap-space-sm flex-wrap w-full md:w-auto">
<button className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md font-semibold hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px] text-primary-container">auto_awesome</span>
<span>Deploy AI Title Update</span>
</button>
<button className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md font-semibold hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">schema</span>
<span>Generate FAQ Schema Add-on</span>
</button>
<button className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md font-semibold hover:opacity-95 shadow-md shadow-primary-container/20 transition-all">
<span className="material-symbols-outlined text-[18px]">radar</span>
<span>Add to High-Frequency SERP Monitor</span>
</button>
</div>
</div>
</div></main></div>
    </>
  );
}
