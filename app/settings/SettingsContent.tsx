"use client";
export function SettingsContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full pb-space-2xl">
{/*  Top Breadcrumb & Page Command Strip  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md py-space-lg mb-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs font-label-xs text-label-xs tracking-wider uppercase text-secondary font-semibold">
<span>Settings &amp; Billing</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface">Organization Settings</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Organization Profile, Domains &amp; Governance</h1>
<p className="font-body-md text-body-md text-secondary max-w-4xl">
        Configure multi-region entity profiles, verify domain ownership, data residency policies, and enterprise compliance defaults for <span className="font-semibold text-on-surface">stripe.com</span>.
      </p>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-center shrink-0">
<button className="flex items-center gap-1.5 px-space-md py-2.5 bg-surface-container text-secondary font-label-md text-label-md font-semibold rounded-xl hover:bg-surface-container-high transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
<span>Export Audit Log</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2.5 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-xl shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 transition-opacity">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Save Changes</span>
</button>
</div>
</div>
{/*  KPI Precision Grid (Level 2 Cards)  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-lg mb-space-xl">
{/*  Card 1  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between relative overflow-hidden group">
<div className="flex items-start justify-between mb-space-sm">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Verified Domains</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-xs text-label-xs font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Operational
        </span>
</div>
<div>
<div className="flex items-baseline gap-space-xs mb-1">
<span className="font-metric-stat text-metric-stat text-on-surface">6 Active</span>
<span className="font-label-md text-label-md text-secondary">/ 12 quota</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">stripe.com primary • 3 staging clusters</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-label-xs text-label-xs text-secondary">DNS Synced 4m ago</span>
<span className="material-symbols-outlined text-secondary text-sm group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between relative overflow-hidden">
<div className="flex items-start justify-between mb-space-sm">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Data Residency</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold">Multi-Region</span>
</div>
<div>
<div className="flex items-baseline gap-space-xs mb-1">
<span className="font-metric-stat text-metric-stat text-on-surface">US-VA + EU-DE</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Frankfurt failover • SOC2 + GDPR</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1.5 font-label-xs text-label-xs text-secondary font-medium">
<span className="material-symbols-outlined text-[14px] text-primary-container">lock</span>
<span>Zero cross-border telemetry leakage</span>
</div>
</div>
{/*  Card 3  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between relative overflow-hidden">
<div className="flex items-start justify-between mb-space-sm">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Security Protocol</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-bold">Strict SAML</span>
</div>
<div>
<div className="flex items-baseline gap-space-xs mb-1">
<span className="font-metric-stat text-metric-stat text-on-surface">WebAuthn 2FA</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Hardware FIDO2 keys enforced</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1.5 font-label-xs text-label-xs text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>0 bypass exceptions configured</span>
</div>
</div>
{/*  Card 4  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between relative overflow-hidden">
<div className="flex items-start justify-between mb-space-sm">
<span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">Retention &amp; Storage</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold">Cold + Hot</span>
</div>
<div>
<div className="flex items-baseline gap-space-xs mb-1">
<span className="font-metric-stat text-metric-stat text-on-surface">14.8 TB</span>
<span className="font-label-md text-label-md text-secondary">Managed</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">24 Mo. SERP &amp; Crawl Raw Telemetry</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
<span className="font-label-xs text-label-xs text-secondary ml-2 shrink-0">68%</span>
</div>
</div>
</div>
{/*  Section 1 & Organization Meta Context (Asymmetric 12-col Split)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
{/*  Left: Main Entity Configuration Form (8 cols)  */}
<div className="lg:col-span-8 bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)]">
<div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-low -mx-space-lg -mt-space-lg p-space-lg rounded-t-2xl">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[22px]">corporate_fare</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Organization &amp; Entity Profile</h2>
<p className="font-body-sm text-body-sm text-secondary">Global brand credentials, tenant slug identifiers, and localization controls.</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-container-lowest font-label-xs text-label-xs font-semibold text-secondary shadow-sm">Tenant ID: 994-01-STRP</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/*  Field 1  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">Legal Company Name</label>
<input className="px-3.5 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all" type="text" value="Stripe Global Inc."/>
<span className="font-label-xs text-label-xs text-secondary">Displayed on automated executive PDF audits and reports.</span>
</div>
{/*  Field 2: Slug with Copy  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">Organization Slug</label>
<div className="relative flex items-center">
<input className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-surface-container-low font-body-md text-body-md text-secondary font-mono select-all focus:outline-none" readOnly type="text" value="org_seotriks_884920"/>
<button className="absolute right-2 p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="Copy slug">
<span className="material-symbols-outlined text-base">content_copy</span>
</button>
</div>
<span className="font-label-xs text-label-xs text-secondary">Unique system identifier for REST Webhooks and edge middleware routing.</span>
</div>
{/*  Field 3  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">Primary Contact &amp; Technical Admin</label>
<div className="flex items-center gap-space-sm p-2 rounded-xl bg-surface-container-low">
<img className="w-9 h-9 rounded-lg object-cover" data-alt="Professional modern portrait headshot of senior technical administrator Marcus Vance wearing glasses and dark tech company attire in bright modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqQZZNzBcCclHW_FV0ZMjicIuS-BO_pajXQCB70TMb9By3xMuyxgyyrFU9bsS0G5TtP3pYEV45YUZ7p3Bmv9tdaSHdC5Vo9jIVQnbje5pfZAT6y89f8Ggg29LzZZXthbnhDtGstIYEjqK9CREwjgYyPU0JlqnEG0R2DAdifmLXFmSkGSx9sEHtce3Zci9e47Y-2OZcF_VdsrHzo8gr8N_RDBy6wCSDIJicP4pzAL0Tog54QFTtlHIi"/>
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">Marcus Vance</p>
<p className="font-label-xs text-label-xs text-secondary truncate">marcus.vance@stripe.com</p>
</div>
<button className="px-2 py-1 bg-surface-container-lowest rounded-lg font-label-xs text-label-xs text-secondary hover:text-on-surface transition-colors shadow-sm">Change</button>
</div>
</div>
{/*  Field 4  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">Default Engine Timezone &amp; Locale</label>
<div className="grid grid-cols-2 gap-2">
<select className="px-3 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none">
<option defaultChecked>UTC (Etc/UTC)</option>
<option>US/Pacific (PST)</option>
<option>Europe/Berlin (CET)</option>
</select>
<select className="px-3 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none">
<option defaultChecked>English (US)</option>
<option>English (UK)</option>
<option>French (FR)</option>
</select>
</div>
<span className="font-label-xs text-label-xs text-secondary">Controls delta normalization for daily rank tracker checks.</span>
</div>
</div>
{/*  White-labeling Block  */}
<div className="mt-space-lg pt-space-lg bg-surface-container-low/60 rounded-xl p-space-md">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-lg">branding_watermark</span>
<span className="font-title text-title text-on-surface">White-label Reporting &amp; Custom CNAME</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
<div>
<label className="font-label-xs text-label-xs font-semibold text-secondary uppercase tracking-wider block mb-1">Custom Analytics CNAME Host</label>
<div className="flex items-center gap-2">
<input className="flex-1 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none" type="text" value="seo.stripe.corp"/>
<span className="px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold shrink-0">CNAME Valid</span>
</div>
</div>
<div>
<label className="font-label-xs text-label-xs font-semibold text-secondary uppercase tracking-wider block mb-1">PDF Header Watermark</label>
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-lowest shadow-sm">
<span className="font-body-sm text-body-sm text-on-surface">stripe-symbol-indigo.svg (14 KB)</span>
<button className="font-label-xs text-label-xs text-primary-container font-semibold hover:underline">Replace</button>
</div>
</div>
</div>
</div>
</div>
{/*  Right: Governance Architecture & Real-Time Topology (4 cols)  */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/*  High Density Visual Status Card  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-headline-sm text-headline-sm text-on-surface">Data Sovereignty</span>
<span className="material-symbols-outlined text-secondary">shield</span>
</div>
<div className="relative w-full h-36 rounded-xl overflow-hidden mb-space-md bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Abstract sleek minimal visual architecture diagram depicting high-security cloud multi-region database routing with soft cyan and navy nodes and glowing connection pathways" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx2tENW3mKRzkFhv5rhUNVY43JU-SHKA771F957-cn7zcBQKqIt3izTl0Lq-bn8pdiM70SU4tAUrgNsMzHnTqoeLANZtbIjPpRxBv-JUaXdXas_j6sE18Svhzt2eeAM-jCZZ4Idb3r0ghJDtSVOqn37Y54CR9jCdeyPxCwMVPq1pYmTGjGR8b6grJceBy7jCNyfhfse2iwxj6h-KUuYDbWvlCOaRDp7Mczzct4asME97H1L_YATOsV"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-3 right-3 flex justify-between items-end">
<div>
<span className="font-label-xs text-label-xs font-bold text-on-surface bg-surface-container-lowest/90 px-2 py-0.5 rounded shadow-sm">Tier-4 Sovereign Hub</span>
</div>
<span className="font-label-xs text-label-xs text-secondary bg-surface-container-lowest/90 px-1.5 py-0.5 rounded font-mono">AWS + GCP Cloud</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-md">
            Payload encryption keys are held in dedicated Hardware Security Modules (HSM) residing under EU jurisdiction.
          </p>
</div>
<div className="space-y-space-xs font-body-sm text-body-sm">
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Failover Latency:</span>
<span className="font-semibold text-on-surface font-mono">14ms (P99)</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Disaster Recovery RPO:</span>
<span className="font-semibold text-on-surface font-mono">&lt; 15 seconds</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Crawl Bot IP Pool:</span>
<span className="font-semibold text-on-surface">Dedicated Elastic (256 CIDR)</span>
</div>
</div>
</div>
{/*  Quick Fast Action Box  */}
<div className="bg-secondary-container/40 p-space-md rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-2xl">verified_user</span>
<div>
<p className="font-title text-title text-on-secondary-fixed">DPA &amp; BAA Agreements</p>
<p className="font-label-xs text-label-xs text-secondary">Fully signed enterprise data addendum</p>
</div>
</div>
<button className="px-2.5 py-1.5 bg-surface-container-lowest rounded-lg font-label-xs text-label-xs font-bold text-secondary shadow-sm hover:bg-surface-container transition-colors">
          View PDF
        </button>
</div>
</div>
</div>
{/*  Section 2: Managed Domains & Ownership Verification Table (High Density SaaS Table)  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] mb-space-xl">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Managed Domains &amp; DNS Verification</h2>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-semibold">4 / 6 Active In Service</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Configure real-time automated edge audits, bot simulation parameters, and TXT cryptographic signatures per root domain.
        </p>
</div>
<button className="flex items-center gap-1.5 px-space-md py-2 bg-secondary text-on-secondary font-label-md text-label-md font-semibold rounded-xl hover:opacity-95 shadow-sm transition-opacity">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Add Monitored Domain</span>
</button>
</div>
{/*  Table Container  */}
<div className="overflow-x-auto rounded-xl">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low text-secondary uppercase font-label-xs text-label-xs">
<tr>
<th className="py-3 px-4 font-semibold">Domain &amp; Root Subdomain</th>
<th className="py-3 px-4 font-semibold">Environment</th>
<th className="py-3 px-4 font-semibold">Verification Protocol</th>
<th className="py-3 px-4 font-semibold">Auto-Crawl Cadence</th>
<th className="py-3 px-4 font-semibold">Edge Proxy State</th>
<th className="py-3 px-4 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y-0">
{/*  Row 1: Primary  */}
<tr className="hover:bg-surface/80 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-space-sm">
<div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
<div className="flex flex-col">
<span className="font-title text-title text-on-surface">stripe.com</span>
<span className="font-label-xs text-label-xs text-secondary font-mono">Origin: Cloudflare Enterprise</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold uppercase">
                Primary Production
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">verified</span>
<span className="font-label-md text-label-md text-on-surface font-medium">DNS TXT Verified</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono">Token: stx_492a00...d9</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span>Active every 6h</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Depth: 100k URLs max</span>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-lg bg-surface-container text-secondary font-label-xs text-label-xs font-medium">Bypass Worker: Live</span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="Settings">
<span className="material-symbols-outlined text-base">tune</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="DNS Record">
<span className="material-symbols-outlined text-base">dns</span>
</button>
</div>
</td>
</tr>
{/*  Row 2: stripe.dev  */}
<tr className="bg-surface-container-low/30 hover:bg-surface/80 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-space-sm">
<div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
<div className="flex flex-col">
<span className="font-title text-title text-on-surface">stripe.dev</span>
<span className="font-label-xs text-label-xs text-secondary font-mono">Origin: Fastly VCL</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-xs text-label-xs font-bold uppercase">
                Developer Hub
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">verified</span>
<span className="font-label-md text-label-md text-on-surface font-medium">DNS CNAME Sync</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono">Token: stx_812c31...02</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span>Active every 12h</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Depth: 45k API docs</span>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-lg bg-surface-container text-secondary font-label-xs text-label-xs font-medium">Varnish Hook: Up</span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="Settings">
<span className="material-symbols-outlined text-base">tune</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="DNS Record">
<span className="material-symbols-outlined text-base">dns</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: stripe.fr  */}
<tr className="hover:bg-surface/80 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-space-sm">
<div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
<div className="flex flex-col">
<span className="font-title text-title text-on-surface">stripe.fr</span>
<span className="font-label-xs text-label-xs text-secondary font-mono">Origin: Cloudflare EU</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-xs text-label-xs font-bold uppercase">
                Localized Regional
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">verified</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Meta Tag Verified</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono">Token: stx_331ee9...bb</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span>Active Daily</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Depth: 12k French paths</span>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-lg bg-surface-container text-secondary font-label-xs text-label-xs font-medium">Bypass Worker: Live</span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="Settings">
<span className="material-symbols-outlined text-base">tune</span>
</button>
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="DNS Record">
<span className="material-symbols-outlined text-base">dns</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: staging.checkout.stripe.net  */}
<tr className="bg-surface-container-low/30 hover:bg-surface/80 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-space-sm">
<div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
<div className="flex flex-col">
<span className="font-title text-title text-on-surface">staging.checkout.stripe.net</span>
<span className="font-label-xs text-label-xs text-secondary font-mono">Internal VPC Gateway</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold uppercase">
                Staging Cluster
              </span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-container text-sm">security</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Strict Basic Auth &amp; mTLS</span>
</div>
<span className="font-label-xs text-label-xs text-secondary font-mono">Header injected by crawler</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>On CI/CD Deploy Webhook</span>
</div>
<span className="font-label-xs text-label-xs text-secondary">Depth: Dynamic Delta</span>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-xs text-label-xs font-medium">Direct Tunnel (WireGuard)</span>
</td>
<td className="py-3.5 px-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="Settings">
<span className="material-symbols-outlined text-base">tune</span>
</button>
<button className="p-1.5 rounded-lg text-error hover:bg-error-container hover:text-on-error-container transition-colors" title="Remove">
<span className="material-symbols-outlined text-base">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Section 3: Data Privacy, Compliance & Retention Governance Policies  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)]">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-lg mb-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
<span className="material-symbols-outlined text-[22px]">gavel</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Data Privacy, Compliance &amp; Retention Policies</h2>
<p className="font-body-sm text-body-sm text-secondary">Enforce regulatory compliance rules across all automated audits, integrations, and telemetry pipelines.</p>
</div>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-xl bg-surface-container text-on-surface">
<span className="material-symbols-outlined text-primary-container text-sm">check_circle</span>
<span className="font-label-md text-label-md font-semibold">SOC2 Type II Attested</span>
</div>
</div>
{/*  Policy Controls Matrix  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mb-space-xl">
{/*  Policy Item 1  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-title text-title text-on-surface">GDPR IP Anonymization on Crawl Logs</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold">Required</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
            Truncate last octet (IPv4) or 80 bits (IPv6) of origin visitor logs before indexing crawl performance data.
          </p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
{/*  Policy Item 2  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-title text-title text-on-surface">Search Console API Token Auto-Rotation</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold">Standard</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
            Enforce proactive OAuth token revoking and re-authorization intervals to prevent stale service credentials.
          </p>
</div>
<div className="shrink-0 mt-1">
<select className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none">
<option>Every 30 days</option>
<option defaultChecked>Every 90 days</option>
<option>Every 180 days</option>
</select>
</div>
</div>
{/*  Policy Item 3  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-title text-title text-on-surface">LLM Prompt Masking &amp; PII Scrubbing</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold">Active</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
            Filter all internal URL slug names and metadata through automated regex masks before submitting to AI generation agents.
          </p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
{/*  Policy Item 4  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-title text-title text-on-surface">Audit Trail &amp; SERP Snapshot Retention</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-bold">Storage Policy</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
            Duration for retaining uncompressed HTML DOM renders, lighthouse traces, and search engine SERP captures.
          </p>
</div>
<div className="shrink-0 mt-1">
<select className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none">
<option>12 Months</option>
<option defaultChecked>24 Months (Enterprise)</option>
<option>36 Months</option>
<option>Indefinite Glacier</option>
</select>
</div>
</div>
</div>
{/*  Security Contact & Compliance Download Banner  */}
<div className="p-space-lg rounded-2xl bg-secondary text-on-secondary flex flex-col lg:flex-row lg:items-center justify-between gap-space-md shadow-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-on-secondary/10 flex items-center justify-center text-on-secondary shrink-0">
<span className="material-symbols-outlined text-[28px]">policy</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm tracking-tight text-on-secondary">Enterprise Compliance Attestation &amp; Penetration Report</h3>
<p className="font-body-sm text-body-sm text-on-secondary/80">
            Latest third-party audit completed November 2024. Next annual certification scheduled for Q4 2025.
          </p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="px-space-md py-2.5 bg-on-secondary/15 hover:bg-on-secondary/25 text-on-secondary rounded-xl font-label-md text-label-md font-semibold transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Security Team Portal</span>
</button>
<button className="px-space-md py-2.5 bg-primary-container text-on-primary rounded-xl font-label-md text-label-md font-semibold transition-opacity shadow-[0_4px_12px_rgba(242,106,75,0.28)] hover:opacity-95 flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Download SOC2 Package (ZIP)</span>
</button>
</div>
</div>
</div>
</div>
</main>
  )
}