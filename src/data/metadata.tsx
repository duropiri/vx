import { Metadata } from "next";

// Base metadata that's common across pages
const baseMetadata = {
  metadataBase: new URL('https://virtualxposure.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/assets/images/favicon.ico',
    apple: '/assets/images/favicon_vx.webp',
  },
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
  viewport: 'width=device-width, initial-scale=1.0',
  charSet: 'UTF-8',
};

// Page-specific metadata
export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: 'Virtual Xposure | Real Estate Photography Edmonton',
  description: 'Sell Your Listings In DAYS, Not WEEKS - For Only $127.99 -- The #1 All-In-One Solution for your real estate photography and videography needs. Your realtor buddies will stop in awe as you launch your listings, wondering what changed… only you will know.',
  keywords: 'Virtual Xposure, real estate marketing, digital marketing for realtors, social media management, content creation, real estate branding, realtor growth strategies, social media strategy, video content creation, real estate content marketing, realtor lead generation, brand visibility, online real estate marketing, data-driven marketing, social media automation, media buying, CRM pipeline management, real estate sales support, client engagement, virtual marketing solutions',
  robots: 'index, follow',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Virtual Xposure | Real Estate Photography Edmonton',
    description: 'Sell Your Listings In DAYS, Not WEEKS - For Only $127.99 -- The #1 All-In-One Solution for your real estate photography and videography needs. Your realtor buddies will stop in awe as you launch your listings, wondering what changed… only you will know.',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Virtual Xposure | Real Estate Photography Edmonton',
    description: 'Sell Your Listings In DAYS, Not WEEKS - For Only $127.99 -- The #1 All-In-One Solution for your real estate photography and videography needs. Your realtor buddies will stop in awe as you launch your listings, wondering what changed… only you will know.',
  },
};

export const graphicDesignMetadata: Metadata = {
  ...baseMetadata,
  title: 'Best Graphic Designer Near Me - Edmonton Graphic Designers',
  description: 'Sell Your Listings In DAYS, Not WEEKS - For Only $127.99 -- The #1 All-In-One Solution for your real estate photography and videography needs. Your realtor buddies will stop in awe as you launch your listings, wondering what changed… only you will know.',
  keywords: 'Virtual Xposure, real estate marketing, digital marketing for realtors, social media management, content creation, real estate branding, realtor growth strategies, social media strategy, video content creation, real estate content marketing, realtor lead generation, brand visibility, online real estate marketing, data-driven marketing, social media automation, media buying, CRM pipeline management, real estate sales support, client engagement, virtual marketing solutions',
  robots: 'index, follow',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Best Graphic Designer Near Me - Edmonton Graphic Designers',
    description: 'Sell Your Listings In DAYS, Not WEEKS - For Only $127.99 -- The #1 All-In-One Solution for your real estate photography and videography needs. Your realtor buddies will stop in awe as you launch your listings, wondering what changed… only you will know.',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Best Graphic Designer Near Me - Edmonton Graphic Designers',
    description: 'Sell Your Listings In DAYS, Not WEEKS - For Only $127.99 -- The #1 All-In-One Solution for your real estate photography and videography needs. Your realtor buddies will stop in awe as you launch your listings, wondering what changed… only you will know.',
  },
};