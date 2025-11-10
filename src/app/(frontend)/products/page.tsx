'use client'

import React, { useMemo, useState } from 'react'
import styles from './products.module.css'
import FilterSidebar from '../_components/FilterSidebar'
import ProductCard from '../_components/ProductCard'
import { Product, products } from '@/data/products'

const featuredProductIds: string[] = [
  // Wire Products
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  // WireWall Products
  '8',
  '9',
  '10',
  '11',
  // Reinforcing Products
  '18',
  '19',
  '20',
  // Fencing Products
  '24',
  '26',
  '27',
  '28',
  // Fasteners Products
  '35',
  '36',
]

const productMap = new Map(products.map((product) => [product.id, product]))

const featuredProducts: Product[] = featuredProductIds
  .map((id) => productMap.get(id))
  .filter((product): product is Product => Boolean(product))

export default function ProductsPage() {
  const [filters, setFilters] = useState<{ types: string[]; industries: string[] }>({
    types: [],
    industries: [],
  })

  const filteredProducts = useMemo(() => {
    if (filters.types.length === 0 && filters.industries.length === 0) {
      return featuredProducts
    }

    return featuredProducts.filter((product) => {
      const typeMatch = filters.types.length === 0 || filters.types.includes(product.type)
      const industryMatch =
        filters.industries.length === 0 || filters.industries.includes(product.industry)
      return typeMatch && industryMatch
    })
  }, [filters])

  return (
    <div className={styles.productsPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>All Products</h1>
      </div>

      <div className={styles.pageContent}>
        <FilterSidebar onFilterChange={setFilters} />

        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
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
