import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, FileDown } from 'lucide-react'
import AppCover from '../components/AppCover'
import FilterChips from '../components/FilterChips'
import PageHeader from '../components/PageHeader'
import SplitLayout from '../components/SplitLayout'
import { catalogNumber, filterProjects, projectsByDate, type Filter } from '../lib/catalog'
import { ui, useT } from '../i18n/ui'

const categoryLabel = { branding: ui.work.branding, web: ui.work.web }

/** Catálogo completo de proyectos, del más reciente al más antiguo. */
export default function Archive() {
  const { t } = useT()
  const [filter, setFilter] = useState<Filter>('all')
  const list = useMemo(() => filterProjects(projectsByDate, filter), [filter])

  return (
    <SplitLayout
      aside={
        <PageHeader label={t(ui.nav.archive)} title={t(ui.archive.title)} intro={t(ui.archive.intro)}>
          <FilterChips active={filter} onChange={setFilter} className="mt-8" />
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
                      {t(ui.work.liveApp)}
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
