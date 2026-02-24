import React from 'react'
import NavLink from '../NavLink'
import DropdownMenu from '../DropdownMenu'
import FullWidthDropdown from '../FullWidthDropdown'
import styles from './dropdownContainer.module.css'

interface DropdownItem {
  label: string
  href: string
}

interface DropdownSection {
  title: string
  items: DropdownItem[]
  href: string
}

interface DropdownContainerProps {
  href: string
  children: React.ReactNode
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onItemClick: () => void
  dropdownType: 'regular' | 'fullwidth'
  items?: DropdownItem[]
  sections?: DropdownSection[]
  dropdownSize?: 'small' | 'medium' | 'large'
}

const DropdownContainer: React.FC<DropdownContainerProps> = ({
  href,
  children,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onItemClick,
  dropdownType,
  items = [],
  sections = [],
  dropdownSize = 'medium',
}) => {
  return (
    <div
      className={styles.dropdownContainer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <NavLink href={href} isActive={isActive} hasDropdown={true} onClick={onItemClick}>
        {children}
      </NavLink>

      {dropdownType === 'fullwidth' ? (
        <FullWidthDropdown
          isOpen={isActive}
          sections={sections}
          className={`${styles[dropdownSize]} ${isActive ? styles.show : ''}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onItemClick={onItemClick}
        />
      ) : (
        <DropdownMenu
          isOpen={isActive}
          items={items}
          className={`${styles[dropdownSize]} ${isActive ? styles.show : ''}`}
          onItemClick={onItemClick}
        />
      )}
    </div>
  )
}

export default DropdownContainer
