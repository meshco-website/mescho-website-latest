import React from 'react'
import Link from 'next/link'
import BestSellerCard from '../BestSellerCard'
import styles from './relatedProducts.module.css'

interface RelatedProduct {
  id: string
  name: string
  image: string
  slug: string
  category: string
}

interface RelatedProductsProps {
  products: RelatedProduct[]
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return null
  }

  return (
    <section className={styles.relatedProducts}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>You might also like</h2>

        <div className={styles.productsGrid}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.category}/${product.slug}`}
              className={styles.productLink}
            >
              <BestSellerCard
                title={product.name}
                image={product.image}
                description=""
                linkText="View Product"
                linkHref={`/products/${product.category}/${product.slug}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
