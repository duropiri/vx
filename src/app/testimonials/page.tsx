import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/page";
import Body from "@/components/pages/testimonials/body";

export const metadata: Metadata = {
  ...baseMetadata,
  title:
    "Client Testimonials & Reviews | Virtual Xposure Real Estate Marketing",
  description:
    "Read what real estate professionals say about Virtual Xposure's marketing services. Our clients love our quick turnaround times, professional quality, and outstanding customer service. Join hundreds of satisfied realtors who trust us with their marketing needs.",
  keywords:
    "Virtual Xposure reviews, real estate marketing testimonials, realtor testimonials, property marketing reviews, real estate photography reviews, virtual staging testimonials, client feedback, real estate marketing success stories",
  openGraph: {
    ...baseMetadata.openGraph,
    title:
      "Client Testimonials & Reviews | Virtual Xposure Real Estate Marketing",
    description:
      "Read what real estate professionals say about Virtual Xposure's marketing services. Our clients love our quick turnaround times, professional quality, and outstanding customer service. Join hundreds of satisfied realtors who trust us with their marketing needs.",
  },
};

export default function Home() {
  return (
    <Page>
      <Body />
    </Page>
  );
}
