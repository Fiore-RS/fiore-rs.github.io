import { ArrowUpRight, Clock, Mail } from 'lucide-react'
import LocalClock from '../components/LocalClock'
import PageHeader from '../components/PageHeader'
import SplitLayout from '../components/SplitLayout'
import { site } from '../data/site'
import { availability, terms, workProcess } from '../data/services'
import { ui, useT } from '../i18n/ui'

export default function Contact() {
  const { t } = useT()
  const links = [
    { label: 'LinkedIn', href: site.links.linkedin },
    { label: 'GitHub', href: site.links.github },
  ]

  return (
    <SplitLayout
      aside={
        <>
          <PageHeader label={t(ui.nav.contact)} title={t(ui.contact.title)} intro={t(ui.contact.intro)} />
          {/* Contacto y disponibilidad */}
          <div className="mt-7 animate-rise space-y-4 rounded-xl border border-borde bg-ciruela/70 p-5 [animation-delay:240ms]">
            <div>
              <p className="label text-[10px] text-bruma">{t(ui.contact.write)}</p>
              <a
                href={`mailto:${site.correo}`}
                className="mt-2 flex items-center gap-2.5 break-all text-[17px] font-medium text-crema transition-colors hover:text-acento"
              >
                <Mail size={17} className="shrink-0 text-acento" aria-hidden="true" />
                {site.correo}
              </a>
              <ul className="mt-3 flex gap-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="label inline-flex h-9 items-center gap-1.5 rounded-md border border-borde px-3 text-[10px] text-crema/85 transition-colors hover:border-acento/60 hover:text-crema"
                    >
                      {l.label}
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-borde pt-4">
              <p className="label text-[10px] text-bruma">{t(ui.contact.availability)}</p>
              <p className="mt-2 flex items-start gap-2.5 text-[15px] text-crema">
                <Clock size={16} className="mt-0.5 shrink-0 text-acento" aria-hidden="true" />
                <span>
                  {t(availability.days)}
                  <span className="block text-crema/70">{t(availability.hours)}</span>
                </span>
              </p>
              {/* en pantallas grandes la hora ya está en el header */}
              <LocalClock className="mt-3 lg:hidden" />
            </div>
          </div>
        </>
      }
    >
      {/* Proceso */}
      <div>
        <h2 className="label text-acento">{t(ui.contact.process)}</h2>
        <div className="mt-4">
          <p className="max-w-[40rem] text-[16px] leading-relaxed text-crema/75">{t(ui.contact.processIntro)}</p>
          <ol className="mt-6 border-t border-borde">
            {workProcess.map((step, i) => (
              <li
                key={step.title.es}
                className="grid gap-x-6 gap-y-1 border-b border-borde py-5 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)]"
              >
                <p className="text-[16px] font-medium text-crema">
                  <span className="label mr-2 text-[10px] text-acento">{String(i + 1).padStart(2, '0')}</span>
                  {t(step.title)}
                </p>
                <p className="max-w-[44rem] text-[15px] leading-relaxed text-crema/70">{t(step.detail)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Términos */}
      <div className="mt-16">
        <h2 className="label text-acento">{t(ui.contact.terms)}</h2>
        <div className="mt-4">
          <p className="max-w-[40rem] text-[16px] leading-relaxed text-crema/75">{t(ui.contact.termsIntro)}</p>
          <dl className="mt-6 border-t border-borde">
            {terms.map((term) => (
              <div
                key={term.title.es}
                className="grid gap-x-6 gap-y-1 border-b border-borde py-5 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)]"
              >
                <dt className="text-[16px] font-medium text-crema">{t(term.title)}</dt>
                <dd className="max-w-[44rem] text-[15px] leading-relaxed text-crema/70">{t(term.detail)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SplitLayout>
  )
}
