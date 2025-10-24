'use client'

import React from 'react'
import Link from 'next/link'
import styles from './DropdownMenu.module.css'

interface DropdownItem {
  label: string
  href: string
}

interface DropdownMenuProps {
  isOpen: boolean
  items: DropdownItem[]
  className?: string
  onItemClick?: () => void
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  items,
  className = '',
  onItemClick,
}) => {
  if (!isOpen) return null

  return (
    <div className={`${styles.dropdown} ${className}`}>
      <ul className={styles.singleColumn}>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className={styles.item} onClick={onItemClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropdownMenu
