import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './case-detail.module.css'
import { caseStudiesConfig, allCaseStudies, COMING_SOON_LABEL } from '../configs'

interface CaseDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return allCaseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { slug } = await params
  const caseStudy = caseStudiesConfig[slug]

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className={styles.caseDetailPage}>
      <section className={styles.breadcrumbSection}>
        <p className={styles.breadcrumb}>
          <Link href="/wirewall/case-studies" className={styles.breadcrumbLink}>
            Case Studies & References
          </Link>
          <span className={styles.breadcrumbSeparator}> | </span>
          <span className={styles.breadcrumbCurrent}>{COMING_SOON_LABEL}</span>
        </p>
      </section>

      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{COMING_SOON_LABEL}</h1>
      </section>

      <section className={styles.contentSection}>
        <p className={styles.comingSoonMessage}>{COMING_SOON_LABEL}</p>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Get in touch</h2>
          <p className={styles.ctaDescription}>
            Contact us for expert advice, pricing, and custom solutions.
          </p>
          <Link href="/contactus" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
