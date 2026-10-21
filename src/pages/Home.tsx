import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import FilterChips from '../components/FilterChips'
import { featuredProjects } from '../data/projects'
import { site } from '../data/site'
import { ui, useT } from '../i18n/ui'
import { useCarousel } from '../lib/useCarousel'
import { filterProjects, type Filter } from '../lib/catalog'

const pad = (n: number) => String(n).padStart(2, '0')

export default function Home() {
  const { t } = useT()
  const [filter, setFilter] = useState<Filter>('all')
  const visible = useMemo(() => filterProjects(featuredProjects, filter), [filter])
  const carousel = useCarousel(visible.length, filter)
  const [first, last] = site.nombre.split(' ')

  const choose = (key: Filter) => {
    setFilter(key)
    carousel.reset()
  }

  return (
    <section className="mx-auto grid w-full max-w-[1440px] gap-y-8 px-4 py-10 sm:px-8 lg:grid-cols-[minmax(0,30rem)_minmax(0,1fr)] lg:grid-rows-[1fr_auto_auto] lg:gap-x-12 lg:px-10 lg:py-12 fit:min-h-0 fit:flex-1 fit:grid-rows-[minmax(0,1fr)_auto_auto_auto_minmax(0,1fr)] fit:py-[clamp(1.5rem,4vh,3rem)] xl:gap-x-16">
      {/* Presentación */}
      {/* en modo `fit`, presentación + filtros + acciones forman un bloque centrado verticalmente */}
      <div className="lg:self-center fit:row-start-2">
        <p className="label flex animate-rise items-center gap-3 text-acento">
          <span className="h-px w-8 bg-acento" aria-hidden="true" />
          {t(ui.hero.role)}
        </p>
        <h1 className="display mt-5 text-[clamp(2.75rem,11vw,4.6rem)] leading-[0.92] lg:text-[clamp(3.4rem,5vw,4.9rem)]">
          <span className="block animate-rise [animation-delay:80ms]">{first}</span>
          <span className="block animate-rise bg-gradient-to-r from-crema to-lila bg-clip-text text-transparent [animation-delay:160ms]">
            {last}
          </span>
        </h1>
        <p className="mt-7 max-w-[34rem] animate-rise text-[17px] leading-relaxed text-crema/75 [animation-delay:240ms]">
          {t(ui.hero.bio)}
        </p>
      </div>

      {/* Filtros */}
      <FilterChips active={filter} onChange={choose} className="lg:col-start-1 lg:row-start-2 fit:row-start-3" />

      {/* Carrusel: en pantallas grandes llega hasta el borde derecho de la ventana y la última tarjeta
          visible queda cortada, para que se note que se puede deslizar */}
      <div className="-mx-4 min-w-0 sm:-mx-8 lg:col-start-2 lg:row-span-3 lg:row-start-1 fit:row-span-5 lg:ml-0 lg:mr-[calc(-1*((100vw-min(100vw,1440px))/2+2.5rem))] lg:self-center fit:flex fit:min-h-0 fit:items-center fit:self-stretch animate-slide [animation-delay:200ms]">
        {/* el carrusel entra completo una sola vez; al cambiar de filtro, la lista solo hace un fundido */}
        <ul
          key={filter}
          ref={carousel.ref}
          aria-label={t(ui.work.carouselLabel)}
          className="no-scrollbar flex w-full animate-fade snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:scroll-px-8 sm:gap-5 sm:px-8 lg:scroll-px-0 lg:px-0 lg:[--card:clamp(18.5rem,calc((100vw-36rem)/2.45),28rem)] fit:h-full"
        >
          {visible.map((project, i) => (
            <li
              key={project.slug}
              className="w-[min(84vw,25rem)] shrink-0 snap-start lg:w-[var(--card)] fit:flex fit:h-full fit:flex-col fit:justify-center"
            >
              <ProjectCard project={project} eager={i < 2} />
            </li>
          ))}
          {/* espacio final para que la última tarjeta también pueda quedar al frente */}
          <li aria-hidden="true" className="hidden shrink-0 lg:block lg:w-[calc(100%-var(--card)-2.5rem)]" />
        </ul>
      </div>

      {/* Acciones */}
      <div className="flex flex-wrap items-center justify-between gap-5 lg:col-start-1 lg:row-start-3 fit:row-start-4">
        <Link
          to="/archive"
          className="label inline-flex h-12 items-center gap-2.5 rounded-md bg-acento px-6 font-medium text-sobre-acento shadow-[0_10px_40px_-10px_rgb(var(--acento)/0.5)] transition-colors hover:bg-acento-claro"
        >
          {t(ui.hero.cta)}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>

        <div className="order-first flex items-center gap-4 sm:order-none">
          <button
            type="button"
            onClick={carousel.prev}
            disabled={carousel.atStart}
            aria-label={t(ui.work.prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-acento/60 text-acento transition-colors hover:bg-acento hover:text-sobre-acento disabled:cursor-not-allowed disabled:border-borde disabled:text-borde disabled:hover:bg-transparent"
          >
            <ArrowLeft size={17} />
          </button>
          <p className="label w-16 text-center tabular-nums text-bruma" aria-live="polite">
            <span className="text-crema">{pad(carousel.index + 1)}</span> / {pad(visible.length)}
          </p>
          <button
            type="button"
            onClick={carousel.next}
            disabled={carousel.atEnd}
            aria-label={t(ui.work.next)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-acento/60 text-acento transition-colors hover:bg-acento hover:text-sobre-acento disabled:cursor-not-allowed disabled:border-borde disabled:text-borde disabled:hover:bg-transparent"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  )
}
