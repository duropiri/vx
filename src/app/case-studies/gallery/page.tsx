import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";

import Page from "@/components/layout/page";
import Body from "@/components/pages/gallery/body";

export const metadata: Metadata = {
  ...baseMetadata,
  title:
    "Real Estate Media Gallery | Portfolio of Listings | Virtual Xposure",
  description:
    "Discover our portfolio of professional real estate media, including stunning photography, virtual staging, and creative marketing examples. Explore how Virtual Xposure elevates property listings with innovative solutions and unmatched quality.",
  keywords:
    "real estate media gallery, real estate photography portfolio, property marketing showcase, virtual staging gallery, real estate listing media, marketing portfolio for realtors, property media examples, Virtual Xposure portfolio",
  openGraph: {
    ...baseMetadata.openGraph,
    title:
      "Real Estate Media Gallery | Portfolio of Listings | Virtual Xposure",
    description:
      "Discover our portfolio of professional real estate media, including stunning photography, virtual staging, and creative marketing examples. Explore how Virtual Xposure elevates property listings with innovative solutions and unmatched quality.",
  },
};

export default function Home() {
  return (
    <Page>
      <Body />
    </Page>
  );
}
