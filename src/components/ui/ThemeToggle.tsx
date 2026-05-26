import { Icon } from '@iconify/react'
import { useTheme } from '../../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
    >
      <Icon
        icon={theme === 'dark' ? 'mdi:white-balance-sunny' : 'mdi:moon-waning-crescent'}
        width={18}
      />
    </button>
  )
}
