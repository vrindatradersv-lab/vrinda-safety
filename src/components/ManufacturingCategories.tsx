'use client';

interface CategoryCard {
  catId: string;
  title: string;
  tag: string;
  desc: string;
  emoji: string;
  count: string;
}

const items: CategoryCard[] = [
  {
    catId: 'head-protection',
    title: 'Head & PPE Systems',
    tag: 'Helmets & Face',
    desc: 'ISI certified safety helmets, shields & protective gear.',
    emoji: '⛑️',
    count: '8+ Items',
  },
  {
    catId: 'foot-protection',
    title: 'Safety Footwear',
    tag: 'Shoes & Gumboots',
    desc: 'IS 15298 double density PU, steel-toe boots & sporty shoes.',
    emoji: '🥾',
    count: '21+ Items',
  },
  {
    catId: 'road-safety',
    title: 'Road Safety Systems',
    tag: 'Barriers & Cones',
    desc: 'Water-filled road barriers, speed bumps, studs & delineators.',
    emoji: '🚧',
    count: '21+ Items',
  },
  {
    catId: 'harnesses',
    title: 'Fall Protection',
    tag: 'Harness & Lifelines',
    desc: 'Full-body safety harnesses, shock-absorbing lanyards & lifelines.',
    emoji: '🪢',
    count: '29+ Items',
  },
  {
    catId: 'loto',
    title: 'Lockout / Tagout',
    tag: 'Energy Isolation',
    desc: 'Circuit breaker, panel, cable & valve lockouts with master kits.',
    emoji: '🔒',
    count: '35+ Items',
  },
];

export function ManufacturingCategories() {
  const handleClick = (catId: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('select-category', { detail: catId }));
    window.history.replaceState(null, '', `#products?cat=${catId}`);
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
      {items.map((c, i) => (
        <a
          key={c.title}
          href={`#products?cat=${c.catId}`}
          onClick={(e) => handleClick(c.catId, e)}
          className={`card-sheen group flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_12px_28px_-12px_rgba(234,88,12,0.25)] active:scale-[0.98] sm:p-4.5 ${
            i === 4 ? 'col-span-2 sm:col-span-1' : ''
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-xl transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11 sm:text-2xl">
                {c.emoji}
              </span>
              <span className="rounded-full bg-navy-50 px-2 py-0.5 text-[10px] font-bold text-navy-600 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600 sm:text-[11px]">
                {c.count}
              </span>
            </div>
            <div className="mt-2 sm:mt-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 sm:text-[11px]">
                {c.tag}
              </span>
              <h3 className="font-display text-[13px] font-bold leading-snug text-navy-900 transition-colors group-hover:text-brand-600 sm:text-[15px]">
                {c.title}
              </h3>
              <p className="mt-1 hidden text-[11px] leading-relaxed text-navy-500 sm:line-clamp-2 sm:block">
                {c.desc}
              </p>
            </div>
          </div>
          <div className="mt-2.5 flex items-center pt-2 text-[11px] font-bold text-brand-600 border-t border-navy-100/60 transition-transform group-hover:translate-x-0.5 sm:mt-3 sm:text-xs">
            <span>Explore</span>
            <svg
              className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}
