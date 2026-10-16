import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Estado de un carrusel horizontal con scroll-snap: qué tarjeta está al frente
 * y funciones para avanzar o retroceder. Cada hijo directo del contenedor es una tarjeta.
 * `listKey` debe cambiar cuando el contenedor se vuelve a montar con otro `key`.
 */
export function useCarousel(count: number, listKey?: unknown) {
  const ref = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)

  const step = useCallback(() => {
    const el = ref.current
    const first = el?.children[0] as HTMLElement | undefined
    const second = el?.children[1] as HTMLElement | undefined
    if (!first) return 1
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth
      // al llegar al final, la última tarjeta cuenta como activa aunque no quede alineada
      const i = el.scrollLeft >= max - 4 ? count - 1 : Math.round(el.scrollLeft / step())
      setIndex(Math.max(0, Math.min(count - 1, i)))
    }
    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
    // listKey: si la lista se vuelve a montar (p. ej. al cambiar de filtro), se reconecta al elemento nuevo
  }, [count, step, listKey])

  const goTo = (i: number) => {
    const el = ref.current
    if (!el) return
    const target = Math.max(0, Math.min(count - 1, i))
    el.scrollTo({ left: target * step(), behavior: 'smooth' })
  }

  const reset = () => {
    ref.current?.scrollTo({ left: 0 })
    setIndex(0)
  }

  return {
    ref,
    index,
    prev: () => goTo(index - 1),
    next: () => goTo(index + 1),
    reset,
    atStart: index === 0,
    atEnd: index >= count - 1,
  }
}
