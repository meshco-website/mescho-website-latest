import React from 'react'
import Image from 'next/image'

import styles from './careers.module.css'
import CareersForm from './CareersForm'

export default function CareersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <Image
          src="/careers.png"
          alt=""
          fill
          priority
          className={styles.heroImage}
          sizes="(min-width: 1200px) 100vw, 100vw"
          quality={85}
        />
        <div className={styles.heroOverlay} aria-hidden />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Careers</h1>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <p className={styles.introParagraph}>
            Meshco is always seeking talented, dedicated, and passionate individuals to join our
            team.
          </p>
          <p className={styles.introParagraph}>
            If you believe you have the skills and commitment to meet our high standards, we’d love
            to hear more about you.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <CareersForm />
        </div>
      </section>
    </div>
  )
}
