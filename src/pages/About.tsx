import { Link } from 'react-router'
import { ArrowRight, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SplitLayout from '../components/SplitLayout'
import Logo from '../components/Logo'
import { bio, experience, logoStory, quote } from '../data/about'
import { ui, useT } from '../i18n/ui'

/** Columna izquierda: la foto recortada sale por arriba de un arco orquídea, con el título debajo. */
function AboutAside() {
  const { t } = useT()
  return (
    <>
      {/* la parte de abajo se desvanece y el título se monta encima, así la foto puede ser más grande */}
      <figure className="relative mx-auto w-full max-w-[20rem] [mask-image:linear-gradient(to_bottom,black_58%,transparent_90%)] lg:mx-0 fit:mx-auto fit:w-[min(26rem,calc((100svh-18rem)*0.8))] fit:max-w-none">
        {/* arco: aparece primero y la foto sube desde él */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 top-[30%] animate-fade rounded-t-full border border-acento/40"
          style={{
            background:
              'radial-gradient(90% 70% at 50% 15%, rgb(var(--acento-claro) / 0.85), rgb(var(--acento) / 0.55) 45%, rgb(var(--ciruela)) 100%)',
          }}
        />
        <img
          src="/profile/fiorella.webp"
          alt={t(ui.about.photoAlt)}
          className="relative w-full animate-[rise_900ms_cubic-bezier(.2,.7,.2,1)_200ms_both]"
        />
      </figure>
      <div className="relative z-10 -mt-14 fit:-mt-28">
        <PageHeader label={t(ui.nav.about)} title={t(ui.about.title)} delay={300} />
      </div>
      <p className="label mt-5 flex animate-rise items-center gap-2 text-bruma [animation-delay:460ms]">
        <MapPin size={13} className="text-acento" aria-hidden="true" />
        {t(ui.about.basedIn)} {t(ui.about.location)}
      </p>
    </>
  )
}

export default function About() {
  const { t, tArr } = useT()

  return (
    <SplitLayout aside={<AboutAside />}>
      <div className="max-w-[42rem] space-y-5 text-[17px] leading-[1.75] text-crema/80">
        {tArr(bio).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="mt-8 border-l-2 border-acento pl-5 text-xl text-crema">{t(quote)}</p>

      <h2 className="label mt-14 text-acento">{t(ui.about.experience)}</h2>
      <ol className="mt-5 border-t border-borde">
        {experience.map((entry) => (
          <li
            key={entry.title.es}
            className="grid gap-x-6 gap-y-2 border-b border-borde py-6 sm:grid-cols-[9rem_minmax(0,1fr)]"
          >
            <p className="label pt-1.5 text-bruma">{t(entry.years)}</p>
            <div>
              <h3 className="display text-2xl leading-tight">{t(entry.title)}</h3>
              <p className="mt-1 text-[15px] font-medium text-lila">{t(entry.role)}</p>
              <p className="mt-2 max-w-[40rem] text-[15px] leading-relaxed text-crema/70">{t(entry.description)}</p>
              {entry.slug && (
                <Link
                  to={`/work/${entry.slug}`}
                  className="label mt-3 inline-flex items-center gap-1.5 text-[10px] text-crema/80 transition-colors hover:text-acento"
                >
                  {t(ui.about.seeProject)}
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>

      <section aria-labelledby="sobre-el-logo" className="mt-14">
        <h2 className="label text-acento">{t(ui.about.logo)}</h2>
        <div className="mt-5 grid gap-8 rounded-xl border border-borde bg-ciruela/50 p-6 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:p-8">
          <Logo className="h-24 w-auto self-start text-crema sm:h-auto sm:w-full" />
          <div>
            <h3 className="display text-2xl leading-tight">{t(logoStory.title)}</h3>
            <p className="mt-3 max-w-[38rem] text-[15px] leading-relaxed text-crema/75">{t(logoStory.intro)}</p>
            <dl className="mt-6 grid gap-5 md:grid-cols-2">
              {logoStory.parts.map((part) => (
                <div key={part.mark} className="border-t border-borde pt-4">
                  <dt className="flex items-baseline gap-2.5">
                    <span className="font-mono text-[15px] text-acento" aria-hidden="true">
                      {part.mark}
                    </span>
                    <span className="label text-crema">{t(part.name)}</span>
                  </dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-crema/70">{t(part.text)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Link
        to="/contact"
        className="label mt-10 inline-flex h-12 items-center gap-2.5 rounded-md bg-acento px-6 font-medium text-sobre-acento transition-colors hover:bg-acento-claro"
      >
        {t(ui.about.cta)}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </SplitLayout>
  )
}
