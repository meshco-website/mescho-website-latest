import React from 'react'
import Image from 'next/image'

import styles from './contactus.module.css'

const COUNTRIES = [
  { value: '', label: 'Select' },
  { value: 'south-africa', label: 'South Africa' },
  { value: 'zimbabwe', label: 'Zimbabwe' },
  { value: 'botswana', label: 'Botswana' },
  { value: 'namibia', label: 'Namibia' },
  { value: 'mozambique', label: 'Mozambique' },
  { value: 'zambia', label: 'Zambia' },
  { value: 'lesotho', label: 'Lesotho' },
  { value: 'eswatini', label: 'Eswatini' },
  { value: 'other', label: 'Other' },
]

export default function ContactUsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/HomeHeroBack.png"
          alt=""
          fill
          priority
          className={styles.heroImage}
          sizes="(min-width: 1200px) 100vw, 100vw"
          quality={85}
        />
        <div className={styles.heroOverlay} aria-hidden />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Get in touch</h1>
        </div>
      </section>

      <section className={styles.subtitleSection}>
        <p className={styles.subtitleText}>
          Have any questions or need assistance?
          <br />
          Get in touch with us – we&apos;re here to help!
        </p>
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
                  Phone Number <span className={styles.optional}>(optional)</span>
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

            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label htmlFor="company" className={styles.label}>
                  Company <span className={styles.optional}>(optional)</span>
                </label>
                <input type="text" id="company" name="company" className={styles.input} />
              </div>
              <div className={styles.formField}>
                <label htmlFor="country" className={styles.label}>
                  Country
                </label>
                <div className={styles.selectWrapper}>
                  <select id="country" name="country" className={styles.select} defaultValue="">
                    {COUNTRIES.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <span className={styles.selectArrow}>▼</span>
                </div>
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="inquiry" className={styles.label}>
                Tell us about your inquiry
              </label>
              <textarea id="inquiry" name="inquiry" className={styles.textarea} />
            </div>

            <div className={styles.captcha} aria-hidden>
              I&apos;m not a robot (placeholder)
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </section>

      <section>
        <iframe
          className={styles.mapEmbed}
          title="Meshco location"
          src="https://www.google.com/maps?q=Meshco%20Corner%20of%20Range%20Road%20and%20Wimbledon%20Road,%20Blackheath,%207580&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  )
}
