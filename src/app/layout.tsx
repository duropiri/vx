// app/layout.tsx
import "./globals.scss";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

// Define base metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://virtualxposure.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: "Virtual Xposure | Real Estate Photography Edmonton",
  description:
    "Sell Your Listings In DAYS, Not WEEKS - For Only $127.99 -- The #1 All-In-One Solution for your real estate photography and videography needs. Your realtor buddies will stop in awe as you launch your listings, wondering what changed… only you will know.",
  keywords:
    "Virtual Xposure, real estate marketing, digital marketing for realtors, social media management, content creation, real estate branding, realtor growth strategies, social media strategy, video content creation, real estate content marketing, realtor lead generation, brand visibility, online real estate marketing, data-driven marketing, social media automation, media buying, CRM pipeline management, real estate sales support, client engagement, virtual marketing solutions",
  openGraph: {
    type: "website",
    url: "https://virtualxposure.com",
    title: "Virtual Xposure | Real Estate Photography Edmonton",
    description:
      "Sell Your Listings In DAYS, Not WEEKS - For Only $127.99 -- The #1 All-In-One Solution for your real estate photography and videography needs...",
    images: "/assets/images/social-media-share-preview.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Xposure | Real Estate Photography Edmonton",
    description:
      "Sell Your Listings In DAYS, Not WEEKS - For Only $127.99 -- The #1 All-In-One Solution for your real estate photography and videography needs...",
    images: "/assets/images/social-media-share-preview.webp",
  },
  verification: {
    google: "FyVoyIhh_-5JEVZ3uQxsFMTLWF5UlcETjN7uZ_iC-eE",
  },
  icons: {
    icon: "/assets/images/favicon.ico",
    apple: [{ url: "/assets/images/favicon_vx.webp", sizes: "180x180" }],
    other: [
      {
        rel: "icon",
        url: "/assets/images/favicon_vx.webp",
        sizes: "32x32",
        type: "image/webp",
      },
      {
        rel: "icon",
        url: "/assets/images/favicon_vx.webp",
        sizes: "16x16",
        type: "image/webp",
      },
    ],
  },
};

// Create a new file: app/fonts.ts
import localFont from "next/font/local";
import { criticalStyles } from "@/styles/critical";

export const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/ProximaNova/ProximaNova-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProximaNova/ProximaNova-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProximaNova/ProximaNova-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    // Add other weights/styles as needed
  ],
  variable: "--font-proxima-nova",
  display: "swap",
});

export const nunito = localFont({
  src: [
    {
      path: "../../public/fonts/Nunito/Nunito-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nunito/Nunito-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nunito/Nunito-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    // Add other weights/styles as needed
  ],
  variable: "--font-nunito",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${proximaNova.variable} ${nunito.variable}`}>
      <Analytics />
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
        <link
          rel="preconnect"
          href="https://virtualxposure.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://virtualxposure.com" />
        <Script
          id="fb-pixel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2013640412380588');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2013640412380588&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="antialiased max-w-[100vw]">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
