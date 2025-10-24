'use client'

import React from 'react'
import Link from 'next/link'
import styles from './FullWidthDropdown.module.css'

interface DropdownItem {
  label: string
  href: string
}

interface DropdownSection {
  title: string
  items: DropdownItem[]
}

interface FullWidthDropdownProps {
  isOpen: boolean
  sections: DropdownSection[]
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onItemClick?: () => void
}

const FullWidthDropdown: React.FC<FullWidthDropdownProps> = ({
  isOpen,
  sections,
  className = '',
  onMouseEnter,
  onMouseLeave,
  onItemClick,
}) => {
  if (!isOpen) return null

  return (
    <div
      className={`${styles.fullWidthDropdown} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.gridColumn}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections[0].title}</h3>
              <ul className={styles.itemList}>
                {sections[0].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className={styles.item} onClick={onItemClick}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections[5].title}</h3>
              <ul className={styles.itemList}>
                {sections[5].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className={styles.item} onClick={onItemClick}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.gridColumn}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections[1].title}</h3>
              <ul className={styles.itemList}>
                {sections[1].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className={styles.item} onClick={onItemClick}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections[6].title}</h3>
              <ul className={styles.itemList}>
                {sections[6].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className={styles.item} onClick={onItemClick}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.gridColumn}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections[2].title}</h3>
              <ul className={styles.itemList}>
                {sections[2].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className={styles.item} onClick={onItemClick}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.gridColumn}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections[3].title}</h3>
              <ul className={styles.itemList}>
                {sections[3].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className={styles.item} onClick={onItemClick}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.gridColumn}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections[4].title}</h3>
              <ul className={styles.itemList}>
                {sections[4].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className={styles.item} onClick={onItemClick}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullWidthDropdown
