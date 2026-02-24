'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './MobileMenu.module.css'

interface DropdownItem {
  label: string
  href: string
}

interface DropdownSection {
  title: string
  items: DropdownItem[]
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  productSections: DropdownSection[]
  wireWallItems: DropdownItem[]
  industriesItems?: DropdownItem[]
  whoWeAreItems: DropdownItem[]
  resourcesItems: DropdownItem[]
}

type View = {
  id: string
  title?: string
  items?: DropdownItem[] | DropdownSection[]
  type?: 'list' | 'sections'
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  productSections,
  wireWallItems,
  industriesItems,
  whoWeAreItems,
  resourcesItems,
}) => {
  const [history, setHistory] = useState<View[]>([{ id: 'main' }])

  const currentView = history[history.length - 1]

  const pushView = (view: View) => {
    setHistory((prev) => [...prev, view])
  }

  const popView = () => {
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
  }

  if (!isOpen) return null

  const renderMainView = () => (
    <>
      <button
        className={styles.menuItem}
        onClick={() =>
          pushView({
            id: 'products',
            title: 'Products',
            items: productSections,
            type: 'sections',
          })
        }
      >
        <span className={styles.itemLabel}>
          Products
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 8.5H0L0 7.19238H6.26758L0.192383 1.11621L1.11621 0.192383L7.19238 6.26758V0L8.5 0V8.5Z" fill="#DEAF38"/>
          </svg>
        </span>
      </button>

      {/* WireWall has sub-items */}
      <button
        className={styles.menuItem}
        onClick={() =>
          pushView({
            id: 'wirewall',
            title: 'WireWall',
            items: wireWallItems,
            type: 'list',
          })
        }
      >
        <span className={styles.itemLabel}>
          WireWall
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 8.5H0L0 7.19238H6.26758L0.192383 1.11621L1.11621 0.192383L7.19238 6.26758V0L8.5 0V8.5Z" fill="#DEAF38"/>
          </svg>
        </span>
      </button>

      <Link
        href="/industries"
        className={styles.menuItem}
        onClick={onClose}
      >
        <span className={styles.itemLabel}>
          Industries
        </span>
      </Link>

      <button
        className={styles.menuItem}
        onClick={() =>
          pushView({
            id: 'whoweare',
            title: 'Who We Are',
            items: whoWeAreItems,
            type: 'list',
          })
        }
      >
        <span className={styles.itemLabel}>
          Who We Are
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 8.5H0L0 7.19238H6.26758L0.192383 1.11621L1.11621 0.192383L7.19238 6.26758V0L8.5 0V8.5Z" fill="#DEAF38"/>
          </svg>
        </span>
      </button>

      <button
        className={styles.menuItem}
        onClick={() =>
          pushView({
            id: 'resources',
            title: 'Resources',
            items: resourcesItems,
            type: 'list',
          })
        }
      >
        <span className={styles.itemLabel}>
          Resources
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 8.5H0L0 7.19238H6.26758L0.192383 1.11621L1.11621 0.192383L7.19238 6.26758V0L8.5 0V8.5Z" fill="#DEAF38"/>
          </svg>
        </span>
      </button>
    </>
  )

  const renderSectionsView = (sections: DropdownSection[]) => (

    <div className={styles.sectionsViewContainer}>
      {sections.map((section, idx) => (
        <button
          key={idx}
          className={styles.menuItem}
          onClick={() =>
            pushView({
              id: `section-${section.title}`,
              title: section.title,
              items: section.items,
              type: 'list',
            })
          }
        >
          <span className={`${styles.itemLabel} ${styles.categoryText}`}>
            {section.title}
          </span>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0955 6.01041L5.08511 -1.04308e-06L4.16049 0.924624L8.59234 5.35647L2.25299e-05 5.35716V6.66365L8.59234 6.66434L4.16049 11.0962L5.08511 12.0208L11.0955 6.01041Z" fill="#DEAF38"/>
          </svg>
        </button>
      ))}
    </div>
  )


  const renderListView = (items: DropdownItem[]) => (
    <div className={styles.listViewContainer}>
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          className={styles.menuItem}
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )

  return (
    <div className={styles.mobileMenuOverlay}>
      <header className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>MESHCO</span>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      </header>

      <div className={styles.content}>
        {currentView.id !== 'main' && (
          <div className={styles.submenuHeader} onClick={popView}>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.8949e-05 6.01041L6.01047 -1.04308e-06L6.93509 0.924624L2.50324 5.35647L11.0956 5.35716V6.66365L2.50324 6.66434L6.93509 11.0962L6.01047 12.0208L5.8949e-05 6.01041Z" fill="#DEAF38"/>
            </svg>
            <span className={currentView.type === 'sections' ? styles.textWhite : ''}>
              {currentView.title}
            </span>
          </div>
        )}

        {currentView.id === 'main' && renderMainView()}
        {currentView.type === 'sections' &&
          renderSectionsView(currentView.items as DropdownSection[])}
        {currentView.type === 'list' &&
          renderListView(currentView.items as DropdownItem[])}
      </div>

      <footer className={styles.footer}>
        <Link href="/contactus" className={styles.contactButton} onClick={onClose}>
          Contact Us
        </Link>
        <div className={styles.socialIcons}>
          <Link href="https://za.linkedin.com/company/meshco" target="_blank">
            <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
          </Link>
          <Link href="https://www.instagram.com/meshcowireproducts" target="_blank">
            <Image src="/insta.png" alt="Instagram" width={32} height={32} />
          </Link>
          <Link href="https://www.youtube.com/watch?v=qkUgOVArjRk" target="_blank">
            <Image src="/youtube.png" alt="YouTube" width={32} height={32} />
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default MobileMenu
