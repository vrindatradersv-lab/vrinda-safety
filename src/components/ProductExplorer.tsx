'use client';

import { useMemo, useState, useEffect } from 'react';
import { categories, products } from '@/lib/products';
import { ProductCard } from './ProductCard';

const ALL = '__all';

export function ProductExplorer() {
  const [cat, setCat] = useState<string>(ALL);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleCategoryEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setCat(customEvent.detail);
      }
    };

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.includes('cat=')) {
        const targetCat = hash.split('cat=')[1]?.split('&')[0];
        if (targetCat) {
          setCat(targetCat);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('select-category', handleCategoryEvent);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('select-category', handleCategoryEvent);
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (cat !== ALL && p.cat !== cat) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.tags.toLowerCase().includes(q) ||
        p.cat.replace(/-/g, ' ').includes(q)
      );
    });
  }, [cat, query]);

  const countFor = (id: string) =>
    id === ALL ? products.length : products.filter((p) => p.cat === id).length;

  return (
    <div>
      {/* Search — sticky on mobile for easy access */}
      <div className="sticky top-16 z-30 -mx-4 bg-white/85 px-4 py-3 backdrop-blur-md sm:static sm:mx-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
        <div className="relative w-full">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-navy-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            inputMode="search"
            placeholder={`Search ${products.length}+ products…`}
            className="w-full rounded-2xl border border-navy-200 bg-white py-3.5 pl-11 pr-4 text-[15px] text-navy-800 placeholder-navy-400 shadow-sm outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-navy-100 text-navy-500 transition hover:bg-navy-200"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Category chips */}
      <div className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        <FilterChip
          active={cat === ALL}
          label={`All (${countFor(ALL)})`}
          onClick={() => setCat(ALL)}
        />
        {categories.map((c) => (
          <FilterChip
            key={c.id}
            active={cat === c.id}
            label={`${c.name} (${countFor(c.id)})`}
            onClick={() => setCat(c.id)}
          />
        ))}
      </div>

      {/* Result count */}
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-navy-400">
        Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-14 rounded-3xl border border-dashed border-navy-200 bg-navy-50/50 px-6 py-14 text-center">
          <p className="font-display text-lg font-bold text-navy-900">
            No products matched “{query}”
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-navy-500">
            Ask us on WhatsApp — we stock many more items beyond this list.
          </p>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-bold transition active:scale-95 sm:text-sm ${
        active
          ? 'border-brand-500 bg-brand-500 text-white shadow-lg shadow-brand-500/30'
          : 'border-navy-200 bg-white text-navy-600 shadow-sm hover:border-brand-300 hover:text-brand-600'
      }`}
    >
      {label}
    </button>
  );
}
