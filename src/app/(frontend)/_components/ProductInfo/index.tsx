'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './productInfo.module.css'

interface Specification {
  label: string
  value: string
}

interface ProductInfoProps {
  name: string
  title: string
  category: string
  heroImage: string
  description: string
  specifications: Specification[]
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  title,
  category,
  heroImage,
  description,
  specifications,
}) => {
  const [hasImageError, setHasImageError] = useState(!heroImage?.trim())

  const resolvedHeroImage = useMemo(
    () => (!heroImage?.trim() || hasImageError ? '/placeholder.svg' : heroImage),
    [heroImage, hasImageError],
  )

  const isPlaceholder = resolvedHeroImage.includes('placeholder.svg')

  const handleImageError = () => {
    if (!hasImageError) {
      setHasImageError(true)
    }
  }

  return (
    <div className={styles.productInfo}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>{' > '}</span>
          <Link href="/products" className={styles.breadcrumbLink}>
            Products
          </Link>
          <span className={styles.breadcrumbSeparator}>{' > '}</span>
          <Link href={`/products/${category.toLowerCase()}`} className={styles.breadcrumbLink}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
          <span className={styles.breadcrumbSeparator}>{' > '}</span>
          <span className={styles.breadcrumbCurrent}>{name}</span>
        </div>

        <div className={styles.productLayout}>
          <div className={styles.imageColumn}>
            <div
              className={`${styles.imageContainer} ${
                isPlaceholder ? styles.placeholderContainer : ''
              }`}
            >
              {isPlaceholder ? (
                <Image
                  src={resolvedHeroImage}
                  alt={name}
                  width={220}
                  height={190}
                  className={styles.heroPlaceholderImage}
                  priority
                />
              ) : (
                <Image
                  src={resolvedHeroImage}
                  alt={name}
                  fill
                  className={styles.productImage}
                  priority
                  onError={handleImageError}
                />
              )}
            </div>
          </div>

          <div className={styles.detailsColumn}>
            <div className={styles.detailsBlock}>
              <div className={styles.categoryLabel}>{category.toUpperCase()}</div>
              <h1 className={styles.productTitle}>{title}</h1>

              <div className={styles.description}>
                {description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className={styles.specifications}>
                {specifications.map((spec, index) => (
                  <div key={index} className={styles.specItem}>
                    <span className={styles.specLabel}>{spec.label}:</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className={styles.quoteButton}>
                <Link
                  href={category.toLowerCase() === 'wirewall' ? '/wirewall-quote' : '/quote'}
                  className={styles.quoteBtn}
                >
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
