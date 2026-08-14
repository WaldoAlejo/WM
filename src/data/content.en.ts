import { brand, productLine } from './company';

/**
 * Centralized site copy (en). Mirrored 1:1 by content.es.ts — both are
 * consumed through the useContent() hook so components never import a
 * static locale directly.
 */
export const content = {
  home: {
    seoTitle: 'Home',
  },
  hero: {
    title: 'Designed to make your home better.',
    subtitle: 'Functional, durable and contemporary products, backed by a 3-year warranty.',
    cta: 'Explore products',
    trustPoints: [
      '3-year warranty on every product',
      'Direct support for distributors and businesses',
      'Verified quality in every product',
    ],
  },
  categories: {
    heading: 'Categories',
    subheading: 'Explore our product line for the home.',
  },
  featured: {
    heading: 'Featured products',
    subheading: 'A selection from our catalog.',
    cta: 'View all products',
  },
  quality: {
    heading: 'Quality, safety and design',
    subheading: 'Every WM product is developed under the same standard.',
    points: [
      {
        title: 'Contemporary design',
        description: 'Clean shapes and materials built to last, indoors and out.',
      },
      {
        title: 'Verified quality',
        description: 'Control processes built for reliable performance over time.',
      },
      {
        title: 'Real backing',
        description: 'Support and warranty on every product you bring into your home.',
      },
    ],
  },
  warrantyHome: {
    heading: 'Three-year warranty',
    body: 'Every WM product includes a three-year warranty against manufacturing defects.',
    cta: 'See warranty terms',
  },
  contactCta: {
    heading: 'Have a question?',
    body: "Write to us and we'll gladly help resolve any questions about our products.",
    cta: 'Go to contact',
  },
  productsPage: {
    title: 'Products',
    intro: `Full catalog of ${brand.name} — ${productLine.name} products.`,
    searchPlaceholder: 'Search products…',
    featuredBadge: 'Featured',
    categoryAllLabel: 'All categories',
    noResults: 'No products found matching those criteria.',
    filterAriaLabel: 'Filter by category',
  },
  productDetail: {
    benefitsHeading: 'Key benefits',
    specsHeading: 'Technical specifications',
    safetyHeading: 'Safety and quality',
    galleryHeading: 'Gallery',
    relatedHeading: 'Related products',
    inquiryCta: 'Ask about this product',
    manualCta: 'Download manual (PDF)',
    manualPending: 'Manual to be confirmed',
    specSheetCta: 'Download spec sheet (PDF)',
    specSheetPending: 'Spec sheet to be confirmed',
    pendingField: 'To be confirmed',
    modelLabel: 'Model',
    modelPending: 'Model to be confirmed',
    descriptionPending: 'Description to be confirmed',
    safetyPending: 'Safety and quality information to be confirmed',
    breadcrumbSeparator: '/',
    galleryAriaLabel: 'Image gallery',
  },
  warrantyPage: {
    title: 'Warranty',
    intro: 'Information about the three-year warranty that backs every WM product.',
    coverageHeading: 'What is covered?',
    coverageBody:
      "The 3-year limited warranty covers manufacturing, material or functional defects arising during normal use of WM® products. After technical evaluation, we may repair the product, replace the affected parts, or issue a replacement, depending on the case. It does not cover damage caused by misuse, impacts, drops, liquid entering electrical components, voltage fluctuations, incorrect installation, normal wear, or repairs carried out by unauthorized personnel. Proof of purchase is required to validate the warranty.",
    howToHeading: 'How to request assistance',
    howToBody:
      'Send your request to contact@wmglobalcorp.com with: your full name and a contact number, the city where you are located, the product model and serial number, proof of purchase, a detailed description of the issue, and photos or a video showing the fault. Our team will review the information and send you instructions for the product evaluation. Do not ship or hand over the equipment before receiving confirmation.',
    formHeading: 'Warranty inquiry form',
    formIntro:
      "Fill out the form and attach your proof of purchase and photos or video of the issue directly — no need to also send a separate email.",
    subjectOptions: [
      'Repair or technical inspection',
      'Parts replacement',
      'Product replacement',
      'General warranty inquiry',
      'Other reason',
    ],
    coveragePending: 'Coverage terms to be confirmed',
    howToPending: 'Assistance procedure to be confirmed',
  },
  aboutPage: {
    title: 'About us',
    seoDescription: 'Corporate presentation of WM: value proposition, quality standard and warranty.',
    intro: [
      'WM® is an international brand committed to offering functional, reliable products manufactured under clear quality criteria.',
      'Our approach comes from a simple idea: a good product must prove its worth not only in its appearance, but also in its materials, components, performance, finishes and durability.',
      'That is why every product carrying the WM® brand must meet the same standard, regardless of its category or the market where it is sold.',
    ],
    valueHeading: 'Our value proposition',
    valueBody: [
      'At WM® we understand that true quality is found both in what can be seen and in what lies inside every product.',
      'We pay close attention to internal components, material strength, assembly precision and finish quality. When a product includes a motor, we prioritize 100% copper windings; we also select resistant plastics and suitable components to deliver reliable performance and greater durability.',
      "We don't compete solely on the lowest price. We aim to offer a better balance of quality, functionality, design, longevity and support.",
      'Our purpose is for choosing WM® to represent a smart, reliable purchase.',
    ],
    standardHeading: 'The WM® standard',
    standardIntro: 'To carry our brand, every product must meet fundamental principles:',
    standardPoints: [
      'Real functionality and ease of use.',
      'Carefully selected components.',
      'Resistant materials suited to their function.',
      'Precise assembly and reliable construction.',
      'Clean, carefully finished detailing.',
      'Contemporary design.',
      'Clear, transparent information.',
      'Support before and after the purchase.',
    ],
    standardClosing:
      'These criteria let us maintain a consistent quality identity and offer an experience our customers can trust.',
    qualityHeading: 'Quality we stand behind',
    qualityBody: [
      'Our 3-year warranty is not just a commercial promise. It is an expression of the confidence we place in the quality, components and construction of the products that carry our brand.',
      'We want our customers to have peace of mind knowing their purchase comes with guidance, assistance and responsible support, in accordance with the warranty terms and conditions.',
      "For WM®, the relationship with the customer doesn't end with the sale. It continues throughout the product's use.",
    ],
    visionHeading: 'Our international vision',
    visionBody: [
      'WM® was born with a global vision: to build a brand capable of upholding its principles of quality, functionality and support across different markets.',
      'We work to grow responsibly, continuously strengthen our standards, and build long-term relationships with consumers, distributors and corporate clients.',
      'Our goal is to establish WM® as an international brand recognized for doing things right and for offering products people can trust.',
    ],
    tagline: 'WM® — Quality you can feel. Support that lasts.',
    introPending: 'Corporate presentation to be confirmed',
    contactClosingPrefix: 'For more information, write to us at',
    contactClosingOr: 'or visit',
  },
  contactPage: {
    title: 'Contact',
    intro:
      'Have a question about our products, warranty, support or distribution? Choose an option below and our team will review your request to provide the right guidance.',
    categoriesHeading: 'How can we help you?',
    categories: {
      warranty: {
        title: 'Warranty',
        description:
          'Request a repair, parts replacement or technical assistance under warranty. You can attach your proof of purchase and photos or video of the issue.',
        cta: 'Go to Warranty',
      },
      support: {
        title: 'Customer service',
        description: 'Technical support, parts and accessories, or any question about a product you already own.',
        subjectOptions: ['Technical support', 'Parts and accessories', 'Other reason'],
      },
      sales: {
        title: 'Sales and products',
        description: 'Product information, distribution, corporate sales or other business inquiries.',
        subjectOptions: ['Product information', 'Distribution and corporate sales', 'Business information', 'Other reason'],
      },
    },
    backToCategories: 'Choose a different reason',
    selectCta: 'Select',
    form: {
      name: 'Name',
      namePlaceholder: 'First and last name',
      email: 'Email',
      emailPlaceholder: 'email@example.com',
      phone: 'Phone',
      phonePlaceholder: '+1 000 000 0000',
      phoneOptional: 'Optional',
      subject: 'Subject',
      subjectPlaceholder: 'Select the reason for your inquiry',
      model: 'Model and serial number',
      modelPlaceholder: 'E.g. WM-26007',
      modelOptional: 'Optional',
      city: 'City',
      cityPlaceholder: 'Your city',
      cityOptional: 'Optional',
      message: 'Message',
      messagePlaceholder:
        'Describe in detail how we can help. If your inquiry is about a product, please include the model, serial number and a description of the issue.',
      attachmentsLabel: 'Attachments',
      attachmentsOptional: 'Optional',
      attachmentsHint:
        'Proof of purchase, photos or video of the issue — especially useful for warranty requests. Formats: JPG, PNG, PDF or video. Maximum 5 files.',
      attachmentsButton: 'Choose files',
      attachmentsEmpty: 'No files selected.',
      attachmentsRemove: 'Remove',
      attachmentsTooMany: 'You can attach up to 5 files.',
      privacyLabel: 'I have read and accept the Privacy Policy and authorize the processing of my data to handle this request.',
      submit: 'Send message',
      submitting: 'Sending…',
      successTitle: 'Your message was sent successfully.',
      success: "We've received your request. Our team will review it and reply to the email address you provided.",
      errorTitle: "We couldn't send your message.",
      error:
        'Check that all required fields are complete and try again. You can also write to us directly at contact@wmglobalcorp.com.',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email address.',
      privacyRequired: 'You must accept the privacy policy to continue.',
    },
    infoHeading: 'Other ways to reach us',
    infoItems: {
      emailHeading: 'Email',
      emailDescription: 'For questions about products, warranty, support, distribution and corporate sales.',
      websiteHeading: 'Website',
      websiteDescription: 'Find information about our products, warranty terms and support channels.',
      hoursHeading: 'Business hours',
      hoursDescription:
        'Continental Ecuador time, GMT-5. Messages sent outside these hours will be reviewed the next business day.',
    },
    emailPending: 'Email to be confirmed',
    phonePending: 'Phone to be confirmed',
    hoursPending: 'Hours to be confirmed',
  },
  footer: {
    rightsReserved: 'All rights reserved.',
    navHeading: 'Navigation',
    contactHeading: 'Contact',
    followHeading: 'Follow us',
    emailPending: 'Email to be confirmed',
    phonePending: 'Phone to be confirmed',
  },
  warrantyBadge: {
    label: 'YEARS',
    sub: 'WARRANTY',
  },
  notFound: {
    eyebrow: 'Error 404',
    title: 'Page not found',
    body: 'The page you are looking for does not exist or was moved.',
    cta: 'Back to home',
  },
  common: {
    pendingLabel: 'To be confirmed',
    skipToContent: 'Skip to main content',
    mainNavAriaLabel: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    homeAriaLabel: 'WM — Home',
    breadcrumbAriaLabel: 'Breadcrumb',
    warrantyBadgeAlt: 'Official seal: 3-year warranty',
    openSearch: 'Search products',
    closeSearch: 'Close search',
    searchSubmit: 'Search',
  },
  languageSwitcher: {
    label: 'Language',
  },
  productPhoto: {
    placeholderLabel: 'Product photograph',
    placeholderHint: 'PNG/WebP · transparent background',
  },
} as const;
