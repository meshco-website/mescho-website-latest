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

// Generate static params for all product pages
export async function generateStaticParams() {
  const allProducts = Object.keys(productDetailConfigs).map((key) => {
    const [category, product] = key.split('-')
    return { category, product }
  })

  return allProducts
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, product } = await params

  const productKey = `${category}-${product}`
  const config = productDetailConfigs[productKey]

  if (!config) {
    notFound()
  }

  return (
    <ProductDetailPage
      name={config.name}
      title={config.title}
      category={config.category}
      heroImage={config.heroImage}
      description={config.description}
      layoutType={config.layoutType}
      specifications={config.specifications}
      wireWallSpecifications={config.wireWallSpecifications}
      applications={config.applications}
      technicalData={config.technicalData}
      tabs={config.tabs}
      relatedProducts={config.relatedProducts}
    />
  )
}
