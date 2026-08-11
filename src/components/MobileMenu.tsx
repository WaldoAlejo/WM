import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { useMainNav } from '../data/navigation';
import { useContent } from '../i18n/useContent';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '../utils/cn';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const mainNav = useMainNav();
  const content = useContent();

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-40 md:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          'absolute inset-0 bg-black/40 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />
      <nav
        id="mobile-menu"
        aria-label={content.common.mainNavAriaLabel}
        className={cn(
          'absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col gap-1 bg-white px-6 pt-24 shadow-xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
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
    </div>,
    document.body,
  );
}
