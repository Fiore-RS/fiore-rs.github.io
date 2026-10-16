import type { Localized } from './types'

// Servicios, precios base y términos (portado de "Contrátame" del Portfolio anterior).

export const availability = {
  days: { en: 'Monday - Friday', es: 'Lunes a viernes' },
  hours: { en: '9:00 AM - 7:00 PM (Costa Rica time)', es: '9:00 AM - 7:00 PM (hora de Costa Rica)' },
}

export interface Package {
  name: Localized
  price: string
  description: Localized
}

export const packageGroups: { title: Localized; packages: Package[] }[] = [
  {
    title: { en: 'Web design & development', es: 'Diseño y desarrollo web' },
    packages: [
      {
        name: { en: 'Landing page', es: 'Landing page' },
        price: '$150',
        description: {
          en: 'A single-page site: hero, a few content sections, contact form. Responsive, no backend.',
          es: 'Un sitio de una sola página: hero, algunas secciones de contenido, formulario de contacto. Responsive, sin backend.',
        },
      },
      {
        name: { en: 'Multi-page website', es: 'Sitio web multipágina' },
        price: '$350',
        description: {
          en: '4-6 pages (e.g. home, about, services, contact). Responsive, basic SEO setup.',
          es: '4-6 páginas (ej. inicio, sobre mí, servicios, contacto). Responsive, configuración básica de SEO.',
        },
      },
      {
        name: { en: 'Small full-stack app', es: 'App full-stack pequeña' },
        price: '$500',
        description: {
          en: 'Personal tools, trackers, or small platforms with auth and a database, like Teleo. Does not cover large-scale apps (e-commerce, payments, AI chat features, etc.).',
          es: 'Herramientas personales, rastreadores o plataformas pequeñas con autenticación y base de datos, como Teleo. No incluye aplicaciones a gran escala (compras en línea, pagos, chats de asistente con IA, etc.).',
        },
      },
    ],
  },
  {
    title: { en: 'Graphic design & branding', es: 'Diseño gráfico y branding' },
    packages: [
      {
        name: { en: 'Logo design', es: 'Diseño de logo' },
        price: '$80',
        description: {
          en: 'A handful of concepts narrowed to one final logo, delivered as vector + PNG files.',
          es: 'Un puñado de conceptos reducidos a un logo final, entregado en archivos vectoriales + PNG.',
        },
      },
      {
        name: { en: 'Logo + brand manual', es: 'Logo + manual de marca' },
        price: '$180',
        description: {
          en: 'Logo plus a brand guide: color palette, typography, and usage rules, like PyCon LATAM 2025.',
          es: 'Logo más una guía de marca: paleta de colores, tipografía y reglas de uso, como PyCon LATAM 2025.',
        },
      },
      {
        name: { en: 'Full identity & mockups', es: 'Identidad completa y mockups' },
        price: '$350',
        description: {
          en: 'Complete identity system with real-world applications (apparel, signage, packaging, etc.).',
          es: 'Sistema de identidad completo con aplicaciones reales (ropa, señalización, empaques, etc.).',
        },
      },
    ],
  },
]

export const terms: { title: Localized; detail: Localized }[] = [
  {
    title: { en: 'Scope & revisions', es: 'Alcance y revisiones' },
    detail: {
      en: 'Each package includes an agreed number of concepts and two rounds of revisions. Changes beyond the original scope are quoted separately.',
      es: 'Cada paquete incluye un número acordado de conceptos y dos rondas de revisión. Los cambios fuera del alcance original se cotizan aparte.',
    },
  },
  {
    title: { en: 'Payment', es: 'Pago' },
    detail: {
      en: '50% deposit to begin, 50% due on final delivery. Work starts once the deposit is received.',
      es: '50% de adelanto para iniciar, 50% al momento de la entrega final. El trabajo comienza al recibir el adelanto.',
    },
  },
  {
    title: { en: 'Timeline', es: 'Tiempos de entrega' },
    detail: {
      en: 'Estimated timelines assume timely feedback. Slow feedback from the client may push back the delivery date.',
      es: 'Los tiempos estimados asumen retroalimentación oportuna. Una respuesta lenta del cliente puede atrasar la fecha de entrega.',
    },
  },
  {
    title: { en: 'Usage rights', es: 'Derechos de uso' },
    detail: {
      en: 'Full usage rights transfer to the client on final payment. Editable source files are provided on request.',
      es: 'Los derechos de uso completos pasan al cliente al recibir el pago final. Los archivos editables se entregan a solicitud.',
    },
  },
  {
    title: { en: 'Cancellation', es: 'Cancelación' },
    detail: {
      en: 'If a project is cancelled after work has started, the deposit is non-refundable to cover time already invested.',
      es: 'Si un proyecto se cancela después de haber iniciado, el adelanto no es reembolsable, para cubrir el tiempo ya invertido.',
    },
  },
]
