export type ProjectCategory = 'branding' | 'web'

/** Portadas generadas (SVG/CSS) para las apps — ver components/AppCover.tsx. */
export type AppCoverVariant = 'teleo' | 'sobres'

export interface Localized {
  en: string
  es: string
}

export interface Project {
  id: string
  slug: string
  /** Opcional: si no se conoce el año exacto, se omite. */
  year?: string
  /** Una o dos líneas para la tarjeta del carrusel. */
  blurb: Localized
  title: Localized
  /** p. ej. "Manual de marca", "Aplicación web" */
  type: Localized
  category: ProjectCategory
  /** Portada real (proyectos de branding). */
  image?: string
  /** Portada generada para apps (cuando no hay `image`). */
  cover?: AppCoverVariant
  timeline: Localized
  role: Localized
  /** Separadas por coma: "Figma, Adobe Creative Cloud" */
  tools: Localized
  overview: { en: string[]; es: string[] }
  gallery?: { image?: string; alt: Localized }[]
  summary: Localized
  /** Documento descargable (p. ej. el manual de marca en PDF). */
  pdf?: { path: string; label: Localized }
  /** Enlace a la app en vivo. */
  liveUrl?: { url: string; label: Localized }
  liveNote?: Localized
}
