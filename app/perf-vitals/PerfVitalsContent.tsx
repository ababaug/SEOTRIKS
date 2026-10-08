import React from 'react';

export default function PerfVitalsContent() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="p-space-lg flex flex-col"><div className="flex items-center gap-space-sm mb-space-lg"><img alt="SEOTRIKS Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VPzY9qlbmJ7zE7t-JK-KgVVu4JSno0bD6-3h1gv6Op5a7m7WbP_35aZKpzDVJr2-9BNRRpeEKnCWRgJHtx0FTq_dBSVwUolwvbaA1tLsGzz0OB_VSE35p54gmuY4gKg2VJv0cK28-Wik5TX3tF8O-0eRR7_zdAsjZEos6Ap4FJLbZKAzQCERrjmG_IiBSsD8-FKPCnaZbOE9Eo9DDubH64BwOevLD44LZb6361GebUBNUI5pYL9hYmKUc"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">SEOTRIKS</span><span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Intelligence Suite</span></div></div><div className="mb-space-lg p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between shadow-[0_1px_3px_rgba(35,63,99,0.04)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-2.5 h-2.5 rounded-full bg-secondary-container ring-2 ring-secondary/20 flex-shrink-0"></div><div className="truncate"><p className="font-label-md text-label-md text-on-surface font-semibold truncate">stripe.com</p><p className="font-label-xs text-label-xs text-secondary truncate">Production Domain</p></div></div><span className="material-symbols-outlined text-secondary text-sm">unfold_more</span></div><nav className="flex flex-col gap-space-xs" data-active-classes="bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-xs pb-space-xs">CORE</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-command-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">hub</span><span className="font-label-md text-label-md">SEO Command Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="projects" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">folder_open</span><span className="font-label-md text-label-md">Projects</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="project-overview" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">analytics</span><span className="font-label-md text-label-md">Project Overview</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">AUDIT &amp; DISCOVERY</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="site-audit" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">verified_user</span><span className="font-label-md text-label-md">Site Audit</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="audit-issues" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">error_outline</span><span className="font-label-md text-label-md">Audit Issues</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-issue-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">find_in_page</span><span className="font-label-md text-label-md">SEO Issue Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-research" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">travel_explore</span><span className="font-label-md text-label-md">Keyword Research</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-manager" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">list_alt</span><span className="font-label-md text-label-md">Keyword Manager</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="rank-tracking" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">trending_up</span><span className="font-label-md text-label-md">Rank Tracking</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">insights</span><span className="font-label-md text-label-md">Keyword Details</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">INTELLIGENCE &amp; LINKS</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitors" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">group</span><span className="font-label-md text-label-md">Competitors</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitor-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">visibility</span><span className="font-label-md text-label-md">Competitor Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitor-opportunity-map" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">radar</span><span className="font-label-md text-label-md">Competitor Opportunity Map</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="backlinks" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">link</span><span className="font-label-md text-label-md">Backlinks</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="backlink-opportunities" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">link_off</span><span className="font-label-md text-label-md">Backlink Opportunities</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">CONTENT &amp; ON-PAGE</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-hub" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">library_books</span><span className="font-label-md text-label-md">Content Hub</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="ai-content-writer" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">auto_awesome</span><span className="font-label-md text-label-md">AI Content Writer</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-brief" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">description</span><span className="font-label-md text-label-md">Content Brief</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-opportunities" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">lightbulb</span><span className="font-label-md text-label-md">Content Opportunities</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="on-page-seo" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">tune</span><span className="font-label-md text-label-md">On-Page SEO</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="technical-seo" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">terminal</span><span className="font-label-md text-label-md">Technical SEO</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="site-health" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">health_and_safety</span><span className="font-label-md text-label-md">Site Health</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">DIAGNOSTICS &amp; AI</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="page-explorer" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">manage_search</span><span className="font-label-md text-label-md">Page Explorer</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-colors bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg" data-path="page-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">article</span><span className="font-label-md text-label-md">Page Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="indexing" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">schema</span><span className="font-label-md text-label-md">Indexing</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="performance-and-core-web-vitals" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">speed</span><span className="font-label-md text-label-md">Performance &amp; Core Web Vitals</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="ai-seo-assistant" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">smart_toy</span><span className="font-label-md text-label-md">AI SEO Assistant</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="recommendations" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">recommend</span><span className="font-label-md text-label-md">Recommendations</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-tasks" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">task_alt</span><span className="font-label-md text-label-md">SEO Tasks</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">MANAGEMENT</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">bar_chart</span><span className="font-label-md text-label-md">Reports</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="report-builder" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">post_add</span><span className="font-label-md text-label-md">Report Builder</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="integrations" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">integration_instructions</span><span className="font-label-md text-label-md">Integrations</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="notification-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">notifications</span><span className="font-label-md text-label-md">Notification Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="billing" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">credit_card</span><span className="font-label-md text-label-md">Billing</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="usage" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">data_usage</span><span className="font-label-md text-label-md">Usage</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="profile" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">account_circle</span><span className="font-label-md text-label-md">Profile</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">settings</span><span className="font-label-md text-label-md">Settings</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="team" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">groups</span><span className="font-label-md text-label-md">Team</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="help-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">help</span><span className="font-label-md text-label-md">Help Center</span></a></nav></div><div className="p-space-md border-t border-surface-container bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-on-secondary"><span className="material-symbols-outlined text-sm">bolt</span></div><div className="flex flex-col flex-1"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Crawl Quota</span><span className="font-label-md text-label-md text-on-surface font-semibold">48,200 / 100k URLs</span></div></div></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Health</span><span className="font-label-md text-label-md font-bold text-secondary">94/100</span><span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">A+</span></div><div className="hidden xl:flex items-center gap-space-xs text-secondary font-label-sm text-label-md"><span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span><span className="font-label-xs text-label-xs text-secondary">Crawl: Running on 42 paths</span></div></div><div className="flex items-center gap-space-md"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-base">search</span><input className="w-full pl-9 pr-12 py-1.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Search keywords, URLs, issues..." type="text"/><kbd className="absolute right-2 px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">⌘K</kbd></div><button className="flex items-center gap-1.5 px-space-sm py-2 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity"><span className="material-symbols-outlined text-[18px]">add</span><span>New Project</span></button><button className="relative p-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="flex items-center gap-space-xs pl-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvEq_gWuJ6OI_cWyB99KxlzSCH910sd9uRymPkEWgwBagbbn3fRt-5VINmP-LgsAaaJWXwIIzxKqkkZV1T6JB8gVgZ8wtnOy5gxydReR9y-N0aklNVwQDCyGyXDEHfZlIOUJlMrR1yR_plTGs0v8XP334LqCuvLXmvX3aUxbn5EEkhdC-P9CuO4Gdm4V2chZz3MyUm2zPbdYxO6PhgSNwY6_k7C5U9Xt3_mNeQL7ZzwAlB-_8sw4nY"/><span className="material-symbols-outlined text-secondary text-base">expand_more</span></div></div></header><main className="relative pt-16 w-full px-8 bg-surface"><div className="flex flex-col w-full pb-16">

<div className="flex flex-col gap-4 mb-6">

<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2 text-secondary font-label-md text-label-md">
<span>Projects</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-medium">stripe.com</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span>Technical &amp; Infrastructure</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Performance &amp; Core Web Vitals</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-secondary font-label-xs text-label-xs shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
          CrUX 28-day rolling window: <strong className="text-on-surface">Oct 12 – Nov 09</strong>
</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px] text-secondary">public</span>
          Global (p75 aggregate)
        </span>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Core Web Vitals &amp; Real-User Experience (CrUX) Radar</h1>
<p className="font-body-md text-body-md text-secondary mt-0.5">Real-user Chrome UX performance telemetry correlating loading physics with organic Google ranking volatility.</p>
</div>
<div className="flex flex-wrap items-center gap-2.5">
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">play_circle</span>
<span>Test Live URL</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md font-medium shadow-sm hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Export Lighthouse Audit</span>
</button>
<button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Deploy Edge Cache Rule</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">

<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">LCP (p75)</span>
<span className="material-symbols-outlined text-[14px] text-secondary cursor-help" title="Largest Contentful Paint measures perceived loading speed. Threshold: &lt;2.5s">info</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold uppercase">Optimal</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat text-on-surface">1.42s</span>
<span className="font-label-xs text-label-xs text-secondary">Good (&lt;2.5s)</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center text-[11px] font-semibold text-tertiary">
<span className="material-symbols-outlined text-[13px]">arrow_downward</span> 0.18s faster
          </span>
<span className="text-secondary font-label-xs text-label-xs">• 94.6% pass</span>
</div>
</div>

<div className="h-6 mt-3 w-full">
<svg className="w-full h-full text-tertiary overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<path d="M0,18 Q20,16 40,12 T70,8 T100,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0,18 Q20,16 40,12 T70,8 T100,5 L100,24 L0,24 Z" fill="currentColor" opacity="0.12"></path>
</svg>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">INP (p75)</span>
<span className="material-symbols-outlined text-[14px] text-secondary cursor-help" title="Interaction to Next Paint measures overall page responsiveness. Threshold: &lt;200ms">info</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold uppercase">Pass</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat text-on-surface">48ms</span>
<span className="font-label-xs text-label-xs text-secondary">Good (&lt;200ms)</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center text-[11px] font-semibold text-tertiary">
<span className="material-symbols-outlined text-[13px]">check_circle</span> 0 lockups
          </span>
<span className="text-secondary font-label-xs text-label-xs">• 98.2% pass</span>
</div>
</div>

<div className="h-6 mt-3 w-full">
<svg className="w-full h-full text-secondary overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<path d="M0,14 Q30,15 50,11 T80,7 T100,6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0,14 Q30,15 50,11 T80,7 T100,6 L100,24 L0,24 Z" fill="currentColor" opacity="0.12"></path>
</svg>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">CLS (p75)</span>
<span className="material-symbols-outlined text-[14px] text-secondary cursor-help" title="Cumulative Layout Shift quantifies unexpected visual shifts. Threshold: &lt;0.10">info</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold uppercase">Stable</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat text-on-surface">0.012</span>
<span className="font-label-xs text-label-xs text-secondary">Good (&lt;0.10)</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center text-[11px] font-semibold text-tertiary">
<span className="material-symbols-outlined text-[13px]">verified</span> 0 shifts
          </span>
<span className="text-secondary font-label-xs text-label-xs">• 99.1% pass</span>
</div>
</div>

<div className="h-6 mt-3 w-full">
<svg className="w-full h-full text-tertiary overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<path d="M0,8 Q25,8 50,7 T75,6 T100,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0,8 Q25,8 50,7 T75,6 T100,5 L100,24 L0,24 Z" fill="currentColor" opacity="0.12"></path>
</svg>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">FCP &amp; TTFB</span>
<span className="material-symbols-outlined text-[14px] text-secondary cursor-help" title="First Contentful Paint &amp; Time to First Byte">info</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold uppercase">Edge Hit</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat text-on-surface">0.82s</span>
<span className="font-label-xs text-label-xs text-secondary">TTFB 42ms</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center text-[11px] font-semibold text-secondary">
            Cloudflare CDN (99.8%)
          </span>
</div>
</div>

<div className="h-6 mt-3 w-full">
<svg className="w-full h-full text-secondary overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<path d="M0,16 Q35,10 65,9 T100,6" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
<path d="M0,16 Q35,10 65,9 T100,6 L100,24 L0,24 Z" fill="currentColor" opacity="0.08"></path>
</svg>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-2">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">Fleet CWV Pass</span>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-xs text-label-xs font-bold">Grade A+</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat text-on-surface">96.4%</span>
<span className="font-label-xs text-label-xs text-secondary">CrUX compliant</span>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs mt-1">
<span>Mobile: <strong className="text-on-surface">94.8%</strong></span>
<span>Desktop: <strong className="text-on-surface">98.0%</strong></span>
</div>
</div>

<div className="mt-3 flex items-center h-2 w-full rounded-full overflow-hidden bg-surface-container">
<div className="h-full bg-secondary" style={{ width: "96.4%" }}></div>
<div className="h-full bg-primary-container" style={{ width: "3.6%" }}></div>
</div>
</div>
</div>

<div className="mb-6 rounded-2xl bg-surface-container-low p-5 shadow-sm relative overflow-hidden">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 relative z-10">
<div className="flex items-start gap-3.5">
<div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[22px]">auto_awesome</span>
</div>
<div>
<div className="flex flex-wrap items-center gap-2 mb-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface">AI Performance Copilot</h2>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold uppercase">
              LCP Degradation Alert
            </span>
<span className="font-label-xs text-label-xs text-secondary">• 14 localized European pages affected</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-body-sm font-body-sm mt-2">
<div>
<span className="font-semibold text-on-surface">What happened:</span>
<p className="text-secondary mt-0.5">
                Mobile LCP on 14 localized endpoints (<code className="font-mono text-on-surface bg-surface-container-highest px-1 py-0.5 rounded">/fr/payments</code>, <code className="font-mono text-on-surface bg-surface-container-highest px-1 py-0.5 rounded">/de/payments</code>) spiked from <span className="font-semibold text-on-surface">1.6s → 2.92s</span> (p75 threshold breach).
              </p>
</div>
<div>
<span className="font-semibold text-on-surface">Root cause diagnostic:</span>
<p className="text-secondary mt-0.5">
                Uncompressed hero visual (<code className="font-mono text-on-surface bg-surface-container-highest px-1 py-0.5 rounded">banner-hero-de.webp</code>, 1.4MB) loads without <code className="font-mono text-on-surface bg-surface-container-highest px-1 py-0.5 rounded">fetchpriority="high"</code> and defers localized web font paint by 420ms.
              </p>
</div>
</div>
</div>
</div>
<div className="flex flex-row lg:flex-col items-center lg:items-end gap-2 shrink-0 w-full lg:w-auto justify-end">
<button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity whitespace-nowrap">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Deploy Edge Asset Optimization</span>
</button>
<button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-secondary font-label-md text-label-md hover:bg-surface-container transition-colors whitespace-nowrap">
<span className="material-symbols-outlined text-[16px]">troubleshoot</span>
<span>View CrUX Field Trace</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

<div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">28-Day CrUX Performance Trend &amp; Search Algorithmic Correlation</h3>
<p className="font-body-sm text-body-sm text-secondary">Percentile tracking against Google Core Algorithm updates</p>
</div>
<div className="flex items-center gap-2">
<span className="flex items-center gap-1 text-[11px] font-medium text-secondary">
<span className="w-3 h-1 bg-primary rounded-full"></span> LCP (s)
            </span>
<span className="flex items-center gap-1 text-[11px] font-medium text-secondary">
<span className="w-3 h-1 bg-secondary rounded-full"></span> INP (x10 ms)
            </span>
</div>
</div>

<div className="relative w-full h-56 mt-2">

<div className="absolute left-[54%] top-0 bottom-6 w-0.5 bg-primary-container border-dashed border-l border-primary-container z-20 flex flex-col items-center pointer-events-none">
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-xs text-[10px] font-bold uppercase tracking-wider shadow whitespace-nowrap -mt-2">
              Google Nov Core Update
            </span>
</div>
<svg className="w-full h-48 overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 160">

<line stroke="#eaeef8" strokeDasharray="3,3" strokeWidth="1" x1="0" x2="500" y1="30" y2="30"></line>
<line stroke="#eaeef8" strokeDasharray="3,3" strokeWidth="1" x1="0" x2="500" y1="70" y2="70"></line>
<line stroke="#eaeef8" strokeDasharray="3,3" strokeWidth="1" x1="0" x2="500" y1="110" y2="110"></line>
<line stroke="#eaeef8" strokeDasharray="3,3" strokeWidth="1" x1="0" x2="500" y1="150" y2="150"></line>

<rect fill="#c1e8ff" height="70" opacity="0.15" width="500" x="0" y="90"></rect>

<path d="M0,120 Q50,115 100,118 T200,122 T270,110 T350,105 T450,102 T500,98" fill="none" stroke="#456085" strokeWidth="2.5"></path>

<path d="M0,90 Q60,95 120,85 T220,80 T270,55 T320,58 T400,68 T500,62" fill="none" stroke="#aa361c" strokeWidth="3"></path>

<circle cx="270" cy="55" fill="#f26a4b" r="5" stroke="#ffffff" strokeWidth="2"></circle>
<circle cx="270" cy="110" fill="#456085" r="4" stroke="#ffffff" strokeWidth="2"></circle>
</svg>

<div className="flex justify-between items-center text-secondary font-label-xs text-label-xs pt-1 px-1">
<span>Oct 14</span>
<span>Oct 21</span>
<span>Oct 28</span>
<span className="font-bold text-primary">Nov 02 (Update)</span>
<span>Nov 06</span>
<span>Nov 09</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-secondary font-body-sm text-body-sm bg-surface-container-low p-3 rounded-xl">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">insights</span>
<span>SERP Correlation: <strong className="text-on-surface">Positive (+0.84)</strong> between LCP speed and top 3 organic ranking stability.</span>
</div>
<span className="text-tertiary font-label-md text-label-md font-semibold cursor-pointer hover:underline">Deep-Dive SERP &gt;</span>
</div>
</div>

<div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Field vs Synthetic Lab Diagnostics</h3>
<p className="font-body-sm text-body-sm text-secondary">Real chrome sessions vs Lighthouse 11 emulation run</p>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-container font-label-xs text-label-xs font-semibold text-secondary">
            Moto G Power / Apple M2
          </span>
</div>

<div className="grid grid-cols-2 gap-4 mb-4">

<div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-headline-sm font-bold shadow-sm">
                92
              </div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Mobile (Moto G)</p>
<p className="font-label-xs text-label-xs text-secondary">Throttled 4G (1.6Mbps)</p>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-[22px]">smartphone</span>
</div>

<div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary font-headline-sm font-bold shadow-sm">
                99
              </div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Desktop (Emulated)</p>
<p className="font-label-xs text-label-xs text-secondary">Unthrottled Cable (10Gbps)</p>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-[22px]">laptop_mac</span>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-md text-label-md text-on-surface font-medium">Speed Index (Synthetic)</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md font-bold text-on-surface">1.1s</span>
<span className="text-tertiary font-label-xs text-label-xs font-semibold">Fast (&lt;3.4s)</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-md text-label-md text-on-surface font-medium">Total Blocking Time (TBT)</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md font-bold text-on-surface">15ms</span>
<span className="text-tertiary font-label-xs text-label-xs font-semibold">Optimal (&lt;200ms)</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-md text-label-md text-on-surface font-medium">Resource Transfer Weight</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md font-bold text-on-surface">2.4MB</span>
<span className="text-primary font-label-xs text-label-xs font-semibold">Heavy (Images 68%)</span>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-secondary font-label-xs text-label-xs">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">update</span>
          Last lab synthetic run: Today at 04:12 UTC via Frankfurt Edge
        </span>
<button className="font-label-md text-label-md text-secondary hover:text-on-surface font-semibold flex items-center gap-1">
<span>Run Fresh Audit</span>
<span className="material-symbols-outlined text-[16px]">refresh</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-5 flex flex-col">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-2">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Fleet Page Performance &amp; Vital Degradation Roster</h3>
<p className="font-body-sm text-body-sm text-secondary">Identified template URLs sorted by Real-User CWV thresholds and traffic leverage.</p>
</div>

<div className="flex items-center p-1 bg-surface-container rounded-xl">
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-bold shadow-sm transition-all flex items-center gap-1.5">
<span>Needs Improvement / Poor</span>
<span className="px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary text-[10px] font-bold">18</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md font-medium transition-all flex items-center gap-1.5">
<span>Passing - High Traffic</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-secondary text-[10px] font-bold">142</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md font-medium transition-all flex items-center gap-1.5">
<span>All Tested URLs</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-secondary text-[10px] font-bold">842</span>
</button>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-surface-container-low rounded-xl mb-4">
<div className="flex items-center gap-2">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-2.5 text-secondary text-[18px]">search</span>
<input className="pl-8 pr-3 py-1.5 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Filter by URL path or CSS culprit..." type="text"/>
</div>
<select className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-secondary focus:outline-none">
<option>All Templates (Marketing, Docs, Checkout)</option>
<option>Marketing Sub-paths</option>
<option>Localized / International</option>
<option>Developer Documentation</option>
</select>
<select className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-secondary focus:outline-none">
<option>Failure Metric: Any</option>
<option>LCP &gt; 2.5s</option>
<option>INP &gt; 200ms</option>
<option>CLS &gt; 0.1</option>
</select>
</div>
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary">Showing 1-5 of 18 critical paths</span>
<button className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold hover:opacity-95 transition-opacity">
          Bulk CDN Auto-Fix
        </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low font-label-xs text-label-xs text-secondary uppercase tracking-wider rounded-lg">
<th className="p-3 pl-4 rounded-l-lg">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</th>
<th className="p-3">URL Path &amp; Template Group</th>
<th className="p-3">CrUX Passing %</th>
<th className="p-3">LCP &amp; Culprit Element</th>
<th className="p-3">INP (p75)</th>
<th className="p-3">CLS (p75)</th>
<th className="p-3">Organic Mo. Traffic</th>
<th className="p-3 pr-4 rounded-r-lg text-right">Instant Action</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md divide-y divide-surface-container">

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="p-3 pl-4">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="p-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">warning</span>
<div>
<a className="font-semibold text-on-surface hover:text-primary transition-colors flex items-center gap-1" href="#">
                    /de/payments
                    <span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-label-xs text-label-xs text-secondary">Localized Marketing • Template: landing.localized</span>
</div>
</div>
</td>
<td className="p-3">
<div className="flex items-center gap-2">
<div className="w-10 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary-container h-full" style={{ width: "74%" }}></div>
</div>
<span className="font-label-md text-label-md font-bold text-primary">74%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Needs Work</span>
</td>
<td className="p-3">
<div className="font-semibold text-primary">2.92s (Poor)</div>
<code className="font-mono text-xs text-secondary bg-surface-container px-1 py-0.5 rounded truncate max-w-[190px] inline-block">
                &lt;img.hero-banner-de&gt;
              </code>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">52ms</div>
<span className="font-label-xs text-label-xs text-tertiary">Optimal</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">0.02</div>
<span className="font-label-xs text-label-xs text-tertiary">Stable</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">180k</div>
<span className="font-label-xs text-label-xs text-secondary">Tier 1 Target</span>
</td>
<td className="p-3 pr-4 text-right">
<button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:opacity-95 shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">image</span>
<span>Optimize Image via CDN</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="p-3 pl-4">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="p-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">warning</span>
<div>
<a className="font-semibold text-on-surface hover:text-primary transition-colors flex items-center gap-1" href="#">
                    /fr/payments
                    <span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-label-xs text-label-xs text-secondary">Localized Marketing • Template: landing.localized</span>
</div>
</div>
</td>
<td className="p-3">
<div className="flex items-center gap-2">
<div className="w-10 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary-container h-full" style={{ width: "78%" }}></div>
</div>
<span className="font-label-md text-label-md font-bold text-primary">78%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Needs Work</span>
</td>
<td className="p-3">
<div className="font-semibold text-primary">2.74s (Poor)</div>
<code className="font-mono text-xs text-secondary bg-surface-container px-1 py-0.5 rounded truncate max-w-[190px] inline-block">
                &lt;img.hero-banner-fr&gt;
              </code>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">44ms</div>
<span className="font-label-xs text-label-xs text-tertiary">Optimal</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">0.01</div>
<span className="font-label-xs text-label-xs text-tertiary">Stable</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">145k</div>
<span className="font-label-xs text-label-xs text-secondary">Tier 1 Target</span>
</td>
<td className="p-3 pr-4 text-right">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md font-semibold hover:bg-surface-container shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">code</span>
<span>Inline Critical CSS</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="p-3 pl-4">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="p-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">timer</span>
<div>
<a className="font-semibold text-on-surface hover:text-primary transition-colors flex items-center gap-1" href="#">
                    /checkout/hosted
                    <span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-label-xs text-label-xs text-secondary">Application Engine • Template: checkout.v4</span>
</div>
</div>
</td>
<td className="p-3">
<div className="flex items-center gap-2">
<div className="w-10 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary-container h-full" style={{ width: "82%" }}></div>
</div>
<span className="font-label-md text-label-md font-bold text-secondary">82%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Marginal</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">1.25s (Good)</div>
<code className="font-mono text-xs text-secondary bg-surface-container px-1 py-0.5 rounded truncate max-w-[190px] inline-block">
                &lt;div.wallet-box&gt;
              </code>
</td>
<td className="p-3">
<div className="font-semibold text-primary">192ms</div>
<code className="font-mono text-xs text-secondary bg-surface-container px-1 py-0.5 rounded truncate max-w-[190px] inline-block">
                button.submit-pay
              </code>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">0.03</div>
<span className="font-label-xs text-label-xs text-tertiary">Stable</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">1.2M</div>
<span className="font-label-xs text-label-xs text-secondary">Checkout Flow</span>
</td>
<td className="p-3 pr-4 text-right">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md font-semibold hover:bg-surface-container shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">troubleshoot</span>
<span>Inspect Waterfall</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="p-3 pl-4">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="p-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">swap_vert</span>
<div>
<a className="font-semibold text-on-surface hover:text-primary transition-colors flex items-center gap-1" href="#">
                    /pricing
                    <span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-label-xs text-label-xs text-secondary">High Conversion • Template: pricing.matrix</span>
</div>
</div>
</td>
<td className="p-3">
<div className="flex items-center gap-2">
<div className="w-10 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary-container h-full" style={{ width: "86%" }}></div>
</div>
<span className="font-label-md text-label-md font-bold text-secondary">86%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Passing</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">1.34s (Good)</div>
<code className="font-mono text-xs text-secondary bg-surface-container px-1 py-0.5 rounded truncate max-w-[190px] inline-block">
                &lt;h1.tier-heading&gt;
              </code>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">36ms</div>
<span className="font-label-xs text-label-xs text-tertiary">Optimal</span>
</td>
<td className="p-3">
<div className="font-semibold text-primary">0.082</div>
<span className="font-label-xs text-label-xs text-secondary">Currency pill shift</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">820k</div>
<span className="font-label-xs text-label-xs text-secondary">Commercial Core</span>
</td>
<td className="p-3 pr-4 text-right">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md font-semibold hover:bg-surface-container shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">aspect_ratio</span>
<span>Lock Aspect Ratio</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="p-3 pl-4">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="p-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
<div>
<a className="font-semibold text-on-surface hover:text-primary transition-colors flex items-center gap-1" href="#">
                    /docs/billing/quickstart
                    <span className="material-symbols-outlined text-[14px] text-secondary">open_in_new</span>
</a>
<span className="font-label-xs text-label-xs text-secondary">Dev Documentation • Template: markdown.renderer</span>
</div>
</div>
</td>
<td className="p-3">
<div className="flex items-center gap-2">
<div className="w-10 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary h-full" style={{ width: "98%" }}></div>
</div>
<span className="font-label-md text-label-md font-bold text-tertiary">98%</span>
</div>
<span className="font-label-xs text-label-xs text-tertiary">Good</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">0.95s (Good)</div>
<code className="font-mono text-xs text-secondary bg-surface-container px-1 py-0.5 rounded truncate max-w-[190px] inline-block">
                &lt;div.doc-header&gt;
              </code>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">24ms</div>
<span className="font-label-xs text-label-xs text-tertiary">Optimal</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">0.001</div>
<span className="font-label-xs text-label-xs text-tertiary">Stable</span>
</td>
<td className="p-3">
<div className="font-semibold text-on-surface">310k</div>
<span className="font-label-xs text-label-xs text-secondary">Organic Index</span>
</td>
<td className="p-3 pr-4 text-right">
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-secondary font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>View Trace</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-surface-container mt-4 text-secondary font-label-xs text-label-xs">
<div className="flex items-center gap-2">
<span>Rows per page:</span>
<select className="bg-surface-container rounded px-2 py-1 text-on-surface focus:outline-none">
<option>5</option>
<option>25</option>
<option>50</option>
<option>100</option>
</select>
<span>Displaying 1 - 5 of 18 priority issues</span>
</div>
<div className="flex items-center gap-1">
<button className="p-1 rounded hover:bg-surface-container text-secondary disabled:opacity-30" disabled>
<span className="material-symbols-outlined text-[18px]">keyboard_double_arrow_left</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary disabled:opacity-30" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<span className="px-2 py-0.5 rounded bg-secondary text-on-secondary font-bold">1</span>
<button className="px-2 py-0.5 rounded hover:bg-surface-container text-on-surface">2</button>
<button className="px-2 py-0.5 rounded hover:bg-surface-container text-on-surface">3</button>
<button className="px-2 py-0.5 rounded hover:bg-surface-container text-on-surface">4</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-secondary">
<span className="material-symbols-outlined text-[18px]">keyboard_double_arrow_right</span>
</button>
</div>
</div>
</div>
</div></main></div>
    </>
  );
}
