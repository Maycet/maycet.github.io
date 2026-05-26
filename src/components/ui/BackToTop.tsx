import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{ background: 'var(--accent)' }}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg hover:bg-[var(--accent-hover)] transition-all duration-300 hover:-translate-y-1"
    >
      <Icon icon="mdi:arrow-up" width={20} />
    </button>
  )
}
