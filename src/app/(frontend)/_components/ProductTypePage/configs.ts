import { products, type Product } from '@/data/products'

export interface ProductTypeConfig {
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
  showTypesFilter?: boolean
  showIndustriesFilter?: boolean
  products: Array<{
    id: string
    name: string
    image: string
    slug: string
    type?: string
    industry?: string
  }>
  spanningProduct?: {
    id: string
    name: string
    image: string
    slug: string
    type?: string
    industry?: string
  }
}

type ConfigProduct = ProductTypeConfig['products'][number]

const productsBySlug = new Map<string, Product>(products.map((product) => [product.slug, product]))

const toConfigProduct = (product: Product): ConfigProduct => ({
  id: product.id,
  name: product.name,
  image: product.image,
  slug: product.slug,
  type: product.type,
  industry: product.industry,
})

const getProductsByCategory = (category: string): ConfigProduct[] =>
  products.filter((product) => product.category === category).map(toConfigProduct)

const getSpanningProduct = (slug: string) => {
  const product = productsBySlug.get(slug)

  if (!product) {
    throw new Error(`Missing product definition for spanning product slug: ${slug}`)
  }

  return toConfigProduct(product)
}

export const reinforcingConfig: ProductTypeConfig = {
  title: 'Reinforcing',
  backgroundImage: '/reinforcing.jpg',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid3x2',
  products: getProductsByCategory('reinforcing'),
}

export const wirewallConfig: ProductTypeConfig = {
  title: 'WireWall',
  backgroundImage: '/wirewallfencing.jpg',
  hasFilter: true,
  cardSize: 'small',
  layoutType: 'grid4x3',
  showTypesFilter: false,
  showIndustriesFilter: true,
  products: getProductsByCategory('wirewall'),
}

export const wireConfig: ProductTypeConfig = {
  title: 'Wire',
  backgroundImage: '/wire.jpg',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid3x3WithSpan',
  products: getProductsByCategory('wire'),
  spanningProduct: getSpanningProduct('high-strain-wire'),
}

export const fencingConfig: ProductTypeConfig = {
  title: 'Fencing',
  backgroundImage: '/fencing.png',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid3x3WithSpan',
  products: getProductsByCategory('fencing'),
  spanningProduct: getSpanningProduct('droppers'),
}

export const fastenersConfig: ProductTypeConfig = {
  title: 'Fasteners',
  backgroundImage: '/fasteners.png',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid3x2WithSpan',
  products: getProductsByCategory('fasteners'),
  // spanningProduct: getSpanningProduct('droppers'),
}

export const miningSupportConfig: ProductTypeConfig = {
  title: 'Mining Support',
  backgroundImage: '/placeholder.svg',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid2x1',
  products: getProductsByCategory('mining-support'),
}

export const utilityConfig: ProductTypeConfig = {
  title: 'Utility',
  backgroundImage: '/placeholder.svg',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid3x1',
  products: getProductsByCategory('utility'),
}

export const productTypeConfigs: Record<string, ProductTypeConfig> = {
  reinforcing: reinforcingConfig,
  wirewall: wirewallConfig,
  wire: wireConfig,
  fencing: fencingConfig,
  fasteners: fastenersConfig,
  'mining-support': miningSupportConfig,
  utility: utilityConfig,
}
