import { site, waLink } from '@/lib/config';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-navy-100 bg-navy-50/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 font-display text-lg font-extrabold text-white">
              V
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold text-navy-900">VRINDA</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-600">
                Safety Solutions
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy-500">
            {site.tagline}. Manufacturing in Personal Protective Equipments, Safety
            Shoes, Road Safety, Lock-Out/Tag-Out.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-500">
            <li>
              <span className="block text-xs uppercase tracking-wide text-navy-400">Proprietor</span>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="font-semibold text-navy-700 hover:text-brand-600">
                {site.proprietor}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="font-semibold text-navy-700 transition hover:text-brand-600">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-all font-semibold text-navy-700 transition hover:text-brand-600"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
            Address
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-navy-500">{site.address}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
            Quick Order
          </h4>
          <p className="mt-4 text-sm text-navy-500">
            Message us directly — we reply with price &amp; availability.
          </p>
          <a
            href={waLink('Hello VRINDA SAFETY SOLUTIONS! I have an enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Regional & Local SEO Industrial Coverage */}
      <div className="border-t border-navy-100 bg-navy-100/40 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-4 text-xs text-navy-500">
          <div>
            <span className="font-bold uppercase tracking-wider text-navy-700">
              Manufacturing &amp; Distribution Hub (Delhi NCR):{' '}
            </span>
            <span>
              Bawana Industrial Area (Sector 1–5), Narela Industrial Zone, Kundli &amp; Rai (Sonipat), Okhla Industrial Area (Phases I–III), Mayapuri, Mangolpuri, Naraina, Kirti Nagar, Gurugram (Udyog Vihar &amp; Manesar IMT), Faridabad, Noida (Phases I &amp; II), Greater Noida, and Ghaziabad (Sahibabad). Same-day bulk dispatch available.
            </span>
          </div>
          <div>
            <span className="font-bold uppercase tracking-wider text-navy-700">
              Key Industrial Product Lines:{' '}
            </span>
            <span>
              Certified Steel-Toe Safety Shoes • ISI Mark Industrial Safety Helmets (Ratchet &amp; Nape) • High-Visibility Retro-Reflective Safety Vests &amp; Jackets • Full Body Fall Arrest Safety Harnesses &amp; Shock Absorber Lanyards • Industrial Lockout / Tagout (LOTO) Kits &amp; Station Boards • Heavy-Duty Traffic Cones, Speed Bumps &amp; Parking Wheel Stoppers • Debris Protection Safety Nets • Fire Extinguishers &amp; Emergency PPE.
            </span>
          </div>
          <div className="text-[11px] text-navy-400">
            <span>Also searched as: </span>
            <span className="font-medium text-navy-500">
              VRINDA SAFETY SOLUTIONS, Vrinda Safety, Verinda Tool, Vrinda Tools, Vrinda Traders Bawana, Safety Equipment Delhi NCR, Industrial PPE Wholesaler Delhi.
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-100 py-5 text-center text-xs text-navy-400">
        © {new Date().getFullYear()} {site.name} ({site.domain}). All rights reserved.
      </div>
    </footer>
  );
}
