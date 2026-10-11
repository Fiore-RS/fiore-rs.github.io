import type { CategoriaKey } from "./categories";

export interface Ficha {
  numero: string; // "000", "001"... se muestra como F.numero
  titulo: string;
  descripcion: string;
  categoria: CategoriaKey;
  anio: string;
  url: string;
  featured?: boolean; // true solo en el portfolio
}

// Para agregar una GitHub Page nueva, agregá un objeto acá.
// El grid y la numeración se acomodan solos.
export const fichas: Ficha[] = [
  {
    numero: "000",
    titulo: "Portfolio",
    descripcion: "Diseño y desarrollo UX/UI: trabajo seleccionado",
    categoria: "herramienta",
    anio: "2026",
    url: "/Portfolio/",
    featured: true,
  },
  {
    numero: "001",
    titulo: "Teleo",
    descripcion: "Diario de lectura personal, sin ads ni rastreo",
    categoria: "app",
    anio: "2026",
    url: "/teleo/",
  },
  {
    numero: "002",
    titulo: "Sobres",
    descripcion: "Presupuesto personal por sobres, sin conexión bancaria",
    categoria: "app",
    anio: "2026",
    url: "/sobres/",
  },
];