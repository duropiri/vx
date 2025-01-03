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
          maxInitialRequests: 25, // Add this
          maxAsyncRequests: 30, // Add this
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
            // Add Tailwind utilities
            styles: {
              name: "styles",
              test: /[\\/]node_modules[\\/](tailwindcss)[\\/]/,
              chunks: "all",
              priority: 45,
            },
            // Add utils group for common utilities
            utils: {
              name: "utils",
              test: /[\\/]utils[\\/]/,
              chunks: "async",
              minChunks: 2,
              priority: 15,
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
    deviceSizes: [384, 640, 768, 960, 1080, 1200, 1440, 1920],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600,
  },
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
    instrumentationHook: true,
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
  reactStrictMode: true,
  // Improve asset caching
  generateEtags: true,
  poweredByHeader: false,
  headers: async () => [
    {
      // HTML pages and dynamic routes
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=0, s-maxage=1, stale-while-revalidate=60",
        },
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
      ],
    },
    {
      // Static assets (JS, CSS) with versioning
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      // Public static assets
      source: "/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      // Images with controlled caching
      source: "/images/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=3600, stale-while-revalidate=86400",
        },
      ],
    },
    {
      // API routes
      source: "/api/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
        {
          key: "Pragma",
          value: "no-cache",
        },
        {
          key: "Expires",
          value: "0",
        },
      ],
    },
  ],
};

export default withBundleAnalyzer(nextConfig);
