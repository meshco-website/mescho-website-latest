'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './FullWidthDropdown.module.css'

interface DropdownItem {
  label: string
  href: string
}

interface DropdownSection {
  title: string
  items: DropdownItem[]
  href: string
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
  const [topPosition, setTopPosition] = useState<number>(0)

  useEffect(() => {
    const calculatePosition = () => {
      const header = document.querySelector('header')
      if (header) {
        const rect = header.getBoundingClientRect()
        setTopPosition(rect.bottom)
      }
    }

    if (isOpen) {
      // Calculate position immediately when dropdown opens
      calculatePosition()
      // Recalculate on scroll and resize to maintain correct position
      window.addEventListener('scroll', calculatePosition, true)
      window.addEventListener('resize', calculatePosition)
      
      return () => {
        window.removeEventListener('scroll', calculatePosition, true)
        window.removeEventListener('resize', calculatePosition)
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className={`${styles.fullWidthDropdown} ${className}`}
      style={{ top: `${topPosition}px` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.gridColumn}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Link href={sections[0].href} onClick={onItemClick}>
                  {sections[0].title}
                </Link>
              </h3>
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
              <h3 className={styles.sectionTitle}>
                <Link href={sections[5].href} onClick={onItemClick}>
                  {sections[5].title}
                </Link>
              </h3>
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
              <h3 className={styles.sectionTitle}>
                <Link href={sections[1].href} onClick={onItemClick}>
                  {sections[1].title}
                </Link>
              </h3>
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
              <h3 className={styles.sectionTitle}>
                <Link href={sections[6].href} onClick={onItemClick}>
                  {sections[6].title}
                </Link>
              </h3>
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
              <h3 className={styles.sectionTitle}>
                <Link href={sections[2].href} onClick={onItemClick}>
                  {sections[2].title}
                </Link>
              </h3>
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
              <h3 className={styles.sectionTitle}>
                <Link href={sections[3].href} onClick={onItemClick}>
                  {sections[3].title}
                </Link>
              </h3>
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
              <h3 className={styles.sectionTitle}>
                <Link href={sections[4].href} onClick={onItemClick}>
                  {sections[4].title}
                </Link>
              </h3>
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
