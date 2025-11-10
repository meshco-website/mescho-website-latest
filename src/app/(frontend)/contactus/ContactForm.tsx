'use client'

import React, { useActionState, useEffect, useRef } from 'react'
import FormSubmitButton from '../_components/FormSubmitButton'
import { submitContactForm, type FormState } from '../_actions/form-submissions'
import styles from './contactus.module.css'

const initialState: FormState = {
  status: 'idle',
  message: null,
  fields: {},
}

const ContactForm: React.FC = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state.status])

  const shouldShowMessage = state.status !== 'idle' && Boolean(state.message)
  const messageClassName =
    state.status === 'success' ? styles.formMessageSuccess : styles.formMessageError

  return (
    <form ref={formRef} className={styles.form} noValidate action={formAction}>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="firstName" className={styles.label}>
            First Name
          </label>
          <input type="text" id="firstName" name="firstName" className={styles.input} required />
        </div>
        <div className={styles.formField}>
          <label htmlFor="lastName" className={styles.label}>
            Last Name
          </label>
          <input type="text" id="lastName" name="lastName" className={styles.input} required />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number <span className={styles.optional}>(optional)</span>
          </label>
          <input type="tel" id="phone" name="phone" className={styles.input} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="email" id="email" name="email" className={styles.input} required />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="company" className={styles.label}>
            Company <span className={styles.optional}>(optional)</span>
          </label>
          <input type="text" id="company" name="company" className={styles.input} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="country" className={styles.label}>
            Country
          </label>
          <div className={styles.selectWrapper}>
            <select id="country" name="country" className={styles.select} defaultValue="">
              <option value="">Select</option>
              <option value="south-africa">South Africa</option>
              <option value="zimbabwe">Zimbabwe</option>
              <option value="botswana">Botswana</option>
              <option value="namibia">Namibia</option>
              <option value="mozambique">Mozambique</option>
              <option value="zambia">Zambia</option>
              <option value="lesotho">Lesotho</option>
              <option value="eswatini">Eswatini</option>
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
        <textarea id="inquiry" name="inquiry" className={styles.textarea} required />
      </div>

      <div>
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
  )
}

export default ContactForm


