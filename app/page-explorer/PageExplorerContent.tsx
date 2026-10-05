import React from 'react';

export default function PageExplorerContent() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="p-space-lg flex flex-col"><div className="flex items-center gap-space-sm mb-space-lg"><img alt="SEOTRIKS Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VPzY9qlbmJ7zE7t-JK-KgVVu4JSno0bD6-3h1gv6Op5a7m7WbP_35aZKpzDVJr2-9BNRRpeEKnCWRgJHtx0FTq_dBSVwUolwvbaA1tLsGzz0OB_VSE35p54gmuY4gKg2VJv0cK28-Wik5TX3tF8O-0eRR7_zdAsjZEos6Ap4FJLbZKAzQCERrjmG_IiBSsD8-FKPCnaZbOE9Eo9DDubH64BwOevLD44LZb6361GebUBNUI5pYL9hYmKUc"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">SEOTRIKS</span><span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Intelligence Suite</span></div></div><div className="mb-space-lg p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between shadow-[0_1px_3px_rgba(35,63,99,0.04)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-2.5 h-2.5 rounded-full bg-secondary-container ring-2 ring-secondary/20 flex-shrink-0"></div><div className="truncate"><p className="font-label-md text-label-md text-on-surface font-semibold truncate">stripe.com</p><p className="font-label-xs text-label-xs text-secondary truncate">Production Domain</p></div></div><span className="material-symbols-outlined text-secondary text-sm">unfold_more</span></div><nav className="flex flex-col gap-space-xs" data-active-classes="bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-xs pb-space-xs">CORE</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-command-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">hub</span><span className="font-label-md text-label-md">SEO Command Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="projects" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">folder_open</span><span className="font-label-md text-label-md">Projects</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="project-overview" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">analytics</span><span className="font-label-md text-label-md">Project Overview</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">AUDIT &amp; DISCOVERY</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="site-audit" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">verified_user</span><span className="font-label-md text-label-md">Site Audit</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="audit-issues" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">error_outline</span><span className="font-label-md text-label-md">Audit Issues</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-issue-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">find_in_page</span><span className="font-label-md text-label-md">SEO Issue Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-research" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">travel_explore</span><span className="font-label-md text-label-md">Keyword Research</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-manager" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">list_alt</span><span className="font-label-md text-label-md">Keyword Manager</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="rank-tracking" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">trending_up</span><span className="font-label-md text-label-md">Rank Tracking</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">insights</span><span className="font-label-md text-label-md">Keyword Details</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">INTELLIGENCE &amp; LINKS</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitors" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">group</span><span className="font-label-md text-label-md">Competitors</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitor-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">visibility</span><span className="font-label-md text-label-md">Competitor Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitor-opportunity-map" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">radar</span><span className="font-label-md text-label-md">Competitor Opportunity Map</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="backlinks" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">link</span><span className="font-label-md text-label-md">Backlinks</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="backlink-opportunities" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">link_off</span><span className="font-label-md text-label-md">Backlink Opportunities</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">CONTENT &amp; ON-PAGE</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-hub" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">library_books</span><span className="font-label-md text-label-md">Content Hub</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="ai-content-writer" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">auto_awesome</span><span className="font-label-md text-label-md">AI Content Writer</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-brief" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">description</span><span className="font-label-md text-label-md">Content Brief</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-colors bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg" data-path="content-opportunities" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">lightbulb</span><span className="font-label-md text-label-md">Content Opportunities</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="on-page-seo" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">tune</span><span className="font-label-md text-label-md">On-Page SEO</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="technical-seo" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">terminal</span><span className="font-label-md text-label-md">Technical SEO</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="site-health" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">health_and_safety</span><span className="font-label-md text-label-md">Site Health</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">DIAGNOSTICS &amp; AI</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="page-explorer" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">manage_search</span><span className="font-label-md text-label-md">Page Explorer</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="page-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">article</span><span className="font-label-md text-label-md">Page Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="indexing" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">schema</span><span className="font-label-md text-label-md">Indexing</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="performance-and-core-web-vitals" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">speed</span><span className="font-label-md text-label-md">Performance &amp; Core Web Vitals</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="ai-seo-assistant" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">smart_toy</span><span className="font-label-md text-label-md">AI SEO Assistant</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="recommendations" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">recommend</span><span className="font-label-md text-label-md">Recommendations</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-tasks" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">task_alt</span><span className="font-label-md text-label-md">SEO Tasks</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">MANAGEMENT</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">bar_chart</span><span className="font-label-md text-label-md">Reports</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="report-builder" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">post_add</span><span className="font-label-md text-label-md">Report Builder</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="integrations" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">integration_instructions</span><span className="font-label-md text-label-md">Integrations</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="notification-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">notifications</span><span className="font-label-md text-label-md">Notification Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="billing" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">credit_card</span><span className="font-label-md text-label-md">Billing</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="usage" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">data_usage</span><span className="font-label-md text-label-md">Usage</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="profile" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">account_circle</span><span className="font-label-md text-label-md">Profile</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">settings</span><span className="font-label-md text-label-md">Settings</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="team" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">groups</span><span className="font-label-md text-label-md">Team</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="help-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">help</span><span className="font-label-md text-label-md">Help Center</span></a></nav></div><div className="p-space-md border-t border-surface-container bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-on-secondary"><span className="material-symbols-outlined text-sm">bolt</span></div><div className="flex flex-col flex-1"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Crawl Quota</span><span className="font-label-md text-label-md text-on-surface font-semibold">48,200 / 100k URLs</span></div></div></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Health</span><span className="font-label-md text-label-md font-bold text-secondary">94/100</span><span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">A+</span></div><div className="hidden xl:flex items-center gap-space-xs text-secondary font-label-sm text-label-md"><span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span><span className="font-label-xs text-label-xs text-secondary">Crawl: Running on 42 paths</span></div></div><div className="flex items-center gap-space-md"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-base">search</span><input className="w-full pl-9 pr-12 py-1.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Search keywords, URLs, issues..." type="text"/><kbd className="absolute right-2 px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">⌘K</kbd></div><button className="flex items-center gap-1.5 px-space-sm py-2 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity"><span className="material-symbols-outlined text-[18px]">add</span><span>New Project</span></button><button className="relative p-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="flex items-center gap-space-xs pl-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvEq_gWuJ6OI_cWyB99KxlzSCH910sd9uRymPkEWgwBagbbn3fRt-5VINmP-LgsAaaJWXwIIzxKqkkZV1T6JB8gVgZ8wtnOy5gxydReR9y-N0aklNVwQDCyGyXDEHfZlIOUJlMrR1yR_plTGs0v8XP334LqCuvLXmvX3aUxbn5EEkhdC-P9CuO4Gdm4V2chZz3MyUm2zPbdYxO6PhgSNwY6_k7C5U9Xt3_mNeQL7ZzwAlB-_8sw4nY"/><span className="material-symbols-outlined text-secondary text-base">expand_more</span></div></div></header><main className="relative pt-16 w-full px-8 bg-surface"><div className="flex flex-col w-full">
{/* Subtle decorative ambient glow circles trapped within container */}
<div className="relative w-full pb-16 overflow-hidden">
<div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-32 left-1/3 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none -z-10"></div>
{/* 1. Header & Navigation Context */}
<div className="flex flex-col gap-space-sm pt-space-md mb-space-lg">
{/* Breadcrumb navigation */}
<nav className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
<a className="hover:text-on-surface transition-colors" href="#">Projects</a>
<span className="material-symbols-outlined text-[14px] text-secondary/60">chevron_right</span>
<span className="inline-flex items-center gap-1 font-semibold text-on-surface">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
          stripe.com
        </span>
<span className="material-symbols-outlined text-[14px] text-secondary/60">chevron_right</span>
<span className="text-secondary">Content &amp; On-Page</span>
<span className="material-symbols-outlined text-[14px] text-secondary/60">chevron_right</span>
<span className="font-semibold text-primary">Page Explorer</span>
</nav>
{/* Main Title & Actions Bar */}
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-md mt-space-xs">
<div className="flex flex-col max-w-4xl">
<div className="flex items-center gap-space-sm mb-1">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Enterprise Page Explorer &amp; Fleet Directory</h1>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-label-xs text-label-xs font-bold uppercase tracking-wider">Live Index</span>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
            Full-index audit traversal across all <span className="font-semibold text-on-surface">14,230</span> active URLs. Synthesizing real-time Google Search Console query telemetry, Core Web Vitals compliance, crawl frequency, and algorithmic decay warnings.
          </p>
</div>
{/* Action CTAs */}
<div className="flex flex-wrap items-center gap-space-sm self-start xl:self-end">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container transition-colors text-secondary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-[18px] text-secondary">cloud_sync</span>
<span>Sync GSC Telemetry</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container transition-colors text-secondary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-[18px] text-secondary">file_download</span>
<span>Export CSV</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity">
<span className="material-symbols-outlined text-[18px]">add_box</span>
<span>Add Custom Segment</span>
</button>
</div>
</div>
</div>
{/* 2. Fleet Summary KPI Metrics (4 Cards) */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter mb-space-lg">
{/* KPI 1: Explored URLs */}
<div className="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider">Total Explored Fleet</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">14,230</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/60 text-secondary font-label-xs text-label-xs font-semibold">+42 new 24h</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">public</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between font-label-xs text-label-xs text-secondary bg-surface-container-low/60 -mx-4 -mb-4 px-4 py-2.5">
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            100% crawl fresh (3h ago)
          </span>
<span className="font-medium text-on-surface">Coverage: Complete</span>
</div>
</div>
{/* KPI 2: Page Health Distribution */}
<div className="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider">Fleet Health Index</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">89.2<span className="text-body-sm font-normal text-secondary">/100</span></span>
<span className="inline-flex items-center text-secondary font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +1.8 pts
              </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">health_and_safety</span>
</div>
</div>
{/* Segmented bar */}
<div className="mt-4 flex flex-col gap-1.5">
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex">
<div className="h-full bg-secondary" style={{ width: "69%" }}></div>
<div className="h-full bg-tertiary-container" style={{ width: "27%" }}></div>
<div className="h-full bg-primary-container" style={{ width: "4%" }}></div>
</div>
<div className="flex justify-between font-label-xs text-label-xs text-secondary">
<span><strong className="text-on-surface font-semibold">9.8k</strong> Good</span>
<span><strong className="text-on-surface font-semibold">3.9k</strong> Fair</span>
<span><strong className="text-primary font-semibold">470</strong> Review</span>
</div>
</div>
</div>
{/* KPI 3: Organic Traffic Footprint */}
<div className="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider">Organic Footprint</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">38.2M</span>
<span className="text-secondary font-body-sm text-body-sm">visits/mo</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[22px]">visibility</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between font-label-xs text-label-xs text-secondary bg-surface-container-low/60 -mx-4 -mb-4 px-4 py-2.5">
<span className="font-medium text-on-surface">PPC Value: $12.4M/mo</span>
<span className="text-secondary font-semibold">Top 1% drivers: 62%</span>
</div>
</div>
{/* KPI 4: Indexation Rate */}
<div className="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider">Search Indexation Rate</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">98.2%</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-xs text-label-xs font-semibold">13,974 Valid</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">verified</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between font-label-xs text-label-xs text-secondary bg-surface-container-low/60 -mx-4 -mb-4 px-4 py-2.5">
<span className="text-secondary">Excluded / Noindex: <strong className="text-primary font-semibold">256</strong></span>
<span className="font-medium text-on-surface">Canonicalized: 188</span>
</div>
</div>
</div>
{/* 3. Segmented Navigation Controls */}
<div className="flex items-center gap-space-sm overflow-x-auto pb-2 mb-space-md">
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow-sm transition-all whitespace-nowrap">
<span>All URLs</span>
<span className="px-1.5 py-0.2 rounded-full bg-on-secondary/20 text-on-secondary font-label-xs text-label-xs font-bold">14,230</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-secondary hover:bg-surface-container transition-all font-label-md text-label-md font-medium whitespace-nowrap shadow-sm">
<span>Core Marketing &amp; Landing (/solutions, /pricing)</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-bold">184</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-secondary hover:bg-surface-container transition-all font-label-md text-label-md font-medium whitespace-nowrap shadow-sm">
<span>Documentation &amp; Devs (/docs/*)</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-bold">8,420</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-secondary hover:bg-surface-container transition-all font-label-md text-label-md font-medium whitespace-nowrap shadow-sm">
<span>Blog &amp; Resources (/blog/*, /resources/*)</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-bold">1,240</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-secondary hover:bg-surface-container transition-all font-label-md text-label-md font-medium whitespace-nowrap shadow-sm">
<span>Regional &amp; Localized (fr, de, ja, es)</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-bold">4,386</span>
</button>
</div>
{/* 4. Advanced Filter Deck */}
<div className="bg-surface-container-low rounded-2xl p-space-md shadow-sm mb-space-lg flex flex-col gap-space-sm">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-space-sm justify-between">
{/* Search input */}
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px]">filter_alt</span>
<input className="w-full pl-11 pr-24 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-secondary shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Filter by regex, path slug, or keyword (e.g., ^/docs/.*payment.*, status:200, health:&lt;70)..." type="text"/>
<div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-xs text-label-xs text-secondary font-mono">REGX</span>
<button className="p-1 rounded hover:bg-surface-container text-secondary">
<span className="material-symbols-outlined text-[16px]">help</span>
</button>
</div>
</div>
{/* Filter toggles */}
<div className="flex flex-wrap items-center gap-2">
{/* HTTP Status Dropdown */}
<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container transition-colors">
<span className="text-secondary font-normal">HTTP:</span>
<span className="font-semibold">All Statuses</span>
<span className="material-symbols-outlined text-[16px] text-secondary">expand_more</span>
</button>
</div>
{/* Indexability Dropdown */}
<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container transition-colors">
<span className="text-secondary font-normal">Index:</span>
<span className="font-semibold">Indexed (200)</span>
<span className="material-symbols-outlined text-[16px] text-secondary">expand_more</span>
</button>
</div>
{/* Page Health Range */}
<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container transition-colors">
<span className="text-secondary font-normal">Health:</span>
<span className="font-semibold">&gt; 70 Score</span>
<span className="material-symbols-outlined text-[16px] text-secondary">expand_more</span>
</button>
</div>
{/* Inbound Internal Links */}
<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container transition-colors">
<span className="text-secondary font-normal">Inbound:</span>
<span className="font-semibold">Any Depth</span>
<span className="material-symbols-outlined text-[16px] text-secondary">expand_more</span>
</button>
</div>
{/* Traffic Filter */}
<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container transition-colors">
<span className="text-secondary font-normal">Traffic:</span>
<span className="font-semibold">&gt; 10k/mo</span>
<span className="material-symbols-outlined text-[16px] text-secondary">expand_more</span>
</button>
</div>
<button className="p-2 rounded-lg bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Reset All Filters">
<span className="material-symbols-outlined text-[18px]">restart_alt</span>
</button>
</div>
</div>
{/* Active Filter Pill Tags */}
<div className="flex items-center flex-wrap gap-2 pt-1 font-label-xs text-label-xs">
<span className="text-secondary uppercase font-bold tracking-wider mr-1">Active Rules:</span>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest text-secondary shadow-sm">
<span>Domain: <strong className="text-on-surface">stripe.com</strong></span>
<span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary">close</span>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest text-secondary shadow-sm">
<span>Protocol: <strong className="text-on-surface">https only</strong></span>
<span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary">close</span>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest text-secondary shadow-sm">
<span>Excluded: <strong className="text-on-surface">/_next/*, /api/*</strong></span>
<span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary">close</span>
</div>
<button className="text-primary font-semibold hover:underline ml-1">Save Filter as View</button>
</div>
</div>
{/* 5. Main URL Fleet Table */}
<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden mb-space-md">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider select-none">
<th className="py-3.5 px-4 w-10 text-center">
<input className="w-4 h-4 rounded text-secondary focus:ring-0 focus:ring-offset-0 cursor-pointer accent-secondary" type="checkbox"/>
</th>
<th className="py-3.5 px-4 min-w-[280px]">Discovered URL &amp; Architecture</th>
<th className="py-3.5 px-3 min-w-[130px]">Status &amp; Index</th>
<th className="py-3.5 px-3 min-w-[140px]">Page Health</th>
<th className="py-3.5 px-3 min-w-[150px]">Est. Monthly Visits</th>
<th className="py-3.5 px-3 min-w-[140px]">Search Console</th>
<th className="py-3.5 px-3 text-center min-w-[90px]">Internal Links</th>
<th className="py-3.5 px-3 min-w-[100px]">CWV Status</th>
<th className="py-3.5 px-3 min-w-[120px]">Last Crawl</th>
<th className="py-3.5 px-4 text-right min-w-[120px]">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container text-body-sm text-body-sm text-on-surface">
{/* Row 1: /docs/payments/accept-a-payment */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-3.5 px-4 text-center">
<input className="w-4 h-4 rounded text-secondary cursor-pointer accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold truncate hover:text-primary transition-colors cursor-pointer">/docs/payments/accept-a-payment</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-low text-secondary font-label-xs text-label-xs font-semibold">Docs</span>
</div>
<span className="text-secondary font-label-xs text-label-xs truncate mt-0.5">H1: Accept a payment online | Canonical: self</span>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1 items-start">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 200 OK
                  </span>
<span className="font-label-xs text-label-xs text-secondary pl-1 font-medium">Indexed</span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-xs text-label-xs font-bold">
<span className="text-on-surface">96/100</span>
<span className="text-secondary">Grade A</span>
</div>
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{ width: "96%" }}></div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">420.4K</span>
<span className="inline-flex items-center text-secondary font-label-xs text-label-xs font-semibold gap-0.5">
<span className="material-symbols-outlined text-[13px]">arrow_upward</span> +8.4%
                  </span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">1.82M Imp</span>
<span className="text-secondary font-label-xs text-label-xs">CTR: 23.1% (Avg #1.4)</span>
</div>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-block px-2.5 py-1 rounded-lg bg-surface-container-low font-label-md text-label-md font-bold text-on-surface">
                  482
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Pass
                </span>
</td>
<td className="py-3.5 px-3">
<span className="text-secondary font-label-xs text-label-xs font-medium block">22 mins ago</span>
<span className="text-secondary/70 font-label-xs text-label-xs">HTTP/2 Render</span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="View Page Analysis">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Inspect SERP">
<span className="material-symbols-outlined text-[18px]">preview</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-primary transition-colors" title="More Options">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 2: /pricing */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-3.5 px-4 text-center">
<input className="w-4 h-4 rounded text-secondary cursor-pointer accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">payments</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold truncate hover:text-primary transition-colors cursor-pointer">/pricing</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-tertiary font-label-xs text-label-xs font-semibold">Commercial</span>
</div>
<span className="text-secondary font-label-xs text-label-xs truncate mt-0.5">H1: Stripe Pricing &amp; Fees | Intent: High Commercial</span>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1 items-start">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 200 OK
                  </span>
<span className="font-label-xs text-label-xs text-secondary pl-1 font-medium">Indexed</span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-xs text-label-xs font-bold">
<span className="text-on-surface">94/100</span>
<span className="text-secondary">Grade A</span>
</div>
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{ width: "94%" }}></div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">1.24M</span>
<span className="inline-flex items-center text-secondary font-label-xs text-label-xs font-semibold gap-0.5">
<span className="material-symbols-outlined text-[13px]">arrow_upward</span> +3.2%
                  </span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">4.62M Imp</span>
<span className="text-secondary font-label-xs text-label-xs">CTR: 26.8% (Avg #1.1)</span>
</div>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-block px-2.5 py-1 rounded-lg bg-surface-container-low font-label-md text-label-md font-bold text-on-surface">
                  1,420
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Pass
                </span>
</td>
<td className="py-3.5 px-3">
<span className="text-secondary font-label-xs text-label-xs font-medium block">1 hour ago</span>
<span className="text-secondary/70 font-label-xs text-label-xs">Chrome 122 Render</span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="View Page Analysis">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Inspect SERP">
<span className="material-symbols-outlined text-[18px]">preview</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-primary transition-colors" title="More Options">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 3: /blog/chargeback-prevention-strategies (Decay Warning) */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-3.5 px-4 text-center">
<input className="w-4 h-4 rounded text-secondary cursor-pointer accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">article</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold truncate hover:text-primary transition-colors cursor-pointer">/blog/chargeback-prevention-strategies</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Blog</span>
</div>
<span className="text-primary font-label-xs text-label-xs truncate mt-0.5 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">warning</span> Decay detected: 4 competitors passed SERP
                    </span>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1 items-start">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 200 OK
                  </span>
<span className="font-label-xs text-label-xs text-secondary pl-1 font-medium">Indexed</span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-xs text-label-xs font-bold">
<span className="text-primary font-bold">68/100</span>
<span className="text-primary">Needs Work</span>
</div>
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{ width: "68%" }}></div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">9.7K</span>
<span className="inline-flex items-center text-primary font-label-xs text-label-xs font-semibold gap-0.5">
<span className="material-symbols-outlined text-[13px]">arrow_downward</span> -34.2%
                  </span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">120.4K Imp</span>
<span className="text-secondary font-label-xs text-label-xs">CTR: 8.0% (Avg #8.2)</span>
</div>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-block px-2.5 py-1 rounded-lg bg-surface-container-low font-label-md text-label-md font-bold text-primary">
                  14
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Pass
                </span>
</td>
<td className="py-3.5 px-3">
<span className="text-secondary font-label-xs text-label-xs font-medium block">4 hours ago</span>
<span className="text-secondary/70 font-label-xs text-label-xs">Mobile Bot 2.1</span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg hover:bg-surface-container text-primary hover:text-on-surface transition-colors" title="Resolve Decay Alert">
<span className="material-symbols-outlined text-[18px]">build</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Inspect SERP">
<span className="material-symbols-outlined text-[18px]">preview</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-primary transition-colors" title="More Options">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 4: /docs/billing/quickstart */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-3.5 px-4 text-center">
<input className="w-4 h-4 rounded text-secondary cursor-pointer accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">terminal</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold truncate hover:text-primary transition-colors cursor-pointer">/docs/billing/quickstart</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-low text-secondary font-label-xs text-label-xs font-semibold">Docs</span>
</div>
<span className="text-secondary font-label-xs text-label-xs truncate mt-0.5">H1: Billing Quickstart Integration Guide</span>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1 items-start">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 200 OK
                  </span>
<span className="font-label-xs text-label-xs text-secondary pl-1 font-medium">Indexed</span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-xs text-label-xs font-bold">
<span className="text-on-surface">92/100</span>
<span className="text-secondary">Grade A</span>
</div>
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{ width: "92%" }}></div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">88.5K</span>
<span className="inline-flex items-center text-secondary font-label-xs text-label-xs font-semibold gap-0.5">
<span className="material-symbols-outlined text-[13px]">arrow_upward</span> +11.2%
                  </span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">340.0K Imp</span>
<span className="text-secondary font-label-xs text-label-xs">CTR: 26.0% (Avg #1.8)</span>
</div>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-block px-2.5 py-1 rounded-lg bg-surface-container-low font-label-md text-label-md font-bold text-on-surface">
                  184
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Pass
                </span>
</td>
<td className="py-3.5 px-3">
<span className="text-secondary font-label-xs text-label-xs font-medium block">6 hours ago</span>
<span className="text-secondary/70 font-label-xs text-label-xs">Fast Crawl</span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="View Page Analysis">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Inspect SERP">
<span className="material-symbols-outlined text-[18px]">preview</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-primary transition-colors" title="More Options">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 5: /solutions/marketplaces */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-3.5 px-4 text-center">
<input className="w-4 h-4 rounded text-secondary cursor-pointer accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">storefront</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold truncate hover:text-primary transition-colors cursor-pointer">/solutions/marketplaces</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-tertiary font-label-xs text-label-xs font-semibold">Solutions</span>
</div>
<span className="text-secondary font-label-xs text-label-xs truncate mt-0.5">H1: Payments for Multi-Sided Platforms &amp; Marketplaces</span>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1 items-start">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 200 OK
                  </span>
<span className="font-label-xs text-label-xs text-secondary pl-1 font-medium">Indexed</span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-xs text-label-xs font-bold">
<span className="text-on-surface">88/100</span>
<span className="text-secondary">Grade B+</span>
</div>
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{ width: "88%" }}></div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">64.1K</span>
<span className="inline-flex items-center text-secondary font-label-xs text-label-xs font-semibold gap-0.5">
<span className="material-symbols-outlined text-[13px]">arrow_upward</span> +4.1%
                  </span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">280.2K Imp</span>
<span className="text-secondary font-label-xs text-label-xs">CTR: 22.8% (Avg #2.3)</span>
</div>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-block px-2.5 py-1 rounded-lg bg-surface-container-low font-label-md text-label-md font-bold text-on-surface">
                  92
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Pass
                </span>
</td>
<td className="py-3.5 px-3">
<span className="text-secondary font-label-xs text-label-xs font-medium block">8 hours ago</span>
<span className="text-secondary/70 font-label-xs text-label-xs">Full Parse</span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="View Page Analysis">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Inspect SERP">
<span className="material-symbols-outlined text-[18px]">preview</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-primary transition-colors" title="More Options">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 6: /payments/checkout-session/legacy-v2 (Redirect) */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-3.5 px-4 text-center">
<input className="w-4 h-4 rounded text-secondary cursor-pointer accent-secondary" type="checkbox"/>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">alt_route</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-secondary line-through truncate cursor-pointer">/payments/checkout-session/legacy-v2</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Deprecated</span>
</div>
<span className="text-secondary font-label-xs text-label-xs truncate mt-0.5 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-secondary">arrow_forward</span> 301 Moved Permanently → /docs/payments/checkout
                    </span>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1 items-start">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 301 Redirect
                  </span>
<span className="font-label-xs text-label-xs text-secondary pl-1 font-medium">Canonicalized</span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-xs text-label-xs font-bold">
<span className="text-on-surface">74/100</span>
<span className="text-secondary">Redirected</span>
</div>
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary-container rounded-full" style={{ width: "74%" }}></div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-secondary leading-tight">1.2K</span>
<span className="inline-flex items-center text-secondary font-label-xs text-label-xs font-medium gap-0.5">
                    Preserved pass-thru
                  </span>
</div>
</td>
<td className="py-3.5 px-3">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-secondary">14.1K Imp</span>
<span className="text-secondary font-label-xs text-label-xs">Pass-through rate: 98%</span>
</div>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-block px-2.5 py-1 rounded-lg bg-surface-container-low font-label-md text-label-md font-bold text-secondary">
                  42
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold">
                  N/A
                </span>
</td>
<td className="py-3.5 px-3">
<span className="text-secondary font-label-xs text-label-xs font-medium block">1 day ago</span>
<span className="text-secondary/70 font-label-xs text-label-xs">Head Check</span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Trace Redirect Chain">
<span className="material-symbols-outlined text-[18px]">polyline</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container text-secondary hover:text-primary transition-colors" title="More Options">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* 6. Pagination & Controls Bar */}
<div className="px-space-md py-space-sm bg-surface-container-low/70 flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<span className="font-body-sm text-body-sm text-secondary">
            Showing <strong className="text-on-surface font-semibold">1</strong> to <strong className="text-on-surface font-semibold">6</strong> of <strong className="text-on-surface font-semibold">14,230</strong> discovered URLs
          </span>
<div className="flex items-center gap-1.5 font-label-xs text-label-xs text-secondary">
<span>Per page:</span>
<select className="bg-surface-container-lowest text-on-surface rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-secondary cursor-pointer">
<option>25</option>
<option>50</option>
<option>100</option>
<option>250</option>
</select>
</div>
</div>
{/* Page switcher */}
<div className="flex items-center gap-1">
<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container disabled:opacity-30 disabled:pointer-events-none" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold flex items-center justify-center shadow-sm">1</button>
<button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-secondary hover:bg-surface-container font-label-md text-label-md font-medium flex items-center justify-center transition-colors">2</button>
<button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-secondary hover:bg-surface-container font-label-md text-label-md font-medium flex items-center justify-center transition-colors">3</button>
<span className="px-1 text-secondary font-label-md">...</span>
<button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-secondary hover:bg-surface-container font-label-md text-label-md font-medium flex items-center justify-center transition-colors">2,372</button>
<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Floating Batch Drawer Context Indicator (Appears when items selected) */}
<div className="flex items-center justify-between bg-surface-container-lowest rounded-xl p-space-md shadow-md">
<div className="flex items-center gap-space-md">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">rule</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Bulk Operations Ready</span>
<span className="font-label-xs text-label-xs text-secondary">Select URLs in the fleet table to execute on-demand re-crawls, push canonical overrides, or generate LLM summaries.</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md font-medium transition-colors">
          Select All 14,230 URLs
        </button>
<button className="px-3.5 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow-sm hover:opacity-95 transition-opacity">
          Schedule Deep Audit Batch
        </button>
</div>
</div>
</div>
</div></main></div>
    </>
  );
}
