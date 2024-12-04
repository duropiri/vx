import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import { ServiceIcons } from "@/data/serviceIcons";
import { RealEstateVideographyPackages } from "@/data/pricingPackages";
import {
  StepsLeftSection,
  StepsRightSection,
  UnlimitedLeftSection,
  UnlimitedRightSection,
  WhatIsItSection,
} from "./RealEstateVideographyClient";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Professional Real Estate Videography Services | Virtual Xposure",
  description: "Premium real estate videography with 48-hour turnaround, unlimited content, and a 2X money-back guarantee. Capture your property's best features with cinematic quality videos that sell.",
  keywords: "real estate videography, property videos, real estate marketing videos, real estate promotional videos, Edmonton real estate videos, luxury property videos, drone videography, real estate video marketing",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Professional Real Estate Videography Services | Virtual Xposure",
    description: "Premium real estate videography with 48-hour turnaround, unlimited content, and a 2X money-back guarantee. Capture your property's best features with cinematic quality videos that sell.",
  },
};

const page = () => {
  return (
    <Page>
      <Body
        title="Best In Industry Real Estate Videography"
        copy="Capture buyers' attention with stunning visuals highlighting every detail of your property. Choose the Gold Standard in Real Estate Marketing, because results matter."
        detailList={[
          {
            icon: ServiceIcons.infinity,
            text: "Completely Unlimited - Pay one flat rate, and get everything you need to knock your next listing out of the park.",
          },
          {
            icon: ServiceIcons.thumb,
            text: "Results Oriented - Helping you to achieve a higher sales price; sell your listings faster, and provide stand-out results for your clients.",
          },
          {
            icon: ServiceIcons.timer,
            text: "48 Hour Turnaround - Time is money. Launch your listing within two days after our scheduled appointment.",
          },
          {
            icon: ServiceIcons.guarantee,
            text: "2X Money Back Guarantee - If you're not completely blown away, we'll double your investment in our services.",
          },
        ]}
        cta={{
          label: "Order Now",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/assets/videos/real-estate-videography.webm"
        whatisitSection={<WhatIsItSection />}
        whyusSection
        stepsSection={[<StepsLeftSection />, <StepsRightSection />]}
        socialproofSection
        ctaSection
        unlimitedSection={[<UnlimitedLeftSection />, <UnlimitedRightSection />]}
        testimonialsSection
        pricing={RealEstateVideographyPackages}
      />
    </Page>
  );
};

export default page;
