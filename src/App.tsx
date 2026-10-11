import { FichaGrid } from "./components/FichaGrid";

function App() {
  return (
    <div className="min-h-screen px-4 py-14 sm:py-20">
      <header className="mx-auto mb-10 max-w-3xl">
        <p className="font-mono text-xs text-ink-muted">catálogo</p>
        <h1 className="mt-1 font-display text-3xl font-medium text-ink sm:text-4xl">
          Índice de proyectos y páginas
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          Un fichero de todo lo que voy construyendo en desarrollo web, desde mi portfolio hasta apps.
        </p>
      </header>

      <FichaGrid />

      <footer className="mx-auto mt-14 max-w-3xl border-t border-dashed border-line pt-4">
        <p className="font-mono text-[11px] text-ink-muted">
          Hecho con ❤️ por <a href="/Portfolio/" className="underline">Fiorella Salazar</a> — 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
