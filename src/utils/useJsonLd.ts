import { useEffect } from 'react';

/** Injects a JSON-LD <script> tag for the current page and removes it on unmount/update. */
export function useJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data)]);
}
