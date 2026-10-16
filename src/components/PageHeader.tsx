import type { CSSProperties, ReactNode } from 'react'

interface Props {
  label: string
  title: string
  intro?: string
  children?: ReactNode
  /** Retraso inicial de la entrada, en ms (para cuando hay algo antes, como la foto en Sobre mí). */
  delay?: number
}

/** Paso entre un elemento y el siguiente, igual que en el home. */
const STEP = 80

/**
 * Encabezado común de las páginas internas: etiqueta, título grande e introducción.
 * La etiqueta, el título y la introducción entran uno a uno, como en el home.
 */
export default function PageHeader({ label, title, intro, children, delay = 0 }: Props) {
  const at = (i: number): CSSProperties => ({ animationDelay: `${delay + i * STEP}ms` })

  return (
    <header>
      <p className="label flex animate-rise items-center gap-3 text-acento" style={at(0)}>
        <span className="h-px w-8 bg-acento" aria-hidden="true" />
        {label}
      </p>
      <h1
        className="display mt-4 animate-rise text-[clamp(2.6rem,8vw,5rem)] leading-[0.92] lg:text-[clamp(2.4rem,3.7vw,3.2rem)]"
        style={at(1)}
      >
        {title}
      </h1>
      {intro && (
        <p className="mt-5 max-w-[38rem] animate-rise text-[17px] leading-relaxed text-crema/75" style={at(2)}>
          {intro}
        </p>
      )}
      {/* lo que va debajo (p. ej. los filtros del Archivo) aparece fijo, sin animación, como en el home */}
      {children}
    </header>
  )
}
