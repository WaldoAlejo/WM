# WM — WM Global

Sitio web oficial de la marca registrada **WM®** (React + Vite + TypeScript + Tailwind CSS v4),
inspirado en el sistema visual del master packing. **WM** es la marca; **WM Global** es la
línea de producto que cubre este sitio hoy (no limitada a electrodomésticos de hogar — abarca las
distintas categorías que WM va incorporando). WM tendrá más líneas en el futuro (Energy, Bags, Toys,
...) — ver [Marca vs. línea de producto](#marca-vs-línea-de-producto) más abajo antes de agregar una.

Catálogo de 9 productos, garantía de 3 años, formulario de contacto, sin comercio electrónico
(arquitectura preparada para agregarlo después).

## Ejecutar el proyecto

Usar Node.js 24 o superior: la generación estática y las pruebas importan los datos TypeScript directamente.

```bash
npm install
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # TypeScript + Vite + metadatos HTML por ruta y sitemap a dist/
npm run preview    # sirve dist/ localmente para revisar el build
npm run lint        # oxlint
npm test            # pruebas de búsqueda, correo y generación SEO
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
  utils/            cn, validation, contactEmail, useSeo, useJsonLd, t (pick locale from Localized<T>)
public/
  robots.txt, favicon.svg (logotipo oficial)
scripts/
  generateSeo.mjs, seoFiles.mjs  Generación de HTML por ruta y sitemap en dist/
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

Cada campo de texto va como `{ es: '...', en: '...' }` en vez de un string simple — ver los 9
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

### Búsqueda y consultas desde el catálogo

El catálogo usa `buscar` y `categoria` en la URL como fuente de sus filtros. Escribir reemplaza
la entrada actual del historial; elegir categoría crea una entrada. La búsqueda admite nombre
en español o inglés y modelo, sin distinguir acentos ni mayúsculas. Un botón permite limpiar
ambos filtros. `src/utils/catalogSearch.ts` concentra la lógica de filtrado.

El botón de consulta de cada ficha abre `/contacto?motivo=sales&producto=<slug>` y muestra el
producto en el formulario y el borrador del correo. Solo se aceptan productos del catálogo;
los datos personales no se agregan a la URL. Cambiar ES/EN traduce el contexto del producto
sin borrar el mensaje escrito. Todo funciona en el cliente, sin backend.

Todo el contenido vive en `src/data/`, no está repetido en los componentes:

- **`src/data/products.ts`** — los 9 productos. Cada uno tiene `name`, `model`, `categorySlug`,
  `shortDescription`, `benefits`, `specifications`, `safetyAndQuality`, `mainImage`, `gallery`,
  `manualUrl` (PDF del manual, `Pending<string>` — colocar el archivo en `public/manuals/<slug>.pdf`
  y actualizar la ruta), `specSheetUrl` (ficha técnica en PDF, mismo patrón, en
  `public/spec-sheets/<slug>.pdf` — pensado para compradores B2B que evalúan el producto).
- **`src/data/categories.ts`** — taxonomía de categorías (slug + nombre).
- **`src/data/company.ts`** — `brand` (marca WM), `productLine` (línea actual: WM Global),
  datos de contacto y redes sociales.
- **`src/data/content.es.ts`** y **`content.en.ts`** — textos de interfaz en español e inglés.

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
  alt: { es: 'Descripción del producto', en: 'Product description' },
},
gallery: [
  { src: '/products/producto-01/gallery-1.webp', alt: { es: 'Vista lateral', en: 'Side view' } },
],
```

Usar PNG o WebP con fondo transparente cuando estén disponibles, igual que en el packaging.

## Datos y recursos pendientes

Nada de lo siguiente fue inventado; todo queda marcado como pendiente en el código y visible en la
UI como "Por confirmar" hasta que se reemplace:

- El catálogo contiene nueve productos con fotografías y nombres ES/EN, en Hogar y Energía.
- Faltan ocho manuales y las nueve fichas técnicas PDF. El manual P3200 está disponible.
- La licuadora de vidrio tiene modelo y datos de seguridad pendientes; también faltan
  especificaciones de varios productos. Consultar el inventario por producto en
  [Contenidos pendientes](review-output/CONTENIDOS-PENDIENTES-WM.md).
- Correo, dominio y horario están configurados. Teléfono y redes sociales siguen pendientes.
  La dirección no se muestra por decisión de WM.
- Los contenidos pendientes solo se completan con información proporcionada por WM.
- **Contacto sin backend**: por decisión de WM, el sitio no incorpora un servidor ni un servicio
  de recepción. `src/utils/contactEmail.ts` prepara un borrador local; el usuario lo revisa y lo
  envía desde su aplicación de correo mediante un enlace `mailto:`, o copia el texto para pegarlo
  en su servicio de correo. La página nunca confirma recepción ni borra los campos al preparar
  el borrador. Los documentos se adjuntan en la aplicación de correo. No se persisten datos del
  formulario en el navegador; al salir o cambiar de tipo de consulta se descarta el formulario.
  Se retiró la aceptación de una política inexistente. No se genera una política sin contenido
  proporcionado por WM.

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
- Paleta: negro, blanco cálido, grises y acento vino (`#6b1f2a`).
- Tipografías: Montserrat (títulos) y Poppins (texto), autoalojadas vía `@fontsource`
  (subconjunto `latin` para español e inglés; evita cargar también `latin-ext`).

## Accesibilidad y SEO

- HTML semántico, enlace "saltar al contenido", navegación completa por teclado, foco visible,
  formularios con `<label>` y mensajes de error asociados vía `aria-describedby`.
- Metadatos por página, Open Graph y JSON-LD (`Organization` en Inicio, `Product` en cada ficha) sin
  precio/disponibilidad/reseñas inventadas.
- `robots.txt` en `public/`; `sitemap.xml` se genera directamente en `dist/` desde
  `src/data/seoPages.ts`, que incorpora todos los productos del catálogo. No mantener una lista manual.
- Menú móvil y visor con `<dialog>` nativo, cierre por Escape, foco inicial, ciclo Tab/Shift+Tab,
  fondo no interactivo y restauración del foco. El menú se cierra al pasar a escritorio.
- Encabezado h1 en el catálogo; miniaturas como botones con `aria-pressed` y listas semánticas.

### HTML y metadatos estáticos

`npm run build` termina ejecutando `scripts/generateSeo.mjs`. Produce `index.html`, las páginas
institucionales y de producto como archivos `.html`, además de `404.html` y el sitemap. Los
metadatos iniciales (título, descripción, canonical, Open Graph, imagen y Twitter) están en el HTML,
sin ejecutar React. El contenido y las interacciones siguen siendo una SPA: esto no es renderizado
completo del contenido en servidor. No se agrega un backend.

Los enlaces compartidos usan español, porque ES/EN comparten URL por decisión del proyecto.
El hook `useSeo` usa la misma definición de metadatos y actualiza el idioma al navegar. Cada ficha
usa su foto principal; las páginas generales usan una foto existente del catálogo. La página 404
incluye `noindex` y queda fuera del sitemap. Los datos JSON-LD siguen siendo generados en el cliente.

Vercel usa `cleanUrls: true` para servir `/productos` desde `productos.html` y las fichas desde
sus archivos correspondientes. Se retiró la reescritura universal a Inicio; las rutas desconocidas
pueden usar el archivo estático `404.html`. Se debe desplegar todo `dist/`, no únicamente el index.
En desarrollo, Vite sirve la SPA; la generación de archivos SEO ocurre en la compilación.
- Respeta `prefers-reduced-motion` (las animaciones de aparición se desactivan).

## Notas técnicas

- Sin carrito ni checkout. La capa de datos (`Product`, `CategoryDef`) ya está separada de la UI,
  por lo que agregar precios/inventario/checkout más adelante no requiere rediseñar el catálogo.

### Destacados, novedades y carrusel

`featured` controla la selección de Inicio y la etiqueta Destacado/Featured.
`isNew: true` activa de forma independiente Nuevo/New; usarlo solo cuando WM confirme
la novedad y retirarlo al terminar esa condición. Actualmente los nueve productos siguen
destacados y ninguno está marcado como nuevo.

El carrusel cambia cada diez segundos. Permite pausar/reanudar; se detiene al seleccionar
una miniatura, mientras tiene foco o el puntero encima y al ocultar la pestaña.
Con movimiento reducido usa selección manual. La navegación compacta se usa por debajo
de 1024 px. Los resultados de la fase 4 están en [el registro de fases](review-output/FASES-MEJORAS-WM.md).

### Dirección visual

La portada y los componentes compartidos adoptan una composición editorial: fotografía
protagonista, espacios amplios, bloques de categoría y franjas negras. El Home reserva la transición
principal para el hero y utiliza cortes limpios en garantía. La referencia visual proporcionada por WM es Nayapot; las fotografías, los textos
y los logotipos implementados son los del proyecto WM. Consultar
[la adaptación visual](review-output/ADAPTACION-VISUAL-WM.md) para alcance y validación.

El acabado se mantiene en componentes compartidos para que nuevos productos hereden
las mismas transiciones visuales. Los datos técnicos, modelos pendientes y documentos
disponibles siguen procediendo de src/data/products.ts.

Las superficies y transiciones se ajustan globalmente en
[`src/styles/surfaces.css`](src/styles/surfaces.css). Consulta la
[guía de mantenimiento](review-output/TRANSICIONES-WM.md) para cambiar colores,
altura de los bordes y regenerar las máscaras compartidas sin editar cada página.

La [revisión del Home](review-output/MEJORAS-HOME-WM.md) documenta los ajustes
conservadores de alineación, espaciado, interacción y accesibilidad, comprobados a zoom 100 %.
