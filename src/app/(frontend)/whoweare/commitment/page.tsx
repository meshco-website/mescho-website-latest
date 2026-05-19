import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Accordion from '../../_components/Accordion'
import styles from '../support/support.module.css'

const ACCORDION_ITEMS = [
  {
    id: 'dependable-quality',
    title: 'Dependable Quality',
    content: (
      <p>
        Every roll of mesh, every coil of wire, and WireWall panel we deliver meets the highest
        standards. If it bears the Meshco name, it’s built to perform; and built to last.
      </p>
    ),
  },
  {
    id: 'expert-advice',
    title: 'Expert Advice',
    content: (
      <p>
        Our team of specialists is ready to support you with technical knowledge, product guidance,
        and project-specific solutions. We don’t just sell; we solve.
      </p>
    ),
  },
  {
    id: 'on-time-delivery',
    title: 'On-Time Delivery',
    content: (
      <p>
        We understand that your deadlines matter. Our logistics and dispatch teams work tirelessly
        to ensure that products arrive where you need them, when you need them.
      </p>
    ),
  },
  {
    id: 'tailored-solutions',
    title: 'Tailored Solutions',
    content: (
      <p>
        No two projects are the same. We listen, understand, and adapt to deliver products and
        support that meet your unique requirements.
      </p>
    ),
  },
  {
    id: 'long-term-partnerships',
    title: 'Long-Term Partnerships',
    content: (
      <p>
        We’re proud to support businesses that build South Africa’s future. Whether you’re a
        contractor, farmer, developer, reseller or engineer, we see every interaction as the start -
        or continuation - of a trusted partnership.
      </p>
    ),
  },
  {
    id: 'exceeding-expectations',
    title: 'Exceeding Expectations — Every Time',
    content: (
      <p>
        At Meshco, service is not a department. It’s a mindset that guides every interaction, every
        product, and every promise we make.
      </p>
    ),
  },
]

export default function CommitmentPage() {
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
          <h1 className={styles.heroTitle}>Commitment to Service</h1>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className={`${styles.introImage} ${styles.introImageFilled}`}>
            <Image
              src="/about/meshco-commitment-service.jpg"
              alt="Meshco team demonstrating commitment to service"
              fill
              className={styles.introImagePhoto}
              sizes="(max-width: 768px) 100vw, 628px"
            />
          </div>
          <div className={styles.introContent}>
            <h2 className={styles.introHeading}>Built on Trust. Delivered with Purpose.</h2>
            <p className={styles.introParagraph}>
              At Meshco, our commitment to service runs as deep as the iron ore our wire originates
              from. For over 60 years, we’ve built more than products — we’ve built relationships
              based on reliability, expertise, and an unwavering focus on doing what’s right for our
              customers.
            </p>
            <p className={styles.introParagraph}>
              Service isn’t an extra. It’s part of the product.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.supportContainer}>
          <h2 className={styles.supportHeading}>Our Promise to You</h2>
          <Accordion
            items={ACCORDION_ITEMS}
            className={styles.supportAccordion}
            defaultOpenId={null}
          />
        </div>
        <h2 className={styles.commitmentHeading}>
          Meshco. Manufactured to Matter. Supported to Succeed.
        </h2>
      </section>
    </div>
  )
}
