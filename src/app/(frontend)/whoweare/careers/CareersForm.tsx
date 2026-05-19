'use client'

import React, { useActionState, useEffect, useRef, useState } from 'react'
import FormSubmitButton from '../../_components/FormSubmitButton'
import ReCaptchaField, { type ReCaptchaFieldRef } from '../../_components/ReCaptchaField'
import { submitCareersForm, type FormState } from '../../_actions/form-submissions'
import styles from './careers.module.css'

const initialState: FormState = {
  status: 'idle',
  message: null,
  fields: {},
}

const CareersForm: React.FC = () => {
  const [state, formAction] = useActionState(submitCareersForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<ReCaptchaFieldRef>(null)
  const [resumeFileName, setResumeFileName] = useState<string | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
      recaptchaRef.current?.reset()
      setResumeFileName(null)
      setCaptchaToken(null)
    }
  }, [state.status])

  const shouldShowMessage = state.status !== 'idle' && Boolean(state.message)
  const messageClassName =
    state.status === 'success' ? styles.formMessageSuccess : styles.formMessageError

  const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setResumeFileName(file?.name ?? null)
  }

  return (
    <form ref={formRef} className={styles.form} action={formAction} noValidate>
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
            required
            defaultValue={state.fields.firstName}
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
            required
            defaultValue={state.fields.lastName}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={styles.input}
            defaultValue={state.fields.phone}
          />
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
            required
            defaultValue={state.fields.email}
          />
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="position" className={styles.label}>
          Position at current job <span className={styles.optional}>(optional)</span>
        </label>
        <input
          type="text"
          id="position"
          name="position"
          className={styles.input}
          defaultValue={state.fields.position}
        />
      </div>

      <div className={styles.formField}>
        <label htmlFor="resume" className={styles.label}>
          Please upload your resume/CV
        </label>
        <div className={styles.fileInputWrapper}>
          <input
            type="file"
            id="resume"
            name="resume"
            className={styles.fileInput}
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleResumeChange}
            required
          />
          <span
            className={resumeFileName ? styles.fileName : styles.filePlaceholder}
            title={resumeFileName ?? undefined}
          >
            {resumeFileName ?? 'Select file'}
          </span>
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="additionalInfo" className={styles.label}>
          Is there anything additional you&apos;d like to share with us?
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          className={styles.textarea}
          defaultValue={state.fields.additionalInfo}
        />
      </div>

      <ReCaptchaField ref={recaptchaRef} onTokenChange={setCaptchaToken} />
      <input type="hidden" name="g-recaptcha-response" value={captchaToken ?? ''} />

      <div>
        <FormSubmitButton
          className={styles.submitButton}
          pendingLabel="Sending..."
          disabled={!captchaToken}
        >
          Submit form
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

export default CareersForm
