export type CategoryId =
  | 'frp-electrical-safety'
  | 'head-protection'
  | 'workwear'
  | 'foot-protection'
  | 'harnesses'
  | 'kits'
  | 'safety-nets'
  | 'road-safety'
  | 'parking'
  | 'misc-safety'
  | 'loto'
  | 'fire-safety'
  | 'ppe-misc';

/** Raw catalog entry: name, category, image path (relative to /products), optional tags */
export interface RawEntry {
  n: string;
  c: CategoryId;
  i: string;
  t?: string;
}

export interface Product {
  id: string;
  name: string;
  cat: CategoryId;
  img: string;
  tags: string;
  waUrl: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  blurb: string;
}
