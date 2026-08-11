import logoOfficial from '../assets/brand/WM_LOGO_OFICIAL_REGISTRADO.svg';
import { productLine } from '../data/company';
import { cn } from '../utils/cn';

interface LogoProps {
  className?: string;
  /** Visual height in px; width follows the logo's native aspect ratio. */
  height?: number;
  withTagline?: boolean;
}

/**
 * Renders the official WM monogram file as-is (img, not inline/reconstructed
 * markup) so it can never be redrawn, recolored or reproportioned. The
 * product line name (currently "WM Global") is set in normal type
 * next to it — never baked into the logo artwork itself.
 */
export function Logo({ className, height = 40, withTagline = false }: LogoProps) {
  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <img
        src={logoOfficial}
        alt="WM"
        height={height}
        style={{ height, width: 'auto' }}
        draggable={false}
      />
      {withTagline && (
        <span className="hidden sm:inline text-xs font-semibold tracking-[0.2em] text-wm-gray-500 self-end pb-1">
          {productLine.name.toUpperCase()}
        </span>
      )}
    </div>
  );
}
