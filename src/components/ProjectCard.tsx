import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import AppCover from './AppCover'
import type { Project } from '../data/types'
import { ui, useT } from '../i18n/ui'

const categoryLabel = {
  branding: ui.work.branding,
  web: ui.work.web,
}

export default function ProjectCard({ project, eager = false }: { project: Project; eager?: boolean }) {
  const { t } = useT()
  const tools = t(project.tools)
    .split(',')
    .map((s) => s.trim())
    .slice(0, 3)

  return (
    <article className="group flex h-full w-full flex-col fit:h-auto fit:max-h-full overflow-hidden rounded-xl border border-borde bg-ciruela/90 transition-colors duration-300 hover:border-acento/40">
      {/* en modo `fit` la imagen se encoge (recortando arriba y abajo) si la ventana es baja */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-borde fit:min-h-[6rem] fit:shrink">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading={eager ? 'eager' : 'lazy'}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : project.cover ? (
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            <AppCover variant={project.cover} />
          </div>
        ) : null}
        <span className="label absolute left-4 top-4 rounded border border-white/10 bg-noche/75 px-2.5 py-1 text-[10px] text-acento backdrop-blur-sm">
          {t(project.type)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 fit:flex-none fit:py-5">
        <p className="label text-[10px] text-bruma">
          {t(categoryLabel[project.category])}
          {project.year && <span className="text-bruma/70"> / {project.year}</span>}
        </p>
        <h3 className="display mt-2 text-[1.65rem] leading-[1.05] sm:text-[1.9rem] fit:line-clamp-2 fit:min-h-[2.1em] fit:text-[clamp(1.35rem,1.85vw,1.9rem)]">{t(project.title)}</h3>
        <p className="mt-3 line-clamp-3 min-h-[calc(15px*1.625*3)] text-[15px] leading-relaxed text-crema/70">
          {t(project.blurb)}
        </p>

        {/* una sola fila de herramientas: las que no caben se ocultan, así todas las tarjetas miden igual */}
        <ul className="mt-5 flex h-[1.65rem] flex-wrap gap-1.5 overflow-hidden" aria-label="Herramientas">
          {tools.map((tool) => (
            <li key={tool} className="label rounded border border-borde px-2 py-1 text-[10px] tracking-[0.1em] text-bruma">
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-end gap-2 pt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl.url}
              target="_blank"
              rel="noreferrer"
              className="label inline-flex h-10 items-center gap-1.5 rounded-md border border-borde px-3.5 text-crema/85 transition-colors hover:border-acento/60 hover:text-crema"
            >
              {t(ui.work.liveApp)}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          <Link
            to={`/work/${project.slug}`}
            className="label inline-flex h-10 items-center gap-1.5 rounded-md bg-acento px-3.5 font-medium text-sobre-acento transition-colors hover:bg-acento-claro"
          >
            {t(ui.work.caseStudy)}
            <span className="sr-only">: {t(project.title)}</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
