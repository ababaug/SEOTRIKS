"use client";

export function ProjectsHubContent({ projects = [] }: { projects: any[] }) {

  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full pb-16">
{/*  Top Ambient Glow Gradient Backdrop  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-24 -right-16 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -top-10 left-1/3 w-80 h-80 bg-secondary-container/25 rounded-full blur-3xl pointer-events-none"></div>
{/*  Header & Quick KPIs Zone  */}
<div className="relative flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg pt-6 pb-8">
<div className="flex flex-col gap-space-xs max-w-2xl">
<div className="flex items-center gap-space-sm">
<span className="font-label-xs text-label-xs text-primary font-bold uppercase tracking-widest bg-primary-fixed/50 px-2 py-0.5 rounded-full">WORKSPACE FLEET</span>
<span className="text-secondary font-label-xs text-label-xs">•</span>
<span className="font-label-xs text-label-xs text-secondary font-semibold">24 Tracked Entities</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Active Projects &amp; Domains</h1>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
          Monitor search graph health, algorithmic crawls, and keyword footprint shifts across managed workspaces and agency enterprise tiers.
        </p>
</div>
{/*  Action Cluster  */}
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center bg-surface-container rounded-xl p-1 shadow-sm">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold shadow-sm transition-all" id="viewGridBtn" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">grid_view</span>
<span>Grid</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md font-semibold transition-all" id="viewTableBtn" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">table_rows</span>
<span>Table</span>
</button>
</div>
<button className="flex items-center gap-2 px-space-md py-2.5 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-xl shadow-[0_4px_16px_rgba(242,106,75,0.32)] hover:opacity-95 active:scale-[0.98] transition-all" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">add_circle</span>
<span>+ Add New Project</span>
</button>
</div>
</div>
{/*  Metric Summary Ribbons  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-8">
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Indexed Domain Pool</span>
<div className="font-metric-stat text-metric-stat text-on-surface mt-1">24 <span className="font-body-sm text-body-sm text-secondary font-normal">/ 30 Max</span></div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">domain</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="font-label-xs text-label-xs text-tertiary bg-tertiary-fixed/40 px-2 py-0.5 rounded-full font-semibold">+3 domains this month</span>
<svg className="w-20 h-6 text-tertiary" fill="none" viewBox="0 0 100 30">
<path d="M0 24 Q 25 10, 50 18 T 100 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Fleet Organic Traffic</span>
<div className="font-metric-stat text-metric-stat text-on-surface mt-1">84.2M</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[20px]">trending_up</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="font-label-xs text-label-xs text-on-surface font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-primary text-[14px]">arrow_upward</span> +14.8% vs last 30d
          </span>
<svg className="w-20 h-6 text-primary-container" fill="none" viewBox="0 0 100 30">
<path d="M0 26 Q 30 22, 60 12 T 100 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Avg Fleet Health</span>
<div className="font-metric-stat text-metric-stat text-on-surface mt-1">91.4 <span className="font-body-sm text-body-sm text-secondary font-normal">Score</span></div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[20px]">health_and_safety</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-xs text-label-xs text-secondary">2 Critical alerts</span>
</div>
<div className="w-20 bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Top 10 Footprint</span>
<div className="font-metric-stat text-metric-stat text-on-surface mt-1">118,490</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[20px]">workspace_premium</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="font-label-xs text-label-xs text-tertiary bg-tertiary-fixed/40 px-2 py-0.5 rounded-full font-semibold">+1,402 positions</span>
<svg className="w-20 h-6 text-tertiary" fill="none" viewBox="0 0 100 30">
<path d="M0 20 Q 30 25, 60 10 T 100 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>
</div>
</div>
{/*  Workspace Filter, Search & Bulk Actions Bar  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm mb-6 flex flex-col gap-space-md">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
{/*  Search & Filters  */}
<div className="flex flex-wrap items-center gap-space-sm flex-1">
<div className="relative min-w-[280px] flex-1 sm:flex-initial">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-base">search</span>
<input className="w-full pl-9 pr-10 py-2 bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-container" id="projectSearchInput" onInput={() => {}} placeholder="Search projects by domain, name or tag..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-on-surface" onClick={() => {}}>
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
{/*  Workspace Select Dropdown  */}
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md px-3.5 py-2 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-container cursor-pointer" id="workspaceSelect" onChange={() => {}}>
<option value="all">All Workspaces (3)</option>
<option value="Enterprise Tier 1">Workspace: Enterprise Tier 1</option>
<option value="SaaS Growth Labs">Workspace: SaaS Growth Labs</option>
<option value="Internal Products">Workspace: Internal Products</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary text-sm pointer-events-none">expand_more</span>
</div>
{/*  Health Filter  */}
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md px-3.5 py-2 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-container cursor-pointer" id="healthSelect" onChange={() => {}}>
<option value="all">Health: All</option>
<option value="high">Health: 90+ (Optimal)</option>
<option value="medium">Health: 70-89 (Fair)</option>
<option value="low">Health: &lt; 70 (Critical)</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary text-sm pointer-events-none">tune</span>
</div>
{/*  Crawl Status Filter  */}
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md px-3.5 py-2 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-container cursor-pointer" id="statusSelect" onChange={() => {}}>
<option value="all">Status: Any</option>
<option value="Active">Active</option>
<option value="Crawling">Crawling</option>
<option value="Paused">Paused</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary text-sm pointer-events-none">sync</span>
</div>
</div>
{/*  Quick Toggles  */}
<div className="flex items-center gap-space-xs self-end lg:self-auto">
<button className="px-3 py-2 bg-surface-container text-secondary hover:text-on-surface rounded-xl font-label-md text-label-md font-medium flex items-center gap-1 transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">sort</span>
<span>Health</span>
</button>
<button className="px-3 py-2 bg-surface-container text-secondary hover:text-on-surface rounded-xl font-label-md text-label-md font-medium flex items-center gap-1 transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">arrow_downward</span>
<span>Traffic</span>
</button>
<button className="p-2 bg-surface-container text-secondary hover:text-on-surface rounded-xl transition-colors" onClick={() => {}} title="Reset Filters">
<span className="material-symbols-outlined text-[18px]">restart_alt</span>
</button>
</div>
</div>
{/*  Bulk Action Strip (Dynamically Shown when items selected)  */}
<div className="hidden flex items-center justify-between px-space-md py-2.5 bg-secondary text-on-secondary rounded-xl animate-fadeIn" id="bulkBar">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary-fixed">checklist</span>
<span className="font-label-md text-label-md font-semibold"><span id="selectedCount">0</span> Domains Selected</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-3 py-1.5 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 rounded-lg text-on-secondary font-label-md text-label-md font-medium transition-colors flex items-center gap-1" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">play_arrow</span> Re-crawl Fleet
        </button>
<button className="px-3 py-1.5 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 rounded-lg text-on-secondary font-label-md text-label-md font-medium transition-colors flex items-center gap-1" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">file_download</span> Export Combined PDF
        </button>
<button className="px-3 py-1.5 bg-error hover:opacity-90 rounded-lg text-on-error font-label-md text-label-md font-medium transition-colors flex items-center gap-1" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">delete</span> Delete Selected
        </button>
<button className="p-1 rounded text-on-secondary/70 hover:text-on-secondary" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</div>
</div>
{/*  Workspace Group 1: Enterprise Tier 1  */}
<div className="workspace-section flex flex-col gap-4 mb-8" data-workspace="Enterprise Tier 1">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Enterprise Tier 1</h2>
<span className="bg-surface-container text-secondary px-2 py-0.5 rounded-full font-label-xs text-label-xs font-semibold">2 Projects</span>
</div>
<button className="text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span>Workspace Settings</span>
<span className="material-symbols-outlined text-sm">settings</span>
</button>
</div>
{/*  Grid Layout  */}
<div className="projects-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-space-lg">
{/*  Project Card: stripe.com  */}
<div className="project-card bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative" data-domain="stripe.com" data-health="94" data-status="Active" data-traffic="38200000" data-workspace="Enterprise Tier 1">
<div>
{/*  Card Header  */}
<div className="flex items-start justify-between gap-3 mb-space-md">
<div className="flex items-center gap-space-sm min-w-0">
<input className="project-checkbox rounded w-4 h-4 text-secondary focus:ring-0 cursor-pointer" onChange={() => {}} type="checkbox"/>
{/*  Visual Brand/Avatar  */}
<div className="w-12 h-12 rounded-xl bg-secondary-container/30 flex items-center justify-center p-2 flex-shrink-0 text-secondary">
<span className="material-symbols-outlined text-[28px]">payments</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h3 className="font-title text-title text-on-surface truncate">Stripe Production</h3>
<span className="px-2 py-0.5 rounded-full bg-surface-container font-label-xs text-label-xs text-secondary font-bold">PROD</span>
</div>
<a className="font-label-md text-label-md text-secondary hover:text-primary-container truncate flex items-center gap-1 transition-colors" href="https://stripe.com" target="_blank">
                  stripe.com
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
</div>
{/*  Health Badge & Actions Dropdown  */}
<div className="flex items-center gap-2 flex-shrink-0">
<div className="flex flex-col items-end">
<div className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>94/100</span>
</div>
<span className="font-label-xs text-label-xs text-secondary mt-0.5">Grade A+</span>
</div>
<div className="relative">
<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
<div className="hidden absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-xl z-30 py-1.5 border-none" id="menu-stripe">
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-primary-container">speed</span>
<span>Instant Audit</span>
</button>
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-secondary">picture_as_pdf</span>
<span>Export PDF Report</span>
</button>
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-secondary">tune</span>
<span>Project Settings</span>
</button>
<div className="my-1 border-t border-surface-container"></div>
<button className="w-full text-left px-3 py-2 text-error hover:bg-error-container/20 font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">delete</span>
<span>Delete Project</span>
</button>
</div>
</div>
</div>
</div>
{/*  Tags  */}
<div className="flex items-center gap-1.5 flex-wrap mb-space-md">
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-medium">Fintech</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-medium">Global Tier-1</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-medium">Multi-Region</span>
</div>
{/*  Metrics Matrix  */}
<div className="grid grid-cols-3 gap-2 p-3 bg-surface-container-low rounded-xl mb-space-md">
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Organic Traffic</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">38.2M</div>
<span className="font-label-xs text-label-xs text-tertiary font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">trending_up</span> +8.2%
              </span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Top 10 KWs</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">54,120</div>
<span className="font-label-xs text-label-xs text-tertiary font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">arrow_upward</span> +340
              </span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Open Issues</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">18</div>
<span className="font-label-xs text-label-xs text-primary font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">warning</span> 2 High
              </span>
</div>
</div>
</div>
{/*  Card Footer  */}
<div className="flex items-center justify-between pt-2 border-t border-surface-container">
{/*  Crawl Status  */}
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-xs text-label-xs text-on-surface font-semibold">Active Monitoring</span>
<span className="font-label-xs text-label-xs text-secondary">Crawled 2h ago</span>
</div>
{/*  Assigned Team Stack  */}
<div className="flex items-center -space-x-2">
<img className="w-7 h-7 rounded-full ring-2 ring-surface-container-lowest object-cover" data-alt="Headshot of digital growth manager in navy minimalist portrait lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuComj0Mie5qKM85erPz6BaCX3hHvdxNa6jVOQiyAN9YTruNRJr0QN4rY6xMl3_FtjPvNSEHlF-HZbwBRyS_yx6IGW4cWcVJ391KsVJ0o__pdLuSvQFmL47wPW3MQ1_6-lcQJTkj467wMfWRc0PWe44j_zORWUuFj-ZG88oB1dbv2DXeeSKGfYwrw_v1nIzPzlCtUR1bmRwVp2LCo6btyX9IBZZEM0oNmxp7-NRCcproAZwam9P3_O3R"/>
<img className="w-7 h-7 rounded-full ring-2 ring-surface-container-lowest object-cover" data-alt="Headshot of senior technical SEO engineer with spectacles against neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpgl2WYCLIgFpi_B4SKkcB3wWaDYyxFgUe9FBOtgTb9I5_Ef864SrIR1oKVMBYFceWS4jxQIQhL7hg0ruJXHouCKHtYkxSMhYTzy8pzWtfJnrcQNhvt76IZpHqdR8Nh2T6d3t-No7SOhZn8py2ksEAgoxH6hs6qavpgAQFuPWruLzBjlYMotrZViAXsQDzSkSSokD4uQ57qSS0ZnMfFvCdP8QBtKZatLjAy-AxIbYGxQyfR5k62iUh"/>
<div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-fixed text-label-xs font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">
              +3
            </div>
</div>
</div>
</div>
{/*  Project Card: shopify.com  */}
<div className="project-card bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative" data-domain="shopify.com" data-health="89" data-status="Crawling" data-traffic="29400000" data-workspace="Enterprise Tier 1">
<div>
{/*  Card Header  */}
<div className="flex items-start justify-between gap-3 mb-space-md">
<div className="flex items-center gap-space-sm min-w-0">
<input className="project-checkbox rounded w-4 h-4 text-secondary focus:ring-0 cursor-pointer" onChange={() => {}} type="checkbox"/>
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed/30 flex items-center justify-center p-2 flex-shrink-0 text-tertiary">
<span className="material-symbols-outlined text-[28px]">shopping_bag</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h3 className="font-title text-title text-on-surface truncate">Shopify Global</h3>
<span className="px-2 py-0.5 rounded-full bg-secondary-container font-label-xs text-label-xs text-on-secondary-fixed font-bold">ECOMM</span>
</div>
<a className="font-label-md text-label-md text-secondary hover:text-primary-container truncate flex items-center gap-1 transition-colors" href="https://shopify.com" target="_blank">
                  shopify.com
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
</div>
{/*  Health Badge & Actions Dropdown  */}
<div className="flex items-center gap-2 flex-shrink-0">
<div className="flex flex-col items-end">
<div className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">health_and_safety</span>
<span>89/100</span>
</div>
<span className="font-label-xs text-label-xs text-secondary mt-0.5">Grade B+</span>
</div>
<div className="relative">
<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
<div className="hidden absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-xl z-30 py-1.5 border-none" id="menu-shopify">
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-primary-container">speed</span>
<span>Instant Audit</span>
</button>
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-secondary">picture_as_pdf</span>
<span>Export PDF Report</span>
</button>
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-secondary">tune</span>
<span>Project Settings</span>
</button>
<div className="my-1 border-t border-surface-container"></div>
<button className="w-full text-left px-3 py-2 text-error hover:bg-error-container/20 font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">delete</span>
<span>Delete Project</span>
</button>
</div>
</div>
</div>
</div>
{/*  Tags  */}
<div className="flex items-center gap-1.5 flex-wrap mb-space-md">
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-medium">E-Commerce</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-medium">Platform</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-medium">Sitemap Audited</span>
</div>
{/*  Metrics Matrix  */}
<div className="grid grid-cols-3 gap-2 p-3 bg-surface-container-low rounded-xl mb-space-md">
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Organic Traffic</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">29.4M</div>
<span className="font-label-xs text-label-xs text-tertiary font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">trending_up</span> +3.4%
              </span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Top 10 KWs</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">41,890</div>
<span className="font-label-xs text-label-xs text-tertiary font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">arrow_upward</span> +112
              </span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Open Issues</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">34</div>
<span className="font-label-xs text-label-xs text-primary font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">report</span> 5 Critical
              </span>
</div>
</div>
</div>
{/*  Card Footer  */}
<div className="flex items-center justify-between pt-2 border-t border-surface-container">
{/*  Crawl Status (Crawling)  */}
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-base animate-spin">refresh</span>
<span className="font-label-xs text-label-xs text-primary-container font-semibold">Live Crawling (58%)</span>
<span className="font-label-xs text-label-xs text-secondary">Est. 12m remaining</span>
</div>
{/*  Assigned Team Stack  */}
<div className="flex items-center -space-x-2">
<img className="w-7 h-7 rounded-full ring-2 ring-surface-container-lowest object-cover" data-alt="Headshot of senior female data analyst in modern technical dashboard office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAId1B482s_LnJnSfhg1vpRxvTIV2CqyE-WChqvrOVp1KESl2_PwZJY_A4w7mHSHg0PgCNSOIdH0mx_aPiIBcD_wTKWeu122jXqcMfPkBZ9bDy56h0T2Xx758GGhwBjyT859Vhj8b5P9iOwj7Qkux0iUY6QQ2ehxocTHb_1nkzw6qYP_9I1QdydXtIXiEq-eT8LuGZwOUzq1xxQS6i3Ej1gStnAnZuXAcmw1ghOYHKF0TODDYWi92TS"/>
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary text-label-xs font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">
              SR
            </div>
</div>
</div>
</div>
</div>
</div>
{/*  Workspace Group 2: SaaS Growth Labs  */}
<div className="workspace-section flex flex-col gap-4 mb-8" data-workspace="SaaS Growth Labs">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">SaaS Growth Labs</h2>
<span className="bg-surface-container text-secondary px-2 py-0.5 rounded-full font-label-xs text-label-xs font-semibold">2 Projects</span>
</div>
<button className="text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold flex items-center gap-1">
<span>Workspace Settings</span>
<span className="material-symbols-outlined text-sm">settings</span>
</button>
</div>
{/*  Grid Layout  */}
<div className="projects-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-space-lg">
{/*  Project Card: figma.com  */}
<div className="project-card bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative" data-domain="figma.com" data-health="97" data-status="Active" data-traffic="12800000" data-workspace="SaaS Growth Labs">
<div>
{/*  Card Header  */}
<div className="flex items-start justify-between gap-3 mb-space-md">
<div className="flex items-center gap-space-sm min-w-0">
<input className="project-checkbox rounded w-4 h-4 text-secondary focus:ring-0 cursor-pointer" onChange={() => {}} type="checkbox"/>
<div className="w-12 h-12 rounded-xl bg-primary-fixed/40 flex items-center justify-center p-2 flex-shrink-0 text-primary">
<span className="material-symbols-outlined text-[28px]">design_services</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h3 className="font-title text-title text-on-surface truncate">Figma Collaboration</h3>
<span className="px-2 py-0.5 rounded-full bg-surface-container font-label-xs text-label-xs text-secondary font-bold">DESIGN</span>
</div>
<a className="font-label-md text-label-md text-secondary hover:text-primary-container truncate flex items-center gap-1 transition-colors" href="https://figma.com" target="_blank">
                  figma.com
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="flex flex-col items-end">
<div className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">stars</span>
<span>97/100</span>
</div>
<span className="font-label-xs text-label-xs text-secondary mt-0.5">Top Tier</span>
</div>
<div className="relative">
<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
<div className="hidden absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-xl z-30 py-1.5 border-none" id="menu-figma">
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-primary-container">speed</span>
<span>Instant Audit</span>
</button>
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-secondary">picture_as_pdf</span>
<span>Export PDF Report</span>
</button>
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-secondary">tune</span>
<span>Project Settings</span>
</button>
<div className="my-1 border-t border-surface-container"></div>
<button className="w-full text-left px-3 py-2 text-error hover:bg-error-container/20 font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">delete</span>
<span>Delete Project</span>
</button>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-1.5 flex-wrap mb-space-md">
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-medium">Product Design</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-medium">Community Templates</span>
</div>
<div className="grid grid-cols-3 gap-2 p-3 bg-surface-container-low rounded-xl mb-space-md">
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Organic Traffic</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">12.8M</div>
<span className="font-label-xs text-label-xs text-tertiary font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">trending_up</span> +19.4%
              </span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Top 10 KWs</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">18,340</div>
<span className="font-label-xs text-label-xs text-tertiary font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">arrow_upward</span> +890
              </span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Open Issues</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">4</div>
<span className="font-label-xs text-label-xs text-secondary font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">check_circle</span> Clean
              </span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2 border-t border-surface-container">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-label-xs text-label-xs text-on-surface font-semibold">Active Monitoring</span>
<span className="font-label-xs text-label-xs text-secondary">Hourly sync</span>
</div>
<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full bg-surface-container text-on-surface text-label-xs font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">
              EK
            </div>
<div className="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary text-label-xs font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">
              AM
            </div>
</div>
</div>
</div>
{/*  Project Card: linear.app  */}
<div className="project-card bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative" data-domain="linear.app" data-health="68" data-status="Paused" data-traffic="3800000" data-workspace="SaaS Growth Labs">
<div>
{/*  Card Header  */}
<div className="flex items-start justify-between gap-3 mb-space-md">
<div className="flex items-center gap-space-sm min-w-0">
<input className="project-checkbox rounded w-4 h-4 text-secondary focus:ring-0 cursor-pointer" onChange={() => {}} type="checkbox"/>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center p-2 flex-shrink-0 text-secondary">
<span className="material-symbols-outlined text-[28px]">speed</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h3 className="font-title text-title text-on-surface truncate">Linear Method</h3>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">PAUSED</span>
</div>
<a className="font-label-md text-label-md text-secondary hover:text-primary-container truncate flex items-center gap-1 transition-colors" href="https://linear.app" target="_blank">
                  linear.app
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="flex flex-col items-end">
<div className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-md text-label-md font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">priority_high</span>
<span>68/100</span>
</div>
<span className="font-label-xs text-label-xs text-error font-semibold mt-0.5">Needs Attention</span>
</div>
<div className="relative">
<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
<div className="hidden absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-xl z-30 py-1.5 border-none" id="menu-linear">
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-primary-container">speed</span>
<span>Instant Audit</span>
</button>
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-secondary">picture_as_pdf</span>
<span>Export PDF Report</span>
</button>
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-secondary">tune</span>
<span>Project Settings</span>
</button>
<div className="my-1 border-t border-surface-container"></div>
<button className="w-full text-left px-3 py-2 text-error hover:bg-error-container/20 font-label-md text-label-md flex items-center gap-2" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">delete</span>
<span>Delete Project</span>
</button>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-1.5 flex-wrap mb-space-md">
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-medium">Issue Tracking</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-xs text-label-xs font-medium">DevTools</span>
</div>
<div className="grid grid-cols-3 gap-2 p-3 bg-surface-container-low rounded-xl mb-space-md">
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Organic Traffic</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">3.8M</div>
<span className="font-label-xs text-label-xs text-error font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">trending_down</span> -4.1%
              </span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Top 10 KWs</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">4,140</div>
<span className="font-label-xs text-label-xs text-secondary font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">remove</span> Flat
              </span>
</div>
<div>
<span className="font-label-xs text-label-xs text-secondary font-medium">Open Issues</span>
<div className="font-headline-sm text-headline-sm text-error font-bold mt-0.5">72</div>
<span className="font-label-xs text-label-xs text-error font-semibold flex items-center">
<span className="material-symbols-outlined text-[12px]">error</span> 14 4xx Errs
              </span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2 border-t border-surface-container">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-error"></span>
<span className="font-label-xs text-label-xs text-error font-semibold">Crawl Paused</span>
<span className="font-label-xs text-label-xs text-secondary">Halted 3d ago</span>
</div>
<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full bg-surface-container text-on-surface text-label-xs font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">
              JP
            </div>
</div>
</div>
</div>
</div>
</div>
{/*  Table View Alternative (Shared across workspaces when viewMode = 'table')  */}
<div className="hidden bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden mb-8" id="projectsTableContainer">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-3.5 px-4 w-12 text-center">
<input className="rounded w-4 h-4 text-secondary focus:ring-0 cursor-pointer" onChange={() => {}} type="checkbox"/>
</th>
<th className="py-3.5 px-4">Domain &amp; Project</th>
<th className="py-3.5 px-4">Workspace</th>
<th className="py-3.5 px-4">Status</th>
<th className="py-3.5 px-4">Health Score</th>
<th className="py-3.5 px-4">Organic Traffic</th>
<th className="py-3.5 px-4">Top 10 KWs</th>
<th className="py-3.5 px-4">Issues</th>
<th className="py-3.5 px-4">Team</th>
<th className="py-3.5 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md divide-y divide-surface-container" id="projectsTableBody">
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-space-sm py-8 text-center text-on-surface-variant font-body-sm text-body-sm">
                    No projects found.
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id} className="border-b border-surface-container-highest hover:bg-surface-container-low transition-colors group">
                    <td className="px-space-sm py-3 text-left">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[18px]">public</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-semibold text-on-surface group-hover:text-primary transition-colors cursor-pointer">{project.name}</span>
                          <span className="font-mono-code text-mono-code text-on-surface-variant text-[10px] mt-0.5">{project.domain}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-space-sm py-3 text-left">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-label-md text-[11px] font-semibold w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>Active Tracking
                      </div>
                    </td>
                    <td className="px-space-sm py-3 text-right font-mono-code text-mono-code text-on-surface">1,492</td>
                    <td className="px-space-sm py-3 text-right font-mono-code text-mono-code text-on-surface">340</td>
                    <td className="px-space-sm py-3 text-right">
                      <div className="flex items-center justify-end gap-1.5 text-secondary font-mono-code text-mono-code text-[11px]">
                        <span className="material-symbols-outlined text-[14px]">arrow_upward</span>85
                      </div>
                    </td>
                    <td className="px-space-sm py-3 text-right">
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" title="Manage Project">
                        <span className="material-symbols-outlined text-[18px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
              </tbody>
</table>
</div>
</div>
{/*  Zero Results / Empty State Placeholder (Toggled via search/filter)  */}
<div className="hidden bg-surface-container-lowest rounded-2xl p-space-2xl shadow-sm text-center flex flex-col items-center justify-center max-w-xl mx-auto my-8" id="emptyStateContainer">
<div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-secondary mb-4">
<span className="material-symbols-outlined text-[36px]">travel_explore</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">No Projects Match Your Filter</h3>
<p className="font-body-md text-body-md text-secondary mt-1 max-w-sm">
      We couldn't find any tracked domains matching this criteria. Clear filters or add a new production asset.
    </p>
<div className="flex items-center gap-3 mt-6">
<button className="px-4 py-2 bg-surface-container hover:bg-surface-container-high rounded-xl text-on-surface font-label-md text-label-md font-semibold transition-colors" onClick={() => {}}>
        Clear All Filters
      </button>
<button className="px-4 py-2 bg-primary-container text-on-primary rounded-xl font-label-md text-label-md font-semibold shadow-md hover:opacity-95 transition-all" onClick={() => {}}>
        Add New Project
      </button>
</div>
</div>
{/*  Slide-Over / Modal: + Add New Project Modal  */}
<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/40 backdrop-blur-sm animate-fadeIn" id="newProjectModal">
<div className="bg-surface-container-lowest rounded-2xl shadow-2xl max-w-lg w-full p-space-xl relative overflow-hidden">
<div className="flex items-center justify-between pb-4 border-b border-surface-container">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary font-bold">
<span className="material-symbols-outlined text-lg">add_link</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Connect New Domain</h3>
<span className="font-label-xs text-label-xs text-secondary">Initiate enterprise site crawl &amp; tracking</span>
</div>
</div>
<button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface" onClick={() => {}}>
<span className="material-symbols-outlined text-xl">close</span>
</button>
</div>
<form className="flex flex-col gap-4 mt-6" id="newProjectForm" onSubmit={(e) => e.preventDefault()}>
<div>
<label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">Target Primary Domain *</label>
<input className="w-full px-3.5 py-2.5 bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-container" id="inputDomain" placeholder="e.g. acme-corp.com or subdomain.co" required type="text"/>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">Project Display Name</label>
<input className="w-full px-3.5 py-2.5 bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-container" id="inputName" placeholder="e.g. Acme Corp Master Engine" type="text"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">Assign Workspace</label>
<select className="w-full px-3 py-2.5 bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-container" id="inputWorkspace">
<option value="Enterprise Tier 1">Enterprise Tier 1</option>
<option value="SaaS Growth Labs">SaaS Growth Labs</option>
<option value="Internal Products">Internal Products</option>
</select>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">Crawl Frequency</label>
<select className="w-full px-3 py-2.5 bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-container">
<option>Daily at 00:00 UTC</option>
<option>Hourly Continuous</option>
<option>Weekly Digest</option>
</select>
</div>
</div>
<div className="p-3 bg-secondary-container/20 rounded-xl flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-lg mt-0.5">info</span>
<p className="font-body-sm text-body-sm text-on-surface leading-snug">
            Initial baseline crawl consumes approximately 1,500 URL credits. Auto-discovers canonical tags, robots directives &amp; core web vitals.
          </p>
</div>
<div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-surface-container">
<button className="px-4 py-2 rounded-xl text-secondary hover:bg-surface-container font-label-md text-label-md font-semibold" onClick={() => {}} type="button">
            Cancel
          </button>
<button className="px-5 py-2 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-xl shadow-md hover:opacity-95 transition-all" type="submit">
            Launch Fleet Crawl
          </button>
</div>
</form>
</div>
</div>
{/*  Notification Toast Container  */}
<div className="fixed bottom-6 right-6 z-50 hidden bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce" id="toastNotification">
<span className="material-symbols-outlined text-tertiary-fixed-dim" id="toastIcon">check_circle</span>
<span className="font-label-md text-label-md font-medium" id="toastMessage">Action completed successfully</span>
</div>
</div>

</main>
  )
}