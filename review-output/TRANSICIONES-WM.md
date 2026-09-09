# Superficies y transiciones WM

El sistema visual compartido está en `src/styles/surfaces.css`, importado por `src/index.css`.

- `--surface-dark` define el negro cálido de las franjas y del hero.
- `--surface-page` toma el fondo de la paleta WM (`--color-wm-page`).
- `--surface-edge-height` controla a la vez la salida del hero, las cabeceras interiores y ambos extremos de garantía.
- `--surface-edge-overlap` adelanta la transición dentro del espacio vacío del bloque oscuro. Mantenerlo en un máximo de 16 px: es el margen inferior disponible junto a los controles del hero. No debe invadir texto ni botones.
- `--surface-photo-edge-height` controla la unión inferior de la foto del hero con su fondo oscuro.

Las máscaras neutras `public/surface-fade-y.png` y `public/surface-fade-x.png` usan una rampa de pendiente constante en el centro y extremos suavizados (15 % a cada lado), con un tramado de intensidad mínima para reducir bandas. Así el contraste se reparte durante más recorrido, sin concentrarse en una franja gris central. No contienen colores de marca: CSS determina el color de cada unión. Se regeneran con `node scripts/generateSurfaceMasks.mjs`, sin dependencias ni ejecución gráfica en el navegador. Los extremos son totalmente transparentes/opacos para coincidir con las superficies contiguas.

La rampa compartida ocupa 140–240 px según el ancho de pantalla y se solapa 16 px con el espacio vacío de la franja oscura. Aumenta el recorrido del color, manteniendo compacto el contenido de garantía. La fotografía del hero tiene una unión inferior de 120–180 px para empezar a oscurecerse antes de llegar al borde.

Las fotografías editoriales y las fichas técnicas conservan bordes nítidos, sin máscaras que borren productos. Solo el hero usa una unión fotográfica porque debe mantener legible el texto sobre una superficie oscura. Calidad y pie de página comparten el fondo claro, sin degradados decorativos.

Para cambiar la apariencia global, editar estos tokens y reglas compartidas; evitar nuevos degradados o arreglos por página. El comportamiento de animación y movimiento reducido continúa en los componentes y en `src/index.css`.

## Cabeceras de producto

Las nueve fichas usan `.editorial-product-detail` y una única regla centralizada para el fondo de su cabecera. El degradado vertical se pinta sobre la altura completa del encabezado, conserva oscura la zona del título y termina en `#f5f5f2`, el mismo fondo cálido del artículo siguiente. El pseudoelemento `::after` permanece como espaciador transparente, sin máscara ni fondo: mantiene exactamente la altura y las posiciones existentes. No modificar tipografía, márgenes o rellenos para ajustar esta transición; sus colores y paradas están en `src/styles/surfaces.css`.
