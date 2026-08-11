import { cn } from '../utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  /** Override the eyebrow's default wine color — e.g. for use on a dark background. */
  eyebrowClassName?: string;
  /** Override the title's default black color — e.g. for use on a dark background. */
  titleClassName?: string;
  /** Override the subtitle's default gray color — e.g. for use on a dark background. */
  subtitleClassName?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left', className, eyebrowClassName, titleClassName, subtitleClassName }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className={cn('mb-2 text-xs font-semibold uppercase tracking-[0.2em]', eyebrowClassName ?? 'text-wm-wine')}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn('text-2xl font-bold sm:text-3xl', titleClassName ?? 'text-wm-black')}>{title}</h2>
      {subtitle && <p className={cn('mt-3 max-w-2xl [font-family:var(--font-body)]', subtitleClassName ?? 'text-wm-gray-700')} style={align === 'center' ? { marginInline: 'auto' } : undefined}>{subtitle}</p>}
    </div>
  );
}
