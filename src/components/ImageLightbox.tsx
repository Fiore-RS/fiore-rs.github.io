import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { ui, useT } from '../i18n/ui'

interface Props {
  src: string
  alt: string
  onClose: () => void
}

/** Imagen ampliada a pantalla completa. Se cierra con Escape, con la X o tocando fuera. */
export default function ImageLightbox({ src, alt, onClose }: Props) {
  const { t } = useT()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    // evitar que la página de atrás se desplace mientras está abierta
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-noche/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={t(ui.caseStudy.close)}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-borde bg-ciruela text-crema transition-colors hover:border-acento hover:text-acento"
      >
        <X size={20} />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl"
      />
    </div>
  )
}
