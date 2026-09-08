import type { ReactNode } from 'react';

interface PageIntroProps {
  title: string;
  description?: string;
  eyebrow?: ReactNode;
  children?: ReactNode;
}

/** Shared dark title band. The fade is outside all readable content. */
export function PageIntro({ title, description, eyebrow, children }: PageIntroProps) {
  return (
    <header className="editorial-page-intro dark-surface">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
        {eyebrow && <div className="editorial-eyebrow mb-4 text-white/70">{eyebrow}</div>}
        <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{description}</p>}
        {children && <div className="mt-5 text-sm text-white/80">{children}</div>}
      </div>
    </header>
  );
}
