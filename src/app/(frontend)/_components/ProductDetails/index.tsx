import React from 'react'
import styles from './productDetails.module.css'
import WireWallSpecifications from '../WireWallSpecifications'
import TabbedFeatures from '../TabbedFeatures'

interface _Specification {
  label: string
  value: string
}

interface WireWallSpecification {
  height: string[]
  vBends: string[]
  length: string[]
  aperture: string[]
  wireDiameter: string[]
  zincCoating: string[]
  tensileStrength: string[]
  weldStrength: string[]
  colourCoating: string[]
}

interface TechnicalData {
  property: string
  value: string
  unit?: string
}

interface TabData {
  id: string
  label: string
  content: string[]
}

type LayoutType = 'standard' | 'wirewall' | 'simple'

interface ProductDetailsProps {
  layoutType: LayoutType
  applications: string[]
  technicalData: TechnicalData[]
  wireWallSpecifications?: WireWallSpecification
  tabs?: TabData[]
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  layoutType,
  applications,
  technicalData,
  wireWallSpecifications,
  tabs,
}) => {
  return (
    <div className={styles.productDetails}>
      <div className={styles.container}>
        {layoutType === 'wirewall' && (
          <>
            {(!tabs || tabs.length === 0) && wireWallSpecifications && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Specifications</h2>
                <WireWallSpecifications specifications={wireWallSpecifications} />
              </section>
            )}

            <section className={styles.section}>
              {tabs && tabs.length > 0 ? (
                <TabbedFeatures tabs={tabs} />
              ) : (
                <>
                  <h2 className={styles.sectionTitle}>Features</h2>
                  <div className={styles.featuresList}>
                    {applications.map((application, index) => (
                      <div key={index} className={styles.featureItem}>
                        <p className={styles.featureDescription}>{application}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>
          </>
        )}

        {(layoutType === 'standard' || layoutType === 'simple') && (
          <section className={styles.section}>
            {tabs && tabs.length > 0 ? (
              <TabbedFeatures tabs={tabs} />
            ) : (
              <>
                <h2 className={styles.sectionTitle}>Features</h2>
                <div className={styles.featuresList}>
                  {applications.map((application, index) => (
                    <div key={index} className={styles.featureItem}>
                      <h3 className={styles.featureTitle}>{application}</h3>
                      <p className={styles.featureDescription}>
                        {technicalData[index]?.property || 'Feature description goes here.'}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
