/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "virtualxposure.com",
    }],
    deviceSizes: [384, 640, 960, 1200, 1920],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 604800,
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion"]
  },
  // headers: async () => [{
  //   source: "/:path*",
  //   headers: [{
  //     key: "Cache-Control",
  //     value: "public, max-age=31536000, immutable"
  //   }]
  // }]
};

export default nextConfig;