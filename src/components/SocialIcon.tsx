import type { SocialLink } from '../types';

interface SocialIconProps {
  icon: SocialLink['icon'];
  className?: string;
}

/** Minimal line icons for social platforms — monochrome, inherits color via currentColor. */
export function SocialIcon({ icon, className }: SocialIconProps) {
  const props = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', className, 'aria-hidden': true } as const;

  switch (icon) {
    case 'instagram':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...props}>
          <path
            d="M14 8.5h2V5.5h-2c-2.2 0-3.5 1.3-3.5 3.5v2H8v3h2.5V21h3v-7h2.3l.4-3H13.5V9c0-.35.15-.5.5-.5z"
            fill="currentColor"
          />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="8.5" r="1.1" fill="currentColor" />
          <path
            d="M8 11v6M12 11v6M12 13.3c0-1.3 1-2.3 2.3-2.3S16.5 12 16.5 13.3V17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...props}>
          <rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
