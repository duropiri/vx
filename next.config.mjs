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

  webpack: (config, { isServer }) => {
    // Disable webpack cache
    config.cache = false;

    // Remove default asset handling
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.toString().includes('webp|svg|webm|png|jpe?g|gif')) {
        return {
          ...rule,
          type: 'javascript/auto'
        };
      }
      return rule;
    });

    // Add our own asset handling
    config.module.rules.push({
      test: /\.(webp|svg|webm|png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/media/',
            publicPath: '/_next/static/media/'
          }
        }
      ]
    });

    return config;
  },

  // Minimal experimental features
  experimental: {
    forceSwcTransforms: true
  },
};

export default nextConfig;