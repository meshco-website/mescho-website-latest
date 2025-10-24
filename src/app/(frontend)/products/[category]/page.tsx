'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import ProductTypePage from '../../_components/ProductTypePage'
import { productTypeConfigs } from '../../_components/ProductTypePage/configs'

interface ProductCategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export default function ProductCategoryPage({ params }: ProductCategoryPageProps) {
  const { category } = React.use(params)

  const config = productTypeConfigs[category]

  if (!config) {
    notFound()
  }

  return (
    <ProductTypePage
      title={config.title}
      backgroundImage={config.backgroundImage}
      hasFilter={config.hasFilter}
      cardSize={config.cardSize}
      layoutType={config.layoutType}
      products={config.products}
      showTypesFilter={config.showTypesFilter}
      showIndustriesFilter={config.showIndustriesFilter}
      spanningProduct={config.spanningProduct}
      category={category}
    />
  )
}
