# WM — WM Global

Sitio web oficial de la marca registrada **WM®** (React + Vite + TypeScript + Tailwind CSS v4),
inspirado en el sistema visual del master packing. **WM** es la marca; **WM Global** es la
línea de producto que cubre este sitio hoy (no limitada a electrodomésticos de hogar — abarca las
distintas categorías que WM va incorporando). WM tendrá más líneas en el futuro (Energy, Bags, Toys,
...) — ver [Marca vs. línea de producto](#marca-vs-línea-de-producto) más abajo antes de agregar una.

Catálogo de 6 productos, garantía de 3 años, formulario de contacto, sin comercio electrónico
(arquitectura preparada para agregarlo después).

## Ejecutar el proyecto

```bash
npm install
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # type-check (tsc -b) + build de producción a dist/
npm run preview    # sirve dist/ localmente para revisar el build
npm run lint        # oxlint
```

## Estructura

```
src/
  assets/brand/     Logotipo oficial y sello de garantía (SVG, sin modificar)
  components/       Header, MobileMenu, Footer, ProductCard, WarrantyBadge, ContactForm, ...
  data/             products.ts, categories.ts, navigation.ts, company.ts, content.es.ts, content.en.ts, structuredData.ts
  i18n/             LocaleContext (provider + useLocale), useContent()
  layouts/          MainLayout (Header + Footer)
  pages/            HomePage, ProductsPage, ProductDetailPage, WarrantyPage, AboutPage, ContactPage
  types/            Product, CategoryDef, ContactInfo, Pending<T>, Localized<T>
  utils/            cn, validation, submitForm, useSeo, useJsonLd, t (pick locale from Localized<T>)
public/
  robots.txt, sitemap.xml, favicon.svg (logotipo oficial)
```

## Idiomas (ES / EN)

El sitio es bilingüe (español/inglés) mediante un selector en el header — no cambia la URL
(se decidió así deliberadamente: más simple de mantener que rutas duplicadas por idioma, a costa de
que Google no puede indexar cada idioma por separado; si el catálogo crece mucho o el tráfico
internacional se vuelve relevante, vale la pena reconsiderar URLs por idioma tipo `/en/...`).

- **`src/i18n/LocaleContext.tsx`** — guarda el idioma activo (`'es' | 'en'`), lo persiste en
  `localStorage` y detecta el idioma del navegador la primera vez. `useLocale()` da acceso a
  `{ locale, setLocale }` desde cualquier componente.
- **`src/i18n/useContent.ts`** — hook que devuelve el diccionario de copy (`content.es.ts` o
  `content.en.ts`) según el idioma activo. Todo componente que muestra texto de interfaz debe usar
  `useContent()` en vez de importar `content` directamente.
- **`src/data/content.es.ts`** y **`content.en.ts`** — mismo shape exacto (nav, hero, páginas,
  formulario, footer, etc.). Al agregar un texto nuevo, agregarlo en ambos archivos.
- **`src/types/index.ts`** → `Localized<T> = { es: T; en: T }`. Los campos de producto que son
  texto visible (`name`, `shortDescription`, `benefits[].title/description`,
  `specifications[].label/value`, `safetyAndQuality[]`, `seoTitle`, `seoDescription`,
  `ProductImage.alt`, `CategoryDef.name`) usan este tipo. `model`, `slug`, URLs de imagen y demás
  datos no textuales quedan como `string` normal.
- **`src/utils/t.ts`** — `t(value, locale)` extrae el string del idioma activo de un
  `Localized<T>`.

### Agregar un producto nuevo (con ambos idiomas)

Cada campo de texto va como `{ es: '...', en: '...' }` en vez de un string simple — ver los 3
productos ya cargados en `products.ts` como referencia. Si todavía no se tiene la traducción al
inglés de un producto nuevo, avisar explícitamente en vez de dejarlo a medias (no hay un patrón
`Pending` por-idioma; `Pending<Localized<string>>` pasa a "resuelto" cuando **ambos** idiomas están
listos).

## Marca vs. línea de producto

**WM** es la marca registrada (`src/data/company.ts` → `brand.name`). Este sitio cubre únicamente
la línea **WM Global** (`brand.name` no cambia nunca por línea; `productLine.name` sí).
Nada del código debe volver a escribir "WM Global" a mano — todo lo que lo necesita lo
importa de `productLine`:

```ts
// src/data/company.ts
export const brand = { name: 'WM', domain: { pending: true } };
export const productLine = { slug: 'global', name: 'WM Global' };
```

Cuando exista contenido real para otra línea (Energy, Bags, Toys...), el patrón es agregar su
propio objeto de configuración — no reescribir `brand`. Si en algún momento el sitio pasa a cubrir
más de una línea a la vez, `productLine` se convierte en un arreglo/registro y las páginas pasan a
recibir la línea activa por ruta; eso todavía no está implementado.

El logotipo oficial (`WM_LOGO_OFICIAL_REGISTRADO.svg`) es el monograma **"WM®" solo** — nunca
incluye el nombre de la línea dentro del propio archivo SVG. El nombre de la línea ("WM GLOBAL")
se imprime aparte, en la tipografía normal del sitio, junto al logo (ver
`src/components/Logo.tsx`, prop `withTagline`).

## Cómo editar los productos

Todo el contenido vive en `src/data/`, no está repetido en los componentes:

- **`src/data/products.ts`** — los 6 productos. Cada uno tiene `name`, `model`, `categorySlug`,
  `shortDescription`, `benefits`, `specifications`, `safetyAndQuality`, `mainImage`, `gallery`,
  `manualUrl` (PDF del manual, `Pending<string>` — colocar el archivo en `public/manuals/<slug>.pdf`
  y actualizar la ruta), `specSheetUrl` (ficha técnica en PDF, mismo patrón, en
  `public/spec-sheets/<slug>.pdf` — pensado para compradores B2B que evalúan el producto).
- **`src/data/categories.ts`** — taxonomía de categorías (slug + nombre).
- **`src/data/company.ts`** — `brand` (marca WM), `productLine` (línea actual: WM Global),
  datos de contacto y redes sociales.
- **`src/data/content.ts`** — todos los textos de interfaz en español, centralizados para poder
  añadir una versión en inglés (`content.en.ts`) sin tocar componentes.

### El patrón `Pending<T>`

Los campos cuyo valor real todavía no existe usan el tipo `Pending<T>` (`src/types/index.ts`):

```ts
model: { pending: true }                         // en vez de un valor inventado
model: { pending: true, note: 'Nota interna' }    // con nota opcional para el equipo
```

La UI nunca oculta estos campos: los muestra con una marca visible **"Por confirmar"**
(componente `PendingNote`) en vez de fabricar un dato falso. Para completar un producto, reemplaza
el objeto `{ pending: true }` por el valor real (string, o `ProductImage { src, alt }` para
imágenes) y la marca desaparece automáticamente.

### Agregar la fotografía de un producto

```ts
mainImage: {
  src: '/products/producto-01/main.webp', // colocar el archivo en public/products/...
  alt: 'Descripción del producto para lectores de pantalla',
},
gallery: [
  { src: '/products/producto-01/gallery-1.webp', alt: '...' },
],
```

Usar PNG o WebP con fondo transparente cuando estén disponibles, igual que en el packaging.

## Datos y recursos pendientes

Nada de lo siguiente fue inventado; todo queda marcado como pendiente en el código y visible en la
UI como "Por confirmar" hasta que se reemplace:

- **Nombres, modelos, categorías reales y fotografías de los 6 productos**: 3 de 6 ya tienen datos
  reales (batidora de inmersión, licuadora profesional, olla de presión — todos bajo `categoria-01`
  "Cocina"); faltan `producto-04`–`06` y las categorías 02/03 siguen genéricas.
- **Especificaciones técnicas**: voltaje y material siguen pendientes en los 3 productos cargados
  (ningún documento de fábrica los ha especificado todavía); información de seguridad/calidad
  también pendiente en los 3.
- **Datos de contacto** (`src/data/company.ts`): correo y dirección confirmados
  (`contact@wmglobalcorp.com`, Quito, Pichincha, Ecuador). Teléfono, horario y redes siguen pendientes.
- ~~Condiciones legales de garantía y procedimiento de solicitud de asistencia~~ — confirmados,
  ver `content.warrantyPage` en `src/data/content.ts`.
- **Texto "Nosotros"**: propósito de marca (sin años de fundación, países ni cifras — no se
  incluyeron por no haber sido proporcionados).
- ~~Dominio de producción real~~ — confirmado: `wmglobalcorp.com` (`brand.domain` en
  `src/data/company.ts`, usado por `useSeo.ts`, `structuredData.ts`, `robots.txt` y `sitemap.xml`).
- **Endpoint del formulario de contacto**: no hay backend. `src/utils/submitForm.ts` simula el envío;
  reemplazar su cuerpo por una llamada real (`fetch('/api/contact', ...)`) cuando exista.

## Identidad de marca — reglas que se respetaron

- El logotipo activo es `src/assets/brand/WM_LOGO_OFICIAL_REGISTRADO.svg` — el monograma "WM®"
  puro (sin la palabra "HOME" dentro del arte). Se usa tal cual, como imagen (`<img>`), nunca
  redibujado ni reconstruido con texto/tipografía.
- `WM_HOME_LOGO_OFICIAL*.svg` (lockup anterior "WM" + "HOME" combinado en un solo arte) quedaron en
  `src/assets/brand/` como archivo histórico, pero **ningún componente los usa**. No borrarlos sin
  confirmar con el equipo de marca — podrían servir de referencia para un lockup de línea futuro.
- El sello de garantía de 3 años (`WM_HOME_WARRANTY_SEAL_3YEARS.svg`) se extrajo sin modificar del
  master packing (`WM_HOME_MASTER_PACKING_UNIVERSAL_EN.svg`) y nunca se superpone a fotografías de
  producto.
- Paleta: negro (`#000000`), blanco y grises neutros — sin colores ajenos a la identidad.
- Tipografías: Montserrat (títulos) y Poppins (texto), autoalojadas vía `@fontsource`
  (subconjuntos `latin` + `latin-ext`, suficientes para español e inglés).

## Accesibilidad y SEO

- HTML semántico, enlace "saltar al contenido", navegación completa por teclado, foco visible,
  formularios con `<label>` y mensajes de error asociados vía `aria-describedby`.
- Metadatos por página, Open Graph y JSON-LD (`Organization` en Inicio, `Product` en cada ficha) sin
  precio/disponibilidad/reseñas inventadas.
- `robots.txt` y `sitemap.xml` en `public/`.
- Respeta `prefers-reduced-motion` (las animaciones de aparición se desactivan).

## Notas técnicas

- Sin carrito ni checkout. La capa de datos (`Product`, `CategoryDef`) ya está separada de la UI,
  por lo que agregar precios/inventario/checkout más adelante no requiere rediseñar el catálogo.
- Advertencia de `npm audit` sobre `react-router-dom`: las vulnerabilidades reportadas son de modo
  SSR/RSC (server actions, prerender, `ScrollRestoration`) — no aplican a esta SPA cliente-only sin
  servidor ni loaders/actions.
