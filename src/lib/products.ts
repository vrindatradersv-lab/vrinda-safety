import { CategoryId, Category, RawEntry } from './types';
import raw from './products-data.json';
import { waLink } from './config';

export const categories: Category[] = [
  { id: 'head-protection', name: 'Head Protection', blurb: 'ISI-marked industrial safety helmets built to IS 2925:1984.' },
  { id: 'workwear', name: 'Safety Vests & Workwear', blurb: 'High-visibility jackets, coveralls and reflective workwear (IS 15809:2017).' },
  { id: 'foot-protection', name: 'Foot Protection', blurb: 'ISI & CE certified safety shoes, boots and gumboots (IS 15298).' },
  { id: 'harnesses', name: 'Harnesses & Belts', blurb: 'Full-body harnesses, lanyards, hooks, lifelines and retractables.' },
  { id: 'kits', name: 'Safety Kits', blurb: 'Self-contained fall-protection and rescue kits, ready for the field.' },
  { id: 'safety-nets', name: 'Safety Nets', blurb: 'Braided PP and monofilament safety nets with edge rope.' },
  { id: 'road-safety', name: 'Road Safety', blurb: 'Cones, barriers, speed bumps, delineators, studs and signages.' },
  { id: 'parking', name: 'Parking Solutions', blurb: 'Wheel stoppers, corner guards, chocks and dock protectors.' },
  { id: 'misc-safety', name: 'Misc. Safety Products', blurb: 'Barricading nets, first-aid kits, life jackets, convex mirrors & more.' },
  { id: 'loto', name: 'Lockout / Tagout', blurb: 'MCB, panel, valve, cable & plug lockouts, hasps, padlocks, tags & stations.' },
  { id: 'fire-safety', name: 'Fire Safety', blurb: 'ISI-marked portable and trolley-mounted fire extinguishers.' },
  { id: 'ppe-misc', name: 'Face, Hand & Ear', blurb: 'Hand gloves, safety spectacles, nose masks, welding shields & earmuffs.' },
];

export interface Product {
  id: string;
  name: string;
  cat: CategoryId;
  img: string;
  tags: string;
  waUrl: string;
}

const entries = raw as RawEntry[];

export const products: Product[] = entries.map((e, idx) => ({
  id: `${e.c}-${String(idx + 1).padStart(3, '0')}`,
  name: e.n,
  cat: e.c,
  img: `/products/${e.i}`,
  tags: e.t ?? '',
  waUrl: waLink(
    `Hello VRINDA SAFETY SOLUTIONS! I want to buy: ${e.n} (${e.c.replace(/-/g, ' ')}). Please share price & availability.`
  ),
}));

export function productsByCat(cat: CategoryId): Product[] {
  return products.filter((p) => p.cat === cat);
}

export function categoryById(id: CategoryId): Category | undefined {
  return categories.find((c) => c.id === id);
}
