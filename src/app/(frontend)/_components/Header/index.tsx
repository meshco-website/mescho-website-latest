'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { products } from '@/data/products'
import DropdownContainer from '../DropdownContainer'
import MobileMenu from '../MobileMenu'
import styles from './Header.module.css'

type DropdownItem = {
  label: string
  href: string
}

type DropdownSection = {
  title: string
  items: DropdownItem[]
}

const PRODUCT_CATEGORY_CONFIG: Array<{ key: string; title: string }> = [
  { key: 'wire', title: 'WIRE' },
  { key: 'utility', title: 'UTILITY' },
  { key: 'wirewall', title: 'WIREWALL' },
  { key: 'fencing', title: 'FENCING' },
  { key: 'reinforcing', title: 'REINFORCING' },
  { key: 'mining-support', title: 'MINING SUPPORT' },
  { key: 'fasteners', title: 'FASTENERS' },
]

const productSections: DropdownSection[] = PRODUCT_CATEGORY_CONFIG.reduce(
  (sections, { key, title }) => {
    const items = products
      .filter((product) => product.category === key)
      .map((product) => ({
        label: product.name,
        href: `/products/${product.category}/${product.slug}`,
      }))

    if (items.length > 0) {
      sections.push({ title, items })
    }

    return sections
  },
  [] as DropdownSection[],
)

const Header = () => {
  const _router = useRouter()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    const header = document.querySelector('header')
    if (header) {
      const headerHeight = header.offsetHeight
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
    }
  }, [])

  React.useEffect(() => {
    if (activeDropdown === 'products') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeDropdown])

  React.useEffect(() => {
    const handleRouteChange = () => {
      setActiveDropdown(null)
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
        setHoverTimeout(null)
      }
    }

    window.addEventListener('popstate', handleRouteChange)

    window.addEventListener('beforeunload', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('beforeunload', handleRouteChange)
    }
  }, [hoverTimeout])

  const handleDropdownEnter = (dropdown: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
    setHoverTimeout(timeout)
  }

  const handleMenuItemClick = () => {
    setActiveDropdown(null)
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
  }

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const wireWallItems = [
    { label: 'WireWall Overview', href: '/wirewall' },
    { label: 'Panel Options', href: '/products/wirewall' },
    { label: 'Engineering Centre', href: '/resources' },
    { label: 'Case Studies & References', href: '/wirewall/case-studies' },
  ]

  const industriesItems = [
    { label: 'Construction', href: '/industries#construction-infrastructure' },
    { label: 'Mining', href: '/industries#mining' },
    { label: 'Agriculture', href: '/industries#agriculture' },
    { label: 'Security', href: '/industries#security-perimeter-protection' },
    { label: 'Industrial', href: '/industries#manufacturing-industrial' },
  ]

  const whoWeAreItems = [
    { label: 'About Us', href: '/whoweare/about-us' },
    { label: 'Industries We Serve', href: '/industries' },
    { label: 'Support', href: '/whoweare/support' },
    { label: 'Commitment to Service', href: '/whoweare/commitment' },
    { label: 'Careers', href: '/whoweare/careers' },
  ]

  const resourcesItems = [
    { label: 'Technical Specifications', href: '/resources#technical-specifications' },
    { label: 'Installation Guides', href: '/resources#installation-guides' },
    { label: 'Safety Guidelines', href: '/resources#safety-guidelines' },
    { label: 'Product Catalogs', href: '/resources#product-catalogs' },
  ]

  const _handleDropdownClose = () => {
    setActiveDropdown(null)
  }

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <a href="mailto:sales@meshco.co.za" className={styles.topBarLink}>
          sales@meshco.co.za
        </a>
        <span className={styles.topBarText}>+27 21 905 1205</span>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logo}>
            <svg
              width="226"
              height="36"
              viewBox="0 0 226 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.logoSvg}
            >
              <path d="M7.38098 1.10767L75.0739 34.9505" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M218.104 0.96167L150.411 34.8045" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M40.6172 1.20288L82.2356 34.9507" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M184.868 1.0564L143.249 34.8042" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M71.1422 0.333008L91.692 34.8554" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M154.342 0.187012L133.793 34.7094" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M99.0511 0.552246L105.679 34.4389" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M126.434 0.40625L119.806 34.2929" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M225.879 6.25244H0" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M209.195 14.7444L16.6766 14.7444" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M193.264 21.3652L32.6078 21.3652" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M177.947 27.3723L47.9251 27.3723" stroke="#DEAF38" strokeWidth="0.730788" />
              <path d="M164.252 30.8948L61.62 30.8948" stroke="#DEAF38" strokeWidth="0.730788" />
            </svg>
            <span className={styles.logoText}>MESHCO</span>
          </div>
        </Link>

        <div className={styles.desktopMenu}>
          <DropdownContainer
            href="/products"
            isActive={activeDropdown === 'products'}
            onMouseEnter={() => handleDropdownEnter('products')}
            onMouseLeave={handleDropdownLeave}
            onItemClick={handleMenuItemClick}
            dropdownType="fullwidth"
            sections={productSections}
            dropdownSize="large"
          >
            Products
          </DropdownContainer>

          <DropdownContainer
            href="/wirewall"
            isActive={activeDropdown === 'wirewall'}
            onMouseEnter={() => handleDropdownEnter('wirewall')}
            onMouseLeave={handleDropdownLeave}
            onItemClick={handleMenuItemClick}
            dropdownType="regular"
            items={wireWallItems}
            dropdownSize="medium"
          >
            WireWall
          </DropdownContainer>

          <DropdownContainer
            href="/industries"
            isActive={activeDropdown === 'industries'}
            onMouseEnter={() => handleDropdownEnter('industries')}
            onMouseLeave={handleDropdownLeave}
            onItemClick={handleMenuItemClick}
            dropdownType="regular"
            items={industriesItems}
            dropdownSize="medium"
          >
            Industries
          </DropdownContainer>

          <DropdownContainer
            href="/whoweare/about-us"
            isActive={activeDropdown === 'whoweare'}
            onMouseEnter={() => handleDropdownEnter('whoweare')}
            onMouseLeave={handleDropdownLeave}
            onItemClick={handleMenuItemClick}
            dropdownType="regular"
            items={whoWeAreItems}
            dropdownSize="medium"
          >
            Who We Are
          </DropdownContainer>

          <DropdownContainer
            href="/resources"
            isActive={activeDropdown === 'resources'}
            onMouseEnter={() => handleDropdownEnter('resources')}
            onMouseLeave={handleDropdownLeave}
            onItemClick={handleMenuItemClick}
            dropdownType="regular"
            items={resourcesItems}
            dropdownSize="small"
          >
            Resources
          </DropdownContainer>

          <Link href="/contactus" className={styles.button}>
            Contact Us
          </Link>
        </div>

        <button className={styles.hamburger} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        productSections={productSections}
        wireWallItems={wireWallItems}
        industriesItems={industriesItems}
        whoWeAreItems={whoWeAreItems}
        resourcesItems={resourcesItems}
      />
    </header>
  )
}

export default Header
