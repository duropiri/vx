// app/layout.tsx
import "./globals.scss";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
// Create a new file: app/fonts.ts
import localFont from "next/font/local";
import { criticalStyles } from "@/styles/critical";
import React from "react";
const GTM_IDS = process.env.NEXT_PUBLIC_GTM_ID?.split(",") || [];

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
  openGraph: {
    type: "website",
    url: "https://virtualxposure.com",
    images: "/assets/images/social-media-share-preview.webp",
  },
  twitter: {
    card: "summary_large_image",
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
  other: {
    link: [
      {
        rel: "preconnect",
        href: "https://virtualxposure.com",
        crossOrigin: "anonymous",
      } as unknown as string,
      {
        rel: "dns-prefetch",
        href: "https://virtualxposure.com",
      } as unknown as string,
    ],
  },
};

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
        <style
          dangerouslySetInnerHTML={{ __html: criticalStyles }}
          href="critical-styles"
        />

        {/* <link
        rel="preconnect"
        href="https://virtualxposure.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://virtualxposure.com" /> */}
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
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2013640412380588&ev=PageView&noscript=1"
          />
        </noscript>
        {/* Google Tag Manager Scripts */}
        {GTM_IDS.length > 0 &&
          GTM_IDS.map((id) => (
            <React.Fragment key={id}>
              <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
              />
              <Script
                id={`gtm-${id}`}
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${id}');
                  `,
                }}
              />
            </React.Fragment>
          ))}

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MPRFLBLK');
          `}
        </Script>

        <Script
          id="delayed-navigation"
          dangerouslySetInnerHTML={{
            __html: `
              function gtagSendEvent(url, eventData) {
                var callback = function () {
                  if (typeof url === 'string') {
                    window.location = url;
                  }
                };
                var eventParams = Object.assign({
                  'event_callback': callback,
                  'event_timeout': 2000
                }, eventData);
                gtag('event', 'ads_conversion_Book_appointment_1', eventParams);
                return false;
              }
            `,
          }}
        />
        {/* Hotjar Script */}
        <Script
          id="contentsquare-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (c, s, q, u, a, r, e) {
                  c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
                  c._hjSettings = { hjid: a };
                  r = s.getElementsByTagName('head')[0];
                  e = s.createElement('script');
                  e.async = true;
                  e.src = q + c._hjSettings.hjid + u;
                  r.appendChild(e);
              })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5322614);
            `,
          }}
        />
      </head>
      <body className="antialiased max-w-[100vw]">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPRFLBLK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
