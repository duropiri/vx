import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/page";
import Body from "@/components/pages/pricing/body";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Real Estate Media Packages Pricing | Virtual Xposure",
  description:
    "Discover Virtual Xposure's premium real estate media packages designed to elevate your property listings. Choose from the Starter, Deluxe, Social Media Boost, or Cinematic Experience packages—all backed by our Fast‑Track MLS Guarantee and crafted for exceptional results.",
  keywords:
    "real estate media pricing, Virtual Xposure packages, real estate photography packages, cinematic video tour cost, social media boost package, real estate marketing plans, premium listing media packages, professional property visuals pricing",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Real Estate Media Packages Pricing | Virtual Xposure",
    description:
      "Discover Virtual Xposure's premium real estate media packages designed to elevate your property listings. Choose from the Starter, Deluxe, Social Media Boost, or Cinematic Experience packages—all backed by our Fast‑Track MLS Guarantee and crafted for exceptional results.",
  },
};

export default function Home() {
  return (
    <Page>
      <Body />
    </Page>
  );
}
