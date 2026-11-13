import React, { useEffect } from 'react';
import { X, Plus, Minus, Trash2, Receipt } from 'lucide-react';
import { MenuItem, formatBRL } from '@/src/data/menuData';

export interface OrderEntry {
  item: MenuItem;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  entries: OrderEntry[];
  onAdd: (item: MenuItem) => void;
  onRemove: (itemId: string) => void;
  onClear: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  entries,
  onAdd,
  onRemove,
  onClear,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalCount = entries.reduce((acc, entry) => acc + entry.quantity, 0);
  const totalValue = entries.reduce(
    (acc, entry) => acc + entry.item.price * entry.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="comanda-title"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#14100D] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <Receipt className="h-5 w-5 text-[#F5B942]" />
            <h2
              id="comanda-title"
              className="font-[var(--font-display)] text-2xl font-bold tracking-wide text-[#F5EFE6]"
            >
              Minha Comanda
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-[#A89F94] transition-colors hover:bg-white/5 hover:text-[#F5EFE6]"
            aria-label="Fechar comanda"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {entries.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <Receipt className="mb-3 h-10 w-10 text-[#A89F94]/40" />
              <p className="text-base font-semibold text-[#F5EFE6]">
                Sua comanda está vazia
              </p>
              <p className="mt-1.5 max-w-xs text-sm text-[#A89F94]">
                Toque em &ldquo;Adicionar&rdquo; nos petiscos, espetos ou bebidas para calcular o total da sua mesa.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-white/[0.07]">
              {entries.map(({ item, quantity }) => (
                <li key={item.id} className="flex items-center gap-3.5 py-3.5">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="h-14 w-16 shrink-0 rounded-lg object-cover bg-[#221C16]"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[#F5EFE6]">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[#A89F94] tabular-nums">
                      {formatBRL(item.price)} cada
                    </p>
                  </div>
                  <div className="flex items-center overflow-hidden rounded-lg border border-white/10 bg-[#211B15]">
                    <button
                      type="button"
                      onClick={() => onRemove(item.id)}
                      className="flex min-h-[40px] min-w-[36px] items-center justify-center text-[#F5EFE6] hover:bg-white/5"
                      aria-label={`Diminuir quantidade de ${item.name}`}
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-[24px] text-center text-xs font-bold text-[#F5B942] tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onAdd(item)}
                      className="flex min-h-[40px] min-w-[36px] items-center justify-center text-[#F5EFE6] hover:bg-white/5"
                      aria-label={`Aumentar quantidade de ${item.name}`}
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {entries.length > 0 && (
          <div className="border-t border-white/10 bg-[#1A1511] px-5 py-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-[#A89F94]">
                Total ({totalCount} {totalCount === 1 ? 'item' : 'itens'})
              </span>
              <span className="text-2xl font-bold text-[#F5B942] tabular-nums">
                {formatBRL(totalValue)}
              </span>
            </div>
            <p className="mt-1 text-xs text-[#A89F94]">
              Apresente esta lista ao garçom para fazer seu pedido na mesa.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={onClear}
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-[#A89F94] transition-colors hover:border-white/20 hover:text-[#F5EFE6]"
              >
                <Trash2 className="h-4 w-4" />
                <span>Limpar</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 min-h-[44px] rounded-lg bg-[#E5A93B] px-5 py-2.5 text-sm font-bold text-[#14100D] transition-colors hover:bg-[#F5B942]"
              >
                Continuar vendo o cardápio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
