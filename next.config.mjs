/** @type {import('next').NextConfig} */
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          minSize: 10000,
          maxSize: 50000,
          cacheGroups: {
            // Core React dependencies
            framework: {
              name: "framework",
              chunks: "all",
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 50,
              enforce: true,
            },
            // GSAP animations
            animations: {
              name: "animations",
              test: /[\\/]node_modules[\\/](gsap|framer-motion)[\\/]/,
              chunks: "async",
              priority: 40,
            },
            // Swiper animations
            swiper: {
              test: /[\\/]node_modules[\\/]swiper[\\/]/,
              name: "swiper",
              chunks: "all",
              priority: 10,
              enforce: true,
            },
            // UI components
            ui: {
              name: "ui",
              test: /[\\/]node_modules[\\/](@radix-ui|@headlessui)[\\/]/,
              chunks: "async",
              priority: 30,
            },
            // Shared components between pages
            shared: {
              name: "shared",
              test: /[\\/]components[\\/]shared[\\/]/,
              chunks: "async",
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
            },
            // Default vendor bundle
            vendors: {
              name: "vendors",
              test: /[\\/]node_modules[\\/]/,
              chunks: "async",
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };

      // Additional production optimizations
      config.optimization.concatenateModules = true;
      config.optimization.moduleIds = "deterministic";
      config.optimization.runtimeChunk = "single";
    }
    return config;
  },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "virtualxposure.com",
      },
    ],
    deviceSizes: [384, 640, 960, 1200, 1920],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 604800,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "react",
      "react-dom",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-switch",
      "@radix-ui/react-tabs",
      "gsap",
      "swiper",
    ],
  },
  // Additional optimizations
  productionBrowserSourceMaps: false,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Improve asset caching
  generateEtags: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
};

export default withBundleAnalyzer(nextConfig);
