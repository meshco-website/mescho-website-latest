'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav className={styles.nav}>
        <Link href="/"><Image src="/logo.png" alt="Mescho Logo" width={150} height={40} /></Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link href="/products" className={styles.link}>Products</Link>
          <Link href="/wirewall" className={styles.link}>WireWall</Link>
          <Link href="/industries" className={styles.link}>Industries</Link>
          <Link href="/whoweare" className={styles.link}>Who We Are</Link>
          <Link href="/resources" className={styles.link}>Resources</Link>
          <Link href="/contactus" className={styles.button}>Contact Us</Link>
        </div>

        {/* Hamburger Icon */}
        <button className={styles.hamburger} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/products" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link href="/wirewall" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>WireWall</Link>
          <Link href="/industries" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Industries</Link>
          <Link href="/whoweare" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Who We Are</Link>
          <Link href="/resources" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Resources</Link>
          <Link href="/contactus" className={styles.mobileButton} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  )
}

export default Header