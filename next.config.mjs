import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY: process.env.GOOGLE_CAPTCHA_SITE_KEY,
  },
  async redirects() {
    return [
      {
        source: '/products/security/welded-mesh-product',
        destination: '/products/fencing/welded-fence-mesh',
        permanent: true,
      },
      {
        source: '/products/item/2-about-meshco',
        destination: '/whoweare/about-us',
        permanent: true,
      },
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
  images: {
    formats: ['image/webp'],
    imageSizes: [256, 384, 512, 640, 750, 828, 1080, 1200],
  },
  // Turbopack config to silence warnings (using webpack for build)
  turbopack: {
    root: process.cwd(),
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
