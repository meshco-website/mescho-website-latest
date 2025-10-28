'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './quote.module.css'

export default function QuotePage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/review')
  }
  return (
    <div className={styles.quotePage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Get a Quote</h1>

        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="product" className={styles.label}>
                Product
              </label>
              <div className={styles.selectWrapper}>
                <select id="product" name="product" className={styles.select}>
                  <option value="">Select</option>
                  <option value="wire">Wire</option>
                  <option value="reinforcing">Reinforcing</option>
                  <option value="fencing">Fencing</option>
                  <option value="wirewall">WireWall Fencing</option>
                  <option value="fasteners">Fasteners</option>
                  <option value="mining-support">Mining Support</option>
                  <option value="utility">Utility</option>
                  <option value="other">Other</option>
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="quantity" className={styles.label}>
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                className={styles.input}
                placeholder=""
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={styles.input}
                placeholder=""
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={styles.input}
                placeholder=""
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input type="tel" id="phone" name="phone" className={styles.input} placeholder="" />
            </div>

            <div className={styles.formField}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input type="email" id="email" name="email" className={styles.input} placeholder="" />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="company" className={styles.label}>
                Company<span className={styles.optional}> (optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className={styles.input}
                placeholder=""
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="country" className={styles.label}>
                Country
              </label>
              <div className={styles.selectWrapper}>
                <select id="country" name="country" className={styles.select}>
                  <option value="">Select</option>
                  <option value="south-africa">South Africa</option>
                  <option value="zimbabwe">Zimbabwe</option>
                  <option value="botswana">Botswana</option>
                  <option value="namibia">Namibia</option>
                  <option value="mozambique">Mozambique</option>
                  <option value="zambia">Zambia</option>
                  <option value="lesotho">Lesotho</option>
                  <option value="swaziland">Swaziland</option>
                  <option value="other">Other</option>
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>
          </div>

          <div className={styles.formField}>
            <label htmlFor="inquiry" className={styles.label}>
              Tell us about your inquiry
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              className={styles.textarea}
              rows={10}
              placeholder=""
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/placeholder.svg"
              alt="Captcha"
              width={200}
              height={50}
              className={styles.captchaImage}
            />
          </div>

          <button type="submit" className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
