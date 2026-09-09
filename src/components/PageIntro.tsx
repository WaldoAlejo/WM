import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface PageIntroProps {
  title: string;
  description?: string;
  descriptionClassName?: string;
  eyebrow?: ReactNode;
  children?: ReactNode;
  compact?: boolean;
}

/** Shared editorial title on the same warm surface as the page content. */
export function PageIntro({ title, description, descriptionClassName, eyebrow, children, compact = false }: PageIntroProps) {
  return (
    <header className="editorial-page-intro">
      <div className={cn('mx-auto max-w-7xl px-6 lg:px-8', compact ? 'py-6' : 'py-10 sm:py-12')}>
        {eyebrow && <div className="editorial-eyebrow mb-4 text-wm-wine">{eyebrow}</div>}
        <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className={cn('mt-5 max-w-2xl text-sm leading-7 text-wm-gray-700 sm:text-base', descriptionClassName)}>{description}</p>}
        {children && <div className="mt-5 text-sm text-wm-gray-700">{children}</div>}
      </div>
    </header>
  );
}
