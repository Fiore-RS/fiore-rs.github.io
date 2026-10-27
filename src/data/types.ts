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
  /**
   * Proporción de los recuadros de la galería (valor CSS de aspect-ratio). Por defecto '4 / 3'.
   * Todas las imágenes se recortan a esta forma en la galería; el lightbox muestra la imagen completa.
   */
  galleryAspect?: string
  summary: Localized
  /** Documento descargable (p. ej. el manual de marca en PDF). */
  pdf?: { path: string; label: Localized }
  /** Enlace externo: la app en vivo o, en branding, el sitio donde se usa la marca. */
  liveUrl?: {
    url: string
    /** Texto del botón en el caso de estudio. */
    label: Localized
    /** Texto corto para la tarjeta y el archivo. Si falta, se usa "Abrir app". */
    short?: Localized
  }
  liveNote?: Localized
  /** Cuenta de prueba pública para entrar a la app sin registrarse (p. ej. Teleo). */
  demoAccess?: {
    email: string
    password: string
    /** Aviso corto debajo, p. ej. que se reinicia cada noche. */
    note: Localized
  }
  /** Enlaces externos adicionales, solo en el caso de estudio (botones secundarios). */
  extraLinks?: { url: string; label: Localized }[]
}
