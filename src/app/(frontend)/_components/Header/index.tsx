'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import DropdownContainer from '../DropdownContainer'
import MobileMenuItem from '../MobileMenuItem'
import styles from './Header.module.css'

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

  const productsSections = [
    {
      title: 'WIRE',
      items: [
        { label: 'Hard Drawn Wire', href: '/products/wire/hard-drawn-wire' },
        { label: 'Galvanised Wire', href: '/products/wire/galvanised-wire' },
        { label: 'High Strain Wire', href: '/products/wire/high-strain-wire' },
        { label: 'Black Annealed Wire', href: '/products/wire/black-annealed-wire' },
        { label: 'PVC Coated Wire', href: '/products/wire/pvc-coated-wire' },
        { label: 'Straight and Cut Wire', href: '/products/wire/straight-cut-wire' },
        { label: 'Slab Wire', href: '/products/wire/slab-wire' },
      ],
    },
    {
      title: 'UTILITY',
      items: [
        { label: 'Precision Welded Mesh', href: '/products/utility/precision-welded-mesh' },
        { label: 'Growing Stakes', href: '/products/utility/growing-stakes' },
        { label: 'SpeciMesh Panels', href: '/products/utility/specimesh-panels' },
      ],
    },
    {
      title: 'WIREWALL',
      items: [
        { label: 'DoubleWall (12.5mm x 12.5mm)', href: '/products/wirewall/doublewall' },
        { label: '355 (4mm on 5.6mm - 75mm x 12.7mm)', href: '/products/wirewall/355' },
        { label: '358 (4mm on 4mm - 75mm x 12.7mm)', href: '/products/wirewall/358' },
        { label: '3510 (3mm on 4mm - 75mm x 12.7mm)', href: '/products/wirewall/3510' },
        { label: '3110 (3mm on 4mm - 75mm x 25mm)', href: '/products/wirewall/3110' },
        { label: '3210 (3mm on 4mm - 75mm x 50mm)', href: '/products/wirewall/3210' },
        { label: 'AF100 (4mm on 4mm - 50mm x 100mm)', href: '/products/wirewall/af100' },
        { label: 'Gates', href: '/products/wirewall/gates' },
        { label: 'Spikes', href: '/products/wirewall/spikes' },
        { label: 'UnderDig Panel', href: '/products/wirewall/underdig-panel' },
      ],
    },
    {
      title: 'FENCING',
      items: [
        { label: 'Welded Fence Mesh', href: '/products/fencing/welded-fence-mesh' },
        { label: 'Welded Fence Mesh (PVC)', href: '/products/fencing/welded-fence-mesh-pvc' },
        { label: 'Diamond Mesh', href: '/products/fencing/diamond-mesh' },
        { label: 'Barbed Wire', href: '/products/fencing/barbed-wire' },
        { label: 'Razor Wire', href: '/products/fencing/razor-wire' },
        { label: 'RazorWall', href: '/products/fencing/razorwall' },
        { label: 'Hexagonal Netting', href: '/products/fencing/hexagonal-netting' },
        { label: 'Field & Game Fence', href: '/products/fencing/field-game-fence' },
        { label: 'Standards', href: '/products/fencing/standards' },
        { label: 'Droppers', href: '/products/fencing/droppers' },
      ],
    },
    {
      title: 'REINFORCING',
      items: [
        { label: 'Brickforce', href: '/products/reinforcing/brickforce' },
        { label: 'Reinforcing Mesh', href: '/products/reinforcing/reinforcing-mesh' },
        { label: 'Hoop Iron', href: '/products/reinforcing/hoop-iron' },
        { label: 'Cavity Wall Ties', href: '/products/reinforcing/cavity-wall-ties' },
        { label: 'Reinforcing Steel', href: '/products/reinforcing/reinforcing-steel' },
        { label: 'Ceramic Door Anchors', href: '/products/reinforcing/ceramic-door-anchors' },
      ],
    },
    {
      title: 'MINING SUPPORT',
      items: [
        { label: 'Mining Mesh', href: '/products/mining-support/mining-mesh' },
        { label: 'Backfill Mesh', href: '/products/mining-support/backfill-mesh' },
      ],
    },
    {
      title: 'FASTENERS',
      items: [
        { label: 'Round Wire Nails', href: '/products/fasteners/round-wire-nails' },
        { label: 'Staples', href: '/products/fasteners/staples' },
        { label: 'Clout Nails', href: '/products/fasteners/clout-nails' },
        { label: 'Hog Rings', href: '/products/fasteners/hog-rings' },
        { label: 'Hog Ring Pliers', href: '/products/fasteners/hog-ring-pliers' },
        { label: 'Pliers', href: '/products/fasteners/pliers' },
        { label: 'Cutting Nippers', href: '/products/fasteners/cutting-nippers' },
      ],
    },
  ]

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
            sections={productsSections}
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
            href="/about"
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
            sections={productsSections}
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
