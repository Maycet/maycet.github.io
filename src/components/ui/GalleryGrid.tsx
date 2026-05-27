import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export type GalleryCategory = 'illustration' | 'design'

export interface GalleryItem {
  src: string
  title: string
  description: string
  category: GalleryCategory
}

interface GalleryGridProps {
  items: GalleryItem[]
  labels: { all: string; illustration: string; design: string }
}

type Filter = 'all' | GalleryCategory

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:   { opacity: 0, scale: 0.85, transition: { duration: 0.2, ease: 'easeIn' } },
}

export default function GalleryGrid({ items, labels }: GalleryGridProps) {
  const [filter, setFilter] = useState<Filter>('all')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered = filter === 'all' ? items : items.filter(i => i.category === filter)
  const slides = filtered.map(i => ({ src: i.src, title: i.title, description: i.description }))

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {(['all', 'illustration', 'design'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={
              filter === f
                ? { background: 'var(--accent)', color: '#fff' }
                : { background: 'var(--bg-card)', color: 'var(--text)', border: '1px solid var(--border)' }
            }
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:border-[var(--accent)] cursor-pointer"
          >
            {labels[f]}
          </button>
        ))}
      </div>

      {/* Grid con animación layout + AnimatePresence */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.src}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="portfolio-wrap aspect-square cursor-pointer rounded-lg overflow-hidden"
              onClick={() => setLightboxIndex(idx)}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${item.src})` }}
              />
              <div className="portfolio-info">
                <h5 className="font-semibold mb-1" style={{ color: 'var(--accent)' }}>{item.title}</h5>
                <p className="text-sm" style={{ color: 'var(--overlay-text)' }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </div>
  )
}
