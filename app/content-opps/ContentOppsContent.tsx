import React from 'react';

export default function ContentOppsContent() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="p-space-lg flex flex-col"><div className="flex items-center gap-space-sm mb-space-lg"><img alt="SEOTRIKS Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VPzY9qlbmJ7zE7t-JK-KgVVu4JSno0bD6-3h1gv6Op5a7m7WbP_35aZKpzDVJr2-9BNRRpeEKnCWRgJHtx0FTq_dBSVwUolwvbaA1tLsGzz0OB_VSE35p54gmuY4gKg2VJv0cK28-Wik5TX3tF8O-0eRR7_zdAsjZEos6Ap4FJLbZKAzQCERrjmG_IiBSsD8-FKPCnaZbOE9Eo9DDubH64BwOevLD44LZb6361GebUBNUI5pYL9hYmKUc"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">SEOTRIKS</span><span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Intelligence Suite</span></div></div><div className="mb-space-lg p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between shadow-[0_1px_3px_rgba(35,63,99,0.04)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-2.5 h-2.5 rounded-full bg-secondary-container ring-2 ring-secondary/20 flex-shrink-0"></div><div className="truncate"><p className="font-label-md text-label-md text-on-surface font-semibold truncate">stripe.com</p><p className="font-label-xs text-label-xs text-secondary truncate">Production Domain</p></div></div><span className="material-symbols-outlined text-secondary text-sm">unfold_more</span></div><nav className="flex flex-col gap-space-xs" data-active-classes="bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-xs pb-space-xs">CORE</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-command-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">hub</span><span className="font-label-md text-label-md">SEO Command Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="projects" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">folder_open</span><span className="font-label-md text-label-md">Projects</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="project-overview" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">analytics</span><span className="font-label-md text-label-md">Project Overview</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">AUDIT &amp; DISCOVERY</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="site-audit" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">verified_user</span><span className="font-label-md text-label-md">Site Audit</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="audit-issues" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">error_outline</span><span className="font-label-md text-label-md">Audit Issues</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-issue-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">find_in_page</span><span className="font-label-md text-label-md">SEO Issue Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-research" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">travel_explore</span><span className="font-label-md text-label-md">Keyword Research</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-manager" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">list_alt</span><span className="font-label-md text-label-md">Keyword Manager</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="rank-tracking" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">trending_up</span><span className="font-label-md text-label-md">Rank Tracking</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">insights</span><span className="font-label-md text-label-md">Keyword Details</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">INTELLIGENCE &amp; LINKS</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitors" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">group</span><span className="font-label-md text-label-md">Competitors</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitor-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">visibility</span><span className="font-label-md text-label-md">Competitor Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitor-opportunity-map" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">radar</span><span className="font-label-md text-label-md">Competitor Opportunity Map</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-colors bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg" data-path="backlinks" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">link</span><span className="font-label-md text-label-md">Backlinks</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="backlink-opportunities" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">link_off</span><span className="font-label-md text-label-md">Backlink Opportunities</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">CONTENT &amp; ON-PAGE</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-hub" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">library_books</span><span className="font-label-md text-label-md">Content Hub</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="ai-content-writer" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">auto_awesome</span><span className="font-label-md text-label-md">AI Content Writer</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-brief" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">description</span><span className="font-label-md text-label-md">Content Brief</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-opportunities" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">lightbulb</span><span className="font-label-md text-label-md">Content Opportunities</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="on-page-seo" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">tune</span><span className="font-label-md text-label-md">On-Page SEO</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="technical-seo" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">terminal</span><span className="font-label-md text-label-md">Technical SEO</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="site-health" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">health_and_safety</span><span className="font-label-md text-label-md">Site Health</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">DIAGNOSTICS &amp; AI</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="page-explorer" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">manage_search</span><span className="font-label-md text-label-md">Page Explorer</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="page-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">article</span><span className="font-label-md text-label-md">Page Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="indexing" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">schema</span><span className="font-label-md text-label-md">Indexing</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="performance-and-core-web-vitals" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">speed</span><span className="font-label-md text-label-md">Performance &amp; Core Web Vitals</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="ai-seo-assistant" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">smart_toy</span><span className="font-label-md text-label-md">AI SEO Assistant</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="recommendations" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">recommend</span><span className="font-label-md text-label-md">Recommendations</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-tasks" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">task_alt</span><span className="font-label-md text-label-md">SEO Tasks</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">MANAGEMENT</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">bar_chart</span><span className="font-label-md text-label-md">Reports</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="report-builder" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">post_add</span><span className="font-label-md text-label-md">Report Builder</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="integrations" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">integration_instructions</span><span className="font-label-md text-label-md">Integrations</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="notification-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">notifications</span><span className="font-label-md text-label-md">Notification Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="billing" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">credit_card</span><span className="font-label-md text-label-md">Billing</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="usage" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">data_usage</span><span className="font-label-md text-label-md">Usage</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="profile" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">account_circle</span><span className="font-label-md text-label-md">Profile</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">settings</span><span className="font-label-md text-label-md">Settings</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="team" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">groups</span><span className="font-label-md text-label-md">Team</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="help-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">help</span><span className="font-label-md text-label-md">Help Center</span></a></nav></div><div className="p-space-md border-t border-surface-container bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-on-secondary"><span className="material-symbols-outlined text-sm">bolt</span></div><div className="flex flex-col flex-1"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Crawl Quota</span><span className="font-label-md text-label-md text-on-surface font-semibold">48,200 / 100k URLs</span></div></div></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Health</span><span className="font-label-md text-label-md font-bold text-secondary">94/100</span><span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">A+</span></div><div className="hidden xl:flex items-center gap-space-xs text-secondary font-label-sm text-label-md"><span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span><span className="font-label-xs text-label-xs text-secondary">Crawl: Running on 42 paths</span></div></div><div className="flex items-center gap-space-md"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-base">search</span><input className="w-full pl-9 pr-12 py-1.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Search keywords, URLs, issues..." type="text"/><kbd className="absolute right-2 px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">⌘K</kbd></div><button className="flex items-center gap-1.5 px-space-sm py-2 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity"><span className="material-symbols-outlined text-[18px]">add</span><span>New Project</span></button><button className="relative p-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="flex items-center gap-space-xs pl-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvEq_gWuJ6OI_cWyB99KxlzSCH910sd9uRymPkEWgwBagbbn3fRt-5VINmP-LgsAaaJWXwIIzxKqkkZV1T6JB8gVgZ8wtnOy5gxydReR9y-N0aklNVwQDCyGyXDEHfZlIOUJlMrR1yR_plTGs0v8XP334LqCuvLXmvX3aUxbn5EEkhdC-P9CuO4Gdm4V2chZz3MyUm2zPbdYxO6PhgSNwY6_k7C5U9Xt3_mNeQL7ZzwAlB-_8sw4nY"/><span className="material-symbols-outlined text-secondary text-base">expand_more</span></div></div></header><main className="relative pt-16 w-full px-8 bg-surface"><div className="flex flex-col w-full pb-16">

<div className="flex flex-col gap-space-xs py-space-md">
<div className="flex items-center gap-2 text-secondary">
<span className="font-label-md text-label-md">Projects</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">stripe.com</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="font-label-md text-label-md">Content &amp; On-Page</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="font-label-md text-label-md font-bold text-primary-container">Content Opportunities</span>
</div>
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pt-space-xs">
<div>
<div className="flex items-center gap-space-sm mb-1">
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Content Opportunities &amp; Decay Radar</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-xs">auto_awesome</span>
            AI Radar Active
          </span>
</div>
<p className="font-body-md text-body-md text-secondary max-w-4xl">
          Algorithmic discovery of high-converting topic gaps, traffic decay risks, cannibalization conflicts, and quick-win keyword expansions.
        </p>
</div>

<div className="flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary">
<span className="material-symbols-outlined text-sm text-secondary">history</span>
<span className="font-label-xs text-label-xs">Last crawl analyzed 41 minutes ago</span>
</div>
</div>
</div>

<div className="my-space-md p-space-md bg-surface-container-low rounded-xl shadow-sm flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">

<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface text-label-sm shadow-sm cursor-pointer hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm text-secondary">language</span>
<span className="font-label-xs text-label-xs text-secondary uppercase font-bold">Scope:</span>
<span className="font-label-md text-label-md font-semibold">stripe.com</span>
<span className="material-symbols-outlined text-sm text-secondary">expand_more</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface text-label-sm shadow-sm cursor-pointer hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm text-secondary">tune</span>
<span className="font-label-xs text-label-xs text-secondary uppercase font-bold">Type:</span>
<span className="font-label-md text-label-md font-semibold">All Types (48)</span>
<span className="material-symbols-outlined text-sm text-secondary">expand_more</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface text-label-sm shadow-sm cursor-pointer hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm text-secondary">trending_up</span>
<span className="font-label-xs text-label-xs text-secondary uppercase font-bold">Impact:</span>
<span className="font-label-md text-label-md font-semibold">&gt; 1,000 / mo</span>
<span className="material-symbols-outlined text-sm text-secondary">expand_more</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
<span>High Priority Only</span>
<span className="material-symbols-outlined text-xs cursor-pointer">close</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-sm">
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md font-semibold shadow-sm hover:bg-surface-container hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-base">download</span>
<span>Export Strategy CSV</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow-sm hover:opacity-95 transition-opacity">
<span className="material-symbols-outlined text-base">add_circle</span>
<span>Create Rule</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-base">auto_awesome</span>
<span>Batch Generate AI Briefs (4)</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-lg mb-space-xl">

<div className="relative overflow-hidden p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Content Decay Urgency</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-extrabold tracking-tight">14</span>
<span className="font-label-md text-label-md text-secondary font-medium">URLs decaying</span>
</div>
</div>
<div className="p-2 rounded-xl bg-error-container text-on-error-container">
<span className="material-symbols-outlined text-xl">trending_down</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-3">
<span className="font-semibold text-error">22,400</span> monthly visits at risk across knowledge base &amp; blog guides.
      </p>
<div className="mt-4 pt-3 flex items-center justify-between text-secondary">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">
          High Criticality
        </span>

<svg className="w-24 h-6 text-error" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 96 24">
<path d="M0 4 Q20 6 40 10 T80 18 L96 22" strokeLinecap="round"></path>
</svg>
</div>
</div>

<div className="relative overflow-hidden p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Competitor Keyword Gaps</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-extrabold tracking-tight">184</span>
<span className="font-label-md text-label-md text-secondary font-medium">untapped topics</span>
</div>
</div>
<div className="p-2 rounded-xl bg-secondary-fixed text-on-secondary-fixed">
<span className="material-symbols-outlined text-xl">radar</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-3">
<span className="font-semibold text-on-surface">168,000</span> total monthly search volume unaddressed vs Adyen &amp; Brex.
      </p>
<div className="mt-4 pt-3 flex items-center justify-between text-secondary">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">
          +32 New This Month
        </span>

<svg className="w-24 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 96 24">
<path d="M0 20 Q30 18 50 12 T85 6 L96 3" strokeLinecap="round"></path>
</svg>
</div>
</div>

<div className="relative overflow-hidden p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Keyword Cannibalization</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-extrabold tracking-tight">6</span>
<span className="font-label-md text-label-md text-secondary font-medium">URL collisions</span>
</div>
</div>
<div className="p-2 rounded-xl bg-primary-fixed text-on-primary-fixed">
<span className="material-symbols-outlined text-xl">merge_type</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-3">
        Multiple internal URLs competing for identical transactional commercial intent.
      </p>
<div className="mt-4 pt-3 flex items-center justify-between text-secondary">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed-dim text-on-primary-fixed-variant font-label-xs text-label-xs font-bold">
          Rank Dilution
        </span>
<svg className="w-24 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 96 24">
<path d="M0 8 L35 14 L65 8 L96 16" strokeLinecap="round"></path>
</svg>
</div>
</div>

<div className="relative overflow-hidden p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Quick-Win Expansions</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface font-extrabold tracking-tight">28</span>
<span className="font-label-md text-label-md text-secondary font-medium">strike-zone pages</span>
</div>
</div>
<div className="p-2 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed">
<span className="material-symbols-outlined text-xl">rocket_launch</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-3">
        Ranked in striking range <span className="font-semibold text-on-surface">#4–#10</span> requiring lightweight technical/content updates.
      </p>
<div className="mt-4 pt-3 flex items-center justify-between text-secondary">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-xs text-label-xs font-bold">
          +41,200 Potential
        </span>
<svg className="w-24 h-6 text-tertiary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 96 24">
<path d="M0 18 Q30 16 60 8 L96 2" strokeLinecap="round"></path>
</svg>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">Priority Action Matrix</h2>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-xs text-label-xs font-bold">
        Showing Top 4 Algorithmic Matches
      </span>
</div>

<div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl">
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest shadow-sm text-on-surface font-label-xs text-label-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">grid_view</span>
<span>Expanded View</span>
</button>
<button className="px-3 py-1 rounded-lg text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-sm">table_rows</span>
<span>Compact Table</span>
</button>
</div>
</div>

<div className="flex flex-col gap-space-lg">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-lg">

<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-xs">trending_down</span>
              Traffic Decay Alert • -34% in 60d
            </span>
<span className="font-label-xs text-label-xs text-secondary font-medium uppercase tracking-wider">Historical Peak: 14,800/mo → Current: 9,760/mo</span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary text-lg">link</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">/blog/chargeback-prevention-strategies</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-md p-space-md rounded-xl bg-surface-container-low">
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider block mb-1">Algorithmic Cause Diagnosis</span>
<p className="font-body-sm text-body-sm text-on-surface">
                Google Core Update favored pages with updated <strong className="font-semibold text-on-surface">2025 Visa &amp; Mastercard arbitration rulebooks</strong>. Competitors added dispute timeline infographics.
              </p>
</div>
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider block mb-1">Recommended Optimization</span>
<p className="font-body-sm text-body-sm text-on-surface">
                Refresh content with updated dispute response timelines and add downloadable checklist to reclaim top 3 SERP position.
              </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row xl:flex-col items-start xl:items-end justify-between gap-space-md min-w-[280px]">
<div className="flex items-center gap-space-lg">
<div className="text-left xl:text-right">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Recoverable Traffic</span>
<p className="font-metric-stat text-metric-stat font-bold text-primary-container">+5,040 <span className="font-label-sm text-label-md text-secondary">/mo</span></p>
</div>
<div className="text-left xl:text-right">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Opportunity Score</span>
<p className="font-metric-stat text-metric-stat font-bold text-on-surface">94<span className="font-label-sm text-label-md text-secondary">/100</span></p>
</div>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto xl:w-full justify-end">
<button className="px-3.5 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">troubleshoot</span>
<span>Inspect SERP Delta</span>
</button>
<button className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-sm">auto_awesome</span>
<span>Create Refresh Brief</span>
</button>
</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
<div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-lg">

<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-xs">call_split</span>
              Cannibalization Conflict • 2 Pages Colliding
            </span>
<span className="font-label-xs text-label-xs text-secondary font-medium">Target Intent: "stripe checkout api integration" (12,100 searches/mo)</span>
</div>
<div className="flex flex-col gap-1.5 my-2">
<div className="flex items-center gap-2 text-on-surface">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-bold">PAGE A</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">/docs/payments/checkout</span>
<span className="font-label-xs text-label-xs text-secondary">(SERP #6)</span>
</div>
<div className="flex items-center gap-2 text-on-surface">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-bold">PAGE B</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">/payments/checkout-session</span>
<span className="font-label-xs text-label-xs text-secondary">(SERP #9)</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-md p-space-md rounded-xl bg-surface-container-low">
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider block mb-1">What Happened</span>
<p className="font-body-sm text-body-sm text-on-surface">
                Search engines split PageRank between developer documentation and commercial product landing page, dropping overall rank from <strong className="font-semibold text-error">#2 to #6</strong>.
              </p>
</div>
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider block mb-1">Recommended Fix</span>
<p className="font-body-sm text-body-sm text-on-surface">
                Consolidate canonical tag to <code className="text-xs px-1.5 py-0.5 bg-surface-container rounded font-mono text-on-surface">/docs/</code> or re-scope commercial intent on marketing page.
              </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row xl:flex-col items-start xl:items-end justify-between gap-space-md min-w-[280px]">
<div className="flex items-center gap-space-lg">
<div className="text-left xl:text-right">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Projected Traffic Delta</span>
<p className="font-metric-stat text-metric-stat font-bold text-secondary">+3,900 <span className="font-label-sm text-label-md text-secondary">/mo</span></p>
</div>
<div className="text-left xl:text-right">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Priority</span>
<p className="font-metric-stat text-metric-stat font-bold text-on-surface">High</p>
</div>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto xl:w-full justify-end">
<button className="px-3.5 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">compare</span>
<span>Compare Headings</span>
</button>
<button className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-sm">published_with_changes</span>
<span>Auto-Fix Canonical</span>
</button>
</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"></div>
<div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-lg">

<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-xs">bolt</span>
              Quick Win • Rank #5 → Est. Rank #2
            </span>
<span className="font-label-xs text-label-xs text-secondary font-medium">KD: 52 (Moderate) • Global Search Volume: 18,400</span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary text-lg">flag</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">/solutions/marketplace-payments</h3>
<span className="font-label-sm text-label-md text-secondary">Target: "marketplace payment solutions"</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-md p-space-md rounded-xl bg-surface-container-low">
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider block mb-1">Competitor SERP Gap</span>
<p className="font-body-sm text-body-sm text-on-surface">
                Competitors ranking #1-#3 feature visual architecture diagrams, multi-currency processing tables, and comparison fee calculators.
              </p>
</div>
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider block mb-1">Immediate Action</span>
<p className="font-body-sm text-body-sm text-on-surface">
                Add interactive fee calculator component and update H2 subheadings with transactional buyer/seller payout schema.
              </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row xl:flex-col items-start xl:items-end justify-between gap-space-md min-w-[280px]">
<div className="flex items-center gap-space-lg">
<div className="text-left xl:text-right">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Estimated Uplift</span>
<p className="font-metric-stat text-metric-stat font-bold text-on-surface">+6,800 <span className="font-label-sm text-label-md text-secondary">clicks</span></p>
</div>
<div className="text-left xl:text-right">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Effort Level</span>
<p className="font-metric-stat text-metric-stat font-bold text-secondary">Low</p>
</div>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto xl:w-full justify-end">
<button className="px-3.5 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">visibility</span>
<span>SERP Preview</span>
</button>
<button className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-sm">auto_awesome</span>
<span>Generate in AI Writer</span>
</button>
</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-lg">

<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-xs">new_label</span>
              Untapped Topic Cluster • Zero Domain Presence
            </span>
<span className="font-label-xs text-label-xs text-secondary font-medium">Cluster Volume: 42,000/mo • Intent: Commercial High-Conversion</span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary-container text-lg">stars</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">Topic: "B2B Virtual Corporate Cards API"</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-md p-space-md rounded-xl bg-surface-container-low">
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider block mb-1">Competitive Landscape</span>
<p className="font-body-sm text-body-sm text-on-surface">
<strong className="font-semibold text-on-surface">Adyen</strong> and <strong className="font-semibold text-on-surface">Brex</strong> dominate positions #1 &amp; #2. Stripe currently lacks an indexable dedicated solutions guide or pillar hub for this term.
              </p>
</div>
<div>
<span className="font-label-xs text-label-xs font-bold text-secondary uppercase tracking-wider block mb-1">Recommended Content Architecture</span>
<p className="font-body-sm text-body-sm text-on-surface">
                Deploy 1 Pillar Landing Page + 3 Supporting Guides covering spend limits, instant issuance webhooks, and ledger reconciliation.
              </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row xl:flex-col items-start xl:items-end justify-between gap-space-md min-w-[280px]">
<div className="flex items-center gap-space-lg">
<div className="text-left xl:text-right">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Total Cluster Vol</span>
<p className="font-metric-stat text-metric-stat font-bold text-on-surface">42,000 <span className="font-label-sm text-label-md text-secondary">/mo</span></p>
</div>
<div className="text-left xl:text-right">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Pipeline Potential</span>
<p className="font-metric-stat text-metric-stat font-bold text-primary-container">$340K</p>
</div>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto xl:w-full justify-end">
<button className="px-3.5 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">hub</span>
<span>Cluster Graph</span>
</button>
<button className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-sm">auto_stories</span>
<span>Create 4-Article Cluster Brief</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-space-2xl p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Continuous Opportunity Detection Stream</h3>
<p className="font-body-sm text-body-sm text-secondary">SEOTRIKS bot crawls SERPs daily comparing historical ranking stability curves against competing domain expansions.</p>
</div>
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Listening to Google US Desktop &amp; Mobile</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-3">
<div className="p-2 rounded-lg bg-surface-container-lowest text-secondary mt-0.5">
<span className="material-symbols-outlined text-base">search_check</span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase">10:14 AM • Algorithmic Flag</span>
<p className="font-label-md text-label-md font-semibold text-on-surface">New competitor snippet detected on "global remittance fees"</p>
<span className="font-body-sm text-body-sm text-secondary">Wise.com captured Featured Snippet position previously unassigned.</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-3">
<div className="p-2 rounded-lg bg-surface-container-lowest text-secondary mt-0.5">
<span className="material-symbols-outlined text-base">warning</span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Yesterday • Decay Velocity</span>
<p className="font-label-md text-label-md font-semibold text-on-surface">/resources/chargeback-guide dropped -2 positions</p>
<span className="font-body-sm text-body-sm text-secondary">Identified content freshness factor falling below 6-month threshold.</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-3">
<div className="p-2 rounded-lg bg-surface-container-lowest text-secondary mt-0.5">
<span className="material-symbols-outlined text-base">task_alt</span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase">2 Days Ago • Resolved</span>
<p className="font-label-md text-label-md font-semibold text-on-surface">AI Brief published for "embedded lending API"</p>
<span className="font-body-sm text-body-sm text-secondary">Now ranking #8 on fresh indexing round, traffic trending +22%.</span>
</div>
</div>
</div>
</div>
</div></main></div>
    </>
  );
}
