import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

interface ActionLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  icon?: 'arrow' | 'message';
}

/** Shared CTA alignment, icon size and silver button treatment. */
export function ActionLink({ to, children, className, icon = 'arrow' }: ActionLinkProps) {
  const symbol = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true" focusable="false">
      {icon === 'message' ? (
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
      ) : <path d="M7 17 17 7M7 7h10v10" />}
    </svg>
  );
  return (
    <Link to={to} className={cn('editorial-button max-w-full justify-center gap-3 text-center leading-5', className)}>
      {icon === 'message' && symbol}
      <span>{children}</span>
      {icon === 'arrow' && symbol}
    </Link>
  );
}