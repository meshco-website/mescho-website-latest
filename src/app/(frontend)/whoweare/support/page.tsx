import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Accordion from '../../_components/Accordion'
import styles from './support.module.css'

const ACCORDION_ITEMS = [
  {
    id: 'technical-guidance',
    title: 'Technical Guidance',
    content: (
      <>
        <p>
          Our specialists provide advice on product selection, specifications, installation, and
          compliance, ensuring the right fit for your application.
        </p>
        <p>
          Are you an architect, landscape architect, property developer or quantity surveyor? Our
          business development team is here to assist you with every step of your Meshco WireWall
          project.
        </p>
        <p>Here are some of the services we can assist you with:</p>
        {/* <p>
          <strong>One-on-one meetings</strong>
        </p> */}
        <ul>
          <li>Sample drop offs</li>
          <li>Specification assistance</li>
          <li>Bespoke solutions</li>
          <li>Cost comparisons</li>
          <li>On site assistance</li>
          <li>Free on-site sample panels</li>
          <li>On-site WireWall installation training</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sales-enquiries',
    title: 'Sales & Product Enquiries',
    content: (
      <p>
        Need a quote or product availability? Our sales team is responsive, knowledgeable, and ready
        to support projects of any scale.
      </p>
    ),
  },
  {
    id: 'delivery-logistics',
    title: 'Delivery & Logistics Support',
    content: (
      <p>
        We offer dependable, on-time delivery, worldwide. Our logistics team can coordinate
        direct-to-site drop-offs and large-scale supply planning.
      </p>
    ),
  },
  {
    id: 'documentation',
    title: 'Documentation & Certifications',
    content: <p>From compliance certificates to technical data sheets and product specs.</p>,
  },
  {
    id: 'after-sales',
    title: 'After-Sales Support',
    content: (
      <p>
        We’re not done when the delivery truck leaves. If anything isn’t right, we’ll make it right.
      </p>
    ),
  },
]

export default function SupportPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <Image
          src="/case-studies/Aerial_CapeTown2.jpg"
          alt="Aerial view of Meshco WireWall installation in Cape Town"
          fill
          priority
          className={styles.heroImage}
          sizes="(min-width: 1200px) 100vw, 100vw"
          quality={85}
        />
        <div className={styles.heroOverlay} aria-hidden />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Support</h1>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className={styles.introImage} aria-hidden />
          <div className={styles.introContent}>
            <h2 className={styles.introHeading}>We stand behind every wire.</h2>
            <p className={styles.introParagraph}>
              At Meshco, support means more than answering questions. It means standing behind our
              products, partnering with our customers, and making sure you have everything you need
              to move forward with confidence.
            </p>
            <p className={styles.introParagraph}>
              Whether you’re specifying products for a project, placing a large order, or
              troubleshooting an on-site challenge, our experienced team is here to help; every step
              of the way.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.supportContainer}>
          <h2 className={styles.supportHeading}>How We Support You</h2>
          <Accordion
            items={ACCORDION_ITEMS}
            className={styles.supportAccordion}
            defaultOpenId={null}
          />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <article className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Contact Our Team</h3>
            <p className={styles.ctaText}>Phone: 021 905 1205</p>
            <p className={styles.ctaText}>
              Email:{' '}
              <a className={styles.ctaLink} href="mailto:sales@meshco.co.za">
                sales@meshco.co.za
              </a>
            </p>
            {/* <p className={styles.ctaText}>WhatsApp Business: XXXXXXX</p> */}
            <p className={styles.ctaText}>
              Office Hours: Monday–Thursday, 08:00–17:00 and Friday, 08:00–15:00
            </p>
            {/* <p className={styles.ctaText}>
              Or contact us via the live chat at the bottom right of your screen.
            </p> */}
          </article>

          <article className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Need Product Specs or Revit Files?</h3>
            <p className={styles.ctaText}>
              Visit our Resources page for downloads, product datasheets, and installation support.
            </p>
            <Link className={styles.ctaButton} href="/resources">
              Resources
            </Link>
          </article>
        </div>
      </section>
    </div>
  )
}
