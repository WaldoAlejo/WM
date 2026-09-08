import assert from 'node:assert/strict';
import test from 'node:test';
import { prepareContactEmail } from '../src/utils/contactEmail.ts';

const labels = {
  name: 'Nombre', email: 'Correo', phone: 'Teléfono', model: 'Modelo',
  city: 'Ciudad', subject: 'Asunto', message: 'Mensaje',
};
const values = {
  name: 'María Pérez', email: 'maria+wm@example.com', phone: '',
  model: 'WM-26007', city: 'Quito', subject: 'Revisión & garantía',
  message: '¿Cómo solicitar ayuda?\nDetalles: 50% + accesorios & repuestos #1',
};

test('la consulta comercial incluye el producto visible en el correo y la copia', () => {
  const context = 'Producto de la consulta: Olla de Presión (WM-26007)';
  const draft = prepareContactEmail('contact@example.com', values, labels, false, context);
  assert.ok(draft.text.includes(context));
  assert.ok(new URL(draft.href).searchParams.get('body').includes(context));
  assert.ok(!draft.text.includes('Ciudad: Quito'));
});

test('el correo conserva acentos, caracteres especiales y saltos de línea', () => {
  const draft = prepareContactEmail('contact@example.com', values, labels, true);
  const url = new URL(draft.href);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, 'contact@example.com');
  assert.equal(url.searchParams.get('subject'), values.subject);
  assert.ok(url.searchParams.get('body').includes(values.message));
  assert.ok(url.searchParams.get('body').includes(values.email));
  assert.deepEqual([...url.searchParams.keys()], ['subject', 'body']);
});

test('ventas excluye datos de soporte ocultos y campos opcionales vacíos', () => {
  const draft = prepareContactEmail('contact@example.com', values, labels, false);
  assert.ok(!draft.text.includes(values.model));
  assert.ok(!draft.text.includes(values.city));
  assert.ok(!draft.text.includes('Teléfono:'));
  assert.ok(!new URL(draft.href).searchParams.get('body').includes(values.model));
});

test('preparar el borrador no modifica ni borra los datos del usuario', () => {
  const original = { ...values };
  prepareContactEmail('contact@example.com', Object.freeze(values), labels, true);
  assert.deepEqual(values, original);
});

test('el texto para copia manual mantiene mensajes largos completos', () => {
  const message = 'Descripción detallada. '.repeat(1000);
  const draft = prepareContactEmail('contact@example.com', { ...values, message }, labels, true);
  assert.ok(draft.text.startsWith('contact@example.com\r\nAsunto:'));
  assert.ok(draft.text.endsWith(message.trim()));
});

test('el borrador utiliza las etiquetas y el asunto del idioma activo', () => {
  const draft = prepareContactEmail('contact@example.com', { ...values, subject: 'Technical support' }, {
    name: 'Name', email: 'Email', phone: 'Phone', model: 'Model',
    city: 'City', subject: 'Subject', message: 'Message',
  }, true);
  assert.ok(draft.text.includes('Subject: Technical support'));
  assert.ok(draft.text.includes('Name: María Pérez'));
  assert.ok(draft.text.includes('City: Quito'));
});
