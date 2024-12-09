"use client";
import React, { useEffect, useRef, useState } from "react";

interface ResponsiveIframeProps {
  src: string;
  title: string;
  className?: string;
}

const ResponsiveIframe: React.FC<ResponsiveIframeProps> = ({
  src,
  title,
  className,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Handle messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Verify the message source for security
      if (event.source !== iframe.contentWindow) return;

      // Handle height updates from the iframe
      if (event.data.type === "height-update") {
        setHeight(event.data.height);
      }
    };

    // Setup resize observer to handle iframe content changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newHeight = entry.contentRect.height;
        if (newHeight > 0) {
          setHeight(newHeight);
        }
      }
    });

    // Observe the iframe
    resizeObserver.observe(iframe);

    // Listen for messages from the iframe
    window.addEventListener("message", handleMessage);

    // Inject script into iframe to report height
    const injectHeightReporter = () => {
      try {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) return;

        const script = iframeDoc.createElement("script");
        script.textContent = `
          function reportHeight() {
            const height = document.documentElement.scrollHeight;
            window.parent.postMessage({ type: 'height-update', height }, '*');
          }
          
          // Report height on load
          window.addEventListener('load', reportHeight);
          
          // Report height on content changes
          const observer = new MutationObserver(reportHeight);
          observer.observe(document.body, { 
            childList: true, 
            subtree: true,
            attributes: true 
          });
        `;
        iframeDoc.body.appendChild(script);
      } catch (error) {
        console.warn("Could not inject height reporter into iframe", error);
      }
    };

    // Try to inject the script when the iframe loads
    iframe.addEventListener("load", injectHeightReporter);

    // Cleanup
    return () => {
      window.removeEventListener("message", handleMessage);
      resizeObserver.disconnect();
      iframe.removeEventListener("load", injectHeightReporter);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      className={className}
      style={{
        width: "100%",
        height: height || "100vh", // Use 100vh as fallback height
        border: "none",
        transition: "height 0.3s ease",
        overflow: "hidden",
      }}
      scrolling="no"
      loading="lazy"
    />
  );
};

export default ResponsiveIframe;
