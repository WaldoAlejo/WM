import { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import { useMainNav } from '../data/navigation';
import { useContent } from '../i18n/useContent';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '../utils/cn';
import { useModalDialog } from '../utils/useModalDialog';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const mainNav = useMainNav();
  const content = useContent();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const dialogRef = useModalDialog(open);

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/productos?buscar=${encodeURIComponent(trimmed)}` : '/productos');
    setQuery('');
    onClose();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      id="mobile-menu"
      aria-label={content.common.mainNavAriaLabel}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-black/40"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <nav
        aria-label={content.common.mainNavAriaLabel}
        className="absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col gap-1 overflow-y-auto bg-white px-6 pb-6 pt-20 shadow-xl"
      >
        <button type="button" autoFocus onClick={onClose} aria-label={content.common.closeMenu}
          className="absolute right-4 top-3 flex h-11 w-11 items-center justify-center text-2xl text-wm-black">
          <span aria-hidden="true">×</span>
        </button>
        <form onSubmit={submitSearch} className="mb-3">
          <label className="sr-only" htmlFor="mobile-search">
            {content.common.openSearch}
          </label>
          <input
            id="mobile-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={content.productsPage.searchPlaceholder}
            className="w-full border border-wm-gray-300 px-3 py-2.5 text-sm focus:border-wm-black"
          />
        </form>
        {mainNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'rounded-sm px-3 py-3 text-base font-medium text-wm-black transition-colors hover:bg-wm-gray-50',
                isActive && 'bg-wm-gray-50 font-semibold',
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
        <LanguageSwitcher className="mt-4 px-3" />
      </nav>
    </dialog>,
    document.body,
  );
}
