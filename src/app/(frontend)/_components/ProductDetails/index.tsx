import React from 'react'
import styles from './productDetails.module.css'

interface Specification {
  label: string
  value: string
}

interface TechnicalData {
  property: string
  value: string
  unit?: string
}

interface ProductDetailsProps {
  applications: string[]
  technicalData: TechnicalData[]
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ applications, technicalData }) => {
  return (
    <div className={styles.productDetails}>
      <div className={styles.container}>
        {/* Features Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={styles.featuresGrid}>
            {applications.map((application, index) => (
              <div key={index} className={styles.featureItem}>
                <h3 className={styles.featureTitle}>{application}</h3>
                <p className={styles.featureDescription}>
                  {technicalData[index]?.property || 'Feature description goes here.'}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetails
