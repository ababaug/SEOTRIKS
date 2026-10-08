"use client";
export function TeamRbacContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full pb-16 space-y-8">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-4">
<div className="flex flex-col space-y-1.5 max-w-3xl">
<div className="flex items-center gap-2">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">Settings &amp; Billing</span>
<span className="text-surface-variant font-label-xs text-label-xs">/</span>
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-primary">Team &amp; Access Control</span>
</div>
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Team Management &amp; Granular RBAC Permissions</h1>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
        Manage enterprise seats, provision SAML 2.0 / SCIM IdP sync, enforce WebAuthn security policies, and orchestrate role-based privileges across engineering, SEO intelligence, and editorial squads.
      </p>
</div>
<div className="flex items-center flex-wrap gap-3 shrink-0">
<button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-md text-label-md font-semibold shadow-sm transition-all">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>SAML/SCIM Config</span>
</button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-md text-label-md font-semibold shadow-sm transition-all">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Export Access Matrix</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-[0_4px_14px_rgba(242,106,75,0.32)] hover:opacity-95 transition-opacity">
<span className="material-symbols-outlined text-[20px]">person_add</span>
<span>Invite Team Member</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-secondary-container/20 blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">Active Members</span>
<span className="p-2 rounded-xl bg-secondary-container/30 text-secondary">
<span className="material-symbols-outlined text-[20px]">group</span>
</span>
</div>
<div className="my-4">
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat font-bold text-on-surface tracking-tight">28</span>
<span className="font-label-md text-label-md text-secondary font-medium">/ 50 Seats</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" ></div>
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">
        6 Admins · 14 SEO Engs · 8 Content Leads
      </p>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">Pending Invites</span>
<span className="p-2 rounded-xl bg-primary-fixed text-primary font-bold">
<span className="material-symbols-outlined text-[20px]">outgoing_mail</span>
</span>
</div>
<div className="my-4">
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat font-bold text-on-surface tracking-tight">3</span>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-semibold">Expiring in 48h</span>
</div>
<div className="flex items-center gap-1.5 mt-3 text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
<span className="font-body-sm text-body-sm truncate">sre-crawler@stripe.com, +2 more</span>
</div>
</div>
<button className="font-label-xs text-label-xs font-semibold text-primary hover:underline text-left inline-flex items-center gap-1">
<span>Resend all outstanding requests</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">SSO / IdP Gateway</span>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-semibold">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Live SCIM</span>
</div>
</div>
<div className="my-4">
<div className="flex items-center gap-2">
<span className="font-headline-md text-headline-md font-bold text-on-surface">Okta SSO</span>
<span className="font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-secondary font-semibold">SAML 2.0</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">Automatic JIT Provisioning active</p>
</div>
<div className="flex items-center justify-between pt-2 border-t border-surface-container font-label-xs text-label-xs text-secondary">
<span>Last directory sync:</span>
<span className="font-semibold text-on-surface">12 minutes ago</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-secondary">RBAC Configurations</span>
<span className="p-2 rounded-xl bg-secondary-container/40 text-on-secondary-fixed">
<span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
</span>
</div>
<div className="my-4">
<div className="flex items-baseline gap-2">
<span className="font-metric-stat text-metric-stat font-bold text-on-surface tracking-tight">5</span>
<span className="font-label-md text-label-md text-secondary">Active Role Tiers</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">Custom granular policies enforced</p>
</div>
<div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs whitespace-nowrap">Owner</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs whitespace-nowrap">SecAdmin</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs whitespace-nowrap">Staff Eng</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs whitespace-nowrap">+2</span>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] overflow-hidden">
<div className="p-6 flex flex-col gap-4">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
<button className="px-3.5 py-1.5 rounded-xl font-label-md text-label-md font-semibold bg-secondary-container text-on-secondary-fixed shadow-sm">
            All Members <span className="ml-1 opacity-70">28</span>
</button>
<button className="px-3.5 py-1.5 rounded-xl font-label-md text-label-md font-medium text-secondary hover:bg-surface-container hover:text-on-surface transition-colors">
            Admins &amp; Owners <span className="ml-1 opacity-70">6</span>
</button>
<button className="px-3.5 py-1.5 rounded-xl font-label-md text-label-md font-medium text-secondary hover:bg-surface-container hover:text-on-surface transition-colors">
            SEO &amp; Engineering <span className="ml-1 opacity-70">14</span>
</button>
<button className="px-3.5 py-1.5 rounded-xl font-label-md text-label-md font-medium text-secondary hover:bg-surface-container hover:text-on-surface transition-colors">
            Content &amp; Marketing <span className="ml-1 opacity-70">8</span>
</button>
<button className="px-3.5 py-1.5 rounded-xl font-label-md text-label-md font-medium text-secondary hover:bg-surface-container hover:text-on-surface transition-colors">
            Service Accounts <span className="ml-1 opacity-70">4</span>
</button>
</div>
<div className="flex items-center gap-2">
<div className="relative flex items-center w-full sm:w-72">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span>
<input className="w-full pl-9 pr-3 py-1.5 bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Filter by name, email, scope..." type="text"/>
</div>
<button className="p-2 rounded-xl bg-surface-container-low text-secondary hover:bg-surface-container hover:text-on-surface transition-colors flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
</div>
</div>
<div className="flex items-center justify-between bg-surface-container-low px-4 py-2.5 rounded-xl">
<div className="flex items-center gap-3">
<input className="w-4 h-4 rounded text-primary focus:ring-secondary-container bg-surface-container-lowest" type="checkbox"/>
<span className="font-body-sm text-body-sm text-secondary font-medium">Select all 28 operators</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-[15px]">badge</span>
<span>Bulk Change Role</span>
</button>
<button className="px-3 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-[15px]">lock_reset</span>
<span>Force 2FA Reset</span>
</button>
<button className="px-3 py-1 rounded-lg bg-error-container text-on-error-container hover:opacity-90 font-label-xs text-label-xs font-semibold flex items-center gap-1.5 transition-opacity">
<span className="material-symbols-outlined text-[15px]">person_off</span>
<span>Revoke Access</span>
</button>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-3 px-6 w-10"></th>
<th className="py-3 px-6">Member &amp; Identity</th>
<th className="py-3 px-6">Role &amp; Title</th>
<th className="py-3 px-6">Squad / Cluster</th>
<th className="py-3 px-6">Privilege Scopes</th>
<th className="py-3 px-6">Last Active</th>
<th className="py-3 px-6">2FA WebAuthn</th>
<th className="py-3 px-6 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<input className="w-4 h-4 rounded text-primary focus:ring-secondary-container" type="checkbox"/>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Portrait photo of Marcus Vance, a senior tech lead wearing glasses in a modern office with deep navy and subtle coral interior lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOtYXPtgDJcL1Q4Mdgxvv4NNBOZ88hZt7YmnlkIPGDWoIXvyfJbMca5gE9nURWmj6dSqdYwG4fxPmQJ9f1KEkZrkXazQ73i141jZWvHCq6Ek8O2d4Zg4kMIfOiI49fbyqPYWP6EkOXVuTfRkUeI3MxkQef0jG4hmwQeklrbDXTXFXjSxrnWLK1Mj47R0YZj7LJktBKJTShjMxdAmYzw5tbtf6cbGFbZe_3JEf_35VDqE47tHKFdKmq"/>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold truncate">Marcus Vance</span>
<span className="px-1.5 py-0.2 rounded bg-primary-fixed text-primary font-label-xs text-label-xs font-bold uppercase">Owner</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">marcus.vance@stripe.com</span>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="font-body-md text-body-md font-semibold text-on-surface">Head of Tech SEO &amp; Web Platform</span>
</td>
<td className="py-4 px-6">
<span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-xs text-label-xs font-medium">Core Platform &amp; SRE</span>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1 max-w-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">Full Global (*.*)</span>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs">Billing Superadmin</span>
</div>
</td>
<td className="py-4 px-6 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Active Now</span>
</div>
</td>
<td className="py-4 px-6 whitespace-nowrap">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[18px] text-tertiary">key</span>
<span className="font-label-sm text-label-md text-on-surface">YubiKey 5C NFC</span>
</div>
</td>
<td className="py-4 px-6 text-right whitespace-nowrap">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">tune</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors ml-1">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<input className="w-4 h-4 rounded text-primary focus:ring-secondary-container" type="checkbox"/>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Portrait of Elena Rostova, female staff infrastructure engineer with dark hair wearing headphones in a high-tech modern workstation setup." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnowMsq6HxFD553h9sP2Gx6r-bws9fm11FyeKvKaaSxuuimyfmiLduji0TEjJXl1wA8bMkZ_wfsm15EoX4fhAYcmU3f6VjEbPuZbG2wDcXNip6zrK4ErF8qs52KtF2DbHmDYR82JjmBlK6h3XD4DBR6x75pJf09f02d-femV3hm0ggmx4cotK7U04WCZjA72DgeksgEZdjF4Sth1tZYa3MUUszwMqINkYU2bFmTqt_OfrkwszIphFj"/>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold truncate">Elena Rostova</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-secondary font-label-xs text-label-xs font-bold uppercase">SecAdmin</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">e.rostova@stripe.com</span>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="font-body-md text-body-md font-semibold text-on-surface">Staff Infrastructure Engineer</span>
</td>
<td className="py-4 px-6">
<span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-xs text-label-xs font-medium">Edge &amp; Cloudflare Workers</span>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1 max-w-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">DNS Routing</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">Edge Hotfixes</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">Robots.txt</span>
</div>
</td>
<td className="py-4 px-6 whitespace-nowrap">
<span className="font-body-sm text-body-sm text-secondary">14m ago</span>
</td>
<td className="py-4 px-6 whitespace-nowrap">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[18px] text-tertiary">fingerprint</span>
<span className="font-label-sm text-label-md text-on-surface">Touch ID Passkey</span>
</div>
</td>
<td className="py-4 px-6 text-right whitespace-nowrap">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">tune</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors ml-1">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<input className="w-4 h-4 rounded text-primary focus:ring-secondary-container" type="checkbox"/>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Portrait of David Chen, principal growth engineer smiling in a brightly illuminated tech hub office with ambient blue and soft slate background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACMSM1wfXZjOvgjcUkd8hIpi0X4i1Pxc1v6vMskE500dIXObpiMAtjXTyynGMyqRY9R5tsvDsJcRV2hHhKRY5vdCzIahKZ3qafcNCqdcgQstD59i8x33sll5KyRZIQc40ES1QIstHhYl9Po1Uea9PvRCqQmIC5EBGKIcNdMiqzXNmLl6qE7i0AuEMXwYVLGi0OKbESnoWaWBi-dNO34B4k3XWR7KDnGpXMCt4mHOZNN7HSAHiF8R3w"/>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold truncate">David Chen</span>
<span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-fixed font-label-xs text-label-xs font-bold uppercase">Staff Eng</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">dchen@stripe.com</span>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="font-body-md text-body-md font-semibold text-on-surface">Principal Growth &amp; SEO Lead</span>
</td>
<td className="py-4 px-6">
<span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-xs text-label-xs font-medium">Growth Engineering</span>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1 max-w-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">Crawl Simulator</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">GSC Pipeline</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">Index API</span>
</div>
</td>
<td className="py-4 px-6 whitespace-nowrap">
<span className="font-body-sm text-body-sm text-secondary">1h ago</span>
</td>
<td className="py-4 px-6 whitespace-nowrap">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[18px] text-tertiary">fingerprint</span>
<span className="font-label-sm text-label-md text-on-surface">Hardware Passkey</span>
</div>
</td>
<td className="py-4 px-6 text-right whitespace-nowrap">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">tune</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors ml-1">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4 px-6">
<input className="w-4 h-4 rounded text-primary focus:ring-secondary-container" type="checkbox"/>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Portrait of Sarah Jenkins, senior content director reviewing analytics dashboards in an ultra-modern minimal workspace with clean warm daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3_9QbmzYTm_rJ2fSkbcenhWXK8hlyPtIrwuyi3yw9mTJxXSAceKSbL1SQcGZIljslqdVcggZRF68wpQUXPlpZQVrq4dY52yYELXfv1k3OpA1NNIOTDnS9aGb1YukHTJ2dbg8OJW758FvCXecoGlP0DkacKxi_CPgtQsQY0T6Ut94HpTR-R-6_WvjkSuiTLJQR1RFIvuP9LDxqtplvpT3AScul-_021t6zAHVWj3SK8AIoSYGBm__o"/>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold truncate">Sarah Jenkins</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-container font-label-xs text-label-xs font-bold uppercase">Strategist</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">sjenkins@stripe.com</span>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="font-body-md text-body-md font-semibold text-on-surface">Senior Content Director</span>
</td>
<td className="py-4 px-6">
<span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-xs text-label-xs font-medium">Docs &amp; Editorial</span>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1 max-w-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">Content Hub</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">AI Brief Generator</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">CMS Webhook</span>
</div>
</td>
<td className="py-4 px-6 whitespace-nowrap">
<span className="font-body-sm text-body-sm text-secondary">3h ago</span>
</td>
<td className="py-4 px-6 whitespace-nowrap">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[18px] text-secondary">phonelink_lock</span>
<span className="font-label-sm text-label-md text-on-surface">Okta Verify OTP</span>
</div>
</td>
<td className="py-4 px-6 text-right whitespace-nowrap">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">tune</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors ml-1">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors bg-surface-container-low/20">
<td className="py-4 px-6">
<input className="w-4 h-4 rounded text-primary focus:ring-secondary-container" type="checkbox"/>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 font-bold">
<span className="material-symbols-outlined text-[20px]">smart_toy</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title text-title text-on-surface font-semibold truncate">Okta SCIM Bot</span>
<span className="px-1.5 py-0.2 rounded bg-surface-variant text-secondary font-label-xs text-label-xs font-bold uppercase">Service Acc</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">bot-scim-sync@stripe.iam.gserviceaccount.com</span>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="font-body-md text-body-md font-semibold text-on-surface">Directory Automation Daemon</span>
</td>
<td className="py-4 px-6">
<span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-xs text-label-xs font-medium">SecOps &amp; IAM</span>
</td>
<td className="py-4 px-6">
<div className="flex flex-wrap gap-1 max-w-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">Users:ReadWrite</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">Roles:Assign</span>
</div>
</td>
<td className="py-4 px-6 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">Running</span>
</div>
</td>
<td className="py-4 px-6 whitespace-nowrap">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[18px] text-secondary">token</span>
<span className="font-label-sm text-label-md text-on-surface">mTLS &amp; RSA 4096</span>
</div>
</td>
<td className="py-4 px-6 text-right whitespace-nowrap">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">tune</span>
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-secondary hover:text-on-surface transition-colors ml-1">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-surface-container-low flex items-center justify-between font-label-xs text-label-xs text-secondary">
<span>Showing 5 of 28 Active Members</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-secondary shadow-sm hover:text-on-surface">Previous</button>
<span className="px-2 py-1 font-semibold text-on-surface">Page 1 of 6</span>
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-secondary shadow-sm hover:text-on-surface">Next</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
<div className="xl:col-span-7 bg-surface-container-lowest rounded-2xl p-6 shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-4 border-b border-surface-container">
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Role Privilege Matrix</h2>
<p className="font-body-sm text-body-sm text-secondary">Detailed granular access permissions across all configured tiers</p>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-xs text-label-xs font-semibold transition-colors">
<span className="material-symbols-outlined text-[16px]">add_moderator</span>
<span>Create Custom Role</span>
</button>
</div>
<div className="overflow-x-auto mt-4">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="text-secondary font-label-xs text-label-xs uppercase">
<th className="py-2.5">Scope Capability</th>
<th className="py-2.5 text-center">Owner</th>
<th className="py-2.5 text-center">SecAdmin</th>
<th className="py-2.5 text-center">Staff Eng</th>
<th className="py-2.5 text-center">Strategist</th>
<th className="py-2.5 text-center">Viewer</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
<tr>
<td className="py-3 font-medium text-on-surface">
<div className="flex flex-col">
<span>Edge Worker Hotfixes</span>
<span className="font-body-sm text-body-sm text-secondary">Bypass staging to push edge canonical redirects</span>
</div>
</td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-secondary text-[20px]">cancel</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-secondary text-[20px]">cancel</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-secondary text-[20px]">cancel</span></td>
</tr>
<tr>
<td className="py-3 font-medium text-on-surface">
<div className="flex flex-col">
<span>Robots.txt &amp; LLM Bot Directives</span>
<span className="font-body-sm text-body-sm text-secondary">Direct commit to root disallow directives</span>
</div>
</td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-secondary text-[20px]">cancel</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-secondary text-[20px]">cancel</span></td>
</tr>
<tr>
<td className="py-3 font-medium text-on-surface">
<div className="flex flex-col">
<span>LLM Synthesis &amp; API Usage</span>
<span className="font-body-sm text-body-sm text-secondary">Generate programmatic clusters &amp; run SERP audits</span>
</div>
</td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-secondary text-[20px]">cancel</span></td>
</tr>
<tr>
<td className="py-3 font-medium text-on-surface">
<div className="flex flex-col">
<span>Enterprise Billing &amp; Invoicing</span>
<span className="font-body-sm text-body-sm text-secondary">Add crawler credits, view tax receipts and ACH methods</span>
</div>
</td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-primary text-[20px]">check_circle</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-secondary text-[20px]">cancel</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-secondary text-[20px]">cancel</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-secondary text-[20px]">cancel</span></td>
<td className="py-3 text-center"><span className="material-symbols-outlined text-secondary text-[20px]">cancel</span></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="pt-4 mt-4 border-t border-surface-container flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary">Policies synced automatically with IAM governance engine</span>
<button className="font-label-xs text-label-xs text-primary font-bold hover:underline">Edit Custom Matrix Rulebook</button>
</div>
</div>
<div className="xl:col-span-5 bg-surface-container-lowest rounded-2xl p-6 shadow-[0_1px_3px_rgba(35,63,99,0.04),0_6px_16px_-4px_rgba(35,63,99,0.06)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-4 border-b border-surface-container">
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Access &amp; Privilege Audit Log</h2>
<p className="font-body-sm text-body-sm text-secondary">Immutable stream of role transitions &amp; security events</p>
</div>
<span className="flex items-center gap-1 font-label-xs text-label-xs font-semibold px-2 py-1 rounded bg-secondary-container/40 text-on-secondary-fixed">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Real-time</span>
</span>
</div>
<div className="space-y-4 mt-5">
<div className="flex items-start gap-3.5">
<div className="p-2 rounded-xl bg-primary-fixed text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate">Role Promoted: David Chen</span>
<span className="font-label-xs text-label-xs text-secondary whitespace-nowrap">22m ago</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Marcus Vance assigned Staff Eng role tier. Scope: GSC Pipeline &amp; Edge Canary.</p>
</div>
</div>
<div className="flex items-start gap-3.5">
<div className="p-2 rounded-xl bg-secondary-container/40 text-secondary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">sync_saved_locally</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate">Okta SCIM Reconciliation</span>
<span className="font-label-xs text-label-xs text-secondary whitespace-nowrap">1h ago</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">28 active accounts verified against Stripe Corporate Okta Directory. 0 discrepancies.</p>
</div>
</div>
<div className="flex items-start gap-3.5">
<div className="p-2 rounded-xl bg-error-container text-on-error-container shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">key_off</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate">API Key Revoked</span>
<span className="font-label-xs text-label-xs text-secondary whitespace-nowrap">4h ago</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Dev-Staging API token revoked by Elena Rostova due to automated secret rotation.</p>
</div>
</div>
<div className="flex items-start gap-3.5">
<div className="p-2 rounded-xl bg-tertiary-fixed text-on-tertiary-container shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">security_update_good</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate">WebAuthn Enforced</span>
<span className="font-label-xs text-label-xs text-secondary whitespace-nowrap">Yesterday</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Global policy enforced: SMS OTP disabled. 100% hardware token compliance achieved.</p>
</div>
</div>
</div>
</div>
<div className="pt-4 mt-6 border-t border-surface-container flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary">Retained for 365 days (SOC2 Type II)</span>
<button className="font-label-xs text-label-xs font-semibold text-secondary hover:text-on-surface flex items-center gap-1">
<span>View SIEM Export</span>
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</button>
</div>
</div>
</div>
</div>
</main>
  )
}