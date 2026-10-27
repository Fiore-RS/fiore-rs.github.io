import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigationType } from 'react-router'
import { ArrowUpRight, FileDown } from 'lucide-react'
import AppCover from '../components/AppCover'
import FilterChips from '../components/FilterChips'
import PageHeader from '../components/PageHeader'
import SplitLayout from '../components/SplitLayout'
import { catalogNumber, filterProjects, projectsByDate, type Filter } from '../lib/catalog'
import { ui, useT } from '../i18n/ui'

const categoryLabel = { branding: ui.work.branding, web: ui.work.web }

/* Al volver de un caso de estudio (atrás del navegador), el Archivo regresa al mismo filtro y
 * al mismo punto de la lista. Se guarda en sessionStorage: el scroll de la ventana (pantallas
 * chicas) y el de la columna derecha (pantallas grandes, donde solo esa columna se desliza). */
const FILTER_KEY = 'archive-filter'
const SCROLL_KEY = 'archive-scroll'

function readStored(key: string): string | null {
  try {
    return sessionStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStored(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value)
  } catch {
    // Sin almacenamiento: al volver, el Archivo simplemente empieza arriba.
  }
}

/** Catálogo completo de proyectos, del más reciente al más antiguo. */
export default function Archive() {
  const { t } = useT()
  const navigationType = useNavigationType()
  // El filtro guardado solo se recupera al volver; entrar desde el menú empieza en "Todos".
  const [filter, setFilter] = useState<Filter>(() =>
    {
      const stored = navigationType === 'POP' ? readStored(FILTER_KEY) : null
      return stored === 'branding' || stored === 'web' ? stored : 'all'
    },
  )
  const list = useMemo(() => filterProjects(projectsByDate, filter), [filter])
  const contentRef = useRef<HTMLDivElement>(null)

  function changeFilter(next: Filter) {
    setFilter(next)
    writeStored(FILTER_KEY, next)
  }

  // Guarda el scroll mientras se desliza (ventana y columna).
  useEffect(() => {
    const content = contentRef.current
    let frame = 0
    function save() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        writeStored(SCROLL_KEY, JSON.stringify({ win: window.scrollY, col: content?.scrollTop ?? 0 }))
      })
    }
    window.addEventListener('scroll', save, { passive: true })
    content?.addEventListener('scroll', save, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', save)
      content?.removeEventListener('scroll', save)
    }
  }, [])

  // Al volver, lo devuelve. Un cuadro después, porque App.tsx lleva cada página nueva arriba.
  useEffect(() => {
    if (navigationType !== 'POP') return
    const raw = readStored(SCROLL_KEY)
    if (!raw) return
    let saved: { win: number; col: number }
    try {
      saved = JSON.parse(raw)
    } catch {
      return
    }
    const frame = requestAnimationFrame(() => {
      window.scrollTo(0, saved.win)
      if (contentRef.current) contentRef.current.scrollTop = saved.col
    })
    return () => cancelAnimationFrame(frame)
  }, [navigationType])

  return (
    <SplitLayout
      contentRef={contentRef}
      aside={
        <PageHeader label={t(ui.nav.archive)} title={t(ui.archive.title)} intro={t(ui.archive.intro)}>
          <FilterChips active={filter} onChange={changeFilter} className="mt-8" />
        </PageHeader>
      }
    >
      {list.length === 0 ? (
        <p className="text-crema/70">{t(ui.archive.empty)}</p>
      ) : (
        <ol key={filter} className="animate-fade border-t border-borde">
          {list.map((project) => (
            <li
              key={project.slug}
              className="group relative grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-4 gap-y-3 border-b border-borde py-5 sm:grid-cols-[4rem_10rem_minmax(0,1fr)] sm:gap-x-5 lg:py-6"
            >
              <span className="label hidden pt-1 text-bruma sm:block">{catalogNumber(project.slug)}</span>

              {/* miniatura */}
              <div className="relative aspect-[16/10] self-start overflow-hidden rounded-md border border-borde">
                {project.image ? (
                  <img src={project.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                ) : project.cover ? (
                  <div className="absolute inset-0 origin-top-left scale-[0.5] [height:200%] [width:200%]">
                    <AppCover variant={project.cover} />
                  </div>
                ) : null}
              </div>

              <div className="min-w-0">
                <p className="label text-[10px] text-bruma">
                  <span className="sm:hidden">{catalogNumber(project.slug)} / </span>
                  {t(categoryLabel[project.category])} / {t(project.type)}
                </p>
                <h2 className="display mt-1.5 text-xl leading-tight sm:text-2xl">
                  {/* el enlace cubre toda la fila */}
                  <Link
                    to={`/work/${project.slug}`}
                    className="transition-colors after:absolute after:inset-0 group-hover:text-acento"
                  >
                    {t(project.title)}
                  </Link>
                </h2>
                <p className="mt-1.5 hidden max-w-[40rem] text-[15px] leading-relaxed text-crema/65 md:block">
                  {t(project.blurb)}
                </p>

                <div className="relative z-10 mt-3 flex flex-wrap items-center gap-2">
                  {project.year && <span className="label mr-2 text-bruma">{project.year}</span>}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl.url}
                      target="_blank"
                      rel="noreferrer"
                      className="label inline-flex h-8 items-center gap-1.5 rounded-md border border-borde px-3 text-[10px] text-crema/85 transition-colors hover:border-acento/60 hover:text-crema"
                    >
                      {t(project.liveUrl.short ?? ui.work.liveApp)}
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  )}
                  {project.pdf && (
                    <a
                      href={project.pdf.path}
                      target="_blank"
                      rel="noreferrer"
                      className="label inline-flex h-8 items-center gap-1.5 rounded-md border border-borde px-3 text-[10px] text-crema/85 transition-colors hover:border-acento/60 hover:text-crema"
                    >
                      <FileDown size={12} aria-hidden="true" />
                      {t(ui.archive.pdf)}
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </SplitLayout>
  )
}
