import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets scroll position on route change (SPA navigation doesn't do this by default). */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
