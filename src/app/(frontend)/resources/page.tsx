import React from 'react'
import Image from 'next/image'

import ResourcesList from './ResourcesList'
import styles from './resources.module.css'

const HERO_BANNER_IMAGE = '/resources/meshco-resources-page-banner.png'
const INTRO_IMAGE = '/resources/meshco-wirewall-drawing.png'
const MESHCO_PRODUCT_CATALOGUE_PDF = '/Meshco WireWall Brochure.pdf'

const INTRO_PARAGRAPHS = [
  'From detailed product specs to installation guides and compliance documents, the Meshco Resources page is your go-to library for technical information and support materials.',
  'We believe that an informed customer is an empowered one — so we’ve made it easy to access the documents, tools, and guides that help you work smarter, build better, and stay compliant.',
]

const RESOURCE_SECTIONS = [
  {
    id: 'technical-specifications',
    heading: 'Product Datasheets',
    items: [
      { label: 'Reinforcing Mesh Specifications', href: '#' },
      { label: 'Welded Mesh Panels', href: '#' },
      { label: 'Barbed Wire & Razor Wire', href: '#' },
      { label: 'Wire Coils & Binding Wire', href: '#' },
      { label: 'Brickforce & Wall Ties', href: '#' },
    ],
  },
  {
    id: 'installation-guides',
    heading: 'Installation Guides',
    items: [{ label: 'WireWall Installation Manual', href: '#' }],
  },
  {
    id: 'safety-guidelines',
    heading: 'Safety Guidelines',
    items: [
      { label: 'General Site Safety Checklist', href: '#' },
      { label: 'PPE Requirements Overview', href: '#' },
    ],
  },
  {
    id: 'product-catalogs',
    heading: 'Brochures & Catalogues',
    items: [
      {
        label: 'Full Meshco Product Catalogue',
        href: MESHCO_PRODUCT_CATALOGUE_PDF,
        download: 'Meshco WireWall Brochure.pdf',
      },
      { label: 'WireWall Brochure', href: '#' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src={HERO_BANNER_IMAGE}
            alt="Meshco resources and technical documentation"
            fill
            sizes="100vw"
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Resources</h1>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className={styles.introContent}>
            <h2 className={styles.introHeading}>Everything you need, in one place.</h2>
            {INTRO_PARAGRAPHS.map((text) => (
              <p className={styles.introText} key={text}>
                {text}
              </p>
            ))}
          </div>
          <div className={styles.introImage}>
            <Image
              src={INTRO_IMAGE}
              alt="WireWall technical drawing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.introImagePhoto}
            />
          </div>
        </div>
      </section>

      <section className={styles.bimSection}>
        <h2 className={styles.bimHeading}>BIM Libraries</h2>
        <p className={styles.bimSubheading}>Revit Files</p>
      </section>

      <section className={styles.resourcesSection}>
        <ResourcesList sections={RESOURCE_SECTIONS} />
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoContent}>
          <h3 className={styles.infoHeading}>Need Help Finding Something?</h3>
          <p className={styles.infoText}>
            If you can’t find the file you’re looking for, or need something specific for your
            project or tender, we’re happy to assist.
          </p>
          <p className={styles.infoText}>
            Contact our team via email{' '}
            <a className={styles.infoLink} href="mailto:sales@meshco.co.za">
              sales@meshco.co.za
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
