import type { Product, ProductImage } from '../types/index.ts';
import { isPending } from '../types/index.ts';

/**
 * The WM products. All have real data (name, model, specs, images) sourced
 * from packaging, product photography or manufacturer copy — remaining
 * `Pending` fields are genuinely unconfirmed, never fabricated. See README
 * "Datos pendientes" for what's still missing per item.
 */
export const products: Product[] = [
  {
    id: 'p01',
    slug: 'batidora-inmersion-5-en-1',
    name: { es: 'Batidora de Inmersión 5 en 1', en: 'Immersion Blender 5-in-1' },
    model: 'WM-26801',
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Batidora de inmersión WM® 5 en 1 con motor de cobre puro de 1000 W y velocidad de hasta 10.000 RPM. Incluye brazo mezclador, recipiente picador, batidor de globo, espumador de leche y vaso de 0,8 litros. Cuenta con modo Turbo y garantía de 3 años.',
      en: 'WM® 5-in-1 immersion blender with a 1000 W pure copper motor and speeds up to 10,000 RPM. Includes a blending arm, chopper bowl, whisk attachment, milk frother and a 0.8-liter cup. Features Turbo mode and a 3-year warranty.',
    },
    seoTitle: {
      es: 'Batidora de inmersión WM® 5 en 1 de 1000 W | WM-26801',
      en: 'WM® 5-in-1 Immersion Blender, 1000 W | WM-26801',
    },
    seoDescription: {
      es: 'Batidora de inmersión WM® 5 en 1 con potencia de 1000 W, hasta 10.000 RPM, función Turbo, picador, batidor, espumador y vaso de 0,8 litros.',
      en: 'WM® 5-in-1 immersion blender with 1000 W power, up to 10,000 RPM, Turbo function, chopper, whisk, frother and 0.8L cup.',
    },
    benefits: [
      {
        icon: 'blend',
        title: { es: 'Licúa y mezcla', en: 'Blends and mixes' },
        description: {
          es: 'El brazo de inmersión con campana metálica prepara batidos, cremas, sopas, purés y salsas directamente en el recipiente, con menos salpicaduras.',
          en: 'The immersion arm with a metal guard prepares smoothies, creams, soups, purées and sauces directly in the container, with less splashing.',
        },
      },
      {
        icon: 'blade',
        title: { es: 'Pica y procesa', en: 'Chops and processes' },
        description: {
          es: 'El recipiente picador procesa pequeñas porciones de vegetales, cebolla, tomate, hierbas y frutas; su tapa se acopla directo a la unidad motriz.',
          en: 'The chopper bowl processes small portions of vegetables, onion, tomato, herbs and fruit; its lid attaches directly to the motor unit.',
        },
      },
      {
        icon: 'whisk',
        title: { es: 'Bate', en: 'Whisks' },
        description: {
          es: 'El batidor de globo facilita huevos, crema, merengues y mezclas ligeras de repostería.',
          en: 'The whisk attachment makes quick work of eggs, cream, meringues and light pastry mixes.',
        },
      },
      {
        icon: 'froth',
        title: { es: 'Espuma', en: 'Froths' },
        description: {
          es: 'El espumador airea leche y otras bebidas para capuchinos, café y chocolate cremosos.',
          en: 'The frother aerates milk and other drinks for creamy cappuccinos, coffee and hot chocolate.',
        },
      },
      {
        icon: 'capacity',
        title: { es: 'Mezcla y sirve', en: 'Mixes and serves' },
        description: {
          es: 'Incluye vaso transparente de 0,8 litros, ideal para batidos, salsas y mezclas en pequeñas porciones.',
          en: 'Includes a clear 0.8-liter cup, ideal for smoothies, sauces and small-batch mixes.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Batidora de inmersión multifunción', en: 'Multifunction immersion blender' } },
      { label: { es: 'Configuración', en: 'Configuration' }, value: { es: '5 en 1', en: '5-in-1' } },
      { label: { es: 'Potencia', en: 'Power' }, value: { es: '1000 W', en: '1000 W' } },
      { label: { es: 'Velocidad máxima', en: 'Maximum speed' }, value: { es: '10.000 RPM', en: '10,000 RPM' } },
      { label: { es: 'Motor', en: 'Motor' }, value: { es: '100 % cobre puro', en: '100% pure copper' } },
      { label: { es: 'Control de velocidad', en: 'Speed control' }, value: { es: 'Ajuste de múltiples velocidades', en: 'Multi-speed adjustment' } },
      { label: { es: 'Modos de funcionamiento', en: 'Operating modes' }, value: { es: 'Regular y Turbo', en: 'Regular and Turbo' } },
      { label: { es: 'Capacidad del vaso', en: 'Cup capacity' }, value: { es: '0,8 litros', en: '0.8 liters' } },
      { label: { es: 'Accesorios incluidos', en: 'Included accessories' }, value: { es: 'Brazo mezclador, picador, batidor de globo, espumador de leche y vaso de 0,8 L', en: 'Blending arm, chopper, whisk, milk frother and 0.8L beaker' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Negro con detalles plateados', en: 'Black with silver details' } },
      { label: { es: 'Brazo mezclador', en: 'Blending arm' }, value: { es: 'Metálico y desmontable', en: 'Metal, detachable' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { es: '110-120V, 60Hz', en: '110-120V, 60Hz' } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { pending: true } },
      { label: { es: 'Peso', en: 'Weight' }, value: { pending: true } },
    ],
    safetyAndQuality: [
      {
        es: 'Equipada con motor de bobinado 100 % de cobre, seleccionado para ofrecer un desempeño estable y mayor durabilidad.',
        en: 'Equipped with a 100% copper-wound motor, selected to deliver stable performance and greater durability.',
      },
      {
        es: 'Sus componentes y accesorios están diseñados para un ensamblaje firme y un uso práctico.',
        en: 'Its components and accessories are designed for a firm assembly and practical use.',
      },
      {
        es: 'Para una utilización segura, desconecte el equipo antes de colocar, retirar o limpiar los accesorios; evite el contacto directo con las cuchillas y no sumerja la unidad del motor en agua.',
        en: "For safe use, unplug the unit before attaching, removing or cleaning accessories; avoid direct contact with the blades and never submerge the motor unit in water.",
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/batidora-inmersion-5-en-1/batidor5en1_1.png',
      alt: {
        es: 'Batidora de inmersión WM en uso preparando una sopa',
        en: 'WM immersion blender in use preparing a soup',
      },
    },
    gallery: [
      {
        src: '/products/batidora-inmersion-5-en-1/batidor5en1_0.png',
        alt: {
          es: 'Batidora de inmersión WM 5 en 1 con picadora, batidor, espumador y vaso',
          en: 'WM 5-in-1 immersion blender with chopper, whisk, frother and beaker',
        },
      },
      {
        src: '/products/batidora-inmersion-5-en-1/batidor5en1_2.png',
        alt: {
          es: 'Batidora WM con accesorio batidor preparando una mezcla en el vaso',
          en: 'WM blender with whisk attachment preparing a mixture in the beaker',
        },
      },
      {
        src: '/products/batidora-inmersion-5-en-1/batidor5en1_3.png',
        alt: {
          es: 'Accesorio picador de la batidora WM procesando cebolla',
          en: 'WM blender chopper attachment processing onion',
        },
      },
      {
        src: '/products/batidora-inmersion-5-en-1/batidor5en1_4.png',
        alt: {
          es: 'Batidora de inmersión WM preparando un batido de frutas',
          en: 'WM immersion blender preparing a fruit smoothie',
        },
      },
      {
        src: '/products/batidora-inmersion-5-en-1/batidor5en1_5.png',
        alt: {
          es: 'Limpieza del extremo del brazo mezclador de la batidora WM sobre el fregadero',
          en: 'Cleaning the end of the WM blender blending arm over the sink',
        },
      },
    ],
    manualUrl: { pending: true, note: 'Manual del producto pendiente de proporcionar.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p02',
    slug: 'licuadora-profesional',
    name: { es: 'Licuadora Profesional', en: 'Professional Blender' },
    model: 'WM-26001',
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Licuadora profesional WM® modelo WM-26001 con motor de 1500 W, jarra graduada de 2 litros, cabina transparente reductora de ruido y panel de control táctil digital. Incluye un conjunto adicional de cuchillas y cuenta con 3 años de garantía.',
      en: "WM® professional blender model WM-26001 with a 1500 W motor, 2-liter graduated jar, noise-reducing transparent shield and digital touch control panel. Includes an extra blade set and a 3-year warranty.",
    },
    seoTitle: {
      es: 'Licuadora Profesional WM® 1500 W con Cabina Reductora de Ruido y Jarra de 2 L',
      en: 'WM® Professional Blender 1500 W with Noise-Reducing Shield and 2 L Jar',
    },
    seoDescription: {
      es: 'Licuadora profesional WM® de 1500 W con jarra de 2 litros, motor con bobinado de cobre puro, control táctil digital, cabina reductora de ruido y cuchilla adicional.',
      en: 'WM® professional blender at 1500 W with a 2-liter jar, pure copper wound motor, digital touch control, noise-reducing shield and an extra blade.',
    },
    benefits: [
      {
        icon: 'capacity',
        title: { es: 'Mayor capacidad', en: 'Greater capacity' },
        description: {
          es: 'La jarra de 2 litros permite preparar varias porciones de bebidas, mezclas o alimentos en un solo ciclo.',
          en: 'The 2-liter jar lets you prepare multiple servings of drinks, mixes or food in a single cycle.',
        },
      },
      {
        icon: 'quiet',
        title: { es: 'Menor percepción de ruido', en: 'Lower perceived noise' },
        description: {
          es: 'La cabina transparente ayuda a reducir el ruido que se proyecta hacia el exterior durante el funcionamiento.',
          en: 'The transparent shield helps reduce the noise projected outward during operation.',
        },
      },
      {
        icon: 'controls',
        title: { es: 'Control práctico', en: 'Convenient control' },
        description: {
          es: 'El panel táctil permite manejar las funciones desde una superficie digital limpia y de fácil acceso.',
          en: "The touch panel lets you manage functions from a clean, easy-to-reach digital surface.",
        },
      },
      {
        icon: 'visibility',
        title: { es: 'Visualización permanente', en: 'Constant visibility' },
        description: {
          es: 'La jarra y la cabina transparentes permiten controlar visualmente la consistencia de la preparación.',
          en: 'The transparent jar and shield let you visually check the consistency of the preparation.',
        },
      },
      {
        icon: 'removable',
        title: { es: 'Repuesto incluido', en: 'Spare part included' },
        description: {
          es: 'El conjunto adicional de cuchillas brinda una solución de respaldo para extender la vida útil del producto.',
          en: "The extra blade set provides a backup solution to extend the product's useful life.",
        },
      },
      {
        icon: 'shield',
        title: { es: 'Diseño estable', en: 'Stable design' },
        description: {
          es: 'La base ancha y sus soportes inferiores ayudan a mantener el equipo estable sobre la superficie de trabajo.',
          en: 'The wide base and its feet help keep the unit stable on the work surface.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Licuadora profesional', en: 'Professional blender' } },
      { label: { es: 'Potencia', en: 'Power' }, value: { es: '1500 W', en: '1500 W' } },
      { label: { es: 'Capacidad', en: 'Capacity' }, value: { es: '2 litros', en: '2 liters' } },
      { label: { es: 'Motor', en: 'Motor' }, value: { es: 'Bobinado de cobre puro', en: 'Pure copper winding' } },
      { label: { es: 'Control', en: 'Control' }, value: { es: 'Panel táctil digital, pantalla de 4 dígitos, 6 controles', en: 'Digital touch panel, 4-digit display, 6 controls' } },
      { label: { es: 'Jarra', en: 'Jar' }, value: { es: 'Transparente, libre de BPA y graduada, escala visible de 200 a 2.000 ml', en: 'Clear, BPA-free and graduated, visible scale from 200 to 2,000 ml' } },
      { label: { es: 'Cuchillas', en: 'Blades' }, value: { es: 'Acero inoxidable, 6 hojas multiángulo', en: 'Stainless steel, 6-leaf multi-angle' } },
      { label: { es: 'Reducción de ruido', en: 'Noise reduction' }, value: { es: 'Cabina transparente exterior', en: 'Outer transparent shield' } },
      { label: { es: 'Accesorios', en: 'Accessories' }, value: { es: 'Conjunto de cuchillas adicional de acero inoxidable incluido', en: 'Extra stainless-steel blade set included' } },
      { label: { es: 'Colores', en: 'Colors' }, value: { es: 'Negro, plateado y transparente', en: 'Black, silver and clear' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { es: '110-120V, 60Hz', en: '110-120V, 60Hz' } },
      { label: { es: 'Material', en: 'Material' }, value: { es: 'Base de acero inoxidable; jarra libre de BPA', en: 'Stainless-steel base; BPA-free jar' } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { pending: true } },
      { label: { es: 'Peso', en: 'Weight' }, value: { pending: true } },
    ],
    safetyAndQuality: [
      {
        es: 'Incorpora un motor de 1500 W con bobinado de cobre puro, cabina transparente reductora de ruido y un sistema de control táctil diseñado para brindar un funcionamiento preciso.',
        en: 'Features a 1500 W motor with pure copper winding, a noise-reducing transparent shield and a touch control system designed for precise operation.',
      },
      {
        es: 'Su estructura ha sido seleccionada considerando estabilidad, resistencia y calidad de ensamblaje.',
        en: 'Its structure was selected with stability, strength and assembly quality in mind.',
      },
      {
        es: 'Utilice siempre la licuadora con la tapa correctamente colocada, no introduzca las manos ni utensilios mientras esté conectada y desconéctela antes de retirar o manipular las cuchillas.',
        en: "Always use the blender with the lid properly in place, never insert hands or utensils while it's plugged in, and unplug it before removing or handling the blades.",
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/licuadora-profesional/licuadorprof_1.png',
      alt: {
        es: 'Licuadora profesional WM en uso junto a una familia con batidos de frutas',
        en: 'WM professional blender in use beside a family with fruit smoothies',
      },
    },
    gallery: [
      {
        src: '/products/licuadora-profesional/licuadorprof_2.png',
        alt: {
          es: 'Licuadora profesional WM con frutas y hielo en la jarra, junto a un batido de frutos rojos',
          en: 'WM professional blender with fruit and ice in the jug, beside a berry smoothie',
        },
      },
      {
        src: '/products/licuadora-profesional/licuadorprof_3.png',
        alt: {
          es: 'Licuadora profesional WM con verduras en la jarra, junto a un batido verde',
          en: 'WM professional blender with vegetables in the jug, beside a green smoothie',
        },
      },
      {
        src: '/products/licuadora-profesional/licuadorprof_4.png',
        alt: {
          es: 'Licuadora profesional WM con frutas y hielo, vista de tres cuartos sobre una encimera',
          en: 'WM professional blender with fruit and ice, three-quarter view on a kitchen counter',
        },
      },
      {
        src: '/products/licuadora-profesional/licuadorprof_5.png',
        alt: {
          es: 'Licuadora profesional WM con la jarra en proceso de limpieza en el fregadero',
          en: 'WM professional blender with the jug being cleaned in a sink',
        },
      },
      {
        src: '/products/licuadora-profesional/gallery-2.jpg',
        alt: {
          es: 'Licuadora profesional WM en uso preparando un batido de frutos rojos',
          en: 'WM professional blender in use preparing a berry smoothie',
        },
      },

      {
        src: '/products/licuadora-profesional/main.jpg',
        alt: {
          es: 'Licuadora profesional WM con cabina reductora de ruido, empaque y cuchilla adicional',
          en: 'WM professional blender with noise-reducing shield, packaging and extra blade',
        },
      },
      {
        src: '/products/licuadora-profesional/gallery-1.jpg',
        alt: {
          es: 'Panel de control táctil digital de la licuadora profesional WM y detalle del conjunto de cuchillas',
          en: 'Digital touch control panel of the WM professional blender and detail of the blade set',
        },
      },
      {
        src: '/products/licuadora-profesional/gallery-3.jpg',
        alt: {
          es: 'Licuadora profesional WM con cabina reductora de ruido y cuchilla adicional, vista de tres cuartos',
          en: 'WM professional blender with noise-reducing shield and extra blade, three-quarter view',
        },
      },
    ],
    manualUrl: { pending: true, note: 'Manual del producto pendiente de proporcionar.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p03',
    slug: 'olla-presion-multifuncion-6l',
    name: { es: 'Olla de Presión Multifunción', en: 'Multifunction Pressure Cooker' },
    model: 'WM-26007',
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Olla eléctrica a presión multifunción WM® modelo WM-26007, con capacidad de 6 litros, cuerpo de acero inoxidable, recipiente interior antiadherente, pantalla digital y 15 menús ilustrados de cocción. Incorpora ajuste de tiempo, programas preestablecidos, función para mantener caliente y garantía de 3 años.',
      en: 'WM® multifunction electric pressure cooker model WM-26007, with 6-liter capacity, a stainless-steel body, non-stick inner pot, digital display and 15 illustrated cooking menus. Features a time setting, preset programs, keep-warm function and a 3-year warranty.',
    },
    seoTitle: {
      es: 'Olla eléctrica a presión WM® de 6 litros | Modelo WM-26007',
      en: 'WM® Electric Pressure Cooker, 6 Liters | Model WM-26007',
    },
    seoDescription: {
      es: 'Olla eléctrica a presión multifunción WM® de 6 litros con cuerpo de acero inoxidable, recipiente antiadherente, pantalla digital, 15 menús de cocción y función para mantener caliente.',
      en: 'WM® multifunction electric pressure cooker, 6 liters, with a stainless-steel body, non-stick pot, digital display, 15 cooking menus and keep-warm function.',
    },
    benefits: [
      {
        icon: 'capacity',
        title: { es: 'Una olla para diferentes recetas', en: 'One pot for many recipes' },
        description: {
          es: 'Sus programas permiten preparar arroz, sopas, carnes, vegetales, granos y otras comidas sin utilizar diferentes electrodomésticos.',
          en: 'Its programs let you prepare rice, soups, meats, vegetables, grains and other dishes without using different appliances.',
        },
      },
      {
        icon: 'shield',
        title: { es: 'Cuerpo de acero inoxidable', en: 'Stainless-steel body' },
        description: {
          es: 'Resistente y fácil de limpiar, para un uso confiable día a día.',
          en: 'Durable and easy to clean, for reliable everyday use.',
        },
      },
      {
        icon: 'capacity',
        title: { es: 'Capacidad familiar', en: 'Family-size capacity' },
        description: {
          es: 'El recipiente de 6 litros ofrece espacio para cocinar varias porciones en una sola preparación.',
          en: 'The 6-liter pot offers room to cook several servings in a single preparation.',
        },
      },
      {
        icon: 'controls',
        title: { es: 'Control sencillo', en: 'Simple control' },
        description: {
          es: 'El panel digital reúne las principales funciones en botones claramente identificados y menús ilustrados.',
          en: 'The digital panel brings together the main functions in clearly labeled buttons and illustrated menus.',
        },
      },
      {
        icon: 'heat',
        title: { es: 'Mantiene la comida caliente', en: 'Keeps food warm' },
        description: {
          es: 'La función Warm permite conservar la temperatura de los alimentos después de la preparación.',
          en: 'The Warm function keeps food at temperature after cooking.',
        },
      },
      {
        icon: 'removable',
        title: { es: 'Recipiente fácil de retirar', en: 'Easy-to-remove pot' },
        description: {
          es: 'La olla interior se puede extraer para servir los alimentos y facilitar la limpieza.',
          en: 'The inner pot can be lifted out to serve food and make cleaning easier.',
        },
      },
      {
        icon: 'nonstick',
        title: { es: 'Superficie antiadherente', en: 'Non-stick surface' },
        description: {
          es: 'El revestimiento interior ayuda a reducir la adherencia de los alimentos durante la cocción.',
          en: 'The inner coating helps reduce food sticking during cooking.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Olla eléctrica a presión multifunción', en: 'Multifunction electric pressure cooker' } },
      { label: { es: 'Capacidad', en: 'Capacity' }, value: { es: '6 litros', en: '6 liters' } },
      { label: { es: 'Tipo de cocción', en: 'Cooking type' }, value: { es: 'Multifunción y a presión', en: 'Multifunction and pressure cooking' } },
      {
        label: { es: 'Menús de cocción (15)', en: 'Cooking menus (15)' },
        value: {
          es: 'Carne de res, aves, pescado, vegetales, vegetariano, papilla/porridge, frijoles/chili, sopa, guiso, vapor, yogur, cocción lenta, arroz/granos, saltear y postre',
          en: 'Beef, poultry, fish, vegetables, vegetarian, porridge, beans/chili, soup, stew, steam, yogurt, slow cook, rice/grains, sauté and dessert',
        },
      },
      { label: { es: 'Pantalla', en: 'Display' }, value: { es: 'Digital de cuatro dígitos', en: '4-digit digital' } },
      { label: { es: 'Controles principales', en: 'Main controls' }, value: { es: 'Warm, Time, Start y Preset', en: 'Warm, Time, Start and Preset' } },
      { label: { es: 'Recipiente interior', en: 'Inner pot' }, value: { es: 'Removible y antiadherente', en: 'Removable and non-stick' } },
      { label: { es: 'Tapa', en: 'Lid' }, value: { es: 'Integrada y abatible', en: 'Integrated, hinged' } },
      { label: { es: 'Control de presión/vapor', en: 'Pressure/steam control' }, value: { es: 'Visible en la tapa', en: 'Visible on the lid' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Plateado y negro', en: 'Silver and black' } },
      { label: { es: 'Detalle del panel', en: 'Panel detail' }, value: { es: 'Borde con acabado dorado', en: 'Gold-finish trim' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { es: '110V, 60Hz', en: '110V, 60Hz' } },
      { label: { es: 'Potencia', en: 'Power' }, value: { pending: true } },
      { label: { es: 'Material (cuerpo exterior)', en: 'Material (exterior body)' }, value: { es: 'Acero inoxidable', en: 'Stainless steel' } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { pending: true } },
      { label: { es: 'Peso', en: 'Weight' }, value: { pending: true } },
    ],
    safetyAndQuality: [
      {
        es: 'Cuerpo exterior de acero inoxidable con recipiente interior antiadherente y removible, tapa integrada y controles digitales que permiten un manejo claro y preciso.',
        en: 'Stainless-steel exterior body with a removable non-stick inner pot, integrated lid and digital controls for clear, precise handling.',
      },
      {
        es: 'Su construcción está orientada a ofrecer estabilidad, facilidad de limpieza y un funcionamiento confiable.',
        en: 'Its construction is built to offer stability, easy cleaning and reliable operation.',
      },
      {
        es: 'Para un uso seguro, verifique que la tapa esté correctamente cerrada, mantenga libre la salida de vapor, respete el nivel máximo de llenado y nunca intente abrir el equipo mientras exista presión en su interior.',
        en: 'For safe use, make sure the lid is properly closed, keep the steam outlet clear, respect the maximum fill line, and never try to open the unit while it is pressurized.',
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/olla-presion-multifuncion-6l/main.jpg',
      alt: {
        es: 'Olla de presión multifunción WM en uso, sobre una encimera de cocina',
        en: 'WM multifunction pressure cooker in use, on a kitchen countertop',
      },
    },
    gallery: [
      {
        src: '/products/olla-presion-multifuncion-6l/gallery-1.jpg',
        alt: {
          es: 'Olla de presión multifunción WM, modelo WM-26007, con capacidad de 6L y panel de control digital',
          en: 'WM multifunction pressure cooker, model WM-26007, with 6L capacity and digital control panel',
        },
      },
      {
        src: '/products/olla-presion-multifuncion-6l/gallery-2.jpg',
        alt: {
          es: 'Detalle del panel de control digital, la olla interior antiadherente y el cuerpo de acero inoxidable',
          en: 'Detail of the digital control panel, the non-stick inner pot and the stainless-steel body',
        },
      },
      {
        src: '/products/olla-presion-multifuncion-6l/gallery-3.jpg',
        alt: {
          es: 'Olla de presión multifunción WM con platos de arroz, sopa y carne preparados',
          en: 'WM multifunction pressure cooker with prepared rice, soup and meat dishes',
        },
      },
      {
        src: '/products/olla-presion-multifuncion-6l/gallery-4.jpg',
        alt: {
          es: 'Olla de presión multifunción WM en uso, en una cocina con platos de arroz, sopa y carne',
          en: 'WM multifunction pressure cooker in use, in a kitchen with rice, soup and meat dishes',
        },
      },
    ],
    manualUrl: { pending: true, note: 'Manual del producto pendiente de proporcionar.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p04',
    slug: 'freidora-de-aire-multifuncion-10l',
    name: { es: 'Freidora de Aire Multifunción 10L', en: '10L Multifunction Air Fryer' },
    model: 'WM-260050',
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Freidora de aire multifunción WM® de 10 litros, modelo WM-260050, con amplio visor de vidrio templado, pantalla digital con seis menús preestablecidos y sistema de calentamiento envolvente de 360° con tecnología de infrarrojo lejano. Su resistencia interna es de cobre puro, para un desempeño confiable y duradero. Acabado en negro con detalles en tono metálico.',
      en: 'WM® 10L multifunction air fryer, model WM-260050, with a large tempered-glass viewing window, a digital display with six preset menus, and a 360° surround far-infrared heating system. Its internal heating element is pure copper, for dependable, long-lasting performance. Finished in black with stainless-toned accents.',
    },
    seoTitle: {
      es: 'Freidora de Aire Multifunción WM® de 10L | WM-260050',
      en: 'WM® 10L Multifunction Air Fryer | WM-260050',
    },
    seoDescription: {
      es: 'La freidora de aire multifunción WM-260050 de 10L ofrece un amplio visor, seis programas digitales, calentamiento envolvente, tecnología infrarrojo lejano y una generosa capacidad familiar.',
      en: 'The WM-260050 10L multifunction air fryer offers a large viewing window, six digital presets, surround heating, far-infrared technology and generous family capacity.',
    },
    benefits: [
      {
        icon: 'capacity',
        title: { es: 'Capacidad de 10L', en: 'Generous 10L capacity' },
        description: {
          es: 'Capacidad amplia de 10 litros, pensada para porciones a escala familiar.',
          en: 'Generous 10-liter capacity for family-scale portions.',
        },
      },
      {
        icon: 'visibility',
        title: { es: 'Amplio visor de vidrio templado', en: 'Large tempered-glass viewing window' },
        description: {
          es: 'Permite observar con claridad el proceso de cocción.',
          en: 'Offers clear visibility of the cooking process.',
        },
      },
      {
        icon: 'display',
        title: { es: 'Pantalla digital inteligente', en: 'Intelligent digital display' },
        description: {
          es: 'Con seis menús preestablecidos, para seleccionar y monitorear recetas favoritas con facilidad.',
          en: 'With six convenient preset menus, making favorite recipes easier to select and monitor.',
        },
      },
      {
        icon: 'heat',
        title: { es: 'Calentamiento envolvente 360° e infrarrojo lejano', en: '360° surround and far-infrared heating' },
        description: {
          es: 'Diseñado para distribuir el calor de manera uniforme en toda la cámara de cocción.',
          en: 'Designed to circulate heat evenly throughout the cooking chamber.',
        },
      },
      {
        icon: 'heat',
        title: { es: 'Resistencia interna de cobre puro', en: 'Pure-copper internal heating wire' },
        description: {
          es: 'Favorece un desempeño confiable y duradero.',
          en: 'Supports dependable, long-lasting performance.',
        },
      },
      {
        icon: 'finish',
        title: { es: 'Acabado sofisticado en negro', en: 'Sophisticated black exterior' },
        description: {
          es: 'Con detalles metálicos en tono acero enmarcando el visor.',
          en: 'With stainless-toned metallic accents framing the viewing window.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Freidora de aire multifunción', en: 'Multifunction air fryer' } },
      { label: { es: 'Capacidad', en: 'Capacity' }, value: { es: '10 litros', en: '10 liters' } },
      { label: { es: 'Panel de control', en: 'Control panel' }, value: { es: 'Pantalla digital inteligente, seis menús preestablecidos', en: 'Intelligent digital display, six preset menus' } },
      { label: { es: 'Visor', en: 'Viewing window' }, value: { es: 'Vidrio templado resistente a explosiones', en: 'Explosion-resistant tempered glass' } },
      { label: { es: 'Sistema de calentamiento', en: 'Heating system' }, value: { es: 'Envolvente 360° con infrarrojo lejano', en: '360° surround with far-infrared technology' } },
      { label: { es: 'Resistencia', en: 'Heating element' }, value: { es: 'Cobre puro', en: 'Pure copper' } },
      { label: { es: 'Cesta', en: 'Basket' }, value: { es: 'Extraíble, tipo cajón', en: 'Removable, drawer-style' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Negro con detalles en tono metálico', en: 'Black with stainless-toned accents' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { es: '110V, 60Hz', en: '110V, 60Hz' } },
      { label: { es: 'Potencia', en: 'Power' }, value: { pending: true } },
      { label: { es: 'Material', en: 'Material' }, value: { pending: true } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { pending: true } },
      { label: { es: 'Peso', en: 'Weight' }, value: { pending: true } },
    ],
    safetyAndQuality: [
      {
        es: 'Cuenta con vidrio templado resistente a explosiones en el visor.',
        en: 'Features explosion-resistant tempered glass in the viewing window.',
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/freidora-de-aire-multifuncion-10l/airfrayer10L_1.png',
      alt: {
        es: 'Freidora de aire multifunción WM de 10 L junto a una mujer preparando patatas en la cocina',
        en: 'WM 10L multifunction air fryer beside a woman preparing potatoes in a kitchen',
      },
    },
    gallery: [
      {
        src: '/products/freidora-de-aire-multifuncion-10l/airfrayer10L_2.png',
        alt: {
          es: 'Freidora de aire multifunción WM de 10 L con la cesta abierta y alimentos junto a verduras frescas',
          en: 'WM 10L multifunction air fryer with an open basket of food beside fresh vegetables',
        },
      },
      {
        src: '/products/freidora-de-aire-multifuncion-10l/airfrayer10L_3.png',
        alt: {
          es: 'Freidora de aire multifunción WM de 10 L con una mujer retirando la cesta con pollo y patatas',
          en: 'WM 10L multifunction air fryer with a woman removing the basket with chicken and potatoes',
        },
      },
      {
        src: '/products/freidora-de-aire-multifuncion-10l/airfrayer10L_4.png',
        alt: {
          es: 'Freidora de aire multifunción WM de 10 L junto a una mujer limpiando la cesta en el fregadero',
          en: 'WM 10L multifunction air fryer beside a woman cleaning the basket in a sink',
        },
      },
      {
        src: '/products/freidora-de-aire-multifuncion-10l/airfrayer10L_5.png',
        alt: {
          es: 'Freidora de aire multifunción WM de 10 L sobre una mesa con una familia compartiendo una comida',
          en: 'WM 10L multifunction air fryer on a table with a family sharing a meal',
        },
      },
    ],
    manualUrl: { pending: true, note: 'Manual del producto pendiente de proporcionar.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p05',
    slug: 'freidora-de-aire-multifuncion-12l',
    name: { es: 'Freidora de Aire Multifunción 12L - Blanca', en: '12L Multifunction Air Fryer - White' },
    model: 'WM-26004',
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Freidora de aire multifunción WM® de 12 litros en blanco, modelo WM-26004, con unidad superior de control y calentamiento en negro brillante y detalles cobre-naranja. Su interfaz táctil inteligente ofrece programas para freír, hornear, asar, grillar y recalentar, con calentamiento envolvente 3D para una circulación uniforme.',
      en: 'WM® 12L multifunction air fryer in white, model WM-26004, with a glossy-black top control and heating unit and copper-orange accent trim. Its smart-touch interface offers programs for frying, baking, roasting, grilling and reheating, with 3D surround heating for even circulation.',
    },
    seoTitle: {
      es: 'Freidora de Aire Multifunción WM® de 12L Blanca | WM-26004',
      en: 'WM® 12L Multifunction Air Fryer White | WM-26004',
    },
    seoDescription: {
      es: 'Freidora de aire multifunción WM-26004 de 12L en blanco, con controles táctiles inteligentes, detalles cobre-naranja, calentamiento envolvente 3D y una generosa capacidad familiar.',
      en: 'Shop the white WM-26004 12L multifunction air fryer with smart-touch controls, copper-orange accents, 3D surround heating and generous family-size capacity.',
    },
    benefits: [
      {
        icon: 'capacity',
        title: { es: 'Capacidad de 12L en blanco', en: 'Expansive 12L capacity in white' },
        description: {
          es: 'Capacidad amplia en un acabado blanco elegante.',
          en: 'Generous capacity in an elegant white finish.',
        },
      },
      {
        icon: 'display',
        title: { es: 'Unidad superior negra de control inteligente', en: 'Top-mounted black smart-touch control' },
        description: {
          es: 'Unidad de control y calentamiento distintiva, montada en la parte superior.',
          en: 'A distinctive control and heating unit mounted on top.',
        },
      },
      {
        icon: 'finish',
        title: { es: 'Detalles cobre-naranja', en: 'Copper-orange accent trim' },
        description: {
          es: 'Acabado refinado que aporta un sello visual premium.',
          en: 'A refined finish for a premium visual signature.',
        },
      },
      {
        icon: 'programs',
        title: { es: 'Programas multifunción', en: 'Multi-function programs' },
        description: {
          es: 'Freír, hornear, asar, grillar y recalentar.',
          en: 'Frying, baking, roasting, grilling and reheating.',
        },
      },
      {
        icon: 'heat',
        title: { es: 'Calentamiento envolvente 3D', en: '3D surround heating' },
        description: {
          es: 'Circulación equilibrada para un dorado uniforme y atractivo.',
          en: 'Balanced circulation for even, appealing browning.',
        },
      },
      {
        icon: 'visibility',
        title: { es: 'Área de cocción muy visible', en: 'Highly visible cooking area' },
        description: {
          es: 'Para preparaciones generosas y bien presentadas.',
          en: 'For generous, beautifully presented meals.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Freidora de aire multifunción', en: 'Multifunction air fryer' } },
      { label: { es: 'Capacidad', en: 'Capacity' }, value: { es: '12 litros', en: '12 liters' } },
      { label: { es: 'Panel de control', en: 'Control panel' }, value: { es: 'Táctil inteligente, unidad superior negra brillante', en: 'Smart-touch, glossy-black top-mounted unit' } },
      { label: { es: 'Programas', en: 'Programs' }, value: { es: 'Freír, hornear, asar, grillar, recalentar', en: 'Frying, baking, roasting, grilling, reheating' } },
      { label: { es: 'Sistema de calentamiento', en: 'Heating system' }, value: { es: 'Envolvente 3D', en: '3D surround' } },
      { label: { es: 'Visor', en: 'Viewing window' }, value: { es: 'Vidrio templado resistente a explosiones', en: 'Explosion-resistant tempered glass' } },
      { label: { es: 'Interior', en: 'Interior' }, value: { es: 'Acabado cobre facetado', en: 'Faceted copper-toned finish' } },
      { label: { es: 'Recubrimiento interior', en: 'Inner lining' }, value: { es: 'Grado alimenticio, acabado horneado', en: 'Food-grade, baking finish' } },
      { label: { es: 'Cesta', en: 'Basket' }, value: { es: 'Perforada, extraíble', en: 'Perforated, removable' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Blanco con unidad superior negra y detalles cobre-naranja (también disponible en negro y gris, bajo pedido)', en: 'White with black top unit and copper-orange accents (also available in black and gray, on request)' } },
      { label: { es: 'Modelos por color', en: 'Models by color' }, value: { es: 'Negro WM-26002, blanco WM-26004, gris WM-26006', en: 'Black WM-26002, white WM-26004, gray WM-26006' } },
      { label: { es: 'Material', en: 'Material' }, value: { es: 'Polipropileno (PP)', en: 'Polypropylene (PP)' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { es: '110V, 60Hz', en: '110V, 60Hz' } },
      { label: { es: 'Potencia', en: 'Power' }, value: { pending: true } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { pending: true } },
      { label: { es: 'Peso', en: 'Weight' }, value: { pending: true } },
    ],
    safetyAndQuality: [
      {
        es: 'Cuenta con vidrio templado resistente a explosiones en el visor.',
        en: 'Features explosion-resistant tempered glass in the viewing window.',
      },
      {
        es: 'Recubrimiento interior de grado alimenticio con acabado horneado.',
        en: 'Food-grade inner lining with a baking finish.',
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/freidora-de-aire-multifuncion-12l/AirFrayer12L_1.png',
      alt: {
        es: 'Freidora de aire multifunción WM blanca de 12 L en uso preparando pescado y verduras en una cocina',
        en: 'WM white 12L multifunction air fryer in use preparing fish and vegetables in a kitchen',
      },
    },
    gallery: [
      {
        src: '/products/freidora-de-aire-multifuncion-12l/AirFrayer12L_2.png',
        alt: {
          es: 'Freidora de aire multifunción WM blanca de 12 L con una mujer sirviendo pollo y verduras',
          en: 'WM white 12L multifunction air fryer with a woman serving chicken and vegetables',
        },
      },
      {
        src: '/products/freidora-de-aire-multifuncion-12l/AirFrayer12L_3.png',
        alt: {
          es: 'Freidora de aire multifunción WM blanca de 12 L con una familia compartiendo una comida en la cocina',
          en: 'WM white 12L multifunction air fryer with a family sharing a meal in a kitchen',
        },
      },
      {
        src: '/products/freidora-de-aire-multifuncion-12l/AirFrayer12L_4.png',
        alt: {
          es: 'Freidora de aire multifunción WM blanca de 12 L con una mujer retirando la cesta con alimentos',
          en: 'WM white 12L multifunction air fryer with a woman removing the basket of food',
        },
      },
      {
        src: '/products/freidora-de-aire-multifuncion-12l/AirFrayer12L_5.png',
        alt: {
          es: 'Freidora de aire multifunción WM blanca de 12 L junto a una mujer limpiando la rejilla en el fregadero',
          en: 'WM white 12L multifunction air fryer beside a woman cleaning the rack in a sink',
        },
      },
      {
        src: '/products/freidora-de-aire-multifuncion-12l/gallery-3.jpg',
        alt: {
          es: 'Detalle del panel de control, el interior cobre facetado y la cesta extraíble de la freidora de aire WM',
          en: 'Detail of the control panel, faceted copper interior and removable basket of the WM air fryer',
        },
      },
    ],
    manualUrl: { pending: true, note: 'Manual del producto pendiente de proporcionar.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p06',
    slug: 'licuadora-vidrio-hogar',
    name: { es: 'Licuadora de Vidrio para el Hogar', en: 'Home Glass Blender' },
    model: { pending: true, note: 'Modelo pendiente — no visible en las fotos disponibles (sin empaque fotografiado).' },
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Licuadora WM® con jarra de vidrio, control de velocidad mediante perilla giratoria, base de acero inoxidable y cuchillas de acero inoxidable removibles. Ideal para bebidas, batidos y salsas.',
      en: 'WM® blender with a glass jar, a rotary speed dial, a stainless steel base, and removable stainless steel blades. Ideal for drinks, smoothies and sauces.',
    },
    benefits: [
      {
        icon: 'capacity',
        title: { es: 'Jarra de vidrio', en: 'Glass jar' },
        description: {
          es: 'Resistente y libre de olores, con pico vertedor y asa integrada.',
          en: 'Durable and odor-free, with a pour spout and integrated handle.',
        },
      },
      {
        icon: 'controls',
        title: { es: 'Control por perilla giratoria', en: 'Rotary speed dial' },
        description: {
          es: 'Ajuste sencillo e intuitivo de la velocidad.',
          en: 'Simple, intuitive speed adjustment.',
        },
      },
      {
        icon: 'blade',
        title: { es: 'Cuchillas de acero inoxidable removibles', en: 'Removable stainless steel blades' },
        description: {
          es: 'Facilitan la limpieza y el mantenimiento del equipo.',
          en: 'Make cleaning and maintaining the unit easier.',
        },
      },
      {
        icon: 'blend',
        title: { es: 'Versátil para bebidas y salsas', en: 'Versatile for drinks and sauces' },
        description: {
          es: 'De batidos y jugos a salsas y aderezos frescos.',
          en: 'From smoothies and juices to fresh sauces and dressings.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Licuadora doméstica', en: 'Home blender' } },
      { label: { es: 'Jarra', en: 'Jar' }, value: { es: 'Vidrio, con pico vertedor y asa', en: 'Glass, with pour spout and handle' } },
      { label: { es: 'Control', en: 'Control' }, value: { es: 'Perilla giratoria de velocidad', en: 'Rotary speed dial' } },
      { label: { es: 'Cuchillas', en: 'Blades' }, value: { es: 'Acero inoxidable, removibles', en: 'Stainless steel, removable' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Negro con acero inoxidable', en: 'Black with stainless steel' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { es: '110V, 60Hz', en: '110V, 60Hz' } },
      { label: { es: 'Capacidad', en: 'Capacity' }, value: { pending: true } },
      { label: { es: 'Potencia', en: 'Power' }, value: { pending: true } },
      { label: { es: 'Material', en: 'Material' }, value: { pending: true } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { pending: true } },
      { label: { es: 'Peso', en: 'Weight' }, value: { pending: true } },
    ],
    safetyAndQuality: { pending: true, note: 'Información de seguridad y calidad pendiente de proporcionar.' },
    mainImage: {
      src: '/products/licuadora-vidrio-hogar/licuadoravidrio_1.jpg',
      alt: {
        es: 'Licuadora de vidrio WM en uso junto a una familia con batidos de frutas',
        en: 'WM glass blender in use beside a family with fruit smoothies',
      },
    },
    gallery: [
      {
        src: '/products/licuadora-vidrio-hogar/licuadoravidrio_2.jpg',
        alt: {
          es: 'Licuadora de vidrio WM con mango, piña y hielo en la jarra, junto a un batido tropical',
          en: 'WM glass blender with mango, pineapple and ice in the jar, beside a tropical smoothie',
        },
      },
      {
        src: '/products/licuadora-vidrio-hogar/licuadoravidrio_3.jpg',
        alt: {
          es: 'Licuadora de vidrio WM con salsa de tomate recién preparada, rodeada de ingredientes frescos',
          en: 'WM glass blender with freshly made tomato salsa, surrounded by fresh ingredients',
        },
      },
      {
        src: '/products/licuadora-vidrio-hogar/licuadoravidrio_4.jpg',
        alt: {
          es: 'Detalle de la perilla giratoria de velocidad de la licuadora de vidrio WM',
          en: 'Detail of the rotary speed dial on the WM glass blender',
        },
      },
      {
        src: '/products/licuadora-vidrio-hogar/licuadoravidrio_5.jpg',
        alt: {
          es: 'Jarra de vidrio y cuchillas removibles de la licuadora WM durante la limpieza',
          en: 'Glass jar and removable blades of the WM blender being cleaned',
        },
      },
    ],
    manualUrl: { pending: true, note: 'Manual del producto pendiente de proporcionar.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p07',
    slug: 'freidora-de-aire-vidrio-4l',
    name: { es: 'Freidora de Aire de Vidrio 4L', en: '4L Glass Air Fryer' },
    model: 'WM-26005',
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Freidora de aire WM® de 4 litros, modelo WM-26005, con cámara de cocción de vidrio de alto borosilicato, panel de control táctil digital con pantalla de tiempo y temperatura, 6 programas preestablecidos y calentamiento envolvente 360° con infrarrojo lejano. Detalles en acabado cobre, disponible en blanco y negro, con garantía de 3 años.',
      en: 'WM® 4-liter air fryer, model WM-26005, with a high-borosilicate glass cooking chamber, a digital touch control panel with a time and temperature display, 6 preset programs, and 360° surround far-infrared heating. Copper-toned accents, available in white and black, with a 3-year warranty.',
    },
    seoTitle: {
      es: 'Freidora de Aire de Vidrio WM® de 4L | WM-26005',
      en: 'WM® 4L Glass Air Fryer | WM-26005',
    },
    seoDescription: {
      es: 'Freidora de aire WM® WM-26005 de 4 litros con cámara de vidrio de alto borosilicato, 6 programas preestablecidos, calentamiento envolvente 360° con infrarrojo lejano y detalles en cobre. Disponible en blanco y negro.',
      en: 'WM® WM-26005 4-liter air fryer with a high-borosilicate glass chamber, 6 preset programs, 360° surround far-infrared heating and copper-toned accents. Available in white and black.',
    },
    benefits: [
      {
        icon: 'visibility',
        title: { es: 'Cámara de vidrio de alto borosilicato', en: 'High-borosilicate glass chamber' },
        description: {
          es: 'Resistente al calor y pensada para uso diario; permite ver el proceso de cocción sin necesidad de abrir la canasta.',
          en: 'Heat-resistant and built for everyday use; lets you watch the cooking process without opening the basket.',
        },
      },
      {
        icon: 'programs',
        title: { es: '6 programas preestablecidos', en: '6 preset programs' },
        description: {
          es: 'Un toque para papas fritas, bistec, muslo de pollo, mariscos, pescado y tartaletas, con pantalla de tiempo y temperatura.',
          en: 'One touch for French fries, steak, chicken drumstick, seafood, fish and egg tarts, with a time and temperature display.',
        },
      },
      {
        icon: 'heat',
        title: { es: 'Calentamiento envolvente 360° e infrarrojo lejano', en: '360° surround and far-infrared heating' },
        description: {
          es: 'Distribuye el calor de manera uniforme en toda la cámara, para un resultado dorado por fuera y jugoso por dentro, con menos aceite.',
          en: 'Circulates heat evenly throughout the chamber, for results that are crispy outside and juicy inside, with less oil.',
        },
      },
      {
        icon: 'capacity',
        title: { es: 'Capacidad de 4L', en: '4L capacity' },
        description: {
          es: 'Un tamaño compacto, pensado para porciones individuales o para dos personas.',
          en: 'A compact size, suited for single or two-person portions.',
        },
      },
      {
        icon: 'finish',
        title: { es: 'Detalles en acabado cobre', en: 'Copper-toned accents' },
        description: {
          es: 'El asa y el anillo superior en tono cobre le dan un sello visual distintivo.',
          en: 'The handle and top ring in a copper tone give it a distinctive visual signature.',
        },
      },
      {
        icon: 'finish',
        title: { es: 'Disponible en blanco y negro', en: 'Available in white and black' },
        description: {
          es: 'Dos acabados para combinar con distintos estilos de cocina.',
          en: 'Two finishes to match different kitchen styles.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Freidora de aire', en: 'Air fryer' } },
      { label: { es: 'Capacidad', en: 'Capacity' }, value: { es: '4 litros', en: '4 liters' } },
      { label: { es: 'Panel de control', en: 'Control panel' }, value: { es: 'Táctil digital, con pantalla de tiempo y temperatura', en: 'Digital touch, with time and temperature display' } },
      {
        label: { es: 'Programas preestablecidos (6)', en: 'Preset programs (6)' },
        value: {
          es: 'Papas fritas, bistec, muslo de pollo, mariscos, pescado y tartaletas',
          en: 'French fries, steak, chicken drumstick, seafood, fish and egg tarts',
        },
      },
      { label: { es: 'Sistema de calentamiento', en: 'Heating system' }, value: { es: 'Envolvente 360° con infrarrojo lejano', en: '360° surround with far-infrared technology' } },
      { label: { es: 'Cámara de cocción', en: 'Cooking chamber' }, value: { es: 'Vidrio de alto borosilicato, diseño cilíndrico', en: 'High-borosilicate glass, cylindrical design' } },
      { label: { es: 'Asa', en: 'Handle' }, value: { es: 'Acabado cobre', en: 'Copper-toned finish' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Blanco o negro, con detalles en cobre', en: 'White or black, with copper-toned accents' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { es: '110V, 60Hz', en: '110V, 60Hz' } },
      { label: { es: 'Potencia', en: 'Power' }, value: { pending: true } },
      { label: { es: 'Material (carcasa)', en: 'Material (housing)' }, value: { pending: true } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { pending: true } },
      { label: { es: 'Peso', en: 'Weight' }, value: { pending: true } },
    ],
    safetyAndQuality: [
      {
        es: 'Su cámara de cocción es de vidrio de alto borosilicato, resistente al calor; aun así, manipúlela con cuidado para evitar golpes o caídas.',
        en: 'Its cooking chamber is made of heat-resistant high-borosilicate glass; even so, handle it carefully to avoid impacts or drops.',
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/freidora-de-aire-vidrio-4l/ChatGPT Image 11 sept 2026, 11_43_45.png',
      alt: {
        es: 'Freidora de aire de vidrio WM de 4 L negra con pollo y verduras en su recipiente de vidrio',
        en: 'WM 4L glass air fryer in black with chicken and vegetables in its glass bowl',
      },
    },
    gallery: [
      {
        src: '/products/freidora-de-aire-vidrio-4l/ChatGPT Image 11 sept 2026, 11_43_34.png',
        alt: {
          es: 'Freidora de aire de vidrio WM de 4 L blanca con pollo y verduras en su recipiente de vidrio',
          en: 'WM 4L glass air fryer in white with chicken and vegetables in its glass bowl',
        },
      },
      {
        src: '/products/freidora-de-aire-vidrio-4l/ChatGPT Image 11 sept 2026, 11_44_02.png',
        alt: {
          es: 'Freidora de aire de vidrio WM de 4 L blanca en uso, con una persona sirviendo pollo del recipiente',
          en: 'WM 4L glass air fryer in white in use, with a person serving chicken from the bowl',
        },
      },
      {
        src: '/products/freidora-de-aire-vidrio-4l/ChatGPT Image 11 sept 2026, 11_44_11.png',
        alt: {
          es: 'Freidora de aire de vidrio WM de 4 L blanca con patatas fritas, junto a distintos platos preparados',
          en: 'WM 4L glass air fryer in white with fries, beside a selection of prepared dishes',
        },
      },
      {
        src: '/products/freidora-de-aire-vidrio-4l/ChatGPT Image 11 sept 2026, 11_44_24.png',
        alt: {
          es: 'Freidora de aire de vidrio WM de 4 L blanca con pollo, sobre una encimera junto a platos preparados',
          en: 'WM 4L glass air fryer in white with chicken, on a kitchen counter beside prepared dishes',
        },
      },
    ],
    manualUrl: { pending: true, note: 'Manual del producto pendiente de proporcionar.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p08',
    slug: 'ventilador-industrial-3-en-1',
    name: { es: 'Ventilador Industrial 18" 3 en 1', en: '18" 3-in-1 Industrial Fan' },
    model: 'WM-26716',
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Ventilador WM® de 18 pulgadas, modelo WM-26716, con motor 100% de cobre puro y 3 formas de uso: el mismo cabezal se monta en pared, en base de pie con altura ajustable, o en soporte de piso de ángulo bajo. Aspas metálicas en tono azul y rejilla de protección negra, con garantía de 3 años.',
      en: 'WM® 18-inch fan, model WM-26716, with a 100% pure copper motor and 3 ways to use it: the same head mounts on a wall, on a height-adjustable stand base, or on a low-angle floor stand. Metal blades in a blue tone and a black protective grille, with a 3-year warranty.',
    },
    seoTitle: {
      es: 'Ventilador Industrial WM® 18" 3 en 1 | WM-26716',
      en: 'WM® 18" 3-in-1 Industrial Fan | WM-26716',
    },
    seoDescription: {
      es: 'Ventilador WM® WM-26716 de 18 pulgadas con motor 100% de cobre puro. Se monta en pared, en base de pie con altura ajustable o en soporte de piso de ángulo bajo.',
      en: 'WM® WM-26716 18-inch fan with a 100% pure copper motor. Wall-mountable, height-adjustable stand base, or low-angle floor stand.',
    },
    benefits: [
      {
        icon: 'motor',
        title: { es: 'Motor 100% de cobre puro', en: '100% pure copper motor' },
        description: {
          es: 'Ofrece un desempeño confiable y una mayor durabilidad.',
          en: 'Delivers reliable performance and greater durability.',
        },
      },
      {
        icon: 'programs',
        title: { es: '3 formas de uso', en: '3 ways to use it' },
        description: {
          es: 'El mismo cabezal se instala en pared, sobre una base de pie o en un soporte de piso de ángulo bajo, según lo que necesites.',
          en: 'The same fan head mounts on a wall, on a stand base, or on a low-angle floor stand, depending on what you need.',
        },
      },
      {
        icon: 'fan',
        title: { es: 'Aspas metálicas de 18 pulgadas', en: '18-inch metal blades' },
        description: {
          es: '5 aspas de metal en tono azul, diseñadas para un movimiento de aire óptimo.',
          en: '5 metal blades in a blue tone, engineered for optimal air movement.',
        },
      },
      {
        icon: 'airflow',
        title: { es: 'Flujo de aire potente', en: 'Powerful airflow' },
        description: {
          es: 'Una brisa fuerte y constante para mayor comodidad.',
          en: 'A strong, consistent breeze for maximum comfort.',
        },
      },
      {
        icon: 'height',
        title: { es: 'Altura ajustable en modo de pie', en: 'Adjustable height in stand mode' },
        description: {
          es: 'El tubo telescópico permite subir o bajar el ventilador a la altura que prefieras.',
          en: 'The telescoping pole lets you raise or lower the fan to the height you prefer.',
        },
      },
      {
        icon: 'shield',
        title: { es: 'Rejilla de protección resistente', en: 'Sturdy protective grille' },
        description: {
          es: 'La estructura metálica cubre las aspas en los tres modos de uso.',
          en: 'The metal structure covers the blades in all three modes of use.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Ventilador', en: 'Fan' } },
      { label: { es: 'Configuración', en: 'Configuration' }, value: { es: '3 en 1: pared, pie y piso de ángulo bajo', en: '3-in-1: wall, stand and low-angle floor' } },
      { label: { es: 'Motor', en: 'Motor' }, value: { es: '100% cobre puro', en: '100% pure copper' } },
      { label: { es: 'Aspas', en: 'Blades' }, value: { es: '5, metálicas, en tono azul', en: '5, metal, in a blue tone' } },
      { label: { es: 'Diámetro de aspas', en: 'Blade diameter' }, value: { es: '18 pulgadas (45,7 cm)', en: '18 inches (45.7 cm)' } },
      { label: { es: 'Rejilla de protección', en: 'Protective grille' }, value: { es: 'Metálica, en negro', en: 'Metal, in black' } },
      { label: { es: 'Altura (modo de pie)', en: 'Height (stand mode)' }, value: { es: 'Ajustable, tubo telescópico', en: 'Adjustable, telescoping pole' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Negro con aspas azules', en: 'Black with blue blades' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { es: '110V, 60Hz', en: '110V, 60Hz' } },
      { label: { es: 'Potencia', en: 'Power' }, value: { pending: true } },
      { label: { es: 'Material (base y carcasa)', en: 'Material (base and housing)' }, value: { pending: true } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { pending: true } },
      { label: { es: 'Peso', en: 'Weight' }, value: { pending: true } },
    ],
    safetyAndQuality: [
      {
        es: 'Motor de bobinado 100% de cobre puro, seleccionado para ofrecer un desempeño estable y mayor durabilidad.',
        en: 'A 100% pure copper-wound motor, selected to deliver stable performance and greater durability.',
      },
      {
        es: 'Cuenta con rejilla de protección metálica sobre las aspas; manténgalo fuera del alcance de niños durante su funcionamiento.',
        en: 'Features a metal protective grille over the blades; keep it out of children’s reach while running.',
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/ventilador-industrial-3-en-1/main.jpg',
      alt: {
        es: 'Ventilador WM en uso, en modo de pie en una sala de estar',
        en: 'WM fan in use, in stand mode in a living room',
      },
    },
    gallery: [
      {
        src: '/products/ventilador-industrial-3-en-1/gallery-1.jpg',
        alt: {
          es: 'Ventilador WM en modo de pie, con aspas azules y base circular',
          en: 'WM fan in stand mode, with blue blades and a round base',
        },
      },
      {
        src: '/products/ventilador-industrial-3-en-1/gallery-2.jpg',
        alt: {
          es: 'Ventilador WM en sus tres modos: pared, pie y piso de ángulo bajo',
          en: 'WM fan in its three modes: wall, stand and low-angle floor',
        },
      },
      {
        src: '/products/ventilador-industrial-3-en-1/gallery-3.jpg',
        alt: {
          es: 'Ventilador WM en uso, en modo de piso de ángulo bajo en una oficina en casa',
          en: 'WM fan in use, in low-angle floor mode in a home office',
        },
      },
    ],
    manualUrl: { pending: true, note: 'Manual del producto pendiente de proporcionar.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p11',
    slug: 'estacion-de-energia-portatil-p800',
    name: { es: 'Estación de Energía Portátil P800', en: 'P800 Portable Power Station' },
    model: 'P800',
    categorySlug: 'energia',
    shortDescription: {
      es: 'Estación de energía portátil WM® P800, compacta y ligera (6,5 kg), con batería LiFePO4 de 512 Wh, salida AC de 800 W de onda senoidal pura y más de 4000 ciclos de carga. Cuenta con 2 salidas AC, USB-C PD de hasta 100 W, USB-A, salidas DC y para vehículo, y se recarga por red eléctrica en 1–1,2 h, panel solar o auto. Con garantía de 3 años.',
      en: 'WM® P800 portable power station, compact and light (6.5 kg), with a 512 Wh LiFePO4 battery, 800 W pure sine wave AC output and 4000+ charge cycles. Features 2 AC outlets, USB-C PD up to 100 W, USB-A, DC and car outputs, and recharges from wall power in 1–1.2 h, a solar panel or a car. Backed by a 3-year warranty.',
    },
    seoTitle: {
      es: 'Estación de Energía Portátil WM® P800 | 512 Wh / 800 W',
      en: 'WM® P800 Portable Power Station | 512 Wh / 800 W',
    },
    seoDescription: {
      es: 'Estación de energía portátil WM® P800 de 6,5 kg con batería LiFePO4 de 512 Wh, 800 W de onda senoidal pura, 2 salidas AC, USB-C 100 W y carga por red, panel solar o auto.',
      en: 'WM® P800 portable power station, 6.5 kg, with a 512 Wh LiFePO4 battery, 800 W pure sine wave, 2 AC outlets, 100 W USB-C and charging via wall power, solar panel or car.',
    },
    benefits: [
      {
        icon: 'battery',
        title: { es: 'Batería LiFePO4 de 512 Wh', en: '512 Wh LiFePO4 battery' },
        description: {
          es: 'Más de 4000 ciclos de carga, para años de uso confiable.',
          en: '4000+ charge cycles, for years of reliable use.',
        },
      },
      {
        icon: 'wave',
        title: { es: '800 W con onda senoidal pura', en: '800 W pure sine wave' },
        description: {
          es: 'Energía AC limpia para laptops, routers, iluminación, ventiladores y equipos electrónicos sensibles.',
          en: 'Clean AC power for laptops, routers, lighting, fans and sensitive electronics.',
        },
      },
      {
        icon: 'usb',
        title: { es: '10 salidas en total', en: '10 outputs in total' },
        description: {
          es: '2 tomas AC, 3 USB-C (1 de 100 W y 2 de 30 W), 2 USB-A, 2 DC5525 y 1 salida para vehículo.',
          en: '2 AC outlets, 3 USB-C (one 100 W and two 30 W), 2 USB-A, 2 DC5525 and 1 car output.',
        },
      },
      {
        icon: 'charge',
        title: { es: 'Carga completa en 1–1,2 h', en: 'Full charge in 1–1.2 h' },
        description: {
          es: 'Por red eléctrica (600 W), panel solar (hasta 300 W, 12–60 V) o el encendedor del auto.',
          en: 'Via wall power (600 W), a solar panel (up to 300 W, 12–60 V) or your car’s outlet.',
        },
      },
      {
        icon: 'light',
        title: { es: 'Luz LED integrada', en: 'Built-in LED light' },
        description: {
          es: 'Barra de luz frontal con brillo al 50 % o 100 % y modo SOS.',
          en: 'Front light bar with 50% or 100% brightness and SOS mode.',
        },
      },
      {
        icon: 'shield',
        title: { es: 'Protección integral', en: 'Comprehensive protection' },
        description: {
          es: 'Contra sobrecarga, cortocircuito, sobretemperatura y subtensión, con códigos de diagnóstico en pantalla.',
          en: 'Against overload, short-circuit, over-temperature and under-voltage, with on-screen diagnostic codes.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Estación de energía portátil', en: 'Portable power station' } },
      { label: { es: 'Batería', en: 'Battery' }, value: { es: 'LiFePO4, 512 Wh', en: 'LiFePO4, 512 Wh' } },
      { label: { es: 'Ciclos de vida', en: 'Lifecycles' }, value: { es: 'Más de 4000 ciclos', en: '4000+ cycles' } },
      { label: { es: 'Potencia de salida AC', en: 'AC output power' }, value: { es: '800 W, onda senoidal pura', en: '800 W, pure sine wave' } },
      { label: { es: 'Salidas AC', en: 'AC outlets' }, value: { es: '2 tomacorrientes', en: '2 outlets' } },
      { label: { es: 'Salida USB-A (x2)', en: 'USB-A output (x2)' }, value: { es: '30 W — 5V=3A, 9V=3A, 12V=3A', en: '30W — 5V=3A, 9V=3A, 12V=3A' } },
      { label: { es: 'Salida USB-C 100 W (x1)', en: 'USB-C 100W output (x1)' }, value: { es: '100 W — 5V/9V/12V/15V=3A, 20V=5A', en: '100W — 5V/9V/12V/15V=3A, 20V=5A' } },
      { label: { es: 'Salida USB-C 30 W (x2)', en: 'USB-C 30W output (x2)' }, value: { es: '30 W — 5V=3A, 9V=3A, 12V=2.5A, 15V=2A, 20V=1.5A', en: '30W — 5V=3A, 9V=3A, 12V=2.5A, 15V=2A, 20V=1.5A' } },
      { label: { es: 'Salida DC5525 (x2)', en: 'DC5525 output (x2)' }, value: { es: '13,2V=8A', en: '13.2V=8A' } },
      { label: { es: 'Salida para vehículo', en: 'Car output' }, value: { es: '13,2V=10A', en: '13.2V=10A' } },
      { label: { es: 'Entrada AC', en: 'AC input' }, value: { es: 'Máx. 600 W; 85–130 V / 60 Hz o 180–260 V / 50 Hz', en: 'Max 600W; 85–130 V / 60 Hz or 180–260 V / 50 Hz' } },
      { label: { es: 'Tiempo de carga (AC)', en: 'Charging time (AC)' }, value: { es: 'Aprox. 1–1,2 h', en: 'Approx. 1–1.2 h' } },
      { label: { es: 'Entrada solar', en: 'Solar input' }, value: { es: 'Máx. 300 W, 12–60 V (conector XT60); corriente máxima de carga 10A', en: 'Max 300W, 12–60 V (XT60 connector); max charging current 10A' } },
      { label: { es: 'Entrada por vehículo', en: 'Car input' }, value: { es: '120 W, vehículos de 12/24 V', en: '120W, 12/24 V vehicles' } },
      { label: { es: 'Pantalla', en: 'Display' }, value: { es: 'LCD, con estado de batería, potencia de entrada/salida, tiempo restante y códigos de error', en: 'LCD, with battery status, input/output power, remaining time and error codes' } },
      { label: { es: 'Iluminación', en: 'Lighting' }, value: { es: 'Luz LED con brillo 50 % / 100 % y modo SOS', en: 'LED light with 50% / 100% brightness and SOS mode' } },
      { label: { es: 'Temperatura de uso', en: 'Operating temperature' }, value: { es: '0 a 40°C (carga), -15 a 40°C (descarga)', en: '0 to 40°C (charging), -15 to 40°C (discharging)' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Gris oscuro con asa plateada', en: 'Dark gray with silver handle' } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { es: '299 x 191,4 x 196,6 mm', en: '299 x 191.4 x 196.6 mm' } },
      { label: { es: 'Peso', en: 'Weight' }, value: { es: '6,5 kg', en: '6.5 kg' } },
      { label: { es: 'Contenido', en: 'In the box' }, value: { es: 'Estación, cable de carga AC, cable solar, cable para auto, manual y tarjeta de garantía', en: 'Power station, AC charging cable, solar cable, car cable, manual and warranty card' } },
      { label: { es: 'Certificaciones', en: 'Certifications' }, value: { es: 'CE, FCC, RoHS', en: 'CE, FCC, RoHS' } },
    ],
    safetyAndQuality: [
      {
        es: 'Incluye protecciones contra sobrecarga, cortocircuito, sobretemperatura y subtensión en sus salidas, con códigos de diagnóstico en pantalla para facilitar el mantenimiento.',
        en: 'Includes overload, short-circuit, over-temperature and under-voltage protection on its outputs, with on-screen diagnostic codes to ease maintenance.',
      },
      {
        es: 'Use solo equipos de menos de 800 W y no la emplee con dispositivos médicos o de soporte vital.',
        en: 'Only use devices under 800 W and do not use it with medical or life-support equipment.',
      },
      {
        es: 'Su batería LiFePO4 no es removible; manténgala seca, ventilada y alejada del calor, y recárguela por completo cada 3 meses si permanece almacenada.',
        en: 'Its LiFePO4 battery is not removable; keep it dry, ventilated and away from heat, and fully recharge it every 3 months while in storage.',
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/estacion-de-energia-portatil-p800/P800_1.jpg',
      alt: {
        es: 'Estación de energía portátil WM P800 en uso durante un apagón, iluminando la sala y alimentando un router, una laptop y un celular',
        en: 'WM P800 portable power station in use during a blackout, lighting the living room and powering a router, a laptop and a phone',
      },
    },
    gallery: [
      {
        src: '/products/estacion-de-energia-portatil-p800/P800_2.jpg',
        alt: {
          es: 'Estación de energía WM P800 en un campamento al atardecer, alimentando luces, un parlante y un celular',
          en: 'WM P800 power station at a campsite at sunset, powering string lights, a speaker and a phone',
        },
      },
      {
        src: '/products/estacion-de-energia-portatil-p800/P800_3.jpg',
        alt: {
          es: 'Estación de energía WM P800 en un escritorio de home office alimentando un monitor y una laptop',
          en: 'WM P800 power station on a home-office desk powering a monitor and a laptop',
        },
      },
      {
        src: '/products/estacion-de-energia-portatil-p800/P800_4.jpg',
        alt: {
          es: 'Persona llevando la estación de energía WM P800 por su asa hacia el maletero de un auto',
          en: 'Person carrying the WM P800 power station by its handle toward a car trunk',
        },
      },
      {
        src: '/products/estacion-de-energia-portatil-p800/P800_5.jpg',
        alt: {
          es: 'Estación de energía WM P800 cargándose con un panel solar portátil en un balcón',
          en: 'WM P800 power station charging from a portable solar panel on a balcony',
        },
      },
    ],
    manualUrl: '/manuals/P800.pdf',
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p12',
    slug: 'estacion-de-energia-portatil-p1800',
    name: { es: 'Estación de Energía Portátil P1800', en: 'P1800 Portable Power Station' },
    model: 'P1800',
    categorySlug: 'energia',
    shortDescription: {
      es: 'Estación de energía portátil WM® P1800, con batería LiFePO4 de 1024 Wh y vida útil superior a 4000 ciclos, inversor de 1800 W de onda senoidal pura y pantalla LCD con información en tiempo real. Diseñada para respaldo eléctrico, uso en exteriores y emergencias, se recarga por red AC, panel solar o vehículo. Con garantía de 3 años.',
      en: 'WM® P1800 portable power station, with a 1024 Wh LiFePO4 battery rated for 4000+ cycles, an 1800 W pure sine wave inverter and an LCD with real-time information. Designed for backup power, outdoor use and emergencies, it recharges from AC power, a solar panel or a vehicle. Backed by a 3-year warranty.',
    },
    seoTitle: {
      es: 'Estación de Energía Portátil WM® P1800 | 1024 Wh / 1800 W',
      en: 'WM® P1800 Portable Power Station | 1024 Wh / 1800 W',
    },
    seoDescription: {
      es: 'Estación de energía portátil WM® P1800 con batería LiFePO4 de 1024 Wh, inversor de 1800 W de onda senoidal pura, USB-C PD 100 W y carga por red, panel solar o vehículo.',
      en: 'WM® P1800 portable power station with a 1024 Wh LiFePO4 battery, 1800 W pure sine wave inverter, 100 W USB-C PD and charging via wall power, solar panel or vehicle.',
    },
    benefits: [
      {
        icon: 'battery',
        title: { es: 'Batería LiFePO4 de 1024 Wh', en: '1024 Wh LiFePO4 battery' },
        description: {
          es: 'Vida útil superior a 4000 ciclos de carga.',
          en: 'Rated for more than 4000 charge cycles.',
        },
      },
      {
        icon: 'wave',
        title: { es: 'Inversor de 1800 W de onda senoidal pura', en: '1800 W pure sine wave inverter' },
        description: {
          es: 'Energía AC limpia para respaldo en casa, uso en exteriores y emergencias.',
          en: 'Clean AC power for home backup, outdoor use and emergencies.',
        },
      },
      {
        icon: 'usb',
        title: { es: 'USB-C PD de hasta 100 W', en: 'USB-C PD up to 100 W' },
        description: {
          es: 'Además de 2 salidas AC, USB-A, salidas DC de 13,2 V y salida para vehículo.',
          en: 'Plus 2 AC outlets, USB-A, 13.2 V DC outputs and a car output.',
        },
      },
      {
        icon: 'charge',
        title: { es: '3 formas de cargarla', en: '3 ways to recharge it' },
        description: {
          es: 'Por red AC, paneles solares (10–52 V) o vehículo de 12/24 V.',
          en: 'Via AC power, solar panels (10–52 V) or a 12/24 V vehicle.',
        },
      },
      {
        icon: 'shield',
        title: { es: 'Protección inteligente (BMS)', en: 'Smart protection (BMS)' },
        description: {
          es: 'Contra sobrecarga, cortocircuito, sobretemperatura, sobretensión y bajo voltaje.',
          en: 'Against overload, short-circuit, over-temperature, over-voltage and under-voltage.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Estación de energía portátil', en: 'Portable power station' } },
      { label: { es: 'Batería', en: 'Battery' }, value: { es: 'LiFePO4, 1024 Wh', en: 'LiFePO4, 1024 Wh' } },
      { label: { es: 'Ciclos de vida', en: 'Lifecycles' }, value: { es: 'Más de 4000 ciclos', en: '4000+ cycles' } },
      { label: { es: 'Potencia de salida AC', en: 'AC output power' }, value: { es: '1800 W, onda senoidal pura', en: '1800 W, pure sine wave' } },
      { label: { es: 'Salidas AC', en: 'AC outlets' }, value: { es: '2 tomacorrientes', en: '2 outlets' } },
      { label: { es: 'Salidas USB', en: 'USB outputs' }, value: { es: 'USB-C PD hasta 100 W y USB-A', en: 'USB-C PD up to 100W and USB-A' } },
      { label: { es: 'Salidas DC', en: 'DC outputs' }, value: { es: '13,2 V y salida para vehículo', en: '13.2 V and car output' } },
      { label: { es: 'Entrada de carga', en: 'Charging input' }, value: { es: 'Red AC, panel solar 10–52 V y vehículo de 12/24 V', en: 'AC power, 10–52 V solar panel and 12/24 V vehicle' } },
      { label: { es: 'Pantalla', en: 'Display' }, value: { es: 'LCD con información en tiempo real', en: 'LCD with real-time information' } },
      { label: { es: 'Protecciones', en: 'Protections' }, value: { es: 'BMS: sobrecarga, cortocircuito, sobretemperatura, sobretensión y bajo voltaje', en: 'BMS: overload, short-circuit, over-temperature, over-voltage and under-voltage' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Gris oscuro con tapa superior plateada', en: 'Dark gray with silver top cover' } },
      { label: { es: 'Potencia de entrada (AC / solar)', en: 'Input power (AC / solar)' }, value: { pending: true } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { pending: true } },
      { label: { es: 'Peso', en: 'Weight' }, value: { pending: true } },
    ],
    safetyAndQuality: [
      {
        es: 'Su sistema BMS protege contra sobrecarga, cortocircuito, sobretemperatura, sobretensión y bajo voltaje.',
        en: 'Its BMS protects against overload, short-circuit, over-temperature, over-voltage and under-voltage.',
      },
      {
        es: 'Manténgala en lugares secos y ventilados, no exceda su potencia nominal y recárguela aproximadamente cada tres meses durante un almacenamiento prolongado.',
        en: 'Keep it in dry, ventilated places, do not exceed its rated power and recharge it roughly every three months during long-term storage.',
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/estacion-de-energia-portatil-p1800/P1800_1.jpg',
      alt: {
        es: 'Estación de energía portátil WM P1800 en uso en la cocina, alimentando una licuadora, una cafetera y un celular',
        en: 'WM P1800 portable power station in use in the kitchen, powering a blender, a coffee maker and a phone',
      },
    },
    gallery: [
      {
        src: '/products/estacion-de-energia-portatil-p1800/P1800_2.jpg',
        alt: {
          es: 'Estación de energía WM P1800 durante un apagón alimentando el TV, el router y una lámpara de la sala',
          en: 'WM P1800 power station during a blackout powering the living room TV, router and a lamp',
        },
      },
      {
        src: '/products/estacion-de-energia-portatil-p1800/P1800_3.jpg',
        alt: {
          es: 'Estación de energía WM P1800 en una terraza alimentando una nevera portátil y luces decorativas',
          en: 'WM P1800 power station on a terrace powering a portable cooler and string lights',
        },
      },
      {
        src: '/products/estacion-de-energia-portatil-p1800/P1800_4.jpg',
        alt: {
          es: 'Estación de energía WM P1800 en un taller alimentando una lámpara y un cargador de herramientas',
          en: 'WM P1800 power station in a workshop powering a lamp and a tool charger',
        },
      },
      {
        src: '/products/estacion-de-energia-portatil-p1800/P1800_5.jpg',
        alt: {
          es: 'Estación de energía WM P1800 cargándose con paneles solares portátiles junto a un lago',
          en: 'WM P1800 power station charging from portable solar panels by a lake',
        },
      },
    ],
    manualUrl: { pending: true, note: 'El PDF recibido como manual del P1800 contiene el manual del P800; manual correcto pendiente.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p09',
    slug: 'estacion-de-energia-portatil-p3200',
    name: { es: 'Estación de Energía Portátil P3200', en: 'P3200 Portable Power Station' },
    model: 'P3200',
    categorySlug: 'energia',
    shortDescription: {
      es: 'Estación de energía portátil WM® P3200, con batería LiFePO4 de 2048 Wh, salida AC de 3200 W de onda senoidal pura y más de 4000 ciclos de carga. Cuenta con 4 salidas AC, 2 salidas para vehículo, puertos USB-C de hasta 100 W, y carga por red eléctrica, panel solar o auto. Con garantía de 3 años.',
      en: 'WM® P3200 portable power station, with a 2048 Wh LiFePO4 battery, 3200 W pure sine wave AC output and 4000+ charge cycles. Features 4 AC outlets, 2 car outputs, USB-C ports up to 100 W, and charging via wall power, solar panel or vehicle. Backed by a 3-year warranty.',
    },
    seoTitle: {
      es: 'Estación de Energía Portátil WM® P3200 | 2048 Wh / 3200 W',
      en: 'WM® P3200 Portable Power Station | 2048 Wh / 3200 W',
    },
    seoDescription: {
      es: 'Estación de energía portátil WM® P3200 con batería LiFePO4 de 2048 Wh, 3200 W de potencia AC, 4 salidas AC, USB-C 100 W y carga por red, panel solar o auto.',
      en: 'WM® P3200 portable power station with a 2048 Wh LiFePO4 battery, 3200 W AC power, 4 AC outlets, 100 W USB-C and charging via wall power, solar panel or car.',
    },
    benefits: [
      {
        icon: 'battery',
        title: { es: 'Batería LiFePO4 de 2048 Wh', en: '2048 Wh LiFePO4 battery' },
        description: {
          es: 'Más de 4000 ciclos de carga, para años de uso confiable.',
          en: '4000+ charge cycles, for years of reliable use.',
        },
      },
      {
        icon: 'wave',
        title: { es: '3200 W con onda senoidal pura', en: '3200 W pure sine wave' },
        description: {
          es: 'Una potencia AC limpia y segura para equipos electrónicos sensibles, desde laptops hasta refrigeradoras portátiles.',
          en: 'Clean, safe AC power for sensitive electronics, from laptops to portable fridges.',
        },
      },
      {
        icon: 'plug',
        title: { es: '4 salidas AC', en: '4 AC outlets' },
        description: {
          es: 'Hasta 3200 W en total, para conectar varios equipos a la vez.',
          en: 'Up to 3200 W total, to connect several devices at once.',
        },
      },
      {
        icon: 'usb',
        title: { es: 'Carga rápida USB-C de hasta 100 W', en: 'Up to 100 W USB-C fast charging' },
        description: {
          es: 'Además de salidas USB-A, salida DC de 13,2 V y salida para vehículo.',
          en: 'Plus USB-A outputs, a 13.2 V DC output and a car output.',
        },
      },
      {
        icon: 'charge',
        title: { es: '3 formas de cargarla', en: '3 ways to recharge it' },
        description: {
          es: 'Por red eléctrica (1,2–1,5 h para carga completa), panel solar (12–60 V, hasta 1000 W) o el encendedor del auto.',
          en: 'Via wall power (1.2–1.5 h to full), a solar panel (12–60 V, up to 1000 W) or your car’s outlet.',
        },
      },
      {
        icon: 'shield',
        title: { es: 'Protección inteligente (BMS)', en: 'Smart protection (BMS)' },
        description: {
          es: 'Contra sobrecarga, cortocircuito, sobretemperatura, sobretensión y subtensión.',
          en: 'Against overload, short-circuit, over-temperature, over-voltage and under-voltage.',
        },
      },
      {
        icon: 'light',
        title: { es: 'Luz LED integrada', en: 'Built-in LED light' },
        description: {
          es: 'Con brillo al 50 % o 100 % y modo SOS.',
          en: 'With 50% or 100% brightness and SOS mode.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Estación de energía portátil', en: 'Portable power station' } },
      { label: { es: 'Batería', en: 'Battery' }, value: { es: 'LiFePO4, 2048 Wh', en: 'LiFePO4, 2048 Wh' } },
      { label: { es: 'Ciclos de vida', en: 'Lifecycles' }, value: { es: 'Más de 4000 ciclos', en: '4000+ cycles' } },
      { label: { es: 'Potencia de salida AC', en: 'AC output power' }, value: { es: '3200 W, onda senoidal pura', en: '3200 W, pure sine wave' } },
      { label: { es: 'Salidas AC', en: 'AC outlets' }, value: { es: '4 tomacorrientes', en: '4 outlets' } },
      { label: { es: 'Salida USB-A (x4)', en: 'USB-A output (x4)' }, value: { es: '30 W — 5V=3A, 9V=3A, 12V=3A', en: '30W — 5V=3A, 9V=3A, 12V=3A' } },
      { label: { es: 'Salida USB-C 100 W (x2)', en: 'USB-C 100W output (x2)' }, value: { es: '100 W — 5V=3A, 9V=3A, 12V=3A, 15V=3A, 20V=5A', en: '100W — 5V=3A, 9V=3A, 12V=3A, 15V=3A, 20V=5A' } },
      { label: { es: 'Salida USB-C 30 W (x2)', en: 'USB-C 30W output (x2)' }, value: { es: '30 W — 5V=3A, 9V=3A, 12V=2.5A, 15V=2A, 20V=1.5A', en: '30W — 5V=3A, 9V=3A, 12V=2.5A, 15V=2A, 20V=1.5A' } },
      { label: { es: 'Salida DC5525 (x2)', en: 'DC5525 output (x2)' }, value: { es: '13,2V=8A', en: '13.2V=8A' } },
      { label: { es: 'Salidas para vehículo (x2)', en: 'Car outputs (x2)' }, value: { es: '13,2V=10A y 24V=10A', en: '13.2V=10A and 24V=10A' } },
      {
        label: { es: 'Entrada de carga', en: 'Charging input' },
        value: {
          es: 'Red AC (máx. 1800 W), panel solar 12–60V (máx. 1000 W, conector XT60i), auto 12/24 V (120 W); corriente máxima de carga 20A',
          en: 'AC (max 1800W), solar panel 12–60V (max 1000W, XT60i connector), 12/24 V car (120W); max charging current 20A',
        },
      },
      { label: { es: 'Entrada AC', en: 'AC input' }, value: { es: '85–130 V / 60 Hz o 180–264 V / 50 Hz', en: '85–130 V / 60 Hz or 180–264 V / 50 Hz' } },
      { label: { es: 'Tiempo de carga (AC)', en: 'Charging time (AC)' }, value: { es: 'Aprox. 1,2–1,5 h', en: 'Approx. 1.2–1.5 h' } },
      { label: { es: 'Pantalla', en: 'Display' }, value: { es: 'LCD, con estado de batería, potencia, tiempo restante y códigos de error', en: 'LCD, with battery status, power, remaining time and error codes' } },
      { label: { es: 'Conectividad', en: 'Connectivity' }, value: { es: 'Wi-Fi y Bluetooth', en: 'Wi-Fi and Bluetooth' } },
      { label: { es: 'Iluminación', en: 'Lighting' }, value: { es: 'Luz LED con brillo 50 % / 100 % y modo SOS', en: 'LED light with 50% / 100% brightness and SOS mode' } },
      { label: { es: 'Temperatura de uso', en: 'Operating temperature' }, value: { es: '0 a 40°C (carga), -15 a 40°C (descarga)', en: '0 to 40°C (charging), -15 to 40°C (discharging)' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Negro con detalles turquesa', en: 'Black with turquoise accents' } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { es: '445 x 298 x 367 mm', en: '445 x 298 x 367 mm' } },
      { label: { es: 'Peso', en: 'Weight' }, value: { es: '24 kg', en: '24 kg' } },
      { label: { es: 'Transporte', en: 'Portability' }, value: { es: 'Asa telescópica y ruedas', en: 'Telescopic handle and wheels' } },
      { label: { es: 'Certificaciones', en: 'Certifications' }, value: { es: 'CE, FCC, RoHS', en: 'CE, FCC, RoHS' } },
      { label: { es: 'Material', en: 'Material' }, value: { pending: true } },
    ],
    safetyAndQuality: [
      {
        es: 'Cuenta con protección inteligente (BMS) contra sobrecarga, cortocircuito, sobretemperatura, sobretensión y subtensión, con códigos de diagnóstico en pantalla para facilitar el mantenimiento.',
        en: 'Features smart protection (BMS) against overload, short-circuit, over-temperature, over-voltage and under-voltage, with on-screen diagnostic codes to ease maintenance.',
      },
      {
        es: 'Su batería de litio LiFePO4 no es removible; no intente abrir, perforar o desarmar el equipo.',
        en: 'Its LiFePO4 lithium battery is not removable; do not attempt to open, puncture or disassemble the unit.',
      },
      {
        es: 'Manténgala alejada de fuentes de calor, agua y otros líquidos; no la exponga a luz solar directa ni a ambientes húmedos o con polvo.',
        en: 'Keep it away from heat sources, water and other liquids; do not expose it to direct sunlight or humid, dusty environments.',
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/estacion-de-energia-portatil-p3200/P3200_1.png',
      alt: {
        es: 'Estación de energía portátil WM P3200 en una sala de estar junto a un televisor',
        en: 'WM P3200 portable power station in a living room beside a television',
      },
    },
    gallery: [
      {
        src: '/products/estacion-de-energia-portatil-p3200/P3200_2.png',
        alt: {
          es: 'Estación de energía portátil WM P3200 junto a un escritorio de trabajo en casa',
          en: 'WM P3200 portable power station beside a home office desk',
        },
      },
      {
        src: '/products/estacion-de-energia-portatil-p3200/P3200_3.png',
        alt: {
          es: 'Estación de energía portátil WM P3200 sobre una encimera de cocina con electrodomésticos',
          en: 'WM P3200 portable power station on a kitchen counter with appliances',
        },
      },
      {
        src: '/products/estacion-de-energia-portatil-p3200/P3200_4.png',
        alt: {
          es: 'Estación de energía portátil WM P3200 en un campamento junto a paneles solares',
          en: 'WM P3200 portable power station at a campsite beside solar panels',
        },
      },
      {
        src: '/products/estacion-de-energia-portatil-p3200/P3200_5.png',
        alt: {
          es: 'Estación de energía portátil WM P3200 en una sala con una familia reunida',
          en: 'WM P3200 portable power station in a living room with a family gathered together',
        },
      },
    ],
    manualUrl: '/manuals/P3200.pdf',
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p13',
    slug: 'estacion-de-energia-apilable-sp5000',
    name: { es: 'Estación de Energía Apilable SP5000', en: 'SP5000 Stackable Power Station' },
    model: 'SP5000',
    categorySlug: 'energia',
    shortDescription: {
      es: 'Estación de energía WM® SP5000 de fase dividida, con salida de 5000 W (120/240 V) y 5120 Wh de batería LiFePO4 en dos módulos B2560 apilables, ampliable hasta 10,24 kWh con 4 baterías. Ofrece conmutación automática a la red en 10 ms, control por app vía Wi-Fi/Bluetooth, carga solar de hasta 1000 W y ruedas para moverla con facilidad. Con garantía de 3 años.',
      en: 'WM® SP5000 split-phase power station, with 5000 W output (120/240 V) and 5120 Wh of LiFePO4 battery in two stackable B2560 modules, expandable to 10.24 kWh with 4 batteries. Offers 10 ms automatic grid transfer, app control via Wi-Fi/Bluetooth, up to 1000 W solar charging and wheels for easy moving. Backed by a 3-year warranty.',
    },
    seoTitle: {
      es: 'Estación de Energía Apilable WM® SP5000 | 5120 Wh / 5000 W 120/240 V',
      en: 'WM® SP5000 Stackable Power Station | 5120 Wh / 5000 W 120/240 V',
    },
    seoDescription: {
      es: 'Estación de energía WM® SP5000 de fase dividida 120/240 V, 5000 W, 5120 Wh LiFePO4 ampliable a 10,24 kWh, conmutación UPS en 10 ms, app Wi-Fi/Bluetooth y carga solar de 1000 W.',
      en: 'WM® SP5000 split-phase 120/240 V power station, 5000 W, 5120 Wh LiFePO4 expandable to 10.24 kWh, 10 ms UPS transfer, Wi-Fi/Bluetooth app and 1000 W solar charging.',
    },
    benefits: [
      {
        icon: 'battery',
        title: { es: '5120 Wh, ampliable a 10,24 kWh', en: '5120 Wh, expandable to 10.24 kWh' },
        description: {
          es: 'Incluye 2 baterías LiFePO4 B2560 de 2560 Wh; admite hasta 4 módulos apilados, con más de 4000 ciclos.',
          en: 'Includes 2 B2560 LiFePO4 batteries of 2560 Wh each; supports up to 4 stacked modules, rated for 4000+ cycles.',
        },
      },
      {
        icon: 'plug',
        title: { es: 'Fase dividida 120/240 V', en: 'Split phase 120/240 V' },
        description: {
          es: '5000 W nominales y 9000 W de pico a 240 V, o 2500 W por fase a 120 V, para electrodomésticos y equipos de mayor consumo.',
          en: '5000 W rated and 9000 W peak at 240 V, or 2500 W per phase at 120 V, for appliances and higher-demand equipment.',
        },
      },
      {
        icon: 'shield',
        title: { es: 'Respaldo automático en 10 ms', en: '10 ms automatic backup' },
        description: {
          es: 'Conmuta de la red a la batería en unos 10 ms cuando hay un corte de luz.',
          en: 'Switches from grid to battery in about 10 ms when the power goes out.',
        },
      },
      {
        icon: 'charge',
        title: { es: 'Carga por red o solar', en: 'Grid or solar charging' },
        description: {
          es: 'Hasta 3450 W por red de 240 V, 1800 W por red de 120 V o 1000 W solar (12–80 V).',
          en: 'Up to 3450 W from 240 V grid, 1800 W from 120 V grid or 1000 W solar (12–80 V).',
        },
      },
      {
        icon: 'display',
        title: { es: 'Control por app', en: 'App control' },
        description: {
          es: 'Monitoreo y control inteligente vía Wi-Fi y Bluetooth, además de pantalla LCD integrada.',
          en: 'Smart monitoring and control via Wi-Fi and Bluetooth, plus a built-in LCD.',
        },
      },
      {
        icon: 'usb',
        title: { es: 'Puertos para todo', en: 'Ports for everything' },
        description: {
          es: 'Tomas AC de 120 V y 240 V, 2 USB-C, 2 USB-A QC, toma para auto y salida DC de 12/24/36 V.',
          en: '120 V and 240 V AC outlets, 2 USB-C, 2 QC USB-A, a car socket and a 12/24/36 V DC output.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Estación de energía apilable de fase dividida', en: 'Split-phase stackable power station' } },
      { label: { es: 'Configuración incluida', en: 'Included configuration' }, value: { es: 'Inversor SP5000 + 2 baterías B2560', en: 'SP5000 inverter + 2 B2560 batteries' } },
      { label: { es: 'Batería', en: 'Battery' }, value: { es: 'LiFePO4, 5120 Wh (2 x 2560 Wh), 51,2 V', en: 'LiFePO4, 5120 Wh (2 x 2560 Wh), 51.2 V' } },
      { label: { es: 'Capacidad ampliable', en: 'Expandable capacity' }, value: { es: '2,56 a 10,24 kWh (máx. 4 baterías B2560)', en: '2.56 to 10.24 kWh (max 4 B2560 batteries)' } },
      { label: { es: 'Ciclos de vida', en: 'Lifecycles' }, value: { es: 'Más de 4000 ciclos (80 % DOD)', en: '4000+ cycles (80% DOD)' } },
      { label: { es: 'Salida AC 240 V (L1-L2)', en: 'AC output 240 V (L1-L2)' }, value: { es: '5000 W nominal, 9000 W pico, 60 Hz, THDv <1,5 %', en: '5000W rated, 9000W peak, 60 Hz, THDv <1.5%' } },
      { label: { es: 'Salida AC 120 V (por fase)', en: 'AC output 120 V (per phase)' }, value: { es: '2500 W nominal, 4500 W pico, 60 Hz', en: '2500W rated, 4500W peak, 60 Hz' } },
      { label: { es: 'Conmutación UPS', en: 'UPS transfer' }, value: { es: 'Aprox. 10 ms', en: 'Approx. 10 ms' } },
      { label: { es: 'Salida USB-C (x2)', en: 'USB-C output (x2)' }, value: { es: '5V/9V/12V=3A, 20V=5A', en: '5V/9V/12V=3A, 20V=5A' } },
      { label: { es: 'Salida USB-A QC (x2)', en: 'QC USB-A output (x2)' }, value: { es: '5V=3A, 9V=2A, 12V=1,5A', en: '5V=3A, 9V=2A, 12V=1.5A' } },
      { label: { es: 'Salida para vehículo', en: 'Car output' }, value: { es: '12V=10A', en: '12V=10A' } },
      { label: { es: 'Salida DC (XT90)', en: 'DC output (XT90)' }, value: { es: '12V=30A, 24V=25A o 36V=20A', en: '12V=30A, 24V=25A or 36V=20A' } },
      { label: { es: 'Entrada AC', en: 'AC input' }, value: { es: '240 V: 3450 W (180–260 V); 120 V: 1800 W (90–130 V); 60 Hz', en: '240 V: 3450W (180–260 V); 120 V: 1800W (90–130 V); 60 Hz' } },
      { label: { es: 'Entrada solar', en: 'Solar input' }, value: { es: 'Máx. 1000 W, 12–80 V, 16 A', en: 'Max 1000W, 12–80 V, 16 A' } },
      { label: { es: 'Eficiencia', en: 'Efficiency' }, value: { es: 'Batería a AC 93 %; AC a batería 92 %', en: 'Battery to AC 93%; AC to battery 92%' } },
      { label: { es: 'Conectividad', en: 'Connectivity' }, value: { es: 'App vía Wi-Fi y Bluetooth', en: 'App via Wi-Fi and Bluetooth' } },
      { label: { es: 'Pantalla', en: 'Display' }, value: { es: 'LCD de 80 x 64 mm', en: '80 x 64 mm LCD' } },
      { label: { es: 'Temperatura de uso', en: 'Operating temperature' }, value: { es: '0 a 40°C (carga), -20 a 40°C (descarga)', en: '0 to 40°C (charging), -20 to 40°C (discharging)' } },
      { label: { es: 'Protección', en: 'Protection' }, value: { es: 'IP20, uso en interiores; ruido <65 dB', en: 'IP20, indoor use; noise <65 dB' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Blanco con laterales gris oscuro', en: 'White with dark gray sides' } },
      { label: { es: 'Dimensiones (sistema)', en: 'Dimensions (system)' }, value: { es: '450 x 538 x 352 mm', en: '450 x 538 x 352 mm' } },
      { label: { es: 'Peso', en: 'Weight' }, value: { es: '65,2 kg (inversor 10,7 kg; cada batería 26,7 kg)', en: '65.2 kg (inverter 10.7 kg; each battery 26.7 kg)' } },
      { label: { es: 'Contenido', en: 'In the box' }, value: { es: 'Inversor, 2 baterías, cable solar MC4 en Y, cable para auto, cables AC de 120 V y 240 V, manual y tarjeta de garantía', en: 'Inverter, 2 batteries, MC4 Y solar cable, car cable, 120 V and 240 V AC cables, manual and warranty card' } },
    ],
    safetyAndQuality: [
      {
        es: 'Protecciones contra sobrecorriente, cortocircuito, sobre y subtensión, sobre y subfrecuencia, sobretemperatura del inversor y temperatura alta o baja de la batería.',
        en: 'Protection against over-current, short-circuit, over/under-voltage, over/under-frequency, inverter over-temperature and high or low battery temperature.',
      },
      {
        es: 'Diseñada para uso en interiores, protegida del sol y la lluvia; deje al menos 30 cm libres arriba y al frente, y 50 cm a los lados para su ventilación.',
        en: 'Designed for indoor use, sheltered from sun and rain; leave at least 30 cm clear above and in front, and 50 cm at the sides for ventilation.',
      },
      {
        es: 'Use solo baterías B2560 oficiales; para añadir módulos se recomiendan dos personas.',
        en: 'Use only official B2560 batteries; two people are recommended when adding modules.',
      },
      {
        es: 'Cuenta con 3 años de garantía limitada contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year limited warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/estacion-de-energia-apilable-sp5000/SP5000_1.jpg',
      alt: {
        es: 'Estación de energía apilable WM SP5000 en uso durante un apagón, manteniendo encendida la casa mientras una familia cena',
        en: 'WM SP5000 stackable power station in use during a blackout, keeping the home powered while a family has dinner',
      },
    },
    gallery: [
      {
        src: '/products/estacion-de-energia-apilable-sp5000/SP5000_2.jpg',
        alt: {
          es: 'Estación de energía WM SP5000 en un cuarto técnico junto al tablero eléctrico y un inversor solar',
          en: 'WM SP5000 power station in a utility room next to the breaker panel and a solar inverter',
        },
      },
      {
        src: '/products/estacion-de-energia-apilable-sp5000/SP5000_3.jpg',
        alt: {
          es: 'Estación de energía WM SP5000 alimentando una cafetería: máquina de espresso, caja y luces',
          en: 'WM SP5000 power station powering a coffee shop: espresso machine, register and lights',
        },
      },
      {
        src: '/products/estacion-de-energia-apilable-sp5000/SP5000_4.jpg',
        alt: {
          es: 'Detalle de la estación WM SP5000 con su inversor, dos baterías apiladas, cierres laterales y ruedas',
          en: 'Detail of the WM SP5000 with its inverter, two stacked batteries, side latches and wheels',
        },
      },
      {
        src: '/products/estacion-de-energia-apilable-sp5000/SP5000_5.jpg',
        alt: {
          es: 'Estación de energía WM SP5000 en interiores, cargándose con los paneles solares del techo',
          en: 'WM SP5000 power station indoors, charging from rooftop solar panels',
        },
      },
    ],
    manualUrl: '/manuals/SP5000.pdf',
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p10',
    slug: 'licuadora-multifuncion-2-en-1',
    name: { es: 'Licuadora Multifunción 2 en 1', en: '2-in-1 Multifunction Blender' },
    model: 'WM-260111',
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Licuadora multifunción WM® 2 en 1, modelo WM-260111, con potencia de 8500 W, motor 100 % de cobre puro, jarra principal de 2,5 litros y cuchillas de acero inoxidable. Ofrece control de velocidad variable, función Turbo y un accesorio para moler y picar. Cuenta con garantía de 3 años.',
      en: 'WM® 2-in-1 multifunction blender, model WM-260111, with 8500 W of power, a 100% pure copper motor, a 2.5-liter main jar and stainless-steel blades. Features variable speed control, a Turbo function and a grinding and chopping attachment. Backed by a 3-year warranty.',
    },
    seoTitle: {
      es: 'Licuadora Multifunción WM® 2 en 1 de 8500 W y 2,5 L | WM-260111',
      en: 'WM® 2-in-1 Multifunction Blender, 8500 W, 2.5 L | WM-260111',
    },
    seoDescription: {
      es: 'Licuadora WM® 2 en 1 de 8500 W con jarra de 2,5 litros, motor de cobre puro, cuchillas de acero inoxidable, velocidad variable, función Turbo y accesorio para moler y picar.',
      en: 'WM® 2-in-1 blender at 8500 W with a 2.5-liter jar, pure copper motor, stainless-steel blades, variable speed, Turbo function and a grinding and chopping attachment.',
    },
    benefits: [
      {
        icon: 'blend',
        title: { es: 'Sistema 2 en 1', en: '2-in-1 system' },
        description: {
          es: 'Licúa en la jarra principal y muele o pica con el accesorio incluido, usando la misma base motriz.',
          en: 'Blends in the main jar and grinds or chops with the included attachment, using the same motor base.',
        },
      },
      {
        icon: 'capacity',
        title: { es: 'Jarra principal de 2,5 L', en: '2.5L main jar' },
        description: {
          es: 'Capacidad amplia para preparar varias porciones de batidos, jugos, sopas y salsas en un solo ciclo.',
          en: 'Generous capacity to prepare several servings of smoothies, juices, soups and sauces in a single cycle.',
        },
      },
      {
        icon: 'motor',
        title: { es: 'Motor 100 % de cobre puro', en: '100% pure copper motor' },
        description: {
          es: 'Potencia de 8500 W para un desempeño estable y duradero.',
          en: '8500 W of power for stable, long-lasting performance.',
        },
      },
      {
        icon: 'controls',
        title: { es: 'Velocidad variable y Turbo', en: 'Variable speed and Turbo' },
        description: {
          es: 'Perilla de velocidad de MIN a MAX e interruptor Turbo para ajustar la potencia según la preparación.',
          en: 'A MIN-to-MAX speed dial and a Turbo switch to adjust power to each preparation.',
        },
      },
      {
        icon: 'blade',
        title: { es: 'Cuchillas de acero inoxidable', en: 'Stainless-steel blades' },
        description: {
          es: 'Diseñadas para procesar frutas, verduras y hielo con resultados uniformes.',
          en: 'Designed to process fruit, vegetables and ice with consistent results.',
        },
      },
    ],
    specifications: [
      { label: { es: 'Tipo de producto', en: 'Product type' }, value: { es: 'Licuadora multifunción', en: 'Multifunction blender' } },
      { label: { es: 'Configuración', en: 'Configuration' }, value: { es: '2 en 1: jarra principal y accesorio para moler y picar', en: '2-in-1: main jar and grinding and chopping attachment' } },
      { label: { es: 'Potencia', en: 'Power' }, value: { es: '8500 W', en: '8500 W' } },
      { label: { es: 'Capacidad (jarra principal)', en: 'Capacity (main jar)' }, value: { es: '2,5 litros', en: '2.5 liters' } },
      { label: { es: 'Motor', en: 'Motor' }, value: { es: '100 % cobre puro', en: '100% pure copper' } },
      { label: { es: 'Cuchillas', en: 'Blades' }, value: { es: 'Acero inoxidable', en: 'Stainless steel' } },
      { label: { es: 'Control', en: 'Control' }, value: { es: 'Perilla de velocidad variable (MIN–MAX), interruptor de encendido y botón Turbo', en: 'Variable speed dial (MIN–MAX), power switch and Turbo button' } },
      { label: { es: 'Contenido del empaque', en: 'Package contents' }, value: { es: 'Base motriz, jarra principal de 2,5 L, accesorio para moler y picar, varilla mezcladora y manual de usuario', en: 'Motor base, 2.5L main jar, grinding and chopping attachment, stirring rod and user manual' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Negro con acero inoxidable', en: 'Black with stainless steel' } },
      { label: { es: 'Certificación', en: 'Certification' }, value: { es: 'CE', en: 'CE' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { pending: true } },
      { label: { es: 'Material', en: 'Material' }, value: { pending: true } },
      { label: { es: 'Dimensiones', en: 'Dimensions' }, value: { pending: true } },
      { label: { es: 'Peso', en: 'Weight' }, value: { pending: true } },
    ],
    safetyAndQuality: [
      {
        es: 'Equipada con motor 100 % de cobre puro y cuchillas de acero inoxidable, seleccionados para un desempeño estable y mayor durabilidad.',
        en: 'Equipped with a 100% pure copper motor and stainless-steel blades, selected for stable performance and greater durability.',
      },
      {
        es: 'Utilice siempre la licuadora con la tapa correctamente colocada y desconéctela antes de retirar la jarra, cambiar de accesorio o manipular las cuchillas.',
        en: 'Always use the blender with the lid properly in place, and unplug it before removing the jar, changing attachments or handling the blades.',
      },
      {
        es: 'Cuenta con 3 años de garantía contra defectos de fabricación, conforme a sus términos y condiciones.',
        en: 'Backed by a 3-year warranty against manufacturing defects, subject to its terms and conditions.',
      },
    ],
    mainImage: {
      src: '/products/licuadora-multifuncion-2-en-1/licuadora2en1_1.jpg',
      alt: {
        es: 'Licuadora multifunción WM 2 en 1 en uso junto a una familia con batidos de frutas',
        en: 'WM 2-in-1 multifunction blender in use beside a family with fruit smoothies',
      },
    },
    gallery: [
      {
        src: '/products/licuadora-multifuncion-2-en-1/licuadora2en1_2.jpg',
        alt: {
          es: 'Licuadora WM 2 en 1 con hielo y fruta congelada en la jarra de 2,5 L, junto a un batido',
          en: 'WM 2-in-1 blender with ice and frozen fruit in the 2.5L jar, beside a smoothie',
        },
      },
      {
        src: '/products/licuadora-multifuncion-2-en-1/licuadora2en1_3.jpg',
        alt: {
          es: 'Accesorio para moler y picar de la licuadora WM 2 en 1 con café recién molido',
          en: 'Grinding and chopping attachment of the WM 2-in-1 blender with freshly ground coffee',
        },
      },
      {
        src: '/products/licuadora-multifuncion-2-en-1/licuadora2en1_4.jpg',
        alt: {
          es: 'Detalle del panel de control con perilla de velocidad variable y función turbo de la licuadora WM 2 en 1',
          en: 'Detail of the control panel with variable speed knob and turbo function of the WM 2-in-1 blender',
        },
      },
      {
        src: '/products/licuadora-multifuncion-2-en-1/licuadora2en1_5.jpg',
        alt: {
          es: 'Licuadora WM 2 en 1 con su jarra principal y el accesorio para picar con verduras',
          en: 'WM 2-in-1 blender with its main jar and the chopping attachment filled with vegetables',
        },
      },
    ],
    manualUrl: { pending: true, note: 'Manual del producto pendiente de proporcionar.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

/**
 * The product's best "in use" photo (as opposed to studio/packaging shots),
 * identified by existing alt-text convention ("en uso …") rather than a new
 * field — every product already tags its lifestyle shot this way. Used for
 * a large editorial moment on the product page; returns undefined rather
 * than falling back to a studio photo, so that section simply doesn't
 * render for a product that has no real lifestyle photography yet.
 */
export function getLifestyleImage(product: Product): ProductImage | undefined {
  const candidates = [product.mainImage, ...product.gallery];
  return candidates.find((img): img is ProductImage => !isPending(img) && /en uso/i.test(img.alt.es));
}
