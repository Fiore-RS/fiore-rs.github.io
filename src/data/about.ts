import type { Localized } from './types'

// Contenido de "Sobre mí" (portado del Portfolio anterior).

export const bio: { en: string[]; es: string[] } = {
  en: [
    'I design digital and visual brand experiences, from UX/UI and full-stack web apps to logos and brand identities.',
    "I'm a student at Universidad de Costa Rica, Sede del Pacífico. I like taking a project from its brand to its implementation: deciding how it should look and feel, and then building it.",
  ],
  es: [
    'Diseño experiencias digitales y de marca visual, desde UX/UI y aplicaciones web full-stack hasta logos e identidades de marca.',
    'Soy estudiante de la Universidad de Costa Rica, Sede del Pacífico. Me gusta llevar un proyecto desde su marca hasta su implementación: decidir cómo debe verse y sentirse, y después construirlo.',
  ],
}

export interface ExperienceEntry {
  title: Localized
  years: Localized
  role: Localized
  description: Localized
  /** slug del caso de estudio, si existe */
  slug?: string
}

export const experience: ExperienceEntry[] = [
  {
    title: { en: 'Teleo', es: 'Teleo' },
    years: { en: '2026 - Present', es: '2026 - Presente' },
    role: { en: 'Solo Designer & Developer', es: 'Diseñadora y Desarrolladora Única' },
    description: {
      en: 'Designing and building a private, ad-free reading journal web app end to end, from UX to a Supabase-backed database.',
      es: 'Diseñando y construyendo un diario de lectura privado y sin anuncios de principio a fin, desde la UX hasta una base de datos con Supabase.',
    },
    slug: 'teleo',
  },
  {
    title: { en: 'Hack GB', es: 'Hack GB' },
    years: { en: '2026', es: '2026' },
    role: { en: 'Design Team Support', es: 'Apoyo al Equipo de Diseño' },
    description: {
      en: "Designed the phoenix logo and brand mark for UW-Green Bay's hackathon in one week, ahead of the sponsor outreach deadline.",
      es: 'Diseñé el logo y la marca del fénix para el hackathon de UW-Green Bay en una semana, antes de la fecha límite de búsqueda de patrocinadores.',
    },
    slug: 'hack-gb',
  },
  {
    title: { en: 'PyCon LATAM 2025', es: 'PyCon LATAM 2025' },
    years: { en: '2025', es: '2025' },
    role: { en: 'Freelance Brand Designer', es: 'Diseñadora de Marca Freelance' },
    description: {
      en: 'Corrected the event logo and built the complete brand manual, supervised by my design professor.',
      es: 'Corregí el logo del evento y construí el manual de marca completo, supervisado por mi profesora de diseño.',
    },
    slug: 'pycon-latam-2025',
  },
]

export const quote: Localized = { en: 'Sometimes, less is more.', es: 'A veces, menos es más.' }

// Apartado "El logo" al final de Sobre mí: qué significa cada parte del símbolo.
export const logoStory: {
  title: Localized
  intro: Localized
  parts: { mark: string; name: Localized; text: Localized }[]
} = {
  title: { en: 'A flower made of code', es: 'Una flor hecha de código' },
  intro: {
    en: "Fiore means flower, so my brand starts there: a lotus, my favorite flower. Instead of drawing its petals, I built them out of what I use every day when I code.",
    es: 'Fiore significa flor, así que mi marca empieza por ahí: un loto, mi flor favorita. En vez de dibujar sus pétalos, los armé con lo que uso todos los días al programar.',
  },
  parts: [
    {
      mark: '{ }',
      name: { en: 'The braces', es: 'Las llaves' },
      text: {
        en: 'Two curly braces lying down, one inside the other, become the leaves.',
        es: 'Dos llaves acostadas, una dentro de otra, forman las hojas.',
      },
    },
    {
      mark: '◆',
      name: { en: 'The diamond', es: 'El diamante' },
      text: {
        en: 'The bud of the flower. It is the part that is still about to open.',
        es: 'El botón de la flor. Es la parte que todavía está por abrirse.',
      },
    },
  ],
}
