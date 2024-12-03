"use client";

import React, { useEffect, useState } from "react";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <html lang="en">
        <body className="antialiased overflow-hidden">
          {/* Loading state or nothing */}
        </body>
      </html>
    );
  }

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

        {/* Favicon */}
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

        {/* Open Graph */}
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

        {/* Twitter */}
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
        <meta
          name="google-site-verification"
          content="FyVoyIhh_-5JEVZ3uQxsFMTLWF5UlcETjN7uZ_iC-eE"
        />
      </head>
      <body className="antialiased max-w-[100vw]">{children}</body>
    </html>
  );
}
