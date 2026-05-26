import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import ThemeToggle from '../ui/ThemeToggle'

export default function Header() {
  const { lang = 'en' } = useParams<{ lang: string }>()
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
        setProjectsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const otherLang = lang === 'es' ? 'en' : 'es'
  const base = `/${lang}`

  return (
    <header
      style={{ background: 'var(--header-bg)', backdropFilter: 'blur(8px)' }}
      className={`fixed top-0 left-0 right-0 z-50 h-15 border-b border-[var(--border)] transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <Link to={base} onClick={() => setMobileOpen(false)}>
          <img src="/img/maycet.png" alt="Maycet" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" ref={navRef}>
          <Link
            to={base}
            className="text-[var(--text)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            {t('nav.home')}
          </Link>
          <Link
            to={`${base}/about`}
            className="text-[var(--text)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            {t('nav.about')}
          </Link>
          <Link
            to={`${base}/resume`}
            className="text-[var(--text)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            {t('nav.resume')}
          </Link>

          {/* Projects dropdown */}
          <div className="relative">
            <button
              onClick={() => setProjectsOpen(o => !o)}
              className="flex items-center gap-1 text-[var(--text)] hover:text-[var(--accent)] transition-colors font-medium cursor-pointer"
            >
              {t('nav.projects')}
              <Icon icon="mdi:chevron-down" className={`transition-transform duration-200 ${projectsOpen ? 'rotate-180' : ''}`} />
            </button>
            {projectsOpen && (
              <div
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                className="absolute top-full right-0 mt-2 min-w-36 rounded-lg shadow-xl overflow-hidden"
              >
                <Link
                  to={`${base}/projects/math`}
                  className="block px-4 py-2.5 text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-colors text-sm"
                  onClick={() => setProjectsOpen(false)}
                >
                  {t('nav.math')}
                </Link>
                <Link
                  to={`${base}/projects/gallery`}
                  className="block px-4 py-2.5 text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-colors text-sm"
                  onClick={() => setProjectsOpen(false)}
                >
                  {t('nav.illustration')}
                </Link>
                <a
                  href="https://github.com/Maycet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-colors text-sm"
                  onClick={() => setProjectsOpen(false)}
                >
                  {t('nav.programming')}
                </a>
              </div>
            )}
          </div>

          {/* Lang switch */}
          <Link
            to={`/${otherLang}`}
            className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            {otherLang}
          </Link>

          <ThemeToggle />
        </nav>

        {/* Mobile: theme + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="text-[var(--text)] hover:text-[var(--accent)] transition-colors p-1"
            aria-label="Toggle menu"
          >
            <Icon icon={mobileOpen ? 'mdi:close' : 'mdi:menu'} width={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          ref={navRef}
          style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}
          className="md:hidden absolute w-full left-0 shadow-xl"
        >
          <nav className="container py-4 flex flex-col gap-2">
            <Link to={base} className="py-2 text-[var(--text)] hover:text-[var(--accent)] font-medium" onClick={() => setMobileOpen(false)}>
              {t('nav.home')}
            </Link>
            <Link to={`${base}/about`} className="py-2 text-[var(--text)] hover:text-[var(--accent)] font-medium" onClick={() => setMobileOpen(false)}>
              {t('nav.about')}
            </Link>
            <Link to={`${base}/resume`} className="py-2 text-[var(--text)] hover:text-[var(--accent)] font-medium" onClick={() => setMobileOpen(false)}>
              {t('nav.resume')}
            </Link>
            <div>
              <button
                onClick={() => setProjectsOpen(o => !o)}
                className="flex items-center gap-1 py-2 w-full text-left text-[var(--text)] hover:text-[var(--accent)] font-medium"
              >
                {t('nav.projects')}
                <Icon icon="mdi:chevron-down" className={`transition-transform duration-200 ${projectsOpen ? 'rotate-180' : ''}`} />
              </button>
              {projectsOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  <Link to={`${base}/projects/math`} className="py-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] text-sm" onClick={() => { setMobileOpen(false); setProjectsOpen(false) }}>
                    {t('nav.math')}
                  </Link>
                  <Link to={`${base}/projects/gallery`} className="py-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] text-sm" onClick={() => { setMobileOpen(false); setProjectsOpen(false) }}>
                    {t('nav.illustration')}
                  </Link>
                  <a href="https://github.com/Maycet" target="_blank" rel="noopener noreferrer" className="py-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] text-sm" onClick={() => setMobileOpen(false)}>
                    {t('nav.programming')}
                  </a>
                </div>
              )}
            </div>
            <Link
              to={`/${otherLang}`}
              className="py-2 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--accent)]"
              onClick={() => setMobileOpen(false)}
            >
              Switch to {otherLang.toUpperCase()}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
