'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { products } from '@/data/products'
import DropdownContainer from '../DropdownContainer'
import MobileMenuItem from '../MobileMenuItem'
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
    { label: 'WireWall Systems', href: '/wirewall' },
    { label: 'Security Solutions', href: '/wirewall' },
    { label: 'Custom Applications', href: '/wirewall' },
  ]

  const industriesItems = [
    { label: 'Construction', href: '/industries' },
    { label: 'Mining', href: '/industries' },
    { label: 'Agriculture', href: '/industries' },
    { label: 'Security', href: '/industries' },
    { label: 'Industrial', href: '/industries' },
  ]

  const whoWeAreItems = [
    { label: 'About Us', href: '/whoweare/about-us' },
    { label: 'Industries We Serve', href: '/whoweare/industries' },
    { label: 'Support', href: '/whoweare/support' },
    { label: 'Commitment to Service', href: '/whoweare/commitment' },
    { label: 'Careers', href: '/whoweare/careers' },
  ]

  const resourcesItems = [
    { label: 'Technical Specifications', href: '/resources' },
    { label: 'Installation Guides', href: '/resources' },
    { label: 'Safety Guidelines', href: '/resources' },
    { label: 'Product Catalogs', href: '/resources' },
  ]

  const _handleDropdownClose = () => {
    setActiveDropdown(null)
  }

  return (
    <header>
      <nav className={styles.nav}>
        <Link href="/">
          <Image src="/logo.png" alt="Mescho Logo" width={150} height={40} />
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

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <MobileMenuItem
            label="Products"
            isOpen={activeDropdown === 'products'}
            onToggle={() => handleDropdownToggle('products')}
            dropdownType="fullwidth"
            sections={productSections}
          />

          <MobileMenuItem
            label="WireWall"
            isOpen={activeDropdown === 'wirewall'}
            onToggle={() => handleDropdownToggle('wirewall')}
            dropdownType="regular"
            items={wireWallItems}
          />

          <MobileMenuItem
            label="Industries"
            isOpen={activeDropdown === 'industries'}
            onToggle={() => handleDropdownToggle('industries')}
            dropdownType="regular"
            items={industriesItems}
          />

          <MobileMenuItem
            label="Who We Are"
            isOpen={activeDropdown === 'whoweare'}
            onToggle={() => handleDropdownToggle('whoweare')}
            dropdownType="regular"
            items={whoWeAreItems}
          />

          <MobileMenuItem
            label="Resources"
            isOpen={activeDropdown === 'resources'}
            onToggle={() => handleDropdownToggle('resources')}
            dropdownType="regular"
            items={resourcesItems}
          />

          <Link
            href="/contactus"
            className={styles.mobileButton}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
