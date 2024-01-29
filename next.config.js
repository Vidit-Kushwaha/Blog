/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: "loose", 
        serverComponentsExternalPackages: ["mongoose"] 
      },
      webpack: (config) => {
        config.experiments = {
            layers: true,
          topLevelAwait: true
        };
        return config;
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            pathname: '**',
            hostname: '**'
          },
        ],
      },
}

module.exports = nextConfig
