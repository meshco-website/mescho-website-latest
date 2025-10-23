import React from 'react'

export default function ProductPage({ params }) {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
      <h1>{capitalizeFirstLetter(params.product)}</h1>
      <p>This page is under construction.</p>
    </div>
  )
}
