'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './review.module.css'

export default function ReviewPage() {
  const [rating, setRating] = useState(0)
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    feedback: '',
  })

  const handleRatingClick = (value: number) => {
    setRating(value)
    setShowFeedbackForm(value <= 4)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 5) {
      alert('Thank you for your 5-star rating!')
    } else {
      alert('Thank you for your feedback!')
    }
  }

  const isFiveStars = rating === 5

  return (
    <div className={styles.reviewPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {isFiveStars ? 'Thank you for your 5-star rating!' : "Let us know how we're doing!"}
        </h1>

        {!isFiveStars && (
          <p className={styles.subtitle}>Please rate us our service out of 5 stars:</p>
        )}

        <div className={styles.starRating}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`${styles.starButton} ${star <= rating ? styles.starFilled : ''}`}
              onClick={() => handleRatingClick(star)}
            >
              ★
            </button>
          ))}
        </div>

        {showFeedbackForm && rating > 0 && rating <= 4 && (
          <form className={styles.feedbackForm} onSubmit={handleSubmit}>
            <p className={styles.feedbackTitle}>Please provide your details:</p>

            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label htmlFor="firstName" className={styles.label}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={styles.input}
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
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
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
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
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
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="feedback" className={styles.label}>
                Feedback <span className={styles.optional}>(Optional)</span>
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                className={styles.textarea}
                rows={8}
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

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        )}

        {isFiveStars && (
          <div className={styles.thankYouMessage}>
            <p>We&apos;re so glad you had a great experience with MESHCO!</p>
          </div>
        )}
      </div>
    </div>
  )
}
