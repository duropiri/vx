/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "virtualxposure.com",
      },
    ],
    deviceSizes: [384, 640, 960, 1200, 1920], // Simplified sizes
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 604800, // Increase cache to 1 week
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Add smaller sizes
    dangerouslyAllowSVG: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ["framer-motion"],
    largePageDataBytes: 128 * 1000, // 128KB
  },
  webpack: (config) => {
    // Only modify if splitChunks exists
    if (config.optimization?.splitChunks) {
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 244000,
      };
    }
    return config;
  },
};

export default nextConfig;
