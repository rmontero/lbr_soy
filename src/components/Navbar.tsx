"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="font-semibold text-lg tracking-tight text-white">
            libre
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Features", href: "#features" },
            { label: "Editorial", href: "#editorial" },
            { label: "Deploy", href: "#deploy" },
            { label: "Pricing", href: "#pricing" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-lg"
          >
            Get started free
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/60 hover:text-white"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Features", href: "#features" },
            { label: "Editorial", href: "#editorial" },
            { label: "Deploy", href: "#deploy" },
            { label: "Pricing", href: "#pricing" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-full bg-white text-black"
          >
            Get started free
          </a>
        </div>
      )}
    </header>
  );
}
