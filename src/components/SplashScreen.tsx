'use client'
import { usePathname } from 'next/navigation'
import SplashScreen from '../assets/SplashScreen'
import React from 'react'

const SplashScreens = () => {
  const router = usePathname()

  const [isAnimating, setIsAnimating] = React.useState(true)

  React.useEffect(() => {
    if (router === '/') {
      const timeout = setTimeout(() => setIsAnimating(false), 4000)
      return () => clearTimeout(timeout)
    }
  }, [router])

  return (
    router === '/' && (
      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white ${
          !isAnimating ? 'hidden' : ''
        }`}
      >
        <SplashScreen width={200} height={100} />
      </div>
    )
  )
}

export default SplashScreens
