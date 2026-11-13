import React, { useState } from 'react';
import { Utensils, Expand } from 'lucide-react';
import { MenuItem, formatBRL } from '@/src/data/menuData';

interface MenuCardProps {
  item: MenuItem;
  onInspect: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onInspect }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      onClick={() => onInspect(item)}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#181410] cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#E5A93B]/35"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#221C16]">
        {!imgError ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#261E16] to-[#15110D] p-4 text-center">
            <Utensils className="h-8 w-8 text-[#E5A93B]/60" />
            <span className="text-xs font-medium text-[#A89F94]">{item.name}</span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

        <span className="pointer-events-none absolute right-2.5 bottom-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-black/55 text-[#F5EFE6] opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <Expand className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <h3 className="text-[16px] font-semibold leading-snug text-[#F5EFE6]">
            {item.name}
          </h3>
          {item.detail && (
            <p className="mt-1 text-[13px] leading-relaxed text-[#A89F94]">
              {item.detail}
            </p>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">
          <span className="font-sans text-[17px] font-bold tracking-tight text-[#F5B942] tabular-nums">
            {formatBRL(item.price)}
          </span>
          <span className="text-xs text-[#A89F94] group-hover:text-[#F5EFE6] transition-colors">
            Ver foto
          </span>
        </div>
      </div>
    </article>
  );
};
