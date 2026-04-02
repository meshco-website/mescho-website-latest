import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getProductBySlug, productDetailConfigs } from '@/data/products'
import './styles.css'
import styles from './homepage.module.css'
import ExploreProductsCard from './_components/ExploreProductsCard'
import BestSellerCard from './_components/BestSellerCard'

const BEST_SELLER_KEYS = [
  'wirewall-3510',
  'fencing-razor-wire-flatwrap',
  'reinforcing-reinforcing-mesh',
  'reinforcing-brickforce',
  'wire-high-strain-wire',
] as const

type BestSellerKey = (typeof BEST_SELLER_KEYS)[number]

// Custom titles for best sellers - add your custom titles here
const BEST_SELLER_CUSTOM_TITLES: Record<BestSellerKey, string> = {
  'wirewall-3510': 'WireWall 3510',
  'fencing-razor-wire-flatwrap': 'Razor Wire 500mm',
  'reinforcing-reinforcing-mesh': 'Ref193 Mesh',
  'reinforcing-brickforce': '75mm Brickforce NHBRC',
  'wire-high-strain-wire': '2mm LG H/S  Wire 50KG',
}

interface BestSellerCardData {
  title: string
  image: string
  description: string
  linkHref: string
}

const extractSummary = (text: string): string => {
  const sentenceMatch = text.match(/[^.?!]+[.?!]/)
  if (sentenceMatch) {
    return sentenceMatch[0].trim()
  }
  return text
}

const buildBestSellerCard = (key: BestSellerKey): BestSellerCardData | null => {
  const detail = productDetailConfigs[key]
  if (!detail) {
    return null
  }

  const [category, ...slugParts] = key.split('-')
  const slug = slugParts.join('-')
  const product = getProductBySlug(category, slug)

  if (!product) {
    return null
  }

  // Use custom title if provided, otherwise fall back to product title or name
  const customTitle = BEST_SELLER_CUSTOM_TITLES[key]
  const title = customTitle || product.title || product.name

  return {
    title,
    image: product.image,
    description: extractSummary(detail.description),
    linkHref: `/products/${category}/${slug}`,
  }
}

const bestSellerCards = BEST_SELLER_KEYS.map(buildBestSellerCard).filter(
  (card): card is BestSellerCardData => Boolean(card),
)

export default function HomePage() {
  return (
    <div>
      <section className={styles.hero}>
        <Image
          src="/HomeHeroBack.png"
          alt=""
          fill
          priority
          className={styles.heroImage}
          sizes="(min-width: 1440px) 100vw, 100vw"
          quality={75}
        />
        <div className={styles.heroOverlay} />
        <div className={`${styles.container} ${styles.heroContainer}`}>
          <div className={styles.content}>
            <h1 className={styles.mainHeading}>
              The Leading Manufacturer of Quality Wire, Fencing and Reinforcing Products
            </h1>
            <p className={styles.subHeading}>STRENGTH IN EVERY WIRE</p>
          </div>
        </div>
      </section>
      <section className={styles.exploreProducts}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Explore our range of products</h2>
          <div className={styles.productCategories}>
            <ExploreProductsCard image="/wire.jpg" title="Wire" link="/products/wire" />
            <ExploreProductsCard
              image="/wirewallfencing.jpg"
              title="WireWall Fencing"
              link="/products/wirewall"
            />
            <ExploreProductsCard image="/fencing.png" title="Fencing" link="/products/fencing" />
            <ExploreProductsCard
              image="/reinforcing.jpg"
              title="Reinforcing"
              link="/products/reinforcing"
            />
            <ExploreProductsCard
              image="/miningsupport.png"
              title="Mining Support"
              link="/products/mining-support"
            />
            <ExploreProductsCard
              image="/fasteners.png"
              title="Fasteners"
              link="/products/fasteners"
            />

            <ExploreProductsCard image="/utility.png" title="Utility" link="/products/utility" />
          </div>
        </div>
      </section>

      <section className={styles.wirewallSection}>
        <div className={styles.containerCentered}>
          <h2 className={styles.wirewallTitle}>Meshco WireWall</h2>
          <p className={styles.wirewallSubtitle}>Securing what matters to you</p>
          <Link href="/wirewall" className={styles.wirewallButton}>
            Learn more
          </Link>
        </div>
      </section>

      <section className={styles.bestSellers}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Best Sellers</h2>
          <div className={styles.productGrid}>
            {bestSellerCards.map((card) => (
              <BestSellerCard
                key={card.linkHref}
                title={card.title}
                image={card.image}
                description={card.description}
                linkText="Learn More"
                linkHref={card.linkHref}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
