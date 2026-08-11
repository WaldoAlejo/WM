import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useMainNav } from '../data/navigation';
import { useContent } from '../i18n/useContent';
import { cn } from '../utils/cn';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mainNav = useMainNav();
  const content = useContent();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow',
        scrolled ? 'border-wm-gray-300 shadow-sm' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center" aria-label={content.common.homeAriaLabel}>
          <Logo height={46} withTagline />
        </NavLink>

        <nav aria-label={content.common.mainNavAriaLabel} className="hidden md:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium tracking-wide text-wm-black transition-colors hover:text-wm-gray-500',
                      isActive && 'border-b-2 border-wm-copper pb-1',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
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
