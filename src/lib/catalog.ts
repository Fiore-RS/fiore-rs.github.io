import { projects } from '../data/projects'
import type { Project, ProjectCategory } from '../data/types'

export type Filter = ProjectCategory | 'all'

/**
 * Número de catálogo de cada proyecto (F.001, F.002…), asignado por orden cronológico:
 * el proyecto más antiguo es F.001. Así un proyecto nuevo recibe el siguiente número
 * sin cambiar los anteriores, igual que en el fichero original de index.
 * Dentro del mismo año, manda el orden de projects.ts (primero = más antiguo).
 */
const byAge = projects
  .map((p, i) => ({ p, i }))
  .sort((a, b) => Number(a.p.year ?? 0) - Number(b.p.year ?? 0) || a.i - b.i)

const numbers = new Map(byAge.map(({ p }, n) => [p.slug, `F.${String(n + 1).padStart(3, '0')}`]))

export const catalogNumber = (slug: string) => numbers.get(slug) ?? 'F.000'

/** Proyectos del más reciente al más antiguo. */
export const projectsByDate: Project[] = [...byAge].reverse().map(({ p }) => p)

export const filterProjects = (list: Project[], filter: Filter) =>
  filter === 'all' ? list : list.filter((p) => p.category === filter)
