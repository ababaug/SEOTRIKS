"use client";
import { useState } from "react";
import { Header } from "../Header";
import { FaqItem } from "../FaqItem";

export function PricingContent() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <Header /><main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">

<div className="w-full flex flex-col items-center" id="pricing-engine">

<section className=" w-full max-w-[1280px] mx-auto px-margin pt-space-xl pb-space-lg text-center relative overflow-hidden animate-fade-in-up">

<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[620px] h-[320px] bg-gradient-to-b from-powder-blue/25 via-light-cyan/35 to-transparent rounded-full blur-3xl -z-10 pointer-events-none animate-float"></div>
<div className="inline-flex items-center gap-space-xs px-space-md py-1 bg-surface-container rounded-full text-secondary font-label-md text-label-md mb-space-md">
<span className="material-symbols-outlined text-[16px] text-burnt-peach">verified_user</span>
<span>Honest, Transparent Tiering • Zero Hidden Overage Fees</span>
</div>
<h1 className="font-display-lg text-display-lg text-jet-black tracking-tight max-w-3xl mx-auto mb-space-sm">
        Start free. Grow when you're ready.
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-space-lg">
        Choose a plan based on your website, SEO workflow, and how much SEOtriks you need. Transparent pricing with no surprises.
      </p>

<div className="inline-flex items-center bg-surface-container p-1.5 rounded-full shadow-sm mb-space-md">
<button
    className={`px-space-lg py-2 rounded-full font-label-lg text-label-lg transition-all duration-200 ${!isYearly ? 'bg-surface text-jet-black shadow-sm' : 'text-on-surface-variant hover:text-jet-black'}`}
    id="toggle-monthly"
    onClick={() => setIsYearly(false)}
  >
    Monthly
  </button>
<button
    className={`px-space-lg py-2 rounded-full font-label-lg text-label-lg transition-all duration-200 flex items-center gap-space-xs ${isYearly ? 'bg-surface text-jet-black shadow-sm' : 'text-on-surface-variant hover:text-jet-black'}`}
    id="toggle-yearly"
    onClick={() => setIsYearly(true)}
  >
    <span>Yearly</span>
    <span className="bg-burnt-peach text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full shadow-sm">Save 20% + 2 Mo Free</span>
  </button>
</div>
<div className="flex items-center justify-center gap-space-xl text-on-surface-variant font-label-md text-label-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">credit_card_off</span>
<span>No credit card required for Free tier</span>
</div>
<div className="hidden sm:flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">swap_horiz</span>
<span>Upgrade, downgrade, or cancel anytime</span>
</div>
<div className="hidden md:flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">lock_reset</span>
<span>Full data export upon cancellation</span>
</div>
</div>
</section>

<section className="reveal w-full max-w-[1280px] mx-auto px-margin py-space-md">
<div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter items-stretch">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-full">
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-headline-sm text-headline-sm text-jet-black">Free</span>
<span className="bg-surface-container font-label-sm text-label-sm text-secondary px-2.5 py-1 rounded-full">Explorer</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant min-h-[40px] mb-space-md">
              Perfect for trying SEOtriks on personal sites.
            </p>
<div className="mb-space-lg pb-space-md bg-surface-container-low/60 rounded-lg p-space-md">
<div className="flex items-baseline gap-1">
<span className="font-display-lg text-display-lg text-jet-black tracking-tight">$0</span>
<span className="font-label-md text-label-md text-on-surface-variant">/ month</span>
</div>
<p className="font-label-sm text-label-sm text-secondary mt-1">Free forever. No card required.</p>
</div>
<div className="space-y-space-sm mb-space-lg">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-dusk-blue font-semibold block mb-space-xs">Core Allowances</span>
<div className="flex items-center gap-space-xs text-jet-black font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">domain</span>
<span className="font-semibold">1 Website</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">find_in_page</span>
<span>100 Pages / mo</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">sync</span>
<span>1 Audit / mo</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-burnt-peach text-[18px]">auto_awesome</span>
<span>5 AI Recommendations</span>
</div>
<div className="pt-space-sm space-y-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Basic Technical SEO Engine</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>SEOtriks Health Score</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Basic Opportunities</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Limited Search Console insights</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Standard Web Dashboard</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md mt-auto">
<a className="w-full py-2.5 px-space-md rounded bg-surface-container text-jet-black font-label-lg text-label-lg flex items-center justify-center hover:bg-powder-blue/30 btn-effect hover:scale-105 transition-all duration-300 shadow-sm" href="#">
              Start Free
            </a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-full">
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-headline-sm text-headline-sm text-jet-black">Starter</span>
<span className="bg-light-cyan font-label-sm text-label-sm text-dusk-blue px-2.5 py-1 rounded-full font-medium">Solopreneur</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant min-h-[40px] mb-space-md">
              For small businesses and individual site owners.
            </p>
<div className="mb-space-lg pb-space-md bg-surface-container-low/60 rounded-lg p-space-md">
<div className="flex items-baseline gap-1">
<span className="font-display-lg text-display-lg text-jet-black tracking-tight price-starter">{isYearly ? "$90" : "$9"}</span>
<span className="font-label-md text-label-md text-on-surface-variant">{isYearly ? "/ year" : "/ month"}</span>
</div>
<p className="font-label-sm text-label-sm text-secondary mt-1 subtext-starter">{isYearly ? "Billed $90 annually" : "Billed $9 monthly"}</p>
</div>
<div className="space-y-space-sm mb-space-lg">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-dusk-blue font-semibold block mb-space-xs">Core Allowances</span>
<div className="flex items-center gap-space-xs text-jet-black font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">domain</span>
<span className="font-semibold">1 Website</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">find_in_page</span>
<span>1,000 Pages / mo</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">sync</span>
<span>5 Audits / mo</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-burnt-peach text-[18px]">auto_awesome</span>
<span>25 AI Recommendations</span>
</div>
<div className="pt-space-sm space-y-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-start gap-space-xs font-medium text-jet-black">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">done_all</span>
<span>Everything in Free, plus:</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Full Technical SEO Audit</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Google Search Console Integration</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Basic SEO Guard (Weekly checks)</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Search Performance &amp; Email Alerts</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md mt-auto">
<a className="w-full py-2.5 px-space-md rounded bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center hover:bg-dusk-blue btn-effect hover:scale-105 transition-all duration-300 shadow-sm" href="#">
              Start Starter
            </a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xl flex flex-col justify-between relative transform -translate-y-2 lg:-translate-y-3 bg-gradient-to-b from-surface-container-lowest via-surface-container-lowest to-light-cyan/20">

<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-burnt-peach text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold py-1 px-4 rounded-full shadow-md">
            MOST POPULAR
          </div>
<div className="flex flex-col pt-1">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-headline-sm text-headline-sm text-jet-black">Growth</span>
<span className="bg-burnt-peach/15 font-label-sm text-label-sm text-tertiary-container px-2.5 py-1 rounded-full font-semibold">Scale</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant min-h-[40px] mb-space-md">
              For growing businesses and agile marketing teams.
            </p>
<div className="mb-space-lg pb-space-md bg-secondary-container/30 rounded-lg p-space-md shadow-sm">
<div className="flex items-baseline gap-1">
<span className="font-display-lg text-display-lg text-jet-black tracking-tight price-growth">{isYearly ? "$190" : "$19"}</span>
<span className="font-label-md text-label-md text-on-surface-variant">{isYearly ? "/ year" : "/ month"}</span>
</div>
<p className="font-label-sm text-label-sm text-dusk-blue mt-1 font-medium subtext-growth">{isYearly ? "Billed $190 annually" : "Billed $19 monthly"}</p>
</div>
<div className="space-y-space-sm mb-space-lg">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-burnt-peach font-bold block mb-space-xs">Core Allowances</span>
<div className="flex items-center gap-space-xs text-jet-black font-body-sm text-body-sm">
<span className="material-symbols-outlined text-burnt-peach text-[18px]">domain</span>
<span className="font-bold">5 Websites</span>
</div>
<div className="flex items-center gap-space-xs text-jet-black font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">find_in_page</span>
<span className="font-semibold">10,000 Pages / mo</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">sync</span>
<span>20 Audits / mo</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-burnt-peach text-[18px]">auto_awesome</span>
<span className="font-semibold text-tertiary-container">150 AI Recommendations</span>
</div>
<div className="pt-space-sm space-y-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-start gap-space-xs font-semibold text-jet-black">
<span className="material-symbols-outlined text-burnt-peach text-[18px] shrink-0 mt-0.5">verified</span>
<span>Everything in Starter, plus:</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>SEO Priority Engine</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Full SEO Guard (Daily active checks)</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Content Decay &amp; Refresh Radar</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>WordPress Integration &amp; Workflows</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Before / After Impact Analysis</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">group</span>
<span className="font-medium text-jet-black">3 Team Member Seats</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md mt-auto">
<a className="w-full py-2.5 px-space-md rounded bg-burnt-peach text-on-primary font-label-lg text-label-lg flex items-center justify-center btn-effect hover:opacity-95 hover:scale-105 transition-all duration-300 shadow-md" href="#">
              Start Growth
            </a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-full">
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-headline-sm text-headline-sm text-jet-black">Pro</span>
<span className="bg-primary/10 font-label-sm text-label-sm text-primary px-2.5 py-1 rounded-full font-semibold">Agencies</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant min-h-[40px] mb-space-md">
              For SEO professionals, agencies, and multi-site portfolios.
            </p>
<div className="mb-space-lg pb-space-md bg-surface-container-low/60 rounded-lg p-space-md">
<div className="flex items-baseline gap-1">
<span className="font-display-lg text-display-lg text-jet-black tracking-tight price-pro">{isYearly ? "$390" : "$39"}</span>
<span className="font-label-md text-label-md text-on-surface-variant">{isYearly ? "/ year" : "/ month"}</span>
</div>
<p className="font-label-sm text-label-sm text-secondary mt-1 subtext-pro">{isYearly ? "Billed $390 annually" : "Billed $39 monthly"}</p>
</div>
<div className="space-y-space-sm mb-space-lg">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-dusk-blue font-semibold block mb-space-xs">Core Allowances</span>
<div className="flex items-center gap-space-xs text-jet-black font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-[18px]">domain</span>
<span className="font-bold">15 Websites</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">find_in_page</span>
<span className="font-semibold">50,000 Pages / mo</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">sync</span>
<span>Unrestricted Audit Runs</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-burnt-peach text-[18px]">auto_awesome</span>
<span className="font-semibold text-primary">500 AI Recommendations</span>
</div>
<div className="pt-space-sm space-y-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-start gap-space-xs font-semibold text-jet-black">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">done_all</span>
<span>Everything in Growth, plus:</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Competitor Search Radar</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>AI Visibility Metrics (where supported)</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>WordPress Instant Push Publishing</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Advanced Change History &amp; Audit Logs</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">group</span>
<span className="font-medium text-jet-black">10 Team Member Seats</span>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-burnt-peach text-[18px] shrink-0 mt-0.5">bolt</span>
<span className="font-semibold text-primary">Priority 24/7 Support Escalation</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md mt-auto">
<a className="w-full py-2.5 px-space-md rounded bg-jet-black text-on-primary font-label-lg text-label-lg flex items-center justify-center hover:bg-primary btn-effect hover:scale-105 transition-all duration-300 shadow-sm" href="#">
              Start Pro
            </a>
</div>
</div>
</div>
</section>

<section className="reveal w-full max-w-[1280px] mx-auto px-margin pt-space-xl pb-space-lg">
<div className="text-center max-w-2xl mx-auto mb-space-lg">
<span className="font-label-md text-label-md uppercase tracking-wider text-burnt-peach font-semibold">Tailored Workflows</span>
<h2 className="font-headline-lg text-headline-lg text-jet-black mt-1">Who is each plan designed for?</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          From solo side-projects to high-output client agencies, SEOtriks scales with your analytical demand.
        </p>
</div>
<div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[28px]">search</span>
</div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">Free Tier</span>
<h3 className="font-headline-sm text-headline-sm text-jet-black mt-1 mb-space-xs">Exploring Capabilities</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Designed for individual webmasters looking to test automated crawl health without committing budget. Ideal for small portfolio sites, blogs, and sandbox experiments.
            </p>
</div>
<div className="mt-space-md pt-space-md bg-surface-container-low/50 rounded-lg p-space-sm text-jet-black font-label-sm text-label-sm flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span>Zero friction entry point</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 rounded-lg bg-light-cyan flex items-center justify-center text-dusk-blue mb-space-md">
<span className="material-symbols-outlined text-[28px]">storefront</span>
</div>
<span className="font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-semibold">Starter Tier</span>
<h3 className="font-headline-sm text-headline-sm text-jet-black mt-1 mb-space-xs">Single Sites &amp; Creators</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Built for boutique ecommerce, local service providers, and indie founders who need recurring search protection, Search Console sync, and proactive warnings before indexing drops.
            </p>
</div>
<div className="mt-space-md pt-space-md bg-surface-container-low/50 rounded-lg p-space-sm text-jet-black font-label-sm text-label-sm flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">bolt</span>
<span>Turnkey continuous monitoring</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 rounded-lg bg-burnt-peach/10 flex items-center justify-center text-burnt-peach mb-space-md">
<span className="material-symbols-outlined text-[28px]">trending_up</span>
</div>
<span className="font-label-md text-label-md uppercase tracking-wider text-burnt-peach font-semibold">Growth Tier</span>
<h3 className="font-headline-sm text-headline-sm text-jet-black mt-1 mb-space-xs">Growing Brands &amp; Teams</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Engineered for multi-product companies, content departments, and SaaS marketers. Automate content decay identification, dispatch AI fixes, and verify impacts across 5 active domains.
            </p>
</div>
<div className="mt-space-md pt-space-md bg-surface-container-low/50 rounded-lg p-space-sm text-jet-black font-label-sm text-label-sm flex items-center gap-space-xs">
<span className="material-symbols-outlined text-burnt-peach text-[18px]">rocket_launch</span>
<span>Collaborative SEO workflows</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[28px]">hub</span>
</div>
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">Pro Tier</span>
<h3 className="font-headline-sm text-headline-sm text-jet-black mt-1 mb-space-xs">Agencies &amp; Portfolios</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Designed for boutique agencies, consultants, and enterprise network operators managing 15+ domains. Includes 50k page crawls, competitor radar, and direct WordPress staging sync.
            </p>
</div>
<div className="mt-space-md pt-space-md bg-surface-container-low/50 rounded-lg p-space-sm text-jet-black font-label-sm text-label-sm flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">shield</span>
<span>Multi-client agency power</span>
</div>
</div>
</div>
</section>

<section className="reveal w-full max-w-[1280px] mx-auto px-margin pt-space-xl pb-space-lg">
<div className="text-center max-w-3xl mx-auto mb-space-lg">
<span className="font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-semibold">Feature Matrix</span>
<h2 className="font-headline-lg text-headline-lg text-jet-black mt-1">Detailed Plan Breakdown</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Compare specifications side-by-side to find the right precision fit for your technical architecture.
        </p>
</div>

<div className="w-full overflow-x-auto bg-surface-container-lowest rounded-xl shadow-md p-space-md">
<table className="w-full min-w-[760px] text-left border-collapse">
<thead>
<tr className="bg-surface-container-low rounded-lg">
<th className="p-space-md font-headline-sm text-headline-sm text-jet-black w-2/5">Capabilities</th>
<th className="p-space-md font-headline-sm text-headline-sm text-jet-black text-center w-[15%]">Free</th>
<th className="p-space-md font-headline-sm text-headline-sm text-jet-black text-center w-[15%]">Starter</th>
<th className="p-space-md font-headline-sm text-headline-sm text-burnt-peach text-center w-[15%] bg-burnt-peach/5 rounded-t-lg">Growth</th>
<th className="p-space-md font-headline-sm text-headline-sm text-jet-black text-center w-[15%]">Pro</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm divide-y-0">

<tr className="bg-surface-container/60">
<td className="py-2.5 px-space-md font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-bold" colSpan={5}>
                1. Crawl Limits &amp; Technical SEO
              </td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Included Websites</td>
<td className="p-space-md text-center text-on-surface-variant">1</td>
<td className="p-space-md text-center text-on-surface-variant">1</td>
<td className="p-space-md text-center font-bold text-jet-black bg-burnt-peach/5">5</td>
<td className="p-space-md text-center font-bold text-jet-black">15</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Monthly Page Crawl Volume</td>
<td className="p-space-md text-center text-on-surface-variant">100 pages</td>
<td className="p-space-md text-center text-on-surface-variant">1,000 pages</td>
<td className="p-space-md text-center font-semibold text-jet-black bg-burnt-peach/5">10,000 pages</td>
<td className="p-space-md text-center font-bold text-jet-black">50,000 pages</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Audits Allowance / Month</td>
<td className="p-space-md text-center text-on-surface-variant">1</td>
<td className="p-space-md text-center text-on-surface-variant">5</td>
<td className="p-space-md text-center font-semibold text-jet-black bg-burnt-peach/5">20</td>
<td className="p-space-md text-center font-bold text-jet-black">Uncapped</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Technical Engine Depth</td>
<td className="p-space-md text-center text-on-surface-variant">Basic (Core CWV)</td>
<td className="p-space-md text-center text-on-surface-variant">Full Audit Suite</td>
<td className="p-space-md text-center font-medium text-jet-black bg-burnt-peach/5">Full Audit + Priority</td>
<td className="p-space-md text-center font-medium text-jet-black">Full + Deep JS Crawl</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">SEOtriks Composite Health Score</td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
<td className="p-space-md text-center bg-burnt-peach/5"><span className="material-symbols-outlined text-burnt-peach">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
</tr>

<tr className="bg-surface-container/60">
<td className="py-2.5 px-space-md font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-bold" colSpan={5}>
                2. AI Recommendations &amp; Optimization
              </td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Monthly AI Recommendations</td>
<td className="p-space-md text-center text-on-surface-variant">5</td>
<td className="p-space-md text-center text-on-surface-variant">25</td>
<td className="p-space-md text-center font-bold text-burnt-peach bg-burnt-peach/5">150</td>
<td className="p-space-md text-center font-bold text-jet-black">500</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">SEO Priority Engine</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center bg-burnt-peach/5"><span className="material-symbols-outlined text-burnt-peach">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Content Health &amp; Decay Detection</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center bg-burnt-peach/5"><span className="material-symbols-outlined text-burnt-peach">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Smart Content Refresh Prompts</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center bg-burnt-peach/5"><span className="material-symbols-outlined text-burnt-peach">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">AI Visibility Metrics</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center text-outline-variant bg-burnt-peach/5">—</td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary">check</span></td>
</tr>

<tr className="bg-surface-container/60">
<td className="py-2.5 px-space-md font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-bold" colSpan={5}>
                3. Monitoring &amp; Protection
              </td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">SEO Guard Engine</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center text-on-surface-variant">Basic (Weekly)</td>
<td className="p-space-md text-center font-medium text-jet-black bg-burnt-peach/5">Full Guard (Daily)</td>
<td className="p-space-md text-center font-medium text-jet-black">Advanced (Hourly alerts)</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Before/After SEO Impact Tracking</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center bg-burnt-peach/5"><span className="material-symbols-outlined text-burnt-peach">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Competitor Radar</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center text-outline-variant bg-burnt-peach/5">—</td>
<td className="p-space-md text-center font-medium text-jet-black">Included (Up to 10 competitors)</td>
</tr>

<tr className="bg-surface-container/60">
<td className="py-2.5 px-space-md font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-bold" colSpan={5}>
                4. Integrations &amp; Team Management
              </td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Google Search Console Integration</td>
<td className="p-space-md text-center text-on-surface-variant">Limited Insights</td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
<td className="p-space-md text-center bg-burnt-peach/5"><span className="material-symbols-outlined text-burnt-peach">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">WordPress Publishing Workflows</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center text-outline-variant">—</td>
<td className="p-space-md text-center bg-burnt-peach/5"><span className="material-symbols-outlined text-burnt-peach">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Team Member Seats</td>
<td className="p-space-md text-center text-on-surface-variant">1</td>
<td className="p-space-md text-center text-on-surface-variant">1</td>
<td className="p-space-md text-center font-semibold text-jet-black bg-burnt-peach/5">3 Seats</td>
<td className="p-space-md text-center font-bold text-jet-black">10 Seats</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-space-md text-jet-black font-medium">Support Tier</td>
<td className="p-space-md text-center text-on-surface-variant">Docs &amp; Community</td>
<td className="p-space-md text-center text-on-surface-variant">Standard Email</td>
<td className="p-space-md text-center text-jet-black bg-burnt-peach/5">Priority Queue</td>
<td className="p-space-md text-center font-semibold text-primary">Dedicated SLA (1 hr)</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="reveal w-full max-w-[1000px] mx-auto px-margin pt-space-xl pb-space-lg">
<div className="text-center max-w-2xl mx-auto mb-space-lg">
<span className="font-label-md text-label-md uppercase tracking-wider text-burnt-peach font-semibold">Clear Answers</span>
<h2 className="font-headline-lg text-headline-lg text-jet-black mt-1">Frequently Asked Questions</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Everything you need to know about billing cycles, quotas, and how SEOtriks handles your sites.
        </p>
</div>
<div className="space-y-space-sm" id="faq-accordion-group">

<FaqItem question="Do I need a credit card to get started with the Free tier?">No. The Free tier requires zero payment details. You simply sign up with your email or Google account, verify your site via Search Console or manual DNS, and receive immediate baseline diagnostics.</FaqItem>

<FaqItem question="Can I switch plans or upgrade anytime as my site grows?">Yes, upgrades take effect immediately. Any unused days on your previous subscription are credited automatically on a pro-rata basis toward your higher tier. Downgrades apply at the end of the active billing period.</FaqItem>

<FaqItem question="What are the cancellation terms? Is there a lock-in?">No long-term contracts. You can cancel your monthly or annual subscription directly from your settings tab with one click. You will retain full access until the end of your prepaid period and can export all audit records in CSV or PDF.</FaqItem>

<FaqItem question="What happens if my site reaches its monthly page crawl limit?">We never surprise you with unexpected overage invoices. If your audit reaches its quota (for instance 1,000 pages on Starter), SEOtriks audits the highest-impact pages by traffic and warns you. You can either wait for your quota reset or make a one-click tier expansion.</FaqItem>

<FaqItem question="Can I connect multiple Google Search Console properties?">Yes. Each website slot in Starter (1 site), Growth (5 sites), or Pro (15 sites) can connect its own dedicated Google Search Console property and Google Analytics 4 stream, keeping data strictly isolated per project.</FaqItem>

<FaqItem question="Do you offer a #1 ranking guarantee?">We maintain an honest, zero-hype policy: no tool or consultant can guarantee specific Google rankings. SEOtriks provides precise engineering audits, high-confidence AI optimizations, and silent regression alerts that give you the highest statistical edge in competitive SERPs.</FaqItem>

<FaqItem question="Is the SEOtriks WordPress plugin strictly required?">No. The WordPress companion plugin is entirely optional. It simply enables 1-click publishing of approved AI recommendations and direct schema synchronization. SEOtriks audits any website regardless of CMS, including Webflow, Shopify, Framer, and custom Next.js builds.</FaqItem>
</div>
</section>

<section className="reveal w-full max-w-[1280px] mx-auto px-margin pt-space-lg pb-space-xl">
<div className="bg-primary rounded-2xl p-space-xl text-center text-on-primary relative overflow-hidden shadow-xl">

<div className="absolute -right-20 -bottom-20 w-96 h-96 bg-burnt-peach/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -left-20 -top-20 w-96 h-96 bg-powder-blue/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
<span className="bg-surface/10 px-3.5 py-1 rounded-full text-light-cyan font-label-md text-label-md mb-space-md uppercase tracking-wider font-semibold">
            Zero Risk • Instant Analysis
          </span>
<h2 className="font-display-lg text-display-lg tracking-tight mb-space-sm">
            Start finding what matters.
          </h2>
<p className="font-body-lg text-body-lg text-surface-variant max-w-xl mb-space-lg">
            Run your first SEO audit in under 60 seconds and turn complex website problems into an orderly, verified action plan.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-space-md w-full justify-center">
<a className="w-full sm:w-auto px-space-xl py-3 rounded bg-burnt-peach text-on-primary font-label-lg text-label-lg btn-effect hover:opacity-95 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-space-xs" href="#">
<span>Start Free (No Credit Card Required)</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</a>
<a className="w-full sm:w-auto px-space-lg py-3 rounded bg-surface/10 text-on-primary font-label-lg text-label-lg hover:bg-surface/20 transition-colors flex items-center justify-center" href="#">
              Schedule Enterprise Demo
            </a>
</div>
<div className="mt-space-lg flex items-center gap-space-md text-light-cyan/80 font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">check</span> Instant domain crawl</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">check</span> No contract commitments</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">check</span> GDPR compliant</span>
</div>
</div>
</div>
</section>
</div>


</div></main><footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(41,50,65,0.03)]"><div className="max-w-[1280px] mx-auto px-margin pt-space-xl pb-space-lg"><div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl"><div className="lg:col-span-4 flex flex-col items-start gap-space-md"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">insights</span></div><span className="font-headline-sm text-headline-sm text-jet-black tracking-tight">SEOtriks</span></div><p className="font-body-md text-body-md text-on-surface-variant max-w-sm">SEO made actionable. Find what matters. Know what to fix. See what improved.</p><div className="flex items-center gap-space-sm pt-space-xs"><a aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-dusk-blue hover:bg-light-cyan hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">share</span></a><a aria-label="X" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-dusk-blue hover:bg-light-cyan hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">tag</span></a><a aria-label="Facebook" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-dusk-blue hover:bg-light-cyan hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">public</span></a><a aria-label="YouTube" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-dusk-blue hover:bg-light-cyan hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">play_circle</span></a><a aria-label="Instagram" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-dusk-blue hover:bg-light-cyan hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">photo_camera</span></a></div></div><div className="lg:col-span-2 flex flex-col gap-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-semibold">Product</span><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="services" href="/services">Features</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="seo-agent" href="#">SEO Agent</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="site-audit" href="#">Site Audit</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="seo-guard" href="#">SEO Guard</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="ai-visibility" href="#">AI Visibility</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="pricing" href="/pricing">Pricing</a></div><div className="lg:col-span-2 flex flex-col gap-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-semibold">Resources</span><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="blog" href="/blog">Blog</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="seo-guides" href="#">SEO Guides</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="help-center" href="#">Help Center</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="documentation" href="#">Documentation</a></div><div className="lg:col-span-2 flex flex-col gap-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-semibold">Company</span><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="about" href="/about">About</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="contact" href="/contact">Contact</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="partners" href="#">Partners</a></div><div className="lg:col-span-2 flex flex-col gap-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-semibold">Legal</span><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="privacy" href="#">Privacy</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="terms" href="#">Terms</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="cookie-policy" href="#">Cookie Policy</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="data-processing" href="#">Data Processing</a></div></div><div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container/50 rounded-xl px-space-md py-space-sm"><span className="font-body-sm text-body-sm text-on-surface-variant">© 2025 SEOtriks Inc. All rights reserved.</span><div className="flex items-center gap-space-md"><span className="font-label-sm text-label-sm text-secondary">Enterprise Precision SEO Platform</span></div></div></div></footer>
    </>
  );
}
