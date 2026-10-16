import type { ReactNode } from 'react'

interface Props {
  /** Columna izquierda: queda fija en pantallas grandes. */
  aside: ReactNode
  /** Columna derecha: es la única que hace scroll en pantallas grandes. */
  children: ReactNode
}

/**
 * Esquema de dos columnas de las páginas internas (Archivo, Sobre mí, Habilidades, Contacto).
 * Con el breakpoint `fit` (pantalla grande y con suficiente alto) la página encaja en la ventana:
 * la izquierda queda fija y solo la derecha se desliza. En pantallas chicas todo va apilado.
 * App.tsx debe incluir la ruta en `fitsViewport` para que esto funcione.
 * Entrada: los elementos de la izquierda suben uno a uno (ver PageHeader) y la derecha entra
 * deslizándose desde la derecha, igual que el carrusel del home.
 */
export default function SplitLayout({ aside, children }: Props) {
  return (
    <section className="mx-auto grid w-full max-w-[1440px] gap-y-10 px-4 pb-20 pt-10 sm:px-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-x-12 lg:px-10 lg:pt-14 xl:gap-x-20 fit:min-h-0 fit:flex-1 fit:grid-rows-[minmax(0,1fr)] fit:py-0">
      {/* si la ventana es baja y no cabe, la izquierda también puede deslizarse */}
      <div className="scroll-fino fit:max-h-full fit:self-center fit:overflow-y-auto fit:py-8">{aside}</div>

      {/* se desvanece arriba y abajo para insinuar que hay más contenido */}
      <div className="scroll-fino animate-slide [animation-delay:200ms] fit:min-h-0 fit:overflow-y-auto fit:py-10 fit:pr-4 fit:[mask-image:linear-gradient(to_bottom,transparent,black_2.5rem,black_calc(100%-3.5rem),transparent)]">
        {children}
      </div>
    </section>
  )
}
