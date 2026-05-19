'use client'

import React, { useState } from 'react'
import styles from './resources.module.css'

export type ResourceItem = {
  label: string
  href: string
  download?: string
}

type ResourceSection = {
  id: string
  heading: string
  items: ResourceItem[]
}

const isDownloadAvailable = (item: ResourceItem) =>
  item.href !== '#' && item.href.startsWith('/')

type ResourcesListProps = {
  sections: ResourceSection[]
}

type ResourceDownloadButtonProps = {
  item: ResourceItem
  showComingSoon: boolean
  onShowComingSoon: () => void
}

const ResourceDownloadButton: React.FC<ResourceDownloadButtonProps> = ({
  item,
  showComingSoon,
  onShowComingSoon,
}) => {

  if (isDownloadAvailable(item)) {
    return (
      <a className={styles.downloadButton} href={item.href} download={item.download}>
        Download
      </a>
    )
  }

  return (
    <div className={styles.downloadActions}>
      <button
        type="button"
        className={styles.downloadButton}
        onClick={onShowComingSoon}
        aria-expanded={showComingSoon}
      >
        Download
      </button>
      {showComingSoon && (
        <p className={styles.comingSoonMessage} role="status">
          Coming Soon
        </p>
      )}
    </div>
  )
}

const ResourcesList: React.FC<ResourcesListProps> = ({ sections }) => {
  const [activeComingSoonLabel, setActiveComingSoonLabel] = useState<string | null>(null)

  return (
    <div className={styles.resourcesContainer}>
      {sections.map((section) => (
        <div className={styles.sectionBlock} id={section.id} key={section.heading}>
          <h3 className={styles.sectionHeading}>{section.heading}</h3>
          <div className={styles.resourceList}>
            {section.items.map((item) => (
              <div className={styles.resourceRow} key={item.label}>
                <p className={styles.resourceName}>{item.label}</p>
                <ResourceDownloadButton
                  item={item}
                  showComingSoon={activeComingSoonLabel === item.label}
                  onShowComingSoon={() => setActiveComingSoonLabel(item.label)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResourcesList
