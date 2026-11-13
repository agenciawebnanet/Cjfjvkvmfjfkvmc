import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { MenuItem, formatBRL, MENU_CATEGORIES } from '@/src/data/menuData';

interface ImageModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const category = MENU_CATEGORIES.find((c) => c.id === item.categoryId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-item-title"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#181410] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/60 text-[#F5EFE6] backdrop-blur-sm transition-colors hover:bg-black/80"
          aria-label="Fechar visualização"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="aspect-[4/3] w-full bg-[#221C16]">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-5">
          {category && (
            <p className="text-xs font-medium text-[#A89F94]">
              {category.title}
            </p>
          )}
          <h3
            id="modal-item-title"
            className="mt-1 font-[var(--font-display)] text-2xl font-bold tracking-wide text-[#F5EFE6]"
          >
            {item.name}
          </h3>
          {item.detail && (
            <p className="mt-1 text-sm text-[#A89F94]">{item.detail}</p>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-2xl font-bold text-[#F5B942] tabular-nums">
              {formatBRL(item.price)}
            </span>
            <span className="text-xs text-[#A89F94]">
              Chame o garçom para realizar o pedido
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
