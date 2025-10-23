import React from 'react'

export default function ProductPage({ params }: any) {
  return (
    <div style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
      <h1>{params.product}</h1>
      <p>This page is under construction.</p>
    </div>
  )
}
