import { useLayoutEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from 'react';
import { useLocation, type Location } from 'react-router-dom';
import { scheduleRouteFade, ROUTE_FADE_IN_MS, ROUTE_FADE_OUT_MS } from '../utils/routeFade';
import { ScrollToTop } from './ScrollToTop';

const motionQuery = '(prefers-reduced-motion: reduce)';
function subscribeMotion(callback: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}
const getReducedMotion = () => window.matchMedia(motionQuery).matches;
const getServerReducedMotion = () => true;

export function RouteTransition({ children }: { children: (location: Location) => ReactNode }) {
  const location = useLocation();
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, getServerReducedMotion);
  const [displayed, setDisplayed] = useState(location);
  const displayedRef = useRef(location);
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle');

  useLayoutEffect(() => {
    if (reducedMotion || location.pathname === displayedRef.current.pathname) {
      displayedRef.current = location;
      setDisplayed(location);
      setPhase('idle');
      return;
    }

    setPhase('out');
    return scheduleRouteFade(() => {
      displayedRef.current = location;
      setDisplayed(location);
      setPhase('in');
    }, () => setPhase('idle'));
  }, [location, reducedMotion]);

  // Query/hash updates remain immediate and keep the current page instance and focus.
  const visibleLocation = reducedMotion || location.pathname === displayed.pathname ? location : displayed;
  return (
    <div
      className="route-transition"
      data-phase={reducedMotion ? 'idle' : phase}
      inert={!reducedMotion && phase === 'out'}
      aria-busy={!reducedMotion && phase === 'out'}
      style={{ '--route-fade-out': `${ROUTE_FADE_OUT_MS}ms`, '--route-fade-in': `${ROUTE_FADE_IN_MS}ms` } as CSSProperties}
    >
      <ScrollToTop pathname={visibleLocation.pathname} />
      {children(visibleLocation)}
    </div>
  );
}