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

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
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
  return (
    <div className={styles.productDetailPage}>
      <ProductInfo
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
        tabs={tabs}
      />

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}

export default ProductDetailPage
