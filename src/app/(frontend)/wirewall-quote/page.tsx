'use client'

import React, { useActionState, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FormSubmitButton from '../_components/FormSubmitButton'
import { submitWirewallQuoteForm, type FormState } from '../_actions/form-submissions'
import MultiSelectField from './MultiSelectField'
import styles from './wirewall-quote.module.css'

const initialState: FormState = {
  status: 'idle',
  message: null,
  fields: {},
}

const SECURITY_OPTIONS = [
  'Spike Strip',
  'Under Dig',
  'Electric Fencing',
  'Razor Wire',
  'None',
] as const

export default function WirewallQuotePage() {
  const [state, formAction] = useActionState(submitWirewallQuoteForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const [securityOptions, setSecurityOptions] = useState<string[]>([])

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
      setSecurityOptions([])
    }
  }, [state.status])

  const shouldShowMessage = state.status !== 'idle' && Boolean(state.message)
  const messageClassName = state.status === 'success' ? styles.successMessage : styles.errorMessage

  return (
    <div className={styles.quotePage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Get a Quote</h1>

        <div className={styles.categoryTitle}>WireWall</div>

        <p className={styles.description}>
          If this is not the product or the application you wish to discuss, please use{' '}
          <Link href="/quote" className={styles.link}>
            this form
          </Link>
          .
        </p>
        <form ref={formRef} className={styles.form} action={formAction} noValidate>
          <div className={styles.formGrid}>
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
                required
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
                required
              />
            </div>

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
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder=""
                required
              />
            </div>

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
              <label htmlFor="suburb" className={styles.label}>
                Suburb
              </label>
              <input
                type="text"
                id="suburb"
                name="suburb"
                className={styles.input}
                placeholder=""
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="fenceLength" className={styles.label}>
                Length of Fence (M)
              </label>
              <input
                type="text"
                id="fenceLength"
                name="fenceLength"
                className={styles.input}
                placeholder=""
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="fenceHeight" className={styles.label}>
                Height Required (M)
              </label>
              <input
                type="text"
                id="fenceHeight"
                name="fenceHeight"
                className={styles.input}
                placeholder=""
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="panelType" className={styles.label}>
                Panel Type
              </label>
              <div className={styles.selectWrapper}>
                <select id="panelType" name="panelType" className={styles.select}>
                  <option value="">Select</option>
                  <option value="DoubleWall">DoubleWall</option>
                  <option value="355 (75 x 12.7mm)">355 (75 x 12.7mm)</option>
                  <option value="358 (75 x 12.7mm)">358 (75 x 12.7mm)</option>
                  <option value="3510 (75 x 12.7mm)">3510 (75 x 12.7mm)</option>
                  <option value="3110 (75 x 25mm)">3110 (75 x 25mm)</option>
                  <option value="3210 (75 x 50mm)">3210 (75 x 50mm)</option>
                  <option value="3410 (75 x 100mm)">3410 (75 x 100mm)</option>
                  <option value="AF100 (50 x 100mm)">AF100 (50 x 100mm)</option>
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="coatingFinish" className={styles.label}>
                Coating Finish
              </label>
              <div className={styles.selectWrapper}>
                <select id="coatingFinish" name="coatingFinish" className={styles.select}>
                  <option value="">Select</option>
                  <option value="Galvanised">Galvanised</option>
                  <option value="Plastic Coated (Anthracite)">Plastic Coated (Anthracite)</option>
                  <option value="Plastic Coated (Green)">Plastic Coated (Green)</option>
                  <option value="Plastic Coated (Other)">Plastic Coated (Other)</option>
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>

            <MultiSelectField
              id="securityOptions"
              name="securityOptions"
              label="Additional Security Options"
              options={SECURITY_OPTIONS}
              value={securityOptions}
              onChange={setSecurityOptions}
            />

            <div className={styles.formField}>
              <label htmlFor="pedestrianGate" className={styles.label}>
                Pedestrian Gate required?
              </label>
              <div className={styles.selectWrapper}>
                <select id="pedestrianGate" name="pedestrianGate" className={styles.select}>
                  <option value="">Select</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="More">More</option>
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="vehicleGate" className={styles.label}>
                Vehicle Gate required?
              </label>
              <div className={styles.selectWrapper}>
                <select id="vehicleGate" name="vehicleGate" className={styles.select}>
                  <option value="">Select</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="More">More</option>
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="installation" className={styles.label}>
                Installation required?
              </label>
              <div className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="installation"
                    value="yes"
                    className={styles.radioInput}
                  />
                  <span className={styles.radioLabel}>Yes</span>
                </label>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="installation"
                    value="no"
                    className={styles.radioInput}
                  />
                  <span className={styles.radioLabel}>No</span>
                </label>
              </div>
            </div>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.formField}>
              <label htmlFor="additionalInfo" className={styles.label}>
                Additional information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                className={styles.textarea}
                rows={12}
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
            <FormSubmitButton className={styles.submitButton} pendingLabel="Sending...">
              Submit
            </FormSubmitButton>
            {shouldShowMessage && (
              <p
                className={`${styles.formMessage} ${messageClassName}`}
                role="status"
                aria-live="polite"
              >
                {state.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
