import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './case-detail.module.css'
import { caseStudiesConfig, allCaseStudies } from '../configs'

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

  const breadcrumb = 'Case Studies & References'
  const caseTitle = caseStudy.title

  const relatedCases = caseStudy.relatedCases
    ? caseStudy.relatedCases.map((relatedSlug) => caseStudiesConfig[relatedSlug]).filter(Boolean)
    : allCaseStudies.slice(0, 3)

  return (
    <div className={styles.caseDetailPage}>
      <section className={styles.breadcrumbSection}>
        <p className={styles.breadcrumb}>
          <Link href="/wirewall/case-studies" className={styles.breadcrumbLink}>
            {breadcrumb}
          </Link>
          <span className={styles.breadcrumbSeparator}> | </span>
          <span className={styles.breadcrumbCurrent}>{caseTitle}</span>
        </p>
      </section>

      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{caseTitle}</h1>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.imageIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="85"
                height="73"
                viewBox="0 0 85 73"
                fill="none"
              >
                <path
                  d="M72.25 12.1667H42.5L34 3.66667H12.75C5.7 3.66667 0 9.36667 0 16.4167V66.0833C0 73.1333 5.7 78.8333 12.75 78.8333H72.25C79.3 78.8333 85 73.1333 85 66.0833V24.9167C85 17.8667 79.3 12.1667 72.25 12.1667ZM72.25 66.0833H12.75V16.4167H29.75L38.25 24.9167H72.25V66.0833ZM42.5 47.0833L55.5 58.8333L47 66.0833H21.25V58.8333H44.3333L38.25 52.75L29.75 44.25L21.25 52.75V44.25L34 31.5L42.5 40V47.0833ZM68 41.25C68 47.1333 63.1333 52 57.25 52C51.3667 52 46.5 47.1333 46.5 41.25C46.5 35.3667 51.3667 30.5 57.25 30.5C63.1333 30.5 68 35.3667 68 41.25Z"
                  fill="#9E9E9E"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.textContent}>
          {caseStudy.content.paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              <p className={styles.paragraph}>{paragraph}</p>
              {index < caseStudy.content.paragraphs.length - 1 && <br />}
              {caseStudy.content.subheadings[index] && (
                <>
                  <h2 className={styles.subheading}>{caseStudy.content.subheadings[index]}</h2>
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className={styles.shareSection}>
        <p className={styles.shareLabel}>Share</p>
        <div className={styles.socialIcons}>
          <div className={styles.socialIcon}>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
              <circle cx="20.5" cy="20.5" r="20.5" fill="#DEAF38" />
            </svg>
          </div>
          <div className={styles.socialIcon}>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
              <circle cx="20.5" cy="20.5" r="20.5" fill="#DEAF38" />
            </svg>
          </div>
          <div className={styles.socialIcon}>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
              <circle cx="20.5" cy="20.5" r="20.5" fill="#DEAF38" />
            </svg>
          </div>
          <div className={styles.socialIcon}>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
              <circle cx="20.5" cy="20.5" r="20.5" fill="#DEAF38" />
            </svg>
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>Related Insights</h2>
        <div className={styles.relatedGrid}>
          {relatedCases.map((relatedCase, index) => (
            <Link
              key={index}
              href={`/wirewall/case-studies/${relatedCase.slug}`}
              className={styles.relatedCard}
            >
              <div className={styles.imagePlaceholder}>
                <div className={styles.imageIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="73"
                    viewBox="0 0 85 73"
                    fill="none"
                  >
                    <path
                      d="M72.25 12.1667H42.5L34 3.66667H12.75C5.7 3.66667 0 9.36667 0 16.4167V66.0833C0 73.1333 5.7 78.8333 12.75 78.8333H72.25C79.3 78.8333 85 73.1333 85 66.0833V24.9167C85 17.8667 79.3 12.1667 72.25 12.1667ZM72.25 66.0833H12.75V16.4167H29.75L38.25 24.9167H72.25V66.0833ZM42.5 47.0833L55.5 58.8333L47 66.0833H21.25V58.8333H44.3333L38.25 52.75L29.75 44.25L21.25 52.75V44.25L34 31.5L42.5 40V47.0833ZM68 41.25C68 47.1333 63.1333 52 57.25 52C51.3667 52 46.5 47.1333 46.5 41.25C46.5 35.3667 51.3667 30.5 57.25 30.5C63.1333 30.5 68 35.3667 68 41.25Z"
                      fill="#9E9E9E"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{relatedCase.title}</h3>
                <p className={styles.cardDescription}>{relatedCase.description}</p>
                <div className={styles.readMore}>
                  <span>Read More</span>
                  <div className={styles.arrowIcon}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M5 0L10 5L5 10M10 5H0"
                        stroke="#DEAF38"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
