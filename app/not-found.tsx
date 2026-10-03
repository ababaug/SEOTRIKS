import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | SEOtriks',
  description: 'The page you are looking for may have moved, changed or no longer exists.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center text-center px-margin">
      <span className="font-label-md text-label-md uppercase tracking-wider text-burnt-peach font-semibold mb-space-sm">Error 404</span>
      <h1 className="font-display-lg text-display-lg text-jet-black mb-space-md">This page couldn't be found.</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-space-xl">
        The page may have moved, changed or no longer exist. Let's get you back on track.
      </p>
      <div className="flex items-center gap-space-md">
        <Link href="/" className="px-space-lg py-3 rounded bg-primary text-on-primary font-label-lg text-label-lg hover:bg-dusk-blue hover:scale-105 transition-all duration-300 shadow-sm">
          Go Home
        </Link>
        <Link href="/services" className="px-space-lg py-3 rounded bg-surface-container text-jet-black font-label-lg text-label-lg hover:bg-powder-blue/30 hover:scale-105 transition-all duration-300 shadow-sm">
          Explore SEOtriks
        </Link>
        <Link href="/blog" className="px-space-lg py-3 rounded bg-surface-container text-jet-black font-label-lg text-label-lg hover:bg-powder-blue/30 hover:scale-105 transition-all duration-300 shadow-sm">
          Visit Blog
        </Link>
      </div>
    </div>
  )
}
