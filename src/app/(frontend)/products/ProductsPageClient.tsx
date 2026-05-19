'use client'

import React, { useMemo, useState } from 'react'
import {
  type Product,
  INDUSTRY_FILTER_GROUPS,
  PRODUCT_TYPE_FILTER_LABELS,
  filterProducts,
} from '@/data/products'
import styles from './products.module.css'
import FilterSidebar from '../_components/FilterSidebar'
import ProductCard from '../_components/ProductCard'

interface ProductsPageClientProps {
  allProducts: Product[]
}

export default function ProductsPageClient({ allProducts }: ProductsPageClientProps) {
  const [filters, setFilters] = useState<{ types: string[]; productKeys: string[] }>({
    types: [],
    productKeys: [],
  })

  const productTypes = useMemo(() => [...PRODUCT_TYPE_FILTER_LABELS], [])
  const industryGroups = useMemo(() => INDUSTRY_FILTER_GROUPS, [])

  const filteredProducts = useMemo(
    () => filterProducts(allProducts, filters),
    [allProducts, filters],
  )

  return (
    <div className={styles.productsPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>All Products</h1>
      </div>

      <div className={styles.pageContent}>
        <FilterSidebar
          onFilterChange={setFilters}
          productTypes={productTypes}
          industryGroups={industryGroups}
        />

        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={`${product.category}-${product.slug}`}
              id={product.id}
              name={product.name}
              image={product.image}
              slug={product.slug}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
