import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import '@/styles/index.scss'
import ClientCommon from './ClientCommon'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { URL as urlString } from '@/config'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'I',
  metadataBase: new URL(urlString),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
      'en-IN': '/en-IN',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark:bg-dark-200`}>
        <ClientCommon />
        <Header className="container shadow-sm dark:border-b dark:border-neutral-700" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
