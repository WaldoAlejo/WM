import { cn } from '../utils/cn';
import { useContent } from '../i18n/useContent';

interface PendingNoteProps {
  label?: string;
  className?: string;
}

/** Visible marker for a content field awaiting real data — never silently hidden. */
export function PendingNote({ label, className }: PendingNoteProps) {
  const content = useContent();

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-dashed border-wm-gray-300 bg-wm-gray-50 px-2 py-0.5 text-xs font-medium text-wm-gray-500',
        className,
      )}
    >
      {label ?? content.common.pendingLabel}
    </span>
  );
}
