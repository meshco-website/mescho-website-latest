'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import styles from './recaptchaField.module.css'

const SITE_KEY = process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY
const SCRIPT_SRC = 'https://www.google.com/recaptcha/api.js?render=explicit'

type Grecaptcha = {
  ready: (callback: () => void) => void
  render: (
    container: HTMLElement,
    parameters: {
      sitekey: string
      callback: (token: string) => void
      'expired-callback': () => void
      'error-callback': () => void
    },
  ) => number
  reset: (widgetId?: number) => void
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha
  }
}

export type ReCaptchaFieldRef = {
  reset: () => void
}

type ReCaptchaFieldProps = {
  onTokenChange: (token: string | null) => void
  className?: string
}

let scriptPromise: Promise<Grecaptcha> | null = null

function loadRecaptchaScript(): Promise<Grecaptcha> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('reCAPTCHA can only load in the browser'))
  }

  if (window.grecaptcha) {
    return new Promise((resolve) => {
      window.grecaptcha!.ready(() => resolve(window.grecaptcha!))
    })
  }

  if (scriptPromise) {
    return scriptPromise
  }

  scriptPromise = new Promise((resolve, reject) => {
    const finish = () => {
      if (!window.grecaptcha) {
        scriptPromise = null
        reject(new Error('reCAPTCHA failed to initialize'))
        return
      }
      window.grecaptcha.ready(() => resolve(window.grecaptcha!))
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        finish()
        return
      }
      existing.addEventListener('load', finish, { once: true })
      existing.addEventListener(
        'error',
        () => {
          scriptPromise = null
          reject(new Error('reCAPTCHA script failed to load'))
        },
        { once: true },
      )
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = () => {
      script.dataset.loaded = 'true'
      finish()
    }
    script.onerror = () => {
      scriptPromise = null
      script.remove()
      reject(new Error('reCAPTCHA script failed to load'))
    }
    document.head.appendChild(script)
  })

  return scriptPromise
}

const ReCaptchaField = forwardRef<ReCaptchaFieldRef, ReCaptchaFieldProps>(function ReCaptchaField(
  { onTokenChange, className },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<number | null>(null)
  const onTokenChangeRef = useRef(onTokenChange)
  onTokenChangeRef.current = onTokenChange

  const resetWidget = useCallback(() => {
    if (widgetIdRef.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetIdRef.current)
    }
    onTokenChangeRef.current(null)
  }, [])

  useEffect(() => {
    if (!SITE_KEY) return

    let cancelled = false

    loadRecaptchaScript()
      .then((grecaptcha) => {
        if (cancelled || !containerRef.current || widgetIdRef.current !== null) {
          return
        }

        widgetIdRef.current = grecaptcha.render(containerRef.current, {
          sitekey: SITE_KEY,
          callback: (token: string) => onTokenChangeRef.current(token),
          'expired-callback': () => onTokenChangeRef.current(null),
          'error-callback': () => onTokenChangeRef.current(null),
        })
      })
      .catch(() => {
        if (!cancelled) {
          onTokenChangeRef.current(null)
        }
      })

    return () => {
      cancelled = true
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
      widgetIdRef.current = null
    }
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      reset: resetWidget,
    }),
    [resetWidget],
  )

  if (!SITE_KEY) {
    return (
      <p className={styles.missing}>
        Captcha is not configured. Please contact the site administrator.
      </p>
    )
  }

  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <div ref={containerRef} />
    </div>
  )
})

export default ReCaptchaField
