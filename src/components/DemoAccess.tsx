import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import type { Project } from '../data/types'
import { ui, useT } from '../i18n/ui'

type Demo = NonNullable<Project['demoAccess']>

/** Franja con el correo y la contraseña de la cuenta de prueba de una app, cada uno con botón
 *  para copiar. Va a todo el ancho debajo del encabezado del caso de estudio (y no en la
 *  columna de detalles) para no alargar el encabezado. */
export default function DemoAccess({ demo, className = '' }: { demo: Demo; className?: string }) {
  const { t } = useT()
  const [copied, setCopied] = useState<'email' | 'password' | null>(null)

  async function copy(field: 'email' | 'password', value: string) {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(field)
      window.setTimeout(() => setCopied((c) => (c === field ? null : c)), 1800)
    } catch {
      // Sin portapapeles: el texto sigue visible para copiarlo a mano.
    }
  }

  const rows = [
    { field: 'email' as const, label: ui.caseStudy.demoEmail, value: demo.email },
    { field: 'password' as const, label: ui.caseStudy.demoPassword, value: demo.password },
  ]

  return (
    <section
      aria-label={t(ui.caseStudy.demoTitle)}
      className={`grid gap-4 rounded-xl border border-borde bg-ciruela/70 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-center lg:gap-8 ${className}`}
    >
      <div>
        <p className="label text-acento">{t(ui.caseStudy.demoTitle)}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-bruma">{t(demo.note)}</p>
      </div>
      {rows.map(({ field, label, value }) => (
        <div key={field} className="flex items-center justify-between gap-4 lg:justify-start">
          <div className="min-w-0">
            <p className="label text-[10px] text-bruma">{t(label)}</p>
            <p className="truncate font-mono text-[15px] text-crema">{value}</p>
          </div>
          <button
            type="button"
            onClick={() => copy(field, value)}
            aria-label={`${t(ui.caseStudy.copy)}: ${t(label)}`}
            className="label inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border border-borde px-3 text-[10px] text-crema transition-colors hover:border-acento/60"
          >
            {copied === field ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
            <span aria-live="polite">{t(copied === field ? ui.caseStudy.copied : ui.caseStudy.copy)}</span>
          </button>
        </div>
      ))}
    </section>
  )
}
