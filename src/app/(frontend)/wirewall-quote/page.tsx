'use client'

import React, { useActionState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FormSubmitButton from '../_components/FormSubmitButton'
import { submitWirewallQuoteForm, type FormState } from '../_actions/form-submissions'
import styles from './wirewall-quote.module.css'

const initialState: FormState = {
  status: 'idle',
  message: null,
  fields: {},
}

export default function WirewallQuotePage() {
  const [state, formAction] = useActionState(submitWirewallQuoteForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
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
                  <option value="355">355 (4mm on 5.6mm - 75mm x 12.7mm)</option>
                  <option value="358">358 (4mm on 4mm - 75mm x 12.7mm)</option>
                  <option value="3510">3510 (3mm on 4mm - 75mm x 12.7mm)</option>
                  <option value="3110">3110 (3mm on 4mm - 75mm x 25mm)</option>
                  <option value="3210">3210 (3mm on 4mm - 75mm x 50mm)</option>
                  <option value="af100">AF100 (4mm on 4mm - 50mm x 100mm)</option>
                  <option value="doublewall">DoubleWall (12.5mm x 12.5mm)</option>
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
                  <option value="galvanised">Fully Galvanised 275g/m2</option>
                  <option value="pvc-coated">PVC Coated (400 Microns min.)</option>
                  <option value="polymer-coated">Polymer Coated</option>
                  <option value="bare">Bare (No Coating)</option>
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="securityOptions" className={styles.label}>
                Additional Security Options
              </label>
              <div className={styles.selectWrapper}>
                <select id="securityOptions" name="securityOptions" className={styles.select}>
                  <option value="">Select</option>
                  <option value="spikes">Spikes</option>
                  <option value="underdig">Underdig Panel</option>
                  <option value="barbed-wire">Barbed Wire</option>
                  <option value="razor-wire">Razor Wire</option>
                  <option value="none">None</option>
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="pedestrianGate" className={styles.label}>
                Pedestrian Gate required?
              </label>
              <div className={styles.selectWrapper}>
                <select id="pedestrianGate" name="pedestrianGate" className={styles.select}>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
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
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
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
