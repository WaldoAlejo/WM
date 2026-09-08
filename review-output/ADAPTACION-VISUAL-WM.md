# Adaptación visual de WM

Referencia indicada por el CEO: [Nayapot](https://nayapot.com/), revisada el 8 de septiembre de 2026 en Chrome.

## Dirección aplicada

- Fotografía de producto como protagonista de la portada.
- Mensajes breves con jerarquía tipográfica y espacio entre secciones.
- Alternancia de superficies cálidas y oscuras.
- Bloques editoriales que relacionan cada categoría con sus productos.
- Llamadas a explorar el catálogo y consultar por correo.

La implementación usa los recursos de WM, su logotipo oficial, su paleta y contenido bilingüe.
La referencia sirve para composición y ritmo visual; sus fotografías, textos y marcas no se incorporan al sitio.

## Condiciones conservadas

Sitio estático sin backend. Catálogo completo, búsqueda por modelo/nombre, filtros en URL,
consultas por producto, preparación local de correo, metadatos estáticos, navegación por
teclado, visor y menú accesibles. No se agregan suscripciones, cuentas ni confirmaciones
de envío. Los datos técnicos pendientes siguen identificados en el inventario de contenido.

## Validación

- 18 pruebas automatizadas aprobadas (búsqueda, correo y generación SEO).
- Inicio en ES/EN a 390, 768, 1024 y 1440 px: un h1, sin desbordamiento horizontal ni imágenes rotas.
- Carrusel: pausa y reanudación comprobadas durante intervalos reales superiores a diez segundos. Modo manual visible con movimiento reducido.
- Recorrido catálogo Energía → ficha P3200 → consulta: conserva modelo/contexto y el correo se prepara localmente.
- Sin errores en el registro del navegador durante el recorrido final.
- Se guardaron vistas de escritorio y móvil en esta carpeta.

## Selección editorial

La portada presenta tres productos con fotografías de uso y mantiene controles manuales.
Inicio muestra tres destacados representativos: batidora de inmersión, freidora de vidrio
y estación P3200. Esta selección de presentación no modifica los nueve productos del catálogo
ni sus datos. Los bloques Hogar y Energía llevan directamente a sus filtros correspondientes.

## Evaluación visual final

Aprobada en la primera ronda por un agente independiente, con el proveedor disponible
(no había evaluador de otro proveedor). Se revisaron escritorio y móvil EN, tableta ES,
otra imagen del carrusel y estados de interacción. No se encontraron problemas bloqueantes.
La página móvil mantiene un recorrido extenso, con todas las secciones apiladas.

La implementación conserva las dependencias existentes y las fotografías del catálogo.
Paquete final: CSS 34,86 kB (7,42 kB gzip) y JavaScript 376,93 kB (113,74 kB gzip).
Las medidas de compilación y comprobaciones de navegador son locales.

Vistas finales: [Escritorio](wm-editorial-desktop.png), [Móvil](wm-editorial-mobile.png)
y [Móvil completo](wm-editorial-mobile-full.png).
Compilación completa aprobada: TypeScript, Vite, 15 HTML y sitemap. Lint sin errores; conserva únicamente la advertencia previa de Fast Refresh en LocaleContext.tsx. Cambios disponibles localmente, sin commit ni push en esta iteración.

## Segunda iteración — continuidad visual y movimiento

Solicitud de WM: conservar la dirección editorial y suavizar por completo los cortes entre
negro y blanco, los cambios de fotografía y las interacciones.

Criterios de esta revisión:
- Fondos continuos en marfil y arena, con texto oscuro legible.
- Bordes fotográficos que se integren con el fondo en escritorio y móvil.
- Fundido real entre imágenes: conservar la imagen visible mientras se prepara la siguiente.
- Interacciones de botones y tarjetas graduales, sin inversión brusca de colores.
- Pausa, selección manual y movimiento reducido conservados.
- Sin dependencias nuevas ni cambios en el contacto estático.

Comprobaciones de suavidad:
- Fundido de 1100 ms medido en navegador: dos imágenes con opacidades intermedias
  simultáneas; una sola imagen expuesta a lectores de pantalla.
- Selección rápida entre tres productos: termina en el último solicitado.
- Fotografía siguiente bloqueada mediante interceptación de su URL exacta: permanece
  visible la fotografía anterior y su enlace/nombre siguen correspondiendo.
- Movimiento reducido: cambio inmediato de imagen y sin rotación después de diez segundos.
- Inicio ES/EN a 390, 768, 1024 y 1440 px: sin desbordamiento horizontal ni imágenes rotas
  en carga normal. La prueba de fallo se ejecutó en una sesión separada.

Resultado de revisión independiente: aprobado, sin problemas bloqueantes. El refinamiento
conserva contraste de texto y foco mientras elimina los cortes de fondo.

También se bloqueó la primera imagen: el carrusel mostró otra cargada y no expuso la
imagen rota. La consulta desde la ficha P3200 conserva su URL y contexto de producto.

18 pruebas aprobadas; lint sin errores, con la advertencia preexistente de Fast Refresh.
Capturas de esta iteración: [Escritorio](wm-soft-desktop.png), [Móvil](wm-soft-mobile.png)
y [Móvil completo](wm-soft-mobile-full.png). Los cambios siguen locales.
Compilación final actualizada y aprobada, incluida la protección de primera imagen fallida: TypeScript, Vite y 15 HTML con sitemap. Paquete final JS 376,29 kB (113,83 kB gzip), CSS 35,85 kB (7,72 kB gzip). Se comprobó que el paquete incluye el último ajuste del carrusel.

## Tercera iteración — corrección de la intención visual

WM aclara que desea conservar las franjas negras: la suavidad solicitada corresponde a
sus transiciones hacia blanco, no a sustituirlas por una paleta clara uniforme. Esta
aclaración sustituye la dirección de color de la segunda iteración.

Se recuperan centros oscuros con texto blanco en portada, Energía y Garantía, suavizando
los bordes de transición fuera del área de lectura. Se conserva el fundido de fotografías
y su protección de carga; esta corrección no modifica la lógica del carrusel.

Verificación de la corrección: TypeScript y lint aprobados (solo la advertencia previa de
Fast Refresh), sin desbordamiento ES a 390/768/1440 px ni EN a 390 px. Capturas verificadas:
[Escritorio con franjas negras](wm-black-desktop.png) y [Móvil completo](wm-black-mobile-full.png).
Esta iteración se comprobó en el servidor de desarrollo; no se regeneró dist/ porque el
cambio está limitado a presentación. El paquete de producción debe recompilarse antes de publicar.
Revisión visual independiente: PASS. Franjas negras recuperadas, texto sobre centros sólidos y transiciones fuera del contenido; sin problemas bloqueantes.

## Cuarta iteración — aplicación a todas las páginas y productos

WM solicita extender la dirección aprobada de franjas negras con bordes suaves al resto
del sitio y a cada producto. La verificación cubre las nueve fichas, catálogo, Nosotros,
Garantía, Contacto y página de error, además de conservar Inicio.

Se comprobarán encabezados únicos, contraste, navegación, cambio de idioma, filtros,
galerías y contexto de consulta. Los resultados se registrarán al finalizar esta iteración.

Resultado de la cuarta iteración:
- PageIntro compartido en las 14 rutas interiores; Inicio conserva su portada aprobada.
- 30 comprobaciones de rutas: 15 páginas en móvil ES (390 px) y escritorio EN (1440 px),
  todas con un h1, sin desbordamientos ni imágenes rotas en carga normal. Datos en
  all-pages-visual-results.json.
- Cambio de fotografía comprobado en cada una de las nueve fichas.
- Fundido de galería de 850 ms medido con dos opacidades intermedias; selección rápida
  conserva el último destino y expone una sola imagen a lectores de pantalla.
- Movimiento reducido desactiva el fundido. Zoom, flechas y Escape conservan el foco.
- Fallo simulado de una imagen: se conserva la anterior; retirar el bloqueo y volver a
  seleccionar permite reintentar correctamente. Error explicado en ES/EN.
- Búsqueda por WM-26005 devuelve una ficha; la consulta P3200 conserva el contexto.
- Evaluación visual independiente aprobada: catálogo, páginas institucionales, ventilador
  móvil y lámina impresa P3200 revisados. Fotografías técnicas completas con object-contain.
- Compilación completa aprobada, con 15 HTML y sitemap; 18 pruebas aprobadas; lint solo
  conserva la advertencia previa de Fast Refresh. No se agregaron dependencias ni backend.

Capturas: [Ficha de producto](wm-all-product-desktop.png) y [Contacto móvil](wm-all-contact-mobile.png).
El paquete dist/ queda actualizado con esta iteración; cambios locales sin publicar.

## Quinta iteración — ajuste puntual de Energía en Inicio

La captura de WM identifica el recuadro negro de Energía entre Hogar y Productos destacados.
Se cambia únicamente ese bloque a fondo claro integrado, con texto oscuro y acentos vino.
Las franjas negras aprobadas de portada, garantía y encabezados interiores se conservan.
