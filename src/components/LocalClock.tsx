import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'
import { site } from '../data/site'
import { ui, useT } from '../i18n/ui'

function formatTime(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: site.zonaHoraria,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date)
}

/** Hora actual en Costa Rica, para que quien visita sepa si es buen momento para escribir. */
export default function LocalClock({ className = '' }: { className?: string }) {
  const { t } = useT()
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <p className={`label flex items-center gap-2 whitespace-nowrap text-bruma ${className}`}>
      <Clock size={13} aria-hidden="true" className="text-acento" />
      <span className="sr-only">{t(ui.clockLabel)} {site.ciudad}:</span>
      <time dateTime={now.toISOString()} className="tabular-nums text-crema">
        {formatTime(now)}
      </time>
      <span aria-hidden="true">
        <span className="hidden 2xl:inline">GMT-6 · </span>
        {site.ciudad}
      </span>
    </p>
  )
}
