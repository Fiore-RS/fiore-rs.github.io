import { useMemo } from 'react'
import PageHeader from '../components/PageHeader'
import SplitLayout from '../components/SplitLayout'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import { ui, useT } from '../i18n/ui'

export default function Skills() {
  const { t, tArr } = useT()

  // herramientas reales de los proyectos, de la más usada a la menos usada
  const tools = useMemo(() => {
    const count = new Map<string, number>()
    for (const p of projects) {
      for (const tool of p.tools.en.split(',').map((s) => s.trim())) {
        count.set(tool, (count.get(tool) ?? 0) + 1)
      }
    }
    return [...count.entries()].sort((a, b) => b[1] - a[1]).map(([tool]) => tool)
  }, [])

  return (
    <SplitLayout aside={<PageHeader label={t(ui.nav.skills)} title={t(ui.skills.title)} intro={t(ui.skills.intro)} />}>
      <div className="border-t border-borde">
        {skillGroups.map((group) => (
          <div
            key={group.title.es}
            className="grid gap-x-8 gap-y-4 border-b border-borde py-8 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
          >
            <h2 className="display text-[1.6rem] leading-tight">{t(group.title)}</h2>
            <ul className="space-y-3">
              {tArr(group.items).map((item) => (
                <li key={item} className="flex gap-3 text-[16px] text-crema/80">
                  <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-acento" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="label mt-12 text-acento">{t(ui.skills.tools)}</h2>
      <ul className="mt-5 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <li key={tool} className="label rounded-md border border-borde px-3 py-2 text-[11px] text-crema/85">
            {tool}
          </li>
        ))}
      </ul>
    </SplitLayout>
  )
}
