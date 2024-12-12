// app/layout.tsx
import "./globals.scss";
import { Metadata } from "next";
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
  title: "Virtual Xposure | Meet the Gold Standard in Real Estate Marketing",
  description:
    "Virtual Xposure delivers cutting-edge digital marketing solutions tailored for real estate professionals. We help agents build a powerful online presence through social media management, content creation, lead generation, and data-driven strategies. Boost brand visibility, engage your audience, and close more deals with our comprehensive real estate marketing services.",
  keywords:
    "Virtual Xposure, real estate marketing, digital marketing for realtors, social media management, content creation, real estate branding, realtor growth strategies, social media strategy, video content creation, real estate content marketing, realtor lead generation, brand visibility, online real estate marketing, data-driven marketing, social media automation, media buying, CRM pipeline management, real estate sales support, client engagement, virtual marketing solutions",
  openGraph: {
    type: "website",
    url: "https://virtualxposure.com",
    title: "Virtual Xposure | Meet the Gold Standard in Real Estate Marketing",
    description:
      "Virtual Xposure delivers cutting-edge digital marketing solutions tailored for real estate professionals...",
    images: "/assets/images/social-media-share-preview.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Xposure | Meet the Gold Standard in Real Estate Marketing",
    description:
      "Virtual Xposure delivers cutting-edge digital marketing solutions...",
    images: "/assets/images/social-media-share-preview.webp",
  },
  verification: {
    google: "FyVoyIhh_-5JEVZ3uQxsFMTLWF5UlcETjN7uZ_iC-eE",
  },
  icons: {
    icon: "/assets/images/favicon.ico",
    apple: [{ url: "/assets/images/favicon.webp", sizes: "180x180" }],
    other: [
      {
        rel: "icon",
        url: "/assets/images/favicon.webp",
        sizes: "32x32",
        type: "image/webp",
      },
      {
        rel: "icon",
        url: "/assets/images/favicon.webp",
        sizes: "16x16",
        type: "image/webp",
      },
    ],
  },
};

// Create a new file: app/fonts.ts
import localFont from "next/font/local";

export const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/ProximaNova/ProximaNova-Regular.woff2",
      weight: "400",
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
    // Add other weights/styles as needed
  ],
  variable: "--font-nunito",
  display: "swap",
});

// Critical CSS can be moved to a separate file and imported
const criticalStyles = `
  :root {
    /* Color variables */
    --black: #000000;
    --goldenrod: #fdd98a; /* Secondary */
    --goldenbrown: #c5a05e; /* Primary */
    --ash: #1b1a17; /* Primary */
    --white: #ffffff;
    --charcoal-navy: #1a213d; /* Primary */
    --charcoal: #434345; /* Secondary */

    --section-width: 98vw;

    /* Font sizing variables */
    --size: 300;
    font-size: calc(max(((100vw / var(--size)) * 10), 16px));
  }

  @media (min-width: 768px) {
    :root {
      --size: 1000;
      --section-width: 90vw;
    }
  }

  @media (min-width: 1440px) {
    :root {
      --size: 1200;
    }
  }

  body {
    margin: 0;
    color: var(--foreground);
    background: var(--background);
  }

  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6.25rem 5rem;
    /* margin: 6.25rem 0; */
    width: 100vw;
    box-sizing: border-box;
    max-width: 100vw;
  }

  .section-container.top {
    padding-top: 10rem;
  }

  @media (max-width: 768px) {
    .section-container {
      padding: 3.125rem 2rem;
      /* margin: 3.125rem 0; */
    }

    .section-container.top {
      padding-top: 8rem;
    }
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${proximaNova.variable} ${nunito.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
      </head>
      <body className="antialiased max-w-[100vw]">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
