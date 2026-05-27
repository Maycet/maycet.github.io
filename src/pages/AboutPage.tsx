import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/layout/Breadcrumb'

function calcAge() {
  const birth = new Date(1997, 3, 30)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
  return age
}

export default function AboutPage() {
  const { t } = useTranslation()
  const age = calcAge()

  const breadcrumbs = (t('about.breadcrumb', { returnObjects: true }) as string[]).map((label, i) => ({
    label,
    href: i === 0 ? '/' : undefined,
  }))

  return (
    <>
      <Breadcrumb title={t('about.pageTitle')} crumbs={breadcrumbs} />
      <main className="py-16 pt-20">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-lg font-semibold text-[var(--text)] mb-10 whitespace-pre-line">
              {t('about.intro')}
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src="/img/photos/franco.jpeg"
                alt="Francisco Mayorga"
                className="w-full md:w-64 flex-shrink-0 rounded-xl shadow-lg object-cover"
              />
              <div className="space-y-4 text-[var(--text)]">
                <p dangerouslySetInnerHTML={{ __html: t('about.p1', { age }) }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.p4') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.p5') }} />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}
