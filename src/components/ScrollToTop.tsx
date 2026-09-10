import { useEffect, useRef } from 'react';

/** Scroll only after the displayed page changes, never for catalog query updates. */
export function ScrollToTop({ pathname }: { pathname: string }) {
  const previousPath = useRef(pathname);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (previousPath.current !== pathname) {
      document.getElementById('main-content')?.focus({ preventScroll: true });
    }
    previousPath.current = pathname;
  }, [pathname]);
  return null;
}