/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: "loose", // <-- add this
        serverComponentsExternalPackages: ["mongoose"] // <-- and this
      },
      webpack: (config) => {
        config.experiments = {
            layers: true,
          topLevelAwait: true
        };
        return config;
      },
      images: {
        domains: ["unsplash.com", "imagedelivery.net"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig
