'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site, waLink } from '@/lib/config';
import { WhatsAppIcon } from './WhatsAppIcon';

const navItems = [
  { href: '/#products', label: 'Products' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/90 shadow-[0_1px_0_0_rgba(15,23,42,0.06),0_8px_24px_-12px_rgba(15,23,42,0.12)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="VRINDA Safety Solutions home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 font-display text-lg font-extrabold text-white shadow-lg shadow-brand-600/25">
            V
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-wide text-navy-900 sm:text-base">
              VRINDA
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-600 sm:text-[11px]">
              Safety Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-navy-600 transition hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink('Hello VRINDA SAFETY SOLUTIONS! I have an enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:brightness-110 active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy-200 bg-white text-navy-700 shadow-sm transition active:scale-95 md:hidden"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white/95 px-4 pb-5 pt-2 backdrop-blur-md md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3.5 text-[15px] font-semibold text-navy-700 hover:bg-navy-50 hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="block rounded-xl px-3 py-3.5 text-[15px] font-semibold text-navy-700 hover:bg-navy-50 hover:text-brand-600"
          >
            Call: {site.phone}
          </a>
          <a
            href={waLink('Hello VRINDA SAFETY SOLUTIONS! I have an enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#25D366]/25"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp {site.phone}
          </a>
        </div>
      )}
    </header>
  );
}
