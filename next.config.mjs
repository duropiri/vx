/** @type {import('next').NextConfig} */
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Disable cache in development
    if (dev) {
      // Clear cache more aggressively in development
      config.cache = false;
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
      config.optimization = {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        minimize: false,
        concatenateModules: false,
        usedExports: false,
      };
    }
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          minSize: 10000,
          maxSize: 50000,
          maxInitialRequests: 25,
          maxAsyncRequests: 30,
          cacheGroups: {
            framework: {
              name: "framework",
              chunks: "all",
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 50,
              enforce: true,
            },
            animations: {
              name: "animations",
              test: /[\\/]node_modules[\\/](gsap|framer-motion)[\\/]/,
              chunks: "async",
              priority: 40,
            },
            swiper: {
              test: /[\\/]node_modules[\\/]swiper[\\/]/,
              name: "swiper",
              chunks: "all",
              priority: 10,
              enforce: true,
            },
            ui: {
              name: "ui",
              test: /[\\/]node_modules[\\/](@radix-ui|@headlessui)[\\/]/,
              chunks: "async",
              priority: 30,
            },
            shared: {
              name: "shared",
              test: /[\\/]components[\\/]shared[\\/]/,
              chunks: "async",
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
            },
            vendors: {
              name: "vendors",
              test: /[\\/]node_modules[\\/]/,
              chunks: "async",
              priority: 10,
              reuseExistingChunk: true,
            },
            styles: {
              name: "styles",
              test: /[\\/]node_modules[\\/](tailwindcss)[\\/]/,
              chunks: "all",
              priority: 45,
            },
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
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "localhost",
      },
    ],
    deviceSizes: [384, 640, 768, 960, 1080, 1200, 1440, 1920],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600,
  },
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
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
  productionBrowserSourceMaps: false,
  compress: true,
  reactStrictMode: true,
  generateEtags: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value:
            process.env.NODE_ENV === "development"
              ? "no-store, must-revalidate"
              : "public, max-age=0, s-maxage=1, stale-while-revalidate=60",
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
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/images/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=3600, stale-while-revalidate=86400",
        },
      ],
    },
    {
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
