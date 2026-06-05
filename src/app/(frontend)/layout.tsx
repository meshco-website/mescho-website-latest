import React from 'react'
import { Onest, Orbitron } from 'next/font/google'
import './styles.css'
import Header from './_components/Header'
import Footer from './_components/Footer'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const onest = Onest({
  subsets: ['latin'],
  variable: '--font-onest',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meshco.co.za'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Meshco',
    template: '%s | Meshco',
  },
  description:
    'Meshco is a leading South African manufacturer of quality wire, fencing, reinforcing and WireWall security fencing products.',
  keywords: [
    'wire products',
    'fencing',
    'reinforcing',
    'wirewall',
    'security fencing',
    'South Africa',
    'wire manufacturer',
    'barbed wire',
    'mesh fencing',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Meshco',
    locale: 'en_ZA',
    url: siteUrl,
    title: 'Meshco',
    description:
      'Meshco is a leading South African manufacturer of quality wire, fencing, reinforcing and WireWall security fencing products.',
    images: [{ url: '/logo.png', width: 226, height: 75, alt: 'Meshco' }],
  },
  twitter: {
    card: 'summary',
    title: 'Meshco',
    description:
      'Meshco is a leading South African manufacturer of quality wire, fencing, reinforcing and WireWall security fencing products.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${orbitron.variable} ${onest.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
