import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const DEFAULT_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
const DEFAULT_TO_EMAIL = process.env.RESEND_TO_EMAIL ?? 'meshco.website@gmail.com'

let resendClient: Resend | null = null

const getResendClient = () => {
  if (!resendClient) {
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured')
    }
    resendClient = new Resend(RESEND_API_KEY)
  }
  return resendClient
}

export const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export interface EmailAttachment {
  filename: string
  content: Buffer
}

interface SendEmailOptions {
  subject: string
  html: string
  replyTo?: string
  to?: string | string[]
  attachments?: EmailAttachment[]
}

export const sendEmail = async ({ subject, html, replyTo, to, attachments }: SendEmailOptions) => {
  const resend = getResendClient()
  const recipients = to ? (Array.isArray(to) ? to : [to]) : [DEFAULT_TO_EMAIL]

  await resend.emails.send({
    from: DEFAULT_FROM_EMAIL,
    to: recipients,
    subject,
    html,
    replyTo,
    attachments: attachments?.map(({ filename, content }) => ({
      filename,
      content,
    })),
  })
}


