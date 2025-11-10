'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './bestSellerCard.module.css'

interface BestSellerCardProps {
  title: string
  image: string
  description: string
  linkText: string
  linkHref: string
}

const PLACEHOLDER_IMAGE = '/placeholder.svg'

const BestSellerCard: React.FC<BestSellerCardProps> = ({
  title,
  image,
  description,
  linkText,
  linkHref,
}) => {
  const [hasImageError, setHasImageError] = useState(!image?.trim())

  const resolvedImage = useMemo(
    () => (!image?.trim() || hasImageError ? PLACEHOLDER_IMAGE : image),
    [image, hasImageError],
  )

  const isPlaceholder = resolvedImage.includes('placeholder.svg')

  const handleImageError = () => {
    if (!hasImageError) {
      setHasImageError(true)
    }
  }

  return (
    <Link href={linkHref} className={styles.productCard}>
      <div
        className={`${styles.imageSection} ${
          isPlaceholder ? styles.placeholder : styles.fullImage
        }`}
      >
        {isPlaceholder ? (
          <Image
            src={resolvedImage}
            alt={title}
            width={150}
            height={120}
            className={styles.placeholderImage}
          />
        ) : (
          <Image
            src={resolvedImage}
            alt={title}
            fill
            className={styles.image}
            sizes="(min-width: 1024px) 300px, 50vw"
            onError={handleImageError}
          />
        )}
      </div>
      <div className={styles.contentSection}>
        <h3 className={styles.productCardTitle}>{title}</h3>
        <p className={styles.productCardDescription}>{description}</p>
        <div className={styles.productCardLink}>
          <span>{linkText}</span>
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
              fill="#DEAF38"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default BestSellerCard
