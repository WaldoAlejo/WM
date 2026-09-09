# Revisión del desarrollo de WM

Fecha: 8 de septiembre de 2026. Alcance: proyecto local D:\WM, estado de trabajo inicialmente limpio. No se modificó el código de la aplicación.

**Dictamen: requiere correcciones funcionales antes de considerar terminado el sitio.** Confianza alta en los hallazgos de código; revisión visual y reproducción en navegador pendientes por un fallo al iniciar Chrome (`CDP response channel closed`). Los pasos siguientes son casos de comprobación derivados del código, no pruebas de navegador ejecutadas.

## Arquitectura y estado actual

SPA con React, TypeScript, Vite, Tailwind y React Router. Incluye Inicio, catálogo, fichas de producto, Garantía, Nosotros, Contacto y página no encontrada. Tiene 9 productos, 2 categorías, fotografías locales, un manual PDF y textos ES/EN. Es un catálogo con contacto, sin carrito ni checkout, conforme al alcance documentado.

La separación entre datos, componentes y páginas permite mejorar el sitio progresivamente. Hay etiquetas de formularios, textos alternativos de imágenes, metadatos por página y una representación explícita de datos pendientes. No hace falta una reescritura para abordar los problemas identificados.

## Hallazgos prioritarios

### 1. P1 — Los formularios confirman solicitudes que nunca se entregan

Ubicación: `src/utils/submitForm.ts:20`, `src/components/ContactForm.tsx:93` y `src/data/content.es.ts:103`.

`submitContactForm` descarta los datos, espera 600 ms y devuelve `{ ok: true }`. El formulario borra lo escrito y afirma que el equipo recibió la solicitud. Afecta ventas, soporte y garantía. En garantía se indica además que no hace falta enviar un correo aparte, por lo que el usuario puede quedarse sin ningún canal efectivo de solicitud.

Corrección: integrar un receptor real que confirme la recepción y transporte los adjuntos. Mientras no exista, presentar el correo disponible y no afirmar que hubo envío. Conservar los datos ante errores. Comprobar recepción efectiva, fallos de red y adjuntos antes de habilitar el mensaje de éxito.

### 2. P1 — La búsqueda del encabezado no se sincroniza en el catálogo

Ubicación: `src/pages/ProductsPage.tsx:25`, `src/components/Header.tsx:26`, `src/components/MobileMenu.tsx:20`.

El catálogo lee `buscar` únicamente al inicializar `useState`. Si ya está montado, una búsqueda desde el encabezado cambia la URL, pero no el estado que filtra los productos. La búsqueda propia del catálogo tampoco actualiza la URL.

Caso de comprobación: abrir `/productos`, buscar «licuadora» desde el encabezado y después «freidora». Los resultados deben corresponder a cada búsqueda y mantenerse al recargar o navegar atrás/adelante.

Corrección: usar los parámetros de URL como fuente del filtro o sincronizarlos explícitamente en ambas direcciones. Mantener también la categoría.

### 3. P2 — Cambiar de consulta conserva asuntos y adjuntos de la anterior

Ubicación: `src/pages/ContactPage.tsx:186`, `src/components/ContactForm.tsx:33` y `:93`.

Las dos ramas renderizan el mismo componente sin una identidad distinta. Pasar directamente de Servicio al cliente a Ventas conserva estado interno: asunto, modelo, ciudad, archivos y consentimiento. Los campos ocultos y archivos siguen incluidos en el payload. Actualmente el envío simulado impide que salgan del navegador; al conectar un backend, el problema persistiría.

Corrección: definir qué datos comunes se conservan y reiniciar o separar los específicos de cada categoría. Excluir del payload campos no aplicables. Validar que el asunto pertenece a las opciones activas.

Comprobación: preparar una consulta de soporte con asunto y archivo; pulsar la tarjeta de ventas. No debe quedar un asunto de soporte ni viajar un adjunto oculto.

### 4. P2 — Cambiar ES/EN deja el asunto del formulario desactualizado

Ubicación: `src/components/ContactForm.tsx:31`, `:39` y `:197`.

Se guarda como valor el texto traducido del asunto. Al cambiar idioma se reemplazan las opciones, pero el estado mantiene el texto anterior. La validación solo exige un string no vacío, por lo que acepta un valor ajeno a la lista visible. También ocurre con el asunto preseleccionado en Garantía.

Corrección: separar identificadores estables y etiquetas traducidas. Comprobar cambio de idioma antes y después de seleccionar un asunto, conservando los campos personales.

### 5. P2 — Se exige aceptar una política que no se puede consultar

Ubicación: `src/data/content.es.ts:213`, `src/components/ContactForm.tsx:328`, `src/App.tsx`.

El texto exige haber leído la Política de privacidad, pero no contiene un enlace y el proyecto no implementa esa página. Es una carencia funcional de información al usuario; esta revisión no constituye una evaluación legal.

Corrección: incorporar el texto aprobado por WM y un enlace accesible junto al consentimiento antes de activar la recepción de datos.

### 6. P2 — Menú móvil oculto con controles todavía enfocables

Ubicación: `src/components/MobileMenu.tsx:28`.

El menú cerrado permanece montado, desplazado fuera de pantalla, con `aria-hidden` y `pointer-events-none`. No tiene `inert`, deshabilitación de controles ni gestión de tabulación. Sus enlaces y búsqueda pueden recibir foco por teclado aunque no sean visibles. Al abrirlo tampoco se gestiona el foco ni el cierre con Escape.

Corrección: desactivar la interacción cuando está cerrado y gestionar entrada, recorrido y retorno de foco. Comprobar con Tab y Shift+Tab en ancho móvil, además de Escape y cambio a escritorio con menú abierto.

### 7. P2 — Visor de imágenes sin gestión de foco

Ubicación: `src/components/ImageLightbox.tsx:47`.

Declara un diálogo modal, pero no mueve el foco a sus controles, no lo contiene y no aporta nombre al diálogo. Un usuario de teclado puede seguir recorriendo la página de fondo. Sí hay manejo de Escape y flechas.

Corrección: dar nombre accesible al diálogo, enfocar un control al abrir, contener el foco y devolverlo al disparador al cerrar. Verificar el recorrido completo por teclado.

### 8. P2 — Sitemap desactualizado

Ubicación: `public/sitemap.xml` frente a `src/data/products.ts`.

Faltan las fichas de `freidora-de-aire-vidrio-4l`, `ventilador-industrial-3-en-1` y `estacion-de-energia-portatil-p3200`. Solo figuran 6 de los 9 productos. Esto no prueba que estén sin indexar; demuestra que el inventario publicado en el sitemap está incompleto.

Corrección: generar el sitemap desde el catálogo y comprobar igualdad entre sus slugs y las rutas de producto.

### 9. P2 — El catálogo carece de encabezado principal h1

Ubicación: `src/pages/ProductsPage.tsx:48`, `src/components/SectionHeading.tsx:25`.

El título «Productos» usa un componente que siempre genera h2. La página no contiene un h1. Corrección: permitir elegir el nivel semántico o renderizar un h1 en esta página conservando su aspecto.

## Mejoras de experiencia y contenido

- **Consulta contextual:** el botón «Consultar sobre este producto» dirige a `/contacto` sin trasladar producto ni modelo. Proponer que seleccione ventas y conserve el producto consultado (`ProductDetailPage.tsx:77`).
- **Búsqueda útil por modelo:** el filtro solo considera el nombre traducido. Buscar `WM-26007` no encuentra la olla, aunque ese modelo figura en su ficha. Incluir modelo y normalización de acentos (`ProductsPage.tsx:31`).
- **Destacados frente a novedades:** los 9 productos tienen `featured: true`; todos aparecen en destacados y reciben la etiqueta «Nuevo». Separar novedad de selección editorial y elegir los destacados deliberadamente (`ProductCard.tsx:25`, `products.ts`).
- **Carrusel:** cambia cada 10 segundos sin pausa y continúa con movimiento reducido. Incorporar una pausa y detener la rotación durante interacción, para permitir leer y elegir con tranquilidad (`Hero.tsx:41`).
- **Documentación de producto:** faltan 8 manuales y las 9 fichas técnicas. Hay especificaciones pendientes y un modelo por confirmar. Completar con documentación de WM, sin deducir valores a partir de fotografías.
- **Galería:** usa roles de pestañas sin navegación de pestañas por teclado ni panel asociado. Puede simplificarse a botones con estado seleccionado o completar el patrón (`ProductGallery.tsx`).
- **Confirmación de errores:** al enviar datos incompletos se muestran errores, pero no se enfoca el primero ni existe un resumen anunciado. Mejorar la localización del error (`ContactForm.tsx:82`).

## SEO, rendimiento y mantenimiento

- Los metadatos sociales se crean en el navegador y no incluyen `og:image` ni `twitter:image`, pese a declarar una tarjeta de imagen grande. El HTML inicial solo tiene metadatos genéricos. Preparar metadatos e imagen por ruta y validar el resultado con los servicios de compartición antes de afirmar cómo se ve en ellos.
- Los dos idiomas comparten URL por una decisión documentada. No se considera un bug: revisar esa decisión si WM necesita páginas compartibles por idioma o posicionamiento internacional independiente.
- Se conservan estrategias útiles como imágenes locales y carga diferida. Las 37 fotos suman 5.09 MB decimales; el máximo individual es 277399 bytes. Son tamaños de archivos, no transferencia medida por visita. No hay evidencia suficiente para afirmar que el sitio es lento. Medir carga móvil y tamaño servido antes de optimizar imágenes, fuentes o dividir paquetes.
- El README está desactualizado: indica 6 productos, categorías y contenidos pendientes ya resueltos, referencia `content.ts` inexistente y describe una paleta anterior. Actualizarlo con el estado real.
- TypeScript no activa `strict`. Considerar habilitarlo progresivamente para detectar estados y accesos inválidos, acompañado de pruebas de comportamiento útiles.
- No hay script ni archivos de pruebas automatizadas en el proyecto inspeccionado. Añadir cobertura focalizada para búsqueda/URL, cambios de contexto del formulario, idioma y recepción real, además de compilación y lint en integración continua.
- No se verificaron vulnerabilidades actuales de dependencias contra un registro externo. La nota antigua del README sobre `npm audit` no acredita el estado de seguridad actual.

## Validación y límites

- Se revisaron rutas, páginas, componentes funcionales, datos de los 9 productos, diccionarios, metadatos y configuración.
- Se comprobaron 38 referencias locales: 37 fotografías y un manual. Ninguna apunta a un archivo inexistente. Esto no valida el contenido del manual ni la exactitud comercial de las fichas.
- `npm run lint`: terminó sin errores, con una advertencia `react/only-export-components` en `LocaleContext.tsx:35`.
- `npm run build`: la ejecución inicial terminó correctamente, con TypeScript y 70 módulos transformados. Salida principal: JS 370.27 kB (111.37 kB gzip), CSS 35.20 kB (6.98 kB gzip). Estos tamaños no incluyen todas las imágenes y fuentes ni equivalen a tiempos de carga.
- Un segundo intento encontró `EPERM` al limpiar `dist/assets` mientras la primera compilación seguía activa. No se considera un defecto del código. Se inició además una compilación en `review-output/build-20260908` para evitar ese conflicto y se detuvo después de confirmar el éxito de la compilación principal; esa carpeta contenía artefactos parciales de revisión, retirados posteriormente durante la limpieza del proyecto.
- Chrome automatizado no inició. No se certifican aspecto en móvil/escritorio, ausencia de desbordamiento, contraste visual, métricas de rendimiento ni recorridos de navegador. No se inspeccionó el despliegue público.

## Orden de trabajo propuesto

1. Corregir la confirmación falsa de envío y definir el receptor real; incorporar la política consultable.
2. Corregir sincronización de búsqueda, estado de formularios y cambio de idioma.
3. Resolver navegación por teclado, encabezados y sitemap; conservar el producto en las consultas.
4. Completar materiales de producto, actualizar documentación y definir destacados/novedades.
5. Ejecutar revisión visual a 360, 390, 768, 1024 y 1440 px, en ES/EN; medir carga y ajustar presentación con esa evidencia.

La revisión del código permite iniciar las correcciones funcionales. La validación visual debe completarse antes de aprobar una nueva versión.
