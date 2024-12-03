// app/graphic-design/page.tsx
import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import { graphicDesignFAQ } from "@/data/faq";
import {
  WhatIsItSection1,
  WhatIsItSection2,
  WhatIsItSection3,
} from "./GraphicDesignClient";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Real Estate Graphic Design Services | Logo & Brochure Design | Virtual Xposure",
  description: "Professional real estate graphic design services including custom logo design, logo animation, brochure design, and marketing materials. Transform your real estate brand with high-quality, customized graphics that capture attention and drive results.",
  keywords: "real estate graphic design, logo design for realtors, real estate brochures, property marketing materials, real estate brand design, logo animation, custom realtor graphics, real estate marketing design, property brochure design, real estate visual branding",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Real Estate Graphic Design Services | Logo & Brochure Design | Virtual Xposure",
    description: "Professional real estate graphic design services including custom logo design, logo animation, brochure design, and marketing materials. Transform your real estate brand with high-quality, customized graphics that capture attention and drive results.",
    images: "/images/social-media-share-preview.webp",
  },
};

export default function GraphicDesign() {
  return (
    <Page>
      <Body
        title="Graphic Design"
        copy="Transform your branding, by creating visual concepts to communicate ideas that inspire, inform, and captivate consumers. From logo design and animation to social media content creation, brochures and flyers, our team has you covered."
        cta={{
          label: "Book a FREE Consultation",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/images/graphic-design.webp"
        whatisitSection={[
          <WhatIsItSection1 />,
          <WhatIsItSection2 />,
          <WhatIsItSection3 />,
        ]}
        whyusSection
        faq={graphicDesignFAQ}
      />
    </Page>
  );
}
