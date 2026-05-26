import { useEffect, useRef, useState } from 'react'

export function useIntersection(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null)
  const [hasIntersected, setHasIntersected] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, hasIntersected }
}
