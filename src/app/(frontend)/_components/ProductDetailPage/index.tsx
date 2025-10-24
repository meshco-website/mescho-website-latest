import React from 'react'
import ProductInfo from '../ProductInfo'
import ProductDetails from '../ProductDetails'
import RelatedProducts from '../RelatedProducts'
import styles from './productDetailPage.module.css'

interface Specification {
  label: string
  value: string
}

interface TechnicalData {
  property: string
  value: string
  unit?: string
}

interface RelatedProduct {
  id: string
  name: string
  image: string
  slug: string
  category: string
}

interface ProductDetailPageProps {
  title: string
  category: string
  heroImage: string
  description: string
  specifications: Specification[]
  applications: string[]
  technicalData: TechnicalData[]
  relatedProducts: RelatedProduct[]
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  title,
  category,
  heroImage,
  description,
  specifications,
  applications,
  technicalData,
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

      <ProductDetails applications={applications} technicalData={technicalData} />

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}

export default ProductDetailPage
