'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import ProductDetailPage from '../../../_components/ProductDetailPage'
import { productDetailConfigs } from '../../../_components/ProductDetailPage/configs'

interface ProductPageProps {
  params: Promise<{
    category: string
    product: string
  }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { category, product } = React.use(params)

  const productKey = `${category}-${product}`
  const config = productDetailConfigs[productKey]

  if (!config) {
    notFound()
  }

  return (
    <ProductDetailPage
      title={config.title}
      category={config.category}
      heroImage={config.heroImage}
      description={config.description}
      specifications={config.specifications}
      applications={config.applications}
      technicalData={config.technicalData}
      relatedProducts={config.relatedProducts}
    />
  )
}
