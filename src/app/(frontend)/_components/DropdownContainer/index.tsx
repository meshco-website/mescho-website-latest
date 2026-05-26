import React from 'react'
import NavLink from '../NavLink'
import DropdownMenu from '../DropdownMenu'
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
  dropdownSize = 'medium',
}) => {
  const isFullWidth = dropdownType === 'fullwidth'

  return (
    <div
      className={`${styles.dropdownContainer} ${isFullWidth ? styles.fullwidthTrigger : ''}`}
      onMouseLeave={isFullWidth ? undefined : onMouseLeave}
    >
      <NavLink
        href={href}
        isActive={isActive}
        hasDropdown={true}
        onClick={onItemClick}
        onMouseEnter={onMouseEnter}
      >
        {children}
      </NavLink>

      {dropdownType === 'regular' && (
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
