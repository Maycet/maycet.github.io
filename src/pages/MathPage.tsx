import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const papersMeta = [
  {
    href: 'https://arxiv.org/abs/2101.10425v2',
    title: "A unifying framework for the ν-Tamari lattice and principal order ideals in Young's lattice",
  },
  {
    href: 'https://www.mat.univie.ac.at/~slc/wpapers/FPSAC2021/42',
    title: "On Framed Triangulations of Flow Polytopes, the ν-Tamari Lattice and Young's Lattice",
  },
  {
    href: '/files/thesis.pdf',
    title: 'Characterizing dual graphs associated to triangulations of the Caracol flow polytope',
  },
  {
    href: '/files/poster_popayan.pdf',
    title: 'Flow polytopes and triangulations of the Caracol polytope',
  },
]

export default function MathPage() {
  const { t } = useTranslation()

  const papersI18n = t('math.papers', { returnObjects: true }) as { collab: string; body: string }[]
  const papers = papersMeta.map((meta, i) => ({ ...meta, ...papersI18n[i] }))

  return (
    <main className="py-16 pt-20">
      <div className="container max-w-3xl">
        <h2 className="section-title">{t('math.pageTitle')}</h2>
        <div className="section-divider mb-10" />
        <div className="space-y-10">
          {papers.map((paper, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ borderBottom: '1px solid var(--border)' }}
              className="pb-10 last:border-0"
            >
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h4 className="text-lg font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] mb-2 transition-colors">
                  {paper.title}
                </h4>
              </a>
              <p className="text-sm font-semibold text-[var(--text-muted)] mb-3">{paper.collab}</p>
              <p className="text-[var(--text)] text-sm leading-relaxed">{paper.body.trim()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
