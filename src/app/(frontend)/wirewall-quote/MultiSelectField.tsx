'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import styles from './wirewall-quote.module.css'

interface MultiSelectFieldProps {
  id: string
  name: string
  label: string
  options: readonly string[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
}

export default function MultiSelectField({
  id,
  name,
  label,
  options,
  value,
  onChange,
  placeholder = 'Select',
}: MultiSelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const labelId = useId()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const toggleOption = (option: string) => {
    if (option === 'None') {
      onChange(value.includes('None') ? [] : ['None'])
      return
    }

    const withoutNone = value.filter((o) => o !== 'None')
    if (withoutNone.includes(option)) {
      onChange(withoutNone.filter((o) => o !== option))
    } else {
      onChange([...withoutNone, option])
    }
  }

  const displayText = value.length > 0 ? value.join(', ') : placeholder

  return (
    <div className={styles.formField}>
      <span className={styles.label} id={labelId}>
        {label}
      </span>
      <div className={styles.selectWrapper} ref={wrapperRef}>
        <button
          type="button"
          id={id}
          className={`${styles.select} ${styles.multiSelectTrigger} ${value.length === 0 ? styles.multiSelectPlaceholder : ''}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={labelId}
        >
          <span className={styles.multiSelectValue}>{displayText}</span>
        </button>
        <span className={styles.selectArrow} aria-hidden="true">
          {isOpen ? '▲' : '▼'}
        </span>
        {isOpen && (
          <ul className={styles.multiSelectMenu} role="listbox" aria-multiselectable="true">
            {options.map((option) => {
              const isSelected = value.includes(option)
              return (
                <li key={option} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    className={`${styles.multiSelectOption} ${isSelected ? styles.multiSelectOptionSelected : ''}`}
                    onClick={() => toggleOption(option)}
                  >
                    {option}
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {value.map((option) => (
        <input key={option} type="hidden" name={name} value={option} />
      ))}
    </div>
  )
}
