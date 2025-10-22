import React from 'react'
import './styles.css'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.mainHeading}>
              The Leading Manufacturer of Quality Wire, Fencing and Reinforcing Products
            </h1>
            <p className={styles.subHeading}>STRENGTH IN EVERY WIRE</p>
          </div>
        </div>
      </section>
      <div style={{ padding: '4rem 2rem', minHeight: '40vh' }}>
        <h2>Homepage Content Section</h2>
        <p>This is a placeholder for the next section of the homepage.</p>
      </div>
    </div>
  )
}
