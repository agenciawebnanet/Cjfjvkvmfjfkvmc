import React, { useMemo, useState } from 'react';
import { Search, X, ArrowUp, UtensilsCrossed } from 'lucide-react';
import {
  HERO_IMAGE,
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategoryId,
  MenuItem,
} from '@/src/data/menuData';
import { BrandMark } from '@/src/components/BrandMark';
import { MenuCard } from '@/src/components/MenuCard';
import { ImageModal } from '@/src/components/ImageModal';

type ActiveFilter = 'all' | MenuCategoryId;

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectedItem, setInspectedItem] = useState<MenuItem | null>(null);

  const normalizedQuery = normalizeText(searchQuery.trim());

  const filteredSections = useMemo(() => {
    const categoriesToShow =
      activeFilter === 'all'
        ? MENU_CATEGORIES
        : MENU_CATEGORIES.filter((cat) => cat.id === activeFilter);

    return categoriesToShow
      .map((category) => {
        const items = MENU_ITEMS.filter((item) => {
          if (item.categoryId !== category.id) return false;
          if (!normalizedQuery) return true;
          const haystack = normalizeText(
            `${item.name} ${item.detail ?? ''} ${category.title}`
          );
          return haystack.includes(normalizedQuery);
        });
        return { category, items };
      })
      .filter((section) => section.items.length > 0);
  }, [activeFilter, normalizedQuery]);

  const totalVisibleItems = useMemo(
    () => filteredSections.reduce((sum, sec) => sum + sec.items.length, 0),
    [filteredSections]
  );

  const handleNavClick = (categoryId: MenuCategoryId) => {
    setActiveFilter('all');
    setSearchQuery('');
    requestAnimationFrame(() => {
      const el = document.getElementById(`secao-${categoryId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  return (
    <div id="topo" className="min-h-screen bg-[#0F0D0B] text-[#F5EFE6]">
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0F0D0B]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <a
            href="#topo"
            onClick={(e) => {
              e.preventDefault();
              setActiveFilter('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-[var(--font-display)] text-xl font-bold tracking-wide text-[#F5EFE6] whitespace-nowrap shrink-0 hover:text-[#F5B942] transition-colors"
          >
            Pé da Serra Espetaria
          </a>

          <nav
            aria-label="Seções do cardápio"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#A89F94]"
          >
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleNavClick(category.id)}
                className="whitespace-nowrap shrink-0 py-1 hover:text-[#F5EFE6] hover:underline hover:underline-offset-4 transition-colors"
              >
                {category.shortLabel}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-xs text-[#A89F94] bg-[#181410] border border-white/[0.08] px-3 py-1.5 rounded-lg">
            <UtensilsCrossed className="h-3.5 w-3.5 text-[#E5A93B]" />
            <span className="hidden sm:inline">Peça ao garçom</span>
          </div>
        </div>
      </header>

      {/* Editorial Hero Banner */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="relative mx-auto max-w-7xl">
          <div className="relative h-[260px] sm:h-[320px] lg:h-[360px] w-full overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="Pé da Serra Espetaria"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0B] via-[#0F0D0B]/70 to-[#0F0D0B]/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D0B]/85 via-[#0F0D0B]/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8">
              <div className="max-w-2xl">
                <BrandMark className="mb-2 h-8 w-20 sm:h-9 sm:w-24" />
                <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5EFE6] [text-wrap:balance]">
                  Cardápio Digital
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#D6CEC2] max-w-xl">
                  Aqui o sabor é sempre maior · Versão digital oficial do cardápio impresso
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-[#A89F94] tabular-nums">
                  <span>{MENU_ITEMS.length} itens no cardápio</span>
                  <span aria-hidden="true">·</span>
                  <span>Toque nas fotos para ampliar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Category Filter Bar */}
      <section
        aria-label="Filtros do cardápio"
        className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div
            role="tablist"
            aria-label="Categorias"
            className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              className={`min-h-[44px] rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-[#E5A93B] text-[#14100D]'
                  : 'bg-[#181410] text-[#A89F94] border border-white/[0.08] hover:text-[#F5EFE6] hover:border-white/20'
              }`}
            >
              Todos ({MENU_ITEMS.length})
            </button>

            {MENU_CATEGORIES.map((category) => {
              const count = MENU_ITEMS.filter(
                (i) => i.categoryId === category.id
              ).length;
              const isActive = activeFilter === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(category.id)}
                  className={`min-h-[44px] rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#E5A93B] text-[#14100D]'
                      : 'bg-[#181410] text-[#A89F94] border border-white/[0.08] hover:text-[#F5EFE6] hover:border-white/20'
                  }`}
                >
                  {category.shortLabel} ({count})
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#A89F94]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar item no cardápio..."
              aria-label="Buscar item no cardápio"
              className="min-h-[44px] w-full rounded-lg border border-white/[0.08] bg-[#181410] py-2 pr-10 pl-10 text-sm text-[#F5EFE6] placeholder:text-[#7D756C] focus:border-[#E5A93B]/60 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute top-1/2 right-1.5 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-[#A89F94] hover:text-[#F5EFE6]"
                aria-label="Limpar busca"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Menu Catalog */}
      <main className="mx-auto max-w-7xl px-4 pt-6 pb-16 sm:px-6 lg:px-8">
        {totalVisibleItems === 0 ? (
          <div className="my-12 rounded-xl border border-white/[0.08] bg-[#181410] px-6 py-12 text-center">
            <p className="text-lg font-semibold text-[#F5EFE6]">
              Nenhum item encontrado para &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="mt-1 text-sm text-[#A89F94]">
              Tente outro termo ou visualize todo o cardápio.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#E5A93B] px-5 py-2.5 text-sm font-bold text-[#14100D] transition-colors hover:bg-[#F5B942]"
            >
              Ver todos os {MENU_ITEMS.length} itens
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredSections.map(({ category, items }) => (
              <section
                key={category.id}
                id={`secao-${category.id}`}
                className="scroll-mt-20"
              >
                <div className="mb-5 flex flex-col gap-1 border-b border-white/[0.08] pb-3 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold tracking-wide text-[#F5EFE6]">
                      {category.title}
                    </h2>
                    <p className="mt-0.5 text-sm text-[#A89F94]">
                      {category.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-[#A89F94] tabular-nums">
                    {items.length} {items.length === 1 ? 'item' : 'itens'}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      onInspect={setInspectedItem}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#0C0A08] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-[var(--font-display)] text-lg font-bold tracking-wide text-[#F5EFE6]">
              Pé da Serra Espetaria
            </p>
            <p className="mt-0.5 text-xs text-[#A89F94]">
              Bons momentos começam aqui · O garçom realiza o atendimento na mesa
            </p>
          </div>
          <a
            href="#topo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-medium text-[#A89F94] hover:text-[#F5B942] transition-colors"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            <span>Voltar ao topo</span>
          </a>
        </div>
      </footer>

      {/* Photo Lightbox Modal */}
      <ImageModal
        item={inspectedItem}
        onClose={() => setInspectedItem(null)}
      />
    </div>
  );
}
