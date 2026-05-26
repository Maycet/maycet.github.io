import CountUp from 'react-countup'
import { Icon } from '@iconify/react'
import { useIntersection } from '../../hooks/useIntersection'

interface StatCardProps {
  icon: string
  prefix: string
  end: number
  label: string
}

export default function StatCard({ icon, prefix, end, label }: StatCardProps) {
  const { ref, hasIntersected } = useIntersection(0.3)

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
      className="flex items-start gap-4 p-5 rounded-xl shadow-sm"
    >
      <div
        style={{ background: 'var(--accent)' }}
        className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-white"
      >
        <Icon icon={icon} width={24} />
      </div>
      <div>
        <div className="text-2xl font-bold text-[var(--accent)] leading-none mb-1">
          {prefix}{' '}
          {hasIntersected ? (
            <CountUp end={end} duration={1.5} separator="," />
          ) : (
            <span>0</span>
          )}
        </div>
        <p className="text-sm text-[var(--text-muted)] leading-snug">{label}</p>
      </div>
    </div>
  )
}
