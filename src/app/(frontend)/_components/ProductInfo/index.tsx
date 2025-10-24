import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './productInfo.module.css'

interface Specification {
  label: string
  value: string
}

interface ProductInfoProps {
  title: string
  category: string
  heroImage: string
  description: string
  specifications: Specification[]
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  category,
  heroImage,
  description,
  specifications,
}) => {
  return (
    <div className={styles.productInfo}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>{' > '}</span>
          <Link href="/products" className={styles.breadcrumbLink}>
            Products
          </Link>
          <span className={styles.breadcrumbSeparator}>{' > '}</span>
          <Link href={`/products/${category}`} className={styles.breadcrumbLink}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
          <span className={styles.breadcrumbSeparator}>{' > '}</span>
          <span className={styles.breadcrumbCurrent}>{title}</span>
        </div>

        {/* Two Column Layout */}
        <div className={styles.productLayout}>
          {/* Left Column - Product Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image src={heroImage} alt={title} fill className={styles.productImage} priority />
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className={styles.detailsColumn}>
            <div className={styles.detailsBlock}>
              <div className={styles.categoryLabel}>{category.toUpperCase()}</div>
              <h1 className={styles.productTitle}>{title}</h1>

              <div className={styles.description}>
                <p>{description}</p>
              </div>

              {/* Specifications */}
              <div className={styles.specifications}>
                {specifications.map((spec, index) => (
                  <div key={index} className={styles.specItem}>
                    <span className={styles.specLabel}>{spec.label}:</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Get Quote Button */}
              <div className={styles.quoteButton}>
                <button className={styles.quoteBtn}>Get a quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
