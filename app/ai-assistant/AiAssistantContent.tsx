'use client';
export function AiAssistantContent() {
  return (
<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">
<div className="flex flex-col w-full">
{/*  Top Workspace Context Header  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-lg">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-sm">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">SEOTRIKS AI Assistant</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-mono-code text-[11px] flex items-center gap-1.5 shadow-[0_2px_8px_rgba(0,165,114,0.15)]">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
          Model: SEO-Intelligence v4.2 (Live Connected)
        </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Autonomous SEO analyst connected to your live crawls, search console, and competitors.
      </p>
</div>
{/*  Telemetry Toggles / Context Badges  */}
<div className="flex items-center gap-space-sm shrink-0">
<div className="bg-surface-container-low px-space-md py-1.5 rounded-xl shadow-sm flex items-center gap-space-sm text-on-surface-variant font-mono-code text-mono-code">
<span className="material-symbols-outlined text-[16px] text-primary">lan</span>
<span>GSC Sync: <span className="text-on-surface font-semibold">14m ago</span></span>
</div>
<div className="bg-surface-container-low px-space-md py-1.5 rounded-xl shadow-sm flex items-center gap-space-sm text-on-surface-variant font-mono-code text-mono-code">
<span className="material-symbols-outlined text-[16px] text-secondary">memory</span>
<span>Context Memory: <span className="text-secondary font-semibold">98.4%</span></span>
</div>
<button className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">tune</span>
</button>
</div>
</div>
{/*  Prompt Pills / Quick Inquiries  */}
<div className="flex items-center gap-space-sm overflow-x-auto pb-space-md">
<span className="font-label-md text-label-md uppercase tracking-wider text-outline shrink-0 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">bolt</span> Quick Prompts
    </span>
<button className="query-pill px-3.5 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95" data-query="Why did my traffic drop last Tuesday?">
<span className="material-symbols-outlined text-tertiary text-[15px]">trending_down</span> Why did my traffic drop last Tuesday?
    </button>
<button className="query-pill px-3.5 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95" data-query="What should I fix first for maximum revenue impact?">
<span className="material-symbols-outlined text-secondary text-[15px]">monetization_on</span> What should I fix first for maximum revenue impact?
    </button>
<button className="query-pill px-3.5 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95" data-query="Find quick wins for keywords in positions 4-10">
<span className="material-symbols-outlined text-primary text-[15px]">rocket_launch</span> Find quick wins for keywords in positions 4-10
    </button>
<button className="query-pill px-3.5 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95" data-query="Analyze my top 3 competitors keyword gaps">
<span className="material-symbols-outlined text-on-surface-variant text-[15px]">troubleshoot</span> Analyze my top 3 competitors keyword gaps
    </button>
<button className="query-pill px-3.5 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95" data-query="Generate an audit action plan for the core update">
<span className="material-symbols-outlined text-tertiary text-[15px]">playlist_add_check_circle</span> Generate an audit action plan for the core update
    </button>
</div>
{/*  Central Intelligence Canvas  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/*  Primary Conversation Stream (8 Columns)  */}
<div className="xl:col-span-8 flex flex-col gap-space-lg">
{/*  Conversation Container  */}
<div className="flex flex-col gap-space-lg" id="chatStream">
{/*  User Message Bubble  */}
<div className="flex items-start justify-end gap-space-md pl-12">
<div className="flex flex-col items-end gap-1.5 max-w-2xl">
<div className="bg-primary-container text-on-primary-container p-space-md rounded-2xl rounded-tr-none shadow-md">
<p className="font-body-md text-body-md font-medium">
                Why did our organic traffic drop 8% on <span className="font-mono-code px-1.5 py-0.5 rounded bg-surface-container-lowest/50 text-primary-fixed">/blog</span> last week, and what should we prioritize to recover?
              </p>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-mono-code text-[11px]">
<span>10:42 AM</span>
<span>•</span>
<span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-[12px]">done_all</span> Verified Live Telemetry</span>
</div>
</div>
<div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
</div>
</div>
{/*  AI Assistant Complex Response  */}
<div className="flex items-start gap-space-md pr-4">
{/*  Assistant Avatar  */}
<div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 shadow-md">
<span className="material-symbols-outlined text-secondary text-[20px]">neurology</span>
</div>
{/*  Assistant Body  */}
<div className="flex-1 flex flex-col gap-space-md">
{/*  Message Header & Narrative Text  */}
<div className="bg-surface-container-low p-space-lg rounded-2xl rounded-tl-none shadow-md flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Diagnostic Investigation</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high font-mono-code text-[10px] text-primary">3 SOURCED REPOSITORIES</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<button className="hover:text-on-surface transition-colors p-1" title="Copy Analysis"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
<button className="hover:text-on-surface transition-colors p-1" title="Export Insight"><span className="material-symbols-outlined text-[16px]">share</span></button>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
                I analyzed Google Search Console data, the crawl log from <span className="font-mono-code text-on-primary-container px-1 py-0.5 rounded bg-surface-container">May 14</span>, and live SERP volatility indices. The <strong className="text-tertiary">8.2% drop (-4,120 sessions)</strong> on <code className="font-mono-code text-primary">/blog</code> is concentrated across two specific events rather than algorithmic site-wide demotion:
              </p>
{/*  Diagnostic Visual Chart: Traffic & Position Correlation  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-space-sm shadow-inner">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">query_stats</span>
<span className="font-label-lg text-label-lg font-medium text-on-surface">Traffic &amp; Position Correlation Graph</span>
</div>
<div className="flex items-center gap-space-md font-mono-code text-[11px]">
<span className="flex items-center gap-1.5 text-on-surface-variant"><span className="w-2.5 h-0.5 bg-primary rounded-full"></span> Organic Clicks (/blog)</span>
<span className="flex items-center gap-1.5 text-on-surface-variant"><span className="w-2.5 h-0.5 bg-tertiary rounded-full"></span> SERP Volatility Marker</span>
</div>
</div>
{/*  Inline Vector Telemetry Chart  */}
<div className="relative w-full h-44 mt-2">
<svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 680 140">
<defs>
<linearGradient id="primaryArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#abc8f4" stopOpacity="0.28"></stop>
<stop offset="100%" stopColor="#abc8f4" stopOpacity="0.0"></stop>
</linearGradient>
<linearGradient id="alertArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#ffb4a3" stopOpacity="0.32"></stop>
<stop offset="100%" stopColor="#ffb4a3" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
{/*  Horizontal Gridlines  */}
<line stroke="#212a39" strokeDasharray="3 3" x1="0" x2="680" y1="20" y2="20"></line>
<line stroke="#212a39" strokeDasharray="3 3" x1="0" x2="680" y1="60" y2="60"></line>
<line stroke="#212a39" strokeDasharray="3 3" x1="0" x2="680" y1="100" y2="100"></line>
{/*  Trend Shaded Area  */}
<path d="M0,45 Q100,42 180,48 T360,50 T460,86 T570,98 T680,104 L680,140 L0,140 Z" fill="url(#primaryArea)"></path>
{/*  Primary Clicks Trend Line  */}
<path d="M0,45 Q100,42 180,48 T360,50 T460,86 T570,98 T680,104" stroke="#abc8f4" strokeLinecap="round" strokeWidth="2.5"></path>
{/*  Competitor Release Event Marker at x=450  */}
<line stroke="#ffb4a3" strokeDasharray="4 2" strokeWidth="1.5" x1="455" x2="455" y1="10" y2="135"></line>
<circle className="animate-pulse" cx="455" cy="85" fill="#ffb4a3" r="4"></circle>
</svg>
{/*  Chart Annotations  */}
<div className="absolute top-2 left-[58%] -translate-x-1/2 bg-surface-container-high px-2.5 py-1 rounded shadow-md pointer-events-none flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-mono-code text-[10px] text-on-tertiary-container">May 14: Competitor "OmniSEO" publishes updated guide</span>
</div>
<div className="absolute bottom-1 left-2 font-mono-code text-[10px] text-outline">May 08 (52.1K)</div>
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono-code text-[10px] text-outline">May 14 (Migration + Event)</div>
<div className="absolute bottom-1 right-2 font-mono-code text-[10px] text-tertiary">May 21 (47.8K: -8.2%)</div>
</div>
</div>
{/*  Root Causes / Insight Cards Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
{/*  Insight Card 1 (Critical SERP Incident)  */}
<div className="bg-surface-container p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm hover:bg-surface-container-high transition-colors">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-mono-code text-[10px] font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">emergency_home</span> SERP INCIDENT
                      </span>
<span className="font-mono-code text-[11px] text-tertiary font-medium">-2,840 Visits/wk</span>
</div>
<h4 className="font-headline-sm text-[15px] text-on-surface font-semibold">Lost Featured Snippet</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                      Target keyword <code className="font-mono-code text-primary bg-surface-container-lowest px-1 py-0.5 rounded">best ai seo tools 2025</code> (Volume: <span className="font-mono-code text-on-surface">14.8K</span>). Competitor deployed a markdown matrix that captured position 0.
                    </p>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-mono-code text-[11px] bg-surface-container-low p-2 rounded-lg">
<span>Rank Shift: <span className="text-secondary font-medium">#1 (Snippet)</span> → <span className="text-tertiary font-medium">#4 (Organic)</span></span>
<span className="text-outline">Impact: High</span>
</div>
</div>
{/*  Insight Card 2 (Technical SEO Glitch)  */}
<div className="bg-surface-container p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm hover:bg-surface-container-high transition-colors">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-error-container/30 text-error font-mono-code text-[10px] font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">sync_problem</span> CRAWL DEFECT
                      </span>
<span className="font-mono-code text-[11px] text-error font-medium">-1,280 Visits/wk</span>
</div>
<h4 className="font-headline-sm text-[15px] text-on-surface font-semibold">3 Redirect Loops Uncovered</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                      Following the URL slug migration on May 13, 3 cornerstone articles entered 301 circular loops (<code className="font-mono-code text-error bg-surface-container-lowest px-1 rounded">ERR_TOO_MANY_REDIRECTS</code>), causing deindexation.
                    </p>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-mono-code text-[11px] bg-surface-container-low p-2 rounded-lg">
<span>Affected URLs: <span className="text-on-surface font-medium">3 Pillar Guides</span></span>
<span className="text-outline">Googlebot: 502/Loop</span>
</div>
</div>
</div>
{/*  Actionable Recovery Plan Component  */}
<div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-md mt-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">task_alt</span>
<span className="font-headline-sm text-[16px] text-on-surface font-semibold">Prescribed Recovery Plan</span>
</div>
<span className="font-mono-code text-[11px] text-secondary font-medium">Estimated Rebound: +9.4% in 7-10 Days</span>
</div>
<div className="flex flex-col gap-2.5">
{/*  Step 1  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-surface-container-high/60 gap-3">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-mono-code text-[12px] font-bold">1</span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Update snippet answer format</span>
<span className="font-mono-code text-[11px] text-on-surface-variant">Inject synthesized HTML table directly answering feature queries</span>
</div>
</div>
<button className="px-3.5 py-1.5 rounded-lg bg-primary-container hover:bg-inverse-primary text-on-primary-container font-label-md text-label-md font-medium transition-all shadow-sm flex items-center justify-center gap-1.5 self-end sm:self-auto shrink-0">
<span className="material-symbols-outlined text-[15px]">auto_awesome</span> Open in AI Writer
                    </button>
</div>
{/*  Step 2  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-surface-container-high/60 gap-3">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-mono-code text-[12px] font-bold">2</span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Resolve 301 redirect chains</span>
<span className="font-mono-code text-[11px] text-on-surface-variant">Rewrite Cloudflare edge routing rules for the 3 migrated slugs</span>
</div>
</div>
<button className="px-3.5 py-1.5 rounded-lg bg-secondary hover:bg-secondary-fixed text-on-secondary font-label-md text-label-md font-medium transition-all shadow-sm flex items-center justify-center gap-1.5 self-end sm:self-auto shrink-0" id="btnAutoFix" onClick={() => {}}>
<span className="material-symbols-outlined text-[15px]">bolt</span> Auto-Fix via SEOTRIKS
                    </button>
</div>
{/*  Step 3  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-surface-container-high/60 gap-3">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-outline-variant/30 text-on-surface flex items-center justify-center font-mono-code text-[12px] font-bold">3</span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Deploy TechArticle schema markup</span>
<span className="font-mono-code text-[11px] text-on-surface-variant">Validate canonical tags &amp; embed semantic author citation blocks</span>
</div>
</div>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-md text-label-md font-medium transition-all shadow-sm flex items-center justify-center gap-1.5 self-end sm:self-auto shrink-0">
<span className="material-symbols-outlined text-[15px]">code</span> Apply JSON-LD
                    </button>
</div>
</div>
</div>
{/*  Inline Interactive Action Feedback (Hidden until auto-fix triggered)  */}
<div className="hidden bg-secondary-container/20 p-space-md rounded-xl text-secondary flex items-center justify-between" id="fixToast">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="font-body-sm text-body-sm font-medium">Edge rules deployed to CDN. 301 loops cleared (Status 200 OK restored).</span>
</div>
<span className="font-mono-code text-[11px] text-on-secondary-container bg-secondary px-2 py-0.5 rounded font-bold">PURGED CACHE</span>
</div>
</div>
</div>
</div>
</div>
{/*  Live Input Bar Dock  */}
<div className="bg-surface-container-low p-space-md rounded-2xl shadow-xl flex flex-col gap-space-sm sticky bottom-4 z-30">
{/*  Active Context Indicator  */}
<div className="flex items-center justify-between px-space-xs text-on-surface-variant font-mono-code text-[11px]">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Active Context: <strong className="text-on-surface">seotriks.io</strong> (Last live crawl: 2 hrs ago)</span>
</div>
<div className="flex items-center gap-2">
<span className="hidden md:inline text-outline">Target Engine: Google US (Desktop)</span>
<button className="hover:text-primary transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">swap_horiz</span> Change Scope
            </button>
</div>
</div>
{/*  Input Shell  */}
<div className="relative bg-surface-container rounded-xl flex flex-col focus-within:bg-surface-container-high transition-colors">
<textarea className="w-full bg-transparent text-on-surface placeholder:text-on-surface-variant p-3.5 focus:outline-none font-body-md text-body-md resize-none" id="aiPromptInput" placeholder="Ask SEOTRIKS AI anything (e.g. 'Audit internal link ratio for /pricing', 'Why did competitor rank #1')..." rows={2}></textarea>
{/*  Input Action Strip  */}
<div className="flex items-center justify-between p-2 pt-0">
<div className="flex items-center gap-1.5">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface text-label-md font-label-md flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-[16px] text-primary">link</span> Attach URL / Page
              </button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface text-label-md font-label-md flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-[16px] text-tertiary">swords</span> Select Competitor
              </button>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">mic</span>
</button>
</div>
<div className="flex items-center gap-2">
<span className="hidden sm:inline font-mono-code text-[10px] text-outline">Press Enter ↵</span>
<button className="h-8 px-4 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-all shadow-md active:scale-95" id="sendBtn" onClick={() => {}}>
<span>Investigate</span>
<span className="material-symbols-outlined text-[16px]">arrow_upward</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Live Telemetry & Knowledge Sidecar (4 Columns)  */}
<div className="xl:col-span-4 flex flex-col gap-space-lg">
{/*  Real-Time Corpus Knowledge Panel  */}
<div className="bg-surface-container-low p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">dataset</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Active Datastores</span>
</div>
<span className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-surface-container-high text-secondary">REAL-TIME</span>
</div>
<div className="flex flex-col gap-2">
{/*  Item 1  */}
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container text-body-sm font-body-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-primary text-[18px]">analytics</span>
<div className="flex flex-col">
<span className="text-on-surface font-medium">Google Search Console</span>
<span className="font-mono-code text-[10px] text-on-surface-variant">18,492 queries synced</span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
{/*  Item 2  */}
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container text-body-sm font-body-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px]">bug_report</span>
<div className="flex flex-col">
<span className="text-on-surface font-medium">Live ScreamingBot Crawl</span>
<span className="font-mono-code text-[10px] text-on-surface-variant">9,812 HTML assets (Health: 88%)</span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
{/*  Item 3  */}
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container text-body-sm font-body-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-tertiary text-[18px]">visibility</span>
<div className="flex flex-col">
<span className="text-on-surface font-medium">SERP Sensor Radar</span>
<span className="font-mono-code text-[10px] text-on-surface-variant">Volatility score: 7.8 (High)</span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
</div>
</div>
{/*  Metric Pulse Snapshot  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl flex items-center justify-between shadow-inner">
<div className="flex flex-col">
<span className="font-mono-code text-[10px] uppercase text-outline">Total Keyword Pool</span>
<span className="font-mono-metric text-mono-metric text-on-surface mt-0.5">24,910</span>
</div>
<div className="h-8 w-px bg-outline-variant/30"></div>
<div className="flex flex-col">
<span className="font-mono-code text-[10px] uppercase text-outline">Indexed Pages</span>
<span className="font-mono-metric text-mono-metric text-secondary mt-0.5">8,419</span>
</div>
</div>
</div>
{/*  Active Competitor Shifts Widget  */}
<div className="bg-surface-container-low p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[20px]">radar</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Competitor Moves</span>
</div>
<span className="font-mono-code text-[11px] text-on-surface-variant">Past 48h</span>
</div>
{/*  Competitor List  */}
<div className="flex flex-col gap-3">
<div className="p-3 rounded-xl bg-surface-container flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">OmniSEO.ai</span>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-mono-code text-[10px] font-bold">+18 Top 3 SERPs</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Rolled out 40 programmatic comparison hubs targeting our highest conversion terms.
            </p>
</div>
<div className="p-3 rounded-xl bg-surface-container flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">SearchGenius.io</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-mono-code text-[10px]">Backlink Velocity +220%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Acquired editorial coverage on 3 Tier-1 technology review publications.
            </p>
</div>
</div>
<button className="w-full py-2 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface text-label-md font-label-md font-medium transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">compare</span> Open Full Competitor Matrix
        </button>
</div>
{/*  Diagnostic Session History  */}
<div className="bg-surface-container-low p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-[16px] text-on-surface font-semibold">Recent Investigations</span>
<button className="font-mono-code text-[11px] text-primary hover:underline">Clear</button>
</div>
<div className="flex flex-col gap-1">
<a className="px-2.5 py-2 rounded-lg hover:bg-surface-container transition-colors flex items-center justify-between group" href="#">
<div className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-outline group-hover:text-primary text-[16px]">chat_bubble_outline</span>
<span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface truncate">Core Web Vitals INP spikes on PDPs</span>
</div>
<span className="font-mono-code text-[10px] text-outline shrink-0">Yesterday</span>
</a>
<a className="px-2.5 py-2 rounded-lg hover:bg-surface-container transition-colors flex items-center justify-between group" href="#">
<div className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-outline group-hover:text-primary text-[16px]">chat_bubble_outline</span>
<span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface truncate">Hreflang validation /es /fr</span>
</div>
<span className="font-mono-code text-[10px] text-outline shrink-0">3d ago</span>
</a>
<a className="px-2.5 py-2 rounded-lg hover:bg-surface-container transition-colors flex items-center justify-between group" href="#">
<div className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-outline group-hover:text-primary text-[16px]">chat_bubble_outline</span>
<span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface truncate">Cannibalization check: /enterprise vs /pricing</span>
</div>
<span className="font-mono-code text-[10px] text-outline shrink-0">May 11</span>
</a>
</div>
</div>
</div>
</div>
</div>

</main>
  )
}