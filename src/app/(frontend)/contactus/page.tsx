import React from 'react'
import Image from 'next/image'

import styles from './contactus.module.css'
import ContactForm from './ContactForm'

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
          <ContactForm />
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
