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
  const [selectedProductKeys, setSelectedProductKeys] = useState<string[]>([])
  const [isTypesExpanded, setIsTypesExpanded] = useState(true)
  const [isIndustriesExpanded, setIsIndustriesExpanded] = useState(true)
  const [expandedIndustries, setExpandedIndustries] = useState<string[]>(
    industryGroups.map((group) => group.industry),
  )

  const emitChange = (types: string[], productKeys: string[]) => {
    onFilterChange({ types, productKeys })
  }

  const handleTypeToggle = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type]

    setSelectedTypes(newTypes)
    emitChange(newTypes, selectedProductKeys)
  }

  const handleProductKeyToggle = (key: string) => {
    const newKeys = selectedProductKeys.includes(key)
      ? selectedProductKeys.filter((k) => k !== key)
      : [...selectedProductKeys, key]

    setSelectedProductKeys(newKeys)
    emitChange(selectedTypes, newKeys)
  }

  const handleIndustryToggle = (group: IndustryFilterGroup) => {
    const groupKeys = group.products.map((product) => product.key)
    const allSelected = groupKeys.every((key) => selectedProductKeys.includes(key))

    const newKeys = allSelected
      ? selectedProductKeys.filter((key) => !groupKeys.includes(key))
      : [...new Set([...selectedProductKeys, ...groupKeys])]

    setSelectedProductKeys(newKeys)
    emitChange(selectedTypes, newKeys)
  }

  const toggleIndustryExpanded = (industry: string) => {
    setExpandedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry],
    )
  }

  const isIndustryChecked = (group: IndustryFilterGroup) =>
    group.products.length > 0 &&
    group.products.every((product) => selectedProductKeys.includes(product.key))

  const isIndustryIndeterminate = (group: IndustryFilterGroup) => {
    const selectedCount = group.products.filter((product) =>
      selectedProductKeys.includes(product.key),
    ).length
    return selectedCount > 0 && selectedCount < group.products.length
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
              {industryGroups.map((group) => {
                const isExpanded = expandedIndustries.includes(group.industry)

                return (
                  <div key={group.industry} className={styles.industryGroup}>
                    <div className={styles.industryGroupHeader}>
                      <label className={styles.filterOption}>
                        <input
                          type="checkbox"
                          checked={isIndustryChecked(group)}
                          ref={(input) => {
                            if (input) {
                              input.indeterminate = isIndustryIndeterminate(group)
                            }
                          }}
                          onChange={() => handleIndustryToggle(group)}
                          className={styles.checkbox}
                        />
                        <span className={styles.industryLabel}>{group.industry}</span>
                      </label>
                      <button
                        type="button"
                        className={styles.industryExpandButton}
                        onClick={() => toggleIndustryExpanded(group.industry)}
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${group.industry} products`}
                      >
                        <svg
                          className={`${styles.dropdownArrow} ${isExpanded ? styles.expanded : ''}`}
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
                      </button>
                    </div>
                    {isExpanded && (
                      <div className={styles.nestedFilterOptions}>
                        {group.products.map((product) => (
                          <label key={`${group.industry}-${product.key}`} className={styles.filterOption}>
                            <input
                              type="checkbox"
                              checked={selectedProductKeys.includes(product.key)}
                              onChange={() => handleProductKeyToggle(product.key)}
                              className={styles.checkbox}
                            />
                            <span className={styles.nestedOptionText}>{product.label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
          <div className={styles.sectionBorder} />
        </div>
      )}
    </div>
  )
}

export default FilterSidebar