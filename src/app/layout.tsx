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
  description: 'Freshly curate tech blogs',
  metadataBase: new URL(urlString),
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
      'en-IN': '/en-IN',
    },
  },
  openGraph: {
    images: '/icon/icon-192x192.png',
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
        <Header className="container max-w-screen-md shadow-sm dark:border-b dark:border-neutral-700" />
        <div className="container mt-24 min-h-screen max-w-5xl pt-8 lg:pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
