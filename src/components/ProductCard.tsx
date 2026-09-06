import Image from 'next/image';
import { Product } from '@/lib/products';
import { WhatsAppIcon } from './WhatsAppIcon';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card-sheen group flex flex-col overflow-hidden rounded-2xl border border-navy-200/70 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_16px_36px_-16px_rgba(234,88,12,0.28)] active:scale-[0.99]">
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-white p-3 sm:h-44 sm:p-4">
        <Image
          src={product.img}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3.5 sm:p-4">
        <h3 className="font-display text-[13px] font-bold leading-snug text-navy-900 sm:text-sm">
          {product.name}
        </h3>
        {product.tags && (
          <p className="text-[11px] leading-relaxed text-navy-500 sm:text-xs">{product.tags}</p>
        )}
        <div className="mt-auto pt-2.5">
          <a
            href={product.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2.5 text-[13px] font-bold text-white shadow-md shadow-[#25D366]/20 transition hover:brightness-110 active:scale-[0.97] sm:text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
