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
}

module.exports = nextConfig
