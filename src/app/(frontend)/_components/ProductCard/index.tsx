'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './productCard.module.css'

interface ProductCardProps {
  id: string
  name: string
  image: string
  slug: string
  category: string
  size?: 'large' | 'small'
}

const PLACEHOLDER_IMAGE = '/placeholder.svg'

const ProductCard: React.FC<ProductCardProps> = ({
  id: _id,
  name,
  image,
  slug,
  category,
  size = 'small',
}) => {
  const [hasImageError, setHasImageError] = useState(!image?.trim())

  const resolvedImage = useMemo(
    () => (!image?.trim() || hasImageError ? PLACEHOLDER_IMAGE : image),
    [image, hasImageError],
  )

  const isPlaceholder = resolvedImage.includes('placeholder.svg')
  const isSmall = size === 'small'

  // Match actual card width so Next.js serves a large enough srcset entry (avoids upscaling blur)
  const imageSizes = isSmall
    ? '(min-width: 1200px) 320px, (min-width: 768px) 33vw, 100vw'
    : '(min-width: 1200px) 480px, (min-width: 768px) 50vw, 100vw'

  const imageSectionClassName = [
    styles.imageSection,
    isSmall ? styles.imageSectionSmall : styles.imageSectionLarge,
    isPlaceholder ? styles.placeholder : styles.fullImage,
    isPlaceholder ? (isSmall ? styles.placeholderSmall : styles.placeholderLarge) : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Link
      href={`/products/${category}/${slug}`}
      className={`${styles.productCard} ${styles[size]}`}
    >
      <div className={imageSectionClassName}>
        {isPlaceholder ? (
          <Image
            src={resolvedImage}
            alt={name}
            width={isSmall ? 82 : 91}
            height={isSmall ? 71 : 79}
            className={isSmall ? styles.placeholderImageSmall : styles.placeholderImageLarge}
          />
        ) : (
          <Image
            src={resolvedImage}
            alt={name}
            fill
            className={styles.image}
            sizes={imageSizes}
            quality={90}
            onError={() => {
              if (!hasImageError) {
                setHasImageError(true)
              }
            }}
          />
        )}
      </div>
      <div className={styles.contentSection}>
        <h3 className={styles.productCardTitle}>{name}</h3>
        <div className={styles.productCardLink}>
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
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

export default ProductCard
