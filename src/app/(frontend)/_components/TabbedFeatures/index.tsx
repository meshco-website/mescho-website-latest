'use client'

import React, { useState } from 'react'
import styles from './tabbedFeatures.module.css'

interface TabData {
  id: string
  label: string
  content: string[]
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
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {activeTabData && (
          <div className={styles.featuresList}>
            {activeTabData.content.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <p className={styles.featureDescription}>{feature}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TabbedFeatures
