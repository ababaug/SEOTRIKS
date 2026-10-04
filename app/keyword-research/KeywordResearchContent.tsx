"use client";
export function KeywordResearchContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full">
<div className="relative pb-12 overflow-hidden">
<div className="absolute -top-24 right-0 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-48 left-1/3 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-space-lg mb-space-xl">
<div className="flex flex-col max-w-3xl">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs uppercase tracking-wider font-semibold">Algorithm v4.8 Active</span>
<span className="font-label-xs text-label-xs text-secondary font-medium">Domain Scope: <strong className="text-on-surface">stripe.com</strong></span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Keyword Discovery &amp; Intelligence Engine</h1>
<p className="font-body-md text-body-md text-secondary mt-1">Analyze multi-region search demand, SERP intent shifts, ranking volatility, and algorithmic gaps across competitive spaces.</p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
<button className="flex items-center gap-1.5 px-3.5 py-2 bg-surface-container text-secondary hover:text-on-surface hover:bg-surface-container-high rounded-xl font-label-md text-label-md transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px]">history</span>
<span>Recent Queries (14)</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 bg-secondary text-on-secondary hover:opacity-90 rounded-xl font-label-md text-label-md transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Export Master CSV</span>
</button>
</div>
</div>
{/*  Search Console & Discovery Bar  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-md mb-space-xl relative z-20">
<div className="flex flex-col lg:flex-row items-stretch gap-space-sm">
<div className="relative flex-[2] flex items-center bg-surface-container-low rounded-xl px-space-md focus-within:ring-2 focus-within:ring-secondary-container focus-within:bg-surface-container-lowest transition-all">
<span className="material-symbols-outlined text-secondary text-[22px] mr-2.5">search_insights</span>
<input className="w-full py-3 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none" id="seedInput" placeholder="Enter root seeds, competitors, or boolean operators (e.g. checkout AND global)..." type="text" value="payment gateway api, merchant payment processing"/>
<button className="p-1 rounded-lg text-secondary hover:text-on-surface transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-space-xs flex-1">
<div className="relative flex items-center bg-surface-container-low rounded-xl px-3 py-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mr-1.5">public</span>
<select className="w-full bg-transparent font-label-md text-label-md text-on-surface font-semibold focus:outline-none appearance-none cursor-pointer pr-4">
<option value="us">United States 🇺🇸</option>
<option value="gb">United Kingdom 🇬🇧</option>
<option value="global">Global Markets 🌍</option>
<option value="eu">European Union 🇪🇺</option>
<option value="sg">Singapore 🇸🇬</option>
</select>
<span className="material-symbols-outlined absolute right-2 pointer-events-none text-secondary text-sm">expand_more</span>
</div>
<div className="relative flex items-center bg-surface-container-low rounded-xl px-3 py-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mr-1.5">travel_explore</span>
<select className="w-full bg-transparent font-label-md text-label-md text-on-surface font-semibold focus:outline-none appearance-none cursor-pointer pr-4">
<option value="google">Google Mobile + Web</option>
<option value="bing">Bing Search</option>
<option value="youtube">YouTube Engine</option>
<option value="amazon">Amazon Product Search</option>
</select>
<span className="material-symbols-outlined absolute right-2 pointer-events-none text-secondary text-sm">expand_more</span>
</div>
<div className="relative col-span-2 sm:col-span-1 flex items-center bg-surface-container-low rounded-xl px-3 py-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mr-1.5">device_hub</span>
<select className="w-full bg-transparent font-label-md text-label-md text-on-surface font-semibold focus:outline-none appearance-none cursor-pointer pr-4">
<option value="all">Desktop &amp; Mobile</option>
<option value="desktop">Desktop Only</option>
<option value="mobile">Mobile First</option>
</select>
<span className="material-symbols-outlined absolute right-2 pointer-events-none text-secondary text-sm">expand_more</span>
</div>
</div>
<button className="flex items-center justify-center gap-2 px-space-lg py-3.5 bg-primary-container text-on-primary font-label-lg text-label-lg font-bold rounded-xl shadow-md hover:bg-primary transition-all active:scale-[0.99] flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">bolt</span>
<span>Analyze Keywords</span>
</button>
</div>
{/*  Quick filters row  */}
<div className="flex flex-wrap items-center gap-space-xs mt-3 pt-3 border-t-0 border-surface-container">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase mr-1">Trending Clusters:</span>
<button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-label-xs font-label-xs hover:bg-secondary-container transition-colors flex items-center gap-1">
<span>SaaS Orchestration</span>
<span className="text-secondary font-normal">+18%</span>
</button>
<button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-label-xs font-label-xs hover:bg-secondary-container transition-colors flex items-center gap-1">
<span>Stripe Billing Alternatives</span>
<span className="text-secondary font-normal">+44%</span>
</button>
<button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-label-xs font-label-xs hover:bg-secondary-container transition-colors flex items-center gap-1">
<span>Cross-Border Settlement</span>
<span className="text-secondary font-normal">+29%</span>
</button>
<button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-label-xs font-label-xs hover:bg-secondary-container transition-colors flex items-center gap-1">
<span>Embedded FinTech Rails</span>
<span className="text-secondary font-normal">+82%</span>
</button>
<button className="ml-auto text-primary font-label-xs text-label-xs font-bold hover:underline flex items-center gap-0.5">
<span>+ Add Target Match Filter</span>
</button>
</div>
</div>
{/*  Seed Overview Metric Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">
{/*  Metric 1: Search Volume  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between mb-2">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Total Monthly Volume</span>
<span className="font-metric-stat text-metric-stat text-on-surface mt-1">480,500</span>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">equalizer</span>
</div>
</div>
<div className="flex items-center justify-between pt-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-xs">trending_up</span>
<span>+12.4% YoY</span>
</span>
<span className="font-label-xs text-label-xs text-secondary">High Seasonal Uniformity</span>
</div>
{/*  Micro sparkline visualization  */}
<div className="h-6 w-full mt-3 flex items-end gap-1">
<div className="flex-1 bg-surface-container-high rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm h-[55%]"></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm h-[48%]"></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm h-[65%]"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[85%]"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[78%]"></div>
<div className="flex-1 bg-primary-container rounded-t-sm h-[100%]"></div>
</div>
</div>
{/*  Metric 2: Keyword Difficulty  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between mb-2">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Avg Keyword Difficulty</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-metric-stat text-metric-stat text-on-surface">68</span>
<span className="font-label-md text-label-md text-secondary">/ 100</span>
<span className="px-2 py-0.5 rounded-md bg-error-container text-on-error-container font-label-xs text-label-xs font-bold">Hard</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-error-container/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">shield_with_heart</span>
</div>
</div>
<div className="flex flex-col gap-1.5 pt-1">
<div className="flex justify-between items-center font-label-xs text-label-xs">
<span className="text-secondary">SERP Dominance Bar</span>
<span className="font-semibold text-on-surface">184 Domains Needed</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden flex">
<div className="bg-tertiary-fixed-dim w-1/4"></div>
<div className="bg-secondary-container w-1/4"></div>
<div className="bg-primary-container w-[18%]"></div>
</div>
</div>
<p className="font-label-xs text-label-xs text-secondary mt-3">High authority profiles (DR 78+) currently hold 84% of Top 3 listings.</p>
</div>
{/*  Metric 3: Organic Click Potential  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between mb-2">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Organic Click Potential</span>
<span className="font-metric-stat text-metric-stat text-on-surface mt-1">342,000</span>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed/50 flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-[20px]">ads_click</span>
</div>
</div>
<div className="flex items-center justify-between pt-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">
<span>71.2% CTR</span>
</span>
<span className="font-label-xs text-label-xs text-secondary">Low Zero-Click Impact</span>
</div>
{/*  Progress bar visualization  */}
<div className="mt-3">
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
<div className="flex justify-between items-center text-secondary font-label-xs text-label-xs mt-1">
<span>Non-SERP feature leaks</span>
<span>28.8% paid/snippets</span>
</div>
</div>
</div>
{/*  Metric 4: CPC Benchmark  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between mb-2">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">CPC Benchmark Value</span>
<span className="font-metric-stat text-metric-stat text-on-surface mt-1">$28.40</span>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">monetization_on</span>
</div>
</div>
<div className="flex items-center justify-between pt-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
<span>Peak: $84.20/click</span>
</span>
<span className="font-label-xs text-label-xs text-primary font-semibold">$9.7M Est. Value</span>
</div>
<div className="flex items-center gap-2 mt-3 p-2 rounded-xl bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-sm">info</span>
<span className="font-label-xs text-label-xs text-secondary truncate">Commercial intent density leads to intense ad bidding wars.</span>
</div>
</div>
</div>
{/*  Layout Grid: Left Sidebar Cluster Drawer + Right Main Table  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/*  AI Keyword Clusters & Search Intent Segmentation (4 Cols on XL)  */}
<div className="xl:col-span-4 flex flex-col gap-space-lg">
{/*  Intent Breakdown Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Search Intent Distribution</h2>
<p className="font-label-xs text-label-xs text-secondary">Normalized across 1,842 query permutations</p>
</div>
<button className="p-1 rounded-lg text-secondary hover:text-on-surface">
<span className="material-symbols-outlined text-[20px]">tune</span>
</button>
</div>
{/*  Intent Segmented Progress Track  */}
<div className="h-3 w-full rounded-full bg-surface-container overflow-hidden flex mb-space-md">
<div className="bg-secondary-container h-full"  title="Informational 42%"></div>
<div className="bg-primary-container h-full"  title="Commercial 31%"></div>
<div className="bg-tertiary-fixed-dim h-full"  title="Transactional 22%"></div>
<div className="bg-surface-container-highest h-full"  title="Navigational 5%"></div>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
<div className="flex items-center justify-between">
<span className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
                  Informational
                </span>
<span className="font-label-md text-label-md font-bold text-on-surface">42%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary mt-1">773 Queries • 201K Vol</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
<div className="flex items-center justify-between">
<span className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                  Commercial
                </span>
<span className="font-label-md text-label-md font-bold text-on-surface">31%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary mt-1">571 Queries • 148K Vol</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
<div className="flex items-center justify-between">
<span className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim"></span>
                  Transactional
                </span>
<span className="font-label-md text-label-md font-bold text-on-surface">22%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary mt-1">405 Queries • 105K Vol</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
<div className="flex items-center justify-between">
<span className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
<span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                  Navigational
                </span>
<span className="font-label-md text-label-md font-bold text-on-surface">5%</span>
</div>
<span className="font-label-xs text-label-xs text-secondary mt-1">93 Queries • 24K Vol</span>
</div>
</div>
</div>
{/*  AI Keyword Clustering Widget  */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">hub</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Related Semantic Clusters</h2>
<span className="font-label-xs text-label-xs text-secondary">Neural Topic Graph Analysis</span>
</div>
</div>
<button className="text-primary font-label-xs text-label-xs font-bold hover:underline">Recluster (8)</button>
</div>
<div className="flex flex-col gap-space-sm">
{/*  Cluster Item 1  */}
<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-2">
<span className="font-title text-title text-on-surface">SaaS Billing &amp; Subscriptions</span>
<span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-xs text-label-xs font-bold">High Intent</span>
</div>
<span className="font-label-md text-label-md font-bold text-secondary">42 Kws</span>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs">
<span>Avg KD: <strong className="text-on-surface">66</strong></span>
<span>Combined Vol: <strong className="text-on-surface">114,800/mo</strong></span>
<span>CPC: <strong className="text-on-surface">$38.20</strong></span>
</div>
<div className="mt-2.5 flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs">recurring billing engine</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs">dunning automation api</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs">+7 more</span>
</div>
</div>
{/*  Cluster Item 2  */}
<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-2">
<span className="font-title text-title text-on-surface">International Checkout Rails</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">Opportunity</span>
</div>
<span className="font-label-md text-label-md font-bold text-secondary">28 Kws</span>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs">
<span>Avg KD: <strong className="text-on-surface">54</strong></span>
<span>Combined Vol: <strong className="text-on-surface">82,300/mo</strong></span>
<span>CPC: <strong className="text-on-surface">$26.40</strong></span>
</div>
<div className="mt-2.5 flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs">multi currency localized checkout</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs">sepa direct debit api</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs">+4 more</span>
</div>
</div>
{/*  Cluster Item 3  */}
<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-2">
<span className="font-title text-title text-on-surface">Embedded FinTech &amp; Banking-as-a-Service</span>
<span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">Fast Growth</span>
</div>
<span className="font-label-md text-label-md font-bold text-secondary">19 Kws</span>
</div>
<div className="flex items-center justify-between text-secondary font-label-xs text-label-xs">
<span>Avg KD: <strong className="text-on-surface">48</strong></span>
<span>Combined Vol: <strong className="text-on-surface">61,400/mo</strong></span>
<span>CPC: <strong className="text-on-surface">$34.10</strong></span>
</div>
<div className="mt-2.5 flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs">card issuance white label</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-xs text-label-xs">ledger balance infrastructure</span>
</div>
</div>
</div>
<button className="w-full mt-space-md py-2.5 rounded-xl bg-surface-container text-on-surface hover:bg-secondary hover:text-on-secondary font-label-md text-label-md font-semibold transition-all flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">account_tree</span>
<span>Explore Full 3D Semantic Map</span>
</button>
</div>
{/*  Competitor Keyword Gap Insight Spot  */}
<div className="p-space-md rounded-2xl bg-gradient-to-br from-surface-container-low to-secondary-container/20 shadow-sm">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-secondary text-on-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">compare_arrows</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Adyen &amp; Checkout.com Keyword Gap</span>
<p className="font-body-sm text-body-sm text-secondary mt-1">Stripe is missing ranking positions on 48 high-volume cross-border queries where competitors hold SERP snippets.</p>
<a className="mt-2 font-label-xs text-label-xs font-bold text-primary hover:underline flex items-center gap-0.5" href="#">
<span>View 48 Gap Keywords</span>
<span className="material-symbols-outlined text-xs">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
{/*  Main Keyword Opportunities Table (8 Cols on XL)  */}
<div className="xl:col-span-8 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
{/*  Table Controls Toolbar  */}
<div className="p-space-md bg-surface-container-low flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm flex-wrap">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-2.5 text-secondary text-[18px]">filter_list</span>
<input className="pl-8 pr-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-secondary w-48" placeholder="Filter keyword list..." type="text"/>
</div>
<div className="flex items-center bg-surface-container-lowest rounded-lg p-0.5">
<button className="px-2.5 py-1 rounded-md bg-secondary text-on-secondary font-label-xs text-label-xs font-semibold">All (1,842)</button>
<button className="px-2.5 py-1 rounded-md text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium">Questions</button>
<button className="px-2.5 py-1 rounded-md text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium">High Volume (&gt;10k)</button>
<button className="px-2.5 py-1 rounded-md text-secondary hover:text-on-surface font-label-xs text-label-xs font-medium">Low KD (&lt;45)</button>
</div>
</div>
<div className="flex items-center gap-space-xs justify-end">
<span className="font-label-xs text-label-xs text-secondary">Showing 1-5 of 1,842</span>
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface disabled:opacity-40" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
{/*  The Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-high/60 text-secondary font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-3.5 px-space-md w-8">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</th>
<th className="py-3.5 px-space-sm font-semibold">Keyword &amp; Strategy Tag</th>
<th className="py-3.5 px-space-sm font-semibold text-center">Intent</th>
<th className="py-3.5 px-space-sm font-semibold text-right">Vol /mo</th>
<th className="py-3.5 px-space-sm font-semibold text-center">Trend (12m)</th>
<th className="py-3.5 px-space-sm font-semibold text-center">KD%</th>
<th className="py-3.5 px-space-sm font-semibold text-right">CPC</th>
<th className="py-3.5 px-space-sm font-semibold text-center">Density</th>
<th className="py-3.5 px-space-sm font-semibold text-center">SERP Features</th>
<th className="py-3.5 px-space-md font-semibold text-right">Quick Action</th>
</tr>
</thead>
<tbody className="divide-y-0 text-body-sm font-body-sm text-on-surface">
{/*  Keyword Row 1  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-space-md">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-4 px-space-sm">
<div className="flex flex-col min-w-[210px]">
<a className="font-title text-title text-on-surface font-semibold hover:text-primary transition-colors flex items-center gap-1" href="#">
<span>online payment gateway integration</span>
<span className="material-symbols-outlined text-[14px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</a>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-xs text-label-xs text-secondary">Rank: #4 (stripe.com/payments)</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span className="font-label-xs text-label-xs text-primary font-medium">Core Term</span>
</div>
</div>
</td>
<td className="py-4 px-space-sm text-center">
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold inline-block">Transactional</span>
</td>
<td className="py-4 px-space-sm text-right font-semibold font-title text-title">27,100</td>
<td className="py-4 px-space-sm">
{/*  Inline SVG Sparkline 1  */}
<div className="w-20 h-6 mx-auto flex items-center justify-center">
<svg className="w-full h-full text-secondary" fill="none" viewBox="0 0 80 24">
<path d="M 0,16 Q 10,18 20,12 T 40,14 T 60,8 T 80,4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</td>
<td className="py-4 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-error-container text-on-error-container font-label-md text-label-md font-bold">64</span>
</td>
<td className="py-4 px-space-sm text-right font-medium text-on-surface font-body-md text-body-md">$34.50</td>
<td className="py-4 px-space-sm text-center">
<span className="font-label-xs text-label-xs font-semibold px-2 py-0.5 rounded bg-surface-container text-on-surface">0.92</span>
</td>
<td className="py-4 px-space-sm">
<div className="flex items-center justify-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary" title="Featured Snippet">featured_play_list</span>
<span className="material-symbols-outlined text-[16px]" title="People Also Ask">quiz</span>
<span className="material-symbols-outlined text-[16px]" title="Sitelinks">link</span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-secondary hover:bg-primary-container hover:text-on-primary font-label-xs text-label-xs font-semibold transition-all inline-flex items-center gap-1">
<span className="material-symbols-outlined text-sm">add</span>
<span>Track</span>
</button>
</td>
</tr>
{/*  Keyword Row 2  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-space-md">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-4 px-space-sm">
<div className="flex flex-col min-w-[210px]">
<a className="font-title text-title text-on-surface font-semibold hover:text-primary transition-colors flex items-center gap-1" href="#">
<span>recurring billing platform for saas</span>
<span className="material-symbols-outlined text-[14px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</a>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-xs text-label-xs text-secondary">Rank: #8 (stripe.com/billing)</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span className="font-label-xs text-label-xs text-secondary font-medium">B2B Software</span>
</div>
</div>
</td>
<td className="py-4 px-space-sm text-center">
<span className="px-2.5 py-1 rounded-full bg-primary-container/20 text-on-surface-variant font-label-xs text-label-xs font-bold inline-block">Commercial</span>
</td>
<td className="py-4 px-space-sm text-right font-semibold font-title text-title">18,400</td>
<td className="py-4 px-space-sm">
{/*  Inline SVG Sparkline 2  */}
<div className="w-20 h-6 mx-auto flex items-center justify-center">
<svg className="w-full h-full text-secondary" fill="none" viewBox="0 0 80 24">
<path d="M 0,20 Q 15,10 30,16 T 55,9 T 80,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</td>
<td className="py-4 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-error-container text-on-error-container font-label-md text-label-md font-bold">72</span>
</td>
<td className="py-4 px-space-sm text-right font-medium text-on-surface font-body-md text-body-md">$42.10</td>
<td className="py-4 px-space-sm text-center">
<span className="font-label-xs text-label-xs font-semibold px-2 py-0.5 rounded bg-surface-container text-on-surface">0.98</span>
</td>
<td className="py-4 px-space-sm">
<div className="flex items-center justify-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" title="People Also Ask">quiz</span>
<span className="material-symbols-outlined text-[16px] text-secondary" title="Video">video_library</span>
<span className="material-symbols-outlined text-[16px]" title="Sitelinks">link</span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-secondary hover:bg-primary-container hover:text-on-primary font-label-xs text-label-xs font-semibold transition-all inline-flex items-center gap-1">
<span className="material-symbols-outlined text-sm">add</span>
<span>Track</span>
</button>
</td>
</tr>
{/*  Keyword Row 3 (Opportunity Highlight)  */}
<tr className="bg-secondary-container/15 hover:bg-secondary-container/25 transition-colors group">
<td className="py-4 px-space-md">
<input defaultChecked className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-4 px-space-sm">
<div className="flex flex-col min-w-[210px]">
<div className="flex items-center gap-1.5">
<a className="font-title text-title text-on-surface font-bold hover:text-primary transition-colors" href="#">
                          global multi currency checkout api
                        </a>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold uppercase">Opportunity</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-xs text-label-xs text-primary font-semibold">Rank Gap: Competitors in 1-3, Stripe #11</span>
</div>
</div>
</td>
<td className="py-4 px-space-sm text-center">
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold inline-block">Transactional</span>
</td>
<td className="py-4 px-space-sm text-right font-semibold font-title text-title">12,800</td>
<td className="py-4 px-space-sm">
{/*  Inline SVG Sparkline 3  */}
<div className="w-20 h-6 mx-auto flex items-center justify-center">
<svg className="w-full h-full text-primary" fill="none" viewBox="0 0 80 24">
<path d="M 0,22 Q 20,20 35,10 T 60,6 T 80,1" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</td>
<td className="py-4 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold">58</span>
</td>
<td className="py-4 px-space-sm text-right font-medium text-on-surface font-body-md text-body-md">$29.80</td>
<td className="py-4 px-space-sm text-center">
<span className="font-label-xs text-label-xs font-semibold px-2 py-0.5 rounded bg-surface-container text-on-surface">0.74</span>
</td>
<td className="py-4 px-space-sm">
<div className="flex items-center justify-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary" title="Featured Snippet">featured_play_list</span>
<span className="material-symbols-outlined text-[16px]" title="People Also Ask">quiz</span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-xs text-label-xs font-bold transition-all shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-sm">bookmark_add</span>
<span>Add to Mgr</span>
</button>
</td>
</tr>
{/*  Keyword Row 4 (High Growth)  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-space-md">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-4 px-space-sm">
<div className="flex flex-col min-w-[210px]">
<div className="flex items-center gap-1.5">
<a className="font-title text-title text-on-surface font-semibold hover:text-primary transition-colors" href="#">
                          embedded finance infrastructure
                        </a>
<span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold">Fast Growth</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-xs text-label-xs text-secondary">Rank: #6 (stripe.com/treasury)</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span className="font-label-xs text-label-xs text-tertiary font-medium">+112% Vol 6mo</span>
</div>
</div>
</td>
<td className="py-4 px-space-sm text-center">
<span className="px-2.5 py-1 rounded-full bg-primary-container/20 text-on-surface-variant font-label-xs text-label-xs font-bold inline-block">Commercial</span>
</td>
<td className="py-4 px-space-sm text-right font-semibold font-title text-title">9,400</td>
<td className="py-4 px-space-sm">
{/*  Inline SVG Sparkline 4  */}
<div className="w-20 h-6 mx-auto flex items-center justify-center">
<svg className="w-full h-full text-secondary" fill="none" viewBox="0 0 80 24">
<path d="M 0,22 Q 25,21 40,15 T 60,7 T 80,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</td>
<td className="py-4 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold">49</span>
</td>
<td className="py-4 px-space-sm text-right font-medium text-on-surface font-body-md text-body-md">$38.00</td>
<td className="py-4 px-space-sm text-center">
<span className="font-label-xs text-label-xs font-semibold px-2 py-0.5 rounded bg-surface-container text-on-surface">0.81</span>
</td>
<td className="py-4 px-space-sm">
<div className="flex items-center justify-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" title="People Also Ask">quiz</span>
<span className="material-symbols-outlined text-[16px]" title="Sitelinks">link</span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-secondary hover:bg-primary-container hover:text-on-primary font-label-xs text-label-xs font-semibold transition-all inline-flex items-center gap-1">
<span className="material-symbols-outlined text-sm">add</span>
<span>Track</span>
</button>
</td>
</tr>
{/*  Keyword Row 5 (Quick Win)  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-space-md">
<input className="rounded text-secondary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-4 px-space-sm">
<div className="flex flex-col min-w-[210px]">
<div className="flex items-center gap-1.5">
<a className="font-title text-title text-on-surface font-semibold hover:text-primary transition-colors" href="#">
                          ach transfer processing times
                        </a>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold">Quick Win</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-xs text-label-xs text-secondary">Rank: #14 (stripe.com/resources)</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span className="font-label-xs text-label-xs text-secondary">Low KD Barrier</span>
</div>
</div>
</td>
<td className="py-4 px-space-sm text-center">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-secondary font-label-xs text-label-xs font-bold inline-block">Informational</span>
</td>
<td className="py-4 px-space-sm text-right font-semibold font-title text-title">33,200</td>
<td className="py-4 px-space-sm">
{/*  Inline SVG Sparkline 5  */}
<div className="w-20 h-6 mx-auto flex items-center justify-center">
<svg className="w-full h-full text-secondary" fill="none" viewBox="0 0 80 24">
<path d="M 0,8 Q 20,4 40,8 T 60,6 T 80,7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</td>
<td className="py-4 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-tertiary-fixed text-on-tertiary-container font-label-md text-label-md font-bold">41</span>
</td>
<td className="py-4 px-space-sm text-right font-medium text-on-surface font-body-md text-body-md">$14.20</td>
<td className="py-4 px-space-sm text-center">
<span className="font-label-xs text-label-xs font-semibold px-2 py-0.5 rounded bg-surface-container text-on-surface">0.45</span>
</td>
<td className="py-4 px-space-sm">
<div className="flex items-center justify-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary" title="Featured Snippet">featured_play_list</span>
<span className="material-symbols-outlined text-[16px]" title="People Also Ask">quiz</span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-secondary hover:bg-primary-container hover:text-on-primary font-label-xs text-label-xs font-semibold transition-all inline-flex items-center gap-1">
<span className="material-symbols-outlined text-sm">add</span>
<span>Track</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Bottom Action Bar / Bulk Drawer Trigger  */}
<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-md text-secondary">Selected: <strong className="text-on-surface">1 keyword</strong></span>
<button className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-xs text-label-xs font-semibold hover:opacity-90 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">playlist_add</span>
<span>Bulk Add to Manager (1)</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-xs text-label-xs font-medium hover:bg-surface-container-high">Export Selected</button>
</div>
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs text-secondary">Per page:</span>
<select className="bg-surface-container-lowest font-label-xs text-label-xs text-on-surface font-semibold rounded-lg px-2 py-1 focus:outline-none">
<option>25 rows</option>
<option>50 rows</option>
<option>100 rows</option>
</select>
</div>
</div>
</div>
{/*  Strategy Diagnostics & Recommendation Panel  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-1">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="font-label-xs text-label-xs font-bold uppercase">Quick Win Action</span>
</div>
<h3 className="font-title text-title text-on-surface font-semibold">Publish 'ACH Timelines' Guide</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">KD is 41 with 33.2k volume. Updating stripe.com/docs/ach with an FAQ snippet can capture position 1-3 within 14 days.</p>
</div>
<a className="mt-3 font-label-xs text-label-xs text-primary font-bold hover:underline flex items-center gap-1" href="#">
<span>Create Content Brief</span>
<span className="material-symbols-outlined text-xs">arrow_forward</span>
</a>
</div>
<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-1">
<span className="material-symbols-outlined text-[18px]">auto_fix_high</span>
<span className="font-label-xs text-label-xs font-bold uppercase">Cannibalization Risk</span>
</div>
<h3 className="font-title text-title text-on-surface font-semibold">Payment Gateway Intent Overlap</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Both `/payments` and `/integration` are fighting for rank 4 and 9. Consolidate technical headings to preserve link juice.</p>
</div>
<a className="mt-3 font-label-xs text-label-xs text-primary font-bold hover:underline flex items-center gap-1" href="#">
<span>Inspect SERP Overlap</span>
<span className="material-symbols-outlined text-xs">arrow_forward</span>
</a>
</div>
<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-1">
<span className="material-symbols-outlined text-[18px]">trending_up</span>
<span className="font-label-xs text-label-xs font-bold uppercase">Ad Arbitrage Alert</span>
</div>
<h3 className="font-title text-title text-on-surface font-semibold">High Value B2B Term Saved</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Organic ranking on 'recurring billing platform' saves $42.10 per acquired click against competitors' Google Ads spend.</p>
</div>
<a className="mt-3 font-label-xs text-label-xs text-primary font-bold hover:underline flex items-center gap-1" href="#">
<span>View Paid Competitor Ads</span>
<span className="material-symbols-outlined text-xs">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

</main>
  )
}