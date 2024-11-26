/* eslint-disable @next/next/no-sync-scripts */
import React from "react";

interface SectionProps {
  className?: string;
}

function ChatWidget({ className }: SectionProps) {
  return (
    <script
      className={`${className} cursor-select-hover`}
      style={{ zIndex: 99999999 }}
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="66fab21d2e88521919e2d2f3"
    ></script>
  );
}

export default ChatWidget;
