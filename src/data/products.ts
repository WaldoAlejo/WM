import type { Product, ProductImage } from '../types';
import { isPending } from '../types';

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
    model: 'WM-2680I',
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Batidora de inmersión WM® 5 en 1 con motor de cobre puro de 400 W y velocidad de hasta 10.000 RPM. Incluye brazo mezclador, recipiente picador, batidor de globo, espumador de leche y vaso de 0,8 litros. Cuenta con modo Turbo y garantía de 3 años.',
      en: 'WM® 5-in-1 immersion blender with a 400 W pure copper motor and speeds up to 10,000 RPM. Includes a blending arm, chopper bowl, whisk attachment, milk frother and a 0.8-liter cup. Features Turbo mode and a 3-year warranty.',
    },
    seoTitle: {
      es: 'Batidora de inmersión WM® 5 en 1 de 400 W | WM-2680I',
      en: 'WM® 5-in-1 Immersion Blender, 400 W | WM-2680I',
    },
    seoDescription: {
      es: 'Batidora de inmersión WM® 5 en 1 con potencia de 400 W, hasta 10.000 RPM, función Turbo, picador, batidor, espumador y vaso de 0,8 litros.',
      en: 'WM® 5-in-1 immersion blender with 400 W power, up to 10,000 RPM, Turbo function, chopper, whisk, frother and 0.8L cup.',
    },
    benefits: [
      {
        title: { es: 'Licúa y mezcla', en: 'Blends and mixes' },
        description: {
          es: 'El brazo de inmersión con campana metálica prepara batidos, cremas, sopas, purés y salsas directamente en el recipiente, con menos salpicaduras.',
          en: 'The immersion arm with a metal guard prepares smoothies, creams, soups, purées and sauces directly in the container, with less splashing.',
        },
      },
      {
        title: { es: 'Pica y procesa', en: 'Chops and processes' },
        description: {
          es: 'El recipiente picador procesa pequeñas porciones de vegetales, cebolla, tomate, hierbas y frutas; su tapa se acopla directo a la unidad motriz.',
          en: 'The chopper bowl processes small portions of vegetables, onion, tomato, herbs and fruit; its lid attaches directly to the motor unit.',
        },
      },
      {
        title: { es: 'Bate', en: 'Whisks' },
        description: {
          es: 'El batidor de globo facilita huevos, crema, merengues y mezclas ligeras de repostería.',
          en: 'The whisk attachment makes quick work of eggs, cream, meringues and light pastry mixes.',
        },
      },
      {
        title: { es: 'Espuma', en: 'Froths' },
        description: {
          es: 'El espumador airea leche y otras bebidas para capuchinos, café y chocolate cremosos.',
          en: 'The frother aerates milk and other drinks for creamy cappuccinos, coffee and hot chocolate.',
        },
      },
      {
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
      { label: { es: 'Potencia', en: 'Power' }, value: { es: '400 W', en: '400 W' } },
      { label: { es: 'Velocidad máxima', en: 'Maximum speed' }, value: { es: '10.000 RPM', en: '10,000 RPM' } },
      { label: { es: 'Motor', en: 'Motor' }, value: { es: 'Bobinado de cobre puro', en: 'Pure copper winding' } },
      { label: { es: 'Modos de funcionamiento', en: 'Operating modes' }, value: { es: 'Regular y Turbo', en: 'Regular and Turbo' } },
      { label: { es: 'Capacidad del vaso', en: 'Cup capacity' }, value: { es: '0,8 litros', en: '0.8 liters' } },
      { label: { es: 'Color', en: 'Color' }, value: { es: 'Negro con detalles plateados', en: 'Black with silver details' } },
      { label: { es: 'Brazo mezclador', en: 'Blending arm' }, value: { es: 'Metálico y desmontable', en: 'Metal, detachable' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { es: '110V, 60Hz', en: '110V, 60Hz' } },
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
      src: '/products/batidora-inmersion-5-en-1/gallery-2.jpg',
      alt: {
        es: 'Batidora de inmersión WM en uso preparando una sopa',
        en: 'WM immersion blender in use preparing a soup',
      },
    },
    gallery: [
      {
        src: '/products/batidora-inmersion-5-en-1/main.jpg',
        alt: {
          es: 'Batidora de inmersión WM 5 en 1 con accesorios y empaque',
          en: 'WM 5-in-1 immersion blender with accessories and packaging',
        },
      },
      {
        src: '/products/batidora-inmersion-5-en-1/gallery-1.jpg',
        alt: {
          es: 'Usos de la batidora de inmersión WM: licuar, picar, batir y espumar',
          en: 'Uses of the WM immersion blender: blending, chopping, whisking and frothing',
        },
      },
      {
        src: '/products/batidora-inmersion-5-en-1/gallery-3.jpg',
        alt: {
          es: 'Accesorios de la batidora de inmersión WM: picadora, batidor globo, espumador y vaso',
          en: 'WM immersion blender accessories: chopper, whisk, frother and cup',
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
        title: { es: 'Mayor capacidad', en: 'Greater capacity' },
        description: {
          es: 'La jarra de 2 litros permite preparar varias porciones de bebidas, mezclas o alimentos en un solo ciclo.',
          en: 'The 2-liter jar lets you prepare multiple servings of drinks, mixes or food in a single cycle.',
        },
      },
      {
        title: { es: 'Menor percepción de ruido', en: 'Lower perceived noise' },
        description: {
          es: 'La cabina transparente ayuda a reducir el ruido que se proyecta hacia el exterior durante el funcionamiento.',
          en: 'The transparent shield helps reduce the noise projected outward during operation.',
        },
      },
      {
        title: { es: 'Control práctico', en: 'Convenient control' },
        description: {
          es: 'El panel táctil permite manejar las funciones desde una superficie digital limpia y de fácil acceso.',
          en: "The touch panel lets you manage functions from a clean, easy-to-reach digital surface.",
        },
      },
      {
        title: { es: 'Visualización permanente', en: 'Constant visibility' },
        description: {
          es: 'La jarra y la cabina transparentes permiten controlar visualmente la consistencia de la preparación.',
          en: 'The transparent jar and shield let you visually check the consistency of the preparation.',
        },
      },
      {
        title: { es: 'Repuesto incluido', en: 'Spare part included' },
        description: {
          es: 'El conjunto adicional de cuchillas brinda una solución de respaldo para extender la vida útil del producto.',
          en: "The extra blade set provides a backup solution to extend the product's useful life.",
        },
      },
      {
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
      { label: { es: 'Jarra', en: 'Jar' }, value: { es: 'Transparente y graduada, escala visible de 200 a 2.000 ml', en: 'Clear and graduated, visible scale from 200 to 2,000 ml' } },
      { label: { es: 'Reducción de ruido', en: 'Noise reduction' }, value: { es: 'Cabina transparente exterior', en: 'Outer transparent shield' } },
      { label: { es: 'Accesorios', en: 'Accessories' }, value: { es: 'Conjunto de cuchillas adicional incluido', en: 'Extra blade set included' } },
      { label: { es: 'Colores', en: 'Colors' }, value: { es: 'Negro, plateado y transparente', en: 'Black, silver and clear' } },
      { label: { es: 'Voltaje', en: 'Voltage' }, value: { es: '110V, 60Hz', en: '110V, 60Hz' } },
      { label: { es: 'Material', en: 'Material' }, value: { pending: true } },
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
      src: '/products/licuadora-profesional/gallery-2.jpg',
      alt: {
        es: 'Licuadora profesional WM en uso preparando un batido de frutos rojos',
        en: 'WM professional blender in use preparing a berry smoothie',
      },
    },
    gallery: [
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
        title: { es: 'Una olla para diferentes recetas', en: 'One pot for many recipes' },
        description: {
          es: 'Sus programas permiten preparar arroz, sopas, carnes, vegetales, granos y otras comidas sin utilizar diferentes electrodomésticos.',
          en: 'Its programs let you prepare rice, soups, meats, vegetables, grains and other dishes without using different appliances.',
        },
      },
      {
        title: { es: 'Cuerpo de acero inoxidable', en: 'Stainless-steel body' },
        description: {
          es: 'Resistente y fácil de limpiar, para un uso confiable día a día.',
          en: 'Durable and easy to clean, for reliable everyday use.',
        },
      },
      {
        title: { es: 'Capacidad familiar', en: 'Family-size capacity' },
        description: {
          es: 'El recipiente de 6 litros ofrece espacio para cocinar varias porciones en una sola preparación.',
          en: 'The 6-liter pot offers room to cook several servings in a single preparation.',
        },
      },
      {
        title: { es: 'Control sencillo', en: 'Simple control' },
        description: {
          es: 'El panel digital reúne las principales funciones en botones claramente identificados y menús ilustrados.',
          en: 'The digital panel brings together the main functions in clearly labeled buttons and illustrated menus.',
        },
      },
      {
        title: { es: 'Mantiene la comida caliente', en: 'Keeps food warm' },
        description: {
          es: 'La función Warm permite conservar la temperatura de los alimentos después de la preparación.',
          en: 'The Warm function keeps food at temperature after cooking.',
        },
      },
      {
        title: { es: 'Recipiente fácil de retirar', en: 'Easy-to-remove pot' },
        description: {
          es: 'La olla interior se puede extraer para servir los alimentos y facilitar la limpieza.',
          en: 'The inner pot can be lifted out to serve food and make cleaning easier.',
        },
      },
      {
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
          es: 'Arroz, sopas, carnes, cocción lenta, papillas/porridge, cocción abierta, vegetales, multigranos, yogur, vapor, saltear, salsas, hornear, purés y otras consistencias',
          en: 'Rice, soups, meats, slow cook, porridge, open cook, vegetables, multigrain, yogurt, steam, sauté, sauce, bake, purées and other consistencies',
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
        es: 'Olla de presión multifunción WM en uso, en una cocina con platos de arroz, sopa y carne',
        en: 'WM multifunction pressure cooker in use, in a kitchen with rice, soup and meat dishes',
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
    ],
    manualUrl: { pending: true, note: 'Manual del producto pendiente de proporcionar.' },
    specSheetUrl: { pending: true, note: 'Ficha técnica pendiente de proporcionar.' },
    featured: true,
  },
  {
    id: 'p04',
    slug: 'freidora-de-aire-multifuncion-10l',
    name: { es: 'Freidora de Aire Multifunción 10L', en: '10L Multifunction Air Fryer' },
    model: 'WM-05121977',
    categorySlug: 'categoria-01',
    shortDescription: {
      es: 'Freidora de aire multifunción WM® de 10 litros, modelo WM-05121977, con amplio visor de vidrio templado, pantalla digital con seis menús preestablecidos y sistema de calentamiento envolvente de 360° con tecnología de infrarrojo lejano. Su resistencia interna es de cobre puro, para un desempeño confiable y duradero. Acabado en negro con detalles en tono metálico.',
      en: 'WM® 10L multifunction air fryer, model WM-05121977, with a large tempered-glass viewing window, a digital display with six preset menus, and a 360° surround far-infrared heating system. Its internal heating element is pure copper, for dependable, long-lasting performance. Finished in black with stainless-toned accents.',
    },
    seoTitle: {
      es: 'Freidora de Aire Multifunción WM® de 10L | WM-05121977',
      en: 'WM® 10L Multifunction Air Fryer | WM-05121977',
    },
    seoDescription: {
      es: 'La freidora de aire multifunción WM-05121977 de 10L ofrece un amplio visor, seis programas digitales, calentamiento envolvente, tecnología infrarrojo lejano y una generosa capacidad familiar.',
      en: 'The WM-05121977 10L multifunction air fryer offers a large viewing window, six digital presets, surround heating, far-infrared technology and generous family capacity.',
    },
    benefits: [
      {
        title: { es: 'Capacidad de 10L', en: 'Generous 10L capacity' },
        description: {
          es: 'Capacidad amplia de 10 litros, pensada para porciones a escala familiar.',
          en: 'Generous 10-liter capacity for family-scale portions.',
        },
      },
      {
        title: { es: 'Amplio visor de vidrio templado', en: 'Large tempered-glass viewing window' },
        description: {
          es: 'Permite observar con claridad el proceso de cocción.',
          en: 'Offers clear visibility of the cooking process.',
        },
      },
      {
        title: { es: 'Pantalla digital inteligente', en: 'Intelligent digital display' },
        description: {
          es: 'Con seis menús preestablecidos, para seleccionar y monitorear recetas favoritas con facilidad.',
          en: 'With six convenient preset menus, making favorite recipes easier to select and monitor.',
        },
      },
      {
        title: { es: 'Calentamiento envolvente 360° e infrarrojo lejano', en: '360° surround and far-infrared heating' },
        description: {
          es: 'Diseñado para distribuir el calor de manera uniforme en toda la cámara de cocción.',
          en: 'Designed to circulate heat evenly throughout the cooking chamber.',
        },
      },
      {
        title: { es: 'Resistencia interna de cobre puro', en: 'Pure-copper internal heating wire' },
        description: {
          es: 'Favorece un desempeño confiable y duradero.',
          en: 'Supports dependable, long-lasting performance.',
        },
      },
      {
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
      src: '/products/freidora-de-aire-multifuncion-10l/main.jpg',
      alt: {
        es: 'Freidora de aire multifunción WM de 10L con visor de vidrio templado y panel digital',
        en: 'WM 10L multifunction air fryer with tempered-glass viewing window and digital panel',
      },
    },
    gallery: [
      {
        src: '/products/freidora-de-aire-multifuncion-10l/gallery-1.jpg',
        alt: {
          es: 'Freidora de aire multifunción WM en uso en una cocina familiar, preparando pollo',
          en: 'WM multifunction air fryer in use in a family kitchen, cooking chicken',
        },
      },
      {
        src: '/products/freidora-de-aire-multifuncion-10l/gallery-2.jpg',
        alt: {
          es: 'Detalle del panel digital, la cesta extraíble y la resistencia de cobre de la freidora de aire WM',
          en: 'Detail of the digital panel, removable basket and copper heating element of the WM air fryer',
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
        title: { es: 'Capacidad de 12L en blanco', en: 'Expansive 12L capacity in white' },
        description: {
          es: 'Capacidad amplia en un acabado blanco elegante.',
          en: 'Generous capacity in an elegant white finish.',
        },
      },
      {
        title: { es: 'Unidad superior negra de control inteligente', en: 'Top-mounted black smart-touch control' },
        description: {
          es: 'Unidad de control y calentamiento distintiva, montada en la parte superior.',
          en: 'A distinctive control and heating unit mounted on top.',
        },
      },
      {
        title: { es: 'Detalles cobre-naranja', en: 'Copper-orange accent trim' },
        description: {
          es: 'Acabado refinado que aporta un sello visual premium.',
          en: 'A refined finish for a premium visual signature.',
        },
      },
      {
        title: { es: 'Programas multifunción', en: 'Multi-function programs' },
        description: {
          es: 'Freír, hornear, asar, grillar y recalentar.',
          en: 'Frying, baking, roasting, grilling and reheating.',
        },
      },
      {
        title: { es: 'Calentamiento envolvente 3D', en: '3D surround heating' },
        description: {
          es: 'Circulación equilibrada para un dorado uniforme y atractivo.',
          en: 'Balanced circulation for even, appealing browning.',
        },
      },
      {
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
      src: '/products/freidora-de-aire-multifuncion-12l/main.jpg',
      alt: {
        es: 'Freidora de aire multifunción WM blanca de 12L con unidad de control negra y detalles cobre',
        en: 'WM white 12L multifunction air fryer with black control unit and copper accents',
      },
    },
    gallery: [
      {
        src: '/products/freidora-de-aire-multifuncion-12l/gallery-1.jpg',
        alt: {
          es: 'Freidora de aire multifunción WM en uso en una cocina familiar, preparando pollo',
          en: 'WM multifunction air fryer in use in a family kitchen, cooking chicken',
        },
      },
      {
        src: '/products/freidora-de-aire-multifuncion-12l/gallery-2.jpg',
        alt: {
          es: 'Freidora de aire multifunción WM en uso preparando papas fritas, alitas y vegetales',
          en: 'WM multifunction air fryer in use preparing fries, wings and vegetables',
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
        title: { es: 'Jarra de vidrio', en: 'Glass jar' },
        description: {
          es: 'Resistente y libre de olores, con pico vertedor y asa integrada.',
          en: 'Durable and odor-free, with a pour spout and integrated handle.',
        },
      },
      {
        title: { es: 'Control por perilla giratoria', en: 'Rotary speed dial' },
        description: {
          es: 'Ajuste sencillo e intuitivo de la velocidad.',
          en: 'Simple, intuitive speed adjustment.',
        },
      },
      {
        title: { es: 'Cuchillas de acero inoxidable removibles', en: 'Removable stainless steel blades' },
        description: {
          es: 'Facilitan la limpieza y el mantenimiento del equipo.',
          en: 'Make cleaning and maintaining the unit easier.',
        },
      },
      {
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
      src: '/products/licuadora-vidrio-hogar/main.jpg',
      alt: {
        es: 'Licuadora WM con jarra de vidrio y base de acero inoxidable',
        en: 'WM blender with glass jar and stainless steel base',
      },
    },
    gallery: [
      {
        src: '/products/licuadora-vidrio-hogar/gallery-1.jpg',
        alt: {
          es: 'Detalle de la perilla de control, la jarra de vidrio y las cuchillas removibles de la licuadora WM',
          en: 'Detail of the control dial, glass jar and removable blades of the WM blender',
        },
      },
      {
        src: '/products/licuadora-vidrio-hogar/gallery-2.jpg',
        alt: {
          es: 'Licuadora WM en uso preparando batidos de fruta en una cocina',
          en: 'WM blender in use preparing fruit smoothies in a kitchen',
        },
      },
      {
        src: '/products/licuadora-vidrio-hogar/gallery-3.jpg',
        alt: {
          es: 'Licuadora WM en uso preparando una salsa fresca',
          en: 'WM blender in use preparing a fresh sauce',
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
        title: { es: 'Cámara de vidrio de alto borosilicato', en: 'High-borosilicate glass chamber' },
        description: {
          es: 'Resistente al calor y pensada para uso diario; permite ver el proceso de cocción sin necesidad de abrir la canasta.',
          en: 'Heat-resistant and built for everyday use; lets you watch the cooking process without opening the basket.',
        },
      },
      {
        title: { es: '6 programas preestablecidos', en: '6 preset programs' },
        description: {
          es: 'Un toque para papas fritas, bistec, muslo de pollo, mariscos, pescado y tartaletas, con pantalla de tiempo y temperatura.',
          en: 'One touch for French fries, steak, chicken drumstick, seafood, fish and egg tarts, with a time and temperature display.',
        },
      },
      {
        title: { es: 'Calentamiento envolvente 360° e infrarrojo lejano', en: '360° surround and far-infrared heating' },
        description: {
          es: 'Distribuye el calor de manera uniforme en toda la cámara, para un resultado dorado por fuera y jugoso por dentro, con menos aceite.',
          en: 'Circulates heat evenly throughout the chamber, for results that are crispy outside and juicy inside, with less oil.',
        },
      },
      {
        title: { es: 'Capacidad de 4L', en: '4L capacity' },
        description: {
          es: 'Un tamaño compacto, pensado para porciones individuales o para dos personas.',
          en: 'A compact size, suited for single or two-person portions.',
        },
      },
      {
        title: { es: 'Detalles en acabado cobre', en: 'Copper-toned accents' },
        description: {
          es: 'El asa y el anillo superior en tono cobre le dan un sello visual distintivo.',
          en: 'The handle and top ring in a copper tone give it a distinctive visual signature.',
        },
      },
      {
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
      src: '/products/freidora-de-aire-vidrio-4l/main.jpg',
      alt: {
        es: 'Freidora de aire de vidrio WM en uso, con papas fritas y vegetales',
        en: 'WM glass air fryer in use, with fries and vegetables',
      },
    },
    gallery: [
      {
        src: '/products/freidora-de-aire-vidrio-4l/gallery-1.jpg',
        alt: {
          es: 'Freidora de aire de vidrio WM en negro, con detalles en cobre',
          en: 'WM glass air fryer in black, with copper-toned accents',
        },
      },
      {
        src: '/products/freidora-de-aire-vidrio-4l/gallery-2.jpg',
        alt: {
          es: 'Freidora de aire de vidrio WM en blanco, con detalles en cobre',
          en: 'WM glass air fryer in white, with copper-toned accents',
        },
      },
      {
        src: '/products/freidora-de-aire-vidrio-4l/gallery-3.jpg',
        alt: {
          es: 'Freidora de aire de vidrio WM en uso, preparando pollo y vegetales',
          en: 'WM glass air fryer in use, cooking chicken and vegetables',
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
        title: { es: 'Motor 100% de cobre puro', en: '100% pure copper motor' },
        description: {
          es: 'Ofrece un desempeño confiable y una mayor durabilidad.',
          en: 'Delivers reliable performance and greater durability.',
        },
      },
      {
        title: { es: '3 formas de uso', en: '3 ways to use it' },
        description: {
          es: 'El mismo cabezal se instala en pared, sobre una base de pie o en un soporte de piso de ángulo bajo, según lo que necesites.',
          en: 'The same fan head mounts on a wall, on a stand base, or on a low-angle floor stand, depending on what you need.',
        },
      },
      {
        title: { es: 'Aspas metálicas de 18 pulgadas', en: '18-inch metal blades' },
        description: {
          es: '5 aspas de metal en tono azul, diseñadas para un movimiento de aire óptimo.',
          en: '5 metal blades in a blue tone, engineered for optimal air movement.',
        },
      },
      {
        title: { es: 'Flujo de aire potente', en: 'Powerful airflow' },
        description: {
          es: 'Una brisa fuerte y constante para mayor comodidad.',
          en: 'A strong, consistent breeze for maximum comfort.',
        },
      },
      {
        title: { es: 'Altura ajustable en modo de pie', en: 'Adjustable height in stand mode' },
        description: {
          es: 'El tubo telescópico permite subir o bajar el ventilador a la altura que prefieras.',
          en: 'The telescoping pole lets you raise or lower the fan to the height you prefer.',
        },
      },
      {
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
