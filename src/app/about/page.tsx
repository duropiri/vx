import Page from "@/components/layout/page";
import Body from "@/components/pages/about/body";
import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";

export default function Home() {
  return (
    <Page>
      <Body />
    </Page>
  );
}

export const metadata: Metadata = {
  ...baseMetadata,
  title: "About Virtual Xposure | Real Estate Marketing Experts",
  description: "Discover the story behind Virtual Xposure - Edmonton's leading real estate marketing agency. Learn about our mission, team, and commitment to helping realtors sell properties faster through innovative media solutions.",
  keywords: "about Virtual Xposure, real estate marketing company, our story, meet the team, company mission, real estate media experts, Edmonton marketing agency, property marketing specialists",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "About Virtual Xposure | Real Estate Marketing Experts",
    description: "Discover the story behind Virtual Xposure - Edmonton's leading real estate marketing agency. Learn about our mission, team, and commitment to helping realtors sell properties faster through innovative media solutions.",
  },
};
