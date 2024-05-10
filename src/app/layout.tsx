import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import '@/styles/index.scss'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { URL as urlString } from '@/config'
import NavBar from '@/components/sections/NavBar'

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
      <body className={`${poppins.className}`}>
        <NavBar />
        <Header className="container max-w-screen-lg shadow-sm" />
        <div className="container min-h-screen max-w-screen-xl">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
