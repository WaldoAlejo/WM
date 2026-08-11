import { brand, productLine } from './company';

/**
 * Centralized site copy (es). Mirrored 1:1 by content.en.ts — both are
 * consumed through the useContent() hook so components never import a
 * static locale directly.
 */
export const content = {
  home: {
    seoTitle: 'Inicio',
  },
  hero: {
    title: 'Diseñados para hacer mejor tu hogar.',
    subtitle:
      'Productos funcionales, duraderos y contemporáneos, respaldados por 3 años de garantía.',
    cta: 'Conocer productos',
    trustPoints: [
      '3 años de garantía en todos los productos',
      'Atención directa para distribuidores y empresas',
      'Calidad verificada en cada producto',
    ],
  },
  categories: {
    heading: 'Categorías',
    subheading: 'Explora nuestra línea de productos para el hogar.',
  },
  featured: {
    heading: 'Productos destacados',
    subheading: 'Una selección de nuestro catálogo.',
    cta: 'Ver todos los productos',
  },
  quality: {
    heading: 'Calidad, seguridad y diseño',
    subheading: 'Cada producto WM se desarrolla bajo un mismo estándar.',
    points: [
      {
        title: 'Diseño contemporáneo',
        description: 'Formas limpias y materiales pensados para durar, dentro y fuera de casa.',
      },
      {
        title: 'Calidad verificada',
        description: 'Procesos de control pensados para un desempeño confiable en el tiempo.',
      },
      {
        title: 'Respaldo real',
        description: 'Acompañamiento y garantía sobre cada producto que llevas a tu hogar.',
      },
    ],
  },
  warrantyHome: {
    heading: 'Tres años de garantía',
    body: 'Todos los productos WM incluyen tres años de garantía contra defectos de fabricación.',
    cta: 'Conocer condiciones de garantía',
  },
  contactCta: {
    heading: '¿Tienes alguna consulta?',
    body: 'Escríbenos y con gusto te ayudamos a resolver tus dudas sobre nuestros productos.',
    cta: 'Ir a contacto',
  },
  productsPage: {
    title: 'Productos',
    intro: `Catálogo completo de productos ${brand.name} — ${productLine.name}.`,
    searchPlaceholder: 'Buscar productos…',
    featuredBadge: 'Destacado',
    categoryAllLabel: 'Todas las categorías',
    noResults: 'No se encontraron productos con esos criterios.',
    filterAriaLabel: 'Filtrar por categoría',
  },
  productDetail: {
    benefitsHeading: 'Beneficios principales',
    specsHeading: 'Especificaciones técnicas',
    safetyHeading: 'Seguridad y calidad',
    galleryHeading: 'Galería',
    relatedHeading: 'Productos relacionados',
    inquiryCta: 'Consultar sobre este producto',
    manualCta: 'Descargar manual (PDF)',
    manualPending: 'Manual por confirmar',
    specSheetCta: 'Descargar ficha técnica (PDF)',
    specSheetPending: 'Ficha técnica por confirmar',
    pendingField: 'Por confirmar',
    modelLabel: 'Modelo',
    modelPending: 'Modelo por confirmar',
    descriptionPending: 'Descripción por confirmar',
    safetyPending: 'Información de seguridad y calidad por confirmar',
    breadcrumbSeparator: '/',
    galleryAriaLabel: 'Galería de imágenes',
  },
  warrantyPage: {
    title: 'Garantía',
    intro: 'Información sobre la garantía de tres años que respalda a todos los productos WM.',
    coverageHeading: '¿Qué cubre?',
    coverageBody:
      'La garantía limitada de tres años cubre defectos de fabricación, materiales o funcionamiento que se presenten durante el uso normal de los productos WM®. Después de la evaluación técnica, podemos reparar el producto, sustituir las piezas afectadas o realizar el reemplazo correspondiente, según cada caso. No cubre daños ocasionados por uso inadecuado, golpes, caídas, ingreso de líquidos en componentes eléctricos, variaciones de voltaje, instalación incorrecta, desgaste natural o reparaciones realizadas por personal no autorizado. Para validar la garantía se requiere el comprobante de compra.',
    howToHeading: 'Cómo solicitar asistencia',
    howToBody:
      'Envía tu solicitud a contact@wmglobalcorp.com con: nombre completo y número de contacto, ciudad donde te encuentras, modelo y número de serie del producto, comprobante de compra, descripción detallada del inconveniente, y fotografías o un video donde pueda observarse la falla. Nuestro equipo revisará la información y te enviará las instrucciones para la evaluación del producto. No envíes ni entregues el equipo antes de recibir la confirmación correspondiente.',
    formHeading: 'Formulario de consulta de garantía',
    formIntro:
      'Completa el formulario y adjunta directamente tu comprobante de compra y fotografías o video de la falla — no es necesario que también envíes un correo aparte.',
    subjectOptions: [
      'Reparación o revisión técnica',
      'Reemplazo de piezas',
      'Reemplazo del producto',
      'Consulta general de garantía',
      'Otro motivo',
    ],
    coveragePending: 'Condiciones de cobertura por confirmar',
    howToPending: 'Procedimiento de asistencia por confirmar',
  },
  aboutPage: {
    title: 'Nosotros',
    seoDescription: 'Presentación corporativa de WM: propuesta de valor, estándar de calidad y garantía.',
    intro: [
      'WM® es una marca internacional comprometida con ofrecer productos funcionales, confiables y fabricados bajo criterios claros de calidad.',
      'Nuestra propuesta nace de una idea sencilla: un buen producto debe demostrar su valor no solamente en su apariencia, sino también en sus materiales, componentes, funcionamiento, acabados y durabilidad.',
      'Por eso, cada producto que lleva la marca WM® debe responder a un mismo estándar, independientemente de su categoría o del mercado en el que se comercialice.',
    ],
    valueHeading: 'Nuestra propuesta de valor',
    valueBody: [
      'En WM® entendemos que la verdadera calidad se encuentra tanto en lo que se puede ver como en aquello que está dentro de cada producto.',
      'Prestamos especial atención a los componentes internos, la resistencia de los materiales, la precisión del ensamblaje y la calidad de los acabados. Cuando el producto incorpora motor, priorizamos bobinados 100 % de cobre; además, seleccionamos plásticos resistentes y componentes adecuados para ofrecer un funcionamiento confiable y una mayor durabilidad.',
      'No buscamos competir únicamente por el precio más bajo. Buscamos ofrecer una mejor relación entre calidad, funcionalidad, diseño, duración y respaldo.',
      'Nuestro propósito es que elegir WM® represente una compra inteligente y confiable.',
    ],
    standardHeading: 'El estándar WM®',
    standardIntro: 'Para llevar nuestra marca, cada producto debe cumplir principios fundamentales:',
    standardPoints: [
      'Funcionalidad real y facilidad de uso.',
      'Componentes cuidadosamente seleccionados.',
      'Materiales resistentes y adecuados para su función.',
      'Ensamblaje preciso y construcción confiable.',
      'Acabados limpios y cuidadosamente terminados.',
      'Diseño contemporáneo.',
      'Información clara y transparente.',
      'Respaldo antes y después de la compra.',
    ],
    standardClosing:
      'Estos criterios nos permiten mantener una identidad de calidad consistente y ofrecer una experiencia en la que nuestros clientes puedan confiar.',
    qualityHeading: 'Calidad que respaldamos',
    qualityBody: [
      'Nuestra garantía de 3 años no es solamente una promesa comercial. Es una expresión de la confianza que depositamos en la calidad, los componentes y la construcción de los productos que llevan nuestra marca.',
      'Queremos que nuestros clientes tengan la tranquilidad de saber que su compra cuenta con orientación, asistencia y un respaldo responsable, conforme a los términos y condiciones de la garantía.',
      'Para WM®, la relación con el cliente no termina con la venta. Continúa durante la experiencia de uso del producto.',
    ],
    visionHeading: 'Nuestra visión internacional',
    visionBody: [
      'WM® nace con una visión global: construir una marca capaz de mantener sus principios de calidad, funcionalidad y respaldo en diferentes mercados.',
      'Trabajamos para crecer de manera responsable, fortalecer continuamente nuestros estándares y establecer relaciones de largo plazo con consumidores, distribuidores y clientes corporativos.',
      'Nuestro objetivo es consolidar WM® como una marca internacional reconocida por hacer las cosas bien y por ofrecer productos en los que las personas puedan confiar.',
    ],
    tagline: 'WM® — Calidad que se nota. Respaldo que permanece.',
    introPending: 'Presentación corporativa por confirmar',
    contactClosingPrefix: 'Para más información, escríbenos a',
    contactClosingOr: 'o visita',
  },
  contactPage: {
    title: 'Contacto',
    intro:
      '¿Tienes alguna consulta sobre nuestros productos, garantía, soporte o distribución? Elige una opción abajo y nuestro equipo revisará tu solicitud para brindarte la orientación correspondiente.',
    categoriesHeading: '¿En qué podemos ayudarte?',
    categories: {
      warranty: {
        title: 'Garantía',
        description:
          'Solicita reparación, reemplazo de piezas o asistencia técnica bajo garantía. Podrás adjuntar tu comprobante de compra y fotos o video de la falla.',
        cta: 'Ir a Garantía',
      },
      support: {
        title: 'Servicio al cliente',
        description: 'Soporte técnico, repuestos y accesorios, o cualquier consulta sobre un producto que ya tienes.',
        subjectOptions: ['Soporte técnico', 'Repuestos y accesorios', 'Otro motivo'],
      },
      sales: {
        title: 'Ventas y productos',
        description: 'Información sobre productos, distribución, ventas corporativas u otras consultas comerciales.',
        subjectOptions: ['Información sobre productos', 'Distribución y ventas corporativas', 'Información comercial', 'Otro motivo'],
      },
    },
    backToCategories: 'Elegir otro motivo',
    selectCta: 'Seleccionar',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Nombre y apellido',
      email: 'Correo electrónico',
      emailPlaceholder: 'correo@ejemplo.com',
      phone: 'Teléfono',
      phonePlaceholder: '+593 000 000 000',
      phoneOptional: 'Opcional',
      subject: 'Asunto',
      subjectPlaceholder: 'Selecciona el motivo de tu consulta',
      model: 'Modelo y número de serie',
      modelPlaceholder: 'Ej. WM-26007',
      modelOptional: 'Opcional',
      city: 'Ciudad',
      cityPlaceholder: 'Tu ciudad',
      cityOptional: 'Opcional',
      message: 'Mensaje',
      messagePlaceholder:
        'Describe detalladamente cómo podemos ayudarte. Si tu consulta está relacionada con un producto, incluye el modelo, número de serie y una descripción del caso.',
      attachmentsLabel: 'Documentos adjuntos',
      attachmentsOptional: 'Opcional',
      attachmentsHint:
        'Comprobante de compra, fotografías o video de la falla — útil especialmente para solicitudes de garantía. Formatos: JPG, PNG, PDF o video. Máximo 5 archivos.',
      attachmentsButton: 'Seleccionar archivos',
      attachmentsEmpty: 'Ningún archivo seleccionado.',
      attachmentsRemove: 'Quitar',
      attachmentsTooMany: 'Puedes adjuntar hasta 5 archivos.',
      privacyLabel:
        'He leído y acepto la Política de privacidad y autorizo el tratamiento de mis datos para atender esta solicitud.',
      submit: 'Enviar mensaje',
      submitting: 'Enviando…',
      successTitle: 'Tu mensaje fue enviado correctamente.',
      success: 'Hemos recibido tu solicitud. Nuestro equipo revisará la información y responderá al correo electrónico proporcionado.',
      errorTitle: 'No fue posible enviar tu mensaje.',
      error:
        'Verifica que los campos obligatorios estén completos e inténtalo nuevamente. También puedes escribirnos directamente a contact@wmglobalcorp.com.',
      required: 'Este campo es obligatorio.',
      invalidEmail: 'Ingresa un correo electrónico válido.',
      privacyRequired: 'Debes aceptar la política de privacidad para continuar.',
    },
    infoHeading: 'Otros medios de contacto',
    infoItems: {
      emailHeading: 'Correo electrónico',
      emailDescription: 'Para consultas sobre productos, garantía, soporte, distribución y ventas corporativas.',
      websiteHeading: 'Sitio web',
      websiteDescription:
        'Consulta información sobre nuestros productos, condiciones de garantía y canales de asistencia.',
      hoursHeading: 'Horario de atención',
      hoursDescription:
        'Hora de Ecuador continental, GMT-5. Los mensajes enviados fuera de este horario serán revisados durante la siguiente jornada de atención.',
    },
    emailPending: 'Correo por confirmar',
    phonePending: 'Teléfono por confirmar',
    hoursPending: 'Horario por confirmar',
  },
  footer: {
    rightsReserved: 'Todos los derechos reservados.',
    navHeading: 'Navegación',
    contactHeading: 'Contacto',
    followHeading: 'Síguenos',
    emailPending: 'Correo por confirmar',
    phonePending: 'Teléfono por confirmar',
  },
  warrantyBadge: {
    label: 'AÑOS',
    sub: 'GARANTÍA',
  },
  notFound: {
    eyebrow: 'Error 404',
    title: 'Página no encontrada',
    body: 'La página que buscas no existe o fue movida a otra ubicación.',
    cta: 'Volver al inicio',
  },
  common: {
    pendingLabel: 'Por confirmar',
    skipToContent: 'Saltar al contenido principal',
    mainNavAriaLabel: 'Navegación principal',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    homeAriaLabel: 'WM — Inicio',
    breadcrumbAriaLabel: 'Ruta de navegación',
    warrantyBadgeAlt: 'Sello oficial: 3 años de garantía',
  },
  languageSwitcher: {
    label: 'Idioma',
  },
  productPhoto: {
    placeholderLabel: 'Fotografía del producto',
    placeholderHint: 'PNG/WebP · fondo transparente',
  },
} as const;
