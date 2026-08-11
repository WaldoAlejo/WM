import { cn } from '../utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  /** Override the eyebrow's default copper color — e.g. for use on a copper background. */
  eyebrowClassName?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left', className, eyebrowClassName }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className={cn('mb-2 text-xs font-semibold uppercase tracking-[0.2em]', eyebrowClassName ?? 'text-wm-copper-dark')}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold text-wm-black sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-wm-gray-700 [font-family:var(--font-body)]" style={align === 'center' ? { marginInline: 'auto' } : undefined}>{subtitle}</p>}
    </div>
  );
}
