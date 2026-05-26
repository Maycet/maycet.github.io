import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/layout/Breadcrumb'

export default function TermsPage() {
  const { t } = useTranslation()

  const breadcrumbs = (t('terms.breadcrumb', { returnObjects: true }) as string[]).map((label, i) => ({
    label,
    href: i === 0 ? '/' : undefined,
  }))

  return (
    <>
      <Breadcrumb title={t('terms.pageTitle')} crumbs={breadcrumbs} />
      <main className="py-16 pt-20">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-[var(--text)]"
          >
            <h2 className="text-2xl font-bold text-[var(--accent)]">Terms of Use</h2>
            <p>
              The contents (of any type or format) published on this website are the property of{' '}
              <em>Francisco Alfonso Mayorga Cetina (Maycet)</em>. The user can cite the content of the present
              with the incorporation of the source and the link to the main page{' '}
              <em><strong>maycet.github.io</strong></em>.
            </p>
            <p>
              All rights, including those of Intellectual Property, regarding the web pages of this site belong
              to <em>Francisco Alfonso Mayorga Cetina (Maycet)</em>. By accessing it, the user has the right to
              review all the information required and may only copy it to their computer for personal and
              non-commercial purposes.
            </p>
            <p>
              The information provided by <em><strong>maycet.github.io</strong></em> can be referenced by third
              parties, only if its origin is clearly indicated. If it is desired to make such a reference in
              promotional materials or other means, it may be done only with the written permission of{' '}
              <em>Francisco Alfonso Mayorga Cetina (Maycet)</em>.
            </p>

            <h2 className="text-2xl font-bold text-[var(--accent)] mt-8">Copyright</h2>
            <img
              src="https://licensebuttons.net/l/by-nc-sa/3.0/88x31.png"
              alt="CC BY-NC-SA 4.0"
              className="mb-4"
            />
            <p>
              Unless otherwise stated, the content of this website is protected by a{' '}
              <em>Creative Commons License: Attribution - NonCommercial - ShareAlike 4.0 International</em>{' '}
              under which you are free to copy, distribute, communicate and publicly disseminate this document
              as well as make derivative works thereof under the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <em><strong>Attribution:</strong></em> You must acknowledge and cite the work in the manner
                specified by the author.
              </li>
              <li>
                <em><strong>Non Commercial:</strong></em> You can not use this work for commercial purposes.
              </li>
              <li>
                <em><strong>ShareAlike:</strong></em> If you alter or transform this work, or create a derivative
                work, you may only distribute the generated work under a license identical to this one.
              </li>
            </ul>
            <p>
              When reusing or distributing the work, you must make clear the license terms of this work as well
              as the reference to the author of the work (
              <em>cc: Francisco Alfonso Mayorga Cetina "Maycet"</em>).
            </p>
            <p>
              Full legal code of this license on the website of{' '}
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
              >
                Creative Commons
              </a>
              .
            </p>
          </motion.div>
        </div>
      </main>
    </>
  )
}
