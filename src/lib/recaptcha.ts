const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'

type VerifyResponse = {
  success: boolean
  'error-codes'?: string[]
}

export type RecaptchaVerificationResult =
  | { ok: true }
  | { ok: false; error: string }

export const verifyRecaptcha = async (
  token: string | null | undefined,
): Promise<RecaptchaVerificationResult> => {
  const secret = process.env.GOOGLE_CAPTCHA_SECRET_KEY

  if (!secret) {
    console.error('GOOGLE_CAPTCHA_SECRET_KEY is not configured')
    return {
      ok: false,
      error: 'Captcha verification is unavailable. Please try again later.',
    }
  }

  if (!token) {
    return { ok: false, error: 'Please complete the captcha verification.' }
  }

  try {
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    })

    const data = (await response.json()) as VerifyResponse

    if (!data.success) {
      return { ok: false, error: 'Captcha verification failed. Please try again.' }
    }

    return { ok: true }
  } catch (error) {
    console.error('Failed to verify reCAPTCHA', error)
    return {
      ok: false,
      error: 'Captcha verification is unavailable. Please try again later.',
    }
  }
}
