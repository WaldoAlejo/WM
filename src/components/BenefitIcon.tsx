import type { BenefitIconName } from '../types';

const paths: Record<BenefitIconName, readonly [string, string]> = {
  blend: ["M10 3h4v10l2 5v3H8v-3l2-5Z","M10 7h4"],
  blade: ["M12 12C4 12 3 6 6 4c4-1 6 3 6 8Zm0 0c8 0 9 6 6 8-4 1-6-3-6-8Z","M11 12h2M12 11v2"],
  whisk: ["M10 10C3 17 8 22 12 22s9-5 2-12M12 10c-3 7-3 10 0 12 3-2 3-5 0-12","M10 10V3h4v7"],
  froth: ["M12 3v11M7 18a5 3 0 1 0 10 0 5 3 0 1 0-10 0","M5 7h.01M18 10h.01M17 5h.01"],
  capacity: ["M5 5h14l-1 15H6L5 5ZM4 5h16","M9 9h6M9 13h4M9 17h6"],
  quiet: ["M4 9h4l5-4v14l-5-4H4V9Z","M17 9l4 6m0-6-4 6"],
  controls: ["M4 6h16M4 12h16M4 18h16","M8 4v4M16 10v4M10 16v4"],
  visibility: ["M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z","M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0"],
  removable: ["M5 12h14v8H5v-8ZM3 14h2m14 0h2","M12 3v6m-3-3 3-3 3 3"],
  shield: ["M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Z","m8 12 3 3 5-6"],
  heat: ["M6 16c-4-5 4-7 0-12m6 12c-4-5 4-7 0-12m6 12c-4-5 4-7 0-12","M4 21h16"],
  nonstick: ["M4 16h13l4-4M5 16l1 4h10l1-4","M8 5c-1 3-4 5-2 7s6 1 6-2c0-2-3-4-4-5Z"],
  display: ["M3 4h18v15H3V4ZM7 22h10M12 19v3","M7 8h5m-5 4h10"],
  finish: ["M5 5h14v14H5V5Z","m12 7 1.5 3.5L17 12l-3.5 1.5L12 17l-1.5-3.5L7 12l3.5-1.5L12 7Z"],
  programs: ["M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Z","M14 17h7m-3.5-3.5v7"],
  motor: ["M6 6h12v12H6V6ZM3 9h3m12 0h3M3 15h3m12 0h3M9 3v3m6-3v3M9 18v3m6-3v3","M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0"],
  fan: ["M12 12C6 8 8 2 12 3c4 1 3 6 0 9Zm0 0c6-4 12-1 10 3-2 4-7 1-10-3Zm0 0c0 7-5 10-8 7-3-4 3-6 8-7Z","M11 12h2"],
  airflow: ["M3 8h12a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3","M3 17h6a2 2 0 1 1-2 2"],
  height: ["M5 3v18m-3-3 3 3 3-3M2 6l3-3 3 3M14 4h6v6h-6V4Z","M17 10v10m-4 1h8"],
  battery: ["M3 6h16v12H3V6Zm16 4h2v4h-2","M7 9v6m4-6v6m4-6v6"],
  wave: ["M3 17V4m0 13h18","M5 12c3-9 5-9 8 0s5 9 8 0"],
  plug: ["M6 9h12v4a6 6 0 0 1-12 0V9ZM12 19v3","M9 3v6m6-6v6"],
  usb: ["M12 3v18m0-8-6-4V6m6 11 6-4V9","m9 6 3-3 3 3M4 3h4v3H4V3Zm12 3h4v3h-4V6Z"],
  charge: ["M5 9a8 8 0 0 1 14-3l2 2m0-5v5h-5M19 15a8 8 0 0 1-14 3l-2-2m0 5v-5h5","m13 8-3 5h4l-3 4"],
  light: ["M8 8h8l-2 5v8h-4v-8L8 8ZM7 5h10","M12 1v2M5 2l2 2m12-2-2 2"],
};

/** Semantic line icons share scale and stroke; the benefit text is their accessible label. */
export function BenefitIcon({ name }: { name?: BenefitIconName }) {
  const artwork = name ? paths[name] : undefined;
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-wm-wine" aria-hidden="true" focusable="false">
      {artwork ? <><path d={artwork[0]} /><path d={artwork[1]} className="text-wm-ink" /></> : <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" className="text-wm-ink" /></>}
    </svg>
  );
}
