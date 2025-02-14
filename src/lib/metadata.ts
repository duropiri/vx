favicon// lib/metadata.ts

// Base metadata shared across all pages
export const baseMetadata = {
  metadataBase: new URL('https://virtualxposure.com'),
  openGraph: {
    type: 'website',
    url: 'https://virtualxposure.com',
    images: '/assets/images/social-media-share-preview.webp',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/assets/images/social-media-share-preview.webp',
  },
  verification: {
    google: 'FyVoyIhh_-5JEVZ3uQxsFMTLWF5UlcETjN7uZ_iC-eE',
  },
  icons: {
    icon: '/assets/images/favicon.ico',
    apple: [{ url: '/assets/images/favicon_vx.webp', sizes: '180x180' }],
    other: [
      { rel: 'icon', url: '/assets/images/favicon_vx.webp', sizes: '32x32', type: 'image/webp' },
      { rel: 'icon', url: '/assets/images/favicon_vx.webp', sizes: '16x16', type: 'image/webp' },
    ],
  },
};