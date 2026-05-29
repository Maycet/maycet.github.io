import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function TermsPage() {
  const { t } = useTranslation()

  return (
    <>
      <main className="py-16 pt-20">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-[var(--text)]"
          >
            <h2 className="text-2xl font-bold text-[var(--accent)]">{t('terms.useTitle')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('terms.useP1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('terms.useP2') }} />
            <p dangerouslySetInnerHTML={{ __html: t('terms.useP3') }} />

            <h2 className="text-2xl font-bold text-[var(--accent)] mt-8">{t('terms.copyrightTitle')}</h2>
            <img
              src="https://licensebuttons.net/l/by-nc-sa/3.0/88x31.png"
              alt="CC BY-NC-SA 4.0"
              className="mb-2"
            />
            <p dangerouslySetInnerHTML={{ __html: t('terms.copyrightIntro') }} />
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <em><strong>{t('terms.attrLabel')}</strong></em>{' '}
                {t('terms.attrText')}
              </li>
              <li>
                <em><strong>{t('terms.nonCommLabel')}</strong></em>{' '}
                {t('terms.nonCommText')}
              </li>
              <li>
                <em><strong>{t('terms.shareLabel')}</strong></em>{' '}
                {t('terms.shareText')}
              </li>
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t('terms.copyrightP1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('terms.copyrightP2') }} />
            <p dangerouslySetInnerHTML={{ __html: t('terms.copyrightP3') }} />
            <p dangerouslySetInnerHTML={{ __html: t('terms.copyrightP4') }} />
          </motion.div>
        </div>
      </main>
    </>
  )
}
