import type { Localized } from './types'

// Habilidades (portado de "Oficio y herramientas" del Portfolio anterior).

export interface SkillGroup {
  title: Localized
  items: { en: string[]; es: string[] }
}

export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'UX/UI strategy', es: 'Estrategia UX/UI' },
    items: {
      en: ['User research & synthesis', 'Information architecture', 'Interactive prototyping'],
      es: ['Investigación y síntesis de usuarios', 'Arquitectura de información', 'Prototipado interactivo'],
    },
  },
  {
    title: { en: 'Visual design', es: 'Diseño visual' },
    items: {
      en: ['Design systems', 'Brand identity & logos', 'Typography & color theory'],
      es: ['Sistemas de diseño', 'Identidad de marca y logos', 'Tipografía y teoría del color'],
    },
  },
  {
    title: { en: 'Development', es: 'Desarrollo' },
    items: {
      en: ['React, TypeScript & Tailwind', 'Node.js / Express & PostgreSQL', 'Git, GitHub & deployment'],
      es: ['React, TypeScript y Tailwind', 'Node.js / Express y PostgreSQL', 'Git, GitHub y despliegue'],
    },
  },
]
