/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    deviceSizes: [500, 800, 1080, 1600, 2000],
    formats: ["image/avif", "image/webp"],
    disableStaticImages: true,
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,

  // Add webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Clear cache for production builds
    if (!dev) {
      config.cache = false;
    }

    // Add proper asset handling
    config.module.rules.push({
      test: /\.(webp|svg|webm|png|jpe?g|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    return config;
  },

  // Disable cache in experimental features
  experimental: {
    webpackBuildWorker: false,
    caseSensitiveRoutes: true,
  }
};

export default nextConfig;