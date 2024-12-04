import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import { ServiceIcons } from "@/data/serviceIcons";
import {
  WhatIsItSection,
  BenefitsSection,
  AdvantageSection,
} from "./Virtual3DToursClient";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Virtual 3D Property Tours | Immersive Real Estate Tours | Virtual Xposure",
  description: "Create immersive virtual 3D tours that showcase every aspect of your property. Easy social media sharing, unlimited revisions, and a 2X money-back guarantee. Give buyers an accurate virtual walkthrough experience.",
  keywords: "virtual 3D tours, real estate virtual tours, property virtual walkthrough, 3D property showcase, immersive real estate tours, virtual home tours, 360 property tours, interactive property viewing",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Virtual 3D Property Tours | Immersive Real Estate Tours | Virtual Xposure",
    description: "Create immersive virtual 3D tours that showcase every aspect of your property. Easy social media sharing, unlimited revisions, and a 2X money-back guarantee. Give buyers an accurate virtual walkthrough experience.",
  },
};

const page = () => {
  return (
    <Page>
      <Body
        title="Virtual 3D Tours"
        copy="Showcase your property like never before with a Virtual 3D Tour! Highlight every aspect of the space, offering your audience an accurate and immersive experience that reveals the property's true character."
        detailList={[
          {
            icon: ServiceIcons.transaction,
            text: "Quick & Easy, No Additional Time Committment Required",
          },
          {
            icon: ServiceIcons.share,
            text: "Easily Share Over Social Media",
          },
          { icon: ServiceIcons.infinity, text: "Unlimited Revisions" },
          { icon: ServiceIcons.guarantee, text: "2X Money Back Guarantee" },
        ]}
        cta={{
          label: "Book Now",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/assets/videos/virtual-3d-tours.webm"
        whatisitSection={<WhatIsItSection />}
        benefitsSection={<BenefitsSection />}
        advantageSection={<AdvantageSection />}
        whyusSection
      />
    </Page>
  );
};

export default page;
