/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  
  // Compression and optimization
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    deviceSizes: [500, 800, 1080, 1600, 2000],
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // For smaller images
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60, // Cache images for at least 60 seconds
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Performance optimizations
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable HTTP/2 Server Push
  experimental: {
    serverActions: true,
    optimizeCss: true, // CSS optimization
    optimizePackageImports: [
      '@mui/material',
      '@mui/icons-material',
      'lodash',
      'lucide-react'
    ],
  },

  // Cache and performance headers
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|gif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        source: '/:all*(js|css)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ];
  },

  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};

export default nextConfig;