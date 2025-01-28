import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";

import { ServiceIcons } from "@/data/serviceIcons";
import {
  BenefitsSection,
  WhatIsItSection1,
  WhatIsItSection2,
  WhatIsItSection3,
} from "./RMSMeasurementsSchematicFloorPlansClient";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "RMS Measurements & Schematic Floor Plans | Virtual Xposure",
  description: "Professional RMS measurements and schematic floor plans with 24-hour turnaround time. Unlimited revisions, top-tier quality, and 2X money-back guarantee. Accurate property measurements and detailed floor plans for real estate listings.",
  keywords: "RMS measurements, schematic floor plans, property measurements, real estate floor plans, architectural measurements, property layout, residential measurement standard, professional floor plans",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "RMS Measurements & Schematic Floor Plans | Virtual Xposure",
    description: "Professional RMS measurements and schematic floor plans with 24-hour turnaround time. Unlimited revisions, top-tier quality, and 2X money-back guarantee. Accurate property measurements and detailed floor plans for real estate listings.",
  },
};

const page = () => {
  return (
    <Page>
      <Body
        title="RMS Measurements & Schematic Floor Plans"
        copy="With us, quality virtual staging doesn't have to break the bank. For only $25, you can get the best virtual staging results without compromising on quality."
        detailList={[
          {
            icon: ServiceIcons.timer,
            text: "24-Hour Turnaround Time",
          },
          {
            icon: ServiceIcons.thumb,
            text: "Top Tier Quality",
          },
          { icon: ServiceIcons.infinity, text: "Unlimited Revisions" },
          { icon: ServiceIcons.guarantee, text: "2X Money Back Guarantee" },
        ]}
        cta={{
          label: "Book Now",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/assets/portfolio/images/interior/Virtual_Xposure_-_Interior_Image_-_(33).webp"
        benefitsSection={<BenefitsSection />}
        whatisitSection={[
          <WhatIsItSection1 key="section1" />,
          <WhatIsItSection2 key="section2" />,
          <WhatIsItSection3 key="section3" />,
        ]}
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
        floorplan
      />
    </Page>
  );
};

export default page;
