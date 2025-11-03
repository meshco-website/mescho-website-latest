import React from 'react'

import styles from './resources.module.css'

const INTRO_PARAGRAPHS = [
  'From detailed product specs to installation guides and compliance documents, the Meshco Resources page is your go-to library for technical information and support materials.',
  'We believe that an informed customer is an empowered one — so we’ve made it easy to access the documents, tools, and guides that help you work smarter, build better, and stay compliant.',
]

const RESOURCE_SECTIONS = [
  {
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
    heading: 'Installation Guides',
    items: [{ label: 'WireWall Installation Manual', href: '#' }],
  },
  {
    heading: 'Brochures & Catalogues',
    items: [
      { label: 'Full Meshco Product Catalogue', href: '#' },
      { label: 'WireWall Brochure', href: '#' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Resources</h1>
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
          <div className={styles.introImage} aria-hidden />
        </div>
      </section>

      <section className={styles.bimSection}>
        <h2 className={styles.bimHeading}>BIM Libraries</h2>
        <p className={styles.bimSubheading}>Revit Files</p>
      </section>

      <section className={styles.resourcesSection}>
        <div className={styles.resourcesContainer}>
          {RESOURCE_SECTIONS.map((section) => (
            <div className={styles.sectionBlock} key={section.heading}>
              <h3 className={styles.sectionHeading}>{section.heading}</h3>
              <div className={styles.resourceList}>
                {section.items.map((item) => (
                  <div className={styles.resourceRow} key={item.label}>
                    <p className={styles.resourceName}>{item.label}</p>
                    <a className={styles.downloadButton} href={item.href}>
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoContent}>
          <h3 className={styles.infoHeading}>Need Help Finding Something?</h3>
          <p className={styles.infoText}>
            If you can’t find the file you’re looking for, or need something specific for your
            project or tender, we’re happy to assist.
          </p>
          <p className={styles.infoText}>
            Contact our team via the live chat function in the bottom right or email{' '}
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
