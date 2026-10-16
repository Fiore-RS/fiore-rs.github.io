// Símbolo de fiorers.dev: un loto hecho de dos llaves { } anidadas, con el botón en diamante.
// Hereda el color del texto (text-crema, text-ciruela…); el diamante va en acento salvo con `mono`.
const HOJAS = '36,80 64,108 64,114 74,124 100,124 120,144 140,124 166,124 176,114 176,108 204,80 204,124 172,156 142,156 120,178 98,156 68,156 36,124'
const PETALOS = '64,45 86,67 86,71 94,79 104,79 120,95 136,79 146,79 154,71 154,67 176,45 176,79 152,103 138,103 120,121 102,103 88,103 64,79'
const BOTON = '120,22 145,47 120,72 95,47'

type LogoProps = {
  className?: string
  /** Texto para lectores de pantalla. Sin título, el logo es decorativo. */
  title?: string
  /** Todo en un solo color (sin diamante en acento). */
  mono?: boolean
}

export default function Logo({ className, title, mono = false }: LogoProps) {
  return (
    <svg
      viewBox="36 22 168 156"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <polygon points={HOJAS} fill="currentColor" />
      <polygon points={PETALOS} fill="currentColor" />
      <polygon points={BOTON} className={mono ? undefined : 'fill-acento'} fill={mono ? 'currentColor' : undefined} />
    </svg>
  )
}
