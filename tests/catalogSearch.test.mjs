import assert from 'node:assert/strict';
import test from 'node:test';
import { filterProducts, updateCatalogParams } from '../src/utils/catalogSearch.ts';

const products = [
  { name: { es: 'Olla de Presión Multifunción', en: 'Multifunction Pressure Cooker' }, model: 'WM-26007', categorySlug: 'hogar' },
  { name: { es: 'Estación de Energía Portátil', en: 'Portable Power Station' }, model: 'P3200', categorySlug: 'energia' },
  { name: { es: 'Licuadora de Vidrio', en: 'Glass Blender' }, model: { pending: true }, categorySlug: 'hogar' },
];

test('busca por modelo sin distinguir mayúsculas', () => {
  assert.deepEqual(filterProducts(products, ' wm-26007 ', ''), [products[0]]);
});

test('tolera acentos omitidos, espacios repetidos y orden de palabras', () => {
  assert.deepEqual(filterProducts(products, '  portatil   energia ', ''), [products[1]]);
  assert.deepEqual(filterProducts(products, 'PRESIO\u0301N', ''), [products[0]]);
});

test('ambos idiomas encuentran el mismo producto', () => {
  assert.deepEqual(filterProducts(products, 'pressure cooker', ''), filterProducts(products, 'olla presion', ''));
});

test('combina categoría y búsqueda y admite modelos pendientes', () => {
  assert.deepEqual(filterProducts(products, 'P3200', 'hogar'), []);
  assert.deepEqual(filterProducts(products, 'licuadora', 'hogar'), [products[2]]);
  assert.deepEqual(filterProducts(products, '   ', ''), products);
  assert.deepEqual(filterProducts(products, '', 'inexistente'), []);
});

test('actualiza la búsqueda sin perder categoría ni mutar la URL anterior', () => {
  const original = new URLSearchParams('categoria=hogar&buscar=olla');
  const next = updateCatalogParams(original, 'buscar', 'vidrio');
  assert.equal(original.get('buscar'), 'olla');
  assert.equal(next.get('buscar'), 'vidrio');
  assert.equal(next.get('categoria'), 'hogar');
  assert.deepEqual(filterProducts(products, next.get('buscar'), next.get('categoria')), [products[2]]);
});

test('la URL serializada restaura filtros y permite limpiarlos por separado', () => {
  const query = updateCatalogParams(new URLSearchParams(), 'buscar', 'energía portátil');
  const combined = updateCatalogParams(query, 'categoria', 'energia');
  const restored = new URLSearchParams(combined.toString());
  assert.deepEqual(filterProducts(products, restored.get('buscar'), restored.get('categoria')), [products[1]]);
  assert.equal(updateCatalogParams(restored, 'buscar', '').toString(), 'categoria=energia');
  assert.equal(updateCatalogParams(restored, 'categoria', '').get('buscar'), 'energía portátil');
});
