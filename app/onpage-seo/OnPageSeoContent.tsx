"use client";
import React from 'react';

export default function OnPageSeoContent() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="p-space-lg flex flex-col"><div className="flex items-center gap-space-sm mb-space-lg"><img alt="SEOTRIKS Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VPzY9qlbmJ7zE7t-JK-KgVVu4JSno0bD6-3h1gv6Op5a7m7WbP_35aZKpzDVJr2-9BNRRpeEKnCWRgJHtx0FTq_dBSVwUolwvbaA1tLsGzz0OB_VSE35p54gmuY4gKg2VJv0cK28-Wik5TX3tF8O-0eRR7_zdAsjZEos6Ap4FJLbZKAzQCERrjmG_IiBSsD8-FKPCnaZbOE9Eo9DDubH64BwOevLD44LZb6361GebUBNUI5pYL9hYmKUc"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">SEOTRIKS</span><span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Intelligence Suite</span></div></div><div className="mb-space-lg p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between shadow-[0_1px_3px_rgba(35,63,99,0.04)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-2.5 h-2.5 rounded-full bg-secondary-container ring-2 ring-secondary/20 flex-shrink-0"></div><div className="truncate"><p className="font-label-md text-label-md text-on-surface font-semibold truncate">stripe.com</p><p className="font-label-xs text-label-xs text-secondary truncate">Production Domain</p></div></div><span className="material-symbols-outlined text-secondary text-sm">unfold_more</span></div><nav className="flex flex-col gap-space-xs" data-active-classes="bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-xs pb-space-xs">CORE</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-command-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">hub</span><span className="font-label-md text-label-md">SEO Command Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="projects" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">folder_open</span><span className="font-label-md text-label-md">Projects</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="project-overview" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">analytics</span><span className="font-label-md text-label-md">Project Overview</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">AUDIT &amp; DISCOVERY</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="site-audit" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">verified_user</span><span className="font-label-md text-label-md">Site Audit</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="audit-issues" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">error_outline</span><span className="font-label-md text-label-md">Audit Issues</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-issue-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">find_in_page</span><span className="font-label-md text-label-md">SEO Issue Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-research" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">travel_explore</span><span className="font-label-md text-label-md">Keyword Research</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-manager" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">list_alt</span><span className="font-label-md text-label-md">Keyword Manager</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="rank-tracking" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">trending_up</span><span className="font-label-md text-label-md">Rank Tracking</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="keyword-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">insights</span><span className="font-label-md text-label-md">Keyword Details</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">INTELLIGENCE &amp; LINKS</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitors" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">group</span><span className="font-label-md text-label-md">Competitors</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitor-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">visibility</span><span className="font-label-md text-label-md">Competitor Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="competitor-opportunity-map" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">radar</span><span className="font-label-md text-label-md">Competitor Opportunity Map</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="backlinks" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">link</span><span className="font-label-md text-label-md">Backlinks</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="backlink-opportunities" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">link_off</span><span className="font-label-md text-label-md">Backlink Opportunities</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">CONTENT &amp; ON-PAGE</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-hub" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">library_books</span><span className="font-label-md text-label-md">Content Hub</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="ai-content-writer" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">auto_awesome</span><span className="font-label-md text-label-md">AI Content Writer</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="content-brief" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">description</span><span className="font-label-md text-label-md">Content Brief</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-colors bg-secondary-container text-on-secondary-fixed font-semibold rounded-lg" data-path="content-opportunities" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">lightbulb</span><span className="font-label-md text-label-md">Content Opportunities</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="on-page-seo" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">tune</span><span className="font-label-md text-label-md">On-Page SEO</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="technical-seo" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">terminal</span><span className="font-label-md text-label-md">Technical SEO</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="site-health" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">health_and_safety</span><span className="font-label-md text-label-md">Site Health</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">DIAGNOSTICS &amp; AI</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="page-explorer" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">manage_search</span><span className="font-label-md text-label-md">Page Explorer</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="page-details" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">article</span><span className="font-label-md text-label-md">Page Details</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="indexing" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">schema</span><span className="font-label-md text-label-md">Indexing</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="performance-and-core-web-vitals" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">speed</span><span className="font-label-md text-label-md">Performance &amp; Core Web Vitals</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="ai-seo-assistant" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">smart_toy</span><span className="font-label-md text-label-md">AI SEO Assistant</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="recommendations" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">recommend</span><span className="font-label-md text-label-md">Recommendations</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="seo-tasks" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">task_alt</span><span className="font-label-md text-label-md">SEO Tasks</span></a><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider px-space-sm pt-space-md pb-space-xs">MANAGEMENT</span><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">bar_chart</span><span className="font-label-md text-label-md">Reports</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="report-builder" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">post_add</span><span className="font-label-md text-label-md">Report Builder</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="integrations" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">integration_instructions</span><span className="font-label-md text-label-md">Integrations</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="notification-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">notifications</span><span className="font-label-md text-label-md">Notification Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="billing" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">credit_card</span><span className="font-label-md text-label-md">Billing</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="usage" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">data_usage</span><span className="font-label-md text-label-md">Usage</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="profile" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">account_circle</span><span className="font-label-md text-label-md">Profile</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">settings</span><span className="font-label-md text-label-md">Settings</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="team" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">groups</span><span className="font-label-md text-label-md">Team</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-path="help-center" href="#"><span className="material-symbols-outlined text-[20px] text-secondary">help</span><span className="font-label-md text-label-md">Help Center</span></a></nav></div><div className="p-space-md border-t border-surface-container bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-on-secondary"><span className="material-symbols-outlined text-sm">bolt</span></div><div className="flex flex-col flex-1"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Crawl Quota</span><span className="font-label-md text-label-md text-on-surface font-semibold">48,200 / 100k URLs</span></div></div></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface"><span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Health</span><span className="font-label-md text-label-md font-bold text-secondary">94/100</span><span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">A+</span></div><div className="hidden xl:flex items-center gap-space-xs text-secondary font-label-sm text-label-md"><span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span><span className="font-label-xs text-label-xs text-secondary">Crawl: Running on 42 paths</span></div></div><div className="flex items-center gap-space-md"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-base">search</span><input className="w-full pl-9 pr-12 py-1.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Search keywords, URLs, issues..." type="text"/><kbd className="absolute right-2 px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">⌘K</kbd></div><button className="flex items-center gap-1.5 px-space-sm py-2 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity"><span className="material-symbols-outlined text-[18px]">add</span><span>New Project</span></button><button className="relative p-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="flex items-center gap-space-xs pl-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvEq_gWuJ6OI_cWyB99KxlzSCH910sd9uRymPkEWgwBagbbn3fRt-5VINmP-LgsAaaJWXwIIzxKqkkZV1T6JB8gVgZ8wtnOy5gxydReR9y-N0aklNVwQDCyGyXDEHfZlIOUJlMrR1yR_plTGs0v8XP334LqCuvLXmvX3aUxbn5EEkhdC-P9CuO4Gdm4V2chZz3MyUm2zPbdYxO6PhgSNwY6_k7C5U9Xt3_mNeQL7ZzwAlB-_8sw4nY"/><span className="material-symbols-outlined text-secondary text-base">expand_more</span></div></div></header><main className="relative pt-16 w-full px-8 bg-surface"><div className="flex flex-col w-full">
<div className="w-full pb-space-2xl flex flex-col gap-space-lg">

<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md pt-space-xs">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs font-label-md text-label-md text-secondary">
<a className="hover:text-primary-container transition-colors" href="#">Projects</a>
<span className="text-secondary/60">/</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold text-label-xs">stripe.com</span>
<span className="text-secondary/60">/</span>
<span>Content &amp; On-Page</span>
<span className="text-secondary/60">/</span>
<span className="text-on-surface font-semibold">On-Page SEO</span>
</div>
<div className="flex items-baseline gap-space-sm mt-1">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">On-Page SEO Audit &amp; Content Quality Radar</h1>
<span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold uppercase tracking-wider">Crawl v4.18 Fresh</span>
</div>
<p className="font-body-md text-body-md text-secondary max-w-4xl">
          Automated structural telemetry analyzing title microdata, meta descriptions, semantic heading trees, TF-IDF entity completeness, and topical cannibalization vectors across 842 indexed pages.
        </p>
</div>

<div className="flex flex-wrap items-center gap-space-sm self-start xl:self-center">
<button className="flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md font-semibold shadow-sm hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Export On-Page CSV</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow-sm hover:opacity-95 transition-opacity">
<span className="material-symbols-outlined text-[18px]">refresh</span>
<span>Run On-Page Crawl</span>
</button>
<button className="flex items-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(242,106,75,0.28)] hover:brightness-105 transition-all">
<span className="material-symbols-outlined text-[18px]">auto_awesome</span>
<span>Batch AI Optimize (18)</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-secondary font-medium">Content Quality Score</span>
<div className="flex items-baseline gap-space-sm">
<span className="font-metric-stat text-metric-stat text-on-surface">84.6<span className="text-sm font-normal text-secondary">/100</span></span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">Grade B+</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed/40 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[22px]">verified</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1 font-label-xs text-label-xs font-semibold text-tertiary">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+3.2 pts vs last crawl</span>
</div>
<svg className="w-24 h-8 text-tertiary" fill="none" viewBox="0 0 100 30">
<path d="M0 24 Q 20 20, 35 22 T 60 14 T 80 16 T 100 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0 24 Q 20 20, 35 22 T 60 14 T 80 16 T 100 6 L 100 30 L 0 30 Z" fill="currentColor" fill-opacity="0.08"></path>
</svg>
</div>
</div>

<div className="flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-secondary font-medium">Title &amp; Meta Issues</span>
<div className="flex items-baseline gap-space-sm">
<span className="font-metric-stat text-metric-stat text-on-surface">42</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">Needs Fix</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-error-container/40 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[22px]">warning</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 font-label-xs text-label-xs text-secondary">
<span className="font-semibold text-primary">14 Missing</span>
<span>•</span>
<span>28 Suboptimal/Truncated</span>
</div>
<div className="w-16 bg-surface-container-high rounded-full h-2 overflow-hidden flex">
<div className="bg-primary h-full" style={{ width: "33%" }}></div>
<div className="bg-primary-container h-full" style={{ width: "67%" }}></div>
</div>
</div>
</div>

<div className="flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-secondary font-medium">Thinness / Under-Optimized</span>
<div className="flex items-baseline gap-space-sm">
<span className="font-metric-stat text-metric-stat text-on-surface">18 <span className="text-sm font-normal text-secondary">URLs</span></span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">&lt; 400 Words</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">article</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary font-medium">Average Entity Breadth: <strong className="text-on-surface">62%</strong></span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs font-semibold text-secondary">High Risk</span>
</div>
</div>

<div className="flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-secondary font-medium">Keyword Cannibalization</span>
<div className="flex items-baseline gap-space-sm">
<span className="font-metric-stat text-metric-stat text-on-surface">6 <span className="text-sm font-normal text-secondary">Pairs</span></span>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-xs text-label-xs font-bold">Collision</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">call_split</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary">Top Conflict: <code className="font-semibold text-on-surface">/billing</code> vs <code className="font-semibold text-on-surface">/invoicing</code></span>
<span className="material-symbols-outlined text-secondary text-sm">open_in_new</span>
</div>
</div>
</div>

<div className="w-full rounded-2xl bg-surface-container-lowest p-space-lg shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-container/5 blur-3xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between pb-space-md border-b border-surface-container gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-[0_2px_8px_rgba(242,106,75,0.3)]">
<span className="material-symbols-outlined text-[20px]">smart_toy</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs font-bold tracking-wider uppercase text-primary-container">Algorithmic Opportunity Detected</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">Staged Crawl Analysis</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">12 High-Value Landing Pages Missing High-Impact Semantic Co-Occurrences</h2>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary font-medium">Confidence: 96.4%</span>
<button className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-sm hover:brightness-105 transition-all flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Review &amp; Deploy Entity Fix</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg pt-space-md">

<div className="flex flex-col gap-1.5 p-space-md rounded-xl bg-surface-container-low">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[18px]">info</span>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider">1. What Happened?</span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-1">
            Google November Helpful Content classifier dampened rankings on <code className="text-xs bg-surface-container px-1 py-0.5 rounded text-primary-container font-semibold">/payments/global</code> from pos #3 to #8 due to absent related ontological entities.
          </p>
<div className="flex flex-wrap gap-1 mt-2">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-semibold">Missing: PSD2</span>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-semibold">Missing: SEPA Instant</span>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-semibold">Missing: 3DS2</span>
</div>
</div>

<div className="flex flex-col gap-1.5 p-space-md rounded-xl bg-surface-container-low">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[18px]">psychology</span>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider">2. Why Did It Happen?</span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-1">
            Competitor domain <strong className="text-on-surface">adyen.com</strong> updated their payment entity schema 18 days ago, achieving 94% entity coverage while Stripe retained legacy 2022 product copy.
          </p>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs mt-3 pt-2 border-t border-surface-container">
<span>Adyen Coverage: 94%</span>
<span className="font-bold text-primary">Stripe: 68% (-26% Gap)</span>
</div>
</div>

<div className="flex flex-col gap-1.5 p-space-md rounded-xl bg-tertiary-fixed/20">
<div className="flex items-center gap-2 text-on-tertiary-container">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider">3. Recommended Action</span>
</div>
<p className="font-body-md text-body-md text-on-tertiary-container mt-1">
            Execute 1-click Semantic Enrichment to inject contextual paragraphs explaining local scheme rails into Section 3 without modifying checkout conversion UI.
          </p>
<div className="mt-2 flex items-center gap-2">
<span className="font-label-xs text-label-xs font-semibold text-tertiary">Estimated Rank Restoration: <strong className="text-on-tertiary-container">+5 Positions</strong></span>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm p-space-sm rounded-xl bg-surface-container-low">

<div className="relative flex-1 min-w-[280px]">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-secondary text-[20px]">search</span>
<input className="w-full pl-10 pr-16 py-2 rounded-lg bg-surface-container-lowest font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-container" id="urlFilterInput" placeholder="Filter 842 URLs by path, title, or target focus keyword..." type="text"/>
<span className="absolute right-3 top-2 px-1.5 py-0.5 rounded bg-surface-container font-label-xs text-label-xs text-secondary font-semibold">ESC</span>
</div>

<div className="flex items-center gap-1.5 overflow-x-auto py-1 text-nowrap">
<button className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold text-xs shadow-sm">All Pages (842)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md text-xs transition-colors">Missing Meta (42)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md text-xs transition-colors">Hierarchy Errors (26)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md text-xs transition-colors">Duplicate H1s (8)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md text-xs transition-colors">Low Word Count (18)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md text-xs transition-colors">Over-Optimized (4)</button>
</div>

<div className="flex items-center gap-space-xs">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md text-xs font-semibold shadow-sm transition-colors">
<span className="material-symbols-outlined text-[16px]">tune</span>
<span>More Filters</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md text-xs font-semibold shadow-sm">
<span className="material-symbols-outlined text-[16px]">sort</span>
<span>Sort: Impact Risk</span>
</button>
</div>
</div>

<div className="w-full rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-xs text-label-xs uppercase tracking-wider font-semibold">
<th className="py-3.5 pl-6 pr-3 w-10">
<input className="w-4 h-4 rounded bg-surface-container-lowest text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</th>
<th className="py-3.5 px-3">Page URL &amp; Live Meta Title</th>
<th className="py-3.5 px-3">Target Keyword</th>
<th className="py-3.5 px-3">Title Tag Spec</th>
<th className="py-3.5 px-3">Meta Description</th>
<th className="py-3.5 px-3">Heading Tree</th>
<th className="py-3.5 px-3">Words &amp; Entities</th>
<th className="py-3.5 px-3 text-center">SERP Health</th>
<th className="py-3.5 pr-6 pl-3 text-right">Quick AI Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-md text-body-md text-on-surface">

<tr className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer" onClick={() => {}}>
<td className="py-4 pl-6 pr-3">
<input defaultChecked className="w-4 h-4 rounded bg-surface-container-lowest text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-4 px-3 max-w-xs">
<div className="flex flex-col">
<span className="font-semibold text-on-surface font-title text-title truncate group-hover:text-primary-container transition-colors">Checkout Session API - Fast, Mobile-Ready Hosted Checkout</span>
<div className="flex items-center gap-1.5 text-xs text-secondary mt-0.5">
<span className="material-symbols-outlined text-[14px]">link</span>
<span className="font-mono text-xs truncate">/payments/checkout-session</span>
<a className="hover:text-on-surface" href="https://stripe.com/payments/checkout-session" target="_blank"><span className="material-symbols-outlined text-[13px]">launch</span></a>
</div>
</div>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
                  checkout api
                </span>
<div className="text-[11px] text-secondary mt-0.5 font-medium">Vol: 22.4k | KD: 68</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">58 chars</span>
<span className="text-xs text-secondary font-medium">Optimal</span>
</div>
</td>
<td className="py-4 px-3 max-w-[200px]">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary flex-shrink-0"></span>
<span className="truncate text-xs text-secondary font-medium" title="Accept online payments with a prebuilt, high-converting checkout page optimized for mobile and desktop.">152 chars • Present</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-1 font-label-xs text-label-xs">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold">1 H1</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary">6 H2</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary">14 H3</span>
<span className="text-tertiary material-symbols-outlined text-[16px]" title="Clean hierarchy">check_circle</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex flex-col gap-1">
<span className="font-semibold text-xs text-on-surface">2,140 words</span>
<div className="flex items-center gap-1.5">
<div className="w-16 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{ width: "88%" }}></div>
</div>
<span className="text-[11px] font-bold text-tertiary">88%</span>
</div>
</div>
</td>
<td className="py-4 px-3 text-center">
<span className="inline-flex items-center px-2 py-1 rounded-lg bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">
                  94 / 100
                </span>
</td>
<td className="py-4 pr-6 pl-3 text-right">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" title="Inspect Page Detail">
<span className="material-symbols-outlined text-[18px]">find_in_page</span>
</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold transition-colors">
                    Analyze
                  </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer bg-error-container/5" onClick={() => {}}>
<td className="py-4 pl-6 pr-3">
<input className="w-4 h-4 rounded bg-surface-container-lowest text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-4 px-3 max-w-xs">
<div className="flex flex-col">
<span className="font-semibold text-on-surface font-title text-title truncate group-hover:text-primary-container transition-colors">Subscriptions - Flexible Invoicing &amp; Billing API</span>
<div className="flex items-center gap-1.5 text-xs text-secondary mt-0.5">
<span className="material-symbols-outlined text-[14px]">link</span>
<span className="font-mono text-xs truncate">/billing/subscriptions</span>
<a className="hover:text-on-surface" href="https://stripe.com/billing/subscriptions" target="_blank"><span className="material-symbols-outlined text-[13px]">launch</span></a>
</div>
</div>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
                  recurring billing platform
                </span>
<div className="text-[11px] text-secondary mt-0.5 font-medium">Vol: 14.8k | KD: 74</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">21 chars</span>
<span className="text-xs text-primary font-semibold">Too Short</span>
</div>
</td>
<td className="py-4 px-3 max-w-[200px]">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
<span className="truncate text-xs text-primary font-semibold">Missing Tag</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-1 font-label-xs text-label-xs">
<span className="px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-bold">2 H1s</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary">3 H2</span>
<span className="text-primary material-symbols-outlined text-[16px]" title="Duplicate H1 tags">error</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex flex-col gap-1">
<span className="font-semibold text-xs text-on-surface">840 words</span>
<div className="flex items-center gap-1.5">
<div className="w-16 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{ width: "52%" }}></div>
</div>
<span className="text-[11px] font-bold text-primary">52%</span>
</div>
</div>
</td>
<td className="py-4 px-3 text-center">
<span className="inline-flex items-center px-2 py-1 rounded-lg bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">
                  61 / 100
                </span>
</td>
<td className="py-4 pr-6 pl-3 text-right">
<div className="inline-flex items-center gap-1">
<button className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary font-label-xs text-label-xs font-bold hover:brightness-105 transition-all shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
<span>AI Fix Title</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer" onClick={() => {}}>
<td className="py-4 pl-6 pr-3">
<input defaultChecked className="w-4 h-4 rounded bg-surface-container-lowest text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-4 px-3 max-w-xs">
<div className="flex flex-col">
<span className="font-semibold text-on-surface font-title text-title truncate group-hover:text-primary-container transition-colors">Express Onboarding for Marketplace Platforms</span>
<div className="flex items-center gap-1.5 text-xs text-secondary mt-0.5">
<span className="material-symbols-outlined text-[14px]">link</span>
<span className="font-mono text-xs truncate">/connect/express</span>
<a className="hover:text-on-surface" href="https://stripe.com/connect/express" target="_blank"><span className="material-symbols-outlined text-[13px]">launch</span></a>
</div>
</div>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
                  marketplace onboarding
                </span>
<div className="text-[11px] text-secondary mt-0.5 font-medium">Vol: 8.9k | KD: 54</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">54 chars</span>
<span className="text-xs text-secondary font-medium">Optimal</span>
</div>
</td>
<td className="py-4 px-3 max-w-[200px]">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary flex-shrink-0"></span>
<span className="truncate text-xs text-secondary font-medium">148 chars • Present</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-1 font-label-xs text-label-xs">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold">1 H1</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary">5 H2</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary">9 H3</span>
<span className="text-tertiary material-symbols-outlined text-[16px]">check_circle</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex flex-col gap-1">
<span className="font-semibold text-xs text-on-surface">1,720 words</span>
<div className="flex items-center gap-1.5">
<div className="w-16 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{ width: "81%" }}></div>
</div>
<span className="text-[11px] font-bold text-tertiary">81%</span>
</div>
</div>
</td>
<td className="py-4 px-3 text-center">
<span className="inline-flex items-center px-2 py-1 rounded-lg bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">
                  86 / 100
                </span>
</td>
<td className="py-4 pr-6 pl-3 text-right">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">find_in_page</span>
</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold transition-colors">
                    Inspect
                  </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer" onClick={() => {}}>
<td className="py-4 pl-6 pr-3">
<input defaultChecked className="w-4 h-4 rounded bg-surface-container-lowest text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-4 px-3 max-w-xs">
<div className="flex flex-col">
<span className="font-semibold text-on-surface font-title text-title truncate group-hover:text-primary-container transition-colors">Radar - Machine Learning Fraud Protection</span>
<div className="flex items-center gap-1.5 text-xs text-secondary mt-0.5">
<span className="material-symbols-outlined text-[14px]">link</span>
<span className="font-mono text-xs truncate">/fraud-prevention/radar</span>
<a className="hover:text-on-surface" href="https://stripe.com/fraud-prevention/radar" target="_blank"><span className="material-symbols-outlined text-[13px]">launch</span></a>
</div>
</div>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
                  ai fraud detection
                </span>
<div className="text-[11px] text-secondary mt-0.5 font-medium">Vol: 31.0k | KD: 82</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">62 chars</span>
<span className="text-xs text-secondary font-medium">Good</span>
</div>
</td>
<td className="py-4 px-3 max-w-[200px]">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary flex-shrink-0"></span>
<span className="truncate text-xs text-secondary font-medium">160 chars • Present</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-1 font-label-xs text-label-xs">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold">1 H1</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary">8 H2</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary">19 H3</span>
<span className="text-tertiary material-symbols-outlined text-[16px]">check_circle</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex flex-col gap-1">
<span className="font-semibold text-xs text-on-surface">3,180 words</span>
<div className="flex items-center gap-1.5">
<div className="w-16 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{ width: "93%" }}></div>
</div>
<span className="text-[11px] font-bold text-tertiary">93%</span>
</div>
</div>
</td>
<td className="py-4 px-3 text-center">
<span className="inline-flex items-center px-2 py-1 rounded-lg bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">
                  92 / 100
                </span>
</td>
<td className="py-4 pr-6 pl-3 text-right">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">find_in_page</span>
</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold transition-colors">
                    Inspect
                  </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer" onClick={() => {}}>
<td className="py-4 pl-6 pr-3">
<input className="w-4 h-4 rounded bg-surface-container-lowest text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-4 px-3 max-w-xs">
<div className="flex flex-col">
<span className="font-semibold text-on-surface font-title text-title truncate group-hover:text-primary-container transition-colors">Cross-Border Mass Payouts &amp; Global Treasury API</span>
<div className="flex items-center gap-1.5 text-xs text-secondary mt-0.5">
<span className="material-symbols-outlined text-[14px]">link</span>
<span className="font-mono text-xs truncate">/global-payouts</span>
<a className="hover:text-on-surface" href="https://stripe.com/global-payouts" target="_blank"><span className="material-symbols-outlined text-[13px]">launch</span></a>
</div>
</div>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
                  global mass payouts
                </span>
<div className="text-[11px] text-secondary mt-0.5 font-medium">Vol: 6.2k | KD: 61</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-xs text-label-xs font-bold">124 chars</span>
<span className="text-xs text-primary font-semibold">Truncated</span>
</div>
</td>
<td className="py-4 px-3 max-w-[200px]">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container flex-shrink-0"></span>
<span className="truncate text-xs text-secondary font-medium">194 chars • Too Long</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-1 font-label-xs text-label-xs">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold">1 H1</span>
<span className="px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-semibold">Skipped H2</span>
<span className="text-primary-container material-symbols-outlined text-[16px]" title="Jumped directly to H3">warning</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex flex-col gap-1">
<span className="font-semibold text-xs text-on-surface">1,120 words</span>
<div className="flex items-center gap-1.5">
<div className="w-16 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{ width: "64%" }}></div>
</div>
<span className="text-[11px] font-bold text-secondary">64%</span>
</div>
</div>
</td>
<td className="py-4 px-3 text-center">
<span className="inline-flex items-center px-2 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-xs text-label-xs font-bold">
                  71 / 100
                </span>
</td>
<td className="py-4 pr-6 pl-3 text-right">
<div className="inline-flex items-center gap-1">
<button className="px-2.5 py-1 rounded-lg bg-secondary text-on-secondary font-label-xs text-label-xs font-semibold hover:opacity-95 transition-opacity">
                    Optimize
                  </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between p-space-md bg-surface-container-low text-secondary font-label-sm text-label-md">
<span className="font-body-sm text-body-sm text-secondary">Showing <strong className="text-on-surface font-semibold">1 to 5</strong> of 842 crawled paths</span>
<div className="flex items-center gap-2 mt-2 sm:mt-0">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-semibold text-xs shadow-sm disabled:opacity-50" disabled>Previous</button>
<span className="px-2 py-1 rounded bg-secondary text-on-secondary font-bold text-xs">1</span>
<button className="px-2 py-1 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-semibold text-xs shadow-sm">2</button>
<button className="px-2 py-1 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-semibold text-xs shadow-sm">3</button>
<span className="px-1 text-secondary">...</span>
<button className="px-2 py-1 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-semibold text-xs shadow-sm">42</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface font-semibold text-xs shadow-sm">Next</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">

<div className="xl:col-span-7 flex flex-col p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)]">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">account_tree</span>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Heading Structure &amp; Hierarchy Inspector</h3>
<p className="font-label-xs text-label-xs text-secondary">Selected page: <span className="font-mono text-on-surface font-semibold" id="inspectorPageUrl">/payments/checkout-session</span></p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold" id="treeStatusBadge">Valid Semantic Structure</span>
</div>
</div>

<div className="mt-4 flex flex-col gap-2 font-mono text-xs">

<div className="p-3 rounded-xl bg-surface-container-low flex items-start justify-between">
<div className="flex items-start gap-2.5">
<span className="px-2 py-0.5 rounded bg-secondary text-on-secondary font-bold text-[10px]">H1</span>
<div className="flex flex-col">
<span className="font-semibold text-on-surface" id="inspectorH1Text">Accept payments online with Checkout</span>
<span className="text-[11px] text-secondary font-sans mt-0.5">Primary Target Keyword matched: <strong className="text-tertiary">100% TF-IDF density</strong></span>
</div>
</div>
<span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
</div>

<div className="ml-6 pl-4 border-l-2 border-surface-container flex flex-col gap-2">
<div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-bold text-[10px]">H2</span>
<span className="text-on-surface">Designed to convert more customers</span>
</div>
<span className="text-[10px] text-secondary font-sans">Depth 2 • 32 chars</span>
</div>

<div className="ml-6 pl-4 border-l-2 border-surface-container flex flex-col gap-1.5">
<div className="p-2 rounded bg-surface-container-lowest text-secondary flex items-center justify-between shadow-sm">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-secondary text-[9px] font-bold">H3</span>
<span className="text-on-surface">One-click checkout with Link</span>
</div>
<span className="material-symbols-outlined text-tertiary text-[14px]">done</span>
</div>
<div className="p-2 rounded bg-surface-container-lowest text-secondary flex items-center justify-between shadow-sm">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-secondary text-[9px] font-bold">H3</span>
<span className="text-on-surface">Dynamic local payment methods support</span>
</div>
<span className="material-symbols-outlined text-tertiary text-[14px]">done</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-primary-fixed/20 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-primary text-on-primary font-bold text-[10px]">H2</span>
<span className="text-on-surface font-semibold">Integrate in minutes via Prebuilt UI or embedded elements</span>
</div>
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold font-sans">Low Semantic Salience</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-bold text-[10px]">H2</span>
<span className="text-on-surface">Global compliance, SCA, and regulatory security built-in</span>
</div>
<span className="text-[10px] text-secondary font-sans">Depth 2 • 56 chars</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-secondary font-label-xs text-label-xs">
<span>Hierarchy Audit: 1 H1 Tag, 4 H2 Subheadings, 6 H3 Subheadings. Total nesting score: <strong>98/100</strong>.</span>
<button className="text-primary-container font-semibold hover:underline flex items-center gap-1">
<span>Re-evaluate Document Tree</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>

<div className="xl:col-span-5 flex flex-col p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)]">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">preview</span>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">SERP &amp; OpenGraph Simulator</h3>
<p className="font-label-xs text-label-xs text-secondary">Real-time pixel truncation simulation</p>
</div>
</div>

<div className="flex items-center p-0.5 rounded-lg bg-surface-container-low text-xs font-semibold" id="serpTabGroup">
<button className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface shadow-sm" onClick={() => {}}>Desktop</button>
<button className="px-2.5 py-1 rounded-md text-secondary hover:text-on-surface" onClick={() => {}}>Mobile</button>
<button className="px-2.5 py-1 rounded-md text-secondary hover:text-on-surface" onClick={() => {}}>Social Card</button>
</div>
</div>

<div className="mt-4 p-4 rounded-xl bg-surface-container-low flex flex-col gap-2">

<div className="flex flex-col gap-1 bg-surface-container-lowest p-4 rounded-xl shadow-sm" id="serpPreviewBox">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-fixed">S</div>
<div className="flex flex-col">
<span className="font-body-sm text-[12px] text-on-surface font-semibold leading-none">Stripe</span>
<span className="font-label-xs text-[11px] text-secondary font-mono leading-none mt-0.5">https://stripe.com › payments › checkout-session</span>
</div>
</div>
<a className="font-headline-sm text-[18px] text-secondary hover:underline leading-snug font-medium mt-1" href="#" id="serpPreviewTitle">
              Checkout Session API - Fast, Mobile-Ready Hosted Checkout | Stripe
            </a>
<p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed" id="serpPreviewSnippet">
              Accept payments online with a prebuilt, high-converting checkout page optimized for mobile, tablet, and desktop with Link, Apple Pay, and Google Pay support.
            </p>
</div>

<div className="grid grid-cols-2 gap-2 mt-2">
<div className="p-2.5 rounded-lg bg-surface-container-lowest flex flex-col">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Title Length</span>
<span className="font-label-xs text-label-xs font-bold text-tertiary" id="titleCharCount">58 / 60 Chars</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" id="titleBar" style={{ width: "96%" }}></div>
</div>
<span className="text-[10px] text-secondary mt-1 font-mono">518px / 580px max</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-lowest flex flex-col">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary uppercase font-semibold">Meta Description</span>
<span className="font-label-xs text-label-xs font-bold text-tertiary" id="metaCharCount">152 / 160 Chars</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" id="metaBar" style={{ width: "95%" }}></div>
</div>
<span className="text-[10px] text-secondary mt-1 font-mono">920px / 960px max</span>
</div>
</div>
</div>

<div className="mt-4 p-3 rounded-xl bg-primary-fixed/20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[18px]">auto_fix_high</span>
<span className="font-label-xs text-label-xs text-on-surface font-semibold">AI Generator: Rewrite for Higher CTR (+14% predicted)</span>
</div>
<button className="px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-xs text-label-xs font-bold hover:brightness-105 transition-all shadow-sm">
            Generate Variations
          </button>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </>
  );
}
