export const ROUTE_FADE_OUT_MS = 120;
export const ROUTE_FADE_IN_MS = 200;

/** One cancellable sequence; navigation replacement and unmount cancel both stages. */
export function scheduleRouteFade(commit: () => void, finish: () => void): () => void {
  let cancelled = false;
  let incoming: ReturnType<typeof setTimeout> | undefined;
  const outgoing = setTimeout(() => {
    if (cancelled) return;
    commit();
    incoming = setTimeout(() => {
      if (!cancelled) finish();
    }, ROUTE_FADE_IN_MS);
  }, ROUTE_FADE_OUT_MS);

  return () => {
    cancelled = true;
    clearTimeout(outgoing);
    clearTimeout(incoming);
  };
}