/** VRINDA SAFETY SOLUTIONS — site configuration */

export const site = {
  name: 'VRINDA SAFETY SOLUTIONS',
  shortName: 'VRINDA',
  tagline: 'Safety Today, Secure Tomorrow',
  description:
    'VRINDA SAFETY SOLUTIONS — manufacturer & supplier of Personal Protective Equipment, Safety Shoes, Road Safety and Lock-Out / Tag-Out products. Bawana, New Delhi.',
  domain: 'https://vrindasafetysolutions.com',
  phone: '+91 9999202008',
  email: 'Vrindatraderssv@gmail.com',
  address: 'D-303, Bawana Ind. Area Sector-5, Bawana, New Delhi-110039',
  proprietor: 'Hanish Mann',
  // WhatsApp number in international format, digits only, no "+"
  whatsapp: '919999202008',
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
