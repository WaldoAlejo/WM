import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useMainNav } from '../data/navigation';
import { useContent } from '../i18n/useContent';
import { cn } from '../utils/cn';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchToggleRef = useRef<HTMLButtonElement>(null);
  const mainNav = useMainNav();
  const content = useContent();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/productos?buscar=${encodeURIComponent(trimmed)}` : '/productos');
    searchToggleRef.current?.focus();
    setSearchOpen(false);
    setQuery('');
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-wm-page transition-shadow',
        scrolled ? 'border-wm-gray-300 shadow-sm' : 'border-transparent',
      )}
    >
      <div className="wm-container flex h-18 items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center" aria-label={content.common.homeAriaLabel}>
          <Logo height={46} />
        </NavLink>

        <nav aria-label={content.common.mainNavAriaLabel} className="hidden lg:block">
          <ul className="flex items-center gap-4 xl:gap-8">
            {mainNav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium tracking-wide text-wm-black transition-colors hover:text-wm-gray-500',
                      isActive && 'border-b-2 border-wm-wine pb-1',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <form
            onSubmit={submitSearch}
            aria-hidden={!searchOpen}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                setSearchOpen(false);
                searchToggleRef.current?.focus();
              }
            }}
            className={cn(
              'header-search-form flex items-center overflow-hidden border border-transparent transition-[width] duration-200',
              searchOpen ? 'w-36 border-wm-gray-300 pl-3 xl:w-48' : 'w-0',
            )}
          >
            <span className="sr-only">
              <label htmlFor="header-search">{content.common.openSearch}</label>
            </span>
            <input
              id="header-search"
              ref={searchInputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={content.productsPage.searchPlaceholder}
              tabIndex={searchOpen ? 0 : -1}
              className="w-full py-2 text-sm text-wm-black outline-none placeholder:text-wm-gray-500"
            />
          </form>
          <button
            ref={searchToggleRef}
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label={searchOpen ? content.common.closeSearch : content.common.openSearch}
            aria-expanded={searchOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-wm-black transition-colors hover:text-wm-wine"
          >
            {searchOpen ? (
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
                <path d="M17 17l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? content.common.closeMenu : content.common.openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={cn(
              'block h-0.5 w-6 bg-wm-black transition-transform',
              menuOpen && 'translate-y-2 rotate-45',
            )}
          />
          <span className={cn('block h-0.5 w-6 bg-wm-black transition-opacity', menuOpen && 'opacity-0')} />
          <span
            className={cn(
              'block h-0.5 w-6 bg-wm-black transition-transform',
              menuOpen && '-translate-y-2 -rotate-45',
            )}
          />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
