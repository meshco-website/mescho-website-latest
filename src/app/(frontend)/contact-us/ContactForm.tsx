'use client'

import React, { useActionState, useEffect, useRef, useState } from 'react'
import FormSubmitButton from '../_components/FormSubmitButton'
import ReCaptchaField, { type ReCaptchaFieldRef } from '../_components/ReCaptchaField'
import { submitContactForm, type FormState } from '../_actions/form-submissions'
import styles from './contactus.module.css'

const initialState: FormState = {
  status: 'idle',
  message: null,
  fields: {},
}

const COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]

const ContactForm: React.FC = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<ReCaptchaFieldRef>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
      recaptchaRef.current?.reset()
      setCaptchaToken(null)
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
            <select
              id="country"
              name="country"
              className={styles.select}
              defaultValue="south-africa"
            >
              <option value="">Select</option>
              {COUNTRIES.map((country) => (
                <option key={country} value={country.toLowerCase().replace(/\s+/g, '-')}>
                  {country}
                </option>
              ))}
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

      <ReCaptchaField ref={recaptchaRef} onTokenChange={setCaptchaToken} />
      <input type="hidden" name="g-recaptcha-response" value={captchaToken ?? ''} />

      <div>
        <FormSubmitButton
          className={styles.submitButton}
          pendingLabel="Sending..."
          disabled={!captchaToken}
        >
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
