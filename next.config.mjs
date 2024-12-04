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

  webpack: (config) => {
    // Asset modules configuration
    config.module.rules.push({
      test: /\.(webp|svg|webm|png|jpe?g|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      },
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024 // 8kb
        }
      }
    });

    // Ensure proper asset tracing
    if (config.plugins) {
      config.plugins = config.plugins.filter(plugin => 
        plugin.constructor.name !== 'TraceEntryPointsPlugin'
      );
    }

    return config;
  },

  // Turn off experimental features that might cause issues
  experimental: {
    webpackBuildWorker: false,
    caseSensitiveRoutes: false,
    forceSwcTransforms: true,
  },

  // Adjust output configuration
  output: 'standalone',
};

export default nextConfig;