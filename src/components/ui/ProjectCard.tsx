import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

interface ProjectCardProps {
  icon: string
  title: string
  description: string
  href: string
  external?: boolean
}

export default function ProjectCard({ icon, title, description, href, external }: ProjectCardProps) {
  const inner = (
    <div
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
      className="h-full flex flex-col items-start p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
    >
      <div
        style={{ background: 'var(--accent)' }}
        className="w-14 h-14 flex items-center justify-center rounded-xl text-white mb-4 group-hover:bg-[var(--accent-hover)] transition-colors"
      >
        <Icon icon={icon} width={28} />
      </div>
      <h4 className="text-lg font-semibold text-[var(--accent)] mb-2">{title}</h4>
      <p className="text-sm text-[var(--text-muted)]">{description}</p>
    </div>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    )
  }

  return (
    <Link to={href} className="block h-full">
      {inner}
    </Link>
  )
}
