import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import StatCard from '../components/ui/StatCard'
import SkillBar from '../components/ui/SkillBar'
import ProjectCard from '../components/ui/ProjectCard'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Home() {
  const { lang = 'en' } = useParams<{ lang: string }>()
  const { t } = useTranslation()

  const stats = [
    { icon: 'mdi:clock-outline', prefix: t('home.about.stats.years.prefix'), end: 5, label: t('home.about.stats.years.label') },
    { icon: 'mdi:book-open-outline', prefix: t('home.about.stats.projects.prefix'), end: 10, label: t('home.about.stats.projects.label') },
    { icon: 'mdi:trophy-outline', prefix: t('home.about.stats.problems.prefix'), end: 50, label: t('home.about.stats.problems.label') },
    { icon: 'mdi:puzzle-outline', prefix: t('home.about.stats.puzzles.prefix'), end: 200, label: t('home.about.stats.puzzles.label') },
  ]

  const skills = t('home.skills.items', { returnObjects: true }) as { name: string; value: number }[]
  const projects = t('home.projects.items', { returnObjects: true }) as {
    icon: string; title: string; description: string; href: string; external: boolean
  }[]

  return (
    <main>
      {/* ─── Hero ─── */}
      <section
        id="intro"
        style={{ background: 'radial-gradient(ellipse 100% 55% at 50% 0%, var(--hero-glow), transparent 70%), radial-gradient(ellipse 100% 40% at 50% 100%, var(--hero-glow), transparent 70%), var(--bg)' }}
        className="min-h-screen flex flex-col items-center justify-center text-center pt-15 pb-15"
      >
        <div className="px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[var(--accent)] mb-4"
          >
            {t('hero.name')}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-3xl font-medium mb-10 text-[var(--accent)]"
          >
            {t('hero.subtitle')}
          </motion.h2>
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={e => {
              e.preventDefault()
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex flex-col items-center gap-1 border-2 border-[var(--accent)] text-[var(--accent)] rounded-full px-6 py-3 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300"
          >
            <Icon icon="mdi:chevron-double-down" width={28} className="animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="section-title text-center mb-1">
              <Link to={`/${lang}/about`} className="hover:text-[var(--accent-hover)]">
                {t('home.about.title')}
              </Link>
            </motion.h3>
            <div className="section-divider" />
            <motion.p variants={fadeUp} className="text-center text-[var(--text-muted)] mb-10 text-lg">
              {t('home.about.bio')}
            </motion.p>
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <StatCard {...s} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section id="skills" style={{ background: 'var(--bg-secondary)' }} className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="section-title text-center">{t('home.skills.title')}</motion.h2>
            <div className="section-divider" />
            <motion.p variants={fadeUp} className="text-center text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
              {t('home.skills.subtitle')}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
              {skills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="section-title text-center">{t('home.projects.title')}</motion.h2>
            <div className="section-divider" />
            <motion.p variants={fadeUp} className="text-center text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
              {t('home.projects.subtitle')}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {projects.map((p, i) => (
                <motion.div key={i} variants={fadeUp} className="h-full">
                  <ProjectCard {...p} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" style={{ background: 'var(--bg-secondary)' }} className="py-16">
        <div className="container flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/francisco-mayorga-cetina/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 hover:scale-110"
          >
            <Icon icon="mdi:linkedin" width={24} />
          </a>
          <a
            href="https://github.com/Maycet/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 hover:scale-110"
          >
            <Icon icon="mdi:github" width={24} />
          </a>
          <a
            href="https://open.spotify.com/user/f.maycet/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 hover:scale-110"
          >
            <Icon icon="mdi:spotify" width={24} />
          </a>
        </div>
      </section>
    </main>
  )
}
