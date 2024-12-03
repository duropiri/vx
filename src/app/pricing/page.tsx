import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/page";
import Body from "@/components/pages/pricing/body";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Real Estate Marketing Services Pricing | Virtual Xposure",
  description: "Explore Virtual Xposure's transparent pricing for real estate marketing services. From virtual staging at $25 CAD to comprehensive marketing packages. Find affordable, professional solutions with our 2X money-back guarantee.",
  keywords: "real estate marketing pricing, Virtual Xposure prices, real estate photography rates, virtual staging cost, marketing package prices, real estate marketing packages, affordable real estate marketing, professional marketing rates",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Real Estate Marketing Services Pricing | Virtual Xposure",
    description: "Explore Virtual Xposure's transparent pricing for real estate marketing services. From virtual staging at $25 CAD to comprehensive marketing packages. Find affordable, professional solutions with our 2X money-back guarantee.",
  },
};

export default function Home() {
  return (
    <Page>
      <Body />
    </Page>
  );
}
