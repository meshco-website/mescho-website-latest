import React from 'react'
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

const ProductCard: React.FC<ProductCardProps> = ({
  id: _id,
  name,
  image,
  slug,
  category,
  size = 'small',
}) => {
  return (
    <Link
      href={`/products/${category}/${slug}`}
      className={`${styles.productCard} ${styles[size]}`}
    >
      <div className={styles.imageSection}>
        <Image src={image} alt={name} width={300} height={200} />
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
