import React from 'react'
import BestSellerCard from '../BestSellerCard'
import styles from './relatedProducts.module.css'

interface RelatedProduct {
  id: string
  name: string
  image: string
  otherTitle?: string
  displayTitle?: string
  slug: string
  category: string
}

const getRelatedProductTitle = (product: RelatedProduct) =>
  product.displayTitle ?? (product.otherTitle ? product.otherTitle : product.name)

interface RelatedProductsProps {
  products: RelatedProduct[]
}

const PLACEHOLDER_IMAGE = '/placeholder.svg'

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return null
  }

  return (
    <section className={styles.relatedProducts}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>You may also like</h2>

        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <BestSellerCard
              key={`${product.slug}-${getRelatedProductTitle(product)}-${index}`}
              title={getRelatedProductTitle(product)}
              image={product.image?.trim() ? product.image : PLACEHOLDER_IMAGE}
              description=""
              linkText="View Product"
              linkHref={`/products/${product.category}/${product.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
