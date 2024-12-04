import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";

import { ServiceIcons } from "@/data/serviceIcons";
import { VirtualRennovationPackages } from "@/data/pricingPackages";
import { WhatIsItSection } from "./VirtualRenovationClient";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Virtual Renovation Services | Real Estate Visualization | Virtual Xposure",
  description: "Help buyers visualize their dream home with photo-realistic virtual renovation services. Starting at $47.99 per image with unlimited revisions, 24-48 hour turnaround, and 2X money-back guarantee.",
  keywords: "virtual renovation, real estate renovation preview, property visualization, virtual remodeling, digital renovation, real estate marketing, virtual property updates, renovation visualization",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Virtual Renovation Services | Real Estate Visualization | Virtual Xposure",
    description: "Help buyers visualize their dream home with photo-realistic virtual renovation services. Starting at $47.99 per image with unlimited revisions, 24-48 hour turnaround, and 2X money-back guarantee.",
  },
};

const page = () => {
  return (
    <Page>
      <Body
        title="Visualize The Future of Real Estate Marketing"
        copy="Help buyers envision their dream home in your listing with our Virtual Renovation services."
        detailList={[
          {
            icon: ServiceIcons.priceTag,
            text: "Starting at Only $47.99 Per Image",
          },
          {
            icon: ServiceIcons.photos,
            text: "The Most Photo-Realistic & Affordable Virtual Renovation",
          },
          { icon: ServiceIcons.infinity, text: "Unlimited Revisions" },
          {
            icon: ServiceIcons.timer,
            text: "24-48 Hour Turnaround Time",
          },
          { icon: ServiceIcons.guarantee, text: "2X Money Back Guarantee" },
        ]}
        cta={{
          label: "Place an order",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/assets/videos/virtual-3d-tours.webm"
        whatisitSection={<WhatIsItSection />}
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
        pricing={VirtualRennovationPackages}
      />
    </Page>
  );
};

export default page;
