import React from 'react'
import DropdownMenu from '../DropdownMenu'
import FullWidthDropdown from '../FullWidthDropdown'
import styles from './mobileMenuItem.module.css'

interface DropdownItem {
  label: string
  href: string
}

interface DropdownSection {
  title: string
  items: DropdownItem[]
}

interface MobileMenuItemProps {
  label: string
  isOpen: boolean
  onToggle: () => void
  dropdownType: 'regular' | 'fullwidth'
  items?: DropdownItem[]
  sections?: DropdownSection[]
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  label,
  isOpen,
  onToggle,
  dropdownType,
  items = [],
  sections = [],
}) => {
  return (
    <div className={styles.mobileDropdownContainer}>
      <button className={styles.mobileLink} onClick={onToggle}>
        {label} {isOpen ? '▼' : '▶'}
      </button>
      {isOpen && (
        <>
          {dropdownType === 'fullwidth' ? (
            <FullWidthDropdown
              isOpen={true}
              sections={sections}
              className={styles.mobileDropdown}
            />
          ) : (
            <DropdownMenu isOpen={true} items={items} className={styles.mobileDropdown} />
          )}
        </>
      )}
    </div>
  )
}

export default MobileMenuItem
