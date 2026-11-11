# Prompts de Buzzy: estaciones de energía WM

Estos prompts sirven para generar las imágenes de ambiente de P800, P1800 y SP5000. Siguen el estilo de las imágenes actuales del P3200 (`public/products/estacion-de-energia-portatil-p3200/P3200_1..5.png`).

## Estilo común (añadir a cada prompt)

> Fotografía fotorrealista de producto en contexto, formato horizontal 5:4 (1402 × 1122 px). Luz cálida y natural (hora dorada o lámparas cálidas), con poca profundidad de campo y el fondo suavemente desenfocado. Ambiente latinoamericano moderno, limpio y acogedor. El producto debe ser idéntico a la imagen de referencia: forma, colores, puertos, pantalla LCD y logo "WM" visible y nítido. Los cables deben salir de los puertos reales del equipo. No inventes texto, marcas ni etiquetas adicionales. Las personas no deben tapar el panel frontal.

Adjunta siempre como referencia el render del producto indicado.

Guarda las imágenes como `<MODELO>_1.png` … `<MODELO>_5.png` en la carpeta del producto. La `_1` será la imagen principal y debe ser una escena "en uso".

---

## P800 (512 Wh / 800 W, compacta con asa fija, sin ruedas)

Referencia: `public/products/estacion-de-energia-portatil-p800/main.jpg`

1. **En uso, en casa durante un apagón:** sala de noche iluminada por la barra LED de la P800 sobre una mesa de centro. Hay una laptop y un router conectados y una familia tranquila.
2. **Camping:** la P800 sobre una mesa plegable junto a una carpa al atardecer. Alimenta una luz de camping y un parlante, con un celular cargando por USB-C.
3. **Home office:** escritorio con la P800 alimentando un monitor y una laptop por USB-C. Junto a la ventana hay una planta.
4. **Portabilidad:** una persona la lleva del asa plateada hacia el maletero de un auto, en exteriores.
5. **Carga solar:** la P800 en un jardín o balcón conectada a un panel solar portátil plegable, con luz de mediodía cálida.

## P1800 (1024 Wh / 1800 W, compacta, tapa superior plateada)

Referencia: `public/products/estacion-de-energia-portatil-p1800/main.jpg`

1. **En uso en la cocina:** la P1800 en la encimera alimenta una licuadora y una cafetera, con un celular cargando.
2. **Respaldo en casa:** sala de noche con TV, router y lámpara conectados durante un corte de luz.
3. **Exteriores:** terraza o patio con la P1800 alimentando una pequeña nevera portátil y luces decorativas.
4. **Taller y herramientas:** garaje ordenado donde la P1800 alimenta un taladro cargando y una lámpara de trabajo.
5. **Carga solar:** la P1800 conectada a dos paneles solares portátiles en un campamento.

## SP5000 (5120 Wh ampliable / 5000 W 120/240 V, torre blanca apilable con ruedas)

Referencias: `public/products/estacion-de-energia-apilable-sp5000/main.jpg` y `gallery-1.jpg`

1. **En uso, respaldo de toda la casa:** sala o comedor amplio de noche. La SP5000 está junto a la pared y la casa sigue iluminada durante un apagón: TV, refrigeradora y lámparas encendidas.
2. **Cuarto de servicio o garaje:** la SP5000 junto a la pared conectada a la red, con un inversor solar y un tablero eléctrico de fondo. Imagen limpia y técnica.
3. **Pequeño negocio:** cafetería o tienda donde la SP5000 alimenta una máquina de café, la caja registradora y la iluminación.
4. **Modularidad:** primer plano de tres cuartos que muestra el inversor arriba y dos baterías apiladas con sus indicadores verdes y los cierres metálicos laterales.
5. **Carga solar:** la SP5000 en interiores (cuarto técnico) con cableado hacia paneles solares visibles por la ventana, en el techo. La estación no debe quedar al sol ni a la lluvia, porque es solo para interiores (IP20).

---

## Al tener las imágenes

En `src/data/products.ts`:

- Cambia `mainImage.src` a la `_1`.
- Agrega de `_2` a `_5` en `gallery` (máximo 5 imágenes por producto).
- Usa textos `alt` en ES y EN. La escena "en uso" debe incluir "en uso" en el `alt` en español para que aparezca en la sección editorial de la ficha.
