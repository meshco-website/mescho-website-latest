'use client'

import React, { useState, useMemo } from 'react'
import styles from './products.module.css'
import FilterSidebar from '../_components/FilterSidebar'
import ProductCard from '../_components/ProductCard'

const sampleProducts = [
  {
    id: '1',
    name: 'Wire Product 1',
    image: '/placeholder.svg',
    slug: 'wire-product-1',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '2',
    name: 'WireWall Product 1',
    image: '/placeholder.svg',
    slug: 'wirewall-product-1',
    type: 'WireWall',
    industry: 'Construction',
    category: 'wirewall',
  },
  {
    id: '3',
    name: 'Reinforcing Product 1',
    image: '/placeholder.svg',
    slug: 'reinforcing-product-1',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '4',
    name: 'Fencing Product 1',
    image: '/placeholder.svg',
    slug: 'fencing-product-1',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '5',
    name: 'Mining Support Product 1',
    image: '/placeholder.svg',
    slug: 'mining-support-product-1',
    type: 'Mining Support',
    industry: 'Mining',
    category: 'mining-support',
  },
  {
    id: '6',
    name: 'Fasteners Product 1',
    image: '/placeholder.svg',
    slug: 'fasteners-product-1',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '7',
    name: 'Utility Product 1',
    image: '/placeholder.svg',
    slug: 'utility-product-1',
    type: 'Utility',
    industry: 'Construction',
    category: 'utility',
  },
  {
    id: '8',
    name: 'Wire Product 2',
    image: '/placeholder.svg',
    slug: 'wire-product-2',
    type: 'Wire',
    industry: 'Agricultural',
    category: 'wire',
  },
  {
    id: '9',
    name: 'WireWall Product 2',
    image: '/placeholder.svg',
    slug: 'wirewall-product-2',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '10',
    name: 'Reinforcing Product 2',
    image: '/placeholder.svg',
    slug: 'reinforcing-product-2',
    type: 'Reinforcing',
    industry: 'Mining',
    category: 'reinforcing',
  },
  {
    id: '11',
    name: 'Fencing Product 2',
    image: '/placeholder.svg',
    slug: 'fencing-product-2',
    type: 'Fencing',
    industry: 'Agricultural',
    category: 'fencing',
  },
  {
    id: '12',
    name: 'Mining Support Product 2',
    image: '/placeholder.svg',
    slug: 'mining-support-product-2',
    type: 'Mining Support',
    industry: 'Mining',
    category: 'mining-support',
  },
  {
    id: '13',
    name: 'Fasteners Product 2',
    image: '/placeholder.svg',
    slug: 'fasteners-product-2',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '14',
    name: 'Utility Product 2',
    image: '/placeholder.svg',
    slug: 'utility-product-2',
    type: 'Utility',
    industry: 'Recycling',
    category: 'utility',
  },
  {
    id: '15',
    name: 'Wire Product 3',
    image: '/placeholder.svg',
    slug: 'wire-product-3',
    type: 'Wire',
    industry: 'Manufacturing',
    category: 'wire',
  },
  {
    id: '16',
    name: 'WireWall Product 3',
    image: '/placeholder.svg',
    slug: 'wirewall-product-3',
    type: 'WireWall',
    industry: 'Construction',
    category: 'wirewall',
  },
  {
    id: '17',
    name: 'Reinforcing Product 3',
    image: '/placeholder.svg',
    slug: 'reinforcing-product-3',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '18',
    name: 'Fencing Product 3',
    image: '/placeholder.svg',
    slug: 'fencing-product-3',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '19',
    name: 'Mining Support Product 3',
    image: '/placeholder.svg',
    slug: 'mining-support-product-3',
    type: 'Mining Support',
    industry: 'Mining',
    category: 'mining-support',
  },
  {
    id: '20',
    name: 'Fasteners Product 3',
    image: '/placeholder.svg',
    slug: 'fasteners-product-3',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
]

export default function ProductsPage() {
  const [filters, setFilters] = useState<{ types: string[]; industries: string[] }>({
    types: [],
    industries: [],
  })

  const filteredProducts = useMemo(() => {
    if (filters.types.length === 0 && filters.industries.length === 0) {
      return sampleProducts
    }

    return sampleProducts.filter((product) => {
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
