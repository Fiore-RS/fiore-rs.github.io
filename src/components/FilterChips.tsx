import { projects } from '../data/projects'
import type { Filter } from '../lib/catalog'
import { ui, useT } from '../i18n/ui'

const filters: { key: Filter; label: { en: string; es: string } }[] = [
  { key: 'all', label: ui.work.all },
  { key: 'branding', label: ui.work.branding },
  { key: 'web', label: ui.work.web },
]

const pad = (n: number) => String(n).padStart(2, '0')

interface Props {
  active: Filter
  onChange: (filter: Filter) => void
  className?: string
}

/** Botones para filtrar proyectos por categoría, con la cantidad de cada una. */
export default function FilterChips({ active, onChange, className = '' }: Props) {
  const { t } = useT()
  return (
    <div role="group" aria-label={t(ui.work.filtersLabel)} className={`flex flex-wrap gap-2 ${className}`}>
      {filters.map((f) => {
        const count = f.key === 'all' ? projects.length : projects.filter((p) => p.category === f.key).length
        const isActive = active === f.key
        return (
          <button
            key={f.key}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(f.key)}
            className={`label rounded px-2.5 py-2 text-[10.5px] tracking-[0.12em] transition-colors sm:px-3 sm:text-[11px] sm:tracking-[0.16em] ${
              isActive
                ? 'bg-acento font-medium text-sobre-acento'
                : 'border border-borde text-crema/75 hover:border-acento/50 hover:text-crema'
            }`}
          >
            {t(f.label)} ({pad(count)})
          </button>
        )
      })}
    </div>
  )
}
