"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(41,50,65,0.06)]">
        <div className="h-20 max-w-[1280px] mx-auto px-margin flex items-center justify-between gap-gutter">
          <div className="flex items-center gap-space-xl">
            <Link className="flex items-center gap-space-sm" href="/">
              <div className="w-9 h-9 rounded bg-primary flex items-center justify-center shadow-[0_2px_8px_-2px_rgba(41,50,65,0.18)]">
                <span className="material-symbols-outlined text-on-primary text-[22px]">insights</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-jet-black tracking-tight">SEOtriks</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-space-xs">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-space-md py-space-sm font-label-lg text-label-lg transition-colors ${
                      isActive
                        ? "bg-secondary-container text-on-secondary-container rounded-lg"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-space-md">
            <Link className="px-space-md py-space-sm font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" href="#">Log In</Link>
            <Link className="inline-flex items-center justify-center px-space-lg py-space-sm font-label-lg text-label-lg rounded bg-burnt-peach text-on-primary shadow-[0_2px_8px_-2px_rgba(41,50,65,0.12)] hover:opacity-95 hover:scale-105 transition-all duration-300" href="#">Start Free</Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-jet-black flex items-center justify-center focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-surface pt-20 flex flex-col lg:hidden"
          >
            <nav className="flex flex-col p-margin gap-space-sm overflow-y-auto">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-space-lg py-space-md font-headline-sm text-headline-sm rounded-lg transition-colors ${
                      isActive
                        ? "bg-secondary-container text-on-secondary-container"
                        : "text-jet-black hover:bg-surface-container"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto p-margin border-t border-outline-variant/30 flex flex-col gap-space-md bg-surface">
              <Link
                className="w-full py-4 font-label-lg text-label-lg text-center text-jet-black border border-outline rounded-lg hover:bg-surface-container transition-colors"
                href="#"
              >
                Log In
              </Link>
              <Link
                className="w-full py-4 font-label-lg text-label-lg text-center rounded-lg bg-burnt-peach text-on-primary shadow-md hover:opacity-95 transition-opacity"
                href="#"
              >
                Start Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
