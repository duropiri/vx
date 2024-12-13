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

  /* Hide scrollbar */
  html {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }

  html::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  body {
    margin: 0;
    color: var(--foreground);
    background: var(--background);
    font-family: Proxima Nova, sans-serif;
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

  .hero-container {
    padding-top: 5rem /* 40px */;
    padding-bottom: 2.5rem /* 40px */;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  /* Base font families */
  [class*="pn-"] {
    font-family: var(--font-proxima-nova);
    line-height: 1.2em;
  }

  /* Mobile Font Utilities (Default) */
  /* Proxima Nova */
  .pn-regular-72, .pn-semibold-72, .pn-bold-72 { font-size: 2.5rem; }  /* 40px */
  .pn-regular-40, .pn-semibold-40, .pn-bold-40 { font-size: 2rem; }    /* 32px */
  .pn-regular-32, .pn-semibold-32, .pn-bold-32 { font-size: 1.625rem; }/* 26px */
  .pn-regular-24, .pn-semibold-24, .pn-bold-24 { font-size: 1.5rem; }  /* 24px */
  .pn-regular-20, .pn-semibold-20, .pn-bold-20 { font-size: 1.25rem; } /* 20px */
  .pn-regular-16, .pn-semibold-16, .pn-bold-16 { font-size: 1rem; }    /* 16px */
  .pn-regular-14, .pn-semibold-14, .pn-bold-14 { font-size: 0.875rem; }/* 14px */
  .pn-regular-12, .pn-semibold-12, .pn-bold-12 { font-size: 0.75rem; } /* 12px */

  /* Font weights - Proxima Nova */
  [class*="pn-regular"] { font-family: var(--font-proxima-nova); font-weight: 400; }
  [class*="pn-semibold"] { font-family: var(--font-proxima-nova); font-weight: 600; }
  [class*="pn-bold"] { font-family: var(--font-proxima-nova); font-weight: 700; }

  /* Desktop Font Sizes (768px and up) */
  @media (min-width: 768px) {
    /* Proxima Nova */
    .pn-regular-72, .pn-semibold-72, .pn-bold-72 { font-size: 4.5rem; } /* 72px */
    .pn-regular-40, .pn-semibold-40, .pn-bold-40 { font-size: 2.5rem; } /* 40px */
    .pn-regular-32, .pn-semibold-32, .pn-bold-32 { font-size: 2rem; }   /* 32px */
    .pn-regular-24, .pn-semibold-24, .pn-bold-24 { font-size: 1.5rem; } /* 24px */
    .pn-regular-20, .pn-semibold-20, .pn-bold-20 { font-size: 1.25rem; }/* 20px */
    .pn-regular-16, .pn-semibold-16, .pn-bold-16 { font-size: 1rem; }   /* 16px */
    .pn-regular-14, .pn-semibold-14, .pn-bold-14 { font-size: 0.875rem; }/* 14px */
    .pn-regular-12, .pn-semibold-12, .pn-bold-12 { font-size: 0.75rem; }/* 12px */
  }

  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 1.25rem;
    gap: 0.625rem;
    background-color: var(--white); /* Fill */
    border: 0.125rem solid var(--ash); /* Stroke */
    line-height: 1;
    border-radius: 9999px; /* Rounded corners */
    transition: all 0.3s ease;
    /* cursor: pointer; */
  }

  .button.thin {
    padding: 0.375rem 0.75rem;
  }

  .button.nopadding {
    padding: 0;
  }

  .button.dark {
    background-color: var(--ash); /* Fill */
    color: white;
  }

  .button.gold {
    background: linear-gradient(90deg, #c5a05e, #fdd98a, #c5a05e);
    background-size: 300% 100%;
    // animation: gradientShift 2s linear infinite;

    // @keyframes gradientShift {
    //   0% {
    //     background-position: 0% 50%;
    //   }
    //   50% {
    //     background-position: 100% 50%;
    //   }
    //   100% {
    //     background-position: 0% 50%;
    //   }
    // }
  }

  // .banner {
  //   transition: visibility 0s linear 0.8s;
  // }

  // .banner:not([style*="visibility: visible"]) {
  //   visibility: hidden !important;
  //   opacity: 0 !important;
  //   pointer-events: none !important;
  // }

  // /* When navigation is complete, force hide */
  // [data-navigating="false"] .banner {
  //   visibility: hidden !important;
  //   opacity: 0 !important;
  //   pointer-events: none !important;
  // }
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
