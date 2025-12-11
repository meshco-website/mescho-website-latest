import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import styles from './industries.module.css'
import CompanyValueCard from '../_components/CompanyValueCard'

const INDUSTRY_CARDS = [
  {
    id: 'construction-infrastructure',
    title: 'Construction & Infrastructure',
    icon: '/industries/icons/construction-infrastructure-icon.svg',
    iconWidth: 45,
    iconHeight: 45,
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    icon: '/industries/icons/agriculture-icon.svg',
    iconWidth: 52,
    iconHeight: 49,
  },
  {
    id: 'security-perimeter-protection',
    title: 'Security & Perimeter Protection',
    icon: '/industries/icons/security-icon.svg',
    iconWidth: 40,
    iconHeight: 49,
  },
  {
    id: 'mining',
    title: 'Mining',
    icon: '/industries/icons/mining-icon.svg',
    iconWidth: 43,
    iconHeight: 43,
  },
  {
    id: 'transport-rail',
    title: 'Transport & Rail',
    icon: '/industries/icons/transport-rail-icon.svg',
    iconWidth: 35,
    iconHeight: 52,
  },
  {
    id: 'retail-hardware-distribution',
    title: 'Retail & Hardware Distribution',
    icon: '/industries/icons/retail-icon.svg',
    iconWidth: 47,
    iconHeight: 47,
  },
  {
    id: 'manufacturing-industrial',
    title: 'Manufacturing & Industrial',
    icon: '/industries/icons/manufacturing-icon.svg',
    iconWidth: 47,
    iconHeight: 47,
  },
  {
    id: 'forestry',
    title: 'Forestry',
    icon: '/industries/icons/forestry-icon.svg',
    iconWidth: 51,
    iconHeight: 53,
  },
  {
    id: 'recycling',
    title: 'Recycling',
    icon: '/industries/icons/recycling-icon.svg',
    iconWidth: 44,
    iconHeight: 46,
  },
  {
    id: 'public-sector-government',
    title: 'Public Sector & Government',
    icon: '/industries/icons/public-sector-icon.svg',
    iconWidth: 49,
    iconHeight: 46,
  },
]

const INDUSTRY_SECTIONS = [
  {
    id: 'construction-infrastructure',
    title: 'Construction & Infrastructure',
    tagline: 'Strength you can build on.',
    descriptions: [
      'From iconic stadiums to bridges and urban infrastructure, Meshco’s wire and reinforcing products support projects that define the landscape. Built for durability and engineered to perform, our solutions are the backbone of major builds.',
    ],
    trustedProducts: [
      'Reinforcing Mesh',
      'Brickforce',
      'Cavity Wall Ties',
      'Black Annealed Wire',
      'Round Wire Nails',
      'Reinforcing Steel',
      'Slab Wire',
      'WireWall',
    ],
    usedFor: [
      'Reinforcing concrete slabs, walls, and structural elements',
      'Masonry stability and wall tie systems',
      'Perimeter protection on construction sites',
    ],
    image: '/industries/sections/construction-infrastructure.jpg',
    imageAlt: 'Construction site with cranes and scaffolding',
    imagePosition: 'left' as const,
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    tagline: 'Protecting South Africa’s fields and herds.',
    descriptions: [
      'From trellising vineyards to fencing game reserves, Meshco supports the country’s farms and agricultural cooperatives with reliable, weather-resistant wire products.',
    ],
    trustedProducts: [
      'High Strain Wire',
      'Steel Fencing Y-Standards & Droppers',
      'Galvanised Wire in Coils',
      'Field/Game Fence',
      'Netting',
      'Barbed Wire',
      'Razor Wire',
      'Electric Fencing',
    ],
    usedFor: [
      'Livestock fencing and security',
      'Fruit farm trellising systems',
      'Boundary demarcation and containment',
    ],
    image: '/industries/sections/agriculture.jpg',
    imageAlt: 'Vineyard rows supported by trellis fencing',
    imagePosition: 'right' as const,
  },
  {
    id: 'security-perimeter-protection',
    title: 'Security & Perimeter Protection',
    tagline: 'Where protection is critical, Meshco delivers.',
    descriptions: [
      'Our tamper-resistant fencing solutions protect infrastructure, communities, and assets; offering peace of mind in high-risk zones and private properties alike.',
    ],
    trustedProducts: [
      'WireWall',
      'High Strain Wire',
      'Galvanised Wire in Coils',
      'Razor Mesh',
      'Razor Wire',
      'Barbed Wire',
      'Welded Mesh Fencing',
      'Diamond Mesh',
    ],
    usedFor: [
      'High-security installations and compounds',
      'Industrial and commercial perimeter control',
      'Private homes and estates',
    ],
    image: '/industries/sections/security.jpg',
    imageAlt: 'WireWall security fencing around industrial site',
    imagePosition: 'left' as const,
  },
  {
    id: 'mining',
    title: 'Mining',
    tagline: 'Engineered for extremes.',
    descriptions: [
      'Meshco supports South Africa’s mining sector with tough, reliable mesh and fencing systems that protect lives and infrastructure in underground and open-pit sites.',
    ],
    trustedProducts: ['Mining Support Mesh', 'WireWall', 'Y-Standards'],
    usedFor: ['Ground support and tunnel mesh', 'Site security and fencing for mining operations'],
    image: '/industries/sections/mining.jpg',
    imageAlt: 'Heavy machinery operating on a mining site',
    imagePosition: 'right' as const,
  },
  {
    id: 'transport-rail',
    title: 'Transport & Rail',
    tagline: 'Keeping critical infrastructure secure.',
    descriptions: [
      'Meshco’s fencing products are trusted to protect transport corridors, reduce theft, and prevent costly service disruptions.',
    ],
    trustedProducts: ['WireWall'],
    usedFor: [
      'Securing rail lines and stations',
      'Preventing cable theft',
      'Border fencing around depots and transport nodes',
    ],
    image: '/industries/sections/transport-rail.jpg',
    imageAlt: 'Train on a rail line secured by fencing',
    imagePosition: 'left' as const,
  },
  {
    id: 'retail-hardware-distribution',
    title: 'Retail & Hardware Distribution',
    tagline: 'Bringing quality to your shelf.',
    descriptions: [
      'We supply ready-to-sell, packaged wire and fencing products to retail chains and independent hardware distributors nationwide.',
    ],
    trustedProducts: [
      'Galvanised Wire in Coils',
      'Fasteners',
      'High Strain Wire',
      'Brickforce',
      'Y-Standards & Droppers',
    ],
    usedFor: ['Retail merchandising and resale', 'DIY fencing and reinforcing needs'],
    image: '/industries/sections/retail-hardware.jpg',
    imageAlt: 'Warehouse with stocked industrial shelving',
    imagePosition: 'right' as const,
  },
  {
    id: 'manufacturing-industrial',
    title: 'Manufacturing & Industrial',
    tagline: 'Materials that power manufacturing.',
    descriptions: [
      'From baskets and bins to automated lines, Meshco’s precision wire products are integral to downstream fabrication and assembly.',
    ],
    trustedProducts: [
      'Hard Drawn Wire',
      'Plating Quality Wire',
      'Specimesh Panels',
      'Precision Welded Mesh',
      'Galvanised Wire (Coils & Lengths)',
      'Slab Wire',
    ],
    usedFor: [
      'Production line components and assemblies',
      'Electroplating and processing',
      'Custom fabrication inputs',
    ],
    image: '/industries/sections/manufacturing-industrial.jpg',
    imageAlt: 'Industrial manufacturing facility with automated equipment',
    imagePosition: 'left' as const,
  },
  {
    id: 'forestry',
    title: 'Forestry',
    tagline: 'Built for the edge of the wild.',
    descriptions: [
      'Meshco wire and fencing products are trusted by forestry companies for managing land, protecting young trees, and preventing encroachment.',
    ],
    trustedProducts: ['Pulp Baling Wire', 'Growing Stakes', 'Y-Standards & Droppers'],
    usedFor: [
      'Perimeter security in remote forests',
      'Sapling and plantation support',
      'Baling timber and pulp for processing',
    ],
    image: '/industries/sections/forestry.jpg',
    imageAlt: 'Dense forest with evergreen trees',
    imagePosition: 'right' as const,
  },
  {
    id: 'recycling',
    title: 'Recycling',
    tagline: 'Organised. Secure. Sustainable.',
    descriptions: [
      'We support the circular economy with wire solutions that help recyclers contain, sort, and transport materials efficiently and safely.',
    ],
    trustedProducts: ['Autobale Wire', 'Black Annealed Wire'],
    usedFor: [
      'Automatic baling of recyclables (paper, plastic, metals)',
      'Fast bundling and waste control',
    ],
    image: '/industries/sections/recycling.jpg',
    imageAlt: 'Overhead view of organised recycling facility yard',
    imagePosition: 'left' as const,
  },
  {
    id: 'public-sector-government',
    title: 'Public Sector & Government',
    tagline: 'Strengthening national infrastructure.',
    descriptions: [
      'Meshco is a trusted partner to government departments, municipalities, and public works contractors. Our products meet the demanding standards of public infrastructure—from schools and housing to correctional facilities and border security.',
    ],
    trustedProducts: [
      'WireWall',
      'Reinforcing Mesh',
      'Brickforce',
      'High Strain Wire',
      'Galvanised Wire in Coils',
      'Razor Wire',
    ],
    usedFor: [
      'Public housing development and RDP projects',
      'Security fencing for schools, clinics, and correctional facilities',
      'Border control, military installations, and municipal depots',
    ],
    image: '/industries/sections/public-sector.jpg',
    imageAlt: 'Government building exterior with stone columns',
    imagePosition: 'right' as const,
  },
]

export default function IndustriesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/industries/sections/hero-industries.jpg"
            alt="WireWall fencing across an industrial facility"
            fill
            sizes="100vw"
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Industries We Serve</h1>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <h2 className={styles.introHeading}>How Meshco Powers South Africa’s Progress</h2>
          <p className={styles.introText}>
            At Meshco, we don’t just manufacture wire; we help build industries, protect assets, and
            enable growth. Our products power progress across South Africa’s economy, trusted in the
            toughest conditions where quality, strength, and longevity are non-negotiable.
          </p>
          <p className={styles.introText}>
            Whether reinforcing the foundations of a nation or securing its future, Meshco stands
            behind every strand.
          </p>
          <p className={styles.introHighlight}>Explore how we support these key sectors:</p>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardsGrid}>
            {INDUSTRY_CARDS.map((card) => (
              <Link key={card.id} href={`#${card.id}`} className={styles.cardLink}>
                <CompanyValueCard
                  align="center"
                  variant="compact"
                  title={card.title}
                  icon={
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      width={card.iconWidth}
                      height={card.iconHeight}
                    />
                  }
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className={styles.detailsContainer}>
          {INDUSTRY_SECTIONS.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className={clsx(
                styles.detailRow,
                section.imagePosition === 'right' && styles.reverse,
              )}
            >
              <div className={styles.detailImageWrapper}>
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 50vw"
                />
              </div>
              <div className={styles.detailContent}>
                <h3 className={styles.detailTitle}>{section.title}</h3>
                <p className={styles.detailTagline}>{section.tagline}</p>
                {section.descriptions.map((text) => (
                  <p className={styles.detailBody} key={text}>
                    {text}
                  </p>
                ))}
                <p className={styles.listTitle}>Trusted Products:</p>
                <ul className={styles.list}>
                  {section.trustedProducts.map((product) => (
                    <li className={styles.listItem} key={product}>
                      {product}
                    </li>
                  ))}
                </ul>
                <p className={styles.listTitle}>Used For:</p>
                <ul className={styles.list}>
                  {section.usedFor.map((item) => (
                    <li className={styles.listItem} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
