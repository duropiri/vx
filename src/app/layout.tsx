import type { Metadata } from "next";
import "./globals.scss";
import { PreloaderProvider } from "@/contexts/PreloaderContext";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: "Virtual Xposure | Meet the Gold Standard in Real Estate Marketing",
  description:
    "Virtual Xposure delivers cutting-edge digital marketing solutions tailored for real estate professionals. We help agents build a powerful online presence through social media management, content creation, lead generation, and data-driven strategies. Boost brand visibility, engage your audience, and close more deals with our comprehensive real estate marketing services.",
  keywords:
    "Virtual Xposure, real estate marketing, digital marketing for realtors, social media management, content creation, real estate branding, realtor growth strategies, social media strategy, video content creation, real estate content marketing, realtor lead generation, brand visibility, online real estate marketing, data-driven marketing, social media automation, media buying, CRM pipeline management, real estate sales support, client engagement, virtual marketing solutions",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientLayoutWrapper>
      <PreloaderProvider>
        <PageAnimatePresence>{children}</PageAnimatePresence>
      </PreloaderProvider>
    </ClientLayoutWrapper>
  );
}
