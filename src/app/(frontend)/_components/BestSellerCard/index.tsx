import React from 'react'
import Link from 'next/link'
import styles from './bestSellerCard.module.css'

const BestSellerCard = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageSection}>
        <img src="/placeholder.svg" alt="Product" />
      </div>
      <div className={styles.contentSection}>
        <h3 className={styles.productCardTitle}>WireWall 3510</h3>
        <p className={styles.productCardDescription}>Lorem ipsum dolor sit amet consectetur</p>
        <div className={styles.productCardLink}>
          <span>Learn More</span>
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
    </div>
  )
}

export default BestSellerCard
