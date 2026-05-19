import React from 'react'
import clsx from 'clsx'
import styles from './companyValueCard.module.css'

interface CompanyValueCardProps {
  icon?: React.ReactNode
  title: string
  align?: 'left' | 'center'
  variant?: 'default' | 'compact'
}

const CompanyValueCard: React.FC<CompanyValueCardProps> = ({
  icon,
  title,
  align = 'left',
  variant = 'default',
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        align === 'center' && styles.centerAlign,
        variant === 'compact' && styles.compactCard,
      )}
    >
      {icon && (
        <div
          className={clsx(
            styles.iconWrapper,
            align === 'center' && styles.centerIcon,
            variant === 'compact' && styles.compactIconWrapper,
          )}
        >
          {icon}
        </div>
      )}
      <p
        className={clsx(
          styles.title,
          align === 'center' && styles.centerTitle,
          variant === 'compact' && styles.compactTitle,
        )}
      >
        {title}
      </p>
    </div>
  )
}

export default CompanyValueCard
