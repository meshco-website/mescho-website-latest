import React from 'react'
import Image from 'next/image'
import styles from './companyValueCard.module.css'

interface CompanyValueCardProps {
  icon: string
  title: string
}

const CompanyValueCard: React.FC<CompanyValueCardProps> = ({ icon, title }) => {
  return (
    <div className={styles.card}>
      {icon && (
        <div className={styles.iconWrapper}>
          <Image src={icon} alt="Value icon" width={56} height={49} className={styles.icon} />
        </div>
      )}
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default CompanyValueCard
