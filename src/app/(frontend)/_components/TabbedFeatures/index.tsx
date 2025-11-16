'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import styles from './tabbedFeatures.module.css'

interface TabData {
  id: string
  label: string
  content: string[]
  image?: string | null
}

interface TabbedFeaturesProps {
  tabs: TabData[]
}

const TabbedFeatures: React.FC<TabbedFeaturesProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '')
  const [imageError, setImageError] = useState<string | null>(null)

  React.useEffect(() => {
    if (tabs && tabs.length > 0) {
      if (!activeTab || !tabs.find((tab) => tab.id === activeTab)) {
        setActiveTab(tabs[0].id)
      }
    }
  }, [tabs, activeTab])

  React.useEffect(() => {
    // Reset image error when tab changes
    setImageError(null)
  }, [activeTab])

  if (!tabs || tabs.length === 0) {
    return null
  }

  const activeTabData = tabs.find((tab) => tab.id === activeTab)
  const tabImage = activeTabData?.image
  const hasValidImage = tabImage && 
    tabImage !== null && 
    typeof tabImage === 'string' && 
    tabImage.trim() !== '' &&
    imageError !== tabImage

  return (
    <div className={styles.tabbedFeatures}>
      <div className={styles.tabNavigation}>
        {tabs.map((tab, index) => (
          <button
            key={`${tab.id}-${index}`}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {activeTabData ? (
          <>
            {hasValidImage && tabImage && typeof tabImage === 'string' && (
              <div className={styles.specificationImageWrapper}>
                <div className={styles.specificationImageInner}>
                  <Image
                    src={tabImage}
                    alt={`${activeTabData.label} image`}
                    width={1200}
                    height={900}
                    className={styles.specificationImage}
                    onError={() => setImageError(tabImage)}
                  />
                </div>
              </div>
            )}

            {activeTabData.content && Array.isArray(activeTabData.content) && activeTabData.content.length > 0 ? (
              <div className={styles.featuresList}>
                {activeTabData.content.map((feature, index) => {
                  if (!feature || typeof feature !== 'string') return null
                  
                  // Check if feature has format "Heading - Description"
                  const parts = feature.split(' - ')
                  const hasHeadingWithDescription = parts.length === 2
                  
                  // Check if this is a standalone heading (matches known heading patterns or ends with colon)
                  const isStandaloneHeading = !hasHeadingWithDescription && 
                    (feature.match(/^(Butterfly Wall Ties|Crimped Wall Ties|Z-Pattern Wall Ties|Vertical Twist Wall Ties|Key Benefits of Meshco Wall Ties|Deformed Bar \(Y-bar\)|Round Bar \(R-bar\)|Key Benefits of Meshco Rebar|Masonry Reinforcement|Roof Truss Bracing|Strapping and Bracing|Timber Construction|Key Features:|Standard Spike|Heavy Spike|Raptor Tooth|Assegai|Pedestrian Gates \(Swing, Single Leaf\)|Vehicular Gates|Single and Double Leaf Swing Gates|Sliding Gates|Application:|Key features of round wire nails:)$/i) ||
                    feature.trim().endsWith(':'))

                  return (
                    <div key={index} className={styles.featureItem}>
                      {hasHeadingWithDescription ? (
                        <>
                          <p className={styles.featureHeading}>{parts[0]}</p>
                          {parts[1] && <p className={styles.featureDescription}>{parts[1]}</p>}
                        </>
                      ) : isStandaloneHeading ? (
                        <p className={styles.featureHeading}>{feature}</p>
                      ) : (
                        <p className={styles.featureDescription}>{feature}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className={styles.featuresList}>
                <p className={styles.featureDescription}>No content available for this tab.</p>
              </div>
            )}
          </>
        ) : (
          <div className={styles.featuresList}>
            <p className={styles.featureDescription}>No tab data available.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TabbedFeatures
