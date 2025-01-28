import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import { ListingMediaPackages } from "@/data/pricingPackages";
import {
  detailList,
  StepsLeftSection,
  StepsRightSection,
  UnlimitedLeftSection,
  UnlimitedRightSection,
  WhatIsItSection,
} from "./RealEstateHDRPhotographyClient";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Professional Real Estate HDR Photography | Virtual Xposure",
  description: "Data-driven real estate photography services delivering stunning HDR images that help your listings sell faster. Professional, high-quality photos with quick turnaround time.",
  keywords: "real estate photography, HDR property photos, professional real estate photos, property photography, Edmonton real estate photography, luxury property photos, architectural photography, real estate marketing photos",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Professional Real Estate HDR Photography | Virtual Xposure",
    description: "Data-driven real estate photography services delivering stunning HDR images that help your listings sell faster. Professional, high-quality photos with quick turnaround time.",
  },
};

const page = () => {
  return (
    <Page>
      <Body
        title="Real Estate HDR Photography"
        copy="Imagine a data-driven, results-oriented team of marketing nerds completely obsessed with ensuring your listings go from AVAILABLE -> PENDING -> SOLD. That's us. Choose the Gold Standard in Real Estate Marketing, because results matter."
        detailList={detailList}
        cta={{
          label: "Order Now",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/assets/portfolio/images/exterior/Virtual_Xposure_-_Exterior_Image_-_(12).webp"
        whatisitSection={<WhatIsItSection />}
        whyusSection
        stepsSection={[
          <StepsLeftSection key="steps-left" />,
          <StepsRightSection key="steps-right" />
        ]}
        socialproofSection
        ctaSection
        unlimitedSection={[
          <UnlimitedLeftSection key="unlimited-left" />,
          <UnlimitedRightSection key="unlimited-right" />
        ]}
        testimonialsSection
        pricing={ListingMediaPackages}
        photography
      />
    </Page>
  );
};

export default page;
