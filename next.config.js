/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig = {
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['mongoose'],
  },
  webpack: (config) => {
    config.experiments = {
      layers: true,
      topLevelAwait: true,
    }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        pathname: '**',
        hostname: '**',
      },
    ],
  },
}

module.exports = withPWA(nextConfig)
