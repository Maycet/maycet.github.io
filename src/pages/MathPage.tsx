import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/layout/Breadcrumb'

const papers = [
  {
    href: 'https://arxiv.org/abs/2101.10425v2',
    title: 'A unifying framework for the ν-Tamari lattice and principal order ideals in Young\'s lattice',
    collab: 'In collaboration with Matias von Bell, Rafael S. González D\'León & Martha Yip',
    body: `We present a unifying framework in which both the ν-Tamari lattice, introduced by Préville-Ratelle and Viennot,
      and principal order ideals in Young's lattice indexed by lattice paths ν, are realized as the dual graphs of two
      combinatorially striking triangulations of a family of flow polytopes which we call the ν-caracol flow polytopes.
      The first triangulation gives a new geometric realization of the ν-Tamari complex introduced by Ceballos, Padrol and Sarmiento.
      We use the second triangulation to show that the h∗-vector of the ν-caracol flow polytope is given by the ν-Narayana numbers,
      extending a result of Mészáros when ν is a staircase lattice path. Our work generalizes and unifies results on the dual structure
      of two subdivisions of a polytope studied by Pitman and Stanley.`,
  },
  {
    href: 'https://www.mat.univie.ac.at/~slc/wpapers/FPSAC2021/42',
    title: 'On Framed Triangulations of Flow Polytopes, the ν-Tamari Lattice and Young\'s Lattice',
    collab: 'In collaboration with Matias von Bell, Rafael S. González D\'León and Martha Yip',
    body: `We study two combinatorially striking triangulations of a family of flow polytopes indexed by lattice paths ν which we call
      the ν-caracol flow polytopes. The first triangulation gives a geometric realization of the ν-Tamari complex introduced by Ceballos,
      Padrol and Sarmiento, whose dual graph is the Hasse diagram of the ν-Tamari lattice introduced by Préville-Ratelle and Viennot.
      The dual graph of the second triangulation is the Hasse diagram of the principal order ideal determined by ν in Young's lattice.
      We use the latter triangulation to show that the h*-vector of the ν-caracol flow polytope is given by the ν-Narayana numbers,
      extending the result of Mészáros when ν is a staircase lattice path.`,
  },
  {
    href: '/files/thesis.pdf',
    title: 'Characterizing dual graphs associated to triangulations of the Caracol flow polytope',
    collab: 'Thesis with which I obtained the undergraduate degree in mathematics',
    body: `Associated with a directed graph G and a sequence that represents net flows at the vertices of G we can define a polytope
      whose points correspond to flows through the directed edges of G. The family of polytopes obtained in this way are called flow
      polytopes and are the subject of recent study. Stanley-Postnikov and Mezsáros-Morales-Striker proposed a procedure to construct
      different subdivisions of a flow polytope. For the net flow sequence (1,0,...,0), any such subdivision turns out to be a
      triangulation. We study the dual graphs of such triangulations for a particular family of graphs known as Caracol graphs,
      previously studied by Benedetti et al., and whose associated flow polytopes have normalized volumes given by the Catalan numbers.
      We show that the dual graph of one of the triangulations turns out to be 1-skeleton of the simplicial Associahedron and the other
      is a toggle graph that is obtained through inversion operations on the set of Dyck paths.`,
    internal: true,
  },
  {
    href: '/files/poster_popayan.pdf',
    title: 'Flow polytopes and triangulations of the Caracol polytope',
    collab: 'Poster presented in the XXII Congreso Colombiano de Matemáticas',
    body: 'In this event I gave a brief introduction to the topics studied for my undergraduate thesis, with some examples and the results we achieved in that work.',
    internal: true,
  },
]

export default function MathPage() {
  const { t } = useTranslation()

  const breadcrumbs = (t('math.breadcrumb', { returnObjects: true }) as string[]).map((label, i) => ({
    label,
    href: i === 0 ? '/' : undefined,
  }))

  return (
    <>
      <Breadcrumb title={t('math.pageTitle')} crumbs={breadcrumbs} />
      <main className="py-16 pt-20">
        <div className="container max-w-3xl">
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
                  target={paper.internal ? '_blank' : '_blank'}
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
    </>
  )
}
