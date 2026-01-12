import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ExploreProductsCard.module.css'

const ExploreProductsCard = ({
  image,
  title,
  link,
  description,
}: {
  image: string
  title: string
  link: string
  description?: string
}) => {
  const cardContent = (
    <>
      <div className={styles.productImage}>
        <Image src={image} alt={title} width={420} height={350} />
      </div>
      {description ? (
        <div className={styles.contentContainer}>
          <div className={styles.productLabel}>
            <span>{title}</span>
            {link && (
              <div className={styles.arrowIcon}>
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
              </div>
            )}
          </div>
          <div className={styles.productDescription}>{description}</div>
        </div>
      ) : (
        <div className={styles.productLabel}>
          <span className={styles.titleText}>{title}</span>
          {link && (
            <span className={styles.arrowIcon}>
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
            </span>
          )}
        </div>
      )}
    </>
  )

  if (link) {
    return (
      <Link href={link} className={styles.productCategory}>
        {cardContent}
      </Link>
    )
  }

  return <div className={styles.productCategory}>{cardContent}</div>
}

export default ExploreProductsCard
