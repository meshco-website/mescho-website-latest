import type { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { productTypeConfigs } from '@/app/(frontend)/_components/ProductTypePage/configs'
import { caseStudiesConfig } from '@/app/(frontend)/wirewall/case-studies/configs'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meshco.co.za'

const url = (path: string): MetadataRoute.Sitemap[number] => ({
  url: `${siteUrl}${path}`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.7,
})

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { ...url('/'), priority: 1.0, changeFrequency: 'weekly' },
    { ...url('/products'), priority: 0.9, changeFrequency: 'weekly' },
    { ...url('/wirewall'), priority: 0.9, changeFrequency: 'weekly' },
    { ...url('/industries'), priority: 0.8 },
    { ...url('/whoweare'), priority: 0.8 },
    { ...url('/whoweare/about-us'), priority: 0.8 },
    { ...url('/whoweare/commitment'), priority: 0.7 },
    { ...url('/whoweare/support'), priority: 0.7 },
    { ...url('/whoweare/careers'), priority: 0.7 },
    { ...url('/wirewall/case-studies'), priority: 0.7 },
    { ...url('/resources'), priority: 0.7 },
    { ...url('/contact-us'), priority: 0.8 },
    { ...url('/quote'), priority: 0.8 },
    { ...url('/wirewall-quote'), priority: 0.7 },
    { ...url('/privacy'), priority: 0.3 },
    { ...url('/terms'), priority: 0.3 },
  ]

  const categoryPages: MetadataRoute.Sitemap = Object.keys(productTypeConfigs).map((category) => ({
    ...url(`/products/${category}`),
    priority: 0.8,
    changeFrequency: 'weekly',
  }))

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    ...url(`/products/${product.category}/${product.slug}`),
    priority: 0.6,
  }))

  const caseStudyPages: MetadataRoute.Sitemap = Object.values(caseStudiesConfig)
    .filter((cs) => cs.slug !== 'coming-soon')
    .map((cs) => ({
      ...url(`/wirewall/case-studies/${cs.slug}`),
      priority: 0.6,
    }))

  return [...staticPages, ...categoryPages, ...productPages, ...caseStudyPages]
}
