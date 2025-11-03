import React from 'react'
import Image from 'next/image'

import styles from './careers.module.css'

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
            team at one of our local or global locations.
          </p>
          <p className={styles.introParagraph}>
            If you believe you have the skills and commitment to meet our high standards, we’d love
            to hear more about you.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <form className={styles.form} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label htmlFor="firstName" className={styles.label}>
                  First Name
                </label>
                <input type="text" id="firstName" name="firstName" className={styles.input} />
              </div>
              <div className={styles.formField}>
                <label htmlFor="lastName" className={styles.label}>
                  Last Name
                </label>
                <input type="text" id="lastName" name="lastName" className={styles.input} />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                </label>
                <input type="tel" id="phone" name="phone" className={styles.input} />
              </div>
              <div className={styles.formField}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input type="email" id="email" name="email" className={styles.input} />
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="position" className={styles.label}>
                Position at current job <span className={styles.optional}>(optional)</span>
              </label>
              <input type="text" id="position" name="position" className={styles.input} />
            </div>

            <div className={styles.formField}>
              <label htmlFor="resume" className={styles.label}>
                Please upload your resume/CV
              </label>
              <div className={styles.fileInputWrapper}>
                <input type="file" id="resume" name="resume" className={styles.fileInput} />
                <span className={styles.filePlaceholder}>Select file</span>
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="additionalInfo" className={styles.label}>
                Is there anything additional you&apos;d like to share with us?
              </label>
              <textarea id="additionalInfo" name="additionalInfo" className={styles.textarea} />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit form
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
