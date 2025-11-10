'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import styles from './tabbedFeatures.module.css'

interface TabData {
  id: string
  label: string
  content: string[]
  image?: string
}

interface TabbedFeaturesProps {
  tabs: TabData[]
}

const TabbedFeatures: React.FC<TabbedFeaturesProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '')

  if (!tabs || tabs.length === 0) {
    return null
  }

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

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
        {activeTabData && (
          <>
            {activeTabData.image && (
              <div className={styles.specificationImageWrapper}>
                <div className={styles.specificationImageInner}>
                  <Image
                    src={activeTabData.image}
                    alt={`${activeTabData.label} image`}
                    width={1200}
                    height={900}
                    className={styles.specificationImage}
                  />
                </div>
              </div>
            )}

            {activeTabData.content && activeTabData.content.length > 0 && (
              <div className={styles.featuresList}>
                {activeTabData.content.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <p className={styles.featureDescription}>{feature}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default TabbedFeatures
