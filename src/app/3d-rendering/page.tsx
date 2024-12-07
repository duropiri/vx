import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import { ServiceIcons } from "@/data/serviceIcons";
import { ThreeDimensionalRenderingPackages } from "@/data/pricingPackages";
import {
  BenefitsSection,
  WhatIsItSection,
} from "./3DRenderingClient";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Professional 3D Rendering Services for Real Estate | Virtual Xposure",
  description: "Photo-realistic 3D rendering services with unlimited revisions and 7-day turnaround. Showcase unbuilt properties to potential buyers with stunning architectural visualizations.",
  keywords: "3D rendering, architectural visualization, real estate rendering, property visualization, 3D architectural rendering, pre-construction visualization, real estate marketing 3D, photo-realistic rendering",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Professional 3D Rendering Services for Real Estate | Virtual Xposure",
    description: "Photo-realistic 3D rendering services with unlimited revisions and 7-day turnaround. Showcase unbuilt properties to potential buyers with stunning architectural visualizations.",
  },
};

const page = () => {
  return (
    <Page>
      <Body
        title="3D Rendering"
        copy="Use 3D rendering to showcase your unbuilt property to potential tenants, buyers, and stakeholders while it’s still in the concept phase."
        detailList={[
          {
            icon: ServiceIcons.transaction,
            text: "Photo-Realistic & Affordable 3D Rendering Services",
          },
          {
            icon: ServiceIcons.clock,
            text: "7 Day Turnaround Time",
          },
          { icon: ServiceIcons.infinity, text: "Unlimited Revisions" },
          {
            icon: ServiceIcons.guarantee,
            text: "2X Money Back Guarantee",
          },
        ]}
        cta={{
          label: "Order Now",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/assets/portfolio/virtual renovation images/DEMO_(35).webp"
        whatisitSection={<WhatIsItSection />}
        benefitsSection={<BenefitsSection />}
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
        pricing={ThreeDimensionalRenderingPackages}
      />
    </Page>
  );
};

export default page;
