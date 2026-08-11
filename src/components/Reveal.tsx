import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '../utils/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fades content up into place once it enters the viewport. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);

    // Safety net: never leave content permanently invisible if the
    // observer never fires (unsupported API, an automated crawler that
    // doesn't scroll, a resize-based screenshot tool, etc.).
    const fallback = window.setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(visible ? 'fade-in-up' : 'opacity-0', className)}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
