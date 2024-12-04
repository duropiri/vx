import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import { ServiceIcons } from "@/data/serviceIcons";
import { VirtualStagingPackages } from "@/data/pricingPackages";
import { WhatIsItSection, BenefitsSection } from "./VirtualStagingClient";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Professional Virtual Staging Services | $25 CAD | Virtual Xposure",
  description: "Transform empty spaces with affordable virtual staging at just $25 CAD per image. 24-hour turnaround, unlimited revisions, and 100% satisfaction guarantee. High-quality virtual staging that helps sell properties faster.",
  keywords: "virtual staging, real estate virtual staging, affordable virtual staging, property staging, virtual furniture staging, real estate marketing, virtual home staging, 24 hour virtual staging",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Professional Virtual Staging Services | $25 CAD | Virtual Xposure",
    description: "Transform empty spaces with affordable virtual staging at just $25 CAD per image. 24-hour turnaround, unlimited revisions, and 100% satisfaction guarantee. High-quality virtual staging that helps sell properties faster.",
  },
};

const page = () => {
  return (
    <Page>
      <Body
        title="Virtual Staging at $25 CAD"
        copy="With us, quality virtual staging doesn't have to break the bank. For only $25, you can get the best virtual staging results without compromising on quality."
        detailList={[
          {
            icon: ServiceIcons.timer,
            text: "24-Hour Turnaround Time",
          },
          {
            icon: ServiceIcons.guarantee,
            text: "100% Satisfaction Guarantee",
          },
          { icon: ServiceIcons.thumb, text: "Top Tier Quality" },
          {
            icon: ServiceIcons.infinity,
            text: "Unlimited Revisions",
          },
        ]}
        cta={{
          label: "Place an order",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/assets/videos/"
        whatisitSection={<WhatIsItSection />}
        benefitsSection={<BenefitsSection />}
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
        pricing={VirtualStagingPackages}
        staging
      />
    </Page>
  );
};

export default page;
