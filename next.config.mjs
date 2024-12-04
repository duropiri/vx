/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true, // Helps catch potential issues early on
  compress: true, // Enables gzip/brotli compression for better performance
  poweredByHeader: false, // Removes the "x-powered-by" header for better security
  swcMinify: true, // Uses the newer, faster SWC compiler for JavaScript minification
  images: {
    deviceSizes: [500, 800, 1080, 1600, 2000],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Add this to help with Vercel deployment issues
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;