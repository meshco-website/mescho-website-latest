import { products } from '@/data/products'
import ProductsPageClient from './ProductsPageClient'

export const dynamic = 'force-dynamic'

export default function ProductsPage() {
  return <ProductsPageClient allProducts={products} />
}
