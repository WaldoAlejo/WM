# Mejoras de WM por fases

Restricción confirmada por el usuario: sitio estático, sin backend ni servicio de recepción de formularios.

## Fase 1 — Contacto por correo

Implementado:
- Reemplazar la simulación de envío por preparación local de un borrador.
- Ofrecer apertura en la aplicación de correo, copia automática y copia manual.
- Aclarar que el cliente debe enviar el mensaje y adjuntar los documentos desde su correo.
- Mantener los campos al preparar el borrador; no almacenar datos personales en localStorage.
- Retirar la aceptación de una política inexistente.
- Mantener el asunto al cambiar idioma y reiniciar el formulario al cambiar entre soporte y ventas.
- Enfocar el primer campo inválido.

Verificación: cinco pruebas automatizadas aprobadas para caracteres especiales, datos no aplicables, conservación de campos, mensajes largos e idioma. `npm run build` terminó correctamente; `npm run lint` terminó sin errores y con la advertencia preexistente de Fast Refresh en `LocaleContext.tsx`. No se enviaron mensajes. La comprobación visual sigue pendiente porque Chrome automatizado no consiguió iniciar (`CDP response channel closed`).

## Fase 2 — Búsqueda y catálogo

Implementado:
- Consulta y categoría se leen de la URL en cada navegación. Escribir actualiza la entrada actual del historial; elegir categoría crea una entrada para poder volver atrás. Las búsquedas enviadas desde el encabezado se reflejan aunque el catálogo ya esté abierto.
- Búsqueda por modelo y nombres ES/EN, tolerando mayúsculas, acentos, espacios repetidos y orden de palabras. Cambiar de idioma mantiene los resultados.
- Botón para limpiar búsqueda/filtros, selección de categoría accesible y anuncio del número de resultados.
- El enlace de una ficha lleva a `/contacto?motivo=sales&producto=<slug>`, abre ventas y preselecciona información de producto.
- El formulario muestra el producto y su modelo confirmado; los incorpora al correo y a la copia. No se inventa el modelo cuando está pendiente.
- El producto se conserva al alternar ventas/soporte y se elimina al elegir otro motivo. Los datos personales siguen fuera de la URL.
- Un slug desconocido no incorpora información de producto al borrador.

Verificación: compilación TypeScript/Vite completada; 12 pruebas aprobadas (7 nuevas y las 5 previas); lint sin errores y con la advertencia previa de Fast Refresh. La revisión en navegador no se completó porque Chrome vuelve a fallar al iniciar, incluso con un perfil temporal separado. La restauración de filtros está comprobada con parámetros serializados; los clics de historial quedan pendientes de comprobación en navegador.

## Fase 3 — Accesibilidad y metadatos

Implementado:
- Menú móvil y visor como diálogos nativos con Escape, bloqueo de fondo, foco inicial, ciclo Tab/Shift+Tab y retorno al disparador. El menú se cierra al cambiar a escritorio.
- Flechas del visor con fondo oscuro para mantener visibilidad sobre fotos claras. Las miniaturas son botones con estado seleccionado; se reinicia la galería al cambiar de producto.
- h1 en el catálogo, destino de salto al contenido enfocable y lista semántica en Inicio.
- Una fuente de metadatos compartida por el navegador y la generación estática. Las fichas incluyen su fotografía en URLs absolutas, también en JSON-LD.
- HTML con metadatos propios para las cinco páginas principales, los nueve productos y el error 404 (15 archivos). El sitemap incluye las 14 rutas públicas y excluye el error 404.
- Configuración estática de Vercel con URLs limpias, sin reescritura universal a Inicio. No hay backend ni despliegue realizado.

Validación: 18 pruebas automatizadas aprobadas, incluidas generación real de archivos temporales, cobertura del catálogo, existencia de fotos, escape del HTML y noindex. Lint conserva solo la advertencia previa de Fast Refresh. En Chrome local se verificaron menú y visor con Tab, Shift+Tab y Escape, regreso del foco, cierre del menú al redimensionar, cambio de foto con flechas y encabezado/metadatos en inglés. No se observaron errores en el registro del navegador durante esos recorridos.

Evidencias: `phase3-mobile-menu.png` y `phase3-lightbox-final.png` en esta carpeta. Se comprobó móvil de 390×844 y el cambio a escritorio de 1440×900; no equivale a una auditoría completa de accesibilidad ni a una prueba del despliegue Vercel. Los metadatos iniciales están en español por compartir URL entre idiomas. El contenido de las páginas sigue siendo renderizado por React.

Compilación TypeScript/Vite y generación SEO completadas. Se verificaron 15 HTML, 14 entradas de sitemap, la imagen social en el HTML inicial y los estilos finales del visor en el paquete compilado. La vista previa local sirvió los metadatos propios de `/productos`, `/contacto`, la ficha P3200 y `/404`; la respuesta de rutas desconocidas de Vercel y las tarjetas reales de redes sociales requieren comprobación tras desplegar.

Durante la edición en caliente aparecieron advertencias de React por el cambio de hooks de `useSeo`; las comprobaciones finales se realizaron tras cargar de nuevo las páginas y no reprodujeron esos errores.

Referencias técnicas consultadas: [diálogos y foco en MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog), [compilación estática de Vite](https://vite.dev/guide/static-deploy.html) y [URLs limpias en Vercel](https://vercel.com/docs/project-configuration/vercel-json).

## Fase 4 — Presentación y contenido

- Revisar móvil, tableta y escritorio en ES/EN.
- Separar destacados y novedades; añadir pausa al carrusel.
- Completar fichas y manuales con información proporcionada por WM.
- Medir carga y optimizar recursos según los resultados.
- Actualizar la documentación general.

El informe del 8 de septiembre registra el diagnóstico previo. Este plan sustituye su propuesta de integrar un receptor: WM permanecerá sin backend. La apertura y entrega del correo dependen de la aplicación elegida por el usuario.

### Avance de la fase 4

Implementado:
- Destacado/Featured y Nuevo/New son atributos distintos. Se conservan los nueve destacados; no se anuncian novedades sin confirmación.
- Carrusel con pausa/reanudación ES/EN, selección manual que detiene la rotación, pausa por foco/puntero/pestaña oculta y modo manual con movimiento reducido.
- Miniaturas debajo de la imagen, sello dentro del ancho y tarjetas con altura uniforme.
- Menú compacto por debajo de 1024 px para evitar colisiones de navegación en tableta.
- Fuentes autoalojadas solo con el subconjunto latino, que incluye acentos, ñ y signos usados en ES/EN. Se retiraron ocho importaciones latin-ext redundantes.
- README actualizado para nueve productos, categorías actuales, contacto sin backend, recursos disponibles y mantenimiento de las etiquetas.
- Inventario por producto en [CONTENIDOS-PENDIENTES-WM.md](CONTENIDOS-PENDIENTES-WM.md).

Contenido pendiente de WM: ocho manuales, nueve fichas técnicas PDF y los valores detallados en el inventario. El único documento disponible es el manual P3200. No se inventaron especificaciones ni se incorporó un backend.

Comprobaciones iniciales: 18 pruebas aprobadas y lint sin errores (permanece la advertencia previa de Fast Refresh). Inicio revisado a 390, 768 y 1440 px en ES/EN, sin desbordamiento horizontal. Capturas: phase4-tablet-es.png, phase4-desktop-es.png y phase4-mobile-en.png.

Validación final:
- Pausa mantiene la selección durante más de diez segundos; reanudar vuelve a cambiarla tras el intervalo.
- Catálogo, ficha P3200, garantía, nosotros y contacto revisados en móvil EN sin desbordamiento horizontal.
- Revisión visual independiente aprobada en móvil 375 px, tableta 768 px, escritorio 1440 px y búsqueda abierta a 1024 px. Se utilizó otro agente con el proveedor disponible; no había evaluador de otro proveedor.
- Inicio compilado solicita seis fuentes en vez de doce: 80.156 bytes frente a 197.156 bytes de cuerpos de recursos medidos con Resource Timing (117.000 bytes menos, aproximadamente 59 %). Esta comparación es de fuentes, no del peso total de página ni de una puntuación Lighthouse.
- CSS final: 33,45 kB (6,87 kB gzip); JavaScript: 373,91 kB (112,84 kB gzip). Se conservaron las fotografías existentes.
- Mediciones en Chrome y servidores locales; los tiempos del entorno Windows no representan el rendimiento de producción. No se realizó despliegue.
- Compilación completa aprobada: TypeScript, Vite y generación de 15 HTML y sitemap. Sin errores en el registro del navegador al finalizar. La parte de contenido queda pendiente únicamente de los datos y documentos de WM enumerados en el inventario.

## Adaptación visual posterior — referencia Nayapot

Por solicitud de WM, se implementó una composición editorial inspirada en la referencia
aportada por el CEO: portada fotográfica, bloques de Hogar/Energía, selección de destacados
y componentes compartidos más ligeros. Se conservan catálogo, contacto sin backend y ES/EN.
Alcance y verificaciones: [ADAPTACION-VISUAL-WM.md](ADAPTACION-VISUAL-WM.md).

La segunda iteración sustituye las bandas oscuras de la primera propuesta por un fondo
continuo marfil/piedra. El movimiento se concentra en fundidos fotográficos de 1,1 segundos
y pequeños desplazamientos de enlaces y tarjetas. Se mantienen contraste de texto y foco.

Aclaración posterior de WM: las franjas negras deben mantenerse. La tercera iteración
recupera el negro y suaviza sus bordes hacia blanco, conservando el fundido entre imágenes.
Esta decisión sustituye la eliminación de bandas descrita en la segunda iteración.

La cuarta iteración extiende el acabado a catálogo, nueve fichas, Nosotros, Garantía,
Contacto y 404 mediante PageIntro compartido. Galerías con fundido seguro de 850 ms.
30 comprobaciones de rutas sin problemas; cambio de foto probado en los nueve productos;
evaluación visual, compilación completa y 18 pruebas aprobadas. Detalle en ADAPTACION-VISUAL-WM.md.

Ajuste puntual posterior: Energía en Inicio usa fondo claro, según la captura indicada por WM.
Esto no modifica las franjas negras de la portada, garantía ni páginas interiores.
