import React, { useState } from 'react'
import styles from './filterSidebar.module.css'

interface FilterSidebarProps {
  onFilterChange: (filters: { types: string[]; industries: string[] }) => void
  showTypes?: boolean
  showIndustries?: boolean
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onFilterChange,
  showTypes = true,
  showIndustries = true,
}) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [isTypesExpanded, setIsTypesExpanded] = useState(true)
  const [isIndustriesExpanded, setIsIndustriesExpanded] = useState(true)

  const productTypes = [
    'Wire',
    'WireWall',
    'Reinforcing',
    'Fencing',
    'Mining Support',
    'Fasteners',
    'Utility',
  ]

  const industries = [
    'Construction',
    'Agricultural',
    'Mining',
    'Recycling',
    'Property',
    'Manufacturing',
  ]

  const handleTypeToggle = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type]

    setSelectedTypes(newTypes)
    onFilterChange({ types: newTypes, industries: selectedIndustries })
  }

  const handleIndustryToggle = (industry: string) => {
    const newIndustries = selectedIndustries.includes(industry)
      ? selectedIndustries.filter((i) => i !== industry)
      : [...selectedIndustries, industry]

    setSelectedIndustries(newIndustries)
    onFilterChange({ types: selectedTypes, industries: newIndustries })
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
          <div className={styles.sectionBorder}></div>
        </div>
      )}

      {showIndustries && (
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
            <div className={styles.filterOptions}>
              {industries.map((industry) => (
                <label key={industry} className={styles.filterOption}>
                  <input
                    type="checkbox"
                    checked={selectedIndustries.includes(industry)}
                    onChange={() => handleIndustryToggle(industry)}
                    className={styles.checkbox}
                  />
                  <span className={styles.optionText}>{industry}</span>
                </label>
              ))}
            </div>
          )}
          <div className={styles.sectionBorder}></div>
        </div>
      )}
    </div>
  )
}

export default FilterSidebar
