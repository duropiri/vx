// app/layout.tsx
import "./globals.css";
import { PreloaderProvider } from "@/contexts/PreloaderContext";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";
import { Metadata } from 'next';
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

// Define base metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://virtualxposure.com'),
  title: 'Virtual Xposure | Meet the Gold Standard in Real Estate Marketing',
  description: 'Virtual Xposure delivers cutting-edge digital marketing solutions tailored for real estate professionals. We help agents build a powerful online presence through social media management, content creation, lead generation, and data-driven strategies. Boost brand visibility, engage your audience, and close more deals with our comprehensive real estate marketing services.',
  keywords: 'Virtual Xposure, real estate marketing, digital marketing for realtors, social media management, content creation, real estate branding, realtor growth strategies, social media strategy, video content creation, real estate content marketing, realtor lead generation, brand visibility, online real estate marketing, data-driven marketing, social media automation, media buying, CRM pipeline management, real estate sales support, client engagement, virtual marketing solutions',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://virtualxposure.com',
    title: 'Virtual Xposure | Meet the Gold Standard in Real Estate Marketing',
    description: 'Virtual Xposure delivers cutting-edge digital marketing solutions tailored for real estate professionals...',
    images: '/images/social-media-share-preview.webp',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Xposure | Meet the Gold Standard in Real Estate Marketing',
    description: 'Virtual Xposure delivers cutting-edge digital marketing solutions...',
    images: '/images/social-media-share-preview.webp',
  },
  verification: {
    google: 'FyVoyIhh_-5JEVZ3uQxsFMTLWF5UlcETjN7uZ_iC-eE',
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: [
      { url: '/images/favicon.webp', sizes: '180x180' },
    ],
    other: [
      { rel: 'icon', url: '/images/favicon.webp', sizes: '32x32', type: 'image/webp' },
      { rel: 'icon', url: '/images/favicon.webp', sizes: '16x16', type: 'image/webp' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased max-w-[100vw]">
        <ClientLayoutWrapper>
          <PreloaderProvider>
            <PageAnimatePresence>{children}</PageAnimatePresence>
          </PreloaderProvider>
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}