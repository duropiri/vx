import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PreloaderProvider } from "@/contexts/PreloaderContext";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";

export const metadata: Metadata = {
  title: "Virtual Xposure",
  description: "Meet the Gold Standard in Real Estate Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* <PreloaderProvider> */}
          <PageAnimatePresence>{children}</PageAnimatePresence>
        {/* </PreloaderProvider> */}
      </body>
    </html>
  );
}
