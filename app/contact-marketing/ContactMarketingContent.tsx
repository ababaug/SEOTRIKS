"use client";
export function ContactMarketingContent() {
  return (
<main className="w-full min-h-screen">
<div className="flex flex-col w-full">
{/*  Decorative Ambient Grid & Glow Backdrops  */}
<div className="relative w-full overflow-hidden bg-surface">
<div className="absolute -top-40 right-10 w-[520px] h-[520px] rounded-full bg-light-cyan/60 blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-80 -left-32 w-[420px] h-[420px] rounded-full bg-powder-blue/20 blur-3xl pointer-events-none -z-10"></div>
{/*  1. CONTACT HERO  */}
<section className="max-w-[1280px] mx-auto px-margin pt-space-xl pb-space-lg">
<div className="flex flex-col items-start max-w-3xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container mb-space-md">
<span className="w-2 h-2 rounded-full bg-burnt-peach animate-pulse"></span>
<span className="font-label-sm text-label-sm tracking-wider uppercase">Direct Engineering &amp; Client Access</span>
</div>
<h1 className="font-display-lg text-display-lg text-jet-black tracking-tight mb-space-sm">
          Let's talk SEO.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Have a question about SEOtriks, your account, enterprise partnerships, or custom integrations? We're here to help you scale organic visibility with architectural precision.
        </p>
{/*  Rapid Status Strip  */}
<div className="mt-space-md flex flex-wrap items-center gap-space-lg pt-space-xs text-on-surface-variant">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-dusk-blue">bolt</span>
<span className="font-label-md text-label-md">Average Response: <strong className="text-jet-black font-semibold">&lt; 114 mins</strong></span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-dusk-blue">verified_user</span>
<span className="font-label-md text-label-md">SOC-2 Type II Verified Facility</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-dusk-blue">schedule</span>
<span className="font-label-md text-label-md">Support SLA: <strong className="text-jet-black font-semibold">99.98%</strong></span>
</div>
</div>
</div>
</section>
{/*  2. QUICK SUPPORT / CHANNEL CARDS (3 Columns)  */}
<section className="max-w-[1280px] mx-auto px-margin pb-space-xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Card 1: PRODUCT SUPPORT  */}
<div className="group relative flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-lg bg-light-cyan flex items-center justify-center mb-space-md text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">terminal</span>
</div>
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-dusk-blue font-semibold">Technical Inquiries</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-jet-black mb-space-xs">Product Support</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Need technical help, API key provisioning, or immediate bug investigation for web crawls?
            </p>
</div>
<div className="pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-xl flex items-center justify-between">
<a className="font-label-lg text-label-lg text-primary hover:text-burnt-peach transition-colors flex items-center gap-1" href="mailto:support@seotriks.com">
              support@seotriks.com
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-lowest px-2 py-0.5 rounded shadow-sm">&lt; 2 hours</span>
</div>
</div>
{/*  Card 2: SALES & ENTERPRISE  */}
<div className="group relative flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center mb-space-md text-on-secondary-container group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">domain</span>
</div>
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-dusk-blue font-semibold">Multi-Domain Architecture</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-jet-black mb-space-xs">Sales &amp; Enterprise</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Evaluating SEOtriks for 20+ websites, bespoke webhook pipelines, or complex agency workflows?
            </p>
</div>
<div className="pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-xl flex items-center justify-between">
<a className="font-label-lg text-label-lg text-primary hover:text-burnt-peach transition-colors flex items-center gap-1" href="mailto:sales@seotriks.com">
              sales@seotriks.com
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
</a>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-lowest px-2 py-0.5 rounded shadow-sm">15-min demo</span>
</div>
</div>
{/*  Card 3: PARTNERSHIPS & PRESS  */}
<div className="group relative flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-space-md text-dusk-blue group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">handshake</span>
</div>
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-dusk-blue font-semibold">Ecosystem Growth</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-jet-black mb-space-xs">Partnerships &amp; Press</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Interested in co-marketing research, affiliate channel commissions, or citing our SERP indexes?
            </p>
</div>
<div className="pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-xl flex items-center justify-between">
<a className="font-label-lg text-label-lg text-primary hover:text-burnt-peach transition-colors flex items-center gap-1" href="mailto:partners@seotriks.com">
              partners@seotriks.com
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-lowest px-2 py-0.5 rounded shadow-sm">Global Press</span>
</div>
</div>
</div>
</section>
{/*  3. MAIN INTERACTIVE CONTACT SECTION (2 Columns)  */}
<section className="max-w-[1280px] mx-auto px-margin pb-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/*  Left Column: Interactive Form (7 Cols)  */}
<div className="lg:col-span-7 bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm relative">
{/*  Section Heading  */}
<div className="flex flex-col mb-space-lg">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Priority Dispatch</span>
<h2 className="font-headline-md text-headline-md text-jet-black mt-1">Send a direct message</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Your inquiry routes directly to domain engineers and regional relationship leads without bot gates.
            </p>
</div>
{/*  Dynamic Success Notification (Hidden by default, triggered via script)  */}
<div className="hidden mb-space-lg p-space-md rounded-lg bg-light-cyan text-jet-black shadow-sm transition-all duration-300" id="form-success-banner">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary">
<span className="material-symbols-outlined text-[20px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-[16px] leading-[22px] font-semibold text-primary">Transmission Confirmed</span>
<p className="font-body-sm text-body-sm text-on-surface mt-0.5">
                  Your ticket #ST-8849 has been assigned. A technical strategist is reviewing your stack logs and will reply within 2 hours.
                </p>
</div>
</div>
</div>
{/*  Form Element  */}
<form className="flex flex-col gap-space-md" id="contact-form" onSubmit={(e) => e.preventDefault()}>
{/*  Reason for Contact (Select)  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-jet-black flex items-center justify-between" htmlFor="contact-reason">
<span>Reason for Contact <span className="text-tertiary">*</span></span>
<span className="font-label-sm text-label-sm text-secondary">Routes directly to specialist</span>
</label>
<div className="relative">
<select className="w-full h-11 px-space-md bg-surface-container-low text-jet-black font-body-md text-body-md rounded-lg appearance-none cursor-pointer focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="contact-reason" required>
<option disabled value="">Select an inquiry domain...</option>
<option value="general">General Question / Orientation</option>
<option value="product">Product Support &amp; Technical Debugging</option>
<option value="sales">Sales, Multi-Site &amp; Enterprise Tiers</option>
<option value="partnership">Partnership, Co-Marketing, Agency Reseller</option>
<option value="billing">Invoicing &amp; Billing Inquiries</option>
<option value="bug">Bug Report / Spider Pipeline Anomaly</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-space-md text-dusk-blue">
<span className="material-symbols-outlined text-[20px]">expand_more</span>
</div>
</div>
</div>
{/*  Name and Work Email Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-jet-black" htmlFor="full-name">
                  Full Name <span className="text-tertiary">*</span>
</label>
<input className="w-full h-11 px-space-md bg-surface-container-low text-jet-black font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="full-name" placeholder="Elena Rostova" required type="text"/>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-jet-black" htmlFor="work-email">
                  Work Email <span className="text-tertiary">*</span>
</label>
<input className="w-full h-11 px-space-md bg-surface-container-low text-jet-black font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="work-email" placeholder="elena@enterprise.io" required type="email"/>
</div>
</div>
{/*  Phone Number & Company Domain  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-jet-black" htmlFor="phone-number">
                  Phone Number <span className="text-tertiary">*</span>
</label>
<input className="w-full h-11 px-space-md bg-surface-container-low text-jet-black font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="phone-number" placeholder="+1 (415) 890-2341" required type="tel"/>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-jet-black flex items-center justify-between" htmlFor="company-url">
<span>Target Website</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Optional</span>
</label>
<input className="w-full h-11 px-space-md bg-surface-container-low text-jet-black font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="company-url" placeholder="https://yourdomain.com" type="url"/>
</div>
</div>
{/*  Message Textarea  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-jet-black flex items-center justify-between" htmlFor="message">
<span>Message &amp; Scope Details <span className="text-tertiary">*</span></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Max 1,000 chars</span>
</label>
<textarea className="w-full p-space-md bg-surface-container-low text-jet-black font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors resize-y shadow-inner" id="message" placeholder="Describe your indexing hurdle, team size, or target integration stack (e.g. Next.js, Headless Shopify, Algolia)..." required rows={5}></textarea>
</div>
{/*  Checkbox Option  */}
<div className="flex items-center gap-space-sm pt-space-xs">
<input className="w-4 h-4 rounded text-dusk-blue bg-surface-container-low focus:ring-0 cursor-pointer" id="send-copy" type="checkbox"/>
<label className="font-body-sm text-body-sm text-on-surface cursor-pointer select-none" htmlFor="send-copy">
                Send me a confirmation copy of this message with tracking ticket details
              </label>
</div>
{/*  Submit CTA & Reassurance  */}
<div className="pt-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<button className="inline-flex items-center justify-center gap-space-sm px-space-xl py-3.5 bg-burnt-peach text-on-primary font-headline-sm text-[16px] rounded hover:opacity-90 shadow-md transition-all active:scale-[0.99] cursor-pointer" type="submit">
<span>Send Message</span>
<span className="material-symbols-outlined text-[20px]">send</span>
</button>
<div className="flex items-center gap-space-xs text-on-surface-variant">
<span className="material-symbols-outlined text-[18px] text-secondary">lock</span>
<span className="font-body-sm text-[13px] leading-tight">
                  We never share your email. Protected by enterprise-grade 256-bit encryption.
                </span>
</div>
</div>
</form>
</div>
{/*  Right Column: Direct Info & Location Visual (5 Cols)  */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
{/*  Office Node Visual & Network Radar  */}
<div className="relative w-full rounded-xl overflow-hidden bg-primary text-on-primary p-space-lg shadow-sm">
{/*  Background Map / Signal Visualization  */}
<div className="absolute inset-0 opacity-15 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="20" id="dot-grid" patternUnits="userSpaceOnUse" width="20">
<circle cx="2" cy="2" fill="currentColor" r="1.5"></circle>
</pattern>
</defs>
<rect fill="url(#dot-grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 flex flex-col">
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-powder-blue font-semibold">Headquarters &amp; NOC Hub</span>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-light-cyan/10 text-light-cyan font-label-sm text-[11px]">
<span className="w-1.5 h-1.5 rounded-full bg-burnt-peach"></span> Active Node
                </span>
</div>
{/*  Interactive Location Component  */}
<div className="w-full h-44 rounded-lg bg-cover bg-center mb-space-md overflow-hidden relative shadow-inner flex items-end p-space-sm" data-location="548 Market Street, San Francisco, CA" >
<div className="bg-jet-black/80 backdrop-blur-md px-3 py-1.5 rounded flex items-center gap-2 text-on-primary">
<span className="material-symbols-outlined text-[16px] text-burnt-peach">location_on</span>
<span className="font-label-sm text-label-sm">San Francisco Financial District</span>
</div>
</div>
{/*  Location Metadata  */}
<div className="flex flex-col gap-space-sm mb-space-md">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-powder-blue text-[20px] shrink-0 mt-0.5">apartment</span>
<div>
<span className="font-label-lg text-label-lg font-semibold block text-on-primary">Headquarters</span>
<span className="font-body-sm text-body-sm text-inverse-on-surface">548 Market Street, Suite 3200<br/>San Francisco, CA 94104</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-powder-blue text-[20px] shrink-0 mt-0.5">call</span>
<div>
<span className="font-label-lg text-label-lg font-semibold block text-on-primary">Direct Phone</span>
<a className="font-body-sm text-body-sm text-inverse-on-surface hover:text-burnt-peach transition-colors" href="tel:+18005827360">
                      +1 (800) 582-7360
                    </a>
<span className="font-label-sm text-[12px] text-powder-blue block mt-0.5">Mon–Fri 8:00 AM – 6:00 PM PST</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-burnt-peach text-[20px] shrink-0 mt-0.5">emergency_home</span>
<div>
<span className="font-label-lg text-label-lg font-semibold block text-on-primary">SEO Guard™ Tripline Critical</span>
<span className="font-body-sm text-body-sm text-inverse-on-surface">
                      24/7 autonomous monitoring &amp; automated rollback telemetry for Enterprise tier subscribers.
                    </span>
</div>
</div>
</div>
{/*  Social Links Row  */}
<div className="pt-space-sm border-t border-white/10 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-powder-blue">Network Channels</span>
<div className="flex items-center gap-space-xs">
<a aria-label="LinkedIn" className="w-8 h-8 rounded bg-surface-container-highest/20 hover:bg-burnt-peach text-on-primary flex items-center justify-center transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">share</span>
</a>
<a aria-label="X" className="w-8 h-8 rounded bg-surface-container-highest/20 hover:bg-burnt-peach text-on-primary flex items-center justify-center transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">tag</span>
</a>
<a aria-label="Facebook" className="w-8 h-8 rounded bg-surface-container-highest/20 hover:bg-burnt-peach text-on-primary flex items-center justify-center transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">public</span>
</a>
<a aria-label="YouTube" className="w-8 h-8 rounded bg-surface-container-highest/20 hover:bg-burnt-peach text-on-primary flex items-center justify-center transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">play_circle</span>
</a>
<a aria-label="Instagram" className="w-8 h-8 rounded bg-surface-container-highest/20 hover:bg-burnt-peach text-on-primary flex items-center justify-center transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">photo_camera</span>
</a>
</div>
</div>
</div>
</div>
{/*  Secondary Callout / Support Promise Card  */}
<div className="bg-light-cyan p-space-lg rounded-xl flex items-start gap-space-md shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-burnt-peach shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<div>
<h4 className="font-headline-sm text-[16px] leading-[22px] text-jet-black font-semibold mb-1">Human-in-the-Loop SLA</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                We believe algorithmic insights require nuanced strategy. Every enterprise account is assigned a dedicated SEO solutions architect with weekly syncs.
              </p>
</div>
</div>
</div>
</div>
</section>
{/*  4. FAQ MINI-STRIP (Refined Q&A Accordion/Strip)  */}
<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-[1280px] mx-auto px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-dusk-blue font-semibold">Immediate Clarity</span>
<h2 className="font-headline-lg text-headline-lg text-jet-black mt-1">Frequently asked questions</h2>
</div>
<a className="font-label-lg text-label-lg text-dusk-blue hover:text-jet-black transition-colors flex items-center gap-1 mt-2 md:mt-0" href="#">
            View full knowledge base documentation
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  FAQ 1  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs text-burnt-peach mb-space-sm">
<span className="material-symbols-outlined text-[20px]">timer</span>
<span className="font-label-sm text-label-sm font-semibold">Response Windows</span>
</div>
<h3 className="font-headline-sm text-[18px] leading-[26px] text-jet-black mb-space-xs">
                How quickly do you reply?
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Standard technical tickets receive answers in under 2 hours during normal business cycles. Critical SEO Guard alerts fire in real-time with instant SMS and webhook pinging.
              </p>
</div>
<div className="mt-space-md pt-space-sm">
<span className="font-label-sm text-label-sm text-secondary font-medium">99.4% on-time resolution</span>
</div>
</div>
{/*  FAQ 2  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs text-dusk-blue mb-space-sm">
<span className="material-symbols-outlined text-[20px]">shield</span>
<span className="font-label-sm text-label-sm font-semibold">Contract Provisions</span>
</div>
<h3 className="font-headline-sm text-[18px] leading-[26px] text-jet-black mb-space-xs">
                Can I request a custom enterprise SLA?
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Yes. Enterprise multi-property packages include customizable SLAs down to 15-minute response triggers, dedicated Private Slack channels, and HIPAA/SOC-2 compliance sign-offs.
              </p>
</div>
<div className="mt-space-md pt-space-sm">
<span className="font-label-sm text-label-sm text-secondary font-medium">Bespoke Master Service Agreements</span>
</div>
</div>
{/*  FAQ 3  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs text-primary mb-space-sm">
<span className="material-symbols-outlined text-[20px]">groups</span>
<span className="font-label-sm text-label-sm font-semibold">Team Enablement</span>
</div>
<h3 className="font-headline-sm text-[18px] leading-[26px] text-jet-black mb-space-xs">
                Do you offer onboarding calls?
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Every team plan includes a complimentary 45-minute architectural crawl setup call with a senior search engineer to map your canonical schemas, subdomains, and log collectors.
              </p>
</div>
<div className="mt-space-md pt-space-sm">
<span className="font-label-sm text-label-sm text-secondary font-medium">Included with Pro &amp; Enterprise</span>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
  )
}