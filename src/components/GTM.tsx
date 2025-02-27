"use client";
import { useEffect } from "react";
import Script from "next/script";

const GTM_IDS = process.env.NEXT_PUBLIC_GTM_ID?.split(",") || [];

export default function GTM() {
  useEffect(() => {
    console.log("GTM Scripts Loaded:", GTM_IDS);
  }, []);

  if (GTM_IDS.length === 0) return null; // No GTM IDs, don't render anything

  return (
    <>
      {GTM_IDS.map((id) => (
        <Script
          key={id}
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        />
      ))}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GTM_IDS.map((id) => `gtag('config', '${id}');`).join("\n")}
        `,
        }}
      />
    </>
  );
}