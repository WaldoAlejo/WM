# Superficies WM: alternativa sin degradados entre secciones

El sistema compartido vive en `src/styles/surfaces.css`, importado por `src/index.css`.

## Superficies sólidas

- `--surface-dark` conserva el negro cálido del Hero y de la franja de garantía del Home.
- `--surface-page` utiliza el fondo claro cálido de la paleta WM (`--color-wm-page`).
- El Hero termina con un corte limpio después de sus controles. No existe una franja gris ni un espaciador para el degradado.
- La garantía del Home mantiene su fondo oscuro con bordes limpios.
- Las cabeceras interiores usan el mismo fondo claro que el contenido. Esto incluye catálogo, garantía, nosotros, contacto, las nueve fichas de producto y la página 404.
- `PageIntro` establece los colores de título, descripción, categoría y contenido secundario para esa superficie clara. La opción `compact` conserva el padding de 24 px; `descriptionClassName` permite ampliar el texto de Contacto en escritorio.

Se retiraron las rampas de negro a blanco y sus tokens de altura y solapamiento. Para ajustar la separación entre bloques, utilizar el padding de los componentes; no introducir pseudoelementos que añadan altura vacía.

## Fotografía del Hero

La integración de la fotografía dentro del Hero sigue utilizando las máscaras neutras `public/surface-fade-y.png` y `public/surface-fade-x.png`. Su función es mantener la legibilidad sobre la foto y unirla al fondo oscuro del propio Hero; no conectan secciones negras con secciones blancas.

`--surface-photo-edge-height` controla esa integración fotográfica. Las máscaras se regeneran con `node scripts/generateSurfaceMasks.mjs`. Se conservan porque siguen en uso; no cambiar los archivos de producto para ajustar fondos.

## Mantenimiento

Cambiar las superficies en la hoja compartida y la presentación de las cabeceras en `PageIntro`, evitando reglas repetidas por página. Los colores de marca, tamaños tipográficos, textos, imágenes, controles y soporte para movimiento reducido mantienen sus implementaciones existentes.