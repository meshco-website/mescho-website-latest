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
          <span className={styles.breadcrumbCurrent}>{title}</span>
        </div>

        <div className={styles.productLayout}>
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image src={heroImage} alt={title} fill className={styles.productImage} priority />
            </div>
          </div>

          <div className={styles.detailsColumn}>
            <div className={styles.detailsBlock}>
              <div className={styles.categoryLabel}>{category.toUpperCase()}</div>
              <h1 className={styles.productTitle}>{title}</h1>

              <div className={styles.description}>
                <p>{description}</p>
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
