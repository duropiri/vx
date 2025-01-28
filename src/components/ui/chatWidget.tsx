/* eslint-disable @next/next/no-sync-scripts */
import Script from "next/script";
import React from "react";
import { ReactGoogleReviews } from "react-google-reviews";

interface SectionProps {
  className?: string;
}

function ChatWidget({ className }: SectionProps) {
  return (
    <div
      className={`${className} z-[99999999] fixed bottom-[100px] right-[20px]`}
    >
      <Script
        className={`cursor-select-hover`}
        // style={{ zIndex: 99999999 }}
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="66fab21d2e88521919e2d2f3"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("Script loaded correctly");
        }}
      ></Script>
      <div className="hidden sm:contents">
        <ReactGoogleReviews
          layout="badge"
          featurableId={`7d474d03-83fb-40bc-8b16-a5fb73d658fa`}
          badgeClassName="opacity-50 group hover:opacity-100 shadow-none shadow-black hover:!drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)] transition-all duration-500"
          badgeContainerClassName="flex flex-col sm:flex-row !border-t-goldenbrown group-hover:!border-t-goldenrod transition-all duration-1000"
          badgeLinkClassName={`cursor-select-hover`}
        />
      </div>
    </div>
  );
}

export default ChatWidget;
