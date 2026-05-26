import { Link, useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'

interface BreadcrumbProps {
  title: string
  crumbs: { label: string; href?: string }[]
}

export default function Breadcrumb({ title, crumbs }: BreadcrumbProps) {
  const { lang = 'en' } = useParams<{ lang: string }>()

  return (
    <div className="breadcrumb-section">
      <div className="container flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-xl font-bold text-[var(--text)]">{title}</h1>
        <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          {crumbs.map((crumb, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <Icon icon="mdi:chevron-right" className="text-[var(--accent)]" />}
              {crumb.href ? (
                <Link
                  to={`/${lang}${crumb.href}`}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[var(--accent)] font-medium">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
