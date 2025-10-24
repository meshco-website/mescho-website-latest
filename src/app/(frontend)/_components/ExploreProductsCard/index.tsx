import React from 'react'
import Link from 'next/link'
import styles from './ExploreProductsCard.module.css'

const ExploreProductsCard = ({
  image,
  title,
  link,
}: {
  image: string
  title: string
  link: string
}) => {
  return (
    <div className={styles.productCategory}>
      <div className={styles.productImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.productLabel}>
        <span>{title}</span>
        <Link href={link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
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
        </Link>
      </div>
    </div>
  )
}

export default ExploreProductsCard
