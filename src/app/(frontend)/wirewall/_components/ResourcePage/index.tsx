import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../case-studies/case-studies.module.css'

export type ResourceItem = {
  title: string
  description: string
  href?: string
  ctaLabel?: string
}

type ResourcePageProps = {
  title: string
  heroImageSrc?: string
  items?: ResourceItem[]
  emptyStateMessage?: string
}

const arrowIcon = (
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
)

const ResourcePage = ({
  title,
  heroImageSrc = '/getintouchback.png',
  items = [],
  emptyStateMessage = 'Content coming soon. Please check back shortly.',
}: ResourcePageProps) => {
  const renderCardContent = (item: ResourceItem) => (
    <>
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
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDescription}>{item.description}</p>
        {item.href && (
          <div className={styles.readMore}>
            <span>{item.ctaLabel ?? 'Read More'}</span>
            {arrowIcon}
          </div>
        )}
      </div>
    </>
  )

  const renderCard = (item: ResourceItem, index: number) => {
    if (!item.href) {
      return (
        <div key={`${item.title}-${index}`} className={styles.caseStudyCard}>
          {renderCardContent(item)}
        </div>
      )
    }

    const isExternal =
      item.href.startsWith('http://') ||
      item.href.startsWith('https://') ||
      item.href.startsWith('mailto:') ||
      item.href.startsWith('tel:')

    const cardContent = renderCardContent(item)

    if (isExternal) {
      return (
        <a
          key={`${item.title}-${index}`}
          href={item.href}
          className={styles.caseStudyCard}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardContent}
        </a>
      )
    }

    return (
      <Link key={`${item.title}-${index}`} href={item.href} className={styles.caseStudyCard}>
        {cardContent}
      </Link>
    )
  }

  return (
    <div className={styles.caseStudiesPage}>
      <section className={styles.heroSection}>
        <Image src={heroImageSrc} alt={title} fill className={styles.heroImage} priority />
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>{title}</h1>
      </section>

      {items.length > 0 ? (
        <section className={styles.caseStudiesSection}>{items.map(renderCard)}</section>
      ) : (
        <section className={styles.emptyState}>
          <p>{emptyStateMessage}</p>
        </section>
      )}
    </div>
  )
}

export default ResourcePage
