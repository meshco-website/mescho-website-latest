import React from 'react'
import Link from 'next/link'
import ArrowIcon from '../ArrowIcon'
import styles from './navLink.module.css'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  hasDropdown?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive = false,
  hasDropdown = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
      {hasDropdown && <ArrowIcon isActive={isActive} />}
    </Link>
  )
}

export default NavLink
