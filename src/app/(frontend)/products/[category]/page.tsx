import React from 'react'
import { notFound } from 'next/navigation'
import ProductTypePage from '../../_components/ProductTypePage'
import { productTypeConfigs } from '../../_components/ProductTypePage/configs'

interface ProductCategoryPageProps {
  params: Promise<{
    category: string
  }>
}

// Generate static params for all category pages
export async function generateStaticParams() {
  const allCategories = Object.keys(productTypeConfigs).map((category) => ({
    category,
  }))

  return allCategories
}

export default async function ProductCategoryPage({ params }: ProductCategoryPageProps) {
  const { category } = await params

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
