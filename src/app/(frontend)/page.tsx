import React from 'react'
import './styles.css'
import styles from './homepage.module.css'
import ExploreProductsCard from './_components/ExploreProductsCard'
import BestSellerCard from './_components/BestSellerCard'

export default function HomePage() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
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
              image="/placeholder.svg"
              title="Mining Support"
              link="/products/mining-support"
            />
            <ExploreProductsCard
              image="/fasteners.png"
              title="Fasteners"
              link="/products/fasteners"
            />
            <ExploreProductsCard
              image="/placeholder.svg"
              title="Utility"
              link="/products/utility"
            />
          </div>
        </div>
      </section>

      <section className={styles.wirewallSection}>
        <div className={styles.containerCentered}>
          <h2 className={styles.wirewallTitle}>Meshco WireWall</h2>
          <p className={styles.wirewallSubtitle}>Securing what matters to you</p>
          <button className={styles.wirewallButton}>Learn more</button>
        </div>
      </section>

      <section className={styles.bestSellers}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Best Sellers</h2>
          <div className={styles.productGrid}>
            <BestSellerCard
              title="WireWall 3510"
              image="/placeholder.svg"
              description="Lorem ipsum dolor sit amet consectetur"
              linkText="Learn More"
              linkHref="/products/wirewall/3510"
            />
            <BestSellerCard
              title="Hard Drawn Wire"
              image="/placeholder.svg"
              description="High-quality wire for construction"
              linkText="Learn More"
              linkHref="/products/wire/hard-drawn-wire"
            />
            <BestSellerCard
              title="Brickforce"
              image="/placeholder.svg"
              description="Premium reinforcement mesh"
              linkText="Learn More"
              linkHref="/products/reinforcing/brickforce"
            />
            <BestSellerCard
              title="Welded Fence Mesh"
              image="/placeholder.svg"
              description="Durable security fencing"
              linkText="Learn More"
              linkHref="/products/fencing/welded-fence-mesh"
            />
            <BestSellerCard
              title="Galvanised Wire"
              image="/placeholder.svg"
              description="Corrosion-resistant wire"
              linkText="Learn More"
              linkHref="/products/wire/galvanised-wire"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
