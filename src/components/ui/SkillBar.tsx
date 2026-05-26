import { useIntersection } from '../../hooks/useIntersection'

interface SkillBarProps {
  name: string
  value: number
}

export default function SkillBar({ name, value }: SkillBarProps) {
  const { ref, hasIntersected } = useIntersection(0.2)

  return (
    <div ref={ref as React.Ref<HTMLDivElement>} className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-semibold text-[var(--text)]">{name}</span>
        <span className="text-sm font-semibold text-[var(--accent)]">{value}%</span>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: hasIntersected ? `${value}%` : '0%' }}
        />
      </div>
    </div>
  )
}
