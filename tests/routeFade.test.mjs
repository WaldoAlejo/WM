import assert from 'node:assert/strict';
import test from 'node:test';
import { scheduleRouteFade, ROUTE_FADE_OUT_MS, ROUTE_FADE_IN_MS } from '../src/utils/routeFade.ts';

test('route content commits only after fade-out and finishes after fade-in', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const events = [];
  scheduleRouteFade(() => events.push('commit'), () => events.push('finish'));
  t.mock.timers.tick(ROUTE_FADE_OUT_MS - 1);
  assert.deepEqual(events, []);
  t.mock.timers.tick(1);
  assert.deepEqual(events, ['commit']);
  t.mock.timers.tick(ROUTE_FADE_IN_MS);
  assert.deepEqual(events, ['commit', 'finish']);
});

test('a superseding navigation cancels the stale destination', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const events = [];
  const cancel = scheduleRouteFade(() => events.push('stale'), () => events.push('stale-finish'));
  t.mock.timers.tick(60);
  cancel();
  scheduleRouteFade(() => events.push('latest'), () => events.push('latest-finish'));
  t.mock.timers.tick(ROUTE_FADE_OUT_MS);
  assert.deepEqual(events, ['latest']);
  t.mock.timers.tick(ROUTE_FADE_IN_MS);
  assert.deepEqual(events, ['latest', 'latest-finish']);
});

test('unmount or reduced-motion cancellation stops the incoming completion', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const events = [];
  const cancel = scheduleRouteFade(() => events.push('commit'), () => events.push('finish'));
  t.mock.timers.tick(ROUTE_FADE_OUT_MS);
  cancel();
  t.mock.timers.tick(ROUTE_FADE_IN_MS);
  assert.deepEqual(events, ['commit']);
});