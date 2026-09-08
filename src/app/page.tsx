import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductExplorer } from '@/components/ProductExplorer';
import { ManufacturingCategories } from '@/components/ManufacturingCategories';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { categories, products } from '@/lib/products';
import { site, waLink } from '@/lib/config';

const stats = [
  { value: `${products.length}+`, label: 'Products in catalog' },
  { value: `${categories.length}`, label: 'Safety categories' },
  { value: 'ISI', label: 'Certified ranges' },
  { value: '24h', label: 'Enquiry response' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="glow-grid relative overflow-hidden pb-8 pt-16 sm:pb-12 sm:pt-20 lg:pb-14 lg:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-600 sm:text-xs">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
                VRINDA SAFETY SOLUTIONS • DELHI NCR
              </span>
              <h1 className="mt-3.5 font-display text-[30px] font-extrabold leading-[1.15] tracking-tight text-navy-900 sm:mt-4 sm:text-5xl lg:text-[56px]">
                VRINDA SAFETY SOLUTIONS
                <span className="block bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3">
                  Industrial PPE &amp; Safety Equipment Manufacturer
                </span>
              </h1>
              <p className="mx-auto mt-3.5 max-w-xl text-[14px] leading-relaxed text-navy-500 sm:mt-4 sm:text-base lg:mx-0 lg:text-lg">
                <strong>VRINDA SAFETY SOLUTIONS</strong> is Delhi NCR&apos;s premier manufacturer, wholesaler &amp; bulk supplier of certified Personal Protective Equipment (PPE), ISI safety helmets, steel toe safety shoes, reflective jackets, full body fall protection harnesses, road safety &amp; LOTO products based in Bawana Industrial Area, New Delhi.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3.5 font-display text-[14px] font-bold text-white shadow-xl shadow-brand-600/25 transition hover:brightness-110 active:scale-[0.98] sm:rounded-full sm:py-3 sm:text-sm"
                >
                  Browse Products
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6M5 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href={waLink('Hello VRINDA SAFETY SOLUTIONS! I want to place an order.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#25D366]/60 bg-[#25D366]/10 px-6 py-3 font-display text-[14px] font-bold text-[#128C4A] transition hover:bg-[#25D366]/20 active:scale-[0.98] sm:rounded-full sm:py-2.5 sm:text-sm"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-7 sm:grid-cols-4 sm:gap-3.5">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-navy-100 bg-white p-3 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-3.5"
                  >
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-lg font-extrabold text-brand-600 sm:text-xl lg:text-2xl">{s.value}</dd>
                    <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy-400 sm:text-[11px]">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Hero image — full body clearly visible in a compact, premium card */}
            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-500/10 blur-2xl sm:-inset-6" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.2)]">
                <div className="flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50/50 p-2 sm:p-3">
                  <Image
                    src="/hero/hero-head.jpg"
                    alt="Worker wearing VRINDA certified full-body protection system"
                    width={700}
                    height={1150}
                    priority
                    className="h-[340px] w-auto object-contain sm:h-[400px] lg:h-[440px]"
                  />
                </div>
                <div className="border-t border-navy-100/80 bg-white/95 px-4 py-3 text-center sm:px-5 sm:py-3.5">
                  <p className="font-display text-sm font-bold text-navy-900 sm:text-base">
                    Full-Body Protection Systems
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-navy-500 sm:text-xs">
                    Helmets · Harnesses · Footwear · Workwear
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CAPABILITIES ─────────────────────────────────────── */}
        <section id="about" className="border-y border-navy-100 bg-navy-50/60 py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-1.5 text-center sm:gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-600 sm:text-xs">
                What We Do
              </span>
              <h2 className="font-display text-2xl font-extrabold text-navy-900 sm:text-4xl">
                Manufacturing In
              </h2>
              <p className="mx-auto mt-0.5 max-w-xl text-[13px] text-navy-500 sm:text-sm">
                Explore our core industrial safety manufacturing divisions. Tap any category to view certified products.
              </p>
            </div>
            <ManufacturingCategories />
          </div>
        </section>

        {/* ─── PRODUCTS ─────────────────────────────────────────── */}
        <section id="products" className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-600 sm:text-xs">
                  Product Catalog
                </span>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-navy-900 sm:text-4xl">
                  {products.length}+ Products, Ready to Order
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-navy-500 sm:text-base">
                  Every product links straight to WhatsApp — tap{' '}
                  <b className="text-[#128C4A]">Buy Now</b>, tell us quantities,
                  and get pricing the same day.
                </p>
              </div>
            </div>

            {/* Category highlights */}
            <div className="no-scrollbar -mx-4 mt-8 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-4">
              {categories.map((c) => (
                <div
                  key={c.id}
                  className="w-60 flex-shrink-0 rounded-2xl border border-navy-100 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:w-auto sm:p-5"
                >
                  <h3 className="font-display text-[13px] font-bold text-navy-900 sm:text-sm">{c.name}</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-navy-400 sm:text-xs">{c.blurb}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 sm:mt-12">
              <ProductExplorer />
            </div>
          </div>
        </section>

        {/* ─── REGIONAL INDUSTRIAL HUB & SEO SECTION ─────────── */}
        <section className="bg-navy-50/50 py-16 sm:py-20 border-y border-navy-100/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">
                Delhi NCR Manufacturing Hub
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-navy-900 sm:text-3xl lg:text-4xl">
                Industrial Safety &amp; PPE Solutions for Delhi NCR &amp; Pan-India
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-500 sm:text-base">
                Operating directly from <strong>Bawana Industrial Area Sector-5, New Delhi</strong>, <strong>VRINDA SAFETY SOLUTIONS</strong> (also recognized as <em>Vrinda Safety</em> and <em>Verinda Tool &amp; PPE</em>) manufactures and supplies complete industrial safety equipment, safety shoes, ISI helmets, and fall arrest systems with rapid dispatch across North India.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                  Bawana Factory Base
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-500">
                  Direct manufacturing and bulk central warehouse at D-303, Sector-5, Bawana. Factory-direct pricing with zero middleman markups.
                </p>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                  Same-Day NCR Dispatch
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-500">
                  Fast delivery across Bawana, Narela, Kundli, Okhla, Gurugram, Manesar, Noida, Greater Noida, and Faridabad industrial belts.
                </p>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                  Tested &amp; Certified Standards
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-500">
                  Products rigorously compliant with BIS / ISI standards (IS 2925, IS 15298, IS 3521) for maximum site safety and zero audit issues.
                </p>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                  Bulk Wholesale &amp; Tenders
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-500">
                  Official GST invoicing, sample approvals, and custom branding for corporate procurement, EPC contractors, and government tenders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ SECTION (AEO & GEO BOOST) ────────────────────── */}
        <section id="faq" className="border-t border-navy-100 bg-navy-50/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-600 sm:text-xs">
                Frequently Asked Questions
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-navy-900 sm:text-3xl lg:text-4xl">
                Everything You Need to Know About VRINDA SAFETY SOLUTIONS
              </h2>
              <p className="mx-auto mt-2.5 max-w-2xl text-xs text-navy-500 sm:text-sm">
                Industrial safety equipment manufacturing, certifications, bulk pricing, and dispatch across Delhi NCR.
              </p>
            </div>

            <div className="mt-8 space-y-3.5 sm:mt-10 sm:space-y-4">
              <details className="group rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition hover:border-brand-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-display text-sm font-bold text-navy-900 sm:text-base">
                  <span>Who is VRINDA SAFETY SOLUTIONS?</span>
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-180">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-navy-500 sm:text-sm">
                  VRINDA SAFETY SOLUTIONS is a premier manufacturer and wholesale bulk supplier of certified Personal Protective Equipment (PPE), industrial safety shoes, ISI-certified safety helmets, reflective jackets, fall protection harnesses, road safety solutions, and LOTO products based in D-303, Bawana Industrial Area Sector-5, New Delhi 110039, serving Delhi NCR and all of India.
                </p>
              </details>

              <details className="group rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition hover:border-brand-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-display text-sm font-bold text-navy-900 sm:text-base">
                  <span>What safety products does Vrinda Safety Solutions manufacture?</span>
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-180">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-navy-500 sm:text-sm">
                  We manufacture over 211 certified safety products across 12 specialized categories: Head Protection (ISI Helmets), Foot Protection (Steel-Toe Safety Shoes &amp; PVC Gum Boots), Fall Protection (Full Body Harnesses &amp; Lanyards), Body Protection (High-Vis Vests &amp; Boiler Suits), Hand Protection (Safety Gloves), Eye &amp; Ear Protection, Respiratory Protection, Road Safety, Parking Solutions, Emergency Kits, Lockout Tagout (LOTO), and FRP Electrical Safety Ladders.
                </p>
              </details>

              <details className="group rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition hover:border-brand-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-display text-sm font-bold text-navy-900 sm:text-base">
                  <span>Where is your factory and warehouse located in Delhi NCR?</span>
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-180">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-navy-500 sm:text-sm">
                  Our manufacturing unit and central distribution hub is located at D-303, Bawana Industrial Area Sector-5, New Delhi - 110039. We provide same-day or next-day bulk dispatch across Bawana, Narela, Kundli, Rai, Okhla, Mayapuri, Mangolpuri, Gurugram, Manesar, Noida, Greater Noida, and Faridabad.
                </p>
              </details>

              <details className="group rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition hover:border-brand-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-display text-sm font-bold text-navy-900 sm:text-base">
                  <span>How can I place bulk wholesale orders or request samples?</span>
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-180">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-navy-500 sm:text-sm">
                  You can call or WhatsApp our sales desk directly at <a href="tel:+919999202008" className="font-bold text-brand-600 hover:underline">+91-9999202008</a>, or email <a href="mailto:Vrindatraderssv@gmail.com" className="font-bold text-brand-600 hover:underline">Vrindatraderssv@gmail.com</a>. We provide formal GST quotations, sample approvals for factory inspections, and custom corporate logo branding on helmets and jackets.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ───────────────────────────────────────── */}
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-900 to-brand-900 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl" />
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-4xl">
              Need bulk pricing or a custom quote?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-navy-200 sm:mt-4 sm:text-base">
              {site.proprietor} and the {site.name} team respond within hours —
              with GST invoices and same-day dispatch across Delhi NCR.
            </p>
            <a
              href={waLink('Hello VRINDA SAFETY SOLUTIONS! Please share your bulk price list.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 font-display text-base font-bold text-white shadow-xl shadow-[#25D366]/30 transition hover:brightness-110 active:scale-[0.98] sm:mt-8"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </section>
      </main>
      <Footer />

      {/* Floating WhatsApp bubble — bottom-right, above mobile nav */}
      <a
        href={waLink('Hello VRINDA SAFETY SOLUTIONS! I have an enquiry.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}

