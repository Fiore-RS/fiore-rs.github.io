import { site } from '../data/site'
import { ui, useT } from '../i18n/ui'

export default function Footer() {
  const { t } = useT()
  const year = new Date().getFullYear()
  const links = [
    { label: 'GitHub', href: site.links.github },
    { label: 'LinkedIn', href: site.links.linkedin },
    { label: t(ui.footer.email), href: `mailto:${site.correo}` },
  ]

  return (
    <footer className="border-t border-borde/70">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="label text-bruma">
          © {year} {site.nombre} <span className="text-borde">/</span> {t(ui.footer.role)}
        </p>
        <ul className="flex flex-wrap gap-x-7 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="label text-crema/80 transition-colors hover:text-acento"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
