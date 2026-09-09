import assert from 'node:assert/strict';
import test from 'node:test';
import { detectInitialLocale, persistLocale } from '../src/i18n/localeStorage.ts';

test('el idioma guardado tiene prioridad y los valores desconocidos usan el idioma del navegador', () => {
  const values = new Map([['wm-locale', 'es']]);
  const storage = () => ({ getItem: (key) => values.get(key), setItem: (key, value) => values.set(key, value) });
  assert.equal(detectInitialLocale(storage, 'en-US'), 'es');
  persistLocale('en', storage);
  assert.equal(detectInitialLocale(storage, 'es-EC'), 'en');
  values.set('wm-locale', 'invalid');
  assert.equal(detectInitialLocale(storage, 'en-GB'), 'en');
  assert.equal(detectInitialLocale(storage, 'es-EC'), 'es');
});

test('negar acceso a localStorage no impide iniciar ni cambiar de idioma', () => {
  const denied = () => { throw new Error('SecurityError'); };
  assert.equal(detectInitialLocale(denied, 'en-US'), 'en');
  assert.equal(detectInitialLocale(denied, 'es-EC'), 'es');
  assert.doesNotThrow(() => persistLocale('en', denied));
});

test('fallos de lectura y cuota de almacenamiento no interrumpen la página', () => {
  const unavailable = () => ({
    getItem() { throw new Error('SecurityError'); },
    setItem() { throw new Error('QuotaExceededError'); },
  });
  assert.equal(detectInitialLocale(unavailable, 'es-EC'), 'es');
  assert.doesNotThrow(() => persistLocale('en', unavailable));
});