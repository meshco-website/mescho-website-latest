import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './wirewall.module.css'
import ExploreProductsCard from '../_components/ExploreProductsCard'

export default function WireWallPage() {
  return (
    <div className={styles.wireWallPage}>
      {/* Hero Section with Image */}
      <section className={styles.heroSection}>
        <Image
          src="/wirewallHero.png"
          alt="WireWall fencing system"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>WIREWALL</div>
          <h1 className={styles.heroTitle}>Our Longest Lasting, Most Secure Fencing</h1>
          <p className={styles.heroDescription}>
            Built from premium-grade steel, protected by our corrosion-resistant, UV-stabilised
            coating, and secured with concealed anti-tamper fixings.
            <span className={styles.highlight}>
              {' '}
              WireWall is designed to defend and engineered to endure
            </span>
          </p>
          <Link href="/wirewall-quote" className={styles.heroButton}>
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Post That Sets WireWall Apart Section */}
      <section className={styles.introSection}>
        <h2 className={styles.introTitle}>The Post That Sets WireWall Apart</h2>
        <p className={styles.introSubtitle}>At the Core of Every WireWall Fence</p>
        <p className={styles.introText}>
          At the heart of every WireWall is our patented post and clamping mechanism — purpose-built
          to deliver unmatched strength, clean aesthetics, and total tamper resistance, both from
          outside and inside the fence line.
        </p>
      </section>

      {/* Concealed Fixing System Section */}
      <section className={styles.featureSection}>
        <div className={`${styles.featureContainer} ${styles.concealedContainer}`}>
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>Concealed Fixing System</h3>
            <div className={styles.featureText}>
              <p>Our unique clamping assembly ensures no exposed fixings:</p>
              <ul>
                <li>The front cover plate secures the panel tightly against the post</li>
                <li>
                  A tie rod, round nut, washer, and shear nut form a robust, internal locking system
                </li>
                <li>
                  All components are completely hidden from view, eliminating tamper points and
                  preserving a clean, architectural profile
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.leftColumn}>
            <div className={styles.featureImageWrapper}>
              <Image
                src="/concealedSystem.png"
                alt="Concealed fixing system"
                fill
                className={styles.featureImage}
              />
            </div>
            <div className={styles.quoteSection}>
              <p className={styles.quoteText}>
                No visible fixators. No exposed brackets or clamps. No weak points. Just clean,
                secure lines — built to perform and designed to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather-Sealed Section */}
      <section className={styles.featureSection}>
        <div className={`${styles.featureContainer} ${styles.weatherSealedContainer}`}>
          <div className={styles.featureImageWrapper}>
            <Image
              src="/weatherSealed.png"
              alt="Weather-sealed system"
              fill
              className={styles.featureImage}
            />
          </div>
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>Weather-Sealed for Longevity</h3>
            <ul className={styles.featureList}>
              <li>UV-stabilised polypropylene cap prevents water ingress and internal corrosion</li>
              <li>
                400-micron thermoplastic coating shields every part of the system from salt, UV, and
                harsh environments
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className={styles.bannerSection}>
        <Image
          src="/wirewallBanner.png"
          alt="Manufacturing commitment"
          fill
          className={styles.bannerImage}
        />
        <p className={styles.bannerText}>
          Buy direct from Meshco; the manufacturer. We can guarantee quality, because we own and
          control each step of the process. From drawing and galvanising the wire to the highest
          grade, to manufacturing the panels to precision specifications, and coating all material
          to coastal grade.
        </p>
      </section>

      {/* Related Products Section */}
      <section className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>You may also be interested in</h2>
        <div className={styles.relatedGrid}>
          <ExploreProductsCard
            image="/meshcowirewall.png"
            title="Panel Options"
            link="/wirewall/panel-options"
            description="View sizes, apertures, and wire diameters"
          />
          <ExploreProductsCard
            image="/meshcowirewall.png"
            title="Engineering Centre"
            link="/wirewall/engineering-centre"
            description="CAD drawings, Revit files, and install guides"
          />
          <ExploreProductsCard
            image="/meshcowirewall.png"
            title="Case Studies & References"
            link="/wirewall/case-studies"
            description="Explore completed projects across South Africa"
          />
        </div>
      </section>
    </div>
  )
}
