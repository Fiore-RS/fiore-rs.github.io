import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { AlertTriangle, ArrowLeft, ArrowRight, ArrowUpRight, FileDown } from 'lucide-react'
import AppCover from '../components/AppCover'
import ImageLightbox from '../components/ImageLightbox'
import { getProjectBySlug, projects } from '../data/projects'
import { catalogNumber } from '../lib/catalog'
import { ui, useT } from '../i18n/ui'

/** Página de caso de estudio de un proyecto: /work/:slug */
export default function CaseStudy() {
  const { t, tArr } = useT()
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug ?? '')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  if (!project) return <Navigate to="/archive" replace />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  const details = [
    { label: ui.caseStudy.role, value: t(project.role) },
    { label: ui.caseStudy.timeline, value: t(project.timeline) },
    { label: ui.caseStudy.tools, value: t(project.tools) },
    ...(project.year ? [{ label: ui.caseStudy.year, value: project.year }] : []),
  ]

  return (
    // key por proyecto: al ir al "siguiente proyecto" la página se vuelve a montar y repite la entrada
    <article key={project.slug} className="mx-auto w-full max-w-[1440px] px-4 pb-20 pt-8 sm:px-8 lg:px-10 lg:pt-10">
      <Link to="/" className="label inline-flex items-center gap-2 text-bruma transition-colors hover:text-acento">
        <ArrowLeft size={14} aria-hidden="true" />
        {t(ui.caseStudy.back)}
      </Link>

      {/* Encabezado */}
      <header className="mt-8 grid animate-rise gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-16">
        <div>
          <p className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-acento">
            <span className="text-bruma">{catalogNumber(project.slug)}</span>
            {t(project.type)}
          </p>
          <h1 className="display mt-4 text-[clamp(2.6rem,8vw,6rem)] leading-[0.92]">{t(project.title)}</h1>
          <p className="mt-6 max-w-[40rem] text-lg leading-relaxed text-crema/75 sm:text-xl">{t(project.blurb)}</p>
        </div>

        <aside className="rounded-xl border border-borde bg-ciruela/70 p-5 sm:p-6">
          <dl className="divide-y divide-borde/70">
            {details.map((d) => (
              <div key={d.label.es} className="grid grid-cols-[7.5rem_1fr] gap-3 py-3 first:pt-0 last:pb-0">
                <dt className="label pt-0.5 text-[10px] text-bruma">{t(d.label)}</dt>
                <dd className="text-[15px] text-crema">{d.value}</dd>
              </div>
            ))}
          </dl>

          {(project.liveUrl || project.pdf) && (
            <div className="mt-5 flex flex-col gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl.url}
                  target="_blank"
                  rel="noreferrer"
                  className="label flex h-11 items-center justify-center gap-2 rounded-md bg-acento px-4 font-medium text-sobre-acento transition-colors hover:bg-acento-claro"
                >
                  {t(project.liveUrl.label)}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
              {project.liveUrl && project.liveNote && (
                <p className="flex gap-2 text-xs leading-relaxed text-bruma">
                  <AlertTriangle size={14} className="mt-0.5 shrink-0 text-acento" aria-hidden="true" />
                  {t(project.liveNote)}
                </p>
              )}
              {project.pdf && (
                <a
                  href={project.pdf.path}
                  target="_blank"
                  rel="noreferrer"
                  className={`label flex h-11 items-center justify-center gap-2 rounded-md px-4 font-medium transition-colors ${
                    project.liveUrl
                      ? 'border border-borde text-crema hover:border-acento/60'
                      : 'bg-acento text-sobre-acento hover:bg-acento-claro'
                  }`}
                >
                  <FileDown size={15} aria-hidden="true" />
                  {t(project.pdf.label)}
                </a>
              )}
            </div>
          )}
        </aside>
      </header>

      {/* Portada */}
      <figure className="mt-12 animate-rise overflow-hidden rounded-xl border border-borde [animation-delay:120ms]">
        {project.image ? (
          <button
            type="button"
            onClick={() => setLightbox({ src: project.image!, alt: t(project.title) })}
            aria-label={`${t(ui.caseStudy.enlarge)}: ${t(project.title)}`}
            className="block w-full cursor-zoom-in"
          >
            <img src={project.image} alt="" className="aspect-[16/9] w-full object-cover" />
          </button>
        ) : project.cover ? (
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <AppCover variant={project.cover} />
          </div>
        ) : null}
      </figure>

      {/* El proyecto */}
      <Section title={t(ui.caseStudy.project)}>
        <div className="space-y-5 text-[17px] leading-[1.75] text-crema/80">
          {tArr(project.overview).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Galería */}
      {project.gallery && project.gallery.length > 0 && (
        <Section title={t(ui.caseStudy.gallery)} wide>
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {project.gallery.map((item, i) =>
              item.image ? (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setLightbox({ src: item.image!, alt: t(item.alt) })}
                    className="group block w-full cursor-zoom-in overflow-hidden rounded-lg border border-borde transition-colors hover:border-acento/50"
                  >
                    <img
                      src={item.image}
                      alt={t(item.alt)}
                      loading="lazy"
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                </li>
              ) : null,
            )}
          </ul>
        </Section>
      )}

      {/* Lo que aprendí */}
      <Section title={t(ui.caseStudy.learned)}>
        <p className="border-l-2 border-acento pl-5 text-xl leading-relaxed text-crema sm:text-[22px]">
          {t(project.summary)}
        </p>
      </Section>

      {/* Siguiente proyecto */}
      <Link
        to={`/work/${next.slug}`}
        className="group mt-20 flex items-end justify-between gap-6 border-t border-borde pt-8"
      >
        <span>
          <span className="label block text-bruma">{t(ui.caseStudy.next)}</span>
          <span className="display mt-3 block text-[clamp(1.9rem,5vw,3.5rem)] leading-none transition-colors group-hover:text-acento">
            {t(next.title)}
          </span>
        </span>
        <span className="mb-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-acento/60 text-acento transition-colors group-hover:bg-acento group-hover:text-sobre-acento">
          <ArrowRight size={18} aria-hidden="true" />
        </span>
      </Link>

      {lightbox && <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </article>
  )
}

/** Bloque con el título a la izquierda y el contenido a la derecha (apilado en móvil). */
function Section({ title, wide = false, children }: { title: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <section className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
      <h2 className="label pt-1.5 text-acento">{title}</h2>
      <div className={wide ? '' : 'max-w-[44rem]'}>{children}</div>
    </section>
  )
}
