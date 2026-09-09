# Revisión y mejora conservadora del Home WM

## Hallazgos a escala real

Revisión de React, TypeScript, Vite, Tailwind y estilos compartidos, seguida de navegador a zoom 100 % en escritorio y móvil. La tipografía existente era legible: título principal de 64 px en escritorio y aproximadamente 34 px en móvil; no se aumentaron fuentes ni logotipo por las capturas reducidas.

Los problemas concretos eran los márgenes distintos entre hero y header, las historias a 1440 px frente al resto a 1280 px, el encuadre aislado de Energy, tres transiciones grandes en Home, el foco invisible del buscador y controles de idioma de aproximadamente 23 × 16 px. La garantía ocupaba unos 637 px en escritorio principalmente por sus dos degradados.

## Archivos modificados

- Página: `src/pages/HomePage.tsx`.
- Componentes compartidos: `src/components/Header.tsx`, `LanguageSwitcher.tsx`, `MobileMenu.tsx`, `Footer.tsx`, `ProductCard.tsx` y `ProductPhoto.tsx`.
- Estilos: `src/index.css` y `src/styles/surfaces.css`.
- Documentación: este informe, `review-output/TRANSICIONES-WM.md` y `README.md`.

## Cambios

- Contenedor compartido de 1280 px con márgenes laterales de 24/32 px y espaciado editorial de 64–80 px. Se conservan estrechos los textos centrados de introducción y cierre.
- Un solo fondo continuo en el hero; su transición se calcula desde el espacio inferior reservado, sin aclarar el área de los controles. La garantía conserva su centro negro y sello oficial, con cortes limpios y relleno de 48/56 px.
- Historias de cocina y Energy sobre la misma retícula. Imagen primero en móvil; producto Energy completo en una superficie blanca con espacio interior consistente. El contenedor semántico permite cambiar por una foto lifestyle en el futuro sin rehacer la sección.
- Buscador con foco visible y cierre con Escape que devuelve el foco al botón; controles de búsqueda, menú e idioma de 44 px. Se preserva el diálogo móvil nativo y su control de foco.
- Tarjetas sin sombras nuevas, interacción de escala 1.02 solo con puntero preciso y movimiento permitido. Decodificación asíncrona de fotografías; pie claro con separación discreta y enlaces más cómodos.

La garantía pasó de aproximadamente 637 a 221 px de alto en escritorio; el contenido mantiene espacio de lectura y el cambio elimina sobre todo las transiciones repetidas. Los controles de idioma pasaron de unos 23 × 16 a 44 × 44 px, búsqueda de 36 × 36 a 44 × 44 y menú de 40 × 40 a 44 × 44. El buscador abierto sigue cabiendo a 1024 px, ahora con un contorno de foco de 2 px.

## Decisiones conservadas

Sin cambios de textos, productos, fotografías, logotipos, familias tipográficas, tamaños de títulos, arquitectura ni dependencias. Se conservan la carga prioritaria de la primera imagen del hero, la carga diferida posterior, los cambios de fotografía seguros, el movimiento reducido, los formularios sin backend y el fondo recientemente aprobado de las fichas de producto.

## Validación y siguientes pasos

La revisión independiente aprobó 1440, 1280, 1024, 768, 430, 390 y 375 px a zoom 100 %, sin desbordamiento horizontal, imágenes rotas ni imágenes sin texto alternativo. Se verificaron ambos idiomas, los tres estados del hero, el menú con Tab/Escape y restauración de foco, el salto al contenido y el buscador con foco visible, Escape y envío. Los elementos de la retícula comparten el mismo inicio horizontal; título y logo conservan sus tamaños. Movimiento reducido mantiene una única fotografía activa accesible y transiciones prácticamente instantáneas.

TypeScript y build de producción aprobados, con generación de 15 HTML y sitemap; 18 pruebas aprobadas. Lint conserva únicamente la advertencia previa de Fast Refresh en `LocaleContext.tsx`. No aparecieron errores de consola ni advertencias ARIA en las interacciones verificadas. El contraste de texto principal sobre superficies sólidas supera 6.4:1; los tres estados fotográficos del hero se inspeccionaron visualmente. Esta revisión no equivale a una certificación WCAG completa.

Una muestra local con caché caliente registró LCP de 164 ms y suma de desplazamientos CLS de 0, frente a 244 ms y 0.001766 en la muestra anterior. Son ejecuciones únicas de laboratorio sobre el servidor de desarrollo: no demuestran una mejora de rendimiento para usuarios reales. Se mantienen las dimensiones/relaciones de aspecto reservadas y la prioridad de carga del hero; las capturas y datos de diagnóstico permanecen en archivos temporales fuera del proyecto.

Como mejoras futuras opcionales, una fotografía lifestyle oficial para Energy podría acercar aún más esa sección a cocina. Las fotografías actuales ya son JPEG moderados; no se fabricaron variantes `srcset` ni dimensiones intrínsecas. Optimización adicional de imágenes debe basarse en mediciones de tráfico real y variantes auténticas de los mismos archivos. Datos de contacto pendientes requieren confirmación comercial, no contenido inventado. Ninguna de estas decisiones bloquea las mejoras actuales.
