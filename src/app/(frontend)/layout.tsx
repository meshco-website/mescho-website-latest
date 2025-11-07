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

export const metadata = {
  description:
    'Meshco is a leading manufacturers of quality wire, fencing and reinforcing products.',
  title: 'Meshco',
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
