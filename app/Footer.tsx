import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(41,50,65,0.03)]">
      <div className="max-w-[1280px] mx-auto px-margin pt-space-xl pb-space-lg">
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
          <div className="lg:col-span-4 flex flex-col items-start gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">insights</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-jet-black tracking-tight">SEOtriks</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              SEO made actionable. Find what matters. Know what to fix. See what improved.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <a aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-dusk-blue hover:bg-light-cyan hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a aria-label="X" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-dusk-blue hover:bg-light-cyan hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">tag</span>
              </a>
              <a aria-label="Facebook" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-dusk-blue hover:bg-light-cyan hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a aria-label="YouTube" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-dusk-blue hover:bg-light-cyan hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </a>
              <a aria-label="Instagram" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-dusk-blue hover:bg-light-cyan hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-semibold">Product</span>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="services" href="/services">Features</Link>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="seo-agent" href="#">SEO Agent</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="site-audit" href="#">Site Audit</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="seo-guard" href="#">SEO Guard</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="ai-visibility" href="#">AI Visibility</a>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="pricing" href="/pricing">Pricing</Link>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-semibold">Resources</span>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="blog" href="/blog">Blog</Link>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="seo-guides" href="#">SEO Guides</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="help-center" href="#">Help Center</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="documentation" href="#">Documentation</a>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-semibold">Company</span>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="about" href="/about">About</Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="contact" href="/contact">Contact</Link>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="partners" href="#">Partners</a>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-dusk-blue font-semibold">Legal</span>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="privacy" href="#">Privacy</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="terms" href="#">Terms</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="cookie-policy" href="#">Cookie Policy</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="data-processing" href="#">Data Processing</a>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container/50 rounded-xl px-space-md py-space-sm">
          <span className="font-body-sm text-body-sm text-on-surface-variant">© 2025 SEOtriks Inc. All rights reserved.</span>
          <div className="flex items-center gap-space-md">
            <span className="font-label-sm text-label-sm text-secondary">Enterprise Precision SEO Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
