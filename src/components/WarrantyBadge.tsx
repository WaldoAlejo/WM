import warrantySeal from '../assets/brand/WM_HOME_WARRANTY_SEAL_3YEARS.svg';
import { cn } from '../utils/cn';
import { useContent } from '../i18n/useContent';

interface WarrantyBadgeProps {
  size?: number;
  className?: string;
}

/**
 * Official 3-year warranty seal, extracted verbatim from the master
 * packing template. Never place over a product photo — always in flow,
 * with clear space around it (see PRD §5).
 */
export function WarrantyBadge({ size = 72, className }: WarrantyBadgeProps) {
  const content = useContent();

  return (
    <img
      src={warrantySeal}
      alt={content.common.warrantyBadgeAlt}
      width={size}
      height={size}
      className={cn('shrink-0', className)}
      draggable={false}
    />
  );
}
