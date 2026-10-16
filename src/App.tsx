import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Archive from './pages/Archive'
import CaseStudy from './pages/CaseStudy'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

/** /Portfolio/work/:slug → /work/:slug (si el proyecto ya no existe, el caso de estudio manda al Archivo). */
function LegacyProject() {
  const { slug } = useParams<{ slug: string }>()
  return <Navigate to={`/work/${slug ?? ''}`} replace />
}

export default function App() {
  const { pathname } = useLocation()

  // cada página nueva empieza arriba
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // en pantallas grandes, estas páginas ocupan exactamente la ventana (sin scroll de página)
  const fitsViewport = ['/', '/archive', '/about', '/skills', '/contact'].includes(pathname)

  return (
    <div className={`flex min-h-screen flex-col overflow-x-clip ${fitsViewport ? 'fit:h-svh fit:min-h-0 fit:overflow-hidden' : ''}`}>
      <a
        href="#contenido"
        className="label sr-only z-50 rounded bg-acento px-3 py-2 text-sobre-acento focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="flex min-h-0 flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          {/* enlaces del Portfolio anterior (fiorers.dev/Portfolio/...) llevan a su equivalente nuevo */}
          <Route path="/Portfolio" element={<Navigate to="/" replace />} />
          <Route path="/Portfolio/work" element={<Navigate to="/archive" replace />} />
          <Route path="/Portfolio/work/:slug" element={<LegacyProject />} />
          <Route path="/Portfolio/hire" element={<Navigate to="/contact" replace />} />
          <Route path="/Portfolio/*" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
