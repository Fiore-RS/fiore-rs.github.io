import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'es'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'fiorers-lang'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'es'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    /* almacenamiento bloqueado: se usa el idioma del navegador */
  }
  // Si nunca eligió idioma, se usa el del navegador (español por defecto).
  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* sin almacenamiento, el idioma solo dura esta visita */
    }
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => setLangState(next)
  const toggleLang = () => setLangState((prev) => (prev === 'en' ? 'es' : 'en'))

  return <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
