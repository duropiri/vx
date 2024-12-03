// lib/metadata.ts
import { Metadata } from 'next';

// Base metadata shared across all pages
export const baseMetadata = {
  metadataBase: new URL('https://virtualxposure.com'),
  openGraph: {
    type: 'website',
    url: 'https://virtualxposure.com',
    images: '/images/social-media-share-preview.webp',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/images/social-media-share-preview.webp',
  },
  verification: {
    google: 'FyVoyIhh_-5JEVZ3uQxsFMTLWF5UlcETjN7uZ_iC-eE',
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: [{ url: '/images/favicon.webp', sizes: '180x180' }],
    other: [
      { rel: 'icon', url: '/images/favicon.webp', sizes: '32x32', type: 'image/webp' },
      { rel: 'icon', url: '/images/favicon.webp', sizes: '16x16', type: 'image/webp' },
    ],
  },
};