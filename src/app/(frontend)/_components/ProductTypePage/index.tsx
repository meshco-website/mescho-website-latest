'use client'

import React, { useState, useMemo } from 'react'
import styles from './productTypePage.module.css'
import FilterSidebar from '../FilterSidebar'
import ProductCard from '../ProductCard'

interface Product {
  id: string
  name: string
  image: string
  slug: string
  type?: string
  industry?: string
}

interface FilterOption {
  types?: string[]
  industries?: string[]
}

interface ProductTypePageProps {
  title: string
  backgroundImage: string
  hasFilter: boolean
  cardSize: 'large' | 'small'
  layoutType:
    | 'grid3x3'
    | 'grid3x3WithSpan'
    | 'grid3x1'
    | 'grid2x1'
    | 'grid3x2WithSpan'
    | 'grid4x3'
    | 'grid3x2'
  products: Product[]
  filterOptions?: FilterOption
  showTypesFilter?: boolean
  showIndustriesFilter?: boolean
  spanningProduct?: Product
  category: string
}

const ProductTypePage: React.FC<ProductTypePageProps> = ({
  title,
  backgroundImage,
  hasFilter,
  cardSize,
  layoutType,
  products,
  filterOptions,
  showTypesFilter = true,
  showIndustriesFilter = true,
  spanningProduct,
  category,
}) => {
  const [filters, setFilters] = useState<{ types: string[]; industries: string[] }>({
    types: [],
    industries: [],
  })

  const filteredProducts = useMemo(() => {
    if (!hasFilter || (filters.types.length === 0 && filters.industries.length === 0)) {
      return products
    }

    return products.filter((product) => {
      const typeMatch =
        filters.types.length === 0 || (product.type && filters.types.includes(product.type))
      const industryMatch =
        filters.industries.length === 0 ||
        (product.industry && filters.industries.includes(product.industry))
      return typeMatch && industryMatch
    })
  }, [filters, products, hasFilter])

  const handleFilterChange = (newFilters: { types: string[]; industries: string[] }) => {
    setFilters(newFilters)
  }

  return (
    <div className={styles.productTypePage}>
      <div className={styles.heroSection}>
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>{title}</h1>
      </div>

      <div className={styles.pageContent}>
        {hasFilter && (
          <FilterSidebar
            onFilterChange={handleFilterChange}
            showTypes={showTypesFilter}
            showIndustries={showIndustriesFilter}
          />
        )}

        <div className={`${styles.productsGrid} ${styles[layoutType]} ${styles[cardSize]}`}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              slug={product.slug}
              category={category}
              size={cardSize}
            />
          ))}

          {layoutType === 'grid3x3WithSpan' && spanningProduct && (
            <div className={styles.spanningCard}>
              <ProductCard
                key={spanningProduct.id}
                id={spanningProduct.id}
                name={spanningProduct.name}
                image={spanningProduct.image}
                slug={spanningProduct.slug}
                category={category}
                size={cardSize}
              />
            </div>
          )}

          {layoutType === 'grid3x2WithSpan' && spanningProduct && (
            <div className={styles.spanningCard}>
              <ProductCard
                key={spanningProduct.id}
                id={spanningProduct.id}
                name={spanningProduct.name}
                image={spanningProduct.image}
                slug={spanningProduct.slug}
                category={category}
                size={cardSize}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductTypePage
