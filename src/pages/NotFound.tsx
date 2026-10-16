import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { ui, useT } from '../i18n/ui'
import Logo from '../components/Logo'

/** Página para direcciones que no existen. */
export default function NotFound() {
  const { t } = useT()
  return (
    <section className="mx-auto flex w-full animate-rise max-w-[1440px] flex-1 flex-col justify-center px-4 py-24 sm:px-8 lg:px-10">
      <Logo className="mb-10 h-24 w-auto self-start text-crema/90 sm:h-28" />
      <p className="label text-acento">{t(ui.notFound.label)}</p>
      <h1 className="display mt-4 text-[clamp(2.5rem,8vw,5rem)] leading-none">{t(ui.notFound.title)}</h1>
      <p className="mt-5 max-w-md text-crema/70">{t(ui.notFound.body)}</p>
      <Link to="/" className="label mt-8 inline-flex items-center gap-2 text-crema/80 hover:text-acento">
        <ArrowLeft size={15} aria-hidden="true" />
        {t(ui.notFound.back)}
      </Link>
    </section>
  )
}
