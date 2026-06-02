import React, { useState } from 'react'
import type { IndustryFilterGroup } from '@/data/products'
import styles from './filterSidebar.module.css'

export interface ProductFiltersState {
  types: string[]
  productKeys: string[]
}

interface FilterSidebarProps {
  onFilterChange: (filters: ProductFiltersState) => void
  showTypes?: boolean
  showIndustries?: boolean
  productTypes?: string[]
  industryGroups?: IndustryFilterGroup[]
}

const DEFAULT_PRODUCT_TYPES = [
  'Wire',
  'WireWall',
  'Reinforcing',
  'Fencing',
  'Mining Support',
  'Fasteners',
  'Utility',
]

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onFilterChange,
  showTypes = true,
  showIndustries = true,
  productTypes = DEFAULT_PRODUCT_TYPES,
  industryGroups = [],
}) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [isTypesExpanded, setIsTypesExpanded] = useState(true)
  const [isIndustriesExpanded, setIsIndustriesExpanded] = useState(true)

  const emitChange = (types: string[], industries: string[]) => {
    const productKeys = [
      ...new Set(
        industryGroups
          .filter((group) => industries.includes(group.industry))
          .flatMap((group) => group.products.map((p) => p.key)),
      ),
    ]
    onFilterChange({ types, productKeys })
  }

  const handleTypeToggle = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type]
    setSelectedTypes(newTypes)
    emitChange(newTypes, selectedIndustries)
  }

  const handleIndustryToggle = (industry: string) => {
    const newIndustries = selectedIndustries.includes(industry)
      ? selectedIndustries.filter((i) => i !== industry)
      : [...selectedIndustries, industry]
    setSelectedIndustries(newIndustries)
    emitChange(selectedTypes, newIndustries)
  }

  return (
    <div className={styles.filterSidebar}>
      <div className={styles.filterHeader}>
        <svg
          className={styles.filterIcon}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7H21M9 12H21M13 17H21"
            stroke="#2a2d2f"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className={styles.filterTitle}>Filter</h2>
      </div>

      {showTypes && (
        <div className={styles.filterSection}>
          <div
            className={styles.sectionHeader}
            onClick={() => setIsTypesExpanded(!isTypesExpanded)}
          >
            <h3 className={styles.sectionTitle}>By Type</h3>
            <svg
              className={`${styles.dropdownArrow} ${isTypesExpanded ? styles.expanded : ''}`}
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 5L13 1"
                stroke="#2a2d2f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {isTypesExpanded && (
            <div className={styles.filterOptions}>
              {productTypes.map((type) => (
                <label key={type} className={styles.filterOption}>
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeToggle(type)}
                    className={styles.checkbox}
                  />
                  <span className={styles.optionText}>{type}</span>
                </label>
              ))}
            </div>
          )}
          <div className={styles.sectionBorder} />
        </div>
      )}

      {showIndustries && industryGroups.length > 0 && (
        <div className={styles.filterSection}>
          <div
            className={styles.sectionHeader}
            onClick={() => setIsIndustriesExpanded(!isIndustriesExpanded)}
          >
            <h3 className={styles.sectionTitle}>By Industry</h3>
            <svg
              className={`${styles.dropdownArrow} ${isIndustriesExpanded ? styles.expanded : ''}`}
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 5L13 1"
                stroke="#2a2d2f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {isIndustriesExpanded && (
            <div className={styles.industryGroups}>
              {industryGroups.map((group) => (
                <div key={group.industry} className={styles.industryGroup}>
                  <label className={styles.filterOption}>
                    <input
                      type="checkbox"
                      checked={selectedIndustries.includes(group.industry)}
                      onChange={() => handleIndustryToggle(group.industry)}
                      className={styles.checkbox}
                    />
                    <span className={styles.industryLabel}>{group.industry}</span>
                  </label>
                </div>
              ))}
            </div>
          )}
          <div className={styles.sectionBorder} />
        </div>
      )}
    </div>
  )
}

export default FilterSidebar
