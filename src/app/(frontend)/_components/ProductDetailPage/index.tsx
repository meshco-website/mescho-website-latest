import React from 'react'
import ProductInfo from '../ProductInfo'
import ProductDetails from '../ProductDetails'
import RelatedProducts from '../RelatedProducts'
import styles from './productDetailPage.module.css'

interface Specification {
  label: string
  value: string
}

interface WireWallSpecification {
  height: string[]
  vBends: string[]
  length: string[]
  aperture: string[]
  wireDiameter: string[]
  zincCoating: string[]
  tensileStrength: string[]
  weldStrength: string[]
  colourCoating: string[]
}

interface TechnicalData {
  property: string
  value: string
  unit?: string
}

interface TabData {
  id: string
  label: string
  content: string[]
  image?: string
}

interface RelatedProduct {
  id: string
  name: string
  image: string
  slug: string
  category: string
}

type LayoutType = 'standard' | 'wirewall' | 'simple'

interface ProductDetailPageProps {
  name: string
  title: string
  category: string
  heroImage: string
  description: string
  layoutType: LayoutType
  specifications: Specification[]
  wireWallSpecifications?: WireWallSpecification
  applications: string[]
  technicalData: TechnicalData[]
  tabs?: TabData[]
  relatedProducts: RelatedProduct[]
}

const getSpecificationImagePath = (heroImage: string): string | undefined => {
  if (!heroImage) {
    return undefined
  }

  const segments = heroImage.split('/')
  if (segments.length <= 1) {
    return undefined
  }

  segments.pop()
  segments.push('specifications.png')

  return segments.join('/')
}

const addSpecificationImageToTabs = (
  tabs: TabData[] | undefined,
  heroImage: string,
): TabData[] | undefined => {
  if (!tabs || tabs.length === 0) {
    return tabs
  }

  // Don't automatically add specification image path
  // Only add if image is explicitly set in the tab data
  return tabs
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  name,
  title,
  category,
  heroImage,
  description,
  layoutType,
  specifications,
  wireWallSpecifications,
  applications,
  technicalData,
  tabs,
  relatedProducts,
}) => {
  const enhancedTabs = addSpecificationImageToTabs(tabs, heroImage)

  return (
    <div className={styles.productDetailPage}>
      <ProductInfo
        name={name}
        title={title}
        category={category}
        heroImage={heroImage}
        description={description}
        specifications={specifications}
      />

      <ProductDetails
        layoutType={layoutType}
        applications={applications}
        technicalData={technicalData}
        wireWallSpecifications={wireWallSpecifications}
        tabs={enhancedTabs}
      />

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}

export default ProductDetailPage
