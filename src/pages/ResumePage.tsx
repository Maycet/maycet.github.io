import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import SkillBar from '../components/ui/SkillBar'

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }

type ResumeItemData = {
  title: string
  period: string
  org?: string
  orgHref?: string
  location?: string
  description?: string
}

type CertData = { name: string; org: string; date: string }
type EduData = { title: string; period: string; org: string; orgHref: string; location: string }

function ResumeItem({ title, period, org, orgHref, location, description }: ResumeItemData) {
  return (
    <motion.div
      variants={fadeIn}
      style={{ borderLeft: '3px solid var(--accent)' }}
      className="pl-4 pb-6"
    >
      <h4 className="font-semibold text-[var(--text)] mb-0.5">{title}</h4>
      <p className="text-sm font-medium text-[var(--accent)] mb-1">{period}</p>
      {org && (
        <p className="text-sm text-[var(--text-muted)] mb-1">
          {orgHref ? (
            <a href={orgHref} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] font-semibold">
              {org}
            </a>
          ) : (
            <strong>{org}</strong>
          )}
          {location && <em>, {location}</em>}
        </p>
      )}
      {description && (
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{ borderBottom: '2px solid var(--accent)' }}
      className="text-xl font-bold text-[var(--text)] pb-2 mb-5"
    >
      {children}
    </h3>
  )
}

function CategoryTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)] mb-3 mt-6">
      {children}
    </h4>
  )
}

export default function ResumePage() {
  const { t } = useTranslation()

  const skills = t('home.skills.items', { returnObjects: true }) as { name: string; value: number }[]
  const devExp = t('resume.items.devExperience', { returnObjects: true }) as ResumeItemData[]
  const teachExp = t('resume.items.teachExperience', { returnObjects: true }) as ResumeItemData[]
  const edu = t('resume.items.education', { returnObjects: true }) as EduData
  const certs = t('resume.items.certifications', { returnObjects: true }) as CertData[]
  const publications = t('resume.items.publications', { returnObjects: true }) as ResumeItemData[]
  const activities = t('resume.items.activities', { returnObjects: true }) as ResumeItemData[]

  return (
    <>
      <main className="py-16 pt-20">
        <div className="container">
          {/* Download buttons */}
          <div className="flex justify-end gap-3 mb-6 flex-wrap">
            <a href="/files/resume_general_noicons.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
              <Icon icon="mdi:download" width={16} />
              {t('resume.downloadGeneral')}
            </a>
            <a href="/files/resume_dev_noicons.pdf" target="_blank" rel="noopener noreferrer" className="btn-accent text-sm">
              <Icon icon="mdi:download" width={16} />
              {t('resume.downloadDev')}
            </a>
          </div>

          {/* Summary */}
          <div
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
            className="rounded-xl p-5 mb-8 space-y-2"
          >
            <p className="text-sm text-[var(--text)]">{t('resume.summary1')}</p>
            <p className="text-sm text-[var(--text)]">{t('resume.summary2')}</p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {/* LEFT COLUMN */}
            <div>
              <SectionTitle>{t('resume.experience.title')}</SectionTitle>

              <CategoryTitle>{t('resume.experience.development')}</CategoryTitle>
              {devExp.map((item, i) => <ResumeItem key={i} {...item} />)}

              <CategoryTitle>{t('resume.experience.teaching')}</CategoryTitle>
              {teachExp.map((item, i) => <ResumeItem key={i} {...item} />)}
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <SectionTitle>{t('resume.education.title')}</SectionTitle>

              <ResumeItem {...edu} />
              <p className="text-sm text-[var(--text-muted)] -mt-4 mb-6 pl-4">
                <a href="/files/thesis.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline font-semibold">
                  {t('resume.thesis.label')}
                </a>{' '}
                {t('resume.thesis.title')}
              </p>

              <motion.div variants={fadeIn}>
                <h4
                  style={{ borderBottom: '2px solid var(--accent)' }}
                  className="text-sm font-bold uppercase tracking-wider text-[var(--text)] pb-2 mb-4"
                >
                  {t('resume.certifications.sectionTitle')}
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  {certs.map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <Icon icon="mdi:check-circle-outline" className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[var(--text)]">{c.name}</strong>
                        <em> — {c.org}. {c.date}.</em>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="mt-8">
                <SectionTitle>{t('resume.publications.title')}</SectionTitle>
                {publications.map((item, i) => <ResumeItem key={i} {...item} />)}
              </div>

              <div className="mt-8">
                <SectionTitle>{t('resume.activities.title')}</SectionTitle>
                {activities.map((item, i) => {
                  const isCongressEntry = i === 1
                  return (
                    <div key={i}>
                      <ResumeItem {...item} />
                      {isCongressEntry && (
                        <p className="text-sm text-[var(--text-muted)] -mt-4 mb-6 pl-4">
                          <a href="/files/poster_popayan.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline font-semibold">
                            {t('resume.poster.label')}
                          </a>{' '}
                          {t('resume.poster.title')}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <div className="mt-12">
            <h2 className="section-title text-center">{t('resume.skills.title')}</h2>
            <div className="section-divider" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mt-6">
              {skills.map(s => <SkillBar key={s.name} name={s.name} value={s.value} />)}
            </div>
          </div>

          {/* Contact */}
          <div
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
            className="mt-12 rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-[var(--text)] mb-4">{t('resume.contact.title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://www.linkedin.com/in/francisco-mayorga-cetina/"
                className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Icon icon="mdi:linkedin" width={20} />
                LinkedIn profile
              </a>
              <a
                href="mailto:f.maycet@gmail.com"
                className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Icon icon="mdi:email-outline" width={20} />
                f.maycet@gmail.com
              </a>
              <a
                href="https://wa.me/+573202128525"
                className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Icon icon="mdi:whatsapp" width={20} />
                +57 320 212 8525
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
