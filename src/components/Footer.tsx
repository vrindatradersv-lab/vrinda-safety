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

      <div className="border-t border-navy-100 py-5 text-center text-xs text-navy-400">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
