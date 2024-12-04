/* eslint-disable react/jsx-key */
import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import {
  FloorplansSection,
  PhotographySection,
  VirtualSection,
} from "./CaseStudiesClient";

export const metadata: Metadata = {
  ...baseMetadata,
  title:
    "Real Estate Marketing Case Studies | Success Stories | Virtual Xposure",
  description:
    "Explore our real estate marketing success stories. See how Virtual Xposure's professional photography, virtual staging, and innovative marketing solutions help agents achieve exceptional results for their listings.",
  keywords:
    "real estate case studies, real estate marketing examples, property marketing success, real estate photography portfolio, virtual staging examples, real estate marketing results, property listing success stories, real estate marketing portfolio",
  openGraph: {
    ...baseMetadata.openGraph,
    title:
      "Real Estate Marketing Case Studies | Success Stories | Virtual Xposure",
    description:
      "Explore our real estate marketing success stories. See how Virtual Xposure's professional photography, virtual staging, and innovative marketing solutions help agents achieve exceptional results for their listings.",
  },
};

const page = () => {
  return (
    <Page>
      <Body
        title="Real Estate Marketing Success Stories"
        copy="Discover how our comprehensive marketing solutions transform property listings into success stories. Browse through our portfolio of real-world examples showcasing the power of professional real estate marketing."
        cta={{
          label: "Start Your Success Story",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/assets/portfolio/images/interior/Virtual_Xposure_-_Interior_Image_-_(8).webp"
        whatisitSection={[
          <FloorplansSection />,
          <PhotographySection />,
          <VirtualSection />,
        ]}
      />
    </Page>
  );
};

export default page;
