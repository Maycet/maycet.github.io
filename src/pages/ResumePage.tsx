import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Breadcrumb from '../components/layout/Breadcrumb'
import SkillBar from '../components/ui/SkillBar'

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }

function ResumeItem({
  title,
  period,
  org,
  orgHref,
  location,
  description,
}: {
  title: string
  period: string
  org?: string
  orgHref?: string
  location?: string
  description?: string | string[]
}) {
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
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          {Array.isArray(description) ? description.join(' ') : description}
        </p>
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

  const breadcrumbs = (t('resume.breadcrumb', { returnObjects: true }) as string[]).map((label, i) => ({
    label,
    href: i === 0 ? '/' : undefined,
  }))

  const skills = t('home.skills.items', { returnObjects: true }) as { name: string; value: number }[]

  return (
    <>
      <Breadcrumb title={t('resume.pageTitle')} crumbs={breadcrumbs} />
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

              <ResumeItem
                title="Engineer III"
                period="March 2026 - Present"
                org="StoneX Group Inc."
                orgHref="https://www.stonex.com/"
                location="Bogotá D.C., Colombia"
                description="Develop and implement .NET solutions with emphasis on backend services. Build robust applications leveraging .NET technologies, CI/CD pipelines, containerization, and observability tools. Apply engineering best practices using GitHub, Azure DevOps, and Azure cloud services."
              />
              <ResumeItem
                title="Development Coordinator – Investments Team"
                period="January 2025 - March 2026"
                org="Finanzas y Actuaría (Finac S.A.S)"
                orgHref="https://www.linkedin.com/company/finac-finanzas-y-actuar%C3%ADa"
                location="Bogotá D.C., Colombia"
                description="Lead the development of products related to investment instruments. Coordinate new cloud-based deployments and integration with enterprise identity systems. Provide customer-facing support and incident resolution."
              />
              <ResumeItem
                title="Analytics Consultant"
                period="July 2024 - December 2024"
                org="CALA Analytics"
                orgHref="https://www.linkedin.com/company/calaanalytics/"
                location="Bogotá D.C., Colombia"
                description="Implementation, documentation, and deployment of analytical tools using Python and SQL."
              />
              <ResumeItem
                title="Development Coordinator – Maintenance and Support"
                period="September 2023 - July 2024"
                org="Finanzas y Actuaría (Finac S.A.S)"
                orgHref="https://www.linkedin.com/company/finac-finanzas-y-actuar%C3%ADa"
                location="Bogotá D.C., Colombia"
                description="Supervise the maintenance development team. Manage resource allocation and task tracking through Azure DevOps. Lead software improvements based on WPF and .NET."
              />
              <ResumeItem
                title="Developer II (Senior .NET Developer)"
                period="August 2023 - September 2023"
                org="Sii Group Colombia (Thales project)"
                orgHref="https://www.linkedin.com/company/sii-group-colombia"
                location="Bogotá D.C., Colombia"
                description="Responsible for analyzing, designing, and implementing new features for applications, as well as maintaining or enhancing existing ones, with a focus on optimization, security, and promoting good development practices."
              />
              <ResumeItem
                title="Development Professional II"
                period="January 2023 - August 2023"
                org="Finanzas y Actuaría (Finac S.A.S)"
                orgHref="https://www.linkedin.com/company/finac-finanzas-y-actuar%C3%ADa"
                location="Bogotá D.C., Colombia"
                description="Guide junior developers and ensure timely project delivery. Develop WPF applications aligned with business needs."
              />
              <ResumeItem
                title="Development Analyst"
                period="November 2020 - December 2022"
                org="Finanzas y Actuaría (Finac S.A.S)"
                orgHref="https://www.linkedin.com/company/finac-finanzas-y-actuar%C3%ADa"
                location="Bogotá D.C., Colombia"
                description="Develop and maintain WinForms and ASP.NET applications. Design and develop REST and SOAP APIs. Work with SQL Server and Oracle databases."
              />

              <CategoryTitle>{t('resume.experience.teaching')}</CategoryTitle>

              <ResumeItem
                title="Adjunct Professor"
                period="October 2025 - December 2025"
                org="Universidad Sergio Arboleda"
                orgHref="https://www.usergioarboleda.edu.co/"
                location="Bogotá D.C., Colombia"
                description="Scientific Computing – Teach theoretical and practical programming classes applied to mathematics."
              />
              <ResumeItem
                title="Sergistas monitors group coordinator"
                period="June 2018 - January 2020"
                org="Sergio Arboleda University"
                orgHref="https://www.usergioarboleda.edu.co/"
                location="Bogotá D.C., Colombia"
                description="Candidate selection, performance evaluation of monitors, and administrative and logistical management."
              />
              <ResumeItem
                title='Continuing Education Teacher: "Talentos matemáticos" Program'
                period="March 2019 - May 2019"
                org="Sergio Arboleda University"
                orgHref="https://www.usergioarboleda.edu.co/"
                location="Bogotá D.C., Colombia"
                description="Courses for students with high capacities for mathematics and technology."
              />
              <ResumeItem
                title="Volunteer"
                period="February 2019 - November 2020"
                org="HAIKO Foundation"
                orgHref="https://www.linkedin.com/company/fundacionhaiko"
                location="Bogotá D.C., Colombia"
                description="Teaching accompaniment in discrete Mathematics and Computational Thinking courses."
              />
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <SectionTitle>{t('resume.education.title')}</SectionTitle>

              <ResumeItem
                title="Bachelor of Mathematics"
                period="January 2014 - May 2020"
                org="Sergio Arboleda University"
                orgHref="https://www.usergioarboleda.edu.co/"
                location="Bogotá D.C., Colombia"
                description=""
              />
              <p className="text-sm text-[var(--text-muted)] -mt-4 mb-6 pl-4">
                <a href="/files/thesis.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline font-semibold">
                  Thesis (honorific):
                </a>{' '}
                Characterizing Dual Graphs Associated to Triangulations of the Caracol Flow Polytope.
              </p>

              <motion.div variants={fadeIn}>
                <h4
                  style={{ borderBottom: '2px solid var(--accent)' }}
                  className="text-sm font-bold uppercase tracking-wider text-[var(--text)] pb-2 mb-4"
                >
                  Another Certification Courses
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  {[
                    { name: 'Tech Career Skills: Moving from Developer to Engineering Manager', org: 'LinkedIn Learning', date: 'May 2026' },
                    { name: 'React Development', org: 'Programming Hub', date: 'March 2026' },
                    { name: 'Blazor - The Complete Guide [.NET 9] [2025] [E-commerce]', org: 'Udemy', date: 'January 2026' },
                    { name: 'Exploring your DATAVERSE with IBM SPSS Modeler', org: 'Cala Academy', date: 'July 2024' },
                    { name: 'B2 Upper Intermediate', org: 'EF SET English Certificate', date: 'August 2023' },
                    { name: 'HTML, JavaScript and Services', org: 'ITTalent', date: 'August 2022' },
                    { name: 'UI/UX Certification Course', org: 'Programming Hub', date: 'November 2021' },
                    { name: 'Python 3 Certification Course', org: 'Programming Hub', date: 'August 2020' },
                    { name: 'Python Advanced Certification Course', org: 'Programming Hub', date: 'August 2020' },
                    { name: 'Python Certification Course', org: 'Programming Hub', date: 'August 2020' },
                    { name: 'Learn Python & Ethical hacking from scratch', org: 'Udemy', date: 'February 2020' },
                  ].map((c, i) => (
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
                <ResumeItem
                  title="A unifying framework for the ν-Tamari lattice and principal order ideals in Young's lattice"
                  period="Published: June 2023"
                  org="Combinatorica Journal, Springer"
                  orgHref="https://link.springer.com/article/10.1007/s00493-023-00022-x"
                />
                <ResumeItem
                  title="On Framed Triangulations of Flow Polytopes, the ν-Tamari Lattice and Young's Lattice"
                  period="Final version: April 2021"
                  org="Séminaire Lotharingien de Combinatoire, FPSAC 2021, Art. 42"
                  orgHref="https://www.mat.univie.ac.at/~slc/wpapers/FPSAC2021/42"
                  location="Bar Ilan University, Ramat Gan, Israel"
                />
              </div>

              <div className="mt-8">
                <SectionTitle>{t('resume.activities.title')}</SectionTitle>
                <ResumeItem
                  title="Regional Programming Marathon (South America North) ICPC"
                  period="November 2019"
                  org="Contestant, Grancolombian Polytechnic"
                  orgHref="https://acis.org.co/portal/content/marat%C3%B3n-regional-latinoamericana-acm-icpc-2019"
                />
                <ResumeItem
                  title="XXII Colombian Congress of Mathematics"
                  period="June 2019"
                  org="Speaker, University of Cauca, Popayán"
                  orgHref="https://scm.org.co/ccm2019/"
                  description=""
                />
                <p className="text-sm text-[var(--text-muted)] -mt-4 mb-6 pl-4">
                  <a href="/files/poster_popayan.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline font-semibold">
                    Poster:
                  </a>{' '}
                  Flow polytopes and triangulations of the Caracol polytope.
                </p>
                <ResumeItem
                  title="Cube Challenge Sergista"
                  period="September 2018, April 2019"
                  org="Organizer, Sergio Arboleda University"
                  orgHref="https://www.worldcubeassociation.org/competitions/SergioArboleda2018"
                />
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
