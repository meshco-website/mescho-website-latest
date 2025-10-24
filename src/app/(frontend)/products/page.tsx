'use client'

import React, { useState, useMemo } from 'react'
import styles from './products.module.css'
import FilterSidebar from '../_components/FilterSidebar'
import ProductCard from '../_components/ProductCard'

const sampleProducts = [
  // Wire Products
  {
    id: '1',
    name: 'Hard Drawn Wire',
    image: '/placeholder.svg',
    slug: 'hard-drawn-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '2',
    name: 'Galvanised Wire',
    image: '/placeholder.svg',
    slug: 'galvanised-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '3',
    name: 'High Strain Wire',
    image: '/placeholder.svg',
    slug: 'high-strain-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '4',
    name: 'Black Annealed Wire',
    image: '/placeholder.svg',
    slug: 'black-annealed-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '5',
    name: 'PVC Coated Wire',
    image: '/placeholder.svg',
    slug: 'pvc-coated-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '6',
    name: 'Straight Cut Wire',
    image: '/placeholder.svg',
    slug: 'straight-cut-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '7',
    name: 'Slab Wire',
    image: '/placeholder.svg',
    slug: 'slab-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },

  // WireWall Products
  {
    id: '8',
    name: 'Doublewall',
    image: '/placeholder.svg',
    slug: 'doublewall',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '9',
    name: 'WireWall 355',
    image: '/placeholder.svg',
    slug: '355',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '10',
    name: 'WireWall 358',
    image: '/placeholder.svg',
    slug: '358',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '11',
    name: 'WireWall 3510',
    image: '/placeholder.svg',
    slug: '3510',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },

  // Reinforcing Products
  {
    id: '12',
    name: 'Brickforce',
    image: '/placeholder.svg',
    slug: 'brickforce',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '13',
    name: 'Reinforcing Mesh',
    image: '/placeholder.svg',
    slug: 'reinforcing-mesh',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '14',
    name: 'Hoop Iron',
    image: '/placeholder.svg',
    slug: 'hoop-iron',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },

  // Fencing Products
  {
    id: '15',
    name: 'Welded Fence Mesh',
    image: '/placeholder.svg',
    slug: 'welded-fence-mesh',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '16',
    name: 'Diamond Mesh',
    image: '/placeholder.svg',
    slug: 'diamond-mesh',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '17',
    name: 'Barbed Wire',
    image: '/placeholder.svg',
    slug: 'barbed-wire',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '18',
    name: 'Razor Wire',
    image: '/placeholder.svg',
    slug: 'razor-wire',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },

  // Fasteners Products
  {
    id: '19',
    name: 'Round Wire Nails',
    image: '/placeholder.svg',
    slug: 'round-wire-nails',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '20',
    name: 'Staples',
    image: '/placeholder.svg',
    slug: 'staples',
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
