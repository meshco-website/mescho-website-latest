import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './aboutUs.module.css'
import CompanyValueCard from '../../_components/CompanyValueCard'

export default function AboutUsPage() {
  return (
    <div className={styles.aboutUsPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About MESHCO</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.textColumn}>
            <h2 className={styles.sectionTitle}>60 Years of Strength Behind the Scenes</h2>
            <p className={styles.sectionText}>
              For over 60 years, Meshco has played a quiet, but essential role shaping the backbone
              of South Africa&apos;s infrastructure and security. As a third-generation Allen family
              business, we&apos;ve built a legacy based on unwavering quality, reliability, and a
              deep understanding of your needs.
            </p>
          </div>
          <div className={styles.imageColumn}>
            <Image
              src="/placeholder.svg"
              alt="Company history"
              width={600}
              height={400}
              className={styles.contentImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.performSection}>
        <h2 className={styles.sectionTitle}>Built to Perform, Trusted to Last</h2>
        <div className={styles.performContent}>
          <p className={styles.sectionText}>
            Our success is rooted in a commitment to excellence. Every sheet of mesh, every WireWall
            panel, and every coil of wire reflects decades of experience, world-class production
            processes, and a promise to deliver products that perform when it matters most.
          </p>
          <br />
          <p className={styles.sectionText}>
            Guiding the industry forward with knowledge and standing firm behind every product we
            make, we are trusted by engineers, contractors, and visionaries alike.
          </p>
          <br />
          <p className={styles.sectionText}>Meshco. Reinforcing and Fencing what Matters.</p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2 className={styles.valuesTitle}>Company Values</h2>
        <Link href="/whoweare" className={styles.valuesLink}>
          Learn about us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 17.5385V0L16.0769 0V14.01L2.495 0.428127L0.428076 2.49505L14.0099 16.0769H0L0 19H17.5385H19V17.5385Z"
              fill="white"
            />
          </svg>
        </Link>
        <div className={styles.valuesGrid}>
          <CompanyValueCard icon="" title="Dedication to every client's success" />
          <CompanyValueCard icon="" title="Innovation that matters" />
          <CompanyValueCard icon="" title="Trust and personal responsibility in all" />
          <CompanyValueCard icon="" title="Driving progress for people in every community" />
        </div>
      </section>

      <section className={styles.imageBannerSection}>
        <Image
          src="/wirewallBanner.png"
          alt="Meshco facility"
          fill
          className={styles.bannerImage}
        />
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Get in touch</h2>
        <p className={styles.ctaText}>
          Contact us for expert advice, pricing, and custom solutions.
        </p>
        <Link href="/contactus" className={styles.ctaButton}>
          Contact Us
        </Link>
      </section>
    </div>
  )
}
