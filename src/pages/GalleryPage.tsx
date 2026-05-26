import { useTranslation } from 'react-i18next'
import Breadcrumb from '../components/layout/Breadcrumb'
import GalleryGrid, { type GalleryItem } from '../components/ui/GalleryGrid'

const galleryItems: GalleryItem[] = [
  { src: '/img/gallery/illustration/alice.jpg', title: 'Alice', description: 'Animated version of my girlfriend', category: 'illustration' },
  { src: '/img/gallery/illustration/alien.png', title: 'Alien', description: 'Just an Alien', category: 'illustration' },
  { src: '/img/gallery/illustration/baby_luigi.jpg', title: 'Baby Luigi', description: 'Being kidnapped by a stork', category: 'illustration' },
  { src: '/img/gallery/design/background.png', title: 'Background', description: 'For posts and my Twitch channel scenes', category: 'design' },
  { src: '/img/gallery/illustration/baron.png', title: 'Baron', description: "Whispers of the Heart movie cat statue", category: 'illustration' },
  { src: '/img/gallery/illustration/boned_hand.png', title: 'Rock', description: 'A rock skeleton hand', category: 'illustration' },
  { src: '/img/gallery/illustration/camelo_color.png', title: 'Jhon', description: 'An illustration for my friend Jhon', category: 'illustration' },
  { src: '/img/gallery/illustration/colombianito.png', title: 'Colombianito', description: 'Just a colombian guy', category: 'illustration' },
  { src: '/img/gallery/illustration/covid_resstriction.jpg', title: 'Keep inside', description: 'The situation in which we could not leave home due to the pandemic', category: 'illustration' },
  { src: '/img/gallery/illustration/damiancho.png', title: 'Damiancho', description: "A representation of Damiancho94's Twitch channel", category: 'illustration' },
  { src: '/img/gallery/illustration/demon_mike.jpg', title: 'Mike', description: 'My older brother on a demon state', category: 'illustration' },
  { src: '/img/gallery/illustration/Ghost.png', title: 'Ghosts', description: 'Ghosts in a cemetery, made for some Inktober', category: 'illustration' },
  { src: '/img/gallery/illustration/grinch.jpg', title: 'Grinch', description: 'A very Christmassy grinch', category: 'illustration' },
  { src: '/img/gallery/illustration/horned_skull.jpg', title: 'Horned skull', description: 'A skull with horns, just because', category: 'illustration' },
  { src: '/img/gallery/illustration/klaus.jpg', title: 'Klaus', description: 'Main character of the Netflix movie', category: 'illustration' },
  { src: '/img/gallery/design/math.png', title: 'Math', description: 'is way more powerful than magic', category: 'design' },
  { src: '/img/gallery/design/maycet.jpg', title: 'Maycet', description: 'First logo', category: 'design' },
  { src: '/img/gallery/design/maycet2.jpg', title: 'Maycet', description: 'Second logo', category: 'design' },
  { src: '/img/gallery/design/maycet_project.jpeg', title: 'Maycet', description: 'Third logo', category: 'design' },
  { src: '/img/gallery/design/maycet.png', title: 'Maycet', description: 'Current logo', category: 'design' },
  { src: '/img/gallery/illustration/moto.jpg', title: 'Harley', description: 'Harley-Davidson cruiser style motorcycle', category: 'illustration' },
  { src: '/img/gallery/illustration/pachitico.jpg', title: 'Pachitico', description: 'My childhood teddy bear', category: 'illustration' },
  { src: '/img/gallery/illustration/pacho.jpg', title: 'Pacho', description: 'An animated version of myself', category: 'illustration' },
  { src: '/img/gallery/illustration/pacho_chibi.png', title: 'Pacho', description: 'A strange version of myself', category: 'illustration' },
  { src: '/img/gallery/illustration/pacho_draw.png', title: 'Pacho', description: 'A "pencil" drawing version of myself', category: 'illustration' },
  { src: '/img/gallery/illustration/pacho_feliz.png', title: 'Pacho', description: 'My favorite emote, from my Twitch channel', category: 'illustration' },
  { src: '/img/gallery/illustration/pacho_noskin.png', title: 'Pacho', description: 'A no skin version of myself', category: 'illustration' },
  { src: '/img/gallery/illustration/rocky.jpg', title: 'Rocky', description: 'One of my dear dogs', category: 'illustration' },
  { src: '/img/gallery/illustration/ship_galaga.png', title: 'Ship', description: "A remastered version of Galaga's ship", category: 'illustration' },
  { src: '/img/gallery/illustration/skull.png', title: 'Green skull', description: 'Made while I was learning some Adobe Illustrator', category: 'illustration' },
  { src: '/img/gallery/illustration/sky.jpg', title: 'Sky', description: 'Just the sky I see almost everyday', category: 'illustration' },
  { src: '/img/gallery/illustration/videocall.jpg', title: 'Videocall', description: 'with her', category: 'illustration' },
  { src: '/img/gallery/illustration/xray.jpg', title: 'X-ray', description: 'View of an x-ray scanner', category: 'illustration' },
]

export default function GalleryPage() {
  const { t } = useTranslation()

  const breadcrumbs = (t('gallery.breadcrumb', { returnObjects: true }) as string[]).map((label, i) => ({
    label,
    href: i === 0 ? '/' : undefined,
  }))

  const filterLabels = t('gallery.filters', { returnObjects: true }) as { all: string; illustration: string; design: string }

  return (
    <>
      <Breadcrumb title={t('gallery.pageTitle')} crumbs={breadcrumbs} />
      <main className="py-16 pt-20">
        <div className="container">
          <GalleryGrid items={galleryItems} labels={filterLabels} />
        </div>
      </main>
    </>
  )
}
