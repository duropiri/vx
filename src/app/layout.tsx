import type { Metadata } from "next";
import "./globals.scss";
import { PreloaderProvider } from "@/contexts/PreloaderContext";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";

export const metadata: Metadata = {
  title: "Virtual Xposure | Meet the Gold Standard in Real Estate Marketing",
  description:
    "Virtual Xposure delivers cutting-edge digital marketing solutions tailored for real estate professionals. We help agents build a powerful online presence through social media management, content creation, lead generation, and data-driven strategies. Boost brand visibility, engage your audience, and close more deals with our comprehensive real estate marketing services.",
  keywords:
    "Virtual Xposure, real estate marketing, digital marketing for realtors, social media management, content creation, real estate branding, realtor growth strategies, social media strategy, video content creation, real estate content marketing, realtor lead generation, brand visibility, online real estate marketing, data-driven marketing, social media automation, media buying, CRM pipeline management, real estate sales support, client engagement, virtual marketing solutions",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Virtual Xposure | Meet the Gold Standard in Real Estate Marketing
        </title>
        <meta
          name="description"
          content="Virtual Xposure delivers cutting-edge digital marketing solutions tailored for real estate professionals. We help agents build a powerful online presence through social media management, content creation, lead generation, and data-driven strategies. Boost brand visibility, engage your audience, and close more deals with our comprehensive real estate marketing services."
        />
        <meta
          name="keywords"
          content="Virtual Xposure, real estate marketing, digital marketing for realtors, social media management, content creation, real estate branding, realtor growth strategies, social media strategy, video content creation, real estate content marketing, realtor lead generation, brand visibility, online real estate marketing, data-driven marketing, social media automation, media buying, CRM pipeline management, real estate sales support, client engagement, virtual marketing solutions"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="32x32"
          href="/images/favicon.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="16x16"
          href="/images/favicon.webp"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtualxposure.com" />
        <meta
          property="og:title"
          content="Virtual Xposure | Meet the Gold Standard in Real Estate Marketing"
        />
        <meta
          property="og:description"
          content="Virtual Xposure delivers cutting-edge digital marketing solutions tailored for real estate professionals. We help agents build a powerful online presence through social media management, content creation, lead generation, and data-driven strategies. Boost brand visibility, engage your audience, and close more deals with our comprehensive real estate marketing services."
        />
        <meta
          property="og:image"
          content="/images/social-media-share-preview.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://virtualxposure.com" />
        <meta
          name="twitter:title"
          content="Virtual Xposure | Meet the Gold Standard in Real Estate Marketing"
        />
        <meta
          name="twitter:description"
          content="Virtual Xposure delivers cutting-edge digital marketing solutions tailored for real estate professionals. We help agents build a powerful online presence through social media management, content creation, lead generation, and data-driven strategies. Boost brand visibility, engage your audience, and close more deals with our comprehensive real estate marketing services."
        />
        <meta
          name="twitter:image"
          content="/images/social-media-share-preview.webp"
        />
      </head>
      <body
        className={`antialiased`}
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <PreloaderProvider>
          <PageAnimatePresence>{children}</PageAnimatePresence>
        </PreloaderProvider>
      </body>
    </html>
  );
}
