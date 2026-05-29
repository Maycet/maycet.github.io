import { useTranslation } from 'react-i18next'
import GalleryGrid, { type GalleryCategory, type GalleryItem } from '../components/ui/GalleryGrid'

const galleryMeta: { src: string; category: GalleryCategory }[] = [
  { src: '/img/gallery/illustration/alice.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/alien.png', category: 'illustration' },
  { src: '/img/gallery/illustration/baby_luigi.jpg', category: 'illustration' },
  { src: '/img/gallery/design/background.png', category: 'design' },
  { src: '/img/gallery/illustration/baron.png', category: 'illustration' },
  { src: '/img/gallery/illustration/boned_hand.png', category: 'illustration' },
  { src: '/img/gallery/illustration/camelo_color.png', category: 'illustration' },
  { src: '/img/gallery/illustration/colombianito.png', category: 'illustration' },
  { src: '/img/gallery/illustration/covid_resstriction.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/damiancho.png', category: 'illustration' },
  { src: '/img/gallery/illustration/demon_mike.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/Ghost.png', category: 'illustration' },
  { src: '/img/gallery/illustration/grinch.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/horned_skull.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/klaus.jpg', category: 'illustration' },
  { src: '/img/gallery/design/math.png', category: 'design' },
  { src: '/img/gallery/design/maycet.jpg', category: 'design' },
  { src: '/img/gallery/design/maycet2.jpg', category: 'design' },
  { src: '/img/gallery/design/maycet_project.jpeg', category: 'design' },
  { src: '/img/gallery/design/maycet.png', category: 'design' },
  { src: '/img/gallery/illustration/moto.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/pachitico.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/pacho.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/pacho_chibi.png', category: 'illustration' },
  { src: '/img/gallery/illustration/pacho_draw.png', category: 'illustration' },
  { src: '/img/gallery/illustration/pacho_feliz.png', category: 'illustration' },
  { src: '/img/gallery/illustration/pacho_noskin.png', category: 'illustration' },
  { src: '/img/gallery/illustration/rocky.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/ship_galaga.png', category: 'illustration' },
  { src: '/img/gallery/illustration/skull.png', category: 'illustration' },
  { src: '/img/gallery/illustration/sky.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/videocall.jpg', category: 'illustration' },
  { src: '/img/gallery/illustration/xray.jpg', category: 'illustration' },
]

export default function GalleryPage() {
  const { t } = useTranslation()

  const itemsI18n = t('gallery.items', { returnObjects: true }) as { title: string; description: string }[]
  const galleryItems: GalleryItem[] = galleryMeta.map((meta, i) => ({ ...meta, ...itemsI18n[i] }))

  const filterLabels = {
    all: t('gallery.filters.all'),
    illustration: t('gallery.filters.illustration'),
    design: t('gallery.filters.design'),
  }

  return (
    <main className="py-16 pt-20">
      <div className="container">
        <h2 className="section-title">{t('gallery.pageTitle')}</h2>
        <div className="section-divider mb-8" />
        <GalleryGrid items={galleryItems} labels={filterLabels} />
      </div>
    </main>
  )
}
