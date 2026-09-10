type QualityIconName = 'design' | 'quality' | 'support';

interface QualityIconProps {
  name: QualityIconName;
  className?: string;
}

/** Consistent decorative marks; each pillar's heading supplies its meaning. */
export function QualityIcon({ name, className }: QualityIconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      {name === 'design' && (
        <>
          <rect x="3" y="3" width="12" height="12" rx="1" />
          <circle cx="15" cy="15" r="6" />
        </>
      )}
      {name === 'quality' && (
        <>
          <path d="m8 15-2 6 6-3 6 3-2-6" />
          <circle cx="12" cy="9" r="7" />
          <path d="m9 9 2 2 4-4" />
        </>
      )}
      {name === 'support' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <path d="m5.6 5.6 3.6 3.6m5.6 5.6 3.6 3.6m0-12.8-3.6 3.6m-5.6 5.6-3.6 3.6" />
        </>
      )}
    </svg>
  );
}