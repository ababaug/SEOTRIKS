"use client";
export function SeoTasksContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full pb-16">
{/*  BREADCRUMBS  */}
<div className="flex items-center gap-space-xs text-secondary mb-space-sm pt-space-xs">
<a className="font-label-sm text-secondary hover:text-on-surface transition-colors" href="#">Projects</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-label-sm font-semibold text-secondary">stripe.com</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-label-sm text-secondary">Intelligence &amp; Workflows</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-label-sm font-semibold text-primary">SEO Tasks &amp; Sprint Board</span>
</div>
{/*  HEADER  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">SEO Execution Board &amp; Sprint Tracker</h1>
<p className="font-body-md text-body-md text-secondary mt-1 max-w-4xl">
        Operationalize algorithmic recommendations, assign tasks across engineering, content, and growth squads, and track rank attribution upon deployment.
      </p>
</div>
<div className="flex items-center gap-space-sm flex-wrap self-start lg:self-center">
<div className="flex items-center gap-1.5 px-space-sm py-2 bg-surface-container-lowest rounded-lg shadow-sm text-secondary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px] text-tertiary">calendar_month</span>
<span className="font-semibold text-on-surface">Sprint 42</span>
<span className="text-secondary opacity-75">(Apr 1 - Apr 15)</span>
<span className="material-symbols-outlined text-[16px] ml-1">expand_more</span>
</div>
<button className="flex items-center gap-1.5 px-space-sm py-2 bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-colors">
<span className="material-symbols-outlined text-[18px] text-secondary">sync_alt</span>
<span>Sync Jira / Linear</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Create SEO Task</span>
</button>
</div>
</div>
{/*  SPRINT VELOCITY & PROGRESS STATS  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
{/*  Stat 1: Sprint Completion  */}
<div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md text-secondary uppercase font-semibold tracking-wider">Sprint Completion</span>
<span className="font-label-xs text-label-xs font-bold px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed">ON TRACK</span>
</div>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">87.5%</span>
<span className="font-label-md text-label-md text-secondary">42 of 48 closed</span>
</div>
</div>
<div className="mt-space-md">
<div className="w-full bg-surface-container-low rounded-full h-2 overflow-hidden flex">
<div className="bg-primary-container h-full rounded-full" ></div>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-2 flex items-center justify-between">
<span>6 remaining in progress</span>
<span className="font-semibold text-tertiary">3 days to cutoff</span>
</p>
</div>
</div>
{/*  Stat 2: Verified Uplift  */}
<div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md text-secondary uppercase font-semibold tracking-wider">Attributed Uplift</span>
<span className="flex items-center text-tertiary font-label-xs text-label-xs font-bold bg-tertiary-fixed/40 px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>+18.4%
          </span>
</div>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">+38.4K</span>
<span className="font-label-md text-label-md text-secondary">visits / mo</span>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-body-sm text-body-sm text-secondary">Past 2 sprints attribution</span>
</div>
<svg className="h-6 w-20 text-tertiary" fill="none" viewBox="0 0 80 24">
<path d="M0 20L15 17L30 19L45 11L60 14L75 4L80 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
{/*  Stat 3: High Severity Tasks  */}
<div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md text-secondary uppercase font-semibold tracking-wider">Blockers &amp; High Sev</span>
<span className="font-label-xs text-label-xs font-bold px-2 py-0.5 rounded-full bg-error-container text-on-error-container">P0 / P1 RISK</span>
</div>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-metric-stat text-metric-stat text-primary-container">2</span>
<span className="font-label-md text-label-md text-secondary">Tasks Remaining</span>
</div>
</div>
<div className="mt-space-sm flex flex-col gap-1">
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>1 Robots.txt / Canonical</span>
<span className="font-semibold text-secondary">P0</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>1 Schema Markup Loop</span>
<span className="font-semibold text-secondary">P1</span>
</div>
</div>
</div>
{/*  Stat 4: Squad Velocity  */}
<div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md text-secondary uppercase font-semibold tracking-wider">Squad Velocity</span>
<span className="font-label-xs text-label-xs font-bold px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">+2.1 pts vs Avg</span>
</div>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">18.4</span>
<span className="font-label-md text-label-md text-secondary">pts / sprint</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between">
<div className="flex -space-x-1.5">
<img className="w-7 h-7 rounded-full object-cover ring-2 ring-surface-container-lowest" data-alt="Close up studio portrait of Elena Rostova, Senior Technical SEO Specialist at Stripe, neutral crisp background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR_yS607qVmEdcX-CuIYSkIcFKpVM4zaDCNKaHGv6VKLhGFBHQmeJNTnpgbbdvm5NBhMhmN3mDqz0pIyHZhpDBjoDAnGv_ClEx8mgjG1FVdEdzjhbh2q1Yft8_nSr9VarJxTkUch-wMqijIRBDP8xk-JyLNPZ7n-mo8MjeU7RQsPdqoqnACALNBfONnfxCxyVDlszxV9FAWG9B-Onj2O4JhZ6TOtg29baYkIg9mY2tznH1OVeQ4Irc"/>
<img className="w-7 h-7 rounded-full object-cover ring-2 ring-surface-container-lowest" data-alt="Portrait of Marcus Vance, Head of Search Content Strategy, modern tech office lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJKQJQM0eki16MMamFmZ6BLB6E3wNAc5yYxZNRFce5UrHZfMjaTu0zBXjIuqYhKOqrOkbVNjR4wZi5Moe3d655MgFowNeJ0wLLzVdL2QkPR0wevVrHQjadqIj2-vWHuln5zKEwv8Ss9msg6Maojh3oayLxr26LKXLndOiAbYlju9Dxj3FrUreM9entxmJRFjzSCprF2lqUIG1a7FxNQdcEwbTIvxHscZSA5ZHk4lvAuzmloPP37mTE"/>
<img className="w-7 h-7 rounded-full object-cover ring-2 ring-surface-container-lowest" data-alt="Portrait of Kavita Rao, Core Web Vitals Engineer, smiling against soft office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsF77p6pTQlT9D7WsshSoPoabEPjk4HlWVAgcguMwTEVf2IckyhJhIHoT0HbjFrcP-6YM6cb8KOftzVIsMeON_LU9rcq2wLO4ugxfVPMYuOK6RP8MUxCjwke98YikGMzyBPpaV6Gs3BHLNKlGVjbn18ptJQ2GM4tCAIGMEK7o3jE7lSXdiAz1MxclqRngZIY4_HwNoGzSklNzFDFiS9wsxfsp4j0iP5rZk_WKw6YPOJ0z8BVyl7MLe"/>
<div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">+4</div>
</div>
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">3 Cross-Squads</span>
</div>
</div>
</div>
{/*  CONTROLS & FILTER BAR  */}
<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md mb-space-lg">
{/*  View Switcher  */}
<div className="flex items-center bg-surface-container-low p-1 rounded-lg">
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold rounded-md shadow-sm">
<span className="material-symbols-outlined text-[18px] text-primary">view_kanban</span>
<span>Kanban Board</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-secondary hover:text-on-surface font-label-md text-label-md transition-colors">
<span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
<span>List View</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-secondary hover:text-on-surface font-label-md text-label-md transition-colors">
<span className="material-symbols-outlined text-[18px]">timeline</span>
<span>Attribution Timeline</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-secondary hover:text-on-surface font-label-md text-label-md transition-colors">
<span className="material-symbols-outlined text-[18px]">calendar_view_week</span>
<span>Calendar View</span>
</button>
</div>
{/*  Filters & Search  */}
<div className="flex items-center gap-space-sm flex-wrap xl:flex-nowrap">
<div className="flex items-center gap-1.5 px-space-sm py-1.5 bg-surface-container-low rounded-lg text-secondary font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">person</span>
<span>Assignee: <strong className="text-on-surface font-semibold">All Members</strong></span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-1.5 bg-surface-container-low rounded-lg text-secondary font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">groups</span>
<span>Squad: <strong className="text-on-surface font-semibold">All (Eng, Content, Growth)</strong></span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-1.5 bg-surface-container-low rounded-lg text-secondary font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">category</span>
<span>Pillar: <strong className="text-on-surface font-semibold">All (Tech, On-Page, Off-Page)</strong></span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
<button className="p-2 text-secondary hover:bg-surface-container-low rounded-lg transition-colors" title="Filter Preset Settings">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
</div>
</div>
{/*  KANBAN BOARD CONTAINER (4 Columns)  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md items-start">
{/*  COLUMN 1: BACKLOG & DISCOVERED  */}
<div className="flex flex-col bg-surface-container-low/70 rounded-2xl p-space-md">
<div className="flex items-center justify-between mb-space-md px-1">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-headline-sm text-headline-sm text-on-surface">Backlog &amp; Discovered</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-xs text-label-xs font-bold">14</span>
</div>
<button className="text-secondary hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">add</span></button>
</div>
<div className="flex flex-col gap-space-md">
{/*  Card 1.1: Hreflang Tags  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold bg-secondary-fixed text-on-secondary-fixed">Tech SEO</span>
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-bold bg-secondary-container/40 text-secondary">P2 Medium</span>
</div>
<h4 className="font-title text-title text-on-surface mb-2 leading-tight">Add Hreflang Tags for Spanish Locale</h4>
<p className="font-body-sm text-body-sm text-secondary mb-3">Address indexing canonical mismatches across 14 international payment directories.</p>
<div className="flex items-center justify-between pt-2 border-t border-surface-container-high">
<div className="flex items-center gap-1 font-label-xs text-label-xs font-semibold text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[12px]">trending_up</span>
<span>+4.2k uplift</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary font-medium">Est: 2h</span>
<img className="w-6 h-6 rounded-full object-cover" data-alt="Portrait of Elena Rostova, Stripe technical SEO lead" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATMoYthu1VsdUUHFVqh-gGPi1ulrfPU1xG6B0rWYIzjxS0qIwH0e81a2vDj9j42_qJCQD2_CgHEVn8v0p4dD2MDGu38n-d0dW8e_0gTUEaiw7kNchIfqLYRZ1zHrpXqt4in-PrPJSWYhHbYJEY0sjnfvhK4J6aV3h1REkan1-f2-xZhBtqeZr8hKfJln2dXOp9drqV8kygwTbqaXANZgSb5JnwYOrWp7ct9dqlHXyTHeRbNKHACKA8"/>
</div>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs mt-2 pt-1">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">tag</span>#SEO-219</span>
<span className="text-secondary opacity-70">Discovered 2d ago</span>
</div>
</div>
{/*  Card 1.2: WebP Banners  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold bg-tertiary-fixed text-on-tertiary-fixed">CWV / Perf</span>
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-bold bg-primary-fixed text-on-primary-fixed-variant">P1 High</span>
</div>
<h4 className="font-title text-title text-on-surface mb-2 leading-tight">Compress Unoptimized WebP Hero Banners</h4>
<p className="font-body-sm text-body-sm text-secondary mb-3">Fix LCP degradation on /enterprise landing pages with next-gen image serving.</p>
<div className="flex items-center justify-between pt-2 border-t border-surface-container-high">
<div className="flex items-center gap-1 font-label-xs text-label-xs font-semibold text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[12px]">trending_up</span>
<span>+8.1k uplift</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary font-medium">Est: 1h</span>
<img className="w-6 h-6 rounded-full object-cover" data-alt="Portrait photo of Kavita Rao, performance software engineer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYOBMGkBMe7wz5ndfm2JtB5eZ_mnRdLB0i04f_Eutigkg0e1jUcXM0hOpmepz3d2xtFuRF1hWpxlnoTpvyrFcMip8FkZ-iRnMHWxAhIeNYePXAQkfwvzmQWpskBCJLKYzpBYCAkJcmT6lE5Q_Tixh2feSSXKxarFvEHDASWuwBZnUhOYRhg2QAI-hwc5L8QsK8rpDnyvP-Q7iWHgDpcvyLrk3kFJpZKZ0e1V9QhgxcFI--QIHEJrj_"/>
</div>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs mt-2 pt-1">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">tag</span>#SEO-244</span>
<span className="text-secondary opacity-70">Discovered 4d ago</span>
</div>
</div>
{/*  Card 1.3: Content Opportunity  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold bg-secondary-fixed-dim text-on-secondary-fixed">Content</span>
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-bold bg-primary-fixed text-on-primary-fixed-variant">P1 High</span>
</div>
<h4 className="font-title text-title text-on-surface mb-2 leading-tight">Target Untapped Keyword: Embedded Banking API</h4>
<p className="font-body-sm text-body-sm text-secondary mb-3">High transactional intent keyword cluster, 22.4k search volume currently unranked.</p>
<div className="flex items-center justify-between pt-2 border-t border-surface-container-high">
<div className="flex items-center gap-1 font-label-xs text-label-xs font-semibold text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[12px]">trending_up</span>
<span>+14k uplift</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary font-medium">Est: 4h</span>
<img className="w-6 h-6 rounded-full object-cover" data-alt="Portrait of Marcus Vance, senior content strategist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxy3vYS52-TFIAh0tu7rh-M_3I_xwJI5QgiShgYHCUxCUnIlPrSVYhri0wjJSEl9B7XThsVYDdIhV1rHKXaCBWXbGRQ8XvYlMkBfZH8gaYPSOnyeto3zUhQX-gqDdDKcqT1KUbGDMUyCPLKsBGY1qULKWQ7YafwUAdzYCypWtqALS93ZAY9oGB0fQWYNE01Z3V5TGr4-mASYXCBixpHgN1Nz2rFGh-1gWNYLOsgHM1EabueZgSiOsa"/>
</div>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs mt-2 pt-1">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">tag</span>#SEO-308</span>
<span className="text-secondary opacity-70">Discovered 1w ago</span>
</div>
</div>
</div>
</div>
{/*  COLUMN 2: IN PROGRESS / IN SPRINT  */}
<div className="flex flex-col bg-surface-container-low/70 rounded-2xl p-space-md">
<div className="flex items-center justify-between mb-space-md px-1">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-headline-sm text-headline-sm text-on-surface">In Progress</span>
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary-container font-label-xs text-label-xs font-bold">6</span>
</div>
<button className="text-secondary hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<div className="flex flex-col gap-space-md">
{/*  Card 2.1: SELECTED / ACTIVE HIGHLIGHT (Robots.txt)  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(242,106,75,0.18)] cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold bg-secondary-fixed text-on-secondary-fixed">Tech SEO</span>
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-bold bg-error text-on-error flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">warning</span>P0 Critical
            </span>
</div>
<h4 className="font-title text-title text-on-surface mb-1 font-bold">ERR-CRW-104: Robots.txt Wildcard Scope Restriction</h4>
<p className="font-body-sm text-body-sm text-secondary mb-3">Disallow rule accidentally blocking new Connect API subroutes from search bots.</p>
<div className="p-2 bg-error-container/30 rounded-lg mb-3 flex items-center justify-between">
<span className="font-label-xs text-label-xs font-bold text-error flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_down</span>Impact Risk:
            </span>
<span className="font-label-xs text-label-xs font-bold text-on-error-container">$192k ARR Organic Risk</span>
</div>
<div className="flex items-center justify-between pt-2 border-t border-surface-container-high">
<div className="flex items-center gap-1 text-primary-container font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">commit</span>
<span>PR #481 Pending Review</span>
</div>
<img className="w-6 h-6 rounded-full object-cover" data-alt="Elena Rostova smiling, professional close up headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzZ9C8bvKL2JAuTIqXGFHH9oISs_vtY15m4BLLn6i90LvQ3Cy6FKX6e4Dv9zbRGVfvbtycBlN2VXeLCCDPaxlUjfidTO3DrjYblIcpIkMyH88OOGt6kKhfhRAskdHhloaBA7Hmg-wPD81iwO6vmDd3_TOQRc2W36yJruQEiLj-rZt9Yh3Pq61qJDuhbasySSJ3UTlyKDqKvinFo4PyRkedqMWV6bVFVlo3UL2rS0Xcw4oFUR7do4p3"/>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 mt-3 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" ></div>
</div>
</div>
{/*  Card 2.2: FAQPage JSON-LD  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold bg-tertiary-fixed-dim text-on-tertiary-fixed">Schema</span>
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-bold bg-primary-fixed text-on-primary-fixed-variant">P1 High</span>
</div>
<h4 className="font-title text-title text-on-surface mb-2 leading-tight">Deploy FAQPage JSON-LD on /payments/checkout</h4>
<p className="font-body-sm text-body-sm text-secondary mb-3">Inject rich snippet FAQ structured data to reclaim SERP real estate over competitors.</p>
<div className="flex items-center justify-between pt-2 border-t border-surface-container-high">
<div className="flex items-center gap-1 font-label-xs text-label-xs font-semibold text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[12px]">trending_up</span>
<span>+12k CTR Gain</span>
</div>
<div className="flex items-center gap-1 text-secondary font-label-xs text-label-xs">
<span className="material-symbols-outlined text-[14px]">terminal</span>Dev Squad A
            </div>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs mt-2 pt-1">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">alt_route</span>In Edge Staging</span>
<span className="text-tertiary font-semibold">Ready for QA</span>
</div>
</div>
{/*  Card 2.3: Decayed Guide Refresh  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold bg-secondary-fixed-dim text-on-secondary-fixed">Content</span>
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-bold bg-primary-fixed text-on-primary-fixed-variant">P1 High</span>
</div>
<h4 className="font-title text-title text-on-surface mb-2 leading-tight">Refresh Decayed Chargeback Prevention Guide</h4>
<p className="font-body-sm text-body-sm text-secondary mb-3">Historical flagship ranking slid from #2 to #8. Update 2024 dispute stats &amp; card rules.</p>
<div className="flex items-center justify-between pt-2 border-t border-surface-container-high">
<div className="flex items-center gap-1 font-label-xs text-label-xs font-semibold text-primary bg-primary-fixed/40 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[12px]">autorenew</span>
<span>-34% Decay Recov.</span>
</div>
<img className="w-6 h-6 rounded-full object-cover" data-alt="Marcus Vance portrait headshot professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqnll8SI2JQrCDEUSiedhEoAbfZlP8J6aWY_6kBI-daLG0yj7QSBGQKnRs3sqI9Lz1E2qhadtXcfepo0LRweZySvaGnUTlOt6_DVDFIXiBqW2ei-uskrynWIPua-qzfbuPbSKi1t6JjIooa9u5YcjnEmA5G4Jr0MRceU4um4kg6DUgzMux285_lM9WD3blJDvjThQMiGLMJgJJcyzFjKU83VlVWGGELdBuRQGI_kj7WKw_4kS-JT6y"/>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 mt-3 overflow-hidden">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs mt-1">
<span className="text-secondary">80% drafted in AI Writer</span>
<span>#SEO-190</span>
</div>
</div>
</div>
</div>
{/*  COLUMN 3: IN QA & VERIFICATION  */}
<div className="flex flex-col bg-surface-container-low/70 rounded-2xl p-space-md">
<div className="flex items-center justify-between mb-space-md px-1">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span className="font-headline-sm text-headline-sm text-on-surface">QA &amp; Verification</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-xs text-label-xs font-bold">4</span>
</div>
<button className="text-secondary hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<div className="flex flex-col gap-space-md">
{/*  Card 3.1: Canonical Collision Loops  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold bg-secondary-fixed text-on-secondary-fixed">Tech SEO</span>
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-bold bg-error text-on-error">P0 Urgent</span>
</div>
<h4 className="font-title text-title text-on-surface mb-2 leading-tight">Resolve 12 Canonical Collision Loops on /v3</h4>
<p className="font-body-sm text-body-sm text-secondary mb-3">Self-referencing canonical chains on API documentation resolving circular crawl paths.</p>
<div className="p-2 bg-secondary-container/20 rounded-lg mb-3 flex items-center gap-2 text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-tertiary text-[16px]">verified</span>
<span className="text-[11px] leading-tight font-medium text-on-surface">Verified in Staging Googlebot Simulator</span>
</div>
<div className="flex items-center justify-between pt-2 border-t border-surface-container-high text-secondary font-label-xs text-label-xs">
<span className="text-primary font-semibold">Awaiting Prod Merge</span>
<span>#SEO-112</span>
</div>
</div>
{/*  Card 3.2: Internal Link Equity  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold bg-tertiary-fixed text-on-tertiary-fixed">On-Page</span>
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-bold bg-primary-fixed text-on-primary-fixed-variant">P1 High</span>
</div>
<h4 className="font-title text-title text-on-surface mb-2 leading-tight">Internal Link Equity Injection: 42 Hub Links</h4>
<p className="font-body-sm text-body-sm text-secondary mb-3">Pass PageRank from high-authority home &amp; pricing portals into new Billing pages.</p>
<div className="flex items-center justify-between pt-2 border-t border-surface-container-high">
<div className="flex items-center gap-1 font-label-xs text-label-xs font-semibold text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[12px]">bolt</span>
<span>Edge Rule Tested</span>
</div>
<div className="flex items-center gap-1 text-secondary font-label-xs text-label-xs">
<span className="material-symbols-outlined text-[14px]">rule</span>98% Valid
            </div>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs mt-2 pt-1">
<span className="text-secondary">Assigned: Dev Squad B</span>
<span>#SEO-265</span>
</div>
</div>
</div>
</div>
{/*  COLUMN 4: COMPLETED & ATTRIBUTION TRACKING  */}
<div className="flex flex-col bg-surface-container-low/70 rounded-2xl p-space-md">
<div className="flex items-center justify-between mb-space-md px-1">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
<span className="font-headline-sm text-headline-sm text-on-surface">Completed &amp; Tracking</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">24</span>
</div>
<button className="text-secondary hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<div className="flex flex-col gap-space-md">
{/*  Card 4.1: Docs Images Responsive  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold bg-tertiary-fixed text-on-tertiary-fixed">Tech SEO</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold">Done 4d ago</span>
</div>
<h4 className="font-title text-title text-on-surface mb-2 leading-tight">Migrate Docs Images to Responsive Picture Tags</h4>
<p className="font-body-sm text-body-sm text-secondary mb-3">Delivered automatic srcset attributes across 3,200 developer guides.</p>
<div className="p-2 bg-tertiary-fixed/20 rounded-lg mb-2 flex items-center justify-between text-body-sm text-body-sm">
<span className="font-semibold text-tertiary text-xs">LCP Impact:</span>
<span className="font-bold text-on-surface text-xs">2.4s → 1.4s (Pass)</span>
</div>
<div className="flex items-center justify-between pt-2 border-t border-surface-container-high">
<span className="font-label-xs text-label-xs font-bold text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">query_stats</span>+4.2k clicks / mo
            </span>
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
</div>
</div>
{/*  Card 4.2: Disavow Links  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(35,63,99,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold bg-secondary-fixed text-on-secondary-fixed">Off-Page</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold">Done 8d ago</span>
</div>
<h4 className="font-title text-title text-on-surface mb-2 leading-tight">Disavow 142 Toxic PBN Referral Links</h4>
<p className="font-body-sm text-body-sm text-secondary mb-3">Submitted updated disavow file via Google Search Console after negative SEO campaign.</p>
<div className="p-2 bg-secondary-fixed/40 rounded-lg mb-2 flex items-center justify-between text-body-sm text-body-sm">
<span className="font-semibold text-secondary text-xs">Domain Authority:</span>
<span className="font-bold text-on-surface text-xs">91 → 92 Restored</span>
</div>
<div className="flex items-center justify-between pt-2 border-t border-surface-container-high">
<span className="font-label-xs text-label-xs font-semibold text-secondary">Verified by GSC Ping</span>
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
</div>
</div>
</div>
</div>
</div>
{/*  BOTTOM BAR: AUTONOMOUS EXECUTION ASSISTANT  */}
<div className="mt-space-xl p-space-md bg-surface-container-lowest rounded-2xl shadow-[0_4px_16px_rgba(35,63,99,0.06)] flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary flex-shrink-0 shadow-[0_4px_12px_rgba(242,106,75,0.3)]">
<span className="material-symbols-outlined text-[24px]">smart_toy</span>
</div>
<div>
<div className="flex items-center gap-2">
<h5 className="font-headline-sm text-headline-sm text-on-surface">Autonomous Execution Assistant</h5>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">AI SPRINT COPILOT</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">
          SEOTRIKS Bot can automatically generate branch pull requests &amp; schema markup code for 3 backlog tasks. Run auto-assign?
        </p>
</div>
</div>
<div className="flex items-center gap-space-sm w-full md:w-auto justify-end">
<button className="px-space-md py-2 bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md font-semibold rounded-lg transition-colors">
        Review Changes
      </button>
<button className="px-space-md py-2 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">play_circle</span>
<span>Run Auto-Assign &amp; PRs</span>
</button>
</div>
</div>
</div>
</main>
  )
}