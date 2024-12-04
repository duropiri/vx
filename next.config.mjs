/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    deviceSizes: [500, 800, 1080, 1600, 2000],
    formats: ["image/avif", "image/webp"],
    disableStaticImages: false
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(webp|jpg|jpeg|png|svg|gif)$/i,
      type: 'asset/resource',
    });
    
    return config;
  }
};

export default nextConfig;