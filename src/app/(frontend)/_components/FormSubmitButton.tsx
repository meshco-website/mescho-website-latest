'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'

interface FormSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pendingLabel?: string
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  children,
  pendingLabel = 'Submitting...',
  ...buttonProps
}) => {
  const { pending } = useFormStatus()

  return (
    <button {...buttonProps} type="submit" disabled={pending || buttonProps.disabled}>
      {pending ? pendingLabel : children}
    </button>
  )
}

export default FormSubmitButton


