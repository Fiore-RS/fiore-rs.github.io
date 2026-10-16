import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import LocalClock from './LocalClock'
import Logo from './Logo'
import { site } from '../data/site'
import { ui, useT } from '../i18n/ui'
import { useLanguage } from '../i18n/LanguageContext'

const navItems = [
  { to: '/', label: ui.nav.work, end: true },
  { to: '/about', label: ui.nav.about },
  { to: '/skills', label: ui.nav.skills },
  { to: '/archive', label: ui.nav.archive },
  { to: '/contact', label: ui.nav.contact },
]

function LangToggle() {
  const { lang, toggleLang } = useLanguage()
  const { t } = useT()
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t(ui.nav.switchLang)}
      className="label flex h-9 items-center gap-1 rounded-md border border-borde px-3 text-bruma transition-colors hover:border-acento/60 hover:text-crema"
    >
      <span className={lang === 'es' ? 'text-acento' : ''}>ES</span>
      <span aria-hidden="true">/</span>
      <span className={lang === 'en' ? 'text-acento' : ''}>EN</span>
    </button>
  )
}

export function AvailabilityBadge() {
  const { t } = useT()
  if (!site.disponible) return null
  return (
    <span className="label inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-menta/25 bg-menta/[0.07] px-3 py-1.5 text-[10px] text-menta">
      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-menta opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-menta" />
      </span>
      {t(ui.badge)}
    </span>
  )
}

export default function Header() {
  const { t } = useT()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // cerrar el menú móvil al navegar
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // con el menú abierto: la página de atrás no se desplaza y Escape lo cierra
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-borde/70 bg-noche/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4 xl:gap-5">
            <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.nombre}, ${t(ui.nav.work)}`}>
              <Logo className="h-[26px] w-auto text-crema" />
              <span className="display text-[17px] tracking-tight">{site.dominio}</span>
            </Link>
            <span className="hidden md:inline-flex lg:hidden xl:inline-flex">
              <AvailabilityBadge />
            </span>
          </div>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-6 2xl:gap-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `label relative block whitespace-nowrap py-1 text-[12px] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-acento after:transition-transform ${
                        isActive ? 'text-acento after:scale-x-100' : 'text-crema/80 after:scale-x-0 hover:text-crema'
                      }`
                    }
                  >
                    {t(item.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex xl:gap-5">
            <LocalClock />
            <LangToggle />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? t(ui.nav.close) : t(ui.nav.menu)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-borde text-crema lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Menú móvil: se despliega encima del contenido (no lo empuja hacia abajo) */}
        <div
          id="menu-movil"
          inert={!open}
          className={`absolute inset-x-0 top-full origin-top border-b border-borde/70 bg-noche px-4 pb-6 pt-2 shadow-[0_24px_48px_-12px_rgb(0_0_0/0.6)] transition duration-300 ease-out sm:px-8 lg:hidden ${
            open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
          }`}
        >
          <nav aria-label="Principal">
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <li
                  key={item.to}
                  style={{ transitionDelay: open ? `${60 + i * 40}ms` : '0ms' }}
                  className={`transition duration-300 ease-out ${open ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'}`}
                >
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `display block border-b border-borde/60 py-3 text-2xl ${isActive ? 'text-acento' : 'text-crema'}`
                    }
                  >
                    {t(item.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <LocalClock />
            <LangToggle />
          </div>
          <div className="mt-4 md:hidden">
            <AvailabilityBadge />
          </div>
        </div>
      </header>

      {/* Velo que oscurece la página mientras el menú está abierto; tocarlo cierra el menú.
        Va fuera del header porque el desenfoque del header encerraría a un elemento fijo. */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 top-16 z-30 bg-noche/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
    </>
  )
}
