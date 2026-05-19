'use server'

import { escapeHtml, sendEmail } from '@/lib/email'
import { verifyRecaptcha } from '@/lib/recaptcha'

export interface FormState {
  status: 'idle' | 'success' | 'error'
  message: string | null
  fields: Record<string, string>
}

const normalizeValue = (value: FormDataEntryValue | null): string =>
  typeof value === 'string' ? value.trim() : ''

const renderRows = (rows: Array<[string, string]>) =>
  rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:4px 8px;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:4px 8px;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join('')

const buildEmailBody = (title: string, rows: Array<[string, string]>) => `
  <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2a2d2f;line-height:1.6;">
    <h2 style="font-size:18px;margin:0 0 12px;">${escapeHtml(title)}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:640px;">
      <tbody>
        ${renderRows(rows)}
      </tbody>
    </table>
  </div>
`

const successState = (message: string): FormState => ({
  status: 'success',
  message,
  fields: {},
})

const errorState = (message: string, fields: Record<string, string>): FormState => ({
  status: 'error',
  message,
  fields,
})

const getCaptchaToken = (formData: FormData): string =>
  normalizeValue(formData.get('g-recaptcha-response'))

const validateCaptcha = async (
  formData: FormData,
  fields: Record<string, string>,
): Promise<FormState | null> => {
  const result = await verifyRecaptcha(getCaptchaToken(formData))
  if (!result.ok) {
    return errorState(result.error, fields)
  }
  return null
}

export const submitContactForm = async (
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const firstName = normalizeValue(formData.get('firstName'))
  const lastName = normalizeValue(formData.get('lastName'))
  const email = normalizeValue(formData.get('email'))
  const phone = normalizeValue(formData.get('phone'))
  const company = normalizeValue(formData.get('company'))
  const country = normalizeValue(formData.get('country'))
  const inquiry = normalizeValue(formData.get('inquiry'))

  const fields = {
    firstName,
    lastName,
    email,
    phone,
    company,
    country,
    inquiry,
  }

  if (!firstName || !lastName || !email || !inquiry) {
    return errorState(
      'Please complete the required fields: first name, last name, email, and inquiry.',
      fields,
    )
  }

  const captchaError = await validateCaptcha(formData, fields)
  if (captchaError) {
    return captchaError
  }

  try {
    const subject = `New Contact Form Submission: ${firstName} ${lastName}`
    const html = buildEmailBody('Contact Form Submission', [
      ['First Name', firstName],
      ['Last Name', lastName],
      ['Email', email],
      ['Phone', phone],
      ['Company', company],
      ['Country', country],
      ['Inquiry', inquiry],
    ])

    await sendEmail({
      subject,
      html,
      replyTo: email,
    })

    return successState('Thank you for getting in touch. We will respond shortly.')
  } catch (error) {
    console.error('Failed to submit contact form', error)
    return errorState(
      'We could not send your message right now. Please try again in a moment.',
      fields,
    )
  }
}

export const submitQuoteForm = async (
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const product = normalizeValue(formData.get('product'))
  const quantity = normalizeValue(formData.get('quantity'))
  const firstName = normalizeValue(formData.get('firstName'))
  const lastName = normalizeValue(formData.get('lastName'))
  const phone = normalizeValue(formData.get('phone'))
  const email = normalizeValue(formData.get('email'))
  const company = normalizeValue(formData.get('company'))
  const country = normalizeValue(formData.get('country'))
  const inquiry = normalizeValue(formData.get('inquiry'))

  const fields = {
    product,
    quantity,
    firstName,
    lastName,
    phone,
    email,
    company,
    country,
    inquiry,
  }

  if (!firstName || !lastName || !email || !inquiry) {
    return errorState(
      'Please complete the required fields: first name, last name, email, and inquiry.',
      fields,
    )
  }

  const captchaError = await validateCaptcha(formData, fields)
  if (captchaError) {
    return captchaError
  }

  try {
    const subject = `Quote Request${product ? `: ${product}` : ''} from ${firstName} ${lastName}`
    const html = buildEmailBody('Quote Request Submission', [
      ['Product', product],
      ['Quantity', quantity],
      ['First Name', firstName],
      ['Last Name', lastName],
      ['Email', email],
      ['Phone', phone],
      ['Company', company],
      ['Country', country],
      ['Inquiry', inquiry],
    ])

    await sendEmail({
      subject,
      html,
      replyTo: email,
    })

    return successState('Thanks for your request. Our team will contact you soon.')
  } catch (error) {
    console.error('Failed to submit quote form', error)
    return errorState('We could not send your request right now. Please try again later.', fields)
  }
}

const CAREERS_TO_EMAIL = 'riaan@meshco.co.za'
const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024
const ALLOWED_RESUME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
])

const getResumeFile = (formData: FormData): File | null => {
  const value = formData.get('resume')
  return value instanceof File && value.size > 0 ? value : null
}

export const submitCareersForm = async (
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const firstName = normalizeValue(formData.get('firstName'))
  const lastName = normalizeValue(formData.get('lastName'))
  const phone = normalizeValue(formData.get('phone'))
  const email = normalizeValue(formData.get('email'))
  const position = normalizeValue(formData.get('position'))
  const additionalInfo = normalizeValue(formData.get('additionalInfo'))
  const resume = getResumeFile(formData)

  const fields = {
    firstName,
    lastName,
    phone,
    email,
    position,
    additionalInfo,
  }

  if (!firstName || !lastName || !email) {
    return errorState(
      'Please complete the required fields: first name, last name, and email.',
      fields,
    )
  }

  if (!resume) {
    return errorState('Please upload your resume/CV.', fields)
  }

  const captchaError = await validateCaptcha(formData, fields)
  if (captchaError) {
    return captchaError
  }

  if (resume.size > MAX_RESUME_SIZE_BYTES) {
    return errorState('Your resume must be 5MB or smaller.', fields)
  }

  const resumeType = resume.type || ''
  const resumeExtension = resume.name.split('.').pop()?.toLowerCase() ?? ''
  const isAllowedType =
    ALLOWED_RESUME_TYPES.has(resumeType) ||
    ['pdf', 'doc', 'docx'].includes(resumeExtension)

  if (!isAllowedType) {
    return errorState('Please upload a PDF or Word document (.pdf, .doc, .docx).', fields)
  }

  try {
    const resumeBuffer = Buffer.from(await resume.arrayBuffer())
    const subject = `Careers Application: ${firstName} ${lastName}`
    const html = buildEmailBody('Careers Form Submission', [
      ['First Name', firstName],
      ['Last Name', lastName],
      ['Email', email],
      ['Phone', phone],
      ['Position at Current Job', position],
      ['Additional Information', additionalInfo],
      ['Resume/CV', resume.name],
    ])

    await sendEmail({
      subject,
      html,
      replyTo: email,
      to: CAREERS_TO_EMAIL,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    })

    return successState('Thank you for your application. We will be in touch shortly.')
  } catch (error) {
    console.error('Failed to submit careers form', error)
    return errorState(
      'We could not send your application right now. Please try again in a moment.',
      fields,
    )
  }
}

export const submitWirewallQuoteForm = async (
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const firstName = normalizeValue(formData.get('firstName'))
  const lastName = normalizeValue(formData.get('lastName'))
  const phone = normalizeValue(formData.get('phone'))
  const email = normalizeValue(formData.get('email'))
  const company = normalizeValue(formData.get('company'))
  const suburb = normalizeValue(formData.get('suburb'))
  const fenceLength = normalizeValue(formData.get('fenceLength'))
  const fenceHeight = normalizeValue(formData.get('fenceHeight'))
  const panelType = normalizeValue(formData.get('panelType'))
  const coatingFinish = normalizeValue(formData.get('coatingFinish'))
  const securityOptions = formData
    .getAll('securityOptions')
    .map((value) => (typeof value === 'string' ? value.trim() : ''))
    .filter(Boolean)
    .join(', ')
  const pedestrianGate = normalizeValue(formData.get('pedestrianGate'))
  const vehicleGate = normalizeValue(formData.get('vehicleGate'))
  const installation = normalizeValue(formData.get('installation'))
  const additionalInfo = normalizeValue(formData.get('additionalInfo'))

  const fields = {
    firstName,
    lastName,
    phone,
    email,
    company,
    suburb,
    fenceLength,
    fenceHeight,
    panelType,
    coatingFinish,
    securityOptions,
    pedestrianGate,
    vehicleGate,
    installation,
    additionalInfo,
  }

  if (!firstName || !lastName || !email) {
    return errorState(
      'Please complete the required fields: first name, last name, and email.',
      fields,
    )
  }

  const captchaError = await validateCaptcha(formData, fields)
  if (captchaError) {
    return captchaError
  }

  try {
    const subject = `WireWall Quote Request from ${firstName} ${lastName}`
    const html = buildEmailBody('WireWall Quote Request Submission', [
      ['First Name', firstName],
      ['Last Name', lastName],
      ['Email', email],
      ['Phone', phone],
      ['Company', company],
      ['Suburb', suburb],
      ['Fence Length (m)', fenceLength],
      ['Fence Height (m)', fenceHeight],
      ['Panel Type', panelType],
      ['Coating Finish', coatingFinish],
      ['Security Options', securityOptions],
      ['Pedestrian Gate', pedestrianGate],
      ['Vehicle Gate', vehicleGate],
      ['Installation Required', installation],
      ['Additional Information', additionalInfo],
    ])

    await sendEmail({
      subject,
      html,
      replyTo: email,
    })

    return successState('Thanks for your request. Our team will be in touch shortly.')
  } catch (error) {
    console.error('Failed to submit wirewall quote form', error)
    return errorState('We could not send your request right now. Please try again later.', fields)
  }
}


